// Build kroc-mobile.html — a self-contained production bundle of the mobile
// prototype (mirror of build-desktop.mjs).
//
// Takes the dev sources that "KROC Mobile v2.html" loads via Babel-standalone
// and produces a single HTML file with: CSS inlined, React 18.3.1 + ReactDOM
// bundled (reused from the previous bundle, version-pinned), and all JSX
// pre-compiled + minified (no CDN, no in-browser transpile).
//
// Run:  node build-mobile.mjs    (needs @babel/core, @babel/preset-react, terser)

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { transformSync } from '@babel/core';
import { minify } from 'terser';

const ROOT = process.argv[2] || join(dirname(fileURLToPath(import.meta.url)), 'mobile');
const read = (f) => readFileSync(join(ROOT, f), 'utf8');

// Dev entry (App glue lives in its last babel script) and sources, in the load
// order declared by that file.
const DEV = 'KROC Mobile v2.html';
const JSX_FILES = [
  'ios-frame.jsx',
  'tweaks-panel.jsx',
  'm-shared.jsx',
  'm-pages-a.jsx',
  'm-pages-b.jsx',
  'm-pages-new.jsx',
  'm-library.jsx',
];
const OUT = 'kroc-mobile.html';

// 1. Inline stylesheet.
const css = read('kroc-mobile.css');

// 2. Reuse the pinned React + ReactDOM production blobs from the existing bundle
//    (version 18.3.1, unchanged). Grab the first two complete <script> elements.
const prev = read(OUT);
const reactStart = prev.indexOf('<script>/**');
if (reactStart === -1) throw new Error('Could not locate React blob in ' + OUT);
let end = reactStart;
for (let i = 0; i < 2; i++) end = prev.indexOf('</script>', end + 1);
const reactBlob = prev.slice(reactStart, end + '</script>'.length);

// 3. Extract the App glue (JumpNav + App + render) from the dev entry's last
//    babel script.
const devHtml = read(DEV);
const glueMatches = [...devHtml.matchAll(/<script type="text\/babel"(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)];
if (!glueMatches.length) throw new Error('Could not locate App glue script in ' + DEV);
const glue = glueMatches[glueMatches.length - 1][1];

// 4. Compile every JSX source + the glue from JSX -> classic React.createElement.
const compile = (code, filename) =>
  transformSync(code, {
    filename,
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    compact: false,
  }).code;

const compiledParts = JSX_FILES.map((f) => compile(read(f), f));
compiledParts.push(compile(glue, DEV));
const appJs = compiledParts.join('\n');

// 5. Minify the combined application code.
const { code: appMin, error } = await minify(appJs, {
  compress: true,
  mangle: true,
  format: { comments: false },
});
if (error) throw error;

// 6. Assemble the final document.
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>KROC Centers — Mobile Prototype</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<!-- Production build: JSX pre-compiled, React 18.3.1 bundled, no CDN, no in-browser transpile -->
<style>
${css.trim()}
</style>
<style>html,body{margin:0;background:#1a1a1a}</style>
</head>
<body>
<div id="root"></div>
${reactBlob}
<script>${appMin}</script>
</body>
</html>
`;

writeFileSync(join(ROOT, OUT), html);
console.log(`Built ${OUT}: ${(html.length / 1024).toFixed(1)} KB (app ${(appMin.length / 1024).toFixed(1)} KB)`);

// Build kroc-desktop-prototype.html — a self-contained production bundle.
//
// Takes the dev sources that index.html loads via Babel-standalone and produces
// a single HTML file with: CSS inlined, React 18.3.1 + ReactDOM bundled (reused
// from the previous bundle, version-pinned), and all JSX pre-compiled + minified
// (no CDN, no in-browser transpile).
//
// Run:  node build-desktop.mjs    (needs @babel/core, @babel/preset-react, terser)

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { transformSync } from '@babel/core';
import { minify } from 'terser';

const ROOT = process.argv[2] || dirname(fileURLToPath(import.meta.url));
const read = (f) => readFileSync(join(ROOT, f), 'utf8');

// Sources compiled into the bundle, in load order (matches index.html).
const JSX_FILES = ['shared.jsx', 'blocks.jsx', 'meta.jsx', 'pages-a.jsx', 'pages-b.jsx', 'pages-new.jsx'];
const OUT = 'kroc-desktop-prototype.html';

// 1. Inline stylesheet.
const css = read('kroc.css');

// 2. Reuse the pinned React + ReactDOM production blobs from the existing bundle
//    (version 18.3.1, unchanged). Grab the first two complete <script> elements.
const prev = read(OUT);
const reactStart = prev.indexOf('<script>/**');
if (reactStart === -1) throw new Error('Could not locate React blob in ' + OUT);
let end = reactStart;
for (let i = 0; i < 2; i++) end = prev.indexOf('</script>', end + 1);
const reactBlob = prev.slice(reactStart, end + '</script>'.length);

// 3. Extract the App glue (JumpNav + App + render) from index.html's last babel script.
const indexHtml = read('index.html');
const glueMatch = indexHtml.match(/<script type="text\/babel" data-presets="react">([\s\S]*?)<\/script>/);
if (!glueMatch) throw new Error('Could not locate App glue script in index.html');

// 4. Compile every JSX source + the glue from JSX -> classic React.createElement calls.
const compile = (code, filename) =>
  transformSync(code, {
    filename,
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    compact: false,
  }).code;

const compiledParts = JSX_FILES.map((f) => compile(read(f), f));
compiledParts.push(compile(glueMatch[1], 'index.html'));
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
<title>KROC Centers — Desktop Prototype</title>
<meta name="viewport" content="width=1320"/>
<!-- Production build: JSX pre-compiled, React 18.3.1 bundled, no CDN, no in-browser transpile -->
<style>
${css.trim()}
</style>
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

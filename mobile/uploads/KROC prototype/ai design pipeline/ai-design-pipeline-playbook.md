# AI Design Pipeline Playbook — From Design System to Figma

> **What this is.** A reusable, project-agnostic playbook for directing AI through the *design-generation* half of a web project: turning a design system and an architecture proposal into a working HTML prototype, a mobile redesign, and a clean, token-driven Figma file. It is written as a **guide for the AI operator** — each stage states the goal, what to feed the AI, a ready-to-use **prompt template**, and how to validate the result.
>
> **How to use it.** Run the stages in order. Each produces a durable artifact that becomes the input contract for the next. Copy a stage's prompt template, replace the placeholders, and send it. Anything in `<…>` is a value you must fill in — a file path, a URL, a width, a project name (`<PROJECT>`).

---

## Scope

**This playbook covers (the AI's work):**

| # | Stage | The AI produces |
|---|---|---|
| ① | Extract the design system | A single design-system reference document |
| ② | Create the prototype brief | A self-contained, page-by-page build spec |
| ③ | Write the designer prompt | The cover-instruction handed to the design AI |
| ④ | Generate the HTML prototype | A high-fidelity desktop prototype (HTML/JSX) |
| ⑤ | Create the mobile version | A true mobile redesign of the prototype |
| ⑥ | Convert HTML → Figma | A clean, fully tokenized Figma file |

**You provide / handle yourself (out of scope here):**
- The **architecture proposal** — the list of pages, content models, and fields, **as a structured document the AI can read** (page list → content models → fields per model). Authoring it is out of scope here, but Stage ② cannot run without it; producing it can itself be an AI task on your side.
- **Reference screenshots / visual targets** — the look-and-feel you want the prototype to belong to.
- **Design-system source material** — a style guide and/or a live product the AI can read.
- Any **reconciliation between the prototype and the architecture** (keeping field lists in sync, updating the proposal) — a separate workstream, not part of this design pipeline.

```
INPUTS YOU PROVIDE                         THE AI PIPELINE (this playbook)
──────────────────                         ───────────────────────────────
Design-system sources ──►  ① Design-system doc ─┐
(style guide / live app)                        │
                                                ├─►  ② Prototype brief ─►  ③ Designer prompt
Architecture proposal ──────────────────────────┘                               │
(pages, content models)                                                         ▼
Reference screenshots ──────────────────────────────────────────►  ④ HTML prototype  (design AI)
                                                                                │
                                                                                ▼
                                                                   ⑤ Mobile redesign  (design AI + git)
                                                                                │
                                                                                ▼
                                                                   ⑥ Figma file       (Figma MCP)
```

### The two AIs

| Role | Where it runs | Stages |
|---|---|---|
| **Builder AI** (e.g. Claude Code) | Your IDE / terminal — reads files, writes docs, runs git, drives the Figma MCP. | ①②③ and ⑥ |
| **Design AI** (e.g. Claude on the web) | A design/artifact surface that generates shareable HTML/JSX prototypes. | ④ and ⑤ |

The handoff between them is **files in a repo**: the design AI emits HTML; you commit it; the builder AI reads, refines, and translates it into Figma.

> **Handoff mechanics (how files actually move).** The design AI emits its prototype as a *set* of files on its artifact surface — usually several HTML/JSX files plus a stylesheet, not a single page. Download or copy each file, **preserve the filenames and folder split**, and commit them to a repo location you control. When a later stage needs the design AI to *read* the repo back (Stage ⑤), push to a remote it can reach — a connected repository or a public URL — rather than pasting code into the chat. The builder AI (Stages ⑥) reads those same files from disk.

---

## Principles that apply to every stage

1. **Each stage outputs an artifact, and the artifact is the contract.** You never ask the AI to "design the product" in one shot. You ask for a *design-system doc*, then a *brief*, then *HTML*, then *Figma* — each reviewable and feeding the next.
2. **Ground every decision in one named source; forbid invention.** Tokens come from the design system, structure comes from the architecture, composition comes from the references. Tell the AI explicitly: *pull real values, do not invent or approximate.*
3. **"Act like a senior \<role\>."** The highest-leverage instruction in the whole pipeline — *senior designer*, *senior mobile UI/UX designer*, *senior Figma designer*. It shifts the AI from doing the literal minimum to doing what a professional would do.
4. **Verify in small units.** Check and build one page or one component at a time. Bulk "do everything / check everything" produces hand-waving; unit-by-unit produces real results.
5. **Validate visually at the end of each build loop.** Don't trust "done" — render or screenshot it and look.
6. **Steer long builds with short directives.** Set the direction once, in detail; then nudge with *"continue," "finish the component library first," "now the pages."*
7. **Reframe to get past refusals — in the documents, not the chat.** If the design AI balks because the task reads as copying an existing product or brand, restate the work as an original project and strip the framing that implies cloning. (See the box in Stage ③.)
8. **Keep one source of truth.** Name the canonical file out loud so the AI never edits the wrong copy. If you keep a separate deployed/preview copy of the prototype, declare which folder is canonical and re-sync the preview after every change — editing the source while viewing a stale preview is a common, time-wasting confusion.

---

## Stage ① — Extract the design system

**Goal:** one Markdown document that is the unambiguous, exhaustive answer to "what does every token and component look like, and when is each used." Everything downstream pulls from this.

**Inputs:** a style guide (a design-tool file, brand guidelines, or token export) and/or a live product the AI can inspect.

**Prompt template:**

```
Extract a complete design system from the sources below into a single Markdown
reference document.

Sources:
- Style guide (use whichever form matches your source):
  - Single source: <link>
  - Or, if topics live separately: color <link> | typography <link> |
    spacing <link> | elevation <link> | components <link>
- Live product: <URL> — inspect for any components or states the static guide omits.

For each of the following, capture the EXACT values and the usage rules:
- Color (surface/background, primary, secondary, semantic, text, overlays) — hex
  and any opacity values
- Typography — font families and weights, and the full type scale (size, weight,
  line-height per role)
- Spacing scale, border radii, shadows / elevation
- Buttons (base spec + every variant + when each is used)
- Form inputs, cards, navigation/header, footer, hero and section patterns

Rules:
- Pull real values only. Do NOT invent, round, or approximate tokens.
- Where the style guide and the live product disagree, capture BOTH and note it.
- Organize as a token reference followed by component specs.
- End with an "Application Guidelines" section that maps the system onto
  <PROJECT> (color mapping, component patterns, typography rules, spacing rhythm).

This document is the single source of truth for the prototype, so make it
exhaustive and unambiguous.
```

**What good looks like:** a doc structured as *brand → color → typography → spacing → radius → shadows → buttons → inputs → cards → nav → footer → hero → section patterns → token reference → application guidelines.* Literal values everywhere (e.g. `#1A1A1A`, `16px`, `weight 400`), and a usage note for every variant.

**Validate:** spot-check a handful of tokens against the source; confirm the variants you care about (e.g. alert/banner, primary vs. secondary CTA) are present.

---

## Stage ② — Create the prototype brief

**Goal:** a self-contained spec where, for **every page and every reusable block**, the AI knows the layout, the visual rules, and which content-model fields map to which on-screen elements. This is the document the design AI will actually build from.

**Inputs:** the design-system doc (Stage ①), the architecture proposal (yours), and reference screenshots.

**Prompt template:**

```
Write a high-fidelity prototype brief using these three inputs:
- Design system: <design-system>
- Architecture: <architecture proposal> (the authoritative list of pages,
  content models, and fields)
- Visual references: the screenshots in <folder>

Structure the brief as:
1. Goal & scope (target viewport width, fidelity, what "done" means).
2. Design Essence — distill the reference screenshots into reusable patterns:
   the universal page rhythm, hero variants, card conventions, a NUMBERED catalog
   of section types, CTA color conventions, and the typography rhythm.
3. Visual Rules — "no exceptions" — a table of literal token values pulled from
   the design system (page background, card radius/border, button radius/padding,
   primary vs. secondary CTA colors, input styling, section spacing, max width).
4. Pages — one entry per page in the architecture. For each: a visual reference
   (which screenshot to mimic), a numbered anatomy of its sections top to bottom,
   and the block/schema references that name where each section's content comes
   from.
5. Reusable blocks/components — specify each ONCE, with its fields and variants.
6. Composition rules and annotation requirements.
7. A quick-start self-verification checklist the design AI runs against each screen
   before considering it done.

Constraints:
- Every page must trace to a content model in the architecture.
- Every visual value must trace to the design system — no invented styling.
- Do not import visual influences from outside the provided system.
```

**Then verify coverage** (don't skip this):

```
Cross-check the brief against the architecture proposal. List every page, block,
and reusable component named in the architecture, and mark whether each is fully
represented in the brief. Flag anything missing or under-specified.
```

> **No reference screenshots?** On a greenfield project, derive the Design Essence from the design system's own hero/section/card patterns, and state that composition is inferred from the system rather than from references.

**What good looks like:** a "no exceptions" rules table with literal values; per-page entries with *visual reference + numbered anatomy + block references*; each block specified once. The brief should be precise enough that two different designers would produce the same layout from it.

---

## Stage ③ — Write the designer prompt

**Goal:** the concise cover-instruction handed to the design AI. It orders the resources, fixes the hard rules, and tells the AI exactly how to interpret the references.

**Inputs:** the prototype brief (Stage ②) and the design-system doc (Stage ①).

**Prompt template:**

```
Write the instruction that will be given to the design AI to build this prototype
from <brief> and <design-system>. It must:
- Frame the work as a fresh, original design project.
- List the resources to read, in priority order.
- State the non-negotiable visual rules as a compact table.
- Map each page to the specific reference it should follow.
- Specify what the design AI must flag as an open question instead of inventing —
  anything the architecture leaves unspecified.
- Conclude with an explicit tie-breaker: when a choice is ambiguous, where to look,
  in order (1: the design system, 2: the references, 3: the brief), and what
  default to fall back on if all three are silent.

Keep it directive and concise — it is a cover sheet, not a second brief.
```

> ### Getting past a refusal
> A design AI will sometimes refuse or stall when the task reads as *re-skinning an existing product* or *cloning a brand*. Don't argue in chat — **change the framing in the documents:**
> - Restate the work as an **original design project**, not a conversion of someone else's asset ("there is no prior design to inherit from").
> - **Remove references that imply cloning a third party.** If a design language is legitimately yours to use, present it as the project's own system.
> - Put the **clean, self-contained inputs in their own folder** so the design AI receives only what it needs, with no confusing provenance.

**Validate:** the cover-instruction names every resource in priority order, its hard-rules table matches the brief's, every page maps to a reference, and the tie-breaker ends with a fallback. It should be readable in under a minute.

---

## Stage ④ — Generate the HTML prototype

**Goal:** a high-fidelity, working HTML/JSX prototype of every page and block — the thing you'll later translate into Figma.

**Who:** the **design AI**. Hand it the self-contained package (brief + design system + references).

**Prompt template (to the design AI):**

```
You are designing <PROJECT>. Build a high-fidelity <width>px prototype of every
page and reusable block specified in <brief>, styled entirely with
<design-system>. Read the brief end-to-end before you start.

Requirements:
- Real layouts, real component states, real grid alignment, and realistic
  placeholder content — not lorem wireframes.
- Follow the brief's "Visual Rules" table exactly; when a choice is ambiguous,
  use the brief's tie-breaker (or, if none is stated, defer to the design system,
  then the references, in that order).
- Organize the deliverable as: a cover, a component/block library (each block
  shown once), then every page in order.
- Use placeholder icons/images where real assets aren't available; keep aspect
  ratios correct.
```

**Iterating the prototype** — the first generation is never final. Refine with **specific, single-purpose** instructions, not vague ones:
- *Name the element and the change.* "The `<section>` reads as visually flat. Increase its hierarchy and rebalance the cards toward a stronger image-to-text ratio."
- *Borrow inspiration with a guardrail.* "Treat the attached reference as inspiration only: improve upon it rather than reproduce it, and keep all styling consistent with the design system."
- *Keep every component in use.* "Verify that `<component>` appears on at least one real page; if it does not, place it where it naturally belongs in the page flow."

**Export & store:** download the HTML/JSX from the design artifact (or copy it from the share link) and **commit it into a repo.** A stable repo location is what makes Stages ⑤ and ⑥ possible.

**Validate:** view the prototype on the design AI's share/artifact surface (or a local preview if the export is runnable) and walk every page, checking each block renders and every visual rule from the brief holds. If you can't render it, review the exported markup against the brief's visual-rules table block-by-block.

---

## Stage ⑤ — Create the mobile version

**Goal:** a genuine **mobile redesign**, not a responsive shrink of the desktop layout.

**The method that makes this work:**
1. **Commit the finished desktop prototype to a git repo** so it has a stable, readable home.
2. **Give the design AI git access to that repo** — hand it the *real source*, not screenshots or pasted snippets, so the mobile version inherits the actual component structure and token names.
3. **Prompt it to redesign for mobile as a senior mobile UI/UX designer** — explicitly *not* "make it responsive."

**Prompt template (to the design AI, with git access):**

```
You have git access to the desktop prototype in <repo path / files>. Produce a
mobile version of the ENTIRE prototype — every page and every block.

This is a redesign, not a responsive pass. Keep the design tokens and brand
identity identical, but rethink layout, density, and interaction for a <WIDTH>px
phone (typical: 390–402px) used one-handed, applying senior mobile UI/UX practice:
- Re-scale the type ramp and spacing for small screens.
- Convert multi-column grids to stacked or two-up layouts.
- Turn featured rows into horizontal "peek" carousels.
- Use full-width primary actions and a sticky primary CTA where appropriate.
- Make long lists collapsible (e.g. an accordion that keeps one item open at a
  time).
- Replace the desktop top-nav with proper mobile navigation — a slide-up drawer,
  a hamburger overlay, and/or a bottom tab bar.
- Present each screen inside a realistic device frame.

Hard requirement: preserve full content parity with the desktop equivalent. Mobile
must not drop any field, block, or page — only re-present them for the smaller
screen.

Deliver the same page set plus a mobile component/block library, as exported HTML.
```

**Why "senior mobile UI/UX, not just responsive" matters:** a responsive pass only reflows the desktop grid. The senior-designer framing is what produces real mobile decisions — device-appropriate navigation, touch-first density, peek carousels, sticky actions, collapsible content — while the *brand* (tokens, color, type identity) stays identical to desktop.

**Validate:** walk every mobile screen; confirm parity (no missing content vs. desktop) and that the navigation and interactions are genuinely mobile-native.

---

## Stage ⑥ — Convert the HTML prototype to Figma

**Goal:** a clean, presentation-ready Figma file with a real token system, a component library, and every page — built from the HTML prototype.

**Who:** the **builder AI**, driving the **Figma MCP**, pointed at an empty Figma file.

**Prerequisites:** a Figma MCP connection authenticated to your account, and an empty Figma design file you've created and whose URL you can paste. Confirm the builder AI can reach the file (a read/screenshot round-trip) before issuing the build prompt.

**Setup prompt:**

```
Connect to the Figma file at <URL> (it is empty). You will act as a senior Figma
designer building a presentation-ready, fully tokenized file. The source of truth
is the HTML/CSS prototype — the desktop set at <desktop prototype path> and the
mobile set at <mobile prototype path>. Analyze the desktop prototype first.
```

**Build prompt (the sequence is the whole point):**

```
Build the Figma file in this strict order. Do not skip ahead.

1. FOUNDATIONS first:
   - Variable collections for color (primitives, then semantic aliases like
     surface/primary/text/border), spacing, and radius — matching the
     prototype's tokens exactly.
   - Text styles (the full type ramp) and effect styles (shadows/elevation).
2. COMPONENT LIBRARY next:
   - Every primitive and block as a real component, with variant sets for its
     states/types.
   - Bind EVERY property to the variables above — no hardcoded colors, paddings,
     or radii.
3. ONE FLAGSHIP PAGE end-to-end, assembled entirely from component instances.
   Then pause for review before scaling.
4. THE REMAINING DESKTOP PAGES, once the flagship is approved.
5. THE MOBILE SET, on its own page, once the desktop pages are approved: analyze
   the mobile prototype at <mobile prototype path>, reuse the same foundations
   (tokens/text/effect styles), then build the mobile components and pages.

Lay everything out neatly: separate primitives from blocks, align consistently,
place mobile components beside their desktop equivalents, and label sections.
Validate each component and each page with a screenshot before moving on.
```

**Mobile-in-Figma directive** (apply to step 5 above):

```
For the mobile pages, render each screen as its FULL scroll height inside a device
frame — do not clip to a single viewport. Keep horizontal carousels clipped so
they read as authentic mobile "peek." Arrange the mobile components beside their
desktop equivalents on the components page.
```

> **Technical notes for the builder AI** (the gotchas that otherwise cost time when driving the Figma plugin API):
> - **Bind variables; never hardcode.** Setting a bound color returns a *new* paint object — reassign it. Bind padding/radius to variables, don't type literals.
> - **Re-apply auto-layout sizing after any resize** — a resize resets sizing modes to fixed, which makes containers clip their own contents. Set hug/fill modes *after* resizing.
> - **Build proper variant sets** with clear property names (e.g. `Type=…`, `State=…`, `Layout=…`).
> - **Use real icons and assets** (inline SVG for icons; upload real images and apply them as fills) rather than placeholders, once the structure is sound.
> - **Group with headings + dividers**, not heavyweight container/section nodes, for a large component board — they're more stable.
> - **Validate by screenshot** after each component and page; capture tall pages section-by-section.

**Validate:** screenshot every component and page; confirm tokens are bound (not hardcoded), variant sets are complete, and the file is organized cleanly enough to present.

---

## Appendix — Quick prompt index

> Index reminders only — always expand using the full Stage template above. The one-liners omit the constraints and validation that make each stage reliable; don't send them as finished prompts.

| Stage | One-line summary (not runnable alone — expand with the full template above) |
|---|---|
| ① Design system | "Extract a complete design system from `<sources>` into one Markdown doc — exact values, usage rules, no invented tokens." |
| ② Brief | "Write a prototype brief fusing `<design-system>` + `<architecture>` + `<references>`: design essence, no-exceptions visual rules, per-page anatomy, blocks once, a self-verify checklist." |
| ② Verify | "Cross-check the brief vs. the architecture — flag any missing page/block/component." |
| ③ Designer prompt | "Write the design AI's cover-instruction: fresh project, ordered resources, hard-rules table, per-page reference map, what to flag, a tie-breaker." |
| ④ HTML | "Build a high-fidelity `<width>`px prototype of every page/block from `<brief>`, styled with `<design-system>`; cover + library + pages, real content, follow the rules." |
| ⑤ Mobile | "With git access to `<repo>`, redesign the whole prototype for mobile as a senior mobile UI/UX designer — not responsive — same tokens, full content parity, device frame." |
| ⑥ Figma | "Empty file `<URL>`: act as a senior Figma designer. Foundations → component library (all bound) → one flagship page → all pages. Validate by screenshot." |

---

### One-paragraph summary

Direct the AI through a relay of artifacts: extract a design-system reference grounded in a real source, fuse it with the architecture and visual references into a precise prototype brief, distill that into a concise designer prompt framed as an original project, hand it to a design AI to generate a high-fidelity HTML prototype, redesign that prototype for mobile by giving the AI git access to the desktop source and asking it to *work like a senior mobile designer rather than make it responsive*, and finally translate the HTML into a clean, fully tokenized Figma file by telling the AI to *act like a senior Figma designer* and building in strict order — foundations, components, one flagship page, then everything. The craft is in the framing ("act like a senior \<role\>"), the source-anchoring (no invented values), the small-unit verification, and the visual validation at each step.

# KROC Centers Prototype Design Brief
## High-fidelity prototype using the KROC design system

**For:** AI Designer (prototype generation)
**Version:** 1.0
**Scope:** Desktop (≥1280px). Mobile is out of scope for this pass.
**Fidelity:** High-fidelity. Apply the full KROC color palette, typography, spacing, shadows, and component patterns. Show real placeholder content, real iconography, real grid alignment.
**Output:** A set of polished page prototypes for the KROC Centers website.

---

## 1. Goal

Produce high-fidelity prototype designs for the new **KROC Centers** website using the KROC web design system (`design-system.md`). KROC Centers (formally The Ray and Joan Kroc Corps Community Centers) are recreation and community centers spread across four US territories — Central, Eastern, Southern, Western.

Every page must be:
1. **Visually consistent** with the KROC design system in `design-system.md`.
2. **Structurally faithful** to the content architecture defined in `architecture-proposal.md`.
3. **Generic enough** to drop into any of the four territories — placeholder content only, no center-specific imagery or city names hardcoded into layouts.

---

## 2. Required Resources

| Resource | Purpose |
|---|---|
| `design-system.md` | **Primary design system.** Authoritative source for all colors, typography, spacing, radii, shadows, button styles, card patterns, header/footer specs, form styling. Adopt this **completely**. |
| `architecture-proposal.md` | Authoritative source for content models, page schemas, content fields, and territory-specific requirements. Each page must be answerable to a content model in this doc. |
| `/visual-references/` | **Visual references** for page rhythm, hero patterns, card treatments, section composition, and the universal Connect With Us footer pattern. Mimic these compositions rather than re-inventing them. |

---

## 3. Design Essence from Visual References

Before designing any new page, internalize these patterns from the reference screenshots. Every KROC page must inherit from this visual language.

### 3.1 Universal page rhythm (every page follows this)

```
[Site Alert Banner — slim, sticky, above header, color-coded]
[Floating Header — white pill with rounded-bottom-5 corners, fixed position]
[Hero Section — full-bleed image with overlay text + optional CTAs]
[Body content — alternating white card sections on the grey #D9D9D9 page background]
[Connect With Us footer — KROC logo + dark-overlay image + "Contact Us" CTA + Newsletter + Quick links]
```

### 3.2 Hero variants observed

- **Image hero with overlay text** (Volunteer, Events, Service Detail): Full-bleed photo with `rgba(28,27,31,0.5)` overlay, white headline left-aligned, optional 1–2 CTAs underneath
- **Compact hero with return link** (Story Detail, Event Detail): Red `← Return` link top-left, title large, share icons top-right
- **Centered headline-only hero** (Stories landing, Programs landing): Title centered, body below, 1–2 CTAs centered

### 3.3 Card conventions

- **Story / Article card:** 16:9 image with category pill chip top-left (`bg-light` rounded-pill with icon), title bold, date + author small grey text below image, navy `View Article` button at bottom
- **Event card:** 16:9 image, title, date `August 9th, 2024 | 6PM – 8PM` body text, address as red underlined link, navy `View Event` button
- **Volunteer Opportunity card:** White card, "Volunteer Opportunity Title" + location subhead + 3-line body + navy `View Opportunity` button
- **Service / Category card** (4-up grid): Icon top-left, title, 3-line body, navy `Learn More` button
- **Info card** (4-up grid): Icon top-left, title, body, navy CTA at bottom

### 3.4 Section types in active use (catalog)

1. **Hero with overlay text + dual CTAs** (white outline + red solid)
2. **2-column intro:** Big title left (heading-md), WYSIWYG body right
3. **Featured card-with-headline:** 3:2 image left, headline + body + navy CTA right (or vice versa)
4. **3-up stats row:** Massive headline number (heading-xl 60–80px, navy), small label text below — light cards with subtle separators
5. **Highlight image + content card:** Big image left or right with grey placeholder, white card with title + body + 1 CTA
6. **3-up content grid with "View All" link:** Section title left, "View All →" link right, then 3-up cards below
7. **4-up icon card grid:** Icon top, title, 3-line body, navy CTA — for services, programs, info
8. **Tag pill row:** Rounded-pill chips with `bg-area` background, used for filters and article metadata
9. **Pagination:** Numbered pills `1 2 3 4 5...` with arrow next button, right-aligned
10. **Connect With Us footer block** (universal): KROC logo top-left of dark photo, white "Connect With Us" heading, white "Having Issues? + Contact Us" pill, newsletter card with red active state pill nav, social icons, copyright

### 3.5 CTA color conventions

| Where | Variant | Used For |
|---|---|---|
| In a hero on a dark/photo background | `btn-light` (white) | Primary "Service Information", "View All" |
| In a hero on a dark/photo background | `btn-primary` (red) | "Donate", "Register" |
| In a card body | `btn-secondary` (navy) | "View Article", "View Event", "Learn More", "View Opportunity" |
| In the header utility area | `btn-info` (blue-grey) | "Find Help" |
| In the header rightmost | `btn-primary` (red) | "Donate" |
| In a newsletter signup card | `btn-secondary` (navy) | "Sign Up" |
| In the footer connect block | `btn-primary` (red) | "Contact Us" |
| Filter/category tabs (active state) | red pill `#EF3E42` | Active tab indicator |

### 3.6 Typography rhythm

- **Page hero title** = `heading-md` or larger (34–48px), Creato Display, left-aligned, on dark = white
- **Section title** = `heading-md` (34px), Creato Display, left-aligned, weight 400 — never bold
- **Card title** = `title-xl` (24px) for primary cards, `title-lg` (20px) for compact cards
- **Card metadata** (date, author, address) = `body-md` (14px), grey `#575757`
- **Card body** = `body-md` or `body-sm`, dark `#1C1B1F`, truncated to 2–3 lines (`text-truncate-2/3`)
- **Hero overlay body** = `body-lg` or `body-xl`, white
- **Stats numbers** = `heading-xl` to `callout-xl` (60–80px), navy `#002056`

---

## 4. Visual Design Rules (must adopt — no exceptions)

Pull all values from `design-system.md`. Mandatory:

### Color
- **Page background:** `#D9D9D9` (surface-background) — NOT white
- **Card / panel background:** `#FFFFFF`
- **Section alt background:** `#EFEFEF` (surface-area)
- **Primary CTAs:** `btn-primary` red `#EF3E42` → hover `#C5000E`
- **Secondary CTAs:** `btn-secondary` navy `#002056` → hover `#61769C`
- **Body text:** `#1C1B1F` (dark-100)
- **Muted/metadata text:** `#575757` (dark)
- **Body links:** Navy text `#022056` with red underline `#EF3E42`

### Typography
- **Headings + body:** `Creato Display` (sans-serif). Weight always 400 unless explicitly emphasized (`body-md/bold` 500).
- **Optional serif accent:** `Adobe Jenson Pro` for hero overlay text or editorial pull quotes
- **Use the type scale tokens** (`callout-xl`, `heading-xl`/`lg`/`md`/`sm`, `title-xl`/`lg`, `body-xl`/`lg`/`md`/`sm`, `caption`)

### Shape
- **Cards:** `border-radius: 20px` (`rounded-5`), `border: 0`, `overflow: hidden`
- **Dropdowns:** `border-radius: 24px` (`rounded-6`)
- **Buttons:** `border-radius: 8px`, `padding: 16px 24px` default or `12px 20px` small
- **Inputs:** Grey `#EFEFEF` background, no visible border, `padding: 12px 20px`, `border-radius: 6px` default
- **Header:** Floats with `rounded-bottom-lg-5` (20px bottom corners), `position: fixed`, `my-lg-5` margin

### Spacing rhythm (4px scale)
- **Section vertical padding:** `py-12` (48px) to `py-16` (64px)
- **Card body padding:** `px-6 pt-6` (24px)
- **Section internal padding:** `px-8` (32px) on desktop
- **Card grid gutters:** `g-3` (12px) to `g-4` (16px)
- **Main content top margin:** `12rem` (192px) to clear the fixed header

### Shadow
- **Card shadow (subtle):** `0 0.125rem 0.25rem rgba(0,0,0,.075)`
- **Header shadow:** `0 4px 4px -1px rgba(36,104,147,0.04)`
- **Selected/active card:** `0 9px 20px 0 rgba(28,27,31,0.5)`
- **Image scrim (universal on card images):** `linear-gradient(360deg, rgba(28,27,31,0.5) 0%, rgba(28,27,31,0.1) 100%)`

---

## 5. Architectural problems each prototype must solve

The Architecture Proposal identifies specific failures of the current KROC sites. Each prototype page must address the relevant items:

| Problem (from Architecture Proposal) | Design implication for this prototype |
|---|---|
| Mobile alert banners block screen, don't persist on scroll | **Alert Banner** must be slim, sticky to top of viewport, dismissible but persistent, sit above the floating header. Use `alert-warning` (`#F2AB53`) or `alert-primary-200` (red tint) per content editor's color choice |
| Top-level parent menu items don't appear clickable | Parent nav items must have an underline-on-hover affordance + separate chevron for dropdown — visual signal that the label itself is a clickable landing page |
| Navigation overload from seasonal links | Provide a `seasonal` slot in the nav that's visually distinct (e.g., red pill background or color dot) so it can be auto-hidden by date |
| Rotating hero sliders are ineffective (Western) | Default hero is **static + stacked**, not a carousel. Support video as a hero element. Support "quick-action card" rows below the hero |
| Two competing calendar systems confuse members (Eastern) | Class cards must visually differentiate **Drop-In** (filled pill chip badge) vs. **Roster/Registered** (outlined pill chip badge) |
| Direct deep-link registrations bypass CRM | Class detail primary CTA goes to `Deep Link URL`. If empty, fall back to category landing page. Show both states |
| Canva embeds for schedules (Southern) | **External Embed block** with 3:4 portrait frame for Canva, 16:9 for video, 9:16 for TikTok |
| Sunday hours confusion (Southern) | Hours module renders multi-state rows: "Sunday: Closed for recreation · 10 AM–Noon for Church" — two-line cells |
| Tourism map components (Southern) | Homepage accommodates an optional map block |
| Password-protected pages (Southern) | Informational page includes a "locked" variant with a password gate (lock icon, prompt, password input, submit) |
| Dynamic Programs feed (Western) | All Programs page is a feed of categories pulled from CMS, not a static directory |
| Custom KROC icon library | Use a placeholder "kroc-icon" rectangle in cards where icons should appear |

---

## 6. Pages to Prototype

For each page, deliver: **(a)** desktop layout at 1280px width, **(b)** annotations naming each block used (matching the schema name from the Architecture Proposal), **(c)** notes on which content fields from the proposal map to which on-page elements.

Every page includes the **Alert Banner slot**, **Site Header**, **Connect With Us footer** — these are reusable blocks (Section 7), prototype them once and reference them.

### 6.0 Data Backbone — Kroc Location Instance `[kroc_location]`

> Not a page — a data model that drives every page on a given center's site.

Every Kroc Center is a `[kroc_location]` instance (a website/content repository). Its fields populate the Connect With Us footer, the location stamp in the header, the contact info on Contact Us, and the integration IDs that fetch dynamic data:

| Field | Type | Notes |
|---|---|---|
| Facility Name | Text | Displays in header location stamp + footer |
| TractionRec / ClubAuto ID | Toggle | Drives Dynamic Price + Deep Link URL API calls |
| General Hours | Text | Displays in header + Connect With Us footer + Contact Us |
| Address | Text | Footer + Contact Us card |
| Phone | Text | Header utility + Contact Us card + footer |
| Email | Text | Contact Us card + footer |

Annotate any page element that pulls from this instance with `← from [kroc_location]`. The footer is the most-impacted block (see 7.3).

### 6.1 Homepage `[automated + hybrid]`

**Visual reference:** `/visual-references/01-homepage-reference.png`

**Anatomy:**
1. Alert Banner slot (collapsed by default; show one variant with active alert)
2. Floating Header (white, rounded-bottom-5, fixed)
3. **Hero** — Full-bleed image (`aspect-ratio: 3/1`, `brightness(0.85)`, gradient backdrop, white headline + body, 2 CTAs: white outline + red solid). Show **3 variants** as separate frames: (a) photo hero, (b) video hero, (c) static stacked hero with quick-action card row underneath
4. **Find a Location** band — Title + body left, location card with sample location name + `Visit National Site | Find a Thrift Store` link, map embed showing dotted location pins (US map style)
5. **How We Serve** — Section title + "View All →" link, image-led card (gray placeholder with KROC logo) + 4-up icon card row underneath (Recreation, Programs, Community, Spiritual) with navy `Learn More` buttons
6. **Our Impact** — Big stat card (KROC logo + body) with "43.3 Million" headline + body text, navy `Learn More` CTA right side
7. **News** — Section title + filter pills row, featured story card (16:9 image-left + content-right with red category pill + title + body) plus 3-up smaller story cards in carousel/grid
8. **External Embed slot** (optional, for Canva monthly schedule, Southern territory)
9. **Optional map block** (Southern territory tourism)
10. **Optional Blog-as-Aggregator strip** (Central — Grand Rapids pattern)
11. **Connect With Us footer**

**Block references:**
- Hero — custom block
- `[featured_pages]` for the 3-up feature row
- `[site_alert]` dataset → Alert Banner
- `[featured_stories]` for the News section
- `[external_embed]` for the schedule
- `[custom_navigation]` for the header

### 6.2 All Programs `/:programs/` `[hybrid]`

**Visual reference:** Combine the "How We Serve" grid from `01-homepage-reference.png` with the layout rhythm of `02-stories-list-reference.png`

**Anatomy:**
1. Alert Banner slot → Header
2. **Hero** — Centered title "Programs" + intro body, 1–2 CTAs centered
3. **Intro band** — "What types of classes are you interested in?" 2-col title left + body right
4. **Category grid** — 4-up grid of program category cards (autogenerated from `[programs_categories]`). Each card: kroc-icon placeholder top, category name (title-xl), 1-line description, navy `View Category` button. Show empty state (3 categories) and populated state (9 categories wrapping to 2+ rows)
5. **Registration deep-link CTA section** — Navy `#002056` full-bleed panel with image left, white headline + body + outline white CTA right (variant of section type 3.4.5)
6. **Connect With Us footer**

**Block references:**
- `[all_programs]` (Page Header Title + Subheader)
- `[programs_categories]` for the auto-generated grid

### 6.3 Program Category `/:programs/:category/` `[pageset, fixed]`

**Visual reference:** `/visual-references/06-program-detail-reference.jpg` — adopt the rhythm exactly

**Anatomy:**
1. Alert Banner → Header
2. **Hero** — Image with overlay, category name as title, optional `Service Information` + `Donate` dual CTA buttons
3. **2-column intro** — "Location + Service Information" title-stack left, WYSIWYG body right
4. **Continuous/Drop-In pill toggle row** — `program_type` filter pills (active = red bg, inactive = grey bg)
5. **Class detail blocks** — Stack of class cards (one per `[classes]` entry in this category): image-left + content-right with class type chip (Drop-In or Roster), title, body, schedule, navy `Register Now` CTA
6. **Optional staff/instructor profile card** — Square headshot + name + bio + contact
7. **Optional Canva embed for schedule** — 3:4 portrait External Embed
8. **Optional partner logo strip** — Horizontal logo lockup row
9. **Optional schedule grid embed** — Full-width iframe (TractionRec/UPace 16:9 calendar)
10. **Stats row** — 3-up big number stats (heading-xl 60px navy + small label, mirror the "1 in 30" pattern in the reference)
11. **"Help By Donating" block** — Image left + white card with title + body + red `Donate` CTA right
12. **Featured Stories carousel** — 3-up story cards with category chip
13. **Other Services search + grid** — Search input + "Search Services" red CTA, then 4-up icon cards
14. **Connect With Us footer**

**Block references:**
- `[programs_categories]` (Category Name, Program Type, Icon, Deep Link URL, Dynamic Price)
- `[classes]` for each child class entry
- `[external_embed]` for Canva
- `[featured_stories]`
- People Block (informal — staff/instructor card)

### 6.4 Class Detail `/:programs/:category/:class/` `[pageset, hybrid]`

**Visual reference:** `/visual-references/05-event-detail-reference.jpg` — adopt the compact hero + 2-col sidebar/body pattern

**Anatomy:**
1. Alert → Header
2. **Breadcrumb** — `Programs › Category › Class` with red `←` icon
3. **Compact hero** — Class title (heading-md) + class type chip (Drop-In or Roster, rounded-pill), share icons top-right
4. **Hero image** — 16:9 full-width
5. **2-column body**
   - **Left rail (sidebar):** Date/Time, Price (with loading skeleton from Remote API), Location with map embed, Instructor, 2 buttons: navy `Agenda` + red `Register Here`
   - **Right body:** "About The Class" heading + WYSIWYG description, "Contact" with phone+email red links
6. **Optional FAQs block** (accordion list — `[faqs]`)
7. **Optional image gallery** (3-col grid with lightbox affordance — `[image_gallery]`)
8. **Other Classes** — 3-up grid of related class cards from same category
9. **Connect With Us footer**

**CTA logic:** Primary CTA `Register Now` → `Deep Link URL` field if set, else falls back to category page. Show both states as variants.
**Loading state:** Price field shows skeleton placeholder (grey shimmer block) until API resolves.
**Template type:** Hybrid — editors can drag any block (image gallery, FAQs, external embed, featured classes) into the freestyle body region below the fixed sidebar/content split. Show drag-handle annotations on the optional blocks to indicate this affordance.

**Block references:**
- `[classes]` (Class Name, Program Category, Class Type, Dynamic Price, Deep Link URL, Icon, Program Schedule)
- `[faqs]`
- `[image_gallery]`
- `[featured_classes]` for the "Other Classes" row

### 6.5 Informational Page `/:page_slug/` `[pageset, freestyle]`

Freestyle = drag-and-drop. Prototype **two example compositions** to demonstrate the canvas works:

**Variant A — "About / The Kroc Center Story"**
1. Alert → Header
2. Hero — image with overlay text "About Us" + optional caption strip below
3. Red full-bleed mission band — heading-lg white centered + body white centered (uses `#EF3E42` background, full viewport width, `py-19` 96px padding)
4. Video embed with caption (`[external_embed]` YouTube 16:9)
5. Centered title + body section (max-width 800px centered)
6. Second video embed
7. Centered title + body
8. Connect With Us footer

**Variant B — "Travel Team" (password-protected variant)**
1. Alert → Header
2. **Password gate screen** — Centered card on grey page bg: lock icon (Material Symbols), heading-sm "This page requires a password", form input (grey `#EFEFEF` bg) with placeholder "Enter password", red `Submit` button, body text below explaining how to request access
3. On submit (success state) → reveals freestyle content area with all blocks available

Annotate clearly: **any block from Section 7 can be dropped into this template.** Show drag handle indicators in the annotations.

**Block references:**
- `[informational_pages]` (Page Name, Page Content WYSIWYG, Access Password)

### 6.6 All Stories `/:stories/` `[single page, hybrid]`

**Visual reference:** `/visual-references/02-stories-list-reference.png`

**Anatomy:**
1. Alert → Header
2. **Hero** — Centered title "Stories" + subhead, dual CTAs: white outline `Sign Up` + red solid `Donate`
3. **Featured stories** — 3-up cards (16:9 image with category pill, title, date, byline, navy `Read Article` CTA)
4. **Tag filter chips row** — Sourced from `[tags]` model, rounded-pill chips, active state = red pill
5. **Story feed grid** — 3-up cards with pagination at bottom (numbered pills 1 2 3 4 5... + arrow next)
6. **Empty state variant** — "No stories yet for this location" centered message with KROC icon and red `View National Stories` CTA
7. Connect With Us footer

**Block references:**
- `[all_stories]` (Header Title, Subheader)
- `[featured_stories]` for the top row
- `[tags]` for filter chips
- `[stories]` for the feed

### 6.7 Story Detail `/:stories/:page_url/` `[pageset, fixed]`

**Visual reference:** `/visual-references/03-story-detail-reference.png` — adopt the rhythm exactly

**Anatomy:**
1. Alert → Header
2. **Compact hero** — Red `← Return` link top-left, "Story Title" (heading-md) + "Share Story:" with social icons (Facebook, X, LinkedIn, Instagram) top-right
3. **Hero image** — 16:9 full-width with `rounded-5` (20px) corners
4. **2-column body**
   - **Left rail (sticky):** Date, Author, Location (with red icon `📍 [Location Name]`), 2 buttons: navy `Agenda` + navy `Agenda`
   - **Right body:** "Subheader" (heading-sm) + Story Body WYSIWYG (max-width ~700px). **The WYSIWYG editor includes a "button" option that renders inline links as styled pill buttons** — show one example: inline navy `btn-secondary` pill embedded in a paragraph, plus one example: outline red `btn-outline-primary-200` pill
5. **Tag pills row** — Rounded-pill chips at bottom of body (`bg-area`, dark text), tags pulled from `Article Tag` + `Hashtag` fields
6. **Donation CTA section** — Full-width band (or inline card) with red `Donate` CTA, uses `Donation Override / Link` if present, else location default
7. **"External Article" callout** — If `External Article URL` is set, show banner: "This article was originally published by [external source]" + prominent red `Read on [external site]` CTA
8. **Recent Stories** — 3-up cards (16:9, category pill, title, date, byline, navy `Read Article` CTA), pagination dots at bottom right
9. **Connect With Us footer**

**External article variant:** Instead of showing the full body, show: title + hero image + short excerpt + prominent `Read on [external site]` CTA only.

**Block references:**
- `[stories]` (Title, Story Image, Story Date, Story Body, Donation Override, Article Tag, Hashtag, Related Event, Related Program Category, External Article)

### 6.8 All Tags `/:tags/` `[single page, hybrid]`

**Anatomy:**
1. Alert → Header
2. **Hero** — Centered title "All Tags" + body explaining what tags do
3. **Alphabetical or category-grouped grid** — 4-up tag cards. Each card: tag name (title-xl), count of items pill chip (e.g., `12 items`), 1-line description, navy `View Tag` button
4. Connect With Us footer

**Tag card click → Tag Detail page**

**Block references:**
- `[all_tags]` (Name, Description)
- `[tags]` for each card

### 6.9 Tag Detail `/:tags/:tag_url/` `[pageset, automated]`

**Anatomy:**
1. Alert → Header
2. **Hero** — Tag name as title + description as body
3. **Mixed feed** — Grid of stories AND events tagged with this tag, sorted by date. Each card has a small badge top-left indicating type — Story (red pill) or Event (navy pill). Apply Story Card pattern (3.3) or Event Card pattern (3.3) depending on type
4. Connect With Us footer

**Tag source:** Tags are configured as **wildcard pages fed from National** — design must accept tag data from a national feed (not local CMS authoring). The local Tag Detail page is autogenerated based on local stories/events that reference the national tag.

**Block references:**
- `[tags]` (Name, Description, Position)
- Pulls from `[stories]` and `[events]` via relation

### 6.10 Events Root `/:events/` `[INFERRED — flag in annotations]`

**Visual reference:** `/visual-references/04-events-list-reference.jpg` — adopt the rhythm exactly

**Anatomy:**
1. Alert → Header
2. **Hero** — Full-bleed image with overlay text "Events" (left-aligned, white headline-md)
3. **Section title** — "Upcoming Events" (heading-md) + "1 – 6 of 20 events" body count below
4. **Event grid** — 3-up rows of event cards. Each card: 16:9 image, title (title-xl), date+time (body-md grey), address as red underlined link, navy `View Event` button. Wraps to 2 rows on initial load
5. **Pagination** — `1 2 3 4 5...` numbered pills + arrow next, right-aligned
6. Connect With Us footer

**Annotation note:** Events content model is not yet in the Architecture Proposal. Flag the schema fields needed: Event Name, Date/Time, Audience Tag, Hero Image, Body, Optional CTA, Optional Registration Link, Tag relation.

### 6.11 Event Detail `/:events/:event_url/` `[INFERRED]`

**Visual reference:** `/visual-references/05-event-detail-reference.jpg`

**Anatomy:**
1. Alert → Header
2. **Compact hero** — Red `← Return to all events` link top-left, event title (heading-md), share icons top-right
3. **Hero image** — 16:9 with rounded-5 corners
4. **2-column body**
   - **Left rail:** "Details" heading + Date/Time field with `Add to Calendar` red link, 2 buttons: navy `Agnostic Button` + navy `Register Here`, Location section with address + map embed + red `Directions` link, "Contact" with phone+email red links
   - **Right body:** "About The Event" heading + body WYSIWYG with "View More ↓" expand control
5. **Other Events** — 3-up grid of related event cards (mirror Event Root card pattern), with `View Event` navy CTAs
6. Connect With Us footer

### 6.12 Contact Us `[INFERRED]`

**Anatomy:**
1. Alert → Header
2. **Hero** — Centered title "Contact Us" + intro body
3. **2-column section**
   - **Left:** Custom Form (Feathery) — Name, Email, Subject dropdown, Message textarea, red `Submit` button. Grey input backgrounds, no borders, 12px 20px padding
   - **Right:** Location info card — Address with red `📍` icon, Phone red link, Email red link, Hours (multi-state table for Sunday rec vs church variant), Map embed below (rounded-5)
4. **Staff/Leadership directory** — 4-up biograph-card grid (people block — square headshot, name, title, hover flip to back with bio). Mark this as "People Block (informal)" in annotations
5. Connect With Us footer
   - **NOTE:** Replace the standard Connect With Us with a cross-link like "Looking for related content? View [Volunteer Opportunities]" to avoid recursion since Contact Us is what Connect With Us links to

### 6.13 Volunteers `[INFERRED — hybrid template]`

**Visual reference:** `/visual-references/07-volunteer-page-reference.jpg` — adopt this near-1:1 structurally

**Integration note:** Per the architect's notes, the Volunteers model should be a **hybrid template** and is expected to integrate with **Golden** (third-party volunteer management platform). The "Featured Volunteer Opportunities" cards likely pull from Golden via API — show a skeleton loading state on the opportunity title + body region. The application CTA "View Opportunity" deep-links into Golden's signup flow.

**Anatomy:**
1. Alert → Header
2. **Hero** — Image with overlay "Become a Volunteer" headline + body, 2 buttons: white outline `View All Volunteer Opportunities` + red solid `View Featured Opportunities`
3. **Featured Volunteer Opportunities** — Section title + "View All Local Opportunities →" link top-right, 2-up cards (white panels): "Volunteer Opportunity Title" + location subhead + 3-line body + navy `View Opportunity` button
4. **Highlight card** — White rounded-5 card with 3:2 image left + content right (title + body + navy `Register` button)
5. **"Why Volunteer" section** — White rounded-5 card: title-stack left + body, 3:2 image right (reverse of section 4)
6. **Volunteering Stats** — 3-up stat row with massive headline numbers (heading-xl 60px navy "1,400,000") + small label ("Volunteers in 2023") + body
7. **Local Volunteer Stories** — 3-up story cards (Volunteer category pill, 16:9 image, March 2024 + byline, title, body, navy `Read Article` CTA), pagination dots at bottom right
8. Connect With Us footer

---

## 7. Reusable Blocks (prototype each once)

Each block must be prototyped **standalone**, with annotations showing how its content fields from the Architecture Proposal map to visual elements. Note which pages use each block.

### 7.1 Global Site Alert / Banner `[site_alert]`

**Behavior:** Slim full-width strip, sits above the floating header (NOT overlaying content), sticky at top of viewport on scroll.

**Scheduling/automation:** Per the architecture proposal global requirement, site alerts (and seasonal nav items, promotional banners) support **automated start and end dates** to publish and archive without manual intervention. Show a small "Scheduled: Nov 1 – Nov 30" indicator in the annotations to convey this CMS behavior — does not need to render on the live site.

**Specs:**
- Padding: `py-2 px-8` (8px vertical / 32px horizontal)
- `border-radius: 0` (full-bleed corners)
- `position: sticky; top: 0; z-index: 1031`
- Background: editor-selected from brand palette (warning `#F2AB53`, primary red tint `#FBEAEA`, secondary navy tint `#D7E9FF`, dark `#1C1B1F`)
- Text: `display-3` (14px), color follows background contrast (dark on light bg, white on dark bg)
- Icon: Material Symbol matching alert type (e.g., `warning`, `info`, `emergency`)
- Optional CTA: `btn-light btn-sm` button (white pill, 12px 20px padding, 8px radius)
- Close button: `btn-close btn-sm` absolute end-3 (×)

**Show 3 variants:**
1. Text-only warning (amber bg, dark text, no CTA, no close)
2. Text + CTA + close (`Our pool is closed this Saturday 9–2pm.` + `Learn More` button + ×)
3. Dismissed/collapsed state — small re-open tab fixed top-right showing "1 active alert ↓"

**Field mapping:**
- `Banner Name` → not rendered (admin label)
- `Alert Text` (rich text) → main message
- `Button Text` (optional) → CTA label
- `Button Link` (optional) → CTA href
- `Background Color` (dropdown) → variant selector

### 7.2 Site Header / Custom Navigation `[custom_navigation]`

**Visual reference:** All visual references — every screenshot uses the floating header pattern

**Specs:**
- Floating white card pill: `bg-white rounded-bottom-5 my-lg-5 px-lg-8 py-5`
- Position: `position-fixed top-0 start-0 end-0`, with `rounded-bottom-5` (20px corners on bottom only)
- Shadow: `box-shadow: 0 4px 4px -1px rgba(36,104,147,0.04)`
- Max-width: 1850px, centered

**Layout (left to right):**
1. **Logo** — KROC logo SVG (38×46px), click-to-home
2. **Primary nav links** — "Home", "Programs ▾", "About Us ▾", "Events", "Ways To Give ▾", "Contact Us". Active page = red underline below label. Dropdown trigger = chevron next to label
3. **Search icon** — Material Symbol `search`, opens search overlay panel below header
4. **Location stamp** (with red `📍` icon) — Location name + "Visit National Site | Find a Thrift Store" small underlined links below
5. **`btn-info` Find Help** — Blue-grey pill (right-aligned utility CTA)
6. **`btn-primary` Donate** — Red pill (rightmost)

**Dropdown menu specs:**
- `border-radius: 24px` (rounded-6)
- `padding: px-8 py-4` (32px horizontal, 16px vertical)
- `min-width: 538px`
- Shadow: `0 2px 4px rgba(0,0,0,0.1)`
- "View All →" link top-right of dropdown panel
- Divider `<hr>` below header
- 3-column grid for Programs dropdown items (each item = icon + label + brief description)

**Show one dropdown open state** (e.g., Programs dropdown showing Aquatics, Fitness, Youth Development columns).
**Show a "seasonal item" treatment** — a temporary "Summer Camp Registration" item in the nav with a small red pill dot, italic styling, or rounded-pill background so editors can spot what's expiring.

### 7.3 Site Footer / "Connect With Us" Block

**Visual reference:** Bottom of every visual reference — universal pattern

**Specs:**
- `bg-light-gray` background `#D9D9D9` (same as page background, blends in)
- Padding: `py-5`

**Layout (vertical stack of 3 rows):**

**Row 1 — Hero "Connect With Us" image card:**
- Full-width image (1400×366 recommended, 16:9 ratio), `rounded-5` (20px), `overflow-hidden`
- Image has `rgba(28,27,31,0.3)` dark overlay
- Top-left of card: KROC logo (red, 59×96px)
- Bottom-left: White headline "Connect With Us" (heading-md or heading-lg)
- Bottom-right: White rounded-4 pill containing "Having Issues?" label + red `btn-primary` `Contact Us` button

**Row 2 — Newsletter + Mission row (2-column, `gx-3`):**
- **Left col (col-lg-7):** White rounded-4 card `py-6 px-8`, "Sign Up for KROC Updates" heading-sm, then horizontal form with Email input (grey `#EFEFEF` bg + `✉` icon), Phone input (grey + `📞` icon), navy `btn-secondary rounded-3` `Sign Up` button
- **Right col (col-lg-5):** Red `#EF3E42` rounded-4 card `py-6 px-8`, "Our Mission" heading-sm white, body text white (KROC mission statement placeholder)

**Row 3 — Quick links nav + social + copyright:**
- Nav pills row (white rounded-4 panel): Home (red active pill), Ways To Give, About Us, Employment Opportunities, Programs, Volunteer, Accessibility
- Below nav: Social icons row (Facebook, X, LinkedIn, YouTube, Instagram — Material symbols at 24px) + Copyright text "[Center Address] | [Phone] | Privacy Policy | © KROC Centers" right-aligned
- Affiliate links row at very bottom: Sister sites and partner links

**Annotate:** Footer is an **automated component** — content reads from the `[kroc_location]` instance (address, phone, hours, facility name) + the `[custom_navigation]` block (quick links). Mark each footer slot with `← from [kroc_location]` or `← from [custom_navigation]` to indicate the data source. Editors do not author the footer directly; it refreshes itself from those sources.

### 7.4 FAQs `[faqs]`

**Specs:**
- Stacked accordion list. Each row: white `rounded-4` card, question text left, `+` Material Symbol icon right (rotates to `−` when open)
- Open state: `box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075)`, answer body below with `py-4` padding
- Optional block title above the list (heading-md)
- Spacing between rows: `mb-3` (12px)

**Fields:** Block Name (admin), repeater of {Question, Answer (Media — rich text or media)}

### 7.5 External Embed `[external_embed]`

**Container specs:**
- White `rounded-5` (20px) frame card with `overflow-hidden`
- Caption strip below: `display-3` (14px) grey text, centered, `py-3` padding (e.g., "Click to view the current class schedule!")

**Embed Type aspect ratios:**
- YouTube/Video: 16:9, full-width
- Canva poster / InDesign: 3:4 portrait, max-width 600px, centered
- TikTok: 9:16 portrait, max-width 400px, centered
- Instagram post: 1:1, max-width 500px, centered
- Calendar (TractionRec/UPace): 16:9 full-width or 4:3 taller

**Fields:** Block Name, Embed Type (dropdown), Embed URL (iframe)

### 7.6 Featured Stories `[featured_stories]`

**Layout:** 3-up grid (or carousel if >3 entries). Each card:
- White `rounded-5` (20px) card, `overflow-hidden`
- 16:9 image at top (with category pill chip overlay top-left — `bg-light rounded-pill` with kroc-icon placeholder + label)
- Image scrim gradient: `linear-gradient(360deg, rgba(28,27,31,0.5) 0%, rgba(28,27,31,0.1) 100%)`
- Card body: `px-6 pt-6 pb-4`
  - Month/Year (e.g., "March 2024") + "By [Author]" body-md grey
  - Title (title-xl, fw-normal, `text-truncate-2`)
  - 3-line body excerpt (body-md, `text-truncate-3`)
- Card footer `px-6 pb-6 bg-transparent border-0`:
  - Navy `btn-secondary` `Read Article` button with `↗` icon, full-width

**Optional block title** above the row (heading-md) with "View All →" link top-right

### 7.7 Featured Classes `[featured_classes]`

**Layout:** 3-up grid (or 4-up). Each card:
- White `rounded-5` (20px) card with `overflow-hidden`
- Kroc-icon placeholder centered top, `bg-area` (light grey) circular badge container
- Card body: class name (title-xl), category (body-md grey), dynamic price (heading-sm, with skeleton loading state)
- Card footer: red `btn-primary` `Register Now` deep-link CTA

**Optional block title** above the row

### 7.8 Facility Section `[facility_section]`

**Two layout variants:**

**Variant A — Image-left/content-right:**
- 3:2 image left (rounded-5), 50% width
- Right column: section name (heading-md), body WYSIWYG, hours-of-operation table (repeater)

**Variant B — Stacked:**
- 16:9 image full-width (rounded-5)
- Below image: section name, body, hours table

**Hours table specs:**
- Each row: Day label left, hours text right
- Multi-state rows display two-line cells: "Closed for recreation" / "10 AM–Noon for Church"
- Background: white card with `rounded-4` corners
- Padding: `py-2 px-4`

### 7.9 Featured Pages `[featured_pages]`

**Layout:** 3-up or 4-up grid. Each card:
- Square or 4:3 image top with `rounded-5` corners
- Card body: page name (title-lg), navy `btn-secondary` button with CTA text

**Usage:** Surface curated landing pages from homepage (e.g., "Membership", "Day Passes", "Personal Training"). Same component placed under hero on Western variant = "quick-action card row".

### 7.10 Image Gallery `[image_gallery]`

**Layout:** 3-column masonry grid (or 4-up) with lightbox-on-click affordance
- Each image: `rounded-4` corners, `object-fit: cover`
- Hover state: `transform: scale(1.02); transition: 0.3s`
- Optional per-image captions overlaid bottom in `rgba(0,0,0,0.5)` strip

**Show closed grid state + one open lightbox state example** (modal with image centered, caption below, close button, prev/next arrows)

### 7.11 Custom Forms `[custom_forms]`

**Specs:**
- Form scaffold rendered by Feathery (external)
- Layout: form name as heading-sm, fields stacked with labels above
- All inputs use KROC form style: `bg-area` (`#EFEFEF`) grey, no border, `padding: 12px 20px`, `border-radius: 6px`
- Submit button: full-width `btn-primary` red

**Representative example fields:** Name, Email, Subject (dropdown with grey arrow), Message (textarea, `min-height: 10em`), Submit

### 7.12 People Block (informal) `[people_block]`

> **Note:** No formal schema exists in the Architecture Proposal. Prototype informally on Contact Us / Volunteers pages. Flag for the architect to formalize.

**Layout:** 4-up biograph-card grid. Each card:
- White `rounded-5` (20px) card with `overflow-hidden`, square aspect ratio
- Front face: full-bleed square headshot with bottom gradient scrim, name + title overlaid bottom-left
- Hover/click flip: card rotates Y-axis 180° to reveal back face with grey bg `#EFEFEF` + bio text + contact links

**Inferred fields:** Person Name, Role/Title, Headshot, Bio (rich text), Email (optional), Phone (optional)

---

## 8. Composition rules

- Every page begins with **Alert Banner slot → Site Header**.
- Every page (except Contact Us) ends with **Connect With Us Footer (7.3)**.
- Hero is **the first content block** on every page.
- Section padding: `py-12` (48px) default, full-bleed accent bands use `py-16` to `py-19` (64–96px)
- Maximum content width: 1280px centered. Hero and full-bleed sections break out to viewport width.
- Limit to **two CTAs per section**. More CTAs → break into a pill-button row.
- Card grids: 3-up at 1280px, 2-up at 992px, 1-up below — but design for 1280px only.

---

## 9. Annotation requirements

Each prototype must include callouts for:

1. **Block name** matching the Architecture Proposal schema name (e.g., `[featured_stories]`)
2. **Content fields** mapped to visual elements (e.g., "Title → this heading", "Story Image → this 16:9 frame", "Story Body → this WYSIWYG region")
3. **Conditional behavior** (e.g., "If `Deep Link URL` is empty, hide this CTA and show the category-level CTA instead")
4. **Editor flexibility** (e.g., "This block is on a Freestyle template — editor can drag any block above or below")
5. **Integration points** (e.g., "Price field pulled from TractionRec API on render — show skeleton state", "Schedule grid is an iframe embed of UPace/TractionRec calendar")
6. **Design tokens used** (e.g., "Background: `--bs-secondary-200 #002056`", "Padding: `py-12 px-8`", "Radius: `rounded-5 20px`")

---

## 10. Inferred decisions (call out in handoff)

These were called out in architect comments in the Architecture Proposal but not yet formalized — surface as open questions:

- **Events architecture** (Comments 2 + 5) — Inferred from common patterns (see `04-events-list-reference.jpg` and `05-event-detail-reference.jpg`). Surface the proposed `[events]` schema as a question for the architect (Section 6.10)
- **Contact Us page** (Comment 6) — Architect noted "add model for Contact Us with a hybrid template type". Structure proposed in 6.12
- **Volunteers page** (Comment 7) — Architect noted "add model for Volunteers with a hybrid template type and review Golden integration". Structure proposed in 6.13 with Golden API integration flagged
- **Global Kroc icon library endpoint** (Comments 1 + 4) — Architect noted "create endpoint for global icons". All icon placements use a `kroc-icon` placeholder rectangle pending the endpoint
- **Tags as wildcard fed from National** (Comment 8) — Tags should be wildcard pages reading from a national feed. Called out in 6.9
- **All Tags page** — Implied by the Tags Pageset model (a Pageset needs a parent Single Page). Layout invented
- **Quick-action card row** under the hero (Western requirement) — Treated as a variant of `[featured_pages]` placed immediately below the hero
- **Map block** for tourism (Southern) — Treated as a one-off block. Flag for the architect to formalize
- **People Block** for staff/leadership directory — Mentioned in architecture proposal Notes but not modeled. Wireframed informally on Contact Us and Volunteer pages
- **Footer as automated component** — Architect noted "Need to add coverage for footer as an automated component (maybe hybrid), or it reads from the navigation and automates the rest". Modeled in 7.3 as automated, reading from `[kroc_location]` + `[custom_navigation]`

---

## 11. Deliverable structure

Organize the final output as:

1. **Cover frame** — Title, version, design system reference, scope (desktop only @ 1280px)
2. **Essence audit** (Section 3 deliverable) — 1 page summarizing extracted patterns
3. **Block library** (Section 7) — each block as standalone prototype with annotations
4. **Page prototypes** (Section 6) — each page composed of blocks, in order 6.1 through 6.13
5. **Open questions** (consolidate Section 10) — list for architect/PM to resolve

**Naming convention:**
- Blocks: `block-01-site-alert`, `block-02-site-header`, etc.
- Pages: `page-01-homepage`, `page-02-all-programs`, etc.

---

## 12. Quick-Start Checklist

Before exporting a single frame:

- [ ] Page background is `#D9D9D9` (NOT white)
- [ ] Header is the floating white pill with `rounded-bottom-5` corners
- [ ] All cards use `rounded-5` (20px) radius with `border: 0`
- [ ] All card images have the dark-bottom gradient scrim
- [ ] All buttons use 8px radius — primary red `#EF3E42`, secondary navy `#002056`
- [ ] Body uses `Creato Display` font, weight 400 — never bold for headings
- [ ] Links inside body text are navy `#022056` with red `#EF3E42` underline
- [ ] All inputs are grey `#EFEFEF` background with no visible border
- [ ] Every page ends with the Connect With Us footer block (except Contact Us)
- [ ] Section padding is 48–64px vertical (`py-12` to `py-16`)
- [ ] Annotations reference the schema name from `architecture-proposal.md`

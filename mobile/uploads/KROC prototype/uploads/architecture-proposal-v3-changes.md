# KROC Centers — Architecture Proposal v3 (Changes)

> **Incorporating the 2026‑06‑29 prototype sync** — the content‑model changes implied by the Figma‑comment tickets, captured in [schema-sync-queue.md](schema-sync-queue.md) (SCHEMA‑1…19 + the SCHEMA‑NEW page batch).
>
> This proposal builds on the final architecture in [architecture-proposal-v2.md](architecture-proposal-v2.md) (which folded in the 2026‑05‑28 meeting). This document layers the **new decisions from the prototype work** on top, updating both the **architecture** (content models / fields) and the **design** (behaviors, variants, layout rules) so the two stay aligned — every design element has a corresponding schema entry.
>
> **Source of the delta:** [schema-sync-queue.md](schema-sync-queue.md) · prototype: [pages-new.jsx](pages-new.jsx), [blocks.jsx](blocks.jsx), [shared.jsx](shared.jsx).
>
> **Companion docs:** [architecture-proposal-v3.md](architecture-proposal-v3.md) (full consolidated v3) · [architecture-proposal-v2.md](architecture-proposal-v2.md) (prior final architecture).

---

## How to read this document

- Only schemas **touched by the 2026‑06‑29 sync** are re‑listed below, with the deltas marked. Every other schema carries over **verbatim** from [architecture-proposal-v2.md](architecture-proposal-v2.md) — see [Carried‑forward, unchanged](#carried-forward-unchanged).
- Decisions **verified during the sync with no schema change** are recorded in [Verified — no change](#verified--no-change) so the reasoning isn't lost.
- Decisions **confirmed in principle but still needing examples, a decision, or an external dependency** live in [Pending & open questions](#pending--open-questions) — not designed here.

### Status legend (this round)

| Tag | Meaning |
|---|---|
| ✅ Locked | Carried forward from v2, unchanged by this sync |
| 🟢 New (6/29) | New field, block, or behavior introduced this round |
| 🔄 Changed (6/29) | Existing field or behavior modified this round |
| ⚐ Flag | Architect decision / open question raised this round |
| ⏳ Pending | Confirmed in principle, **not designed here** — awaiting an example or dependency |

---

## What's new from the 2026‑06‑29 sync (delta summary)

| Queue # | Ticket | Decision | Where it lands | Tag |
|---|---|---|---|---|
| SCHEMA‑1 | NAV‑1 | Editable primary nav `{label, target}` + utility bar; **Donate = external link** (OQ‑1 closed) | §4 Custom Navigation · §1 Kroc Location | 🟢🔄 |
| SCHEMA‑2 | NAV‑2 | **Mega‑menu** model; Classes ← `[program_categories]`, Events needs **`[event_categories]`** | §4 · §5 Event Categories | 🟢⚐ |
| SCHEMA‑3 | NAV‑3 | **Header CTA config** — two editable global CTAs | §1 Kroc Location | 🟢 |
| SCHEMA‑4 | NAV‑4 | Footer/global settings — mission, **newsletter URL**, social, footer links, location **email** | §3 Connect · §1 | 🟢🔄 |
| SCHEMA‑5 | BLK‑1 / HOME‑6 | **Intro Band block** (new) | §19 Intro Band | 🟢 |
| SCHEMA‑6 | BLK‑2 | `[classes]` **marketing_description** + photo optional (no‑image fallback) | §26 Class Detail | 🟢🔄 |
| SCHEMA‑7 | BLK‑3 | People block **1‑up feature** heading + lead‑in; formalized | §15 People Block | 🟢 |
| SCHEMA‑8 | HOME‑5 / BLK‑4 | **Labels:** Stories→Kroc Highlights, Programs and Classes, Meet the Team | Cross‑cutting | 🔄⚐ |
| SCHEMA‑9 | BLK‑5 | Featured Pages **media type** (icon\|image) + **Card Style** (Full\|Compact) + 6‑up | §12 Featured Pages | 🟢 |
| SCHEMA‑10 | BLK‑7 | Facility Section **photo carousel** + structured **Hours** (optional) | §11 Facility Section | 🔄 |
| SCHEMA‑11 | PAGE‑1 | All Programs **Search for Classes** (catalog‑wide finder) | §24 All Programs | 🟢⚐ |
| SCHEMA‑12 | PAGE‑1.2 / HOME‑4 | **Apex/Instance flag** + **`[map_block]`** (Locator\|Single) | Cross‑cutting · §20 | 🟢⚐ |
| SCHEMA‑13 | PAGE‑2 | `[classes]` **Session Dates** + **Member/Public price** | §26 Class Detail | 🟢🔄 |
| SCHEMA‑14 | PAGE‑3 | Informational hero **Background** (Color\|Image) + **Accordion** content | §27 Informational | 🟢⚐ |
| SCHEMA‑15 | PAGE‑5 | Class Detail accepts **drag‑in blocks** (Image Gallery); gallery Mosaic\|Grid | §26 · §13 | 🟢 |
| SCHEMA‑16 | PAGE‑7 | Event Detail **Member/Public price**; tablet‑hero decision | §33 Event Detail | 🟢⚐ |
| SCHEMA‑17 | PAGE‑8 | Contact Us uses the **global footer** (no cross‑link card) | §3 · §34 Contact | 🔄 |
| SCHEMA‑18 | HOME‑1 | Homepage hero **photo OR video** | §23 Homepage | 🟢⏳ |
| SCHEMA‑19 | HOME‑2 | **Featured Events block** + `[events]` **Event Excerpt** | §10 · §33 | 🟢 |
| SCHEMA‑NEW | NEW‑1…6 | **6 new pages** formalized + **`[rate_cards]`** & **`[job_postings]`** | Part 3 | 🟢⚐ |

**Verified, no schema change:** BLK‑6 (site‑alert CTA already editable), BLK‑8 (People "Email Us" label), BLK‑10 (editable block headers), PAGE‑4 (event thumbnail already in the 3‑field hero standard). See [Verified — no change](#verified--no-change).

---

## Cross‑cutting design decisions

New cross‑cutting standards introduced this round (full definitions in [architecture-proposal-v3.md §Cross‑cutting standards](architecture-proposal-v3.md#cross-cutting-standards)).

### C1. Member / Public Price Points 🟢 (6/29)

Monetized content moves from a single price to a shared **`PricePoints`** model — **Member Price** + **Public Price** — resolved **dynamically from TractionRec / Club Automation** (embed/redirect, **no DB**); CMS holds display fallbacks. One `PricePoints` component renders at card + detail sizes. **Applies to** `[classes]` (SCHEMA‑13), `[events]` (SCHEMA‑16), `[rate_cards]` (membership/day pass/PlayCare). *(Open‑house demo: Members Free / Public $5.)*

### C2. Background field group 🟢 (6/29)

A reusable **Background** config (`Type` = Color/Image[/Video], `Color`, `Image`, `Video`) replaces per‑template "palette OR image" fields. **Applies to** `[intro_band]`, `[informational_pages]` hero, `[homepage]` hero video. ⚐ **Flag:** implement as one shared field group vs. per‑template fields (recurs on SCHEMA‑5/14/18).

### C3. Apex / Instance site‑type 🟢 (6/29)

A site‑level **Site Type** flag — **Apex** (kroccenter.org) vs. **Instance** (one center). **Cross‑center elements** (center/ZIP locators, multi‑center map, location filters) render **apex‑only**; on instances those inputs become within‑center search. The map is `[map_block]` with `Locator` (apex) vs. `Single` (instance). ⚐ **Flag:** one CMS with a site‑type setting vs. a separate instance template set. (SCHEMA‑12.)

### C4. Display label vs. slug 🔄 (6/29)

"Stories" surfaces as **"Kroc Highlights"** in UI/headings; the `[stories]`/`[featured_stories]` **slugs stay**. ⚐ **Flag:** relabel the 6.6/6.7 page labels + nav/tag refs for full consistency, or display‑only. (SCHEMA‑8.)

### C5. Search scope (extended) 🔄 (6/29)

Global search stays out of scope. New: a **catalog‑scoped class search** on All Programs (queries across all `[program_categories]`). ⚐ **Flag (OQ‑2):** catalog search vs. a future global search — one system or two? (SCHEMA‑11.)

---

# Part 1 · Block Library (§7) — changed & new schemas

> Full field tables in [architecture-proposal-v3.md](architecture-proposal-v3.md). Below: what changed and why.

## 1.a Kroc Location `[kroc_location]` — global settings 🟢🔄 (6/29)

Holds the new global header/footer settings and the site‑type flag.

| Field | Type | Status | Notes |
|---|---|---|---|
| Email | Text | 🟢 New | e.g. info@krocphoenix.org — footer + Contact (SCHEMA‑4) |
| Newsletter Signup URL | URL | 🟢 New | Vendor form (Mailchimp/Constant Contact/Emma) — **replaces the inline email/phone capture** (SCHEMA‑4) |
| Footer Links | Repeater (Label, URL) | 🟢 New | Editable footer link list (kroccenter.org, Thrift & Donate Goods, …) (SCHEMA‑4) |
| Header CTA 1 / 2 (Label + URL) | Grouped | 🟢 New | Global header CTAs — "Become a Member" / "Purchase Classes"; TractionRec/Club Auto embed/redirect (SCHEMA‑3) |
| Site Type | Dropdown (`Apex` / `Instance`) | 🟢 New | Drives apex‑only cross‑center elements (C3 / SCHEMA‑12) |
| Donation Link | URL | 🔄 Changed | Confirmed **Donate = external link, not a page** (OQ‑1 closed 2026‑06‑29, SCHEMA‑1) |

**Note:** copyright line "The Salvation Army" is a standard footer string.

## 1.b Connect / Footer `[connect_block]` — Contact reuse 🔄 (6/29)

Mission Statement is now treated as a global/standardized field (consider locked/default — SCHEMA‑4). **Structural change (SCHEMA‑17):** **Contact Us uses this global footer** like every other page — the v2 "cross‑link card to avoid recursion" is **removed**, since the social links the client asked for live in the footer (from `[kroc_location].social_handles`). Newsletter signup, email, and footer links now flow from `[kroc_location]`.

## 1.c Custom Navigation `[custom_navigation]` — nav + mega‑menu 🟢🔄 (6/29)

**Decision (SCHEMA‑1/2):** the primary nav is an ordered, editable list of `{label, target}` where target is an internal page ref **or** external URL; a parallel **utility bar** holds secondary links.

- **Current primary set:** Home · About Us · Membership · Classes (mega) · Events (mega) · Rentals · Church.
- **Utility bar:** Careers · Donate (external) · Hours & Closures.
- **Search intentionally omitted.**

| Field | Type | Status | Notes |
|---|---|---|---|
| Menu Item URL / Target (rep) | URL / Internal Link | 🔄 Changed | One editor‑set target — internal page or external URL (SCHEMA‑1) |
| Has Mega Menu (rep) | Toggle | 🟢 New | Item expands into a mega panel |
| Mega Source (rep) | Dropdown (`Program Categories` / `Event Categories` / `Manual`) | 🟢 New | Classes ← `[program_categories]`; Events ← `[event_categories]`; Manual ← child links |
| Mega "View All" Index (rep) | Internal Link | 🟢 New | "All Classes" → All Programs; "All Events" → Events Root |
| Mega Child Links (rep of rep) | Repeater (Label, URL/Icon) | 🟢 New | When Source = Manual |

⚐ **Flag (SCHEMA‑2):** the Events mega needs an event taxonomy — confirm whether one exists; if not, add **`[event_categories]`** (or an `event_type` field on `[events]`). New nav targets (About Us, Membership, Rentals, Church, Careers) are formalized in Part 3.

## 1.d Event Categories `[event_categories]` 🟢⚐ (6/29) — new taxonomy

**Decision (SCHEMA‑2):** add an event category/type taxonomy to drive the Events mega‑menu and event filtering — mirroring how `[program_categories]` drives the Classes mega. Fields: Category Name, Icon (kroc‑icon), Sort Order, Slug. Used as a relation/filter on `[events]` (Event Category) and the Events Root category filter. ⚐ **Flag:** confirm taxonomy vs. a simple `event_type` enum.

## 7.7 Featured Stories `[featured_stories]` — label 🔄 (6/29)

No structural change. **Block Title default/example becomes "Kroc Highlights"** (display label only; slug unchanged — C4 / SCHEMA‑8). BLK‑10 confirmed the Block Title is already editable.

## 7.9 Featured Pages `[featured_pages]` — media + card style 🟢 (6/29)

**Decision (SCHEMA‑9):**

| Field | Type | Status | Notes |
|---|---|---|---|
| Card Style | Dropdown (`Full` / `Compact`) | 🟢 New | `Full` = media panel + body + CTA; `Compact` = icon chip + label only, whole card links |
| Display Mode | Dropdown (`3‑up` / `4‑up` / `6‑up`) | 🔄 Changed | `6‑up` added for Compact |
| Media Type (rep) | Dropdown (`Icon` / `Image`) | 🟢 New | Icon → kroc‑icon on a tinted panel (same footprint as image); Full style only |
| Icon (rep) | Remote API | 🟢 New | When Media Type = Icon |

**Behavior:** Compact = icon + title only (body/CTA hidden); used by homepage **Quick Links** bar and the Membership section jump‑nav. Full = homepage "Get Started" / About Us explore links. → prototype SYNC‑27.

## 7.8 Facility Section `[facility_section]` — carousel + structured hours 🔄 (6/29)

**Decision (SCHEMA‑10):**

| Field | Type | Status | Notes |
|---|---|---|---|
| Photos | Repeater (Image) | 🔄 Changed | Single Photo → **repeater of images** (drives a carousel) |
| Hours of Operation | Repeater (Day, Ranges[] **or** Closed) | 🔄 Changed | **Multiple periods per day** or a Closed flag; whole group **optional** (no‑hours variant for rentals) |
| CTA (Label + URL) | Grouped | 🔄 Changed | Confirmed truly optional (can be empty) |

Per‑facility closure override (Status Mode / Status Message) carries over from 5/28. **Rentals (NEW‑4)** reuses this block: no fixed hours, amenities via Feature Pills, a rate line, rental‑inquiry CTA.

## 7.10 Image Gallery `[image_gallery]` — layout 🔄 (6/29)

No new fields. **Layout** confirmed as **`Mosaic`** (varied tile spans / masonry) vs. **`Grid`** (uniform) — Mosaic used on Class Detail; Carousel remains from 5/28. (SCHEMA‑15.) "Include dates" asks on these comments are covered by `[classes]` Session Dates (SCHEMA‑13).

## 7.12 People Block `[people_block]` — 1‑up feature 🟢 (6/29)

Formalized (was informal). Person fields (Name, Role, Headshot, Bio, Email, Phone) and the Layout enum (`4‑up cards` / `3‑up with bio` / `1‑up feature`) confirmed. **New block‑level fields for the 1‑up feature layout:**

| Field | Type | Status | Notes |
|---|---|---|---|
| Feature Heading | Text | 🟢 New | e.g. "Hello from the {Role}" |
| Lead‑in | Text | 🟢 New | Intro line |

Default heading "Meet the Team" (was "Camden Leadership"); Contact Us keeps the distinct "Meet The Kroc Center Team" (SCHEMA‑8). BLK‑8: card shows "Email Us" (mailto) — display change only, Email field already exists.

## 7.14 Featured Programs `[featured_programs]` — label 🔄 (6/29)

No structural change. **Block Title default/example becomes "Programs and Classes"** (was "How We Serve"). (SCHEMA‑8.)

## 7.16 Intro Band `[intro_band]` 🟢 (6/29) — new block

**Decision (SCHEMA‑5 / BLK‑1 / HOME‑6):** a new drag‑in band. Fields: Layout Variant (`No‑photo` / `Photo‑right`), Eyebrow (opt), Title, Body (rich text), CTAs (rep · max 2), Photo (opt · photo variant), **Background** (palette color, per C2). **Consumers:** homepage membership callout (HOME‑6 is an instance — no separate schema) and the Membership page (NEW‑1); Day Pass "Membership is for everyone" callout reuses the same band.

## 7.17 Map Block `[map_block]` 🟢⚐ (6/29) — new block

**Decision (SCHEMA‑12 / HOME‑4):** a reusable location map with a **`Variant`** field — **`Locator`** (apex · multi‑center finder + City/ZIP search) vs. **`Single`** (instance · one location + Get Directions, address from `[kroc_location]`). Apex homepage uses Locator (apex‑only, C3); instance **About Us (NEW‑3)** uses Single — "the apex map could go on About Us." Plus optional Title/Body.

## 7.18 Rate Cards `[rate_cards]` 🟢⚐ (6/29) — new block (BLK‑9)

**Decision (SCHEMA‑NEW):** formalize a pricing/rate‑card block for Membership tiers, Day Pass pricing, and PlayCare rates, with a **Comparison Table** mode for **Family Play**. Repeater of `{Tier Name, Member Price, Public Price (PricePoints C1), Age Range, Billing Period, Included Features, CTA}`. Pricing **dynamic from TractionRec / Club Automation** (embed/redirect, **no DB**); CMS display fallbacks. ⚐ **Flag (OQ‑7):** membership sign‑up / day‑pass purchase — embed widget vs. deep link.

## 7.19 Job Postings `[job_postings]` 🟢⚐ (6/29) — new block (Careers)

**Decision (SCHEMA‑NEW / NEW‑6):** Careers was built with a **bespoke department/role‑listing layout**, not the Volunteer blocks. ⚐ **Flag:** reuse `[volunteer_opportunities]` for jobs, **or** this careers‑specific block — formalized here per "formalize now." Repeater of `{Role, Department, Location, Employment Type, Apply Link, Summary}`. HR contacts use `[people_block]`.

## 7.x Featured Events `[featured_events]` 🟢 (6/29) — new block

**Decision (SCHEMA‑19 / HOME‑2):** mirror of `[featured_classes]` for curated `[events]`. `Block Title` (opt) + `View All`, `Display Mode` (Grid 3‑up / 4‑up), a **repeater → Event Ref into `[events]`** (suggest capping at 6), plus a **Custom Card** option (manually‑authored card). Inherits the new `[events]` price + Event Excerpt automatically. Homepage "Featured Classes and Events" = `[featured_classes]` + `[featured_events]` dragged onto `[homepage]`.

---

# Part 2 · Pages (§6) — changed schemas

## 6.1 Homepage `[homepage]` — hero video 🟢⏳ (6/29)

**Decision (SCHEMA‑18 / HOME‑1):** the hero can be a **photo OR a video**.

| Field | Type | Status | Notes |
|---|---|---|---|
| Hero Background Type | Dropdown (`Photo` / `Video`) | 🟢 New | |
| Hero Background Video | Video source | ⏳ Pending | Autoplay muted + loop, no audio; field type (Media vs URL) **blocked on a hosting decision** (self‑hosted vs YouTube/Vimeo/Cloudflare Stream) |

Hero Image — Desktop doubles as the **poster/fallback** (reduced‑motion, mobile, while loading). The **multi‑center locator + map** is **apex‑only** (`[map_block]` Locator, C3 / SCHEMA‑12) — not placed on instance homepages. Prototype: hero video is schema‑only for now (no build yet).

## 6.2 All Programs `[programs_index]` — Search for Classes 🟢⚐ (6/29)

**Decision (SCHEMA‑11):** add a **"Search for Classes"** block — a class finder querying across **all** `[program_categories]` (vs. 6.3's single‑category listing — same component, different scope). **Driven by existing `[classes]` data, no new content type.** Confirm `[classes]` exposes the filter fields: Category relation, Class Type enum, Schedule/dates (queryable via Session Dates, SCHEMA‑13), Title + (marketing) description. Filters/search/view‑toggle/pagination are contextual UI. ⚐ **Flag (OQ‑2):** catalog‑scoped vs. global search. The **Location Filter** is **apex‑only** (C3 / SCHEMA‑12).

## 6.3 Program Category `[program_categories]` — date filter source 🔄 (6/29)

No new fields. The 5/28 date filter now resolves against **`[classes]` Session Dates** (SCHEMA‑13). Drives the Classes mega‑menu items (SCHEMA‑2).

## 6.4 Class Detail `[classes]` — pricing, dates, marketing copy, blocks 🟢🔄 (6/29)

**Decision (SCHEMA‑6/13/15):**

| Field | Type | Status | Notes |
|---|---|---|---|
| Marketing Description | Rich Text | 🟢 New | Surfaced in the card pop‑up (SCHEMA‑6) |
| Hero Image (Set) | Image | 🔄 Changed | **Photo optional** — define no‑image color‑cover fallback (SCHEMA‑6) |
| Session Dates | Date Range (start/end + label) | 🟢 New | Roster classes; **queryable** by the Date filter; card/table/sidebar (SCHEMA‑13) |
| Member Price | PricePoints (C1) | 🔄 Changed | Was single "Dynamic Price" (SCHEMA‑13) |
| Public Price | PricePoints (C1) | 🟢 New | (SCHEMA‑13) |

**Blocks (SCHEMA‑15):** Class Detail is **extensible** — accepts additional drag‑in blocks (demonstrated with the **Image Gallery**, Mosaic). The "additional photos" ask = the Image Gallery block, **not** inline WYSIWYG images. **Reuse note:** one `[classes]` change flows to all consumers (6.2 search, 6.3 listing, Featured Classes, 6.4 sidebar + "Other Classes" feed) — no per‑surface schema.

## 6.5 Informational Pages `[informational_pages]` — hero background + accordion 🟢⚐ (6/29)

**Decision (SCHEMA‑14):**

| Field | Type | Status | Notes |
|---|---|---|---|
| Hero Background Type | Dropdown (`Color` / `Image`) | 🟢 New | Color band or photo hero via `PageHero` |
| Hero Background Color | Palette select | 🟢 New | When Type = Color |
| Hero Background Image (Set) | Image | 🟢 New | When Type = Image |
| Accordion Content | Drag‑in `[faqs]` / accordion | 🟢 New | Collapsible sections (Heading + rich‑text Body); reuses the FAQ/accordion model; e.g. facility policies, Membership/Day Pass FAQs |

⚐ **Flag:** the "palette color OR image" pattern recurs (Intro Band, other heroes) — consider the shared **Background field group** (C2) rather than per‑template fields.

## 6.6 / 6.7 All Stories & Story Detail — label 🔄 (6/29)

Display label **"Kroc Highlights"**; slugs unchanged (C4 / SCHEMA‑8). No field change.

## 6.8 Contact Us `[contact_us]` — global footer 🔄 (6/29)

**Decision (SCHEMA‑17 / PAGE‑8):** Contact uses the **standard global Connect footer** (social links live there, from `[kroc_location].social_handles`) — the v2 "cross‑link card to avoid recursion" is **removed**. This is a layout/architecture correction, **no new fields**. "View all hours" → `[kroc_location]`; "Meet The Kroc Center Team" → `[people_block]`.

## 6.10 / 6.11 Events Root & Event Detail — excerpt, price, category 🟢⚐ (6/29)

**Decision (SCHEMA‑16/19/2):**

| Field | Schema | Type | Status | Notes |
|---|---|---|---|---|
| Event Excerpt | `[events]` | Text Area | 🟢 New | Short card/feed description (mirrors Story Excerpt); on every `EventCard` (SCHEMA‑19) |
| Member Price | `[events]` | PricePoints (C1) | 🟢 New | Sidebar + card (SCHEMA‑16) |
| Public Price | `[events]` | PricePoints (C1) | 🟢 New | (SCHEMA‑16) |
| Event Category | `[events]` | Relational `[event_categories]` | 🟢 New | Mega‑menu + filtering (SCHEMA‑2) |
| Category Filter | `[events_root]` | — (UI) | 🟢 New | From `[event_categories]` |

**Verified (no change):** the 3‑field hero standard already covers Desktop/Mobile/Thumbnail + predesigned artwork; Event Detail is already Hybrid (accepts the Image Gallery). ⚐ **Flag (SCHEMA‑16):** the client listed "Desktop, tablet, mobile" but the standard has no tablet field — **recommend (a)** tablet falls back via CSS, unless the client wants a separately‑cropped tablet asset (then add `Event Image — Tablet` to the whole hero standard). Price flows to every event‑card surface by reading `[events]`.

---

# Part 3 · New Pages (§6) — formalized 🟢⚐ (6/29)

All six ride **`[informational_pages]`** (Pageset · Freestyle) and compose from existing + new blocks. Field hints extracted from the finished prototype ([pages-new.jsx](pages-new.jsx)); the full section‑composition tables live in [architecture-proposal-v3.md Part 4](architecture-proposal-v3.md#part-4--new-pages-6--629). Summary of what each needs beyond the base model:

| Page | URL | New/notable blocks | Decisions |
|---|---|---|---|
| **Membership** (NEW‑1) | `/membership/` | `[intro_band]`, `[rate_cards]` (tiers + Family Play comparison), `[facility_section]` (PlayCare), `[custom_forms]` (hold/cancel) | Rate cards = BLK‑9; pricing dynamic (OQ‑7) |
| **Day Pass** (NEW‑2) | `/day-pass/` | `[rate_cards]` (Youth/Adult), `[intro_band]` (shared homepage callout) | Pricing dynamic (OQ‑7) |
| **About Us** (NEW‑3) | `/about-us/` | `[featured_pages]`, `[people_block]` (3‑up bio), `[map_block]` (Single), `[donation_block]` | **No new type** — all existing blocks |
| **Rentals** (NEW‑4) | `/rentals/` | `[facility_section]` (spaces, no fixed hours), `[faqs]` (rates/specs), `[custom_forms]` (interest) | ⚐ OQ‑4: inquiry vs. booking; reuses `[facility_section]` (SCHEMA‑10) |
| **Kroc Church** (NEW‑5) | `/church/` | `[facility_section]` (service times), `[people_block]`, `[faqs]` (ministries/schedule), `[custom_forms]` (prayer request) | ⚐ OQ‑5 scope: reuse vs. bespoke |
| **Careers** (NEW‑6) | `/careers/` | `[job_postings]` (open positions), `[people_block]` (HR), `[donation_block]`‑style CTA | ⚐ `[job_postings]` vs. reuse `[volunteer_opportunities]` |

**Donate (NEW‑7)** = external link, **no schema** (utility‑bar link, SCHEMA‑1).

---

## Verified — no change

Confirmed during the sync; recorded so the reasoning isn't re‑litigated.

- **BLK‑6 — Site Alert editable CTA.** `[site_alert]` already has "Optional CTA (Label + URL)" (v2 §2). "CTA text should be editable" already satisfied.
- **BLK‑8 — People "Email Us" link.** Display/label change only; `[people_block]` Email field already exists.
- **BLK‑10 — Editable block headers.** Featured Stories/Classes/Pages/Programs/Volunteer all already have an editable "Block Title." Volunteer blocks can be reused on Careers by retitling to "Join the Team" (Careers reuse → NEW‑6).
- **PAGE‑4 — Event card separate thumbnail.** The comment maps to Events Root (6.10), not All Stories. `[events]` already has a dedicated **Thumbnail** field + Desktop hero (the 3‑field standard). Already satisfied for card and hero.

---

## Carried‑forward, unchanged

Reviewed this round with **no architectural change** — exactly as in [architecture-proposal-v2.md](architecture-proposal-v2.md):

- §2 Global Site Alert `[site_alert]` *(palette expands per C4‑v2 pending values)*
- §6 External Embed `[external_embed]`
- §14 Donation Block `[donation_block]` *(Background Variant aligns with C2)*
- §18 Featured Volunteer Opportunities `[featured_volunteer_opportunities]`
- §22 All Tags `[tags_index]` · §23 Tag Detail `[tags]`
- §29 Volunteer Opportunities Index `[volunteer_opportunities_index]`
- §30 Volunteer Opportunity Detail `[volunteer_opportunities]` *(see Careers reuse question)*
- §12 Custom Forms `[custom_forms]` *(reused by new Program Request / Rentals / Church / Membership forms)*

---

## Pending & open questions

> Confirmed in principle but **deliberately not designed here** — blocked on an example, a decision, or an external dependency.

**Carried from v2 (still open):** expanded color‑palette values · complex class schedule & multi‑price layout · background‑video hosting · TractionRec/Club Auto/Golden dynamic data + custom cards · gallery mixed‑media & limits · "View all Kroc stories" link · recurring events · external‑embed examples.

**New this round:**

- **OQ‑1 — Donate page vs. link.** ✅ **Closed 2026‑06‑29:** Donate is an **external link**, not a page (SCHEMA‑1).
- **OQ‑2 — Catalog search vs. global search.** Catalog‑scoped class search (SCHEMA‑11) is distinct from any global site search (NAV‑1 / PAGE‑6). One system or two? *(Architect.)*
- **OQ‑4 — Rentals form.** Inquiry form vs. a booking system. *(Architect / client.)*
- **OQ‑5 — Church scope.** Reuse `[facility_section]` + `[faqs]` + `[custom_forms]`, or bespoke ministry/troops model. *(Architect.)*
- **OQ‑7 — Membership / Day Pass integration.** Sign‑up / purchase via TractionRec / Club Automation — embed widget vs. deep link; vendor‑hosted/embed only, **no DB**. *(Integration meetings.)*
- **Event taxonomy** — `[event_categories]` vs. an `event_type` field (SCHEMA‑2). *(Architect.)*
- **Background field group** — shared config vs. per‑template fields (C2 / SCHEMA‑5/14/18). *(Architect.)*
- **Apex vs. instance** — one CMS with a site‑type setting vs. a separate template set (C3 / SCHEMA‑12). *(Architect.)*
- **Stories → Kroc Highlights** — relabel slugs/nav too, or display‑only (C4 / SCHEMA‑8). *(Architect.)*
- **Careers model** — `[job_postings]` vs. reuse `[volunteer_opportunities]` (SCHEMA‑NEW). *(Architect.)*
- **Event tablet hero** — CSS fallback (recommended) vs. dedicated `Event Image — Tablet` (SCHEMA‑16). *(Architect / client.)*

---

## Addendum — 2026‑07‑13 design‑extraction audit (SCHEMA‑23…26)

The schema‑sync close‑out extracted the content model from the **finished** six new pages ([pages-new.jsx](pages-new.jsx) + mobile) and folded the gaps into [architecture-proposal-v3.md](architecture-proposal-v3.md). Rows are tagged **(7/13)** there.

| Queue # | Decision | Where it lands | Tag |
|---|---|---|---|
| SCHEMA‑23 | `[informational_pages]` **Hero Primary/Secondary CTA** (Membership "Sign Up Today" / "View Member Benefits", Rentals "Take a Seat Today") — Part 4 referenced them but §27 never defined them | §27 | 🟢 |
| SCHEMA‑24 | `[rate_cards]` **Comparison Rows** (per‑benefit text values per plan column — the Family Play table), block‑level **Fine Print/Disclaimer** ("$55 Joiner's Fee…"), **Tagline** | §21 | 🟢 |
| SCHEMA‑25 | Block deltas: `[people_block]` **2‑up with bio + contact**; `[donation_block]` **tertiary CTA** (3‑CTA policy bands); `[featured_stories]` **1‑up Quote** mode; `[intro_band]` **Checklist Items**; `[facility_section]` hours **Day → Label**; `[custom_forms]` **date/number/tel** field types; `[map_block]` **CTA**; Careers **Text‑to‑Apply** (keyword + shortcode) | §15 · §16 · §8 · §19 · §11 · §14 · §20 · §42 | 🟢🔄 |
| SCHEMA‑26 | Part 4 composition fixes: §37 **Membership quick‑nav row** (Compact 6‑up) + PlayCare mapping disambiguated (band copy vs. `[rate_cards]` rates); §38 "Green Intro Band" renamed; §40 "Host an event" intro + **Theatre Director band** added, "Client List" flagged (not in the built design); §42 Text‑to‑Apply + "Join us" band | Part 4 §37–42 | 🔄⚐ |

⚐ **New flag:** Church **Weekly Ministries** is a static schedule list `{Title, When, Description}`, not an accordion — `[schedule_list]` repeater block vs. Page Content (v3 pending #17, architect).

## Change log

| Date | Source | Summary |
|---|---|---|
| 2026‑05‑12 (wk of) | Design review | Locked architecture |
| 2026‑05‑28 | Kroc Catch‑up Discussion/Planning | 20 decisions → [architecture-proposal-v2-changes.md](architecture-proposal-v2-changes.md) |
| 2026‑06‑29 | Prototype sync (Figma‑comment tickets) | This proposal — SCHEMA‑1…19 + SCHEMA‑NEW: nav + mega‑menu, header/footer settings, new blocks (Intro Band, Map Block, Featured Events, Rate Cards, Job Postings, Event Categories), class/event Member‑Public pricing + Session Dates + Event Excerpt, facility carousel + structured hours, Featured Pages media/Compact, informational hero background + accordion, homepage hero video, Contact global footer, 6 new pages formalized; apex/instance, PricePoints, Background group, display‑label standards. Verified: BLK‑6/8/10, PAGE‑4 |
| 2026‑07‑13 | Design‑extraction audit (schema‑sync close‑out) | SCHEMA‑23…26 — informational hero CTAs, rate‑card Comparison Rows + Fine Print + Tagline, block deltas (people 2‑up, quote mode, checklist, hours label, form field types, map CTA, tertiary band CTA), Part 4 composition fixes; see Addendum |

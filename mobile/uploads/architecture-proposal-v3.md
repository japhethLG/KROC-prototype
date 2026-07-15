# KROC Centers — Architecture Proposal v3 (Final Architecture)

> The **complete, final content architecture** for KROC Centers — every content model with its full field set. This supersedes [architecture-proposal-v2.md](architecture-proposal-v2.md) and folds in the **2026‑06‑29 prototype sync** (the Figma‑comment ticket batch captured in [schema-sync-queue.md](schema-sync-queue.md)) on top of the 2026‑05‑28 meeting decisions.
>
> For the **delta only** (what changed in this round and why), see the companion [architecture-proposal-v3-changes.md](architecture-proposal-v3-changes.md).
>
> **Companion docs:** [schema-sync-queue.md](schema-sync-queue.md) (content‑model changes from the prototype) · [architecture-proposal-v2.md](architecture-proposal-v2.md) (prior final architecture) · [architecture-proposal-v2-changes.md](architecture-proposal-v2-changes.md) (5/28 delta).

---

## Status legend

Every field carries a status in the **St.** column:

| Tag | Meaning |
|---|---|
| 🔒 | **Locked** — confirmed in an earlier round; carried unchanged |
| 🆕 | **New** — added during design (not in the prior proposal) |
| 🔄 | **Changed** — existed before but type/name/options were modified |
| ⏳ | **Pending** — field exists in principle but is blocked on an example or external dependency before it's final |

Rows marked **(6/29)** in Notes were introduced or modified by the **2026‑06‑29 prototype sync** (this round); rows marked **(7/13)** trace to the **2026‑07‑13 design‑extraction audit** of the finished six new pages (SCHEMA‑23…26); rows marked **(5/28)** trace to the 2026‑05‑28 meeting; all other non‑🔒 rows trace to the prior (week‑of‑2026‑05‑12) review. Fields removed during design are **omitted** (see [Removed fields](#removed-fields)).

### Type legends

**Content Type:** Instance · Dataset · Single Page · Pageset · Block
**Template Type:** Fixed · Hybrid · Freestyle · Automated · Fixed (repeater) · Automated Component

---

## What's new in v3 (delta summary)

The 2026‑06‑29 sync (SCHEMA‑1…19 + the SCHEMA‑NEW page batch). Full detail in [architecture-proposal-v3-changes.md](architecture-proposal-v3-changes.md).

| Queue # | Decision | Where it lands |
|---|---|---|
| SCHEMA‑1 | Navigation model — editable primary nav `{label, target}` + utility bar; **Donate = external link** (OQ‑1 closed) | §4 Custom Navigation · §1 Kroc Location |
| SCHEMA‑2 | **Mega‑menu** model — child links + "View All" index; Classes driven by `[program_categories]`, Events needs an **`[event_categories]`** taxonomy | §4 · §5 Event Categories 🆕 |
| SCHEMA‑3 | **Header CTA config** — two editable global CTAs (Become a Member / Purchase Classes) | §1 Kroc Location |
| SCHEMA‑4 | Footer/global settings — mission text, **`newsletter_signup_url`**, social, footer links, location **email**, copyright | §3 Connect · §1 Kroc Location |
| SCHEMA‑5 | **Intro Band block** 🆕 — homepage membership callout + Membership page | §19 Intro Band 🆕 |
| SCHEMA‑6 | `[classes]` **`marketing_description`** + photo optional (no‑image fallback) | §26 Class Detail |
| SCHEMA‑7 | People block **1‑up feature** — block‑level Feature Heading + Lead‑in | §15 People Block |
| SCHEMA‑8 | **Labels:** "Stories" → "Kroc Highlights" (display only); Featured Programs title; "Meet the Team" | Cross‑cutting · §8 · §17 |
| SCHEMA‑9 | Featured Pages — per‑item **media type** (icon\|image) + block **Card Style** (Full\|Compact) + 6‑up | §12 Featured Pages |
| SCHEMA‑10 | Facility Section — **photo repeater** (carousel), structured **Hours** (multi‑period/closed, optional) | §11 Facility Section |
| SCHEMA‑11 | All Programs **"Search for Classes"** block (catalog‑wide finder) | §24 All Programs |
| SCHEMA‑12 | **Apex/Instance site‑type flag** + reusable **`[map_block]`** (Locator\|Single) | Cross‑cutting · §20 Map Block 🆕 |
| SCHEMA‑13 | `[classes]` **Session Dates** + **Member/Public price** | §26 Class Detail |
| SCHEMA‑14 | Informational hero **Background Type** (Color\|Image) + **Accordion** content | §27 Informational Pages |
| SCHEMA‑15 | Class Detail accepts **drag‑in blocks** (Image Gallery); gallery **Layout** Mosaic\|Grid | §26 · §13 Image Gallery |
| SCHEMA‑16 | Event Detail **Member/Public price**; tablet‑hero decision | §33 Event Detail |
| SCHEMA‑17 | Contact Us uses the **global footer** (no cross‑link card) | §3 · §34 Contact Us |
| SCHEMA‑18 | Homepage hero **photo OR video** background | §23 Homepage |
| SCHEMA‑19 | **Featured Events block** 🆕 + `[events]` **Event Excerpt** | §10 Featured Events 🆕 · §33 |
| SCHEMA‑NEW | **6 new pages** formalized (Membership, Day Pass, About Us, Rentals, Church, Careers) + **`[rate_cards]`** & **`[job_postings]`** blocks | Part 4 · §21 · §22 |
| SCHEMA‑23…26 | **(7/13)** Design‑extraction audit of the finished pages — informational hero CTAs, rate‑card comparison rows + fine print, block deltas (people 2‑up, quote mode, checklist, hours label, form field types, map CTA, tertiary band CTA), Part 4 composition fixes | §27 · §21 · Part 2 · Part 4 |

**Verified, no schema change this round:** BLK‑6 (site alert CTA already editable), BLK‑8 (People "Email Us" label), BLK‑10 (editable block headers), PAGE‑4 (event thumbnail already in the 3‑field hero standard).

---

## Cross‑cutting standards

These span multiple schemas; defining them once keeps the per‑schema tables short.

### X1. Hero Image Set 🔒 (5/28)

Wherever a schema lists **Hero Image — Desktop / Mobile / Thumbnail**, it follows the standard set: Desktop (full‑bleed), Mobile (optional crop, falls back to Desktop), Thumbnail (optional card/feed crop, falls back to Desktop). No dedicated **tablet** field — tablet falls back via responsive CSS (SCHEMA‑16 decision; revisit only if a center needs a separately‑cropped tablet asset).

### X2. WYSIWYG content controls 🔒 (5/28)

Every Rich Text / WYSIWYG field enforces house styling: inline images forced into a **lightbox** (rounded, bordered), constrained formatting. Applies to all WYSIWYG bodies. Renderer/template standard, not a per‑schema field.

### X3. Member / Public Price Points 🆕 (6/29)

A shared **`PricePoints`** display model — **`Member Price`** + **`Public Price`** — replaces single‑price fields on monetized content. Values resolve **dynamically from TractionRec / Club Automation** (embed/redirect, **no DB**); the CMS may hold display fallbacks. Rendered by one `PricePoints` component at two sizes (card + detail/sidebar). **Applies to** `[classes]` (SCHEMA‑13), `[events]` (SCHEMA‑16), and `[rate_cards]` (membership tiers / day pass / PlayCare). *(Open‑house demo: Members Free / Public $5.)*

### X4. Background field group 🆕 (6/29)

A reusable **`Background`** config — **`Type`** (`Color` | `Image`, plus `Video` where a hero supports it), **`Color`** (palette select), **`Image`** (media), **`Video`** (source ⏳ pending hosting). Replaces per‑template "palette OR image" fields so hero‑bearing blocks/pages share one pattern. **Applies to** `[intro_band]` (SCHEMA‑5), `[informational_pages]` hero (SCHEMA‑14), `[homepage]` hero video (SCHEMA‑18); extensible to other heroes. **Flag for architect:** implement as one shared field group vs. per‑template fields.

### X5. Apex / Instance site‑type 🆕 (6/29)

A site‑level **`Site Type`** flag — **`Apex`** (kroccenter.org, aggregates all centers) vs. **`Instance`** (an individual Kroc). **Cross‑center elements** (center/ZIP locator inputs, the multi‑center map, location filters) render on **Apex only** and are hidden on Instances. On Instances, locator inputs become **within‑center** search. The map is the reusable `[map_block]` (X / §20) with `Locator` (apex) vs. `Single` (instance) variants. **Flag for architect:** one CMS with a site‑type setting vs. a separate template set for instances.

### X6. Display label vs. slug 🆕 (6/29)

"Stories" surfaces as **"Kroc Highlights"** in UI/headings, but the **`[stories]` / `[featured_stories]` slugs are unchanged** (client said "for now"). Renaming the 6.6/6.7 page labels and nav/tag references for full consistency is a **naming decision for the architect** (SCHEMA‑8). Same principle applies to any future display‑only relabel.

### X7. Search scope 🔒 (5/28, extended)

Global site‑wide search remains **out of scope** for launch. **Per‑list contextual search** is allowed per page. New this round: **catalog‑scoped class search** (All Programs "Search for Classes," SCHEMA‑11) queries across all `[program_categories]` — distinct from any future global search. **Flag for architect (OQ‑2):** are catalog search and global search one system or two?

---

# Part 1 · Foundational

## 1. Kroc Location `[kroc_location]`

**Instance** · the physical center; supplies global identity, header/footer, integration IDs, and the site‑type flag.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Facility Name | Text | Yes | 🔒 | |
| TractionRec / ClubAuto ID | Toggle | No | 🔒 | |
| General Hours | Text | Yes | 🔒 | |
| Logo (Kroc + Local Lockup) | Image | Yes | 🔒 | Header + footer |
| Address | Text | Yes | 🔒 | Footer, Contact sidebar |
| Phone | Text | No | 🔒 | Footer, Contact sidebar |
| Email | Text | No | 🆕 | **(6/29)** e.g. info@krocphoenix.org — footer + Contact (SCHEMA‑4) |
| Donation Link | URL | No | 🔒 | Global "Donate" CTA target — **Donate is an external link, not a page** (6/29, OQ‑1 closed) |
| Newsletter Signup URL | URL | No | 🆕 | **(6/29)** Vendor form (Mailchimp/Constant Contact/Emma); replaces the inline email/phone capture (SCHEMA‑4) |
| Connect Band Hero Photo | Image | Yes | 🔒 | Footer Connect band |
| Social Handles | Repeater (Platform, URL) | No | 🔒 | FB, X, LinkedIn, YouTube, Instagram |
| Affiliate / Territory Links | Repeater (Label, URL) | No | 🔒 | **(5/28)** Locally‑editable footer territory links |
| Footer Links | Repeater (Label, URL) | No | 🆕 | **(6/29)** Editable footer link list (kroccenter.org, Thrift & Donate Goods, …) (SCHEMA‑4) |
| Header CTA 1 (Label + URL) | Grouped | No | 🆕 | **(6/29)** Global header CTA, e.g. "Become a Member" — TractionRec/Club Auto embed/redirect (SCHEMA‑3) |
| Header CTA 2 (Label + URL) | Grouped | No | 🆕 | **(6/29)** e.g. "Purchase Classes" (SCHEMA‑3) |
| Site Type | Dropdown (`Apex` / `Instance`) | Yes | 🆕 | **(6/29)** Drives apex‑only cross‑center elements (X5 / SCHEMA‑12) |
| Timezone | Dropdown (IANA tz) | Yes | 🔒 | **(5/28)** Powers automated facility Open/Closed status (§11) |

> Copyright line "The Salvation Army" is a global/standard footer string (SCHEMA‑4).

## 2. Global Site Alert `[site_alert]`

**Dataset · Fixed** · emergency / promo strip, sticky above the header. *(No change this round — BLK‑6 verified: the Optional CTA already satisfies "CTA text should be editable.")*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Banner Name | Text | Yes | 🔒 | Internal label |
| Alert Message | Text | Yes | 🔄 | Plain Text (slim strip) |
| Alert Variant | Dropdown | Yes | 🔄 | `warning` / `info` / `danger` / `navy` / `dark`; palette expands ⏳ pending |
| Optional CTA (Label + URL) | Grouped | No | 🔄 | Merges old Button Text + Button Link (already editable — BLK‑6 verified 6/29) |
| Show Icon | Toggle | No | 🆕 | Contextual icon matched to variant |
| Start Date | Datetime | No | 🆕 | Auto‑publish window start |
| End Date | Datetime | No | 🆕 | Auto‑hide window end |
| Dismissible | Toggle | No | 🆕 | Persists dismiss state per session |

## 3. Connect / Footer `[connect_block]`

**Dataset · Automated Component** · universal footer; no layout variants.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Mission Statement | Rich Text | Yes | 🔒 | The **Salvation Army mission statement**, managed globally (consider locked/default — standardized copy, SCHEMA‑4) |

**Automated content (no fields):** address, phone, hours, **email**, social handles, connect‑band photo, affiliate/territory links, footer links, and the **newsletter signup URL** flow from `[kroc_location]`; quick‑nav flows from `[custom_navigation]`.

> **(6/29) Change (SCHEMA‑17):** **Contact Us now uses this global footer** like every other page (social links live here, sourced from `[kroc_location].social_handles`). The v2 "cross‑link card on Contact to avoid recursion" note is **removed**.

## 4. Custom Navigation `[custom_navigation]`

**Dataset · Fixed (repeater)** · header + footer nav, with optional mega‑menus.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Navigation Name | Text | Yes | 🔒 | |
| Menu Item Label (rep) | Text | Yes | 🔒 | |
| Menu Item URL / Target (rep) | URL / Internal Link | Yes | 🔄 | **(6/29)** Internal page ref **or** external URL — one editor‑set target (SCHEMA‑1) |
| Parent Menu Item (rep) | Internal Link | No | 🔒 | Present value → dropdown |
| Sort Order (rep) | Sort Order | No | 🔒 | |
| Has Mega Menu (rep) | Toggle | No | 🆕 | **(6/29)** Item expands into a mega panel (SCHEMA‑2) |
| Mega Source (rep) | Dropdown (`Program Categories` / `Event Categories` / `Manual`) | No | 🆕 | **(6/29)** `Classes` → `[program_categories]`; `Events` → `[event_categories]`; `Manual` → child links |
| Mega "View All" Index (rep) | Internal Link | No | 🆕 | **(6/29)** e.g. "All Classes" → All Programs; "All Events" → Events Root |
| Mega Child Links (rep of rep) | Repeater (Label, URL/Icon) | No | 🆕 | **(6/29)** Used when Mega Source = `Manual` |
| Seasonal (rep) | Toggle | No | 🆕 | Marks item as seasonal |
| Start Date (rep) | Datetime | No | 🆕 | Show seasonal item from |
| End Date (rep) | Datetime | No | 🆕 | Hide seasonal item after |

> **Current primary set (6/29):** Home · About Us · Membership · Classes (mega) · Events (mega) · Rentals · Church. **Utility bar:** Careers · Donate (external) · Hours & Closures. Search intentionally omitted. New page targets formalized in **Part 4**.

## 5. Event Categories `[event_categories]` 🆕 (6/29)

**Dataset / Taxonomy** · drives the Events mega‑menu and event filtering. **Flag for architect (SCHEMA‑2):** confirm whether an event taxonomy already exists; if not, add this (or an `event_type` field on `[events]`).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Category Name | Text | Yes | 🆕 | e.g. Community Events, Fundraisers, Performances |
| Icon | Remote API | No | 🆕 | `kroc-icon` for mega‑menu item |
| Sort Order | Sort Order | No | 🆕 | |
| Slug | Text | Yes | 🆕 | Drives `/events/:category` filtering |

> Mirrors how `[program_categories]` drives the Classes mega. Used as a relation/filter on `[events]`.

---

# Part 2 · Blocks (§7)

## 6. FAQs `[faqs]`

**Block · Fixed (repeater)** · accordion; reusable for any accordion content. *(No change this round; the accordion model is now also surfaced as an Informational‑page content option — SCHEMA‑14.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | Internal label |
| FAQ Scope | Dropdown (`Local` / `Global (National)`) | Yes | 🔒 | **(5/28)** Global is fed from National & locked locally; Local is center‑authored |
| Question (rep) | Text Area | Yes | 🔄 | |
| Answer (rep) | Rich Text / WYSIWYG | Yes | 🔄 | Supports links/CTAs/images per WYSIWYG controls (X2) |

**Behavior:** when both scopes render, **local rows appear above** the fixed global set. Pattern reusable for any accordion content (e.g. Membership/Rentals policies, facility FAQs).

## 7. External Embed `[external_embed]`

**Block · Fixed** · sandboxed third‑party iframe. *(No change this round.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Embed Type | Dropdown | Yes | 🔄 | `Canva (3:4)` · `Video (16:9)` · `TikTok (9:16)` · `Custom` |
| Embed URL | Text Area | Yes | 🔒 | iframe src; sandboxed |

## 8. Featured Stories `[featured_stories]`  *(UI label: "Featured Kroc Highlights")*

**Block · Fixed (repeater)** · slug unchanged; **display label "Kroc Highlights"** (X6 / SCHEMA‑8). BLK‑10 verified: Block Title already editable.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Block Title | Text | No | 🔄 | **(6/29)** Default/example now "Kroc Highlights" (was "Stories") — display label only (SCHEMA‑8) |
| View All Link | URL / Internal | No | 🆕 | Optional "View All" |
| Display Mode | Dropdown | No | 🔄 | `Grid 3‑up` (default) · `Carousel` (>3) · `1‑up Quote` — **(7/13)** full‑width quote card (photo + blockquote + attribution); Membership member story (SCHEMA‑25) |
| Featured Story (rep) | Relational `[stories]` | Yes | 🔒 | |

## 9. Featured Classes `[featured_classes]`

**Block · Fixed (repeater)** · hand‑curated. Inherits the new `[classes]` fields (Session Dates, Member/Public price) automatically — **no block schema change** (SCHEMA‑13).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Block Title | Text | No | 🆕 | Optional section heading |
| View All Link | URL / Internal | No | 🆕 | |
| Display Mode | Dropdown | No | 🆕 | `Grid 3‑up` · `Grid 4‑up` · `Carousel` |
| Featured Class (rep) | Relational `[classes]` | Yes | 🔒 | **Max 6 items (5/28)** |

## 10. Featured Events `[featured_events]` 🆕 (6/29)

**Block · Fixed (repeater)** · mirror of `[featured_classes]`; surfaces curated `[events]`. (SCHEMA‑19.) Inherits `[events]` Member/Public price + Event Excerpt automatically.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Block Title | Text | No | 🆕 | Optional section heading |
| View All Link | URL / Internal | No | 🆕 | Typically `/events/` |
| Display Mode | Dropdown (`Grid 3‑up` / `Grid 4‑up`) | No | 🆕 | |
| Featured Event (rep) | Relational `[events]` | Yes | 🆕 | Curated; suggest capping like Featured Classes (max 6) |
| Custom Card (rep) | Grouped (Image, Title, Excerpt, Date, URL) | No | 🆕 | Manually‑authored card as an alternative to a referenced event |

> Homepage "Featured Classes and Events" = `[featured_classes]` + `[featured_events]` dragged onto `[homepage]` — no combined type needed.

## 11. Facility Section `[facility_section]`

**Block · Fixed (repeater)** · one per facility (pool, gym, theater, chapel). Reused by Rentals (rentable spaces) and Church (service times).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Facility Section Name | Text | Yes | 🔒 | |
| Photos (rep) | Repeater (Image) | Yes | 🔄 | **(6/29)** Was single Hero Image → **repeater of images** drives a carousel (SCHEMA‑10). Hero Image Set (X1) still applies for the lead crop |
| Hero Image — Mobile | Image | No | 🔒 | **(5/28)** |
| Thumbnail | Image | No | 🔒 | **(5/28)** |
| Body (WYSIWYG) | Rich Text | Yes | 🔒 | |
| Layout Variant | Dropdown | Yes | 🆕 | `Photo‑left` · `Photo‑right` |
| CTA (Label + URL) | Grouped | No | 🔄 | **(6/29)** Confirmed truly optional — can be empty (SCHEMA‑10) |
| Feature Pills (rep) | Text | No | 🆕 | Static text chips (e.g. "8 lanes"); amenities for rentals |
| Hours of Operation | Repeater (Label, Ranges[] **or** Closed) | No | 🔄 | **(6/29)** Structured: multiple time ranges per row **or** a Closed flag; whole group **optional** (no‑hours variant for rentals) (SCHEMA‑10). **(7/13)** Day → free **Label** — a weekday *or* a service name (Church "Breakfast Church") (SCHEMA‑25) |
| Status Mode | Dropdown (`Auto` / `Closed — Seasonal` / `Closed — Maintenance`) | No | 🔒 | **(5/28)** `Auto` computes Open/Closed from hours + timezone |
| Status Message | Text | No | 🔒 | **(5/28)** Shown when a closed override is active |

> **Rentals reuse (NEW‑4):** the rentable‑space model extends this block — no fixed hours (group omitted), amenities via Feature Pills, a rate line, and a rental‑inquiry CTA.

## 12. Featured Pages `[featured_pages]`

**Block · Fixed (repeater)** · BLK‑10 verified (Block Title editable). New media + card‑style options (SCHEMA‑9).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Block Title | Text | No | 🆕 | Optional section heading |
| View All Link | URL / Internal | No | 🆕 | |
| Card Style | Dropdown (`Full` / `Compact`) | No | 🆕 | **(6/29)** `Full` = media panel + body + CTA; `Compact` = icon chip + label only, whole card is the link (SCHEMA‑9) |
| Display Mode | Dropdown (`3‑up` / `4‑up` / `6‑up`) | No | 🔄 | **(6/29)** `6‑up` added for Compact (SCHEMA‑9) |
| Featured Page (rep) | Internal Link | Yes | 🔒 | |
| Media Type (rep) | Dropdown (`Icon` / `Image`) | No | 🆕 | **(6/29)** `Icon` → kroc‑icon on a tinted panel; `Image` → upload. Same footprint so grids align. Full style only (SCHEMA‑9) |
| Icon (rep) | Remote API | No | 🆕 | **(6/29)** When Media Type = Icon |
| Image (rep) | Image | No | 🔒 | Per‑card override (Media Type = Image) |
| Card Description (rep) | Text Area | No | 🆕 | Full style only (hidden in Compact) |
| Button Text (rep) | Text | No | 🔒 | Full style only |

> **Behavior:** Compact items use **icon + title only** (body/CTA hidden); the whole card links. Used by homepage Quick Links bar and the Membership section jump‑nav. Full style used by homepage "Get Started" and About Us explore links.

## 13. Image Gallery `[image_gallery]`

**Block · Fixed (repeater)** · drag‑in on any Hybrid page (Class Detail, Event Detail).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Gallery Name | Text | Yes | 🔒 | |
| Layout | Dropdown (`Mosaic` / `Grid` / `Carousel`) | No | 🔄 | **(5/28)** Carousel added. **(6/29)** Mosaic (varied spans/masonry) vs Grid (uniform) confirmed; Mosaic used on Class Detail (SCHEMA‑15) |
| Image (rep) | Image | Yes | 🔒 | |
| Alt Text (rep) | Text | Yes | 🆕 | Accessibility text per image |
| Caption (rep) | Text | No | 🔒 | Shown in lightbox |

## 14. Custom Forms `[custom_forms]`

**Block · Fixed (repeater)** · native drag‑and‑drop form builder. Reused by Program Request (All Programs), Rentals interest form, Church prayer request, Membership hold/cancel.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Form Name | Text | Yes | 🔒 | Internal label |
| Form Fields (rep) | Repeater (Field Type, Label, Placeholder, Required) | Yes | 🔄 | `text` · `email` · `select` · `textarea` — **(7/13)** add `date` · `number` · `tel` (Birthdate, Estimated Attendance, phone fields) (SCHEMA‑25) |
| Submit Label | Text | Yes | 🆕 | e.g. "Send Message" |
| Webhook / Recipient | URL | Yes | 🆕 | Fixed submission target |
| Post‑Submit Behavior | Dropdown (`Show Message` / `Redirect to URL`) | Yes | 🆕 | **(5/28)** |
| Success Message | Text Area | No | 🆕 | Used when behavior = Show Message |
| Redirect URL | URL | No | 🆕 | **(5/28)** Used when behavior = Redirect |

## 15. People Block `[people_block]`

**Block · Fixed (repeater)** · formalized this round (SCHEMA‑7). Reused for leadership (About Us, Church), HR contacts (Careers), department portal (Contact Us). BLK‑8 verified: card shows "Email Us" (mailto), no schema change.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | **(6/29)** Internal label |
| Layout | Dropdown (`4‑up cards` / `3‑up with bio` / `2‑up with bio + contact` / `1‑up feature`) | No | 🔄 | **(7/13)** `2‑up with bio + contact` added — Church team & Careers HR cards (SCHEMA‑25) |
| Feature Heading | Text | No | 🆕 | **(6/29)** 1‑up feature only — e.g. "Hello from the {Role}" (SCHEMA‑7) |
| Lead‑in | Text | No | 🆕 | **(6/29)** 1‑up feature only — intro line (SCHEMA‑7) |
| Name (rep) | Text | Yes | 🆕 | |
| Role (rep) | Text | Yes | 🆕 | |
| Headshot (rep) | Image | Yes | 🆕 | Portrait 4:5 |
| Bio (rep) | Text Area | No | 🆕 | Optional |
| Email (rep) | Text | No | 🆕 | Optional — renders as "Email Us" mailto (BLK‑8) |
| Phone (rep) | Text | No | 🆕 | Optional |

> Default heading "Meet the Team" (was "Camden Leadership"); Contact Us uses the distinct "Meet The Kroc Center Team" (SCHEMA‑8 / PAGE‑8).

## 16. Donation Block `[donation_block]`

**Block · Fixed** · drag‑in mission band. Reused as the mission/CTA band on About Us, Careers, Membership benefits. *(No change this round; Background Variant aligns with the X4 palette pending values.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | Internal label |
| Title | Text | Yes | 🆕 | |
| Body | Text Area | No | 🆕 | |
| Primary CTA Label | Text | Yes | 🆕 | e.g. "Donate Now" |
| Primary CTA URL | URL | Yes | 🆕 | Defaults to `[kroc_location].donation_link` |
| Secondary CTA Label | Text | No | 🆕 | |
| Secondary CTA URL | URL | No | 🆕 | |
| Tertiary CTA Label | Text | No | 🆕 | **(7/13)** Policy bands (Membership / Rentals) carry up to 3 CTAs (SCHEMA‑25) |
| Tertiary CTA URL | URL | No | 🆕 | **(7/13)** |
| Background Variant | Dropdown | Yes | 🆕 | `red` (default) · `navy` · `dark`; palette expands ⏳ pending |

## 17. Featured Programs `[featured_programs]`

**Block · Fixed (repeater)** · BLK‑10 verified (Block Title editable).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Block Title | Text | No | 🔄 | **(6/29)** Default/example now **"Programs and Classes"** (was "How We Serve") (SCHEMA‑8) |
| View All Link | URL / Internal | No | 🆕 | Typically `/programs/` |
| Display Mode | Dropdown (`Grid 3‑up` / `Grid 4‑up`) | No | 🆕 | Multi‑row supported (5/28) |
| Featured Category (rep) | Relational `[program_categories]` | Yes | 🆕 | Card pulls icon/name/intro |

## 18. Featured Volunteer Opportunities `[featured_volunteer_opportunities]`

**Block · Fixed (repeater)** · BLK‑10 verified. Reusable on Careers by retitling to "Join the Team" (Careers reuse itself → see §22 / Part 4). *(No field change this round.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Block Title | Text | No | 🆕 | |
| View All Link | URL / Internal | No | 🆕 | Typically `/volunteer/` |
| Display Mode | Dropdown (`Grid 3‑up` / `Grid 4‑up`) | No | 🆕 | |
| Featured Opportunity (rep) | Relational `[volunteer_opportunities]` | Yes | 🆕 | |

## 19. Intro Band `[intro_band]` 🆕 (6/29 · built 7/7)

**Block · Fixed** · drag‑in promo/intro band. Consumers: homepage **membership callout** (HOME‑6) and the **Membership page** (NEW‑1); Day Pass "Membership is for everyone" callout. (SCHEMA‑5.)

> **(7/7) As‑built:** schema created in the instance with small deviations from the 6/29 spec — Body is **Multi Line Text** (not Rich Text), the CTAs repeater became **two discrete CTA pairs** (matching `[donation_block]`), Photo → **Image (Media)**, and the X4 Background group is deferred: a plain **Background Color dropdown (`red` / `navy`)** for now (palette/image expansion pending ⏳ item 1 / X4).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | Internal label (`block_name`) |
| Layout Variant | Dropdown (`No‑photo` / `Photo‑right`) | Yes | 🆕 | `layout_variant` |
| Eyebrow | Text | No | 🆕 | Optional uppercase label (`eyebrow`) |
| Title | Text | Yes | 🆕 | `title` |
| Body | Multi Line Text | No | 🔄 | **(7/7)** Was Rich Text (`body`) |
| Primary CTA (Label + URL) | Grouped | No | 🔄 | **(7/7)** Was CTAs repeater (`primary_cta_label` / `primary_cta_url`) |
| Secondary CTA (Label + URL) | Grouped | No | 🔄 | **(7/7)** (`secondary_cta_label` / `secondary_cta_url`) |
| Image | Media | No | 🔄 | **(7/7)** Was "Photo"; photo variant only (`image`) |
| Background Color | Dropdown (`red` / `navy`) | No | 🔄 | **(7/7)** X4 Background group deferred; no‑photo variant only (`background_color`) |
| Checklist Items (rep) | Text | No | 🆕 | **(7/13)** Optional two‑column checklist — Membership benefits band (8 items + 2 CTAs) (SCHEMA‑25) |

## 20. Map Block `[map_block]` 🆕 (6/29)

**Block · Fixed** · reusable location map. (SCHEMA‑12 / HOME‑4.) Apex homepage uses `Locator`; instance **About Us (NEW‑3)** uses `Single`.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Variant | Dropdown (`Locator` / `Single`) | Yes | 🆕 | `Locator` (apex · multi‑center finder + City/ZIP search) · `Single` (instance · one location + Get Directions) |
| Title | Text | No | 🆕 | |
| Body | Text Area | No | 🆕 | |
| CTA (Label + URL) | Grouped | No | 🆕 | **(7/13)** e.g. "Get Directions" (Single variant) (SCHEMA‑25) |

> `Single` reads the address from `[kroc_location]`. `Locator` is **apex‑only** (X5) — it is not placed on instance homepages.

## 21. Rate Cards `[rate_cards]` 🆕 (6/29)

**Block · Fixed (repeater)** · pricing/rate cards. (SCHEMA‑NEW / BLK‑9.) Used by Membership tiers, Day Pass pricing, and PlayCare rates. Pricing is **dynamic from TractionRec / Club Automation** (embed/redirect, **no DB**); CMS holds display fallbacks. Uses the shared **PricePoints** model (X3).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Block Title | Text | No | 🆕 | e.g. "Membership Tiers", "Day Pass Pricing", "PlayCare Rates" |
| Display Mode | Dropdown (`Cards` / `Comparison Table`) | Yes | 🆕 | Comparison Table drives the **Family Play** comparison |
| Tier Name (rep) | Text | Yes | 🆕 | e.g. "Adult", "Youth", "Family" |
| Member Price (rep) | PricePoints (X3) | No | 🆕 | Dynamic; member rate |
| Public Price (rep) | PricePoints (X3) | No | 🆕 | Dynamic; public rate |
| Age Range (rep) | Text | No | 🆕 | e.g. "18+", "Youth (3–17)" |
| Billing Period (rep) | Text / Dropdown | No | 🆕 | e.g. "per month", "per visit" |
| Included Features (rep) | Repeater (Text) | No | 🔄 | Bullet list (`Cards` mode) — **(7/13)** comparison rows moved to Comparison Rows (SCHEMA‑24) |
| Comparison Rows (rep) | Repeater (Benefit, Value per plan column) | No | 🆕 | **(7/13)** `Comparison Table` mode — per‑benefit **text values per column** (e.g. "$5/child (drop‑in)" vs "Included"; "$15 off/week" vs "10% off/week") (SCHEMA‑24) |
| CTA (rep) | Grouped (Label, URL) | No | 🆕 | Join / Purchase → TractionRec/Club Auto |
| Fine Print / Disclaimer | Text Area | No | 🆕 | **(7/13)** Block‑level, e.g. "A $55 one‑time Joiner's Fee is required… All rates include sales tax." (SCHEMA‑24) |
| Tagline | Text | No | 🆕 | **(7/13)** Styled closing line, e.g. "Parent & Me Fitness and STEAM classes coming late Winter" (SCHEMA‑24) |

> **Integration (OQ‑7):** sign‑up / purchase via TractionRec / Club Automation — **vendor‑hosted / embed only, no DB connection**.

## 22. Job Postings `[job_postings]` 🆕 (6/29)

**Block · Fixed (repeater)** · open‑position listings for the **Careers** page (NEW‑6). HR contacts use `[people_block]`. **Architect decision flagged (SCHEMA‑NEW):** reuse the `[volunteer_opportunities]` model for jobs, **or** this careers‑specific type. Formalized here per the "formalize now" direction; final reuse call is the architect's.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Block Title | Text | No | 🆕 | e.g. "Open Positions" |
| Role (rep) | Text | Yes | 🆕 | Position title |
| Department (rep) | Text | No | 🆕 | Groups roles |
| Location (rep) | Text / Relational `[kroc_location]` | No | 🆕 | Open positions by location |
| Employment Type (rep) | Dropdown (`Full‑time` / `Part‑time` / `Seasonal`) | No | 🆕 | |
| Apply Link (rep) | URL | Yes | 🆕 | External apply destination |
| Summary (rep) | Text Area | No | 🆕 | Short description |

---

# Part 3 · Pages (§6)

## 23. Homepage `[homepage]`

**Single Page · Hybrid · `/`** · schema owns the hero only; body assembled from drag‑in blocks (Featured Programs, Featured Classes + **Featured Events**, Quick Links via **Compact Featured Pages**, **Intro Band** membership callout, **Map Block** locator on apex).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Hero Eyebrow | Text | No | 🆕 | |
| Hero Title | Text | Yes | 🆕 | Mission‑led H1 |
| Hero Subtitle | Text Area | No | 🆕 | |
| Hero Background Type | Dropdown (`Photo` / `Video`) | No | 🆕 | **(6/29)** Photo or background video (SCHEMA‑18) |
| Hero Image — Desktop | Image | Yes | 🔄 | Doubles as the **video poster/fallback** (reduced‑motion, mobile, while loading) |
| Hero Image — Mobile | Image | No | 🔒 | **(5/28)** |
| Thumbnail | Image | No | 🔒 | **(5/28)** |
| Hero Background Video | Video (source) | No | ⏳ | **(6/29)** Autoplay muted + loop; field type (Media vs URL) ⏳ pending hosting decision (SCHEMA‑18 / X4) |
| Hero Primary CTA (Label + URL) | Grouped | No | 🆕 | e.g. "Become a Member" |
| Hero Secondary CTA (Label + URL) | Grouped | No | 🆕 | e.g. "Tour the Center" |

> The **multi‑center locator + map** is **apex‑only** (`[map_block]` Locator, X5/SCHEMA‑12) — on instances it is not placed on the homepage; the apex map "could go on About Us." Prototype: hero video is schema‑only for now (no build yet). Identity reads from `[kroc_location]`.

## 24. All Programs `[programs_index]`

**Single Page · Hybrid · `/:programs/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Header Title | Text | Yes | 🔒 | |
| Subheader | Text | No | 🔒 | |
| Filter Pills | — (auto) | — | 🔒 | From `[program_categories]` |
| Search for Classes | — (UI) | — | 🆕 | **(6/29)** Catalog‑wide class finder across **all** `[program_categories]` (vs 6.3's single‑category listing). Driven by existing `[classes]` fields — Category, Class Type, Schedule/dates, Title + (marketing) description. No new content type (SCHEMA‑11 / X7) |
| CTA Band | — (drag‑in) | — | 🆕 | `[donation_block]` |
| Program Request Form | — (drag‑in) | — | 🆕 | **(5/28)** `[custom_forms]` — "Suggest a Program" |
| Location Filter | — (UI) | — | 🆕 | **(6/29)** **Apex‑only** (X5) — on instances this is within‑center search, not a locator (SCHEMA‑12) |

## 25. Program Category `[program_categories]`

**Pageset · Fixed · `/:programs/:slug`** · hero uses Hero Image Set (X1). Drives the Classes mega‑menu (SCHEMA‑2).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Category Name | Text | Yes | 🔒 | Hero H1 |
| Icon | Remote API | No | 🔒 | `kroc-icon`; also the mega‑menu item icon |
| Hero Image — Desktop / Mobile / Thumbnail | Image | No | 🆕 | **(5/28)** Hero Image Set |
| Category Intro — Left / Right Column | Rich Text | No | 🆕 | 2‑col intro |
| Classes Listing — Search | — (UI) | — | 🆕 | Per‑list contextual (single category) |
| Classes Listing — Class Type Filter | — (UI) | — | 🆕 | All · Roster · Drop‑In |
| Classes Listing — Date / Category Filters | — (UI) | — | 🆕 | **(5/28)** Date filter queries `[classes]` Session Dates (SCHEMA‑13) |
| Classes Listing — View Toggle (Card / Table) | — (UI) | — | 🆕 | **(5/28)** For dense schedules |
| Classes Listing — Pagination | — (UI) | — | 🆕 | Default 6/page |

> A category‑filtered class listing can be dragged into an Informational Page (sub‑listing). Background‑video hero ⏳ pending (X4).

## 26. Class Detail `[classes]`

**Pageset · Hybrid · `/:programs/:category/:slug`** · accepts drag‑in blocks (Image Gallery, etc.) — SCHEMA‑15.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Class Name | Text | Yes | 🔒 | Hero H1 |
| Program Category | Relational | Yes | 🔒 | Breadcrumb + "Other Classes" feed |
| Hero Image — Desktop / Mobile / Thumbnail | Image | No | 🔄 | **(6/29)** **Photo optional** — define no‑image color‑cover fallback so cards render cleanly (SCHEMA‑6) |
| Description | Rich Text / Remote API | No | 🔒 | "About this class"; WYSIWYG controls (X2) |
| Marketing Description | Rich Text | No | 🆕 | **(6/29)** Surfaced in the card pop‑up (SCHEMA‑6) |
| Class Type | Dropdown (Roster / Drop‑In) | Yes | 🔒 | Pill badge |
| Session Dates | Date Range (start/end + optional duration label) | No | 🆕 | **(6/29)** Roster classes (e.g. "6 weeks · Sep 8 – Oct 15"); **queryable** by the Date filter; renders on card, table, sidebar. Drop‑In omits (SCHEMA‑13) |
| Member Price | PricePoints (X3) | No | 🔄 | **(6/29)** Was single "Dynamic Price" → Member rate (SCHEMA‑13) |
| Public Price | PricePoints (X3) | No | 🆕 | **(6/29)** Public rate (SCHEMA‑13) |
| Deep Link URL | URL | No | 🔒 | "Register Now" target |
| Program Schedule | Repeater | No | 🔒 | Sidebar "Date & Time" |
| Audience | Text / Dropdown | No | 🆕 | e.g. "Adults · 18+" |
| Facility Location | Text | No | 🆕 | |
| Tags | Relational | No | 🆕 | Pill tags |

> One `[classes]` change flows to **all** consumers (6.2 search, 6.3 listing, Featured Classes, 6.4 sidebar + related feed) — no per‑surface schema. Capacity stays runtime‑only (TractionRec). "Add to Calendar" is behavioral.

## 27. Informational Pages `[informational_pages]`

**Pageset · Freestyle · `/:slug/`** · the base model for all six new pages (Part 4). Hero uses the Background field group + Hero Image Set; body is freestyle WYSIWYG + drag‑in blocks.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Page Name | Text | Yes | 🔒 | Hero headline |
| Page Content | WYSIWYG | Yes | 🔒 | WYSIWYG controls (X2) |
| Access Password | Text | No | 🔒 | Powers password‑gate variant |
| Page Eyebrow | Text | No | 🆕 | Uppercase label |
| Hero Subheader | Text Area | No | 🆕 | |
| Hero Primary CTA (Label + URL) | Grouped | No | 🆕 | **(7/13)** e.g. Membership "Sign Up Today", Rentals "Take a Seat Today" — same grouped pattern as `[homepage]` §23 (SCHEMA‑23) |
| Hero Secondary CTA (Label + URL) | Grouped | No | 🆕 | **(7/13)** e.g. Membership "View Member Benefits" (SCHEMA‑23) |
| Hero Background Type | Dropdown (`Color` / `Image`) | No | 🆕 | **(6/29)** Color band or photo hero, via `PageHero` (SCHEMA‑14 / X4) |
| Hero Background Color | Palette select | No | 🆕 | **(6/29)** When Type = Color |
| Hero Background Image (Desktop / Mobile / Thumbnail) | Image | No | 🆕 | **(6/29)** When Type = Image; Hero Image Set (X1) |
| Accordion Content | Drag‑in `[faqs]` / accordion | — | 🆕 | **(6/29)** Collapsible sections (repeater of Heading + Body) — reuses the FAQ/accordion model; e.g. facility policies, Membership/Day Pass FAQs (SCHEMA‑14) |

> Drag‑in blocks available: `[faqs]`, `[facility_section]`, `[people_block]`, `[featured_pages]`, `[map_block]`, `[donation_block]`, `[intro_band]`, `[rate_cards]`, `[job_postings]`, `[featured_stories]`, `[custom_forms]`, `[image_gallery]`.

## 28. All Stories `[stories_index]`  *(UI: "Kroc Highlights")*

**Single Page · Hybrid · `/:stories/`** · slug unchanged; display label per X6.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Header Title | Text | Yes | 🔄 | **(6/29)** Display label "Kroc Highlights" (SCHEMA‑8) |
| Subheader | Text Area | No | 🔒 | |
| Tag Filter Chips | — (auto) | — | 🔒 | From National `[tags]` |
| Per‑list Search | — (UI) | — | 🔒 | Contextual |

## 29. Story Detail `[stories]`

**Pageset · Fixed · `/:stories/:url/`** *(slug unchanged; "Kroc Highlights" display label).*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Title | Text | Yes | 🔒 | |
| Story Image — Desktop / Mobile / Thumbnail | Media | Yes | 🔄 | **(5/28)** Hero Image Set |
| Story Date | Datetime | Yes | 🔒 | |
| Story Body | Rich Text (WYSIWYG) | Yes | 🔒 | WYSIWYG controls (X2) |
| Author | Text | Yes | 🆕 | |
| Author Location | Relational `[kroc_location]` | No | 🆕 | |
| Story Excerpt | Text Area | Yes | 🆕 | Cards, featured modules, feeds |
| Story CTA Label | Text | No | 🔄 | **(5/28)** Configurable (Register / Donate / Learn More) |
| Story CTA URL | URL | No | 🔄 | **(5/28)** Defaults to `[kroc_location].donation_link` |
| Article Tag | Integration Field | No | 🔒 | Fed from National |
| Hashtag | Repeater | No | 🔒 | |
| Related Event | Relational `[events]` | No | 🔒 | |
| Related Program Category | Relational `[program_categories]` | No | 🔒 | |
| External Article | URL | No | 🔒 | "View Original Article →" |

## 30. All Tags `[tags_index]`

**Single Page · Hybrid · `/:tags/`** *(no change this round.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Name | Text | Yes | 🔒 | |
| Description | Rich Text | No | 🔒 | |
| Sort Options | — (UI) | — | 🔒 | A–Z / Most stories / Recently used |
| Per‑list Search | — (UI) | — | 🔒 | Contextual |

## 31. Tag Detail `[tags]`

**Pageset · Automated · `/:tags/:url/`** *(no change this round.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Name | Text | Yes | 🔒 | Wildcard — fed from National |
| Description | Rich Text | No | 🔒 | |
| Position | Sort Order | No | 🔒 | |
| Content Type Filter | — (UI) | — | 🔒 | All / Stories / Events / Programs |
| Story / Event Counts | — (auto) | — | 🔒 | |

## 32. Events Root `[events_root]`

**Single Page · Hybrid · `/:events/`** · hero uses Hero Image Set. Drives the Events mega via `[event_categories]` (SCHEMA‑2).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Hero Title | Text | Yes | 🆕 | |
| Hero Subtitle | Text Area | No | 🆕 | |
| Hero Image — Desktop / Mobile / Thumbnail | Image | No | 🆕 | **(5/28)** Hero Image Set |
| Past / Upcoming Filter | — (UI) | — | 🆕 | **(5/28)** Past events kept, auto‑flagged "Past Event" |
| Month Filter | — (UI) | — | 🆕 | **(5/28)** |
| Category Filter | — (UI) | — | 🆕 | **(6/29)** From `[event_categories]` (SCHEMA‑2) |
| Per‑list Search | — (UI) | — | 🔒 | Contextual |

> Recurring events ⏳ pending. Social‑share row from `[kroc_location].social_handles`.

## 33. Event Detail `[events]`

**Pageset · Hybrid · `/:events/:slug/`** · accepts drag‑in blocks (Image Gallery confirmed). PAGE‑4 verified: Thumbnail already in the 3‑field hero standard.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Event Title | Text | Yes | 🆕 | |
| Event Category | Relational `[event_categories]` | No | 🆕 | **(6/29)** Mega‑menu + filtering (SCHEMA‑2) |
| Event Image — Desktop / Mobile / Thumbnail | Image | No | 🆕 | **(5/28)** 16:7 campaign artwork; tablet falls back via CSS (SCHEMA‑16 decision) |
| Start Datetime | Datetime | Yes | 🆕 | |
| End Datetime | Datetime | No | 🆕 | Drives auto "Past Event" flag |
| Event Excerpt | Text Area | Yes | 🆕 | **(6/29)** Short card/feed description (mirrors Story Excerpt); on every `EventCard` (SCHEMA‑19) |
| Event Body | Rich Text (WYSIWYG) | Yes | 🆕 | "About the Event"; WYSIWYG controls (X2) |
| Member Price | PricePoints (X3) | No | 🆕 | **(6/29)** Dynamic; sidebar + card (SCHEMA‑16) |
| Public Price | PricePoints (X3) | No | 🆕 | **(6/29)** (SCHEMA‑16) |
| Register Link | URL / Remote API | No | 🆕 | e.g. TractionRec |
| Address | Text | Yes | 🆕 | |
| Contact Name / Email / Phone | Text | No | 🆕 | |

> Price flows to every event‑card surface (Events Root, Tag Detail, "Other Events", Featured Events) by reading `[events]`. "Add to Calendar" behavioral.

## 34. Contact Us `[contact_us]`

**Single Page · Hybrid · `/:contact/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Page Title | Text | Yes | 🆕 | |
| Page Intro | Text Area | No | 🆕 | |
| Department Contacts | Repeater (Department, Email, Phone) | No | 🆕 | "Reach a Team" sidebar |

> **(6/29) Change (SCHEMA‑17):** Contact uses the **standard global Connect footer** (social links live there, from `[kroc_location].social_handles`) — the v2 "cross‑link card to avoid recursion" is removed. Address + Hours from `[kroc_location]`. Form = `[custom_forms]`; FAQs = `[faqs]`; People = `[people_block]` ("Meet The Kroc Center Team"); all drag‑in. No new fields.

## 35. Volunteer Opportunities Index `[volunteer_opportunities_index]`

**Single Page · Hybrid · `/:volunteer/`** *(no change this round.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Hero Title | Text | Yes | 🆕 | |
| Hero Image — Desktop / Mobile / Thumbnail | Image | No | 🆕 | **(5/28)** Hero Image Set |
| Hero Subtitle | Text Area | No | 🆕 | |
| Hero CTA 1 / 2 (Label + URL) | Grouped | No | 🆕 | |
| Highlight Image / Title / Body / CTA | Mixed | No | 🆕 | "Holiday Ambassador" promo panel |
| Why Volunteer Image / Body | Mixed | No | 🆕 | |
| Golden API Failure Copy | Text Area | Yes | ⏳ | Message when Golden API unreachable — integration shape pending |

## 36. Volunteer Opportunity Detail `[volunteer_opportunities]`

**Pageset · Hybrid · `/:volunteer/:slug/`** *(no change this round; see §22 for the Careers reuse question.)*

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Opportunity Title | Text | Yes | 🆕 | Hero H1 |
| Hero Image — Desktop / Mobile / Thumbnail | Image | No | 🆕 | **(5/28)** Hero Image Set |
| Excerpt | Text Area | Yes | 🆕 | Cards, featured modules, search |
| Start Date | Datetime | Yes | 🆕 | |
| End Date | Datetime | No | 🆕 | Blank = ongoing |
| About this Opportunity | Rich Text (WYSIWYG) | Yes | 🆕 | WYSIWYG controls (X2) |
| Shifts | Repeater (Shift Label, Time) | No | 🆕 | Sidebar |
| Role Requirements | Rich Text | No | 🆕 | Sidebar callout |
| Required Trainings | Repeater (Training Name, URL) | No | 🆕 | |
| Facility / Location | Text | No | 🆕 | |
| Register Link | URL | No | 🆕 | "Sign Up" button |
| Redirect URL | URL | No | 🆕 | **(5/28)** Page created but redirects to external sign‑up |
| Contact Name / Phone / Email | Text | No | 🆕 | |

> Golden API sourcing ⏳ pending integration meetings.

---

# Part 4 · New Pages (§6) 🆕 (6/29)

All six ride **`[informational_pages]`** (Pageset · Freestyle) and compose from existing + new drag‑in blocks. Field hints are extracted from the finished prototype designs in [pages-new.jsx](pages-new.jsx); the tables below formalize each page's **section composition** (no net‑new page model unless noted). Pricing throughout is **dynamic from TractionRec / Club Automation** (embed/redirect, **no DB**); CMS holds display fallbacks.

## 37. Membership — `/membership/`

**`[informational_pages]` instance.** Migrated from the San Diego Kroc membership page (NEW‑1).

| Section | Source | Notes |
|---|---|---|
| Page Name + Hero | `[informational_pages]` | Hero H1 + Hero Image Set (campaign hero) + Hero Primary/Secondary CTA (§27, SCHEMA‑23) |
| Quick‑Nav Row | `[featured_pages]` (`Compact` · 6‑up) | **(7/13)** Member Benefits · PlayCare · Center Features · Member Stories · Financial Assistance · Policies (§12 / SCHEMA‑9) |
| Benefits Band | `[intro_band]` (no‑photo + checklist) | Mission/benefits band — 2 CTAs + 8‑item two‑column Checklist Items (§19, SCHEMA‑25) |
| Discounts & Holds | `[faqs]` (accordion) | Reuses accordion model (§6) |
| Membership Tiers | `[rate_cards]` (`Cards`) | 9 tiers — tier name, Member/Public PricePoints, age range, period + Fine Print (§21) |
| Family Play Comparison | `[rate_cards]` (`Comparison Table`) | Comparison Rows + Tagline (§21, SCHEMA‑24) |
| PlayCare Band | Band copy + `[rate_cards]` | **(7/13)** Band = `[intro_band]`‑style copy; the rates sub‑card (Members $5 / Nonmembers $9 · PricePoints) = `[rate_cards]` (§19 / §21) |
| Member Story | `[featured_stories]` (`1‑up Quote`) | Full‑width quote card — photo + blockquote + attribution (§8, SCHEMA‑25) |
| Hold / Cancel Form | `[custom_forms]` | Uses `date` field type for Birthdate (§14) |
| Policies Band | Drag‑in band · cross‑links | Cross‑links to other `[informational_pages]` — 3 CTAs (§16 tertiary CTA, SCHEMA‑25) |

## 38. Day Pass — `/day-pass/`

**`[informational_pages]` instance.** Migrated from the San Diego Kroc Day Pass page (NEW‑2).

| Section | Source | Notes |
|---|---|---|
| Page Name + Hero | `[informational_pages]` | Hero H1 + Hero Image Set (aquatics hero) |
| Green Intro Band | Page Content (WYSIWYG) + CTA links | Intro + access notes — **(7/13)** renamed to avoid confusion with the `[intro_band]` block below; green palette value pending (#1) |
| Pass Pricing | `[rate_cards]` (`Cards`) | Youth / Adult price cards (§21) |
| Membership Callout | `[intro_band]` | Shared "Membership is for everyone" band — same Intro Band used on the homepage (§19) |

## 39. About Us — `/about-us/`

**`[informational_pages]` instance** — all existing blocks, **no new type** (NEW‑3).

| Section | Source | Notes |
|---|---|---|
| Page Name + Hero | `[informational_pages]` | Leadership/facility hero |
| Our Vision | Page Content (WYSIWYG) | Image + bulleted card |
| Our Impact | Page Content | Stat + narrative |
| Explore Links | `[featured_pages]` (3‑up, Full) | (§12) |
| Leadership | `[people_block]` (3‑up with bio) | (§15) |
| Visit Us | `[map_block]` (`Single`) | Instance location map (§20) — the apex map "could go here" |
| Mission Band | `[donation_block]` | (§16) |

## 40. Rentals — `/rentals/`

**`[informational_pages]` instance.** Rentable spaces extend `[facility_section]` (NEW‑4).

| Section | Source | Notes |
|---|---|---|
| Page Name + Hero | `[informational_pages]` | Theatre campaign hero + Hero CTA "Take a Seat Today" (§27, SCHEMA‑23) |
| Section Tabs | Page anchors · UI only | |
| Intro — "Host an event" | Page Content (WYSIWYG) | **(7/13)** Campus overview card |
| Theatre / Spaces | `[facility_section]` (repeater) | No fixed hours; amenities via Feature Pills; rate line; rental‑inquiry CTA (§11) |
| Rates & Specs | `[faqs]` (accordion) | (§6) |
| Corner Zone | `[facility_section]` | Play park (§11) |
| Interest Form | `[custom_forms]` | OQ‑4: inquiry vs. booking system; uses `number` field type for Estimated Attendance (§14) |
| Theatre Director Band | Band (eyebrow/title/body + contact + CTA) | **(7/13)** Phone/email contact band (SCHEMA‑26) |
| Policies Band | Cross‑link band | **(7/13)** 3 CTAs (§16); "Client List" was planned but is **not in the built design** — confirm or drop |

## 41. Kroc Church — `/church/`

**`[informational_pages]` instance.** Migrated from the Quincy Kroc Church page (NEW‑5).

| Section | Source | Notes |
|---|---|---|
| Page Name + Hero | `[informational_pages]` | Church/facility hero |
| Welcome | Page Content (WYSIWYG) | |
| Service Times | `[facility_section]` (with hours) | (§11) |
| Leadership / Team | `[people_block]` (`2‑up with bio + contact`) | (§15, SCHEMA‑25) |
| Connect Links | Page Content · colored link buttons | |
| Ministries & Schedule | Schedule list `{ Title, When, Description }` | **(7/13)** Static list, **not** an accordion — ⚐ small `[schedule_list]` repeater vs. Page Content (pending #17); prayer‑request form = `[custom_forms]` (OQ‑5 scope) |
| Kroc Kids / Music | Page Content | Troops, Music + Praise |

## 42. Careers — `/careers/`

**`[informational_pages]` instance.** Bespoke role‑listing layout (NEW‑6). **Architect decision (SCHEMA‑NEW):** use the new `[job_postings]` block (§22) **or** reuse `[volunteer_opportunities]`.

| Section | Source | Notes |
|---|---|---|
| Page Name + Hero / Team Photos | `[informational_pages]` + Page Content | Headshot row |
| Why Work With Us | Page Content (WYSIWYG) | |
| Benefits | Page Content · checklist | |
| Open Positions | `[job_postings]` | Role / Department / Location / Type / Apply link (§22) — or reuse Volunteer model |
| How to Apply | Page Content | |
| Text to Apply | Keyword + Shortcode fields (or Page Content) | **(7/13)** Text "SALVATION ARMY" to 22633 (SCHEMA‑25) |
| CTA Band | `[donation_block]`‑style band | Red "Join us in making a difference!" + View All Openings — or `[featured_volunteer_opportunities]` retitled "Join the Team" |
| Questions / HR | `[people_block]` (`2‑up with bio + contact`) | HR contacts (§15, SCHEMA‑25) |

> Donate (NEW‑7) = external link, **no schema** (handled in nav/utility bar, §4).

---

## Removed fields

Carried forward from v2, plus this round:

| Schema | Removed field | Reason |
|---|---|---|
| `[program_categories]` | Program Type, Dynamic Price, Deep Link URL | Class‑level fields; live on `[classes]` |
| `[classes]` | Icon | Only appears on the Program Category hero |
| `[classes]` | Capacity | Runtime API value (TractionRec) |
| `[classes]` | What to Bring | Merged into Description |
| `[classes]` | Dynamic Price (single) | **(6/29)** Replaced by Member Price + Public Price (SCHEMA‑13) |
| `[custom_forms]` | Form Selector (Dynamic Form Tool) | Replaced by the native form builder |
| `[connect_block]` | Contact cross‑link card | **(6/29)** Contact now uses the global footer (SCHEMA‑17) |
| `[kroc_location]` | Inline newsletter email/phone form | **(6/29)** Replaced by `newsletter_signup_url` (SCHEMA‑4) |
| `[programs_index]`, `[stories_index]`, `[tags_index]`, `[events_root]` | Search Bar (global) | Global search out of scope; per‑list/catalog search retained |

---

## Pending items (⏳)

Confirmed in principle, not finalized — blocked on an example or external dependency.

1. **Expanded color‑palette values** (Alert Variant, Donation/Intro Band Background, facility status) — owner Erin.
2. **Complex class schedule & multi‑price display** layout — owner Erin (examples).
3. **Background video** for heroes (hosting path: self‑hosted vs YouTube/Vimeo/Cloudflare Stream) — owner Gisele; sets the `Hero Background Video` field type (SCHEMA‑18 / X4).
4. **TractionRec / Club Auto / Golden** dynamic data + custom cards — integration meetings.
5. **Image Gallery** mixed‑media & image limits.
6. "View all Kroc stories" link (analytics).
7. **Recurring events.**
8. **External embed** real examples.
9. **Event taxonomy** — confirm `[event_categories]` vs. an `event_type` field (SCHEMA‑2) — architect.
10. **Background field group** — shared config vs. per‑template fields (X4) — architect.
11. **Apex vs. instance** — one CMS with a site‑type setting vs. a separate template set (X5) — architect.
12. **Catalog search vs. global search** — one system or two (OQ‑2 / SCHEMA‑11) — architect.
13. **Stories → Kroc Highlights** — relabel page slugs/nav too, or display‑only (SCHEMA‑8) — architect.
14. **Careers model** — `[job_postings]` vs. reuse `[volunteer_opportunities]` (SCHEMA‑NEW) — architect.
15. **Rentals form** — inquiry vs. booking system (OQ‑4); **Church** scope (OQ‑5); **Membership/Day Pass** integration shape (OQ‑7).
16. **Event tablet hero** — CSS fallback (recommended) vs. dedicated `Event Image — Tablet` (SCHEMA‑16).
17. **Church Weekly Ministries schedule list** — a small `[schedule_list]` repeater block `{ Title, When, Description }` vs. Page Content (SCHEMA‑25) — architect.

---

## Change log

| Date | Source | Summary |
|---|---|---|
| 2026‑05‑12 (wk of) | Design review | Locked per‑field decisions |
| 2026‑05‑28 | Kroc Catch‑up Discussion/Planning | 20 decisions → [architecture-proposal-v2-changes.md](architecture-proposal-v2-changes.md) |
| — | architecture-proposal-v2.md | Consolidated final architecture (30 models) |
| 2026‑06‑29 | Prototype sync (Figma‑comment tickets) | SCHEMA‑1…19 + SCHEMA‑NEW → [architecture-proposal-v3-changes.md](architecture-proposal-v3-changes.md): nav + mega‑menu, header/footer settings, Intro Band, Map Block, Featured Events, Rate Cards, Job Postings, Event Categories; class/event Member‑Public pricing, Session Dates, Event Excerpt, Facility carousel + structured hours, Featured Pages media/Compact, Informational hero background + accordion, homepage hero video, Contact global footer; 6 new pages formalized; apex/instance, PricePoints, Background group, display‑label standards |
| 2026‑07‑13 | Design‑extraction audit (schema‑sync close‑out) | SCHEMA‑23…26 folded in: `[informational_pages]` hero CTAs (§27); `[rate_cards]` Comparison Rows + Fine Print + Tagline (§21); `[people_block]` 2‑up, `[featured_stories]` 1‑up Quote, `[intro_band]` Checklist Items, `[facility_section]` hours Label, `[custom_forms]` date/number/tel, `[map_block]` CTA, `[donation_block]` tertiary CTA; Part 4 composition fixes (Membership quick‑nav, PlayCare mapping, Rentals intro + Theatre‑Director band, Careers Text‑to‑Apply) |
| — | This document | Consolidated **v3 final architecture** — all 42 models/pages, full field sets, per‑field status |

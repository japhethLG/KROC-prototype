# KROC Centers — Architecture Proposal v2 (Final Architecture)

> The **complete, final content architecture** for KROC Centers — every content model with its full field set. This supersedes the per-schema reasoning in [schema-decisions.md](schema-decisions.md) and folds in the 2026‑05‑28 meeting decisions.
>
> For the **delta only** (what changed on 2026‑05‑28 and why), see the companion [architecture-proposal-v2-changes.md](architecture-proposal-v2-changes.md).
>
> **Companion docs:** [schema-decisions.md](schema-decisions.md) (per-field decision log) · [content-template-schemas.md](content-template-schemas.md) (original proposal extract) · [development-tickets.md](development-tickets.md) (build plan).

---

## Status legend

Every field carries a status in the **St.** column:

| Tag | Meaning |
|---|---|
| 🔒 | **Locked** — in the original proposal and confirmed; carried unchanged |
| 🆕 | **New** — added during design (not in the original proposal) |
| 🔄 | **Changed** — existed in the original proposal but type/name/options were modified |
| ⏳ | **Pending** — field exists in principle but is blocked on an example or external dependency before it's final |

Rows marked **(5/28)** in Notes were introduced or modified by the 2026‑05‑28 meeting; all other non-🔒 rows trace to the prior (week‑of‑2026‑05‑12) review. Fields removed during design are **omitted** from this final architecture (see [Removed fields](#removed-fields) for the record).

### Type legends

**Content Type:** Instance · Dataset · Single Page · Pageset · Block
**Template Type:** Fixed · Hybrid · Freestyle · Automated · Fixed (repeater) · Automated Component

---

## Model index

| # | Model | Schema | Content Type | Template Type | URL |
|---|---|---|---|---|---|
| **Foundational** ||||||
| 1 | Kroc Location | `[kroc_location]` | Instance | — | — |
| 2 | Global Site Alert | `[site_alert]` | Dataset | Fixed | — |
| 3 | Connect / Footer | `[connect_block]` | Dataset | Automated Component | — |
| 4 | Custom Navigation | `[custom_navigation]` | Dataset | Fixed (repeater) | — |
| **Blocks (§7)** ||||||
| 5 | FAQs | `[faqs]` | Block | Fixed (repeater) | — |
| 6 | External Embed | `[external_embed]` | Block | Fixed | — |
| 7 | Featured Stories | `[featured_stories]` | Block | Fixed (repeater) | — |
| 8 | Featured Classes | `[featured_classes]` | Block | Fixed (repeater) | — |
| 9 | Facility Section | `[facility_section]` | Block | Fixed (repeater) | — |
| 10 | Featured Pages | `[featured_pages]` | Block | Fixed (repeater) | — |
| 11 | Image Gallery | `[image_gallery]` | Block | Fixed (repeater) | — |
| 12 | Custom Forms | `[custom_forms]` | Block | Fixed (repeater) | — |
| 13 | People Block | `[people_block]` | Block | Fixed (repeater) | — |
| 14 | Donation Block | `[donation_block]` | Block | Fixed | — |
| 15 | Featured Programs | `[featured_programs]` | Block | Fixed (repeater) | — |
| 16 | Featured Volunteer Opps | `[featured_volunteer_opportunities]` | Block | Fixed (repeater) | — |
| **Pages (§6)** ||||||
| 17 | Homepage | `[homepage]` | Single Page | Hybrid | `/` |
| 18 | All Programs | `[programs_index]` | Single Page | Hybrid | `/:programs/` |
| 19 | Program Category | `[program_categories]` | Pageset | Fixed | `/:programs/:slug` |
| 20 | Class Detail | `[classes]` | Pageset | Hybrid | `/:programs/:category/:slug` |
| 21 | Informational Pages | `[informational_pages]` | Pageset | Freestyle | `/:slug/` |
| 22 | All Stories | `[stories_index]` | Single Page | Hybrid | `/:stories/` |
| 23 | Story Detail | `[stories]` | Pageset | Fixed | `/:stories/:url/` |
| 24 | All Tags | `[tags_index]` | Single Page | Hybrid | `/:tags/` |
| 25 | Tag Detail | `[tags]` | Pageset | Automated | `/:tags/:url/` |
| 26 | Events Root | `[events_root]` | Single Page | Hybrid | `/:events/` |
| 27 | Event Detail | `[events]` | Pageset | Hybrid | `/:events/:slug/` |
| 28 | Contact Us | `[contact_us]` | Single Page | Hybrid | `/:contact/` |
| 29 | Volunteer Opps Index | `[volunteer_opportunities_index]` | Single Page | Hybrid | `/:volunteer/` |
| 30 | Volunteer Opp Detail | `[volunteer_opportunities]` | Pageset | Hybrid | `/:volunteer/:slug/` |

### Cross-cutting standard — Hero Image Set 🆕 (5/28)

Wherever a schema below lists **Hero Image — Desktop / Mobile / Thumbnail**, it follows the standard set: Desktop (full-bleed), Mobile (optional crop, falls back to Desktop), Thumbnail (optional card/feed crop, falls back to Desktop). Background video on a hero is supported in principle but ⏳ pending a hosting decision.

---

# Part 1 · Foundational

## 1. Kroc Location `[kroc_location]`

**Instance** · the physical center; supplies global identity, footer, and integration IDs.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Facility Name | Text | Yes | 🔒 | |
| TractionRec / ClubAuto ID | Toggle | No | 🔒 | |
| General Hours | Text | Yes | 🔒 | |
| Logo (Kroc + Local Lockup) | Image | Yes | 🆕 | Header + footer |
| Address | Text | Yes | 🆕 | Footer, Contact sidebar |
| Phone | Text | No | 🆕 | Footer, Contact sidebar |
| Donation Link | URL | No | 🆕 | Global "Donate" CTA target |
| Connect Band Hero Photo | Image | Yes | 🆕 | Footer Connect band |
| Social Handles | Repeater (Platform, URL) | No | 🆕 | FB, X, LinkedIn, YouTube, Instagram |
| Affiliate / Territory Links | Repeater (Label, URL) | No | 🆕 | **(5/28)** Locally-editable footer territory links (e.g. Phoenix → Western Territory); replaces National's fixed links |
| Timezone | Dropdown (IANA tz) | Yes | 🆕 | **(5/28)** Powers the automated facility Open/Closed status (§9) |

## 2. Global Site Alert `[site_alert]`

**Dataset · Fixed** · emergency / promo strip, sticky above the header.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Banner Name | Text | Yes | 🔒 | Internal label |
| Alert Message | Text | Yes | 🔄 | Was Rich Text "Alert Text" → plain Text (slim strip) |
| Alert Variant | Dropdown | Yes | 🔄 | `warning` / `info` / `danger` / `navy` / `dark`; replaces "Background Color". Palette set expands ⏳ pending (5/28) |
| Optional CTA (Label + URL) | Grouped | No | 🔄 | Merges old Button Text + Button Link |
| Show Icon | Toggle | No | 🆕 | Contextual icon matched to variant |
| Start Date | Datetime | No | 🆕 | Auto-publish window start |
| End Date | Datetime | No | 🆕 | Auto-hide window end |
| Dismissible | Toggle | No | 🆕 | Persists dismiss state per session |

## 3. Connect / Footer `[connect_block]`

**Dataset · Automated Component** · universal footer; no layout variants.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Mission Statement | Rich Text | Yes | 🆕 | The **Salvation Army mission statement**, managed globally (5/28 confirmed) |

**Automated content (no fields):** address, phone, hours, social handles, connect-band photo, and affiliate/territory links flow from `[kroc_location]`; quick-nav flows from `[custom_navigation]`. Replaced by a cross-link card on Contact Us (§28) to avoid recursion.

## 4. Custom Navigation `[custom_navigation]`

**Dataset · Fixed (repeater)** · header + footer nav.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Navigation Name | Text | Yes | 🔒 | |
| Menu Item Label (rep) | Text | Yes | 🔒 | |
| Menu Item URL (rep) | URL | Yes | 🔄 | Consolidates Internal Link + External URL into one editor-set URL |
| Parent Menu Item (rep) | Internal Link | No | 🔒 | Present value → dropdown |
| Sort Order (rep) | Sort Order | No | 🔒 | |
| Seasonal (rep) | Toggle | No | 🆕 | Marks item as seasonal |
| Start Date (rep) | Datetime | No | 🆕 | Show seasonal item from |
| End Date (rep) | Datetime | No | 🆕 | Hide seasonal item after |

---

# Part 2 · Blocks (§7)

## 5. FAQs `[faqs]`

**Block · Fixed (repeater)** · accordion; reusable for any accordion content.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | Internal label |
| FAQ Scope | Dropdown (`Local` / `Global (National)`) | Yes | 🆕 | **(5/28)** `Global` is fed from National and locked locally; `Local` is center-authored |
| Question (rep) | Text Area | Yes | 🔄 | Was "Open Text" |
| Answer (rep) | Rich Text / WYSIWYG | Yes | 🔄 | Was "Media"; supports links/CTAs/images |

**Behavior:** when both scopes render on a page, **local rows appear above** the fixed global set.

## 6. External Embed `[external_embed]`

**Block · Fixed** · sandboxed third-party iframe.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Embed Type | Dropdown | Yes | 🔄 | Aspect-ratio-aware: `Canva (3:4)` · `Video (16:9)` · `TikTok (9:16)` · `Custom` |
| Embed URL | Text Area | Yes | 🔒 | iframe src; sandboxed |

> Real embed examples (calendars, InDesign, social feeds, live-streamed services) ⏳ pending from Erin — informational; does not block the schema.

## 7. Featured Stories `[featured_stories]`

**Block · Fixed (repeater)**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Block Title | Text | No | 🆕 | Optional section heading |
| View All Link | URL / Internal | No | 🆕 | Optional "View All Stories" |
| Display Mode | Dropdown | No | 🆕 | `Grid 3-up` (default) · `Carousel` (>3) |
| Featured Story (rep) | Relational `[stories]` | Yes | 🔒 | |

## 8. Featured Classes `[featured_classes]`

**Block · Fixed (repeater)**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Block Title | Text | No | 🆕 | Optional section heading |
| View All Link | URL / Internal | No | 🆕 | Optional "View All Classes" |
| Display Mode | Dropdown | No | 🆕 | `Grid 3-up` · `Grid 4-up` · `Carousel` |
| Featured Class (rep) | Relational `[classes]` | Yes | 🔒 | **Max 6 items (5/28)** — curated, capped to avoid dilution |

> Dynamic card data fetched from TractionRec / Club Automation (+ optional custom card) ⏳ pending the integration meetings.

## 9. Facility Section `[facility_section]`

**Block · Fixed (repeater)** · one per facility (pool, gym, theater, chapel).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Facility Section Name | Text | Yes | 🔒 | |
| Hero Image — Desktop | Image | Yes | 🔄 | **(5/28)** Was single "Hero Image" (3:2/4:3) |
| Hero Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Body (WYSIWYG) | Rich Text | Yes | 🔒 | Was "Description" |
| Layout Variant | Dropdown | Yes | 🆕 | `Photo-left` · `Photo-right` |
| CTA Label | Text | No | 🆕 | e.g. "Learn More" |
| CTA URL | URL | No | 🆕 | |
| Feature Pills (rep) | Text | No | 🆕 | Static text chips (e.g. "8 lanes") |
| Hours of Operation (rep) | Repeater (Day Label, Hours Text) | No | 🔄 | Per-facility hours stay on the block |
| Status Mode | Dropdown (`Auto` / `Closed — Seasonal` / `Closed — Maintenance`) | No | 🆕 | **(5/28)** `Auto` computes Open/Closed from hours + `[kroc_location].timezone` |
| Status Message | Text | No | 🆕 | **(5/28)** Shown when a closed override is active; replaces the hours table |

## 10. Featured Pages `[featured_pages]`

**Block · Fixed (repeater)**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🔒 | |
| Block Title | Text | No | 🆕 | Optional section heading |
| View All Link | URL / Internal | No | 🆕 | |
| Display Mode | Dropdown | No | 🆕 | `Grid 3-up` · `Grid 4-up` |
| Featured Page (rep) | Internal Link | Yes | 🔒 | |
| Image (rep) | Image | No | 🔒 | Per-card override |
| Card Description (rep) | Text Area | No | 🆕 | Short body per card |
| Button Text (rep) | Text | No | 🔒 | Per-card CTA label |

**Behavior:** <4 pages → display as-is; >4 → show first 4, rest behind "View All" (no in-block pagination).

## 11. Image Gallery `[image_gallery]`

**Block · Fixed (repeater)**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Gallery Name | Text | Yes | 🔒 | |
| Layout | Dropdown | No | 🔄 | `Mosaic` · `Grid` · `Carousel` — **carousel added (5/28)** |
| Image (rep) | Image | Yes | 🔒 | |
| Alt Text (rep) | Text | Yes | 🆕 | Accessibility text per image |
| Caption (rep) | Text | No | 🔒 | Shown in lightbox |

> Mixed-media (hosted/YouTube video tiles) and min/max image counts ⏳ pending the per-block deep-dive.

## 12. Custom Forms `[custom_forms]`

**Block · Fixed (repeater)** · native drag-and-drop form builder.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Form Name | Text | Yes | 🔒 | Internal label |
| Form Fields (rep) | Repeater (Field Type, Label, Placeholder, Required) | Yes | 🆕 | Field types: `text` · `email` · `select` · `textarea` |
| Submit Label | Text | Yes | 🆕 | e.g. "Send Message" |
| Webhook / Recipient | URL | Yes | 🆕 | Fixed submission target |
| Post-Submit Behavior | Dropdown (`Show Message` / `Redirect to URL`) | Yes | 🆕 | **(5/28)** |
| Success Message | Text Area | No | 🆕 | Used when behavior = Show Message |
| Redirect URL | URL | No | 🆕 | **(5/28)** Used when behavior = Redirect — custom thank-you / landing page |

## 13. People Block `[people_block]`

**Block · Fixed (repeater)** · confirmed sufficient (5/28).

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Layout | Dropdown | No | 🆕 | `4-up cards` · `3-up with bio` · `1-up feature` |
| Name (rep) | Text | Yes | 🆕 | |
| Role (rep) | Text | Yes | 🆕 | |
| Headshot (rep) | Image | Yes | 🆕 | Portrait 4:5 |
| Bio (rep) | Text Area | No | 🆕 | Optional |
| Email (rep) | Text | No | 🆕 | Optional |
| Phone (rep) | Text | No | 🆕 | Optional |

## 14. Donation Block `[donation_block]`

**Block · Fixed** · drag-in mission band.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | Internal label |
| Title | Text | Yes | 🆕 | |
| Body | Text Area | No | 🆕 | |
| Primary CTA Label | Text | Yes | 🆕 | e.g. "Donate Now" |
| Primary CTA URL | URL | Yes | 🆕 | Defaults to `[kroc_location].donation_link` |
| Secondary CTA Label | Text | No | 🆕 | |
| Secondary CTA URL | URL | No | 🆕 | |
| Background Variant | Dropdown | Yes | 🆕 | `red` (default) · `navy` · `dark`; palette expands ⏳ pending (5/28) |

## 15. Featured Programs `[featured_programs]`

**Block · Fixed (repeater)**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Block Title | Text | No | 🆕 | e.g. "How We Serve" |
| View All Link | URL / Internal | No | 🆕 | Typically `/programs/` |
| Display Mode | Dropdown | No | 🆕 | `Grid 3-up` · `Grid 4-up`; **multi-row supported (5/28)** |
| Featured Category (rep) | Relational `[program_categories]` | Yes | 🆕 | Card pulls icon/name/intro from the category |

## 16. Featured Volunteer Opportunities `[featured_volunteer_opportunities]`

**Block · Fixed (repeater)**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | 🆕 | |
| Block Title | Text | No | 🆕 | |
| View All Link | URL / Internal | No | 🆕 | Typically `/volunteer/` |
| Display Mode | Dropdown | No | 🆕 | `Grid 3-up` · `Grid 4-up` |
| Featured Opportunity (rep) | Relational `[volunteer_opportunities]` | Yes | 🆕 | Card pulls hero/title/date/excerpt |

---

# Part 3 · Pages (§6)

## 17. Homepage `[homepage]`

**Single Page · Hybrid · `/`** · schema owns the hero only; body assembled from drag-in blocks.

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Hero Eyebrow | Text | No | 🆕 | Uppercase label above H1 |
| Hero Title | Text | Yes | 🆕 | Mission-led H1 |
| Hero Subtitle | Text Area | No | 🆕 | |
| Hero Image — Desktop | Image | Yes | 🔄 | **(5/28)** Was single "Hero Image" (1400×460) |
| Hero Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Hero Primary CTA Label | Text | No | 🆕 | e.g. "Become a Member" |
| Hero Primary CTA URL | URL | No | 🆕 | |
| Hero Secondary CTA Label | Text | No | 🆕 | e.g. "Tour the Center" |
| Hero Secondary CTA URL | URL | No | 🆕 | |

> Identity (logo, donation link, address, social) reads from `[kroc_location]`. "Find a Center" is a template/national feature. "Our Impact" section excluded.

## 18. All Programs `[programs_index]`

**Single Page · Hybrid · `/:programs/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Header Title | Text | Yes | 🔒 | |
| Subheader | Text | No | 🔒 | |
| Filter Pills | — (auto) | — | 🔒 | From `[program_categories]` |
| Per-list Search | — (UI) | — | 🔒 | Contextual; global search out of scope |
| CTA Band | — (drag-in) | — | 🆕 | `[donation_block]` |
| Program Request Form | — (drag-in) | — | 🆕 | **(5/28)** `[custom_forms]` — "Suggest a Program" |
| Location Filter | — (UI) | — | 🆕 | **(5/28)** National/USA variant only |

## 19. Program Category `[program_categories]`

**Pageset · Fixed · `/:programs/:slug`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Category Name | Text | Yes | 🔒 | Hero H1 |
| Icon | Remote API | No | 🔒 | `kroc-icon` in hero |
| Hero Image — Desktop | Image | No | 🆕 | **(5/28)** Category hero |
| Hero Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Category Intro — Left Column | Rich Text | No | 🆕 | 2-col intro |
| Category Intro — Right Column | Rich Text | No | 🆕 | 2-col intro |
| Classes Listing — Search | — (UI) | — | 🆕 | Per-list contextual |
| Classes Listing — Class Type Filter | — (UI) | — | 🆕 | All · Roster · Drop-In |
| Classes Listing — Date / Category Filters | — (UI) | — | 🆕 | **(5/28)** |
| Classes Listing — View Toggle (Card / Table) | — (UI) | — | 🆕 | **(5/28)** For dense schedules (swim lessons) |
| Classes Listing — Pagination | — (UI) | — | 🆕 | Default 6/page |

> Removed from this schema (live on `[classes]`): Program Type, Dynamic Price, Deep Link URL. Background-video hero ⏳ pending.

## 20. Class Detail `[classes]`

**Pageset · Hybrid · `/:programs/:category/:slug`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Class Name | Text | Yes | 🔒 | Hero H1 |
| Program Category | Relational | Yes | 🔒 | Breadcrumb + "Other Classes" feed |
| Hero Image — Desktop | Image | No | 🆕 | **(5/28)** 16:7 class hero |
| Hero Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Description | Remote API / Text | No | 🔒 | "About this class"; covers What to Bring; WYSIWYG controls apply |
| Class Type | Dropdown (Roster / Drop-In) | Yes | 🔒 | Pill badge |
| Dynamic Price | Remote API | No | 🔒 | Skeleton until API resolves |
| Deep Link URL | URL | No | 🔒 | "Register Now" target |
| Program Schedule | Repeater | No | 🔒 | Sidebar "Date & Time" |
| Audience | Text / Dropdown | No | 🆕 | e.g. "Adults · 18+" |
| Facility Location | Text | No | 🆕 | e.g. "Warm-water teaching pool" |
| Tags | Relational | No | 🆕 | Pill tags |

> **Capacity** is runtime-only (TractionRec), not a CMS field. Multi-price display (member vs public) ⏳ pending complex examples.

## 21. Informational Pages `[informational_pages]`

**Pageset · Freestyle · `/:slug/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Page Name | Text | Yes | 🔒 | Hero headline (red mission band) |
| Page Content | WYSIWYG | Yes | 🔒 | WYSIWYG controls apply |
| Access Password | Text | No | 🔒 | Powers password-gate variant |
| Page Eyebrow | Text | No | 🆕 | Uppercase label |
| Hero Subheader | Text Area | No | 🆕 | |
| Hero Image — Desktop | Image | No | ⏳ | **(5/28)** Optional campaign-graphic hero (church/series pages); layout pending examples |
| Hero Image — Mobile | Image | No | ⏳ | **(5/28)** |
| Thumbnail | Image | No | ⏳ | **(5/28)** |

> The Careers / Employment page is expected to ride on this model initially; a dedicated model is ⏳ pending exploration.

## 22. All Stories `[stories_index]`

**Single Page · Hybrid · `/:stories/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Header Title | Text | Yes | 🔒 | |
| Subheader | Text Area | No | 🔒 | |
| Tag Filter Chips | — (auto) | — | 🔒 | From National `[tags]` |
| Per-list Search | — (UI) | — | 🔒 | Contextual; global search out of scope |

## 23. Story Detail `[stories]`

**Pageset · Fixed · `/:stories/:url/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Title | Text | Yes | 🔒 | |
| Story Image — Desktop | Media | Yes | 🔄 | **(5/28)** Was single 16:9 hero |
| Story Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Story Date | Datetime | Yes | 🔒 | |
| Story Body | Rich Text (WYSIWYG) | Yes | 🔒 | Pull-quote styling; WYSIWYG controls |
| Author | Text | Yes | 🆕 | Sidebar + cards |
| Author Location | Relational `[kroc_location]` | No | 🆕 | Sidebar link |
| Story Excerpt | Text Area | Yes | 🆕 | Cards, featured modules, feeds |
| Story CTA Label | Text | No | 🔄 | **(5/28)** Was "Donation Override" — now configurable (e.g. "Register") |
| Story CTA URL | URL | No | 🔄 | **(5/28)** Defaults to `[kroc_location].donation_link` |
| Article Tag | Integration Field | No | 🔒 | Fed from National |
| Hashtag | Repeater | No | 🔒 | |
| Related Event | Relational `[events]` | No | 🔒 | Sidebar card |
| Related Program Category | Relational `[program_categories]` | No | 🔒 | Sidebar link |
| External Article | URL | No | 🔒 | "View Original Article →" |

> "View all Kroc stories" link to Kroc USA ⏳ pending analytics review.

## 24. All Tags `[tags_index]`

**Single Page · Hybrid · `/:tags/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Name | Text | Yes | 🔒 | |
| Description | Rich Text | No | 🔒 | |
| Sort Options | — (UI) | — | 🔒 | A–Z / Most stories / Recently used |
| Per-list Search | — (UI) | — | 🔒 | Contextual; global search out of scope |

## 25. Tag Detail `[tags]`

**Pageset · Automated · `/:tags/:url/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Name | Text | Yes | 🔒 | Wildcard — fed from National |
| Description | Rich Text | No | 🔒 | |
| Position | Sort Order | No | 🔒 | |
| Content Type Filter | — (UI) | — | 🔒 | All / Stories / Events / Programs |
| Story / Event Counts | — (auto) | — | 🔒 | Auto-computed |

## 26. Events Root `[events_root]`

**Single Page · Hybrid · `/:events/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Hero Title | Text | Yes | 🆕 | |
| Hero Subtitle | Text Area | No | 🆕 | |
| Hero Image — Desktop | Image | No | 🆕 | **(5/28)** |
| Hero Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Past / Upcoming Filter | — (UI) | — | 🆕 | **(5/28)** Past events kept, auto-flagged "Past Event" |
| Month Filter | — (UI) | — | 🆕 | **(5/28)** |
| Per-list Search | — (UI) | — | 🔒 | Contextual; global search out of scope |

> Recurring events ⏳ pending. Social-share row driven by `[kroc_location].social_handles`.

## 27. Event Detail `[events]`

**Pageset · Hybrid · `/:events/:slug/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Event Title | Text | Yes | 🆕 | |
| Event Image — Desktop | Image | No | 🆕 | **(5/28)** 16:7 hero (campaign artwork) |
| Event Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Start Datetime | Datetime | Yes | 🆕 | |
| End Datetime | Datetime | No | 🆕 | Drives auto "Past Event" flag |
| Event Body | Rich Text (WYSIWYG) | Yes | 🆕 | "About the Event"; WYSIWYG controls |
| Register Link | URL / Remote API | No | 🆕 | e.g. TractionRec |
| Address | Text | Yes | 🆕 | |
| Contact Name | Text | No | 🆕 | |
| Contact Email | Text | No | 🆕 | |
| Contact Phone | Text | No | 🆕 | |

## 28. Contact Us `[contact_us]`

**Single Page · Hybrid · `/:contact/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Page Title | Text | Yes | 🆕 | |
| Page Intro | Text Area | No | 🆕 | |
| Department Contacts | Repeater (Department, Email, Phone) | No | 🆕 | "Reach a Team" sidebar |

> Address + Hours from `[kroc_location]`. Form = `[custom_forms]`; FAQs = `[faqs]`; People = `[people_block]` (all drag-in). Connect footer replaced by a cross-link card.

## 29. Volunteer Opportunities Index `[volunteer_opportunities_index]`

**Single Page · Hybrid · `/:volunteer/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Hero Title | Text | Yes | 🆕 | |
| Hero Image — Desktop | Image | No | 🆕 | **(5/28)** |
| Hero Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Hero Subtitle | Text Area | No | 🆕 | |
| Hero CTA 1 Label | Text | No | 🆕 | |
| Hero CTA 1 URL | URL | No | 🆕 | |
| Hero CTA 2 Label | Text | No | 🆕 | |
| Hero CTA 2 URL | URL | No | 🆕 | |
| Highlight Image | Image | No | 🆕 | "Holiday Ambassador" promo panel |
| Highlight Title | Text | No | 🆕 | |
| Highlight Body | Rich Text | No | 🆕 | |
| Highlight CTA Label | Text | No | 🆕 | |
| Highlight CTA URL | URL | No | 🆕 | |
| Why Volunteer Image | Image | No | 🆕 | |
| Why Volunteer Body | Rich Text | No | 🆕 | |
| Golden API Failure Copy | Text Area | Yes | ⏳ | Message when Golden API unreachable — Golden integration shape pending |

## 30. Volunteer Opportunity Detail `[volunteer_opportunities]`

**Pageset · Hybrid · `/:volunteer/:slug/`**

| Field | Type | Req | St. | Notes |
|---|---|---|---|---|
| Opportunity Title | Text | Yes | 🆕 | Hero H1 |
| Hero Image — Desktop | Image | No | 🆕 | **(5/28)** 16:7 hero |
| Hero Image — Mobile | Image | No | 🆕 | **(5/28)** |
| Thumbnail | Image | No | 🆕 | **(5/28)** |
| Excerpt | Text Area | Yes | 🆕 | Cards, featured modules, search |
| Start Date | Datetime | Yes | 🆕 | |
| End Date | Datetime | No | 🆕 | Blank = ongoing |
| About this Opportunity | Rich Text (WYSIWYG) | Yes | 🆕 | WYSIWYG controls |
| Shifts | Repeater (Shift Label, Time) | No | 🆕 | Sidebar |
| Role Requirements | Rich Text | No | 🆕 | Sidebar callout |
| Required Trainings | Repeater (Training Name, URL) | No | 🆕 | Linked trainings |
| Facility / Location | Text | No | 🆕 | Sidebar "Where" |
| Register Link | URL | No | 🆕 | "Sign Up" button |
| Redirect URL | URL | No | 🆕 | **(5/28)** Optional — page is created but redirects to external sign-up (resolves internal-vs-external open decision) |
| Contact Name | Text | No | 🆕 | |
| Contact Phone | Text | No | 🆕 | |
| Contact Email | Text | No | 🆕 | |

> Golden API sourcing (CMS-only vs Golden supplement) ⏳ pending the integration meetings.

---

## Removed fields

Dropped during design and intentionally **not** in this final architecture:

| Schema | Removed field | Reason |
|---|---|---|
| `[program_categories]` | Program Type, Dynamic Price, Deep Link URL | Class-level fields; live on `[classes]` |
| `[classes]` | Icon | Only appears on the Program Category hero |
| `[classes]` | Capacity | Runtime API value (TractionRec), not a CMS field |
| `[classes]` | What to Bring | Merged into Description |
| `[custom_forms]` | Form Selector (Dynamic Form Tool) | Replaced by the native form builder |
| `[programs_index]`, `[stories_index]`, `[tags_index]`, `[events_root]` | Search Bar (global) | Global search out of scope; per-list search retained |

---

## Pending items (⏳)

Confirmed in principle, not finalized — blocked on an example or external dependency. See [architecture-proposal-v2-changes.md](architecture-proposal-v2-changes.md#pending--awaiting-examples--decisions) for owners and detail.

1. Expanded color-palette **values** (affects Alert Variant, Donation Background Variant).
2. Complex class **schedule & multi-price** display.
3. **Background video** for heroes (hosting path).
4. **TractionRec / Club Auto / Golden** dynamic data + custom cards.
5. Image Gallery **mixed-media & image limits**.
6. "View all Kroc stories" link (analytics).
7. **Recurring events**.
8. **External embed** real examples.
9. **Careers / Employment** dedicated model.
10. Combined featured-content block.
11. Informational-page **campaign-graphic hero** layout.

---

## Change log

| Date | Source | Summary |
|---|---|---|
| 2026‑05‑12 (wk of) | Design review | Locked per-field decisions → [schema-decisions.md](schema-decisions.md) |
| 2026‑05‑28 | Kroc Catch-up Discussion/Planning | 20 decisions → [architecture-proposal-v2-changes.md](architecture-proposal-v2-changes.md) |
| — | This document | Consolidated **final architecture** — all 30 models, full field sets, per-field status |

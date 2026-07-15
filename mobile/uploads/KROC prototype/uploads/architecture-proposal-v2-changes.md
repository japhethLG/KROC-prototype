# KROC Centers — Architecture Proposal v2

> **Incorporating the 2026‑05‑28 "Kroc Catch‑up Discussion / Planning" review.**
>
> This proposal builds on the locked architecture in [schema-decisions.md](schema-decisions.md) — that file remains the canonical record of the prior (week‑of‑2026‑05‑12) design review. This document layers the **new decisions from the 2026‑05‑28 meeting** on top, updating both the **architecture** (content models / fields) and the **design** (behaviors, variants, layout rules) so the two stay aligned per Gisele's directive that every design element must have a corresponding schema entry.
>
> **Source of the delta:** [Kroc Catch up Discussion_Planning - 2026_05_28 12_58 MDT - Notes by Gemini.md](Kroc%20Catch%20up%20Discussion_Planning%20-%202026_05_28%2012_58%20MDT%20-%20Notes%20by%20Gemini.md)
>
> **Companion docs:** [content-template-schemas.md](content-template-schemas.md) (original proposal extract) · [design-schema-gaps.md](design-schema-gaps.md) (prototype gap analysis) · [development-tickets.md](development-tickets.md) (Coda build plan).

---

## How to read this document

- Only schemas **touched by the 2026‑05‑28 meeting** are re‑listed in full below, with the deltas marked. Every other schema carries over **verbatim** from [schema-decisions.md](schema-decisions.md) — see [Carried‑forward, unchanged](#carried-forward-unchanged) for the list.
- Decisions that were **confirmed in principle but still need examples or an external dependency** are intentionally *not* designed here — they live in [Pending — awaiting examples / decisions](#pending--awaiting-examples--decisions) so we don't lock a design ahead of the inputs Erin and the integration partners owe us.

### Status legend (this round)

| Tag | Meaning |
|---|---|
| ✅ Locked | Carried forward from `schema-decisions.md`, unchanged by this meeting |
| 🟢 New (5/28) | New field or behavior introduced by the 2026‑05‑28 meeting |
| 🔄 Changed (5/28) | Existing field or behavior modified by the 2026‑05‑28 meeting |
| ⏳ Pending | Confirmed in principle, but **not designed here** — awaiting examples or an external dependency |

---

## What's new from the 2026‑05‑28 meeting (delta summary)

| # | Decision | Where it lands | Tag |
|---|---|---|---|
| 1 | Footer must include the **Salvation Army mission statement** (consistency across all sites) | §7.3 Connect Block | 🔄 |
| 2 | Footer **affiliate / territory links** become dynamic & locally editable (e.g. Phoenix Kroc → Western Territory) | §7.2a Kroc Location | 🟢 |
| 3 | **Global + Local FAQ hierarchy** — National FAQs are fixed/fed; local FAQs append **above** them | §7.4 FAQs | 🟢🔄 |
| 4 | **Featured Classes capped at 6** items | §7.7 Featured Classes | 🟢 |
| 5 | **Automated facility Open/Closed status** from operating hours + local time | §7.2a + §7.8 Facility Section | 🟢 |
| 6 | **Per‑facility status alerts** for custom closures (maintenance / seasonal) | §7.8 Facility Section | 🟢 |
| 7 | **Image Gallery carousel** toggle is now in scope (mosaic ↔ grid ↔ carousel) | §7.10 Image Gallery | 🔄 |
| 8 | **Custom form post‑submit experience** — configurable thank‑you message *or* redirect/landing page | §7.11 Custom Forms | 🟢 |
| 9 | **People block contact details** (email/phone) confirmed sufficient | §7.12 People Block | ✅ |
| 10 | **Featured Programs multi‑row** layout (no longer capped to one row) | §7.14 Featured Programs | 🔄 |
| 11 | **Class listing card ⇄ table view toggle** + date‑range & category filters | §6.3 Program Category | 🟢 |
| 12 | **Story CTA is configurable** — not restricted to donation | §6.7 Story Detail | 🔄 |
| 13 | **Optional external redirect** field on volunteer opportunities (page created, redirects out) | §6.14 Volunteer Opportunity Detail | 🟢 |
| 14 | **Three‑field hero image** standard — Desktop / Mobile / Thumbnail | Cross‑cutting | 🟢 |
| 15 | **Past‑event handling** — events stay on site, auto‑flagged "Past Event" | §6.10 / §6.11 Events | 🟢 |
| 16 | **Program Request form** on the All Programs page | §6.2 All Programs | 🟢 |
| 17 | **WYSIWYG content controls** — force images into lightbox, rounded/bordered, constrained formatting | Cross‑cutting | 🟢 |
| 18 | **Expanded color palette** for buttons & solid backgrounds (red stays primary) | Cross‑cutting | ⏳ |
| 19 | **Background video** option for hero areas | Cross‑cutting | ⏳ |
| 20 | **Careers / Employment** page — high priority, dedicated model to be explored | Planned models | ⏳ |

---

## Cross‑cutting design decisions

These span multiple schemas. Defining them once keeps the per‑schema tables short.

### C1. Three‑field hero image standard 🟢 (5/28)

**Decision:** Centers frequently upload pre‑designed campaign artwork (especially for events and church/info pages) that distorts when reflowed or shrunk. To preserve design control and responsiveness, every hero now uses a **Hero Image Set** instead of a single image field.

| Field | Type | Required | Notes |
|---|---|---|---|
| Hero Image — Desktop | Image | Yes | Full‑bleed desktop hero |
| Hero Image — Mobile | Image | No | Mobile‑optimized crop; falls back to Desktop if empty |
| Thumbnail | Image | No | Square / 4:3 crop used in cards, featured modules, and search results; falls back to the Desktop hero if empty |

**Applies to:** `[homepage]`, `[program_categories]`, `[classes]`, `[stories]`, `[events_root]`, `[events]`, `[informational_pages]`, `[volunteer_opportunities_index]`, `[volunteer_opportunities]`, and the hero image of `[facility_section]`.

**Why the thumbnail is separate:** a campaign hero graphic does not shrink gracefully into a small card. The dedicated thumbnail field lets editors supply a purpose‑built crop for featured/card contexts. (Gisele, 01:00:22.)

> **Background video** is a related but *pending* enhancement — see [P3](#p3-background-video-for-heroes).

### C2. WYSIWYG content controls 🟢 (5/28)

**Decision (Randy, 00:40:29):** to keep editor‑authored rich text on‑brand, the WYSIWYG/Rich Text renderer enforces house styling rather than allowing free‑form markup:

- Inline images are forced into a **lightbox** on click, with **rounded corners** and a consistent border.
- Constrained formatting set (no arbitrary pasted HTML/inline styles where avoidable).

**Applies to** every Rich Text / WYSIWYG field: `[faqs]` answers, `[classes]` Description, `[stories]` Story Body, `[informational_pages]` Page Content, `[events]` Event Body, `[volunteer_opportunities]` About / Role Requirements, `[program_categories]` intro columns, `[donation_block]`/`[facility_section]` body, etc. This is a renderer/template standard, not a per‑schema field.

### C3. Search scope (unchanged, with an interim note)

Global site‑wide search remains **out of scope** for launch (post‑launch consideration). **Per‑list contextual search** (e.g. "Search Aquatics classes") is allowed and added per page as needed. A **basic content‑search component** is technically available and may be offered as an interim step before advanced search — tracked as a post‑launch candidate, not built now. (Randy / Gisele, 00:48:15.)

### C4. Expanded color palette ⏳ (pending values)

**Decision:** adopt an expanded palette for buttons and solid background blocks while keeping the national **red** as the primary color. Architecturally this means the variant dropdowns (`Alert Variant`, `Donation Block Background Variant`, facility status colors, etc.) will gain additional branded options. **Exact palette values are pending Erin's sharing them** — not enumerated here. See [Pending](#p1-expanded-color-palette-values).

---

# Part 1 · Block Library (§7) — changed schemas

> Full field tables shown only where the 2026‑05‑28 meeting changed something. Unchanged blocks carry over from `schema-decisions.md`.

## 7.2a Kroc Location `[kroc_location]`

**Content Type:** Instance | **Template Type:** —

Two additions this round; all prior fields from `schema-decisions.md §7.2a` are retained.

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| *(all fields from `schema-decisions.md §7.2a`)* | — | — | ✅ Locked | Facility Name, Logo, Address, Phone, Donation Link, General Hours, Connect Band Hero Photo, Social Handles, etc. |
| Affiliate / Territory Links | Repeater (Label, URL) | No | 🟢 New (5/28) | Drives the footer's affiliate/territory links **per location** via a dynamic dataset, e.g. a Phoenix Kroc links to the Western Territory. Replaces National's fixed/hardcoded footer links for Kroc sites. (Brenda / Randy / Gisele, 00:02:50) |
| Timezone | Dropdown (IANA tz) | Yes | 🟢 New (5/28) | Local timezone of the center. Powers the automated facility Open/Closed status (§7.8). A single global timezone per instance is sufficient — viewer timezone is irrelevant to whether the facility is open. (Randy, 00:18:35) |

## 7.3 Site Footer / Connect With Us `[connect_block]`

**Content Type:** Dataset | **Template Type:** Automated Component

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Mission Statement | Rich Text | Yes | 🔄 Changed (5/28) | Confirmed this carries the **Salvation Army mission statement** specifically (not a generic blurb) for consistency across all Kroc sites. Centers may have their own vision statement, but the Army mission is the standard. (Erin, 00:01:47) |

**Structural note (updated):** Footer remains an **automated component** (no layout variants). Address, phone, hours, social handles, and the connect‑band photo flow from `[kroc_location]`; quick‑nav from `[custom_navigation]`. The **affiliate/territory links** now render from `[kroc_location].affiliate_territory_links` (decision #2), making them locally editable rather than fixed.

## 7.4 FAQs `[faqs]` — Global + Local hierarchy 🟢🔄 (5/28)

**Content Type:** Block | **Template Type:** Fixed (repeater)

**Decision (Erin / Randy / Gisele, 00:04:54–00:06:51):** support a **two‑tier hybrid** FAQ model:

- **Global FAQs** — authored once at the **Kroc USA / National** level, fed to every center, and **read‑only locally** (centers can't edit them). These are the questions National wants on all sites.
- **Local FAQs** — each center authors its own accordion blocks for its own needs.
- **Render order:** local content appears **above** global content ("our own blocks would go above the USA content" — Erin).

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Block Name | Text | Yes | ✅ Locked | Internal admin label |
| FAQ Scope | Dropdown (`Local` / `Global (National)`) | Yes | 🟢 New (5/28) | `Global` blocks are sourced from National and locked for local editors; `Local` blocks are center‑authored. Drives the prepend‑local‑above‑global ordering. |
| Question (repeater) | Text Area | Yes | ✅ Locked | |
| Answer (repeater) | Rich Text / WYSIWYG | Yes | ✅ Locked | Supports CTAs, links, and images per WYSIWYG controls (§C2). Confirmed this round — answers can include links/CTAs to other pages. (Erin, 00:03:54) |

**Behavioral rules:**
- A page may render a Local FAQ block, a Global FAQ block, or both. When both are present, **local rows render first**, then the fixed global set.
- Global content is fed from National (integration/feed); local editors see it but cannot modify it.
- The accordion pattern is reusable for any accordion‑style content, not only FAQs (Gisele, 00:06:51).

## 7.7 Featured Classes `[featured_classes]` — 6‑item cap 🟢 (5/28)

**Content Type:** Block | **Template Type:** Fixed (repeater)

All fields carry over from `schema-decisions.md §7.7`. New behavioral constraint:

**Behavioral rules (meeting requirement):**
- **Maximum 6 featured classes.** Editors cannot select more than 6 to keep the module curated and avoid "feature everything" dilution. (Brenda / Erin, 00:16:05–00:16:48.) The cap is adjustable later if a center presents a valid need.
- Display as a 3‑up grid by default; **carousel** when the count exceeds the single‑row display.
- This is the **hand‑curated** module — distinct from automated "all classes" listings that pull dynamically. (Gisele, 00:13:59.)

> Dynamic fetch of card data from TractionRec / Club Automation, and an editor choice between "fetch" vs "custom card," are [pending the integration meetings](#p4-dynamic-class-data--custom-cards).

## 7.8 Facility Section `[facility_section]` — status indicators 🟢 (5/28)

**Content Type:** Block | **Template Type:** Fixed (repeater)

All fields carry over from `schema-decisions.md §7.8` (Layout Variant, CTA, Feature Pills as static‑text repeater, Hours of Operation repeater, etc.). The hero image adopts the **Hero Image Set** (§C1). New this round:

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Status Mode | Dropdown (`Auto` / `Closed — Seasonal` / `Closed — Maintenance`) | No | 🟢 New (5/28) | `Auto` (default) computes Open/Closed from Hours of Operation + `[kroc_location].timezone`. The closed overrides let a center flag a custom closure (e.g. "pool closed 2 weeks for cleaning"). (Erin, 00:18:35–00:20:16) |
| Status Message | Text | No | 🟢 New (5/28) | Shown when a closed override is active; replaces the hours table with a reason, e.g. "Closed for seasonal maintenance — reopening March 1." |

**Behavioral rules:**
- **Auto status:** the section renders a live **Open / Closed** badge derived from the facility's own Hours of Operation evaluated against the center's local timezone. Per‑facility, since pool ≠ gym ≠ theater hours. (Erin: "smart enough to tell if the facility is open at that time.")
- **Override:** when `Status Mode` is a closed state, hide the hours table and surface `Status Message` instead, so the layout doesn't look awkward during a known closure.
- Modeled **on the block** (one‑to‑one per facility) rather than the global alert banner, because closures are facility‑specific. (Gisele, 00:20:16.)

## 7.10 Image Gallery `[image_gallery]` — carousel in scope 🔄 (5/28)

**Content Type:** Block | **Template Type:** Fixed (repeater)

Fields carry over from `schema-decisions.md §7.10` (Gallery Name, Image, Alt Text, Caption). Change to the Layout option:

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Layout | Dropdown (`Mosaic` / `Grid` / `Carousel`) | No | 🔄 Changed (5/28) | **Carousel is now in scope** as an admin‑selectable display option, alongside the mosaic and fixed grid. Previously carousel was deferred; the meeting promoted it. (Erin, 00:21:58–00:24:34) |

**Behavioral rules:**
- Admin toggles the display mode per gallery instance.
- Clicking a tile opens a **lightbox** with the caption; captions surface in the lightbox view. (Gisele, 00:22:57.)
- Mosaic auto‑crops tiles; the original ratio is preserved in the lightbox.

> Mixed‑media galleries (hosted video / YouTube tiles) and min/max image counts are [pending deeper design](#p5-gallery-video--limits).

## 7.11 Custom Forms `[custom_forms]` — post‑submit experience 🟢 (5/28)

**Content Type:** Block | **Template Type:** Fixed (repeater)

Native drag‑and‑drop form builder carries over from `schema-decisions.md §7.11` (Form Fields repeater, Submit Label, fixed Webhook/Recipient). New this round:

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Post‑Submit Behavior | Dropdown (`Show Message` / `Redirect to URL`) | Yes | 🟢 New (5/28) | Controls what happens after a successful submission. Default `Show Message`. (Randy, 00:25:36) |
| Success Message | Text Area | No | ✅ Locked | Used when behavior = `Show Message`, e.g. "Thank you. We'll respond within 3–5 business days." |
| Redirect URL | URL | No | 🟢 New (5/28) | Used when behavior = `Redirect to URL` — a custom thank‑you / landing page, or the destination an external integration would send the user to. |

**Behavioral rule:** the form supports either a generic in‑page confirmation (built‑in) or a redirect to a custom completion page, depending on the integration. (Randy: "the form may send you to a landing page... or we can have a generic response if it was built inside of our [system].")

## 7.12 People Block `[people_block]` — confirmed ✅ (5/28)

No changes. The meeting **confirmed the current design is sufficient** (Gisele), and the optional **email/phone** fields already specified in `schema-decisions.md §7.12` cover Erin's "use it as a department contact portal" use case (00:26:35). Carried forward as‑is.

## 7.14 Featured Programs `[featured_programs]` — multi‑row 🔄 (5/28)

**Content Type:** Block | **Template Type:** Fixed (repeater)

Fields carry over from `schema-decisions.md §7.14` (Block Name, Block Title, View All Link, Display Mode, Featured Category repeater). Change to layout behavior:

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Display Mode | Dropdown (`Grid 3‑up` / `Grid 4‑up`) | No | 🔄 Changed (5/28) | Now explicitly **supports multiple rows** — the block is no longer restricted to a single row. Editors may feature enough categories to wrap to a second row. (Erin, 00:27:48) |

**Behavioral rule:** the grid wraps to additional rows as items are added (e.g. 8 categories → two rows of 4), rather than truncating to one row.

---

# Part 2 · Pages (§6) — changed schemas

## 6.2 All Programs `[programs_index]` — program request form 🟢 (5/28)

**Content Type:** Single Page | **Template Type:** Hybrid | **URL:** `/:programs/`

Header/Subheader, filter pills, and the removal of global search all carry over from `schema-decisions.md §6.2`. New this round:

- **Request a Program** section 🟢 — a `[custom_forms]` drag‑in block lets visitors submit requests for programs the center doesn't yet offer ("can't find what you're looking for? request it"). Surfaces community demand (e.g. pickleball, a theater group). (Japheth / Erin / Gisele, 00:33:47.) Modeled as a standard custom form, no new schema.
- **Filter by location** (UI behavior) 🟢 — on the **national / Kroc USA** rendering of this page (which aggregates all centers' offerings), add an optional location filter. On an individual center's site the listing is already location‑scoped. (Erin / Gisele, 00:32:30–00:33:47.) No CMS field.

## 6.3 Program Category `[program_categories]` — class views & filters 🟢 (5/28)

**Content Type:** Pageset | **Template Type:** Fixed | **URL:** `/:programs/:page_slug`

All fields carry over from `schema-decisions.md §6.3`; the hero adopts the **Hero Image Set** (§C1). New listing behaviors on the embedded Classes Listing:

- **Card ⇄ Table view toggle** 🟢 (UI behavior) — front‑end toggle so editors/visitors can switch the class listing between card view and a denser **table view**. Targets complex categories like swim lessons that can have dozens of options where 60 cards is unworkable. (Erin / Gisele, 00:38:03.) No CMS field.
- **Date‑range + category filters** 🟢 (UI behavior) — class listings gain user‑facing filter controls for **date range** (e.g. this week / next week / month) and **class category**, in addition to the existing `All · Roster · Drop‑In` type pills. (Randy / Erin, 00:11:51–00:12:55.) No CMS field.
- **Prefiltered class block** — a category‑filtered class listing can be dragged into an Informational Page (e.g. an Aquatics "Swim Lessons" page) when a sub‑listing deserves its own page. (Gisele, 00:38:03.)

> The category hero may use **background video** ([pending hosting detail](#p3-background-video-for-heroes)). Complex schedule layouts and multi‑price display are [pending Erin's examples](#p2-complex-class-schedules--pricing).

## 6.4 Class Detail `[classes]`

**Content Type:** Pageset | **Template Type:** Hybrid | **URL:** `/:programs/:category/:page_slug`

All fields carry over from `schema-decisions.md §6.4`; the hero adopts the **Hero Image Set** (§C1). Confirmations / notes this round:

- **Add to Calendar** ✅ — confirmed as a class‑detail action (opens the user's calendar app). Behavioral; no CMS field. (Japheth, 00:39:21.)
- **Capacity** stays an API‑driven runtime value (not a CMS field) — confirmed it comes from the external platform (TractionRec). (Erin, 00:39:21.) Consistent with `schema-decisions.md`.
- **WYSIWYG controls** (§C2) apply to the About/Description body — editor‑added photos are forced into the lightbox treatment.
- Multi‑price display (member vs public) is [pending complex examples](#p2-complex-class-schedules--pricing).

## 6.7 Story Detail `[stories]` — configurable CTA 🔄 (5/28)

**Content Type:** Pageset | **Template Type:** Fixed | **URL:** `/:stories/:page_url/`

All fields carry over from `schema-decisions.md §6.7`, with one field generalized:

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Story CTA Label | Text | No | 🔄 Changed (5/28) | Was the donation‑only "Donation Override / Link." The sidebar CTA is now **configurable** — e.g. "Register for this program," "Donate," "Learn More." (Erin, 00:43:25) |
| Story CTA URL | URL | No | 🔄 Changed (5/28) | Destination for the configurable CTA. Defaults to `[kroc_location].donation_link` when left empty, preserving the donation behavior. |

**Note:** stories are expected to be used to promote programs/events, so the CTA needed to flex beyond donation. The existing Related Event / Related Program Category relations remain.

> A "View all Kroc stories" link to the Kroc USA site (new tab) is [pending an analytics review](#p6-view-all-stories-link).

## 6.10 Events Root `[events_root]` & 6.11 Event Detail `[events]` — past‑event handling 🟢 (5/28)

**Events Root** — Single Page, Hybrid, `/:events/` · **Event Detail** — Pageset, Hybrid, `/:events/:page_slug/`

All fields carry over from `schema-decisions.md §6.10 / §6.11`; both heroes adopt the **Hero Image Set** (§C1), which is especially important here because centers upload **pre‑designed campaign artwork** for events. New this round:

- **Past‑event handling** 🟢 — when an event's End Datetime passes, it is **automatically flagged "Past Event"** and kept on the site rather than removed, so visitors can see the kind of events a center typically runs. Surface it with a clear "Past Event" badge so it isn't confusing. (Gisele, 00:51:21.) Computed from Start/End Datetime; no new CMS field.
- **Month filter** 🟢 (UI behavior) — the Events Root listing gains a month/date filter in addition to the existing date filter. (Erin, 00:51:21.) No CMS field.
- **Add to Calendar** ✅ — confirmed on Event Detail. Behavioral.

> **Recurring events** were raised as a consideration but [not yet specified](#p7-recurring-events).

## 6.14 Volunteer Opportunity Detail `[volunteer_opportunities]` — external redirect 🟢 (5/28)

**Content Type:** Pageset | **Template Type:** Hybrid | **URL:** `/:volunteer/:page_slug/`

All fields carry over from `schema-decisions.md §6.14`; the hero adopts the **Hero Image Set** (§C1). New this round:

| Field | Type | Required | Status | Notes |
|---|---|---|---|---|
| Redirect URL | URL | No | 🟢 New (5/28) | Optional. When set, the page is still created in the model (keeping the content model consistent) but **immediately redirects** the visitor to the external sign‑up site. Lets a center choose per opportunity between an internal landing page and a direct external link. Mirrors the redirect pattern used for the core territories. (Erin / Gisele, 00:57:07–00:58:14) |

**Note:** this **resolves the open decision** in `schema-decisions.md §6.14` about external vs internal landing pages — both are supported via the optional redirect, with the existing `Register Link` still available for an inline sign‑up button when no redirect is used. The broader Golden API sourcing question remains [pending](#p4-dynamic-class-data--custom-cards).

---

## Carried‑forward, unchanged

The following schemas were reviewed on 2026‑05‑28 with **no architectural change** and remain exactly as specified in [schema-decisions.md](schema-decisions.md):

- §7.1 Global Site Alert / Banner `[site_alert]` *(palette options expand per §C4 once values arrive)*
- §7.2b Custom Navigation `[custom_navigation]`
- §7.5 External Embed `[external_embed]` *(embed types locked; examples inform design — see [Pending](#p8-external-embed-examples))*
- §7.6 Featured Stories `[featured_stories]`
- §7.9 Featured Pages `[featured_pages]`
- §7.13 Donation Block `[donation_block]` *(Background Variant expands per §C4)*
- §7.15 Featured Volunteer Opportunities `[featured_volunteer_opportunities]`
- §6.1 Homepage `[homepage]` *(hero adopts §C1; "Our Impact" already excluded)*
- §6.5 Informational Pages `[informational_pages]` *(hero adopts §C1; supports campaign‑graphic heroes for church/series pages)*
- §6.6 All Stories `[stories_index]`
- §6.8 All Tags `[tags_index]`
- §6.9 Tag Detail `[tags]`
- §6.12 Contact Us `[contact_us]`
- §6.13 Volunteer Opportunities Index `[volunteer_opportunities_index]`

---

## Pending — awaiting examples / decisions

> Per the instruction not to design ahead of inputs we don't have yet: the following were **confirmed in principle** on 2026‑05‑28 but are **deliberately not specified** here. Each is blocked on an example from Erin or an external dependency. They should be designed once the input lands.

<a id="p1-expanded-color-palette-values"></a>
**P1 · Expanded color palette values.** Decision to expand the palette for buttons/solid backgrounds is locked (§C4); **exact colors are pending Erin** sharing the palette. Variant dropdowns will grow once values arrive. *(Owner: Erin — "Share Color Palette.")*

<a id="p2-complex-class-schedules--pricing"></a>
**P2 · Complex class schedules & multi‑price display.** Some classes have irregular schedules (different times M/W/F vs T/Th) and multiple price points (member vs public). Layout for these is **pending Erin's real‑world examples** before we design the schedule/pricing presentation. *(Owner: Erin — "Provide Schedule Examples.")*

<a id="p3-background-video-for-heroes"></a>
**P3 · Background video for heroes.** Supporting hero background video is agreed; the **hosting path (Zesty DAM vs external/YouTube) and exact field shape are pending**. Centers currently use Symphony's media library and YouTube. *(Owner: Gisele — "Add Background Video.")*

<a id="p4-dynamic-class-data--custom-cards"></a>
**P4 · Dynamic class data, custom cards & Golden API.** Pulling class card data dynamically from **TractionRec / Club Automation**, offering an editor choice of "fetch vs custom card," and the **Golden** sourcing model for volunteer opportunities all depend on the **integration partner meetings** (TractionRec PM returning; Club Auto contact pending). Designed after those calls. *(Owner: Erin/Mark — schedule TractionRec & Club Auto.)*

<a id="p5-gallery-video--limits"></a>
**P5 · Gallery mixed‑media & limits.** Hosted/YouTube video tiles in the Image Gallery, plus documented min/max image counts and auto‑crop ratio handling, are **pending the per‑block deep‑dive** in the implementation phase. *(Owner: Zesty — implementation phase.)*

<a id="p6-view-all-stories-link"></a>
**P6 · "View all Kroc stories" link.** A link from a center's story detail/listing to the Kroc USA stories page (new tab) is **pending an analytics review** to decide whether it's worth including. *(Owner: The group — "Review Analytics.")*

<a id="p7-recurring-events"></a>
**P7 · Recurring events.** Raised as a need; **not yet specified.** Past‑event flagging (decision #15) is in scope; recurrence rules are not. *(Owner: TBD.)*

<a id="p8-external-embed-examples"></a>
**P8 · External embed examples.** Embed types and locked aspect ratios are already defined; Erin will provide **real embed examples** (calendars, InDesign docs, social feeds, live‑streamed services, Canva) to validate the design — informational, not blocking the schema. *(Owner: Erin — "Provide Embed Examples.")*

<a id="p9-careers-employment"></a>
**P9 · Careers / Employment page.** **High priority** for centers (constant turnover — lifeguards, front desk). For now it can ride on `[informational_pages]`, but a **dedicated model + blocks are to be explored** and are not specified here. *(Owner: Zesty — "explore more deeply"; Erin to organize internal team setup.)*

<a id="p10-combined-featured-content"></a>
**P10 · Combined featured‑content block.** A single block mixing featured classes + events + stories was discussed as already in the architecture intent but is **not concretely specified.** Today these are separate `[featured_*]` blocks. *(Owner: Zesty.)*

---

## Project tracking

Per Mark's update (01:04:24), the build is tracked in a new **Coda board across 7 milestones / 75 tickets**; stakeholders accept the invite to follow status. The work breakdown lives in [development-tickets.md](development-tickets.md). Wider‑group wireframe review is intentionally **held until the foundational blocks are built** (Gisele, 01:05:24), to be preceded by an educational session on how the block/content‑platform model works.

---

## Change log

| Date | Source | Summary |
|---|---|---|
| 2026‑05‑12 (wk of) | Design review | Locked architecture → [schema-decisions.md](schema-decisions.md) |
| 2026‑05‑28 | Kroc Catch‑up Discussion/Planning | This proposal — 20 decisions layered on top (FAQ hierarchy, facility status, 3‑field hero, configurable story CTA, volunteer redirect, featured‑class cap, gallery carousel, form post‑submit, multi‑row programs, class view toggle, past‑event handling, program request form, dynamic footer affiliate links, WYSIWYG controls; palette/video/careers/Golden deferred) |

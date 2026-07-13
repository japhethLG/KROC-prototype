# Schema Sync Queue

Content-model / schema changes implied by the comment tickets (see [figma-comments-tickets.md](figma-comments-tickets.md)).
These feed the architecture docs — **schema-decisions.md**, **architecture-proposal-v2-changes.md**, **content-template-schemas.md** — for the architect to formalize. This file is **documentation of the content model only** (no database connection).

> **Process (going forward):** after finishing a ticket, update **both** this doc and [figma-sync-queue.md](figma-sync-queue.md). Figma-sync = the visual/design push; Schema-sync = the content-model changes. A ticket may touch one, both, or neither.

> Status: ☐ pending architect formalization · all entries below are **proposed** from the prototype work.

---

## ☐ SCHEMA-1 — NAV-1: Navigation model
- **Primary nav**: an ordered, editable menu — list of items `{ label, target }` where target is an internal page ref or external URL. Current set: Home · About Us · Membership · Classes · Events · Rentals · Church.
- **Utility bar**: editable secondary links `{ label, url }` — Careers, Donate, Hours & Closures.
- **New page types referenced** (formalize via the NEW-* tickets): About Us, Membership, Rentals, Church, Careers. **Donate** = external link, not a page (**resolved 2026-06-29: external link** — OQ-1 closed).
- Search intentionally omitted for now.

## ☐ SCHEMA-2 — NAV-2: Mega-menu model
- A nav item gains an optional **mega menu**: a set of child links + a **"View All" index** link.
- **Classes** mega items should be driven by **`[program_categories]`** (each category → a mega link) + an "All Classes" index → All Programs.
- **Events** mega needs an **event category/type taxonomy** — *does one exist?* If not, add `[event_categories]` (or an `event_type` field) to drive the items + an "All Events" index. **Flag for architect.**

## ☐ SCHEMA-3 — NAV-3: Header CTAs
- Global header **CTA config**: two editable CTAs `{ label, url }` (currently Become a Member, Purchase Classes). Likely site-level settings; targets tie into Traction Rec / Club Automation via **embed/redirect only (no DB)**.

## ☐ SCHEMA-4 — NAV-4: Footer / global settings
- **Mission text**: "The Salvation Army Mission" statement — a global field (consider locked/default since it's standardized copy).
- **Newsletter**: replace the inline email/phone form with a **`newsletter_signup_url`** field (vendor form: Mailchimp / Constant Contact / Emma). No inline capture.
- **Social media links**: repeater `{ platform, url }`.
- **Footer links**: editable list (kroccenter.org, Thrift and Donate Goods, etc.).
- **`[kroc_location]`**: ensure **email** (e.g. info@krocphoenix.org) exists alongside address/phone; copyright line "The Salvation Army".

## ☐ SCHEMA-5 — BLK-1 / HOME-6: Intro Band block (NEW)
- New block content model **`[intro_band]`**: `Layout Variant` (no-photo / photo-right), `Eyebrow` (optional), `Title`, `Body` (rich text), `CTAs` (up to 2 · label+url), `Photo` (optional · photo variant), `Background Color` (palette selection).
- Consumers: homepage **membership callout** (HOME-6) and the **Membership page** (NEW-1). HOME-6 is an instance of this block — no separate schema.

## ☐ SCHEMA-6 — BLK-2: Classes content type
- **`[classes]`** add **`marketing_description`** (rich text) — surfaced in the card pop-up.
- **Photo optional** — confirm `[classes].photo` is not required; define the **no-image** behavior (color-cover fallback) so cards render cleanly without a hero image.

## ☐ SCHEMA-7 — BLK-3: People block
- **Formalize `[people_block]`** (currently informal — flagged for architect). Person fields: `Name`, `Role`, `Headshot`, `Bio` (optional), `Email` (optional), `Phone` (optional).
- **Layout** enum: `4-up cards` · `3-up with bio` · `1-up feature`.
- **1-up feature** adds optional block-level fields: `Feature Heading` (e.g. "Hello from the {Role}") + `Lead-in` line.

## ☐ SCHEMA-8 — HOME-5 / BLK-4: Label & taxonomy naming
- **"Stories" → "Kroc Highlights"**: client said "for now," so **keep the `[stories]` / `[featured_stories]` slugs, change the display label** in UI/headings. Decide whether to also rename the 6.6 All Stories / 6.7 Story Detail page labels + nav/tag references for consistency. **Naming decision for architect.**
- **"Programs and Classes"**: update the Featured Programs **Block Title** default/example (architecture-proposal-v2 currently exemplifies "How We Serve").
- **"Meet the Team"**: People block default heading (was "Camden Leadership"); Contact Us uses "Meet The Kroc Center Team" (PAGE-8) — keep distinct.

## ☑ BLK-6 — Site Alert editable CTA — VERIFIED, no change
- Checked: `[site_alert]` already has **"Optional CTA (Label + URL)"** (architecture-proposal-v2 §2), which merged the original `Button Text` + `Button Link` (content-template-schemas §2). The client's "CTA text should be editable" is already satisfied. No schema change.

## ☑ BLK-10 — Editable block headers — VERIFIED, no change
- Checked: featured/curated blocks (Stories, Classes, Pages, Programs, **Featured Volunteer Opportunities §16**) all have an editable **"Block Title"** field (🆕 in architecture-proposal-v2). "Can these headers be editable?" is already satisfied → Volunteer blocks can be reused on Careers by retitling to "Join the Team" (no duplication). Careers reuse itself deferred to **NEW-6**.

## ☑ BLK-8 — People card "Email Us" link — no schema change
- Display/label change only: the person card shows "Email Us" (mailto) instead of the raw address. `[people_block]` Person.Email field already exists — no schema change.

## ☑ PAGE-4 — Event card separate thumbnail — VERIFIED, no change
- **Mapping correction:** the comment (`94:1357` @210,826) is on **Events Root (6.10)**, on the **Event card's hero/thumbnail image** — *not* All Stories (6.6), which has no comment.
- Checked: **`[events]`** (Event Detail §27) already has a dedicated **`Thumbnail`** field (optional · *"card/feed crop, falls back to Desktop hero"*) plus **`Event Image — Desktop`** = *"16:7 hero (campaign artwork)"* — the **three-field hero standard** (Desktop / Mobile / Thumbnail, decision 5/28). The client's ask (upload a separate thumbnail; photo *or* designed artwork) is already satisfied for both the card and the hero. **No schema change.**
- The same Thumbnail standard exists on the other card-bearing types (stories, facility, volunteer, etc.), so story/feed thumbnails are covered too.

## ☐ SCHEMA-9 — BLK-5: Featured Pages card media + card style
- **`[featured_pages]`** repeater item: add a **media type** field (`icon` | `image`), per item. `icon` → from the kroc-icon library; `image` → upload. UI renders the icon on a tinted panel of the same footprint as the image so grids stay aligned. *(Media applies to the **Full** card style.)*
- **Card Style (block-level, NEW):** add a **`Card Style`** option — **`Full`** (icon/image panel + body + CTA — homepage "Get Started", About Us explore links) | **`Compact`** (icon chip + label only, whole card is the link — homepage **Quick Links** bar + the Membership section jump-nav). Same content type, two render styles. Compact items use **icon + title only** (body/CTA hidden). Pairs with a wider **Display Mode** (3-up / 4-up / **6-up** for compact). → prototype SYNC-27.

## ☐ SCHEMA-10 — BLK-7: Facility Section content type
- **`[facility_section]`** updates:
  - **Photos**: single Photo → **repeater of images** (drives the carousel).
  - **Hours of Operation**: model as a repeater of `{ day, ranges[] }` where `ranges` is one-or-more time strings **or** a Closed flag — supports **multiple periods per day** and Closed days. Make the whole hours group **optional** (no-hours variant for rentals).
  - **CTA**: confirm the existing "Optional CTA (Label + URL)" is truly optional (can be empty).
  - Per-facility **closure override** (status + message) already modeled — keep.
  - **Rentals (NEW-4)** reuses this card; the rentable-space model can extend/reuse `[facility_section]` (no fixed hours, rental-inquiry CTA).

## ☐ SCHEMA-11 — PAGE-1: All Programs "Search for Classes" block
- **`[programs_index]`** (All Programs page) gains a **"Search for Classes" block** — a class finder that queries across **all** `[program_categories]`, vs. the Program Category (6.3) listing which is scoped to one category. Same component, different scope.
- **Driven by existing data — no new content type.** Confirm `[classes]` exposes the fields the finder filters on:
  - **Category** relation → `[program_categories]` (drives the Category dropdown + the per-row Category column on All Programs).
  - **Class Type** enum (Roster / Drop-In) → Type filter.
  - **Schedule / dates** → Date filter (Any time / This week / Next week / This month). Ties to PAGE-2's "roster classes need date ranges" — the date filter needs a queryable start/end on the schedule.
  - **Title + (marketing) description** → text search.
- Filters/search/view-toggle/pagination are **contextual UI only** (no CMS fields), consistent with how 6.3's listing is already documented.
- **Architect flag (→ OQ-2):** this is a **catalog-scoped class search**, distinct from any **global site search** (NAV-1 search link, PAGE-6 search-results). Decide whether they're one system or two.

## ☐ SCHEMA-12 — PAGE-1 item 2 / HOME-4: Apex-only multi-center elements (conditional by site type) + Map block
- The **"City or ZIP" center locator** (All Programs filter row `83:154` @1145,494) is **not needed on an individual Kroc instance** — on a single center there's nothing to locate. Same family as the **homepage "27 Kroc Centers" locator + map block** (map comment `30:2` @324,733).
- **Architecture note (no design push):** introduce a **site-type flag** — *apex* (kroccenter.org) vs. *instance* (individual Kroc). Cross-center elements (center locator inputs, the centers map) render on **apex only** and are hidden/omitted on instances. On instances, the apex map "could go on About Us" (NEW-3).
- On instances, the All Programs filter-row field should be a **within-center program/class search**, not a locator (the prototype already does this).
- **`[homepage]` schema comment (HOME-4):** the homepage map is a **drag-in block, apex-only** — on instances it is not placed on the homepage.
- **Map is now a reusable block `[map_block]` (HOME-4):** a **`Variant`** field — **`Locator`** (apex · multi-center finder + City/ZIP search) | **`Single`** (instance · one location + Get Directions, address from `[kroc_location]`). Apex homepage uses Locator; instance **About Us (NEW-3)** uses Single. Same block, two modes — no separate types.
- **Flag for architect:** confirm whether one CMS serves both apex and instances with a site-type setting, or instances are a separate template set.

## ☐ SCHEMA-13 — PAGE-2: `[classes]` date range + split pricing
- **`[classes]` add `Session Dates`** — a date **range** for roster classes (e.g. "6 weeks · Sep 8 – Oct 15, 2026"). Model as start/end (+ optional duration label) so it's **queryable** by the Date filter (SCHEMA-11) and renders on the card, listing table, and **Class Detail (6.4)** sidebar. Drop-In classes omit it.
- **`[classes]` price → two price points:** **`Member Price`** and **`Public Price`** (replacing/augmenting the single price). Still **dynamic from Traction Rec / Club Automation** (embed/redirect, **no DB**) — the two values resolve at runtime; CMS may hold display fallbacks. Surfaces on card, table, and Class Detail sidebar.
- **Reuse note — full surface area:** these are class-level fields, so the **same `ClassCard`** renders them on **every** class surface, each just **reading `[classes]`** — **no per-surface schema**:
  - **Program Category 6.3** listing (`[classes]` filtered by category)
  - **All Programs 6.2** "Search for Classes" (cross-category `[classes]` query, SCHEMA-11)
  - **Featured Classes block 7.7** — `[featured_classes]` is a **repeater → Class Ref into `[classes]`**; it inherits the new fields automatically, **no `[featured_classes]` schema change**.
  - **Class Detail 6.4** — sidebar (the class's own record) **and** the "Other Aquatics Classes" related feed (relational `[classes]` by category). No Class-Detail-specific schema.
- Net: **one `[classes]` change** (Session Dates + Member/Public price) flows to all consumers. (There are no Figma comments on the Class Detail frame; these asks were pinned on Program Category.)

## ☐ SCHEMA-14 — PAGE-3: Informational page — selectable hero background + accordion block
- **`[informational_pages]` hero background (item 1):** add **`Hero Background Type`** (Color | Image), **`Hero Background Color`** (palette select, for Color), **`Hero Background Image`** (media, for Image). Renders via the reusable `PageHero` (color band or photo hero).
  - **Recurring pattern — flag for architect:** "palette color OR image background" also appears on the Intro Band (SCHEMA-5, homepage reply on `25:6`) and is implied on other heroes. Consider a **shared `Background` field group / config** reused across hero-bearing blocks/pages rather than per-template fields.
- **`[informational_pages]` accordion content (item 2):** Page Content should support an **Accordion block** — collapsible sections (repeater of `{ Heading, Body (rich text) }`). Reuses the existing **FAQ/accordion block model** (prototype `FaqList`); if a `[faq]`/`[accordion]` block already exists in the schema, expose it as a content option here. Example use: facility policies. **Reusable** across pages (e.g. Membership/Day Pass FAQs, NEW-1/2).

## ☐ SCHEMA-15 — PAGE-5: Class Detail — additional blocks (Image Gallery)
- The client's **"additional photos"** ask = the **Image Gallery block**, *not* inline images in the "About this class" body. No WYSIWYG image-embed requirement.
- **Class Detail (6.4) is extensible** — it should accept **additional drag-in blocks**, same as other Hybrid pages. Demonstrated with the **Image Gallery block `[image_gallery]`**. Confirm `[classes]` (Pageset · Hybrid) supports a body/blocks zone for drag-in blocks (not just fixed fields).
- **`[image_gallery]` layout variant:** add a **`Layout`** option — **`Mosaic`** (varied tile spans / masonry) | **`Grid`** (uniform tiles). Reusable block; mosaic used on Class Detail. (The "include dates" part of these comments = already covered by SCHEMA-13 Session Dates.)

## ◑ SCHEMA-16 — PAGE-7: Event Detail — header image sizes + Hybrid (mostly verified)
- **Item 1 — multi-size header + artwork (mostly already in schema):** `[events]` (§27) already has **Event Image — Desktop** (16:7, *"campaign artwork"*), **Event Image — Mobile**, and **Thumbnail** (the cross-cutting three-field hero standard, 5/28). So **predesigned artwork ✅** and multiple sizes ✅ — *except* the client explicitly listed **"Desktop, tablet, mobile"** and the standard has **no dedicated tablet** field.
  - **Decision for architect/client:** either (a) **tablet falls back** to Desktop/Mobile via responsive CSS (no new field — current standard), or (b) add **`Event Image — Tablet`**. If (b), consider adding tablet to the **whole three-field hero standard**, not just events. *(Recommend (a) unless the client wants a separately-cropped tablet asset.)*
- **Item 3 — additional blocks (verified):** Event Detail `[events]` is already **"Pageset · Hybrid"** (§27) → accepts drag-in blocks. The Image Gallery block (mosaic) confirms it. **No schema change.** (`[image_gallery]` Layout = Mosaic\|Grid per SCHEMA-15.)
- **Item 2 — Price (schema change):** add **`Member Price`** + **`Public Price`** to **`[events]`** (§27 currently has *no* price field). Same model as `[classes]` (SCHEMA-13) — **dynamic from Traction Rec / Club Automation** (embed/redirect, no DB); CMS may hold display fallbacks. Renders as the shared `PricePoints` style in **both** the Event Detail **sidebar** (detail size) and the **Event card** (card size) — so every event-card surface (Events Root 6.10, Tag Detail 6.9, "Other Events") inherits the price by reading `[events]`. *(Open-house demo shows Members Free / Public $5; events vary.)*

## ☐ SCHEMA-17 — PAGE-8: Contact Us uses the global footer (social links)
- **Architecture change to `[contact_us]` (§28):** the doc currently says *"Connect footer replaced by a cross-link card to avoid recursion."* The client's "add Social Media links" comment shows that's wrong — the page should use the **standard global `Connect` footer** like every other page, since the **social links live there** (sourced from **`[kroc_location].social_handles`**). Update §28: Contact uses the global footer (no cross-link card).
- No new fields — social handles + footer content are already global (`[kroc_location]`, NAV-4 / SCHEMA-4). This is a layout/architecture correction, not a content-model addition.
- Item 1 ("View all hours") and item 3 ("Meet The Kroc Center Team" via `[people_block]`) need **no schema change** — hours come from `[kroc_location]`; the People block already exists.

## ☐ SCHEMA-18 — HOME-1: Homepage hero — photo OR video background
- **`[homepage]` hero (§17)** currently has only **Hero Image — Desktop / Mobile / Thumbnail**. Add background-**video** support so the hero can be a **photo OR a video**:
  - **`Hero Background Type`** — `Photo` | `Video`.
  - **`Hero Background Video`** — video source (field type depends on hosting — see below).
  - Keep **Hero Image — Desktop** as the **poster/fallback** (shown while video loads, on reduced-motion, and as the mobile fallback). Video should autoplay **muted + loop**, no audio.
- **Blocked on a hosting decision (⏳, already flagged at the doc's cross-cutting hero note):** self-hosted file (Manager Media) vs. embed (YouTube/Vimeo/Cloudflare Stream). That decision sets the field type (Media vs. URL) — **flag for architect/client**.
- **Scope:** homepage hero for now (that's where the comment is). The same Background Type/Video pattern could extend to other hero-bearing templates later — relates to the recurring "background" pattern (SCHEMA-14).
- **Prototype:** schema-only for now — no hero-video build yet (annotated in `Page_Home`).

## ☐ SCHEMA-19 — HOME-2: Featured Events block + Event short description
- **New block `[featured_events]`** — mirror of `[featured_classes]`: `Block Title` (optional) + `View All` link, `Display Mode` (Grid 3-up / 4-up), and a **repeater → Event Ref into `[events]`** (curated, suggest capping like Featured Classes' max 6). Plus a **Custom Card** option (manually-authored card as an alternative to a referenced event — from the comment reply).
- **`[events]` add `Event Excerpt`** — a short **Text Area** for the card/feed description (mirrors `[stories].Story Excerpt`). This is the "short event description" the Event card was missing; distinct from the full `Event Body` WYSIWYG. Surfaces on every `EventCard`.
- **Homepage pairing:** the homepage "Featured Classes and Events" ask = the two paired blocks (`[featured_classes]` 7.7 + `[featured_events]` 7.17) dragged onto `[homepage]`. Both read their respective content types; no combined type needed.

---

## ◷ SCHEMA-NEW (deferred batch) — extract content models from the 6 new pages

> **Status: pending — single consolidated pass, after the UI work is done** (per direction 2026-06-29). The new pages (NEW-1…NEW-6) were **designed first** (`KROC prototype/pages-new.jsx`); their schema is **extracted from the finished designs** in one go, not per-page up front. Donate (NEW-7) = external link, **no schema**.

Each page already carries **embedded field hints** — every `PageFrame` declares `schema="[informational_pages]"` (Pageset · Freestyle) plus a `fields` list and `notes` naming the drag-in blocks it uses. Those are the **starting point** for extraction; the pass formalizes them in **content-template-schemas.md** and folds anything net-new into the architecture docs.

**What the extraction pass must decide (cross-page):**
- **Reuse vs. net-new content types.** All 6 ride `[informational_pages]` + existing drag-in blocks. Confirm which sections are genuinely just freestyle/WYSIWYG + existing blocks (`[faqs]`, `[facility_section]`, `[people_block]`, `[featured_pages]`, `[map_block]`, `[donation_block]`, `[custom_forms]`) vs. which need a **new structured type**.
- **Membership/Day Pass rate cards (NEW-1/2 → BLK-9):** formalize a **Membership card / Day Pass card** model (tier name, rate, age range, period) + the **Family Play comparison** table + **PlayCare rates**. Pricing is **dynamic from Traction Rec / Club Automation** (embed/redirect, **no DB**); CMS may hold display fallbacks. May share the **Member/Public `PricePoints`** model (SCHEMA-13/16).
- **Integration (NEW-1/2 → OQ-7):** membership sign-up / day-pass purchase via Traction Rec / Club Automation — embed widget vs. deep link; dynamic vs. authored. **Vendor-hosted/embed only, no DB connection.**
- **Rentals (NEW-4):** rentable-space model — likely **extends/reuses `[facility_section]`** (no fixed hours, amenities/pills, rate, inquiry CTA) per SCHEMA-10; the interest form is a `[custom_forms]` instance (OQ-4: inquiry vs. booking system).
- **Careers (NEW-6):** ⚠️ built with a **bespoke department/role-listing layout**, not the Volunteer Opportunities blocks BLK-10 anticipated. Decide: **reuse the `[volunteer_opportunities]` model** (6.13/6.14) for job listings, or a careers-specific type (role, dept, location, type, apply link). HR contacts = `[people_block]`.
- **Church (NEW-5):** service times = `[facility_section]` (with hours), ministries/weekly schedule + prayer-request form, troops — confirm reuse vs. bespoke (OQ-5 scope).
- **About Us (NEW-3):** mission/impact/leadership/location/explore-links — all map to existing blocks (`[people_block]`, `[featured_pages]`, `[map_block]`, `[donation_block]`); likely **no new type**.

**No SCHEMA-N numbers assigned yet** — they'll be cut during the extraction pass so the architect gets one coherent set rather than fragments.

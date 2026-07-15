# Figma Sync Queue

Local prototype changes that are **done in `KROC prototype/`** but **not yet pushed to Figma**.
We batch these and sync in one pass. Figma file: `WsFYMxcAcKMQrCJMXehyNS`.

> Workflow reminder: prototype is edited first; Figma is updated from it in batches.
> At sync time, confirm whether the target is a **master component** vs. a per-page **instance**
> (update the master so all pages inherit), and verify exact text-node IDs before writing.
>
> **Companion doc:** content-model changes go in [schema-sync-queue.md](schema-sync-queue.md). After each ticket, update **both** docs as needed.

---

## ☑ SYNC-1 — NAV-1 + NAV-3: Header (nav, utility bar, CTAs) — **PUSHED 2026-06-29**

**Pushed to Figma:** edited the **Header · Floating master `24:4`** (Components page `10:3`) — nav relabeled to *Home · About Us · Membership · Classes▾ · Events · Rentals · Church* (7th item "Church" cloned in; chevron moved to Classes), utility bar → *Careers · Donate · Hours & Closures*, CTAs → *Become a Member* (navy) / *Purchase Classes* (red). Master edit → all instances inherit. Verified via screenshot. *(Mega-menu open-state = SYNC-2, still pending.)*


**Local change (done):** `KROC prototype/shared.jsx` — `NAV_ITEMS`, Header utility bar, Header CTAs.

**Target in Figma:** Header — node `24:4` ("Header · Floating", 1248×112, on homepage region).
- ⚠️ Determine if `24:4` is an instance of a master Header component; if so, edit the **master** (likely on Components page `10:3`) so every page's header updates. Check for other header variants too.

**Changes to apply (covers NAV-1 + NAV-3 — same Header node):**
1. **Primary nav** — change from `Home · Programs ▾ · Stories · Events · Volunteer · Contact Us` (6 items) to:
   `Home · About Us · Membership · Classes ▾ · Events · Rentals · Church` (7 items)
   - Relabel existing text nodes + add one node for the 7th item.
   - Keep the dropdown chevron on **Classes** (it carried over from "Programs ▾").
2. **Utility bar** — replace **Visit National Site** + **Find a Thrift Store** with **Careers** + **Donate** (keep *Hours & Closures* and the location pin):
   `Visit National Site | Find a Thrift Store | Hours & Closures`
   → `Careers | Donate | Hours & Closures`
3. **CTAs (NAV-3)** — replace the **Find Help** + **Donate** buttons with **Become a Member** + **Purchase Classes**.
   - Slot/style mapping kept: left = navy (info), right = red (primary) → Become a Member (navy), Purchase Classes (red). Emphasis can be swapped if client prefers the membership CTA in red.
4. **Search** — intentionally **not** added.

**Notes / deferred:**
- Pages with no design yet (About Us, Membership, Rentals, Church, Careers, Donate) are shown as **labels only** — no link mapping (defer per instruction).
- **Mobile** header (`KROC prototype/mobile/`) not changed — route-based nav has no routes for the new pages, and the mobile Donate button / search icon still need the same treatment; handle as a separate follow-up.
- Width check at sync: 7 items + chevron + 2 CTAs must fit 1248px; if tight, that's what NAV-2 (mega menu) addresses.

---

## ◑ SYNC-2 — NAV-2: Mega menu (Classes + Events) — **open-state panels CREATED 2026-06-29**

**Pushed to Figma (interaction-states):** created two dropdown open-state panels on the Components page `10:3` — **`State · Mega Menu — Classes` (`394:502`)** and **`State · Mega Menu — Events` (`395:502`)**: white card + soft drop shadow, head row (title + red *All Classes/All Events ↗*) over a hairline divider, and a 3-up grid of the 8 categories each (icon chip + label).
**Still pending for SYNC-2:** (a) **category line-icons** — currently red-tinted placeholder chips (real icons come with the icon-library refresh); (b) the **trigger open-state on the Header** (active label in red + chevron rotated up) when the panel is composed under the Header on a page.

**Local change (done):** `KROC prototype/shared.jsx` (mega data on `NAV_ITEMS` + Header render, new category icons) and `kroc.css` (`.kroc-mega*`, rotating `.chev`).

**Target in Figma:** Header (node `24:4` / master Header component). Figma is static, so build the **open state** — likely a dedicated frame/variant per menu (Classes-open, Events-open) so the client can see it.

**Changes to apply:**
1. **Chevron indicator** — replace the small caret on Classes & Events with a proper chevron that reads as a dropdown; show the **open state** as rotated up (▲) with the trigger label in **red**.
2. **Mega panel** — white card, radius 16, large soft shadow (`0 24px 60px rgba(0,0,0,.18)`), dropping below the header, inset ~8px L/R.
   - **Head row:** title (`Classes` / `Events`) on the left; on the right a red **"All Classes" / "All Events"** link + up-right arrow icon. Hairline divider beneath.
   - **Body:** 3-column grid; each item = red line-icon (20px) + dark label (14px), with hover/selected affordance.
3. **Dummy items** (same as prototype):
   - **Classes:** Aquatics · Group Fitness · Youth Programs · Arts & Crafts · Music & Dance · Sports & Rec · Health & Wellness · Aging Well (55+)
   - **Events:** Community Events · Fundraisers · Holiday & Seasonal · Performances · Workshops · Sports Tournaments · Family Days · Special Events
4. Category icons are improvised line-icons in the prototype — in Figma, draw equivalents or pull from the icon library (note: client also wants an **icon library refresh**, tracked separately).

**Notes:** items + "View All" index are dummy/unlinked. Mobile mega/menu not done.

---

## ◑ SYNC-3 — NAV-4: Footer ("Connect With Us" block) — **items 1–5 PUSHED 2026-06-29**

**Pushed to Figma** (Footer · Connect With Us master `28:8`, Components page `10:3`):
- ✅ **Newsletter redesign** — removed the inline Email/Phone inputs; the card is now a horizontal callout: a **red-tinted circular mail icon (placeholder)** + "Sign Up for KROC Updates" + supporting line (left) and a single **Sign Up for Updates ↗** button (right). *(Placeholder mail glyph drawn via SVG; swap for the real icon during the icon-library refresh.)*
- ✅ **Mission card** → "The Salvation Army Mission" + official statement (red card kept).
- ✅ **Meta line** → Phoenix: 1375 E. Broadway Road… · (602) 425-5000 · info@krocphoenix.org · Privacy Policy · © The Salvation Army.
- ✅ **Quick-links** → Programs→**Classes**, Employment→**Careers**.
- ✅ **Affiliate links** → added **Thrift and Donate Goods ↗** (kept KrocCenters.org + Donate).
- ◷ **Deferred to the icon-library refresh:** item 6 **socials** only (currently placeholder dark filled circles with no glyphs — need fb/x/ig/li/yt glyph artwork = "dark glyph, no filled circle"; "hover red" is non-static). *(Newsletter mail icon = placeholder added.)*
- ⚠️ The Sign-Up button was kept **navy**; promote to red/primary if the client wants it as the dominant CTA.

_Original plan retained below for reference._


**Local change (done):** `KROC prototype/shared.jsx` (`Connect` component) + `kroc.css` (`.kroc-connect .card.newsletter`, socials).

**Target in Figma:** the footer / "Connect With Us" block. Find the footer **component** + its instances (comments pinned at homepage footer region `30:2` y≈2700–2995, and `96:1606`). Update the master so all pages inherit.

**Changes to apply:**
1. **Newsletter card — redesign** (main effort): drop the inline Email/Phone inputs + Sign Up; replace with a callout that *matches the footer cards* — red-tinted mail icon, heading "Sign Up for KROC Updates", one supporting line, and a single **"Sign Up for Updates ↗"** primary button that links to the center's **vendor form** (Mailchimp / Constant Contact / Emma). Lay out horizontally (text left, button right) to fill the wide card.
2. **Mission card** → heading **"The Salvation Army Mission"** + official statement (keep red card, white text):
   *"The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human needs in His name without discrimination."*
3. **Footer meta line** → Phoenix instance: `1375 E. Broadway Road, Phoenix, AZ 85040 · (602) 425-5000 · info@krocphoenix.org · Privacy Policy · © The Salvation Army`.
4. **Footer quick-links** → align to new nav: Programs→**Classes**, Employment→**Careers**.
5. **Affiliate/footer links** → add **Thrift and Donate Goods**; keep KrocCenters.org (= kroccenter.org) and Donate.
6. **Socials** → all 5 icons consistent (dark glyph, no filled circle), hover red.

**Deferred / notes:**
- **"View all hours >"** belongs to the Contact Us hours block (**PAGE-8**), not the global footer — handle there.
- **"Where does this go?"** placeholder (`30:2` 352,2994) — **skipped**; client (you) will clarify.
- Header location still says "Camden · Eastern Region" while footer now says Phoenix — full Phoenix re-theme is **HOME-1** (separate).
- **Mobile** footer (`m-shared.jsx` `Connect`) not changed — separate pass.

---

## ☑ SYNC-4 — BLK-1: Welcome / Intro Band — Membership variants — **PUSHED 2026-06-29**

**Pushed to Figma:** created **`Block · Intro Band` (`407:4368`)** on the Components page `10:3` — a variant set with **Variant = No Photo | Photo**. *No Photo* = navy band (MEMBERSHIP eyebrow + "Membership is for everyone." + copy + Become a Member / View Day Passes). *Photo* = white card, copy-left (red eyebrow + dark title + Become a Member / View Day Passes) + photo-right (5/7). `Block · Donation` (`25:6`) left intact (this is the separate `[intro_band]`, per SCHEMA-5). HOME-6 homepage instance = Phase C.


**Local change (done):** `KROC prototype/blocks.jsx` — new block `B_WelcomeIntro` (7.16) + TOC/render registration.

**Target in Figma:** the Welcome/Intro block (node `25:6`). Add the **Membership** variants. Not a new component family — same text(+optional photo) section pattern as the **Facility Section** block; if there's no reusable intro component yet, create one with these two variants.

**Changes to apply — 2 variants (modeled on Facility Section card, radius 20):**
1. **No photo — palette background:** navy (`--kroc-navy`) band, white text, padding ~48×56. Eyebrow "Membership", title **"Membership is for everyone."**, body = client copy, CTAs **Become a Member** (light) + **View Day Passes** (outline-light). Background color is the palette-configurable option the client asked for.
2. **With photo:** white card, `7fr / 5fr` grid — text left (eyebrow red + title + body + CTAs **Become a Member** red / **View Day Passes** outline-primary), photo right (3:2 placeholder).

**Copy (client):** *"Becoming a member at The Salvation Army Kroc Center is much more than signing up for a health club or wellness center. This is a place where you will feel welcomed and supported no matter what your physical, educational or social goals — and every person in our community is a critical component. Day passes are also available."*

**Notes:** mobile equivalent not done.

---

## ☑ SYNC-5 — HOME-6: Homepage donation band → membership callout — **PUSHED 2026-06-30**

**Pushed to Figma:** on the homepage (`30:2`, page `10:4`) swapped the **Donation band instance → `Block · Intro Band` (No Photo)** membership callout ("Membership is for everyone." + Become a Member / View Day Passes). Same shared component as SYNC-4.


**Local change (done):** `KROC prototype/pages-a.jsx` — homepage band replaced with the shared `IntroBand` membership variant (same component as BLK-1).

**Target in Figma:** the homepage mission band just above the footer (`30:2`, around y≈2129) — the red "Every dollar opens a door / Donate Now" band.

**Changes to apply:**
- Replace it with an **instance of the Welcome/Intro Band — Membership variant (no-photo, navy)** from SYNC-4 — *the exact same component/variant*, not a one-off band. Content: eyebrow "Membership", title **"Membership is for everyone."**, full membership copy, CTAs **Become a Member** + **View Day Passes**.
- Keep the **Donation Block** component itself intact (still documented/usable) — only the homepage instance changes from donation → membership.

**Notes:** must be identical to the SYNC-4 membership variant (shared component, so build once and instance it here). Mobile homepage not changed.

---

## ☑ SYNC-6 — BLK-2: Class card — no-image variant + marketing-description pop-up — **PUSHED 2026-06-29**

**Pushed to Figma (interaction-state):** created **`State · Class Card Pop-up` (`391:502`)** on the Components page `10:3` — dim backdrop + centered modal (type pill, ✕ close, title, schedule, session dates, **Members/Public price points**, marketing description, full-width red Register). This is the click→pop-up state the client asked for (static open-state frame).
**No-image variant DONE:** added a **`Media` property (Photo | Color)** to `Card · Class` `55:28` → a 2×2 set (Roster/Drop-In × Photo/Color). The **Color** variants render a navy cover with the type pill + white class title (photo & body-title hidden); set switched to wrap layout for the 2×2.


**Local change (done):** `KROC prototype/shared.jsx` — new reusable `ClassCard` component; `pages-a.jsx` — Program Category listing uses it (with descriptions; two Drop-In classes flagged no-image).

**Target in Figma:** the Class card component (node `55:28`) + the Aquatics Classes listing on Program Category (`86:293`).

**Changes to apply:**
1. **No-image variant:** replace the photo with a **branded color cover** of the same 16:9 footprint — navy gradient carrying the type pill (top-left) + the class title in white type. Keeps every card the same height so the grid stays aligned (the earlier "shorter card" approach looked ragged in the grid).
2. **Marketing-description pop-up:** the **whole card is clickable** (no "View details" link) — opens a centered **modal** (dim backdrop) showing type pill, title, schedule, price, the **class marketing description**, and Register + Close. Register uses stopPropagation so it doesn't trigger the modal. Closes on backdrop / Escape / ✕. Card hover = box-shadow only (no transform — that would re-anchor the fixed modal).
3. **Listing:** both variants in the Aquatics Classes grid (two Drop-In classes render as the color-cover variant); cards are **equal height with the Register button anchored to the bottom** (body fills, Register pinned via margin-top:auto) so the actions line up across the row.

**Also — CTA color unification:** class **Register** was red (`btn-primary`) everywhere *except* the Featured Classes block, which was navy (`btn-secondary`). Featured Classes (7.7) now **reuses `ClassCard`**, so every desktop class card is the same component with a **red Register**, the click→pop-up, and the no-image variant (shown on Open Lap Swim). In Figma, make the Featured Classes cards match: red Register, not navy.

**Notes / deferred:**
- Secondary "View / Learn More" CTAs on Story/Event/Opportunity/Category cards stay navy (`btn-secondary`) — those are secondary actions, intentionally not red. (Confirm with client if they also want CategoryCard "Learn More" in red.)
- **Table view** doesn't get the pop-up (comment is card-specific) — could add row "details" for parity if wanted.
- Mobile class card not changed.

---

## ☑ SYNC-7 — BLK-3: Team / People block — single-card-with-bio variant — **PUSHED 2026-06-29**

**Pushed to Figma:** converted `Block · People` into a variant set **`Block · People` (`410:4367`)** with **Layout = 4-up | 1-up Bio**. *1-up Bio* = feature card with a soft `#F6F6F8` left profile panel (circular portrait, name, navy role pill, divider, email, phone) + right column (greeting "Hello from the Membership Manager", "Hello everyone!" lead-in, bio). Also relabeled the master title **"Camden Leadership" → "Meet the Team"** (knocks out SYNC-8's team-block relabel; existing 4-up cards already carry bio/email/phone).


**Local change (done):** `KROC prototype/blocks.jsx` — People Block (7.12) now shows two layouts: the existing 4-up grid + a new 1-up feature with bio.

**Target in Figma:** the Team block (node `73:163`). Add the **1-up feature (single card with bio)** layout alongside the 4-up grid.

**Changes to apply — matches client's reference image ("Hello from the Membership Manager", a current Kroc site):**
- White card, two-column layout (greeting heading lives at the top of the right column — see below).
- Two columns: **left** = a **soft profile panel** (light `#F6F6F8` rounded panel) grouping a centered circular portrait, name (bold), **role as a navy-tinted pill badge**, a hairline divider, then centered email (mail icon) + phone (phone icon). **Right** = the greeting heading ("Hello from the Membership Manager", left-aligned at the top of this column) + bold lead-in ("Hello everyone!") + the bio paragraph.
- Keep the existing 4-up grid as the other layout option (Person schema already has an optional Bio field; Layout = 4-up · 3-up-with-bio · 1-up feature).

**Parity fix (Figma → local):** the local 4-up cards were missing detail that Figma already had — **bio line + email (mail icon) + phone (phone icon)**. Local now updated to match, so the **4-up grid needs no push**; the only **net-new to push to Figma is the 1-up feature (single-card-with-bio) variant**.

**Notes:** prototype content is Camden-flavored placeholder. Could be promoted to a reusable component when **About Us (NEW-3)** is built. Mobile not changed. Heading "Meet the Team" vs "Camden Leadership" is editable content per instance.

---

## ☑ SYNC-8 — HOME-5 / BLK-4 / BLK-3: Relabels (text only) — **PUSHED 2026-06-30**

**Homepage relabels DONE (2026-06-30):** on `30:2` — "How We Serve" → **"Programs and Classes"**; "Latest Stories" → **"Kroc Highlights"** + "View All Stories" → "View All Highlights". (Block-master relabels were done 6-29.)


**Pushed to Figma (block masters):** `Block · Featured Stories` (`61:22`) heading **"Featured Stories" → "Kroc Highlights"** (BLK-4); `Block · People` title **"Camden Leadership" → "Meet the Team"** (BLK-3, done with SYNC-7). **Pending = homepage section relabels** (HOME-5: "How We Serve" → "Programs and Classes"; "Latest Stories" → "Kroc Highlights" + its View-All link) — these live on the homepage frame `30:2`, so **Phase C**.


**Local change (done):** `pages-a.jsx` + `blocks.jsx` heading text.

**Targets in Figma (text relabels):**
- **Homepage (`30:2`):** "How We Serve" → **"Programs and Classes"**; the "Latest Stories" section → **"Kroc Highlights"** (and its "View All" link → "View All Highlights").
- **Stories/Highlights block (`61:22`):** "Featured Stories" heading → **"Kroc Highlights"**.
- **Team block (`73:163`):** "Camden Leadership" → **"Meet the Team"**.

**Notes:** display-label changes only — underlying content types unchanged (see SCHEMA-8). For full consistency, apply the same relabels to other instances too (Program Category "Featured Stories" section, Featured Programs block demo) — flagged, not yet changed in the prototype.

---

## ☑ SYNC-9 — BLK-5: Featured Pages — icon-or-image card media — **PUSHED 2026-06-29**

**Pushed to Figma:** converted `Card · Page` into a variant set **`Card · Page` (`399:503`)** with **Style = Image | Icon | Compact**. The **Icon** variant uses a tinted `#EEF2F8` panel + centered navy icon placeholder (real icon via the icon-library refresh). Existing Card·Page instances remap to **Style=Image**. *(Compact = SYNC-27.)*


**Local change (done):** `KROC prototype/blocks.jsx` — Featured Pages (7.9 "Get Started") cards take a per-item media: icon or image.

**Target in Figma:** the Featured Pages / "Get Started" block (node `66:137`). *(Note: this comment maps to Featured Pages, not the category card.)*

**Changes to apply:**
- Each card chooses **icon OR image** for its top media.
- **Image variant:** current 4:3 photo.
- **Icon variant:** a 4:3 **tinted panel** (light navy `#EEF2F8`) with a centered navy icon — same footprint as the image so the grid stays aligned.
- Demo mix: Membership + Day Passes as icons; Personal Training + Birthday Parties as images.

**Notes:** prototype icons are from the local set (users, ticket); production pulls from the kroc-icon library (ties to the pending icon-library refresh). Mobile not changed.
- **Card Style follow-up:** the card now also has a **Compact (Quick Links)** style — see **SYNC-27** (icon-or-image is the *Full* style only).

---

## ☑ SYNC-10 — BLK-7: Facility / Location card — carousel · flexible schedule · no-hours · optional CTA — **PUSHED 2026-06-29**

**Pushed to Figma** (`Block · Facility Section` `80:208`). The master already had status badge, pills, hours table, CTA, Photo-left/right layouts, and the closure **status-message** (Closed variant). The local-only features are now synced too:
- **Carousel** — prev/next **arrow buttons + dot indicators** on every variant photo.
- **Complex schedule** — Open variant now shows a **multi-range day** (Mon–Fri: 5:30–9 AM / 4–9 PM, two stacked ranges) + a **Closed day** (Sun), demonstrating multi-period + Closed.
- **Optional CTA** — the **Closed** variant's Learn More button is hidden (CTA can be omitted).
- **No-hours rental variant** — added **`Status=Rental`** (`420:530`, "Community Room A"): no hours block, no status badge, rental pills, "Request a Rental" CTA. Set is now `Layout (Photo-left/right) × Status (Open/Closed/Rental)`. *(Rental added for Photo-left; Photo-right/Rental can be completed if needed.)*

_Correction: an earlier note marked these "instance-level, no push needed" — that was wrong; they are now actually built. Only carousel **arrow glyphs** remain placeholder-styled (chevron text) pending the icon-library refresh._


**Local change (done):** new reusable `FacilityCard` in `shared.jsx`; `B_FacilitySection` (7.8) renders 3 demo cards.

**Target in Figma:** the Facility Section block (node `80:208`).

**Changes to apply:**
1. **Photo carousel** — multiple photos with left/right arrow controls + dot indicators; a single photo shows no controls.
2. **Complex schedule** — hours support **multiple time ranges per day** (stacked) and **Closed** days (Family Resource Center: Mon–Thu 8:30–12 & 1–4:30, Fri–Sun Closed).
3. **No-hours variant** — omit the hours table entirely for rentable spaces (reused on Rentals, NEW-4).
4. **Optional CTA** — CTA can be omitted (shown omitted on the closed Theater card).
5. Keep the open/closed **status badge** + the closure status-message override (existing capability).

**Demo cards:** Family Resource Center (carousel + complex schedule + Open + CTA) · Black Box Theater (closure message, no CTA) · Community Room A (no-hours rental + "Request a Rental" CTA).

**Notes:** reusable `FacilityCard` — instance it on the Rentals page (NEW-4). Mobile not changed.

---

## ☐ SYNC-11 — BLK-8: People card "Email Us" link — **MOBILE only (deferred)**

**Status:** Per client, this comment applies to the **mobile** person card only. The desktop change was **reverted** — desktop People cards keep the raw email (matching Figma desktop). This item is **deferred with the mobile pass** (not started).

**Target in Figma:** the **mobile** person card (node `130:192`).

**Changes to apply (mobile):** replace the raw email with an **"Email Us"** mailto label (mail icon + link styling). Note: the prototype's mobile "Camden Leadership" cards currently show only name + role (no email) — reconcile against Figma's fuller mobile card when the mobile pass happens.

**Notes:** display/label change only — **no schema change** (Person.Email already exists).

---

## ☑ SYNC-12 — PAGE-1: All Programs — "Search for Classes" block — **PUSHED 2026-06-30**

**Pushed to Figma** (All Programs `83:154`): added a **"Browse by Category"** heading above the category toolbar/grid, and **cloned the Program Category classes listing (`86:428`)** in below the grid as **"Search for Classes"** (`476:3511`) — full listing (Date/Type filters · Cards/Table toggle · Search field · ClassCard grid · pagination) **plus an added `All Categories` dropdown** (`dd · Category`). The listing's search field already reads "Search" (SYNC-13 item 3). *(The top category-browse search still reads "City or ZIP" — pre-existing; relabel/locator-drop is the apex-only PAGE-1 item 2 architecture note.)*

**Local change (done):** extracted a reusable `ClassFinder` component in `KROC prototype/pages-a.jsx` (from the Program Category 6.3 listing) and added a **"Search for Classes"** section to All Programs (6.2). Program Category now renders the same `ClassFinder` (single-category, no Category filter) so the two stay identical.

**Target in Figma:** All Programs page (node `83:154`) — comment pinned at **(48,1154)**, "Add a 'Search for Classes' block here". Reuse the Program Category classes-listing component (`86:293`) as the master.

**Changes to apply:**
1. Add a **"Search for Classes"** block below the category browse grid. It is the **same listing component** used on Program Category (search input · Date filter · Type filter · Cards/Table toggle · count · ClassCard grid · pagination)…
2. …plus one extra control — a **Category** filter dropdown (`All Categories` + each `[program_categories]` item) — because this instance searches **across all categories**, not a single one. Table view adds a **Category** column.
3. Give the existing category grid a **"Browse by Category"** heading so the two affordances read as distinct (browse vs. search).
4. Empty state: a centered "No classes match your search" card when filters return nothing.

**Notes:**
- The block is **auto-fed from `[classes]`** (see SCHEMA-11); the prototype uses a cross-category sample.
- Single-component reuse: build the **master listing component once**, instance it on both 6.2 (with Category filter) and 6.3 (without).
- Ties to **OQ-2** (search scope). This is a **class-search block scoped to the catalog**, not the global site search — keep that distinction when client answers OQ-2.
- PAGE-1 **item 2** (the **"City or ZIP" center locator**, pin 1145,494, "not needed on an individual Kroc instance") is an **architecture/config note**, not a visual push — see SCHEMA-12. At sync, instance designs should **drop the locator** (and the homepage centers map) — apex-only.
- Mobile not changed.

---

## ☑ SYNC-13 — PAGE-2: Program Category + Class Detail — date ranges · split pricing · search relabel — **COMPLETE 2026-06-30**

> **Page-level DONE (Phase C Group 2, 2026-06-30):** Class Detail (`87:534`) **sidebar** now carries a **Session Dates** line ("8 weeks · Sep 8 – Nov 3, 2026") after Date & Time, and the empty Price slot (`87:581`) was rebuilt as **Members $76 / Public $95** two-price. The listing search field (`86:444`) already read **"Search"**. This closes the page-level remainder; the `Card · Class` master was done 6-30.

**Pushed to Figma (master):** updated the `Card · Class` master `55:28` (all 4 variants — Roster/Drop-In × Photo/Color): Roster cards now show a **Session Dates** line ("8 weeks · Sep 8 – Nov 3, 2026") after the schedule; the single price is replaced by **Members/Public** two-price (Roster $76/$95, Drop-In Free/$8). Propagates to every class-card surface (Featured Classes block, listings). **Pending = page-level:** Class Detail (`87:534`) sidebar Session Dates + Member/Public (Phase C); the `86:444` search-field relabel ("City or ZIP" → "Search").

**Local change (done):** `KROC prototype/shared.jsx` `ClassCard` gained `dates` (roster session range) + `memberPrice`/`publicPrice`; `pages-a.jsx` — `ClassFinder` table shows both; Program Category (6.3) + All Programs (6.2) data updated; **Class Detail (6.4)** sidebar adds Session Dates + Member/Public price. (All class surfaces share `ClassCard`, so this is one component change.)

**Targets in Figma:**
- Program Category classes listing — `86:293` (cards `86:449…86:505` = instances of **Card · Class `55:28`**; search field `86:444`).
- **Card · Class master `55:28`** (Roster `54:19` + Drop-In `55:18` variants) — edit the master so all instances inherit.
- Class Detail page (6.4) sidebar — *(node id TBD at sync; not in the comment set)*.

**Changes to apply:**
1. **Roster date range (item 1):** add a **Session Dates** line to the Roster card variant + Class Detail sidebar — calendar icon + range, e.g. **"6 weeks · Sep 8 – Oct 15, 2026"** (client's exact example). Drop-In variant has none.
2. **Member / Public pricing (item 2):** replace the single price with **two labeled price points** — `Members` and `Public` — on the card, the **Table** view (two small rows in the Price cell), and the Class Detail sidebar (two columns). Keep the **dynamic** tag (Traction Rec).
3. **Search relabel (item 3):** the listing search field `86:444` placeholder **"City or ZIP" → "Search"** (it's a class search, not a center locator). Prototype already uses a contextual placeholder ("Search Aquatics classes"); either is fine — the point is it's no longer a locator.
4. **Table view** gains the date sub-line under Schedule and the two-row Member/Public price.

**Notes:**
- Date/price are **`[classes]` fields** (SCHEMA-13) — same component renders on 6.2 / 6.3 / 6.4. Build once on the master.
- **All class-card surfaces now share `ClassCard`:** Program Category 6.3, All Programs "Search for Classes" 6.2, **Featured Classes block 7.7**, and the **"Other Aquatics Classes" related grid on Class Detail 6.4** (this last one was hand-rolled markup — replaced with the shared card, so it also gains dates + Member/Public + the pop-up). At Figma sync, make sure all of these are **instances of Card · Class `55:28`**, not one-off cards.
- The "Showing N of 24" count + filters remain UI-only.
- Mobile not changed.

---

## ☑ SYNC-14 — PAGE-3: Informational page — hero background options + accordion block — **PUSHED 2026-06-30**

**Pushed to Figma** (Informational `88:654`): converted the red **color-band hero → image hero** (`88:688`: fill → `surface/dark`, dims caption added, kept the eyebrow/title/subtitle which already matched the local PageHero image variant); **removed the static WYSIWYG article** (`88:692`) and inserted a centered (max 840) **Facility Policies accordion** (`Block · FAQs` instance `481:3620`) — Membership dues / Code of conduct & safety / Guest & day pass policy / Locker rooms & changing areas. The **password-gated variant was kept**. ⚠️ FAQ master holds **4** rows so "Cancellations & refunds" (5th local item) is omitted — same N-row cap as SYNC-24; extend the master as a follow-up.

**Local change (done):** new reusable `PageHero` in `shared.jsx` (variant **color** band / **image** hero); `pages-a.jsx` Informational (6.5) hero now uses it (+ a labeled image-variant demo). Added an **accordion content block** via the existing `FaqList` (facility-policies example).

**Target in Figma:** Informational page — node `88:654`.

**Changes to apply:**
1. **Hero background (item 1):** the page header supports **two background types** — a **palette color** band (current red band; color is palette-selectable) **or** a **background image** hero (same look as Class Detail / All Programs heroes). Build both as variants of one header component.
2. **Accordion block (item 2):** add a collapsible **accordion** content block (header row + rotating +/expand, one section open). Demo content = facility policies (membership dues, conduct & safety, guest policy, locker rooms, cancellations). Same accordion pattern as the existing **FAQ block** — reuse it, don't make a new one.
3. Keep the existing **password-gated** variant.

**Notes:**
- **Prototype demos the chosen treatment:** the **image hero** + the **accordion** policies (the static WYSIWYG article and the color-band demo were removed to keep the page clean). The **palette-color band remains a supported `PageHero` variant** and a schema option (SCHEMA-14) — just not shown on this page.
- `PageHero` is reusable — usable on other freestyle/info pages and the new pages (NEW-*).
- Accordion reuses the FAQ component (SCHEMA-14) — the "palette-or-image background" is a recurring pattern (see SCHEMA-14 architect flag).
- Mobile not changed.

---

## ☑ SYNC-15 — PAGE-5: Class Detail (6.4) — Image Gallery block + WYSIWYG photos — **COMPLETE 2026-06-30**

> **Placement DONE (Phase C Group 2, 2026-06-30):** a **Mosaic `Block · Image Gallery` instance** (`478:5703`) was inserted on Class Detail (`87:534`) between the detail section and "Other Aquatics Classes". Component side was already verified.

**Verified (component):** the `Block · Image Gallery` master (`78:209`) already exists in Figma with **Layout = Mosaic / Grid / Carousel** variants (Figma is ahead — it even has Carousel the prototype lacks). So the component side is done; **remaining = placing a Mosaic gallery instance on the Class Detail page frame (Phase C).**

**Local change (done):** `shared.jsx` `ImageGallery` gained a `variant` prop (**mosaic** | grid); `pages-a.jsx` Class Detail now includes an **Image Gallery block (mosaic)** between the detail body and "Other Aquatics Classes". Class Detail fields/notes updated for WYSIWYG inline photos + additional blocks.

**Target in Figma:** Class Detail — node `87:534` (**"6.4 · Class Detail"** — the frame mislabeled as Story Detail in the comments doc; corrected). Image Gallery block component (the existing `[image_gallery]` block).

**Changes to apply:**
1. **Additional photos + additional blocks (item 2):** the "additional photos" ask = an **Image Gallery block** (not inline body images). Add an **Image Gallery block** instance below the detail section in the **Mosaic** variant (varied tile sizes / masonry, 4-col) — this also demonstrates the page carries drag-in blocks.
2. **Image Gallery variants:** the gallery block has **Mosaic** and **Grid** layouts — Mosaic used here.
3. *(Dates portion of these comments = already handled by SYNC-13 Session Dates.)*

**Notes:**
- `ImageGallery` is an existing reusable drag-in block — instance it; don't rebuild.
- Mobile not changed.

---

## ☑ SYNC-16 — PAGE-7: Event Detail (6.11) — Image Gallery block (additional blocks) — **COMPLETE 2026-06-30**

> **Placement DONE (Phase C Group 2, 2026-06-30):** on Event Detail (`95:1493`) — inserted a **Mosaic `Block · Image Gallery` instance** (`483:3642`) before "Other Events", and added **Member/Public price points** to the sidebar (`95:1532`): "Price" label + **Members Free / Public $5** (detail size) above Register. Card-level Member/Public was already on `Card · Event`.

**Verified (component):** `Block · Image Gallery` (`78:209`) already has Mosaic/Grid/Carousel in Figma (see SYNC-15). **Remaining:** (a) place a Mosaic gallery on the Event Detail page frame (Phase C); (b) ~~Member/Public price → `Card · Event` master~~ **DONE 2026-06-29** (added to `Card · Event` Upcoming `57:19` with SYNC-18 — card-size PricePoints on every event card); (c) sidebar PricePoints (detail size) on the Event Detail page frame (Phase C).

**Local change (done):** `pages-b.jsx` Event Detail now includes an **Image Gallery block (mosaic)** between the detail section and "Other Events". Event Image field annotation updated to reflect Desktop/Mobile/Thumbnail + campaign artwork.

**Target in Figma:** Event Detail — node `95:1493` ("6.11 · Event Detail", verified).

**Changes to apply:**
1. **Additional blocks (item 3):** add an **Image Gallery block** instance (Mosaic variant) below the event detail section — shows the page (Hybrid) carries drag-in blocks.
2. **Header image (item 1) — mostly already supported:** Event hero supports **Desktop / Mobile** sizes + **predesigned campaign artwork** (schema-verified). Only open question is a dedicated **tablet** size (see SCHEMA-16) — no Figma change needed unless the client wants tablet.
3. **Price (item 2):** add **Member / Public price points** in two places — the Event Detail **sidebar** (large, with the dynamic/TractionRec tag) **and on the Event card** (`Card · Event`, compact two-column, no label) across Events Root (6.10), Event Detail "Other Events", and Tag Detail (6.9) feed. Same shared `PricePoints` style. Demo values: Members Free / Public $5 (events vary; some Free/Free, some ticketed).

**Notes:**
- Same `ImageGallery` block as Class Detail (SYNC-15) — instance it, don't rebuild.
- **`PricePoints`** is the shared Member/Public price style with **two sizes** — `detail` (sidebar: Class Detail SYNC-13 + Event Detail) and `card` (compact: Event card). Build/style it once in Figma with both sizes.
- The **Event card** (`Card · Event`) gains the compact price; it reads `[events]` Member/Public price (SCHEMA-16), so every event-card surface inherits it.
- Mobile not changed.

---

## ☑ SYNC-17 — PAGE-8: Contact Us (6.12) — hours link · footer · team heading — **PUSHED 2026-06-30**

**Pushed to Figma** (Contact Us `96:1606`): (1) added a **"View all hours →"** link beneath Center Hours in the Visit Us sidebar (`96:1659`); (2) **removed the cross-link card** (`96:1748`) and added the standard **`Footer · Connect With Us` instance** (`483:5743`) — the page previously had no footer; (3) relabeled the People block heading **"Meet the Team" → "Meet The Kroc Center Team."** (`96:1684`).

**Local change (done):** `pages-b.jsx` Contact Us — added a **"View all hours"** link in the sidebar; **replaced the cross-link card with the standard `Connect` footer**; relabeled the People block heading to **"Meet The Kroc Center Team."**

**Target in Figma:** Contact Us — node `96:1606` ("6.12 · Contact Us", verified). Footer = `Footer · Connect With Us` master.

**Changes to apply:**
1. **Item 1 — View all hours:** add a **"View all hours >"** link beneath Center Hours in the Visit Us sidebar (`96:1664/1665` area).
2. **Item 2 — Social Media links = the page is missing its footer.** The Contact frame has **no `Footer · Connect With Us` instance** (it ends with the `cross-link` card `96:1748`). **Add the standard Connect footer** (carries the social icons) like every other page, and remove the cross-link card. *(The "Social media" radio in the form's "How did you hear about us?" is unrelated — a separate, already-designed field.)*
3. **Item 3 — Meet The Kroc Center Team:** the page already has a `Block · People` (`96:1684`); just set its heading to **"Meet The Kroc Center Team."**

**Notes:**
- Pins for items 2–3 sit mid-form because the page was redesigned after the 6/22 comments (positional pins drift) — the real targets are the footer + the People block.
- Footer social links come from `[kroc_location]` (global) — see SCHEMA-17.
- Mobile not changed.

---

## ◑ SYNC-18 — HOME-2: Featured Events block (7.17) + Event card short description — **block CREATED in Figma 2026-06-29**

**Pushed to Figma (component):** created **`Block · Featured Events` (`390:478`)** on the Components page `10:3` — cloned from `Block · Featured Classes` (62:61), header relabeled to *Featured Events / View All Events ↗*, trimmed to a 3-up row, and the 3 cards swapped to **`Card · Event` (Upcoming)**. (Placed in the desktop column at the bottom of the page — may be repositioned into the Featured-blocks cluster.)
**Event card master edits DONE (2026-06-29):** added a short **description** + **Member/Public price** (Members Free / Public $5) to the `Card · Event` **Upcoming** master `57:19` (body order: title → date → description → address → price → CTA). Propagates to the Featured Events block + every event-card surface. *(Past variant left clean — past events omit price.)* **Homepage placement DONE (2026-06-30):** **Featured Classes** (instance, 2nd row hidden → 3-up) + **Featured Events** placed on the homepage (`30:2`) between the hero and the map. Cards reflect the SYNC-13 dates + Member/Public.

**Local change (done):** new block **`B_FeaturedEvents` (7.17)** in `blocks.jsx` (registered in the library TOC + render list); `shared.jsx` `EventCard` gained a **short description** (`desc`) rendered above the address.

**Target in Figma:** Blocks/Components — add a **Featured Events** block beside **Featured Classes (7.7)**; update the **`Card · Event`** master to include the short description line.

**Changes to apply:**
1. **Featured Events block (7.17):** same layout as Featured Classes — heading + "View All Events" link, 3-up grid of Event cards. Build it as the **Events counterpart** of Featured Classes (the homepage "Featured Classes and Events" = the two paired).
2. **Event card short description:** add a 1–2 line **description** to the `Card · Event` master (title → date → description → location → Member/Public price → CTA). Inherits everywhere the card is used.
3. **Custom card option:** note the block also supports a manually-authored custom card (no separate Figma variant required unless desired).

**Notes:**
- Reuses the shared `EventCard` — don't rebuild; just add the description line to the master.
- **Homepage placement (done in prototype):** Featured Classes + Featured Events sit on the homepage **before the map/"Find a center" block** (right after the hero). Mirror this on the Figma homepage `30:2`.
- Hawaii/CDA example review: **skipped** per client.
- Mobile not changed.

---

## ☑ SYNC-19 — HOME-3: Quick Links (Featured Pages) on the homepage — **PUSHED 2026-06-30**

> **DONE (2026-06-30):** placed a **6-up Quick Links row** under the hero on `30:2` — cards-only, no heading — matching the local prototype with **6 distinct placeholder glyphs**: Membership (users) · Day Passes (ticket) · Classes (dumbbell) · Events (cal) · Rentals (music) · Church (heart). *(First attempt used the Compact-card instance, which shares one baked glyph → all 6 looked identical; rebuilt as compact-style cards with per-card glyphs to match local. When the client icon library lands, these become INSTANCE_SWAP on the Card · Page Compact + the row re-instanced.)* History below kept for context.

**Local change (done):** extracted a shared **`FeaturedPageCard`** in `shared.jsx`; refactored **Featured Pages (7.9)** to use it; placed the Quick Links row on the homepage **directly under the hero** — *originally* a 4-up full "Get Started" row, **now the 6-up Compact variant** (SYNC-27).

**Target in Figma:** homepage `30:2` — add a **Featured Pages "Get Started" instance** under the hero (comment pin 40,659). It's the **existing Featured Pages block** (SYNC-9 / `66:137`), not a new component — instance it here.

**Changes to apply:**
1. Place the Featured Pages block (4-up icon/image cards) **below the hero** as the Quick Links row.
2. Heading "Get Started" (Block Title is editable — could be "Quick Links" if the client prefers).
3. Cards reuse the **`FeaturedPageCard`** (icon-or-image media, BLK-5 / SYNC-9) — same master.

**Notes:**
- No new block/schema — `[featured_pages]` already exists (SCHEMA-9). This is placement + a small reuse refactor.
- Homepage section order under the hero: **Quick Links (Compact, 6-up) → Featured Classes → Featured Events → map**.
- Mobile not changed.

---

## ◑ SYNC-20 — HOME-4: Map block (reusable) + apex-only homepage placement — **component CREATED 2026-06-29**

**Pushed to Figma (component):** created **`Block · Map` (`412:527`)** on the Components page `10:3` — a variant set with **Variant = Locator | Single**. *Locator* = white card, copy + City/ZIP search + Find Center, with a multi-pin map (apex). *Single* = Visit Us + address + Get Directions + one-pin map (instance / About Us NEW-3). **Pending = placement** (Phase C): homepage uses Locator (apex-only); About Us uses Single.

**Local change (done):** extracted the homepage "Find a center" section into a reusable **`MapBlock`** (`shared.jsx`) with **Locator** (apex) + **Single** (instance) variants; homepage now renders the Locator variant (annotated apex-only); added library block **7.18 Map Block** (`[map_block]`).

**Target in Figma:** homepage `30:2` "Find a center" section → make it a **Map Block** component with two variants; the apex homepage uses Locator.

**Changes to apply:**
1. Componentize the "Find a center" map as **Map Block** with a **Variant** (Locator / Single).
2. **Locator** = current multi-center finder (City/ZIP + Find Center + multi-pin map). **Single** = one location (address + Get Directions + single pin) for instance **About Us (NEW-3)**.
3. Mark the homepage Map Block **apex-only** (on instances it's omitted on the homepage and placed on About Us). Conditionality = SCHEMA-12.

**Notes:**
- **About Us (NEW-3) is now built (→ SYNC-23)** and places the **Single** `MapBlock` ("Visit Us") — the instance-side home for the relocated map. Push the Single variant as part of that frame.
- Reuse: one `MapBlock`; don't rebuild per page.
- Mobile not changed.

---

# New Pages — net-new frames (6.15–6.20)

> SYNC-1…20 above are **edits to existing Figma nodes**. SYNC-21…26 below are **net-new frames to create in Figma** — these pages don't exist there yet. The design AI built them in `KROC prototype/pages-new.jsx` (NEW-1…NEW-6); Donate (NEW-7) is link-only (no frame).
> All 6 are built on the **existing component kit** (`shared.jsx`) + a few page-local helpers (`Wrap`, `SectionHead`, `Band`, `Field`, `TierCard`, `PersonCard`, `CheckList`). At sync, **instance the existing master components** (Header, Connect footer, FacilityCard, IntroBand, DonationBlock, FeaturedPageCard, PersonCard/People block, MapBlock, FaqList) rather than redrawing them. **Schema is extracted later in one pass** (see schema-sync-queue.md) — these entries are the visual push only.

---

## ☑ SYNC-21 — NEW-1: Membership page (6.15) — net-new frame — **PUSHED 2026-06-30**

**Pushed to Figma:** new frame **`6.15 · Membership` (`445:2732`)** on Pages — Desktop (`10:4`, x=20920). Page = 1280 gray (`surface/page`) vertical frame → `body` (16px side padding → 1248 content) with: **Header** instance (`24:4`) · cloned/edited **hero** (eyebrow "JOIN THE KROC" + "Become a Kroc Member" + Sign Up Today / View Member Benefits) · **6-up compact quick-nav** (bespoke distinct glyphs: heart/star/dumbbell/users/info/lock) · **Benefits band** (navy, 2-col 8-item white checklist + Purchase a Membership Online / View our Program Guide) · **Discounts, Assistance & Holds** FAQ accordion instance (`67:161`, 4 items, first open) · **Tiers** SectionHead + **9 `Card · Membership` instances** (`424:531`, 3-up) + Joiner's-Fee footnote · **Family Play Pass** white card (eyebrow + title + intro + 2-col green checklist + 3-col comparison table + accent line + Purchase CTA) · **PlayCare band** (navy copy + drop-in rates panel) · **Member story** (photo-left + quote) · **Hold/Cancel form** (left intro + About-Holds box / right form card with `Input · Field` instances + Submit) · **Policies band** (navy, 3 CTAs) · **Connect footer** (`28:8`). Heroes/Header/Connect/FAQ/Card·Membership/Buttons/Inputs are all instances or clones; bands/tables/forms built to match local. *Header active-state shows the master default ("Home") — per-page active highlight is an unparameterized instance state, deferred.*

**Local change (done):** `KROC prototype/pages-new.jsx` `Page_Membership` (migrated from the San Diego Kroc membership page).

**Target in Figma:** **new frame** "6.15 · Membership" (`/membership/`). Reuse: Header, Connect footer, FaqList, IntroBand/Facility band patterns.

**Composition to build:**
1. Hero (3:1, photo) + Sign Up / View Benefits CTAs.
2. 6-up **quick-nav** anchor row (Benefits · PlayCare · Center Features · Member Stories · Financial Assistance · Policies).
3. **Benefits band** — navy, 2-column checklist of included benefits + CTAs.
4. **Discounts, Assistance & Holds** — accordion (instance of the FAQ/accordion block).
5. **Membership Tiers** — 9 rate cards (Teen→2 Adult Family Play) + Joiner's-Fee footnote.
6. **Family Play Pass** comparison table (Standard vs. Family Play).
7. **PlayCare band** — navy + daily drop-in rate panel.
8. **Member story** quote (photo-left).
9. **Hold / Cancel form** (intro + form card).
10. **Policies band** (navy, 3 CTAs).

**Notes:** the 6-up **section jump-nav** (step 2) is the **Compact Featured Pages variant** (`FeaturedPageCard variant="compact"`) — same component as the homepage Quick Links; build it as an instance (see **SYNC-27**). Rate cards + comparison table → formalize via **BLK-9** at the block pass. Member/Public split (PAGE-2 `PricePoints`) may apply to tiers. Mobile not built.

---

## ☑ SYNC-22 — NEW-2: Day Pass page (6.16) — net-new frame — **PUSHED 2026-06-30**

**Pushed to Figma:** new frame **`6.16 · Day Pass` (`439:2623`)** on `10:4` (x=22400). Header instance · **centered** cloned hero ("Kroc Day Passes" + "Spend the day with us — no membership required.", no CTAs) · **green intro/access band** (`status/success`, title + 3 paragraphs + Hours of Operation / Facility Policies CTAs) · **2-up price cards** (centered max 960) = **`Card · Day Pass` instances** (`424:4492`); 2nd edited to **Youth $15 / Ages 3–11** · **membership callout** = shared **`Block · Intro Band` Photo** instance (`407:507`) with CTA relabeled to single "Learn More" (secondary hidden) to match local · **Connect footer**.

**Local change (done):** `Page_DayPass` (migrated from the San Diego Kroc Day Pass page).

**Target in Figma:** **new frame** "6.16 · Day Pass" (`/day-pass/`).

**Composition to build:**
1. Centered hero (3:1).
2. **Intro/access band** (green/success) — what's included + Hours / Policies CTAs.
3. **Pass pricing** — Youth $15 / Adult $30 price cards (2-up, max 960).
4. **Membership callout** — **the same `IntroBand` (photo variant)** used on the homepage (HOME-6 / SYNC-5 / BLK-1). Instance it; don't redraw.

**Notes:** day-pass price card ties to **BLK-9**. The membership callout must be the shared Intro Band component. Mobile not built.

---

## ☑ SYNC-23 — NEW-3: About Us page (6.17) — net-new frame — **PUSHED 2026-06-30**

**Pushed to Figma:** new frame **`6.17 · About Us` (`457:2920`)** on `10:4` (x=23880). Header · dark hero (eyebrow "ABOUT US" + "The Salvation Army Kroc Center" + leadership subhead, no CTAs) · **Our Vision** (photo-left card + 6-item red-check vision list) · **Our Impact** (dark stat card "18%" + narrative white card with Donate + placeholder social glyphs) · **Explore links** = **3-up `Card · Page` Icon instances** (`397:502`, Our History / Service Areas / Who We Are) · **Leadership** = **3-up `Card · Person` instances** (`60:22`, contact rows hidden, name/role/bio set) · **Visit Us** = **`Block · Map` Single instance** (`412:507` — default content already matched local verbatim) · **Mission band** = **`Block · Donation` instance** (`25:6`) retitled "Our Mission" + Salvation Army statement + Donate Now / Volunteer With Us · **Connect footer**. *Explore-link icons share the master's placeholder glyph (identical) pending the icon-library refresh.*

**Local change (done):** `Page_AboutUs` (migrated from the Salvation Army So-Cal About page).

**Target in Figma:** **new frame** "6.17 · About Us" (`/about-us/`). This is the **instance home of the relocated map** (HOME-4 / SYNC-20).

**Composition to build:**
1. Hero (3:1, dark).
2. **Our Vision** — photo-left + red-check list.
3. **Our Impact** — stat card (image + overlay) + narrative card with Donate CTA + socials.
4. **Explore links** — 3-up **Featured Pages** (icon variant, SYNC-9 master).
5. **Leadership** — 3-up **People block** bio cards (BLK-3 / SYNC-7 `PersonCard`).
6. **Visit Us** — **`MapBlock` Single variant** (address + Get Directions + single pin) — instance the Map Block master (SYNC-20).
7. **Mission band** — **DonationBlock** (red) with the Salvation Army Mission statement (NAV-4 copy).

**Notes:** every section is an instance of an existing master (Featured Pages, People block, Map Block, Donation Block, Connect). Mobile not built.

---

## ☑ SYNC-24 — NEW-4: Rentals page (6.18) — net-new frame — **PUSHED 2026-06-30**

**Pushed to Figma:** new frame **`6.18 · Rentals` (`462:3079`)** on `10:4` (x=25360). Header · centered dark **"Save the Arts" hero** (gold "SAVE THE ARTS" eyebrow + "Take a Seat" + custom gold "Take a Seat Today" CTA) · **section tabs** (6 `Pill` instances, Theatre active) + **quick-action buttons** (Book an Event / Request a Quote / Rates & Specs) + **intro card** · **Theatre** = **`Block · Facility Section` Rental instance** (`420:530`, retitled, body, 4 pills, Book the Theatre, hours hidden) · **Rates & Specs** FAQ accordion instance (`67:161`, 4 items) · **Corner Zone** = **Facility Photo-right Open instance** (`79:218`, no-hours, 4 pills, Learn More) · **Interest Form** (SectionHead + form card with 8 two-col `Input · Field` + 2 full + textarea + Submit) · **Theatre Director band** + **Policies band** (navy) · **Connect footer**. ⚠️ **Component caps hit:** FacilityCard pills frame holds **4** slots (Theatre 5→4, Corner Zone 7→4 — extras dropped, mentioned in body) and the FAQ accordion holds **4** rows (Rates & Specs 5→4, "Rent an Education Space" dropped). Recommend extending those masters to N items as a component-library follow-up.

**Local change (done):** `Page_Rentals` (migrated from the San Diego Kroc Rentals page).

**Target in Figma:** **new frame** "6.18 · Rentals" (`/rentals/`). Heavy reuse of **FacilityCard** (BLK-7 / SYNC-10).

**Composition to build:**
1. "Save the Arts" hero (dark, art-deco) + Take a Seat CTA.
2. Section tabs (Theatre · Event Spaces · Corner Zone · Interest Form · Resources · Policy) + quick-action buttons + intro card.
3. **Joan B. Kroc Theatre** — `FacilityCard` (photo carousel, pills, CTA, **no hours**).
4. **Event Spaces — Rates & Specs** — accordion (FaqList).
5. **Corner Zone** — `FacilityCard` (photo-right, pills, **no hours**).
6. **Facility Rental Interest Form** (custom form).
7. Theatre Director band + Policies band.

**Notes:** uses the **FacilityCard no-hours variant** the BLK-7 comment asked for. Booking = **interest form** (OQ-4 leans inquiry-form; confirm). Mobile not built.

---

## ☑ SYNC-25 — NEW-5: Church page (6.19) — net-new frame — **PUSHED 2026-06-30**

**Pushed to Figma:** new frame **`6.19 · Kroc Church` (`464:5375`)** on `10:4` (x=26840). Header · hero ("KROC CHURCH" + "Come as you are. Belong here." + subhead) · **Welcome** centered lede · **Sunday Worship** = **`Block · Facility Section` Open instance** (`69:161`) with hours edited (Breakfast Church · Sundays 9:00 AM / Sunday School · Sundays 10:30–11:30 AM, 3rd row hidden), pills hidden, Plan Your Visit · **Meet the Kroc Church Team** = 2-up **`Card · Person` instances** (`60:22`) with bio + phone + email · **Connect links** (colored link buttons: red/navy 2-up + 3 navy-150 3-up) · **Weekly Ministries** list (5 rows) + **Prayer Request** navy card (7fr/5fr) · **K.R.O.C. Kids** card (troop `Pill` instances + 2 award boxes) · **Music + Praise / Women's Auxiliary** 2-up cards · **Connect footer**.

**Local change (done):** `Page_Church` (migrated from the Quincy Kroc Church page).

**Target in Figma:** **new frame** "6.19 · Kroc Church" (`/church/`).

**Composition to build:**
1. Hero (3:1).
2. **Welcome** (centered lede).
3. **Sunday Worship** — `FacilityCard` **with hours** (Breakfast Church / Sunday School).
4. **Meet the Kroc Church Team** — 2-up People-block bio cards (phone + email).
5. **Connect links** — colored link buttons (Facebook, ministry groups, age groups).
6. **Weekly Ministries** list + **Prayer Request** card (navy).
7. **K.R.O.C. Kids** — troops + award ceremonies.
8. **Music + Praise / Women's Auxiliary** (2-up cards).

**Notes:** content is generic placeholder (OQ-5 scope). Service times reuse FacilityCard; team reuses People block. Mobile not built.

---

## ☑ SYNC-26 — NEW-6: Careers page (6.20) — net-new frame — **PUSHED 2026-06-30**

**Pushed to Figma:** new frame **`6.20 · Careers` (`468:3423`)** on `10:4` (x=28320). No hero (per local). Header · **5-up circular headshot** placeholder row · centered **"Join our Team!"** intro · **Why work with us?** 3 value cards (red-tint icon chip + heading + body) · **Our Benefits** card (2-col green checklist) · **Open Positions band** (navy, centered) · **Job Listings** 3 department cards (dept + location + red role links) · **How to Apply / Text-to-Apply** row (7fr white card / 5fr red "Text SALVATION ARMY to 22633") · **Join us in making a difference!** red band + View All Openings · **Questions?** 2 HR contact cards (circular photo + name/role/email) · **Connect footer**. *Bespoke department/role layout (not the Volunteer-block reuse BLK-10 floated) — reconcile at the schema pass.*

**Local change (done):** `Page_Careers` (migrated from the Quincy Kroc Careers page).

**Target in Figma:** **new frame** "6.20 · Careers" (`/careers/`).

**Composition to build:**
1. Team headshot row (5-up circular).
2. "Join our Team!" intro (centered).
3. **Why work with us** — 3 value cards (icon + heading + body).
4. **Our Benefits** — 2-column checklist.
5. **Open Positions** band (navy).
6. **Job listings** — 3 department cards → role links; **How to Apply** + **Text-to-Apply** (red) cards.
7. "Join us in making a difference!" CTA band (red).
8. **Questions / HR contacts** — 2 contact cards.

**Notes:** ⚠️ built with a **bespoke department/role-listing layout**, *not* the reused Volunteer blocks BLK-10 item 2 proposed — reconcile at the block/schema pass. Mobile not built.

---

## ☑ SYNC-27 — Featured Pages: **Compact (Quick Links)** card variant — **PUSHED 2026-06-29**

**Pushed to Figma:** added **Style=Compact** to the `Card · Page` variant set (`399:503`) — white card, red-tinted circular icon chip + centered label (homepage Quick Links + Membership section jump-nav use this). Icon is a placeholder pending the icon-library refresh.

---

## ☑ SYNC-28 — BLK-9: Membership & Day Pass cards — **PUSHED 2026-06-30**

**Pushed to Figma:** created two card components in the **Cards** section (Components page `10:3`), beside `Card · Category`, built to **match the local prototype**:
- **`Card · Membership` (`424:531`)** = the local `TierCard` — compact row: name + age range (left) / rate `/mo` (right, navy); no button/eyebrow.
- **`Card · Day Pass` (`424:4492`)** = the local Day Pass pricing card — centered: **Adult** (semibold) Day Pass, `$30` at 64px navy, Ages 12+, centered red **Purchase a Day Pass** (btn-lg).

Single rate each (memberships/passes aren't Member/Public — that model is for classes/events). `.kroc-card` chrome (white, radius 20). Feed the NEW-1/NEW-2 page instances (Phase C placement).


**Local change (done):** added a **`variant="compact"`** to the shared **`FeaturedPageCard`** (`shared.jsx`) — a quick-link card (red-tinted circular icon chip + label, whole card clickable; icon + title only, no body/CTA). Applied in two places: the **homepage Quick Links** bar (`pages-a.jsx`, replacing the full "Get Started" cards) and the **Membership section jump-nav** (`pages-new.jsx`). Block **7.9 Featured Pages** now demos both styles.

**Target in Figma:** the Featured Pages block / `Card · Featured Page` master (node `66:137`, BLK-5 / SYNC-9). Add a **Card Style** variant: **Full** (existing icon/image panel + body + CTA) and **Compact** (icon chip + label).

**Changes to apply:**
1. **New Compact variant** of the Featured Page card: white card (radius 16), centered **red-tinted circular icon chip** (~42px, `#FFEBEB` bg + red icon) above a short label (~12.5px). No body, no CTA button — the whole card is the link. Footprint is uniform so chips tile in a tight grid.
2. **Homepage Quick Links (HOME-3 / SYNC-19) → switch to Compact:** replace the 4-up full "Get Started" promo cards with a **6-up Compact** quick-links bar under the hero — Membership · Day Passes · Classes · Events · Rentals · Church. **No section heading** (cards-only, per client) — the chip labels carry the meaning. *(This supersedes SYNC-19's full-card placement + "Get Started" heading.)*
3. **Membership page (NEW-1 / SYNC-21):** the 6-up section jump-nav (Member Benefits · PlayCare · Center Features · Member Stories · Financial Assistance · Policies) is the **same Compact variant** — build it as an instance, not bespoke.

**Notes:**
- Schema: adds a **Card Style (Full | Compact)** option to `[featured_pages]` — see SCHEMA-9 (extended).
- Compact has **no CTA/body**; on Full those remain. Same master, two variants — don't make a separate component.
- Icons are placeholder from the local set (pending the **icon-library refresh**); the homepage Rentals/Church chips especially are approximations.
- Mobile not changed.

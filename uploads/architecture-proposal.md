# Kroc Centers Information Architecture Proposal

## Summary

After reviewing discovery calls across the Central, Eastern, Southern, and Western territories, it is clear that Kroc Center websites require an architecture that balances a unified national framework with hyper-local flexibility. The current websites suffer from navigation overload, manual data entry redundancy, and fragmented third-party integrations. To address these challenges, this proposed Zesty.io content architecture normalizes data structures while accommodating the specific programmatic, integration, and aesthetic needs of individual centers.

---

## Legend

| Type | Description |
|---|---|
| 🗄️ **Instance** | A physical Kroc Center location that serves as a website/content repository, containing unique data points like facility info, hours, and integration IDs. |
| 💿 **Dataset** | Structured content that isn't tied to a specific URL/page, used for reusable data like site-wide alert banners. |
| 📄 **Single Page** | A standalone, one-of-a-kind page (e.g., the All Stories landing page or All Tags page) that autogenerates content feeds. |
| 📁 **Pageset** | A collection of pages built from the same template, where each entry generates its own URL (e.g., individual stories, programs, informational pages, tags). |
| 🧊 **Block** | Reusable design/content components that can be placed within pages via drag-and-drop, such as FAQs, galleries, forms, navigation, and featured content modules. |

---

## Part 1: Global Commonalities & Shared Requirements

Across all four territories, several universal themes emerged that must dictate the new website architecture:

- **Third-Party System Integrations:** Eliminating double-entry is a top priority. Sites rely heavily on external systems for memberships, class registrations, and payments—primarily **TractionRec** (East, South, West) and **Club Automation** (Central). The architecture must dynamically pull pricing, programs, and direct registration links via API to prevent content redundancy.
- **Content Automation & Scheduling:** Kroc Centers desperately need the ability to automate content. Components like site alerts, seasonal events (e.g., Camp Kroc registration), and promotional banners require **automated start and end dates** to publish and archive without manual intervention.
- **Mobile-First & Persistent Alerts:** Mobile traffic is incredibly high (up to 75% in the South and 80% in the East). Current mobile alert banners are highly intrusive, blocking the entire screen and failing to persist as users navigate. A redesigned, schedulable emergency alert system is universally required.
- **Navigation & User Experience:** Navigation menus are suffering from overload, especially with seasonal links. Furthermore, users often fail to realize that top-level parent menu items are clickable pages. A streamlined, consistent navigation model is required.
- **Unified Form Management:** Centers use a highly fragmented array of form tools (Wufoo, Adobe Sign, Triple Seat, MS Forms, PartyWorks) for facility rentals, parties, and volunteer intake. A nationwide push to normalize this using **Feathery**, which routes submissions based on zip codes, is highly desired.
- **Global Custom Iconography:** Current icon sets (like Font Awesome) are limiting. The architecture must support a globally accessible, custom Kroc-branded icon library to better represent diverse departments.

---

## Part 2: Territory-Specific Configurations

### Central Territory

- **Deep Visual Customization:** They require visual flexibility on the backend to adjust the layout and colors of widgets to match the specific "voice" of their individual centers.
- **Core Systems:** Relies entirely on Club Automation for memberships and payments, and uses Triple Seat internally for rentals.
- **Blog as Aggregator:** Centers like Grand Rapids uniquely utilize their blog as an aggregated events, news, and promotional feed on their homepage.

### Eastern Territory

- **Calendar Confusion:** Members are confused by the use of two separate calendar systems side-by-side: **UPace** for unpaid drop-in classes and **TractionRec** for paid classes.
- **Registration Deep-Links:** To ease the user journey, centers like Philadelphia create direct "deep links" to specific TractionRec swim classes, bypassing the confusing main login screen.

### Southern Territory

- **Content Control via Embeds:** Coordinators heavily rely on **Canva embeds** for free class schedules and homeschool programs because it allows them to easily update the website and in-house monitors simultaneously.
- **Complex Facility Hours:** They struggle with communicating confusing Sunday hours, where the facility is closed for recreation but open for Church.
- **Tourism & Security:** They see high tourism traffic utilizing homepage map components. They also uniquely require **password-protected pages** for specific athletics and arts teams.

### Western Territory

- **Modern Visual Strategy:** They want to eliminate ineffective rotating image sliders in favor of static, stacked layouts with video elements (like drone footage) and quick-action cards.
- **Dynamic Program Feeds:** Their "Programs" landing page is currently ineffective. They want to replace it with a dynamic page that automatically embeds all purchasable programs directly from TractionRec.

---

## Part 3: Proposed Zesty.io Content Architecture

Below are the proposed Content Models (Schemas) tailored to Kroc Centers, using Zesty.io's system of Content Models and Fields.

### Primary Content Model

Model that will be attached to every instance (Kroc Locations) that are non-negotiables. This will create consistency and allow for integration to other digital assets in and outside of Kroc.

### Optional Content Models

These models will be installed on a needs-basis, for example, pools, church, ice rink, specific integration pages.

### Blocks

Any specific page needed design / content elements that may or may not include integrations. This will be listed out not specifically content designed. Blocks are not noun to what is written in this document and can be added on a need-by-need basis.

---

## Content Template Types

Each content model will be specifically controlled from a design perspective, each will have a specific configuration to create the most efficient and on-brand experience while granting flexibility where needed to the marketing/content teams.

| Template Type | How it Works | Examples |
|---|---|---|
| **Fixed** | Input Based Editing Controlled of structured content | Articles, Programs, Events |
| **Freestyle Drag n' Drop** | Iterative free form design layout with blocks and components | Landing pages |
| **Hybrid** | Fixed template areas with open freestyle layout areas | About page, Services |
| **Automated** | Page builds itself based on dynamically changing content, instructions and rules | Homepage, News Page, Tags Page, Categories |
| **Manual Component** | Input based editing controlled by structured content | Alert Banner, Navigation |
| **Automated Component** | Component refreshes itself based on external content editing | Footer, Latest Articles, Category list |

### Visual Example

> Need to add coverage for footer as an automated component (maybe hybrid), or it reads from the navigation and automates the rest.

---

## Detailed Descriptions

### 🗄️ Kroc Location `[instance/website/content repository]`

Represents a physical Kroc Center location. This model handles the unique data points that dictate the site's footer, mapping, and complex hours (like Sunday church vs. recreation hours).

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Instance | **SEO Values** | True |
| **Layout Level** | National | **Audience** | N/A |
| **Parent** | N/A | **Data Layer** | N/A |
| **Existing Example** | Not Available | | |

**Global Settings**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Facility Name | Text | ✅ | |
| TractionRec / ClubAuto ID | Toggle | ✅ | |
| General Hours | Text | ✅ | |

---

### 💿 Global Site Alert/Banner `[site_alert]`

Emergency or promotional banners that appear across the site. Designed to solve the Eastern territory's mobile blocking issue and the Western territory's need for automated emergency closures. The banner will persist on scroll.

**Behaviors**

| | | | |
|---|---|---|---|
| **Content Type** | Dataset | **SEO Values** | False |
| **Template Type** | Fixed | **Audience** | |
| **Parent** | None | **Data Layer** | ? |
| **Existing Example** | Not Available | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Banner Name | Text | ✅ | E.g. November Closure |
| Alert Text | Rich Text | ✅ | E.g. Our pool will be closed this Saturday 9-2pm. |
| Button Text | Text | ❌ | Learn More |
| Button Link | Text | ❌ | https//:google.com |
| Background Color | Dropdown | ❌ | Selection of branded dropdown colors |

---

### 📄 All Programs `[all_programs]`

`/:programs/`

Autogenerated page with feed of all programs and classes grouped by category.

**Behaviors**

| | | | |
|---|---|---|---|
| **Content Type** | Pageset | **SEO Values** | True |
| **Template Type** | Hybrid | **Audience** | |
| **Parent** | None | **Data Layer** | ? |
| **Existing Example** | Not Available | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Header Title | Text | ✅ | E.g. Swim Lessons |
| Subheader | Text | ✅ | E.g., Aquatics, Fitness, Arts. |

---

### 📁 Program Categories `[programs_categories]`

`/:programs/page_slug`

Designed to group classes by category for automated feeds and url structures.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Pageset | **SEO Values** | True |
| **Template Type** | Fixed | **Audience** | |
| **Parent** | None | **Data Layer** | ? |
| **Existing Example** | Not Available | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Category Name | Text | ✅ | E.g. Swim Lessons |
| Program Type | Dropdown | ✅ | Continuous, Drop-In |
| Dynamic Price | Remote API | ❌ | |
| Deep Link URL | URL | ❌ | Direct URL path part to bypass main CRM login screens. (i.e: TractionRec) |
| Icon | Remote API | ❌ | Select from the new custom global Kroc icon library. |

---

### 📁 Classes `[classes]`

`/:programs/:category/page_slug`

Individual classes (roster + drop-ins) to be grouped by categories and displayed on All Programs landing pages as well as automated classes modules.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Pageset | **SEO Values** | True |
| **Template Type** | Hybrid | **Audience** | |
| **Parent** | None | **Data Layer** | ? |
| **Existing Example** | Not Available | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Class Name | Text | ✅ | E.g. Swim Lessons |
| Program Category | Relational | ✅ | E.g., Aquatics, Fitness, Arts. |
| Description * | Remote API/Text | ❌ | TBD if we can fetch dynamically from external platform |
| Class Type | Dropdown | ✅ | Roster, Drop-In |
| Dynamic Price | Remote API | ❌ | |
| Deep Link URL | URL | ❌ | Direct URL path part to bypass main CRM login screens. (i.e: TractionRec) |
| Icon | Remote API | ❌ | Select from the new custom global Kroc icon library. |
| Program Schedule * | Repeater Field | ❌ | Recurring times for program/class (text field). TBD in case we can fetch this from external class platform (ie TractionRec) |

---

### 📁 Informational Pages `[informational_pages]`

`/:page_slug/`

A specialized informational page for custom content such as specific programs.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Pageset | **SEO Values** | True |
| **Template Type** | Freestyle | **Audience** | |
| **Parent** | None | **Data Layer** | ? |
| **Existing Example** | Not Available | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Page Name | Text | ✅ | E.g. Kroc Greenville Travel Team |
| Page Content | WYSIWYG | ✅ | |
| Access Password | Text | ❌ | Optional value for password protection |

---

### 📄 All Stories `[all_stories]`

`/:stories/`

Autogenerated landing page with feed of all stories for this location.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Single Page | **SEO Values** | True |
| **Template Type** | Hybrid | **Audience** | All |
| **Url Parent** | Blog | **Data Layer** | ? |
| **Discovery** | Promotion, News Room Pages, Search and Web Browser | **Traffic Estimate** | High |
| **Existing Example** | | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Header Title | Text | ✅ | |
| Subheader | Text Area | ✅ | |

---

### 📁 Stories `[stories]`

`/:stories/:page_url/` e.g. `/stories/connect-families-in-san-diego/`

Need option to not show any related data. Donation forms associated with locals. Local, Donation Links override for "campaigns". Note the west has https://caringmagazine.org, John Doctor wanted to known.

- Need to account for external articles (use canonical)
- SEO data is automatically created for users and editable by all users.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Pageset | **SEO Values** | True |
| **Template Type** | Fixed | **Audience** | All |
| **Url Parent** | Blog | **Data Layer** | ? |
| **Discovery** | Promotion, News Room Pages, Search and Web Browser | **Traffic Estimate** | High |
| **Existing Example** | | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Title | Text | ✅ | |
| Story Image | Media | ✅ | |
| Story Date | Datetime | ✅ | |
| Story Body | Rich Text Editor (WYSIWYG) | ✅ | Need a "button" option that will create a link style as a button. |
| Donation Override / Link | Text | ❌ | Custom donation link to override instance link |
| Article Tag | Integration Field | ✅ | 📁Tags/Categories, article tags, integrated with National. This will allow for content to be fed to/from national |
| Hashtag | Repeater | ❌ | For granular edits from the individual center |
| Related Event | Relational | ❌ | 📁 Events. Option to connect the story to an event |
| Related Program Category | Relational | ✅ | 📁Program Categories option to connect story to pageset |
| External Article | URL | ❌ | Default: the user lands on the article internal url then given the option to click to view the external article and navigate to that link |

---

### 📄 All Tags (Stories/Events) `[all_tags]`

`/:tags/`

Autogenerated page for each tag pulling stories and events related to the tag.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Single Page | **SEO Values** | ✅ |
| **Template Type** | Hybrid | **Audience** | Donors |
| **Url Parent** | Root | **Data Layer** | |
| **Discovery** | Story Pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Name | Text | ✅ | |
| Description | Rich Text | ✅ | |

---

### 📁 Tags (Stories/Events) `[tags]`

`/:tags/:tag_url/`

Tags are pages used to group stories and events determined by USA team. These content types can be granular like "toddler swim" or high level like "news".

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Pageset | **SEO Values** | ✅ |
| **Template Type** | Automated | **Audience** | Donors |
| **Url Parent** | Root | **Data Layer** | |
| **Discovery** | Story Pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Name | Text | ✅ | |
| Description | Rich Text | ✅ | |
| Position | Sort Order | ✅ | |

---

### 🧊 FAQs `[faqs]`

Frequently Asked questions at the national level.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Block Name | Text | | |
| *Repeater Fields:* | | | |
| Question | Open Text | ✅ | |
| Answer | Media | ✅ | |

---

### 🧊 External Embed `[external_embed]`

Frequently Asked questions at the national level.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Block Name | Text | ✅ | |
| Embed Type | Dropdown | ✅ | TikTok, YouTube, Instagram, Facebook, Twitter, Calendar, Canva, Indesign (program guides) |
| Embed URL | Text Area | ✅ | iFrame |

---

### 🧊 Featured Stories `[featured_stories]`

Manually featured stories to display as a block component.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Block Name | Text | | |
| *Repeater Fields:* | | | |
| Featured Story | Relational Field | ✅ | |

---

### 🧊 Featured Classes `[featured_classes]`

Manually featured stories to display as a block component.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Block Name | Text | | |
| *Repeater Fields:* | | | |
| Featured Class | Relational Field | ✅ | |

---

### 🧊 Facility Section `[facility_section]`

Dynamically add sections to your facilities to create a schedule associated to each section along with dedicated content.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Facility Section Name | Text | ✅ | |
| Hero Image | Image | ✅ | |
| Description | WYSIWYG | ✅ | |
| *Repeater Fields:* | | | |
| Hours of Operation | Text | | |

---

### 🧊 Custom Navigation `[custom_navigation]`

Create a custom navigation while maintaining branding and technical parameters.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Navigation Name | Text | ✅ | |
| *Repeater Fields:* | | | |
| Menu Item Label | Text | ✅ | |
| Menu Item Internal Page | Internal Link | | |
| Menu Item External Page | URL | | External page url can be used instead of internal page |
| Parent Menu Item | Internal Link | | If this contains a value, the parent item will become a dropdown menu |
| Sort Order | Sort Order | ✅ | Sort is iterated through by parent, then child pages |

---

### 🧊 Featured Pages `[featured_pages]`

Manually featured internal pages to display as a block component.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Block Name | Text | | |
| *Repeater Fields:* | | | |
| Featured Page | Internal Link | ✅ | |
| Image | Image | ✅ | |
| Button Text | Text | ✅ | |

---

### 🧊 Image Gallery `[image_gallery]`

Manually featured internal pages to display as a block component.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Gallery Name | Text | | |
| *Repeater Fields:* | | | |
| Image | Image | ✅ | |
| Caption | Text | | |

---

### 🧊 Custom Forms `[custom_forms]` *

Create forms to include throughout pages using Freestyle drag & drop. Paired with Visual Form App.

**Behaviors**

| | | | |
|---|---|---|---|
| **Type** | Block | **SEO Values** | ❌ |
| **Template Type** | Fixed (repeater) | **Audience** | N/A |
| **Url Parent** | Frequently Asked Question Pages | **Data Layer** | N/A |
| **Discovery** | FAQ pages | **Traffic Estimate** | N/A |
| **Existing Example** | N/A | | |

**Content Model Schema**

| Field Name | Type | Required | Notes |
|---|---|---|---|
| Form Name | Text | | |
| Form Selector | Dynamic Form Tool | | External CRM url for submission |

---

## Notes

People Blocks — people, managers, directors, leaders of the center to display on an informational page.

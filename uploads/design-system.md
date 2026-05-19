# KROC Web Design System
**Version:** 1.0
**Purpose:** Authoritative design token reference for all KROC Center website prototyping work. Pull every value from this document. Do not invent tokens.
**Framework:** Bootstrap 5 (custom KROC theme) + Swiper.js
**Updated:** 2026-05

---

## 1. Brand Identity

| Property | Value |
|---|---|
| Brand | KROC Centers |
| Framework | Bootstrap 5 (custom theme) + Swiper.js |
| Primary font | Creato Display (CDN: fonts.cdnfonts.com) |
| Serif accent font | Adobe Jenson Pro (self-hosted .ttf) |
| Icon library | Material Icons + Material Symbols Outlined + Bootstrap Icons |
| Page background | `#D9D9D9` (surface-background) |
| Body text color | `#1C1B1F` (dark-100) |

---

## 2. Color System

All colors are exposed as Bootstrap CSS custom properties (`--bs-*`) on `:root`.

### 2.1 Background / Surface Colors

| Token | Hex | Usage |
|---|---|---|
| `--bs-light` / `white` | `#FFFFFF` | Cards, header, modals |
| `--bs-area` / `surface-area` | `#EFEFEF` | Form inputs background, alt sections |
| Page body background | `#D9D9D9` | Global page background (`body{background-color:#d9d9d9}`) |
| `--bs-gray-100` | `#F8F9FA` | Very light grey areas |

### 2.2 Primary — KROC Red

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--bs-primary-50` | Red tint | `#FFEBEB` | Hover backgrounds, alerts |
| `--bs-primary-100` | Red light | `#FF838B` | Light state |
| `--bs-primary-200` | **Primary Red (base)** | `#EF3E42` | CTAs, buttons, links, active states |
| `--bs-primary-300` | Red dark | `#C5000E` | Button hover state |
| `--bs-primary-400` | Red darkest | `#9E121C` | Button active/pressed |

### 2.3 Secondary — KROC Navy Blue

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--bs-secondary-50` | Navy tint | `#D7E9FF` | Light hover backgrounds |
| `--bs-secondary-100` | Light blue | `#77A9EE` | Decorative, light states |
| `--bs-secondary-150` | Mid blue-grey | `#61769C` | Info button bg, tertiary elements |
| `--bs-secondary-200` | **Navy (base)** | `#002056` | Secondary CTAs, nav, dark panels |

### 2.4 Semantic Colors

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--bs-success` | Green | `#12825F` | Success states |
| `--bs-warning` | Amber | `#F2AB53` | Warning states |
| `--bs-danger` / red | Error Red | `#EB2533` | Error states |

### 2.5 Font / Text Colors

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--bs-dark-100` | Dark primary | `#1C1B1F` | Primary body text |
| `--bs-dark` / `--bs-dark-50` | Grey | `#575757` | Secondary/subdued text |
| `--bs-light` | White | `#FFFFFF` | Text on dark backgrounds |
| `--bs-body-color` | Body default | `#1C1B1F` | Global body text |
| Links (default) | Navy underline | `#022056` | `a:not([class])` — navy with red underline |

### 2.6 Opacity Overlays

| Name | Value | Usage |
|---|---|---|
| Photo overlay | `rgba(28,27,31,0.5)` | Hero image darkening |
| Modal backdrop | `rgba(18,18,18,0.6)` | Modal backgrounds |
| Card overlay gradient | `linear-gradient(360deg, rgba(28,27,31,0.5) 0%, rgba(28,27,31,0.1) 100%)` | Card image bottom scrim |
| Image backdrop | `linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.1) 80%)` | Full-bleed hero text backgrounds |
| Disabled state | `rgba(28,27,31,0.3)` | Disabled button bg/border |

---

## 3. Typography

### 3.1 Font Families

```css
font-family: 'Creato Display', sans-serif;   /* Primary — all body + headings */
font-family: 'Adobe Jenson Pro', serif;       /* Serif accent — .text-jenson, .f-ajenson */
font-family: 'AJensonPro', sans-serif;        /* Self-hosted alias for Adobe Jenson Pro */
```

**Loading:**
- Creato Display: `@import url("https://fonts.cdnfonts.com/css/creato-display")`
- Adobe Jenson Pro: `@font-face` self-hosted `.ttf`

### 3.2 Type Scale (Creato Display)

| Token | Size | Line Height | Weight | Use Case |
|---|---|---|---|---|
| `callout-xl` | 80px | 96px | 400 | Hero super-display |
| `heading-xl` | 60px | 78px | 400 | Page headlines |
| `heading-lg` | 48px | 64px | 400 | Section headers |
| `heading-md` | 34px | 48px | 400 | Sub-section headers |
| `heading-sm` | 28px | 48px | 400 | Card/block titles |
| `title-xl` | 24px | ~29px | 400 | Component titles |
| `title-lg` | 20px | 30px | 400 | Secondary titles |
| `body-xl` | 18px | ~22px (120%) | 400 | Lead paragraphs |
| `body-lg` | 16px | 24px | 400 | Standard body |
| `body-md` | 14px | 20px | 400 | Labels, secondary text |
| `body-md/bold` | 14px | 20px | 500 | Emphasized labels |
| `body-sm` | 12px | 18px | 400 | Helper text |
| `caption` | 10px | 14px | 400 | Captions, fine print |

### 3.3 Bootstrap Display Utilities

The theme repurposes Bootstrap `.display-N` for body-level text sizes:

| Class | Size | Line Height |
|---|---|---|
| `.display-1` | 18px (1.125rem) | 1.2 |
| `.display-2` | 16px (1rem) | 1.2 |
| `.display-3` | 14px (0.875rem) | 1.2 |
| `.display-4` | 12px (0.75rem) | 1.2 |
| `.display-5` | 10px (0.625rem) | 1.2 |

### 3.4 Story / Article Typography

```css
.ja-story-headline { font-size: 42px; font-weight: bold; line-height: 1.2; }
.ja-story-subhead  { font-size: 20px; color: #555; line-height: 1.5; }
.ja-story-body     { font-size: 16px; line-height: 1.8; }
.hero-item         { font-size: 22px; font-family: 'Adobe Jenson Pro'; line-height: 26px;
                     text-shadow: 0 2px 12px rgba(0,0,0,0.6); }
```

---

## 4. Spacing System

The spacing scale uses **0.25rem (4px) increments**. The Bootstrap utility classes map directly:

| Step | Value | Common usage |
|---|---|---|
| 0 | 0 | No spacing |
| 1 | 4px (0.25rem) | Micro gaps |
| 2 | 8px (0.5rem) | Tight component gaps |
| 3 | 12px (0.75rem) | Default between inline items |
| 4 | 16px (1rem) | Standard inner padding |
| 5 | 20px (1.25rem) | Button padding, card sections |
| 6 | 24px (1.5rem) | Card internal padding |
| 7 | 28px (1.75rem) | — |
| 8 | 32px (2rem) | Section horizontal padding, header |
| 9 | 36px (2.25rem) | — |
| 10 | 40px (2.5rem) | — |
| 12 | 48px (3rem) | Medium section spacing |
| 14 | 56px (3.5rem) | — |
| 16 | 64px (4rem) | Large section spacing |
| 18 | 80px (5rem) | XL section spacing |
| 19 | 96px (6rem) | Maximum section spacing |

**Key spacing decisions:**
- Header padding: `py-5 px-5 px-lg-8` = 20px vertical / 20–32px horizontal
- Main content margin-top: `12rem` (~192px) to clear the fixed header
- Card body padding: `px-4 pt-4` (16px) or `px-6 pt-6` (24px)
- Card footer padding: `px-6 pb-6` (24px)
- Footer padding: `py-5` (20px)
- Section gap (footer blocks): `gx-3` (12px gutter), `mb-3` (12px)

---

## 5. Border Radius

The theme extends Bootstrap's rounded utilities from 0–19 (4px steps):

| Class | Value | Usage |
|---|---|---|
| `rounded-0` | 0 | No radius |
| `rounded-1` | 4px (0.25rem) | Minimal (badges, small items) |
| `rounded-2` | 8px (0.5rem) | Buttons border-radius default |
| `rounded-3` | 12px (0.75rem) | Small buttons, form elements |
| `rounded-4` | 16px (1rem) | Footer newsletter card, secondary panels |
| **`rounded-5`** | **20px (1.25rem)** | **Cards (default), header shape, footer image block** |
| **`rounded-6`** | **24px (1.5rem)** | **Dropdown menus** |
| `rounded-7` | 28px (1.75rem) | Language selector |
| `rounded-8` | 32px (2rem) | Larger panels |
| `rounded-9` | 36px (2.25rem) | — |
| `rounded-10` | 40px (2.5rem) | — |
| `rounded-pill` | 50rem | Pill buttons, filter tabs |

**Card border-radius:** `--bs-card-border-radius: 20px` (set globally, overrides Bootstrap default)

---

## 6. Shadows & Elevation

| Name | Value | Usage |
|---|---|---|
| Header shadow | `box-shadow: 0 4px 4px -1px rgba(36,104,147,0.04)` | Sticky header |
| Card drop shadow | `box-shadow: 0 9px 20px 0 rgba(28,27,31,0.5)` | Selected/active card |
| Search results | `box-shadow: 0 0 17px -3px rgba(0,0,0,0.1)` | Filter result items |
| Small elevation | `box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075)` | List hover states |
| Mobile nav | `box-shadow: 0 0 20px 0.15px rgba(28,27,31,0.15)` | Mobile nav panel |
| Map loader spinner | `border-top: 5px solid #002056` with 50% border-radius | Loading spinner accent |

---

## 7. Buttons

### 7.1 Base Button Specs

```css
.btn {
  padding: 16px 24px;          /* default size */
  font-size: 1rem;             /* 16px */
  font-weight: 400;
  line-height: 1.5;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
              border-color 0.15s ease-in-out;
}
.btn-sm {
  padding: 12px 20px;
  font-size: 0.875rem;         /* 14px */
  border-radius: 8px;
  max-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### 7.2 Button Variants

| Class | Default bg | Default text | Hover bg | Hover text | Active bg | Use Case |
|---|---|---|---|---|---|---|
| `.btn-primary` | `#EF3E42` | white | `#C5000E` | white | `#9E121C` | Primary CTAs: Donate, Register, Find Help |
| `.btn-secondary` | `#002056` | white | `#61769C` | white | `#D7E9FF` / `#002056` | Secondary CTAs: Sign Up, Learn More |
| `.btn-info` | `#61769C` | white | `#D7E9FF` | `#1C1B1F` | white / `#002056` | Tertiary / navigation header CTAs |
| `.btn-light` | `#FFFFFF` | `#002056` | `#EF3E42` | white | white | CTAs on dark/photo backgrounds |
| `.btn-outline-light` | transparent | white | white | black | — | Outline CTAs on dark backgrounds |
| `.btn-outline-*` | transparent | color | filled | white | — | All outline variants match color |
| `span.btn.btn-solid` | `#002056` | white | `#61769C` | — | — | Rich-text inline CTA block |

**Disabled state (all variants):**
- Text: `#1C1B1F`, Background: `rgba(28,27,31,0.3)`, Border: `rgba(28,27,31,0.3)`, Opacity: 0.65

### 7.3 Button Usage Patterns

```html
<!-- Primary CTA — red, used for Donate, Contact Us, etc. -->
<a class="btn btn-primary">Donate Now</a>

<!-- Secondary CTA — navy, Sign Up, View Article, etc. -->
<a class="btn btn-secondary text-white rounded-3 w-100">Sign Up</a>

<!-- Tertiary / header nav CTAs — info (blue-grey) -->
<a class="btn btn-info d-none d-lg-inline me-2">Find Help</a>

<!-- Filter chip — active state uses primary red -->
.category-filter-btn.active { background: #ef3e42; color: white; border-color: #ef3e42; }

<!-- Pill filter (tabs/swiper nav) -->
.filter .active { padding: 4px 12px; border-radius: 52px; }
```

---

## 8. Cards

### 8.1 Base Card

```css
.card {
  border-radius: 20px;    /* --bs-card-border-radius */
  border: 0;              /* no border */
  background: white;
  min-width: 0;
  overflow: hidden;       /* commonly .card.overflow-hidden */
}
.card-img-top {
  max-height: 200px;
  min-height: 200px;
  object-fit: cover;
}
/* Large variant */
.card-img-top__large { max-height: 250px; min-height: 185px; }
```

**Image scrim overlay (applied on all card images):**
```css
.card-img-top::after {
  content: '';
  height: 100%; width: 100%;
  position: absolute; top: 0; left: 0; z-index: 1;
  background: linear-gradient(360deg, rgba(28,27,31,0.5) 0%, rgba(28,27,31,0.1) 100%);
}
```

### 8.2 Card Variants

| Class pattern | Radius | Shadow | Usage |
|---|---|---|---|
| `card rounded-5 overflow-hidden` | 20px | — | Standard content card |
| `card shadow rounded-5 overflow-hidden` | 20px | default shadow | Featured / hero card |
| `dynamic-card-1 card rounded-5` | 20px | — | Homepage dynamic feature cards |
| `biograph-card card rounded-5` | 20px | — | People/biography flip card (3D flip on click) |
| `location-card` | — | `0 9px 20px rgba(28,27,31,0.5)` | Map location cards (selected state) |

### 8.3 Card Padding

- Compact: `card-body px-4 pt-4` = 16px
- Standard: `card-body px-6 pt-6` = 24px
- Footer: `card-footer px-6 pb-6 bg-transparent border-0` = 24px bottom

### 8.4 News / Story Cards

```css
.card-body { min-height: 175px; max-height: 175px; }
.text-truncate-2 { -webkit-line-clamp: 2; }  /* 2-line title clamp */
.text-truncate-3 { -webkit-line-clamp: 3; }  /* 3-line body clamp */
```

---

## 9. Navigation / Header

### 9.1 Header Structure

```html
<header id="header"
  class="bg-light rounded-bottom-lg-5 top-lg-5 start-lg-2 end-lg-2
         position-sm-fixed py-5 px-5 px-lg-8 my-lg-5 mt-sm-0
         d-flex justify-content-center align-items-center">
  <div class="header__wrapper d-flex justify-content-between align-items-center w-100">

    <!-- Left: Logo -->
    <a href="/" class="me-8 header-home-image">
      <img src="kroc-logo.svg" alt="KROC Centers Logo" />
    </a>

    <!-- Center: Primary nav (desktop) -->
    <nav class="navbar navbar-expand-lg py-0">
      <ul class="navbar-nav d-sm-none d-lg-flex">
        <li class="nav-item"><a class="nav-link fw-normal">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link header-dropdown dropdown-toggle fw-normal"
             data-bs-toggle="dropdown">Programs</a>
          <ul class="dropdown-menu px-8 py-4 rounded-6"><!-- items --></ul>
        </li>
        <!-- ... more nav items ... -->
      </ul>
    </nav>

    <!-- Right: CTAs -->
    <a class="btn btn-info d-none d-lg-inline me-2">Find Help</a>
    <a class="btn btn-primary header-donate-button">Donate</a>
  </div>
</header>
```

### 9.2 Header Design Specs

| Property | Value |
|---|---|
| Background | White (`bg-light`) |
| Border-radius (desktop) | `rounded-bottom-lg-5` = 20px bottom corners only |
| Position | Fixed (`position-sm-fixed`) |
| Desktop margin | `my-lg-5` = 20px top/bottom (floats above page) |
| Desktop padding | `py-5 px-lg-8` = 20px vertical / 32px horizontal |
| Max width | 1850px (`header-container`) |
| Shadow | `0 4px 4px -1px rgba(36,104,147,0.04)` |
| Main content clearance | `margin-top: 12rem` (~192px) |
| z-index | 10 |

### 9.3 Dropdown Specs

| Property | Value |
|---|---|
| Border-radius | `rounded-6` = 24px |
| Padding | `px-8 py-4` = 32px horizontal / 16px vertical |
| Border | 0 |
| Shadow | `0 2px 4px rgba(0,0,0,0.1)` |
| Min-width | 538px |
| Max-height | 600px (scrollable, `overflow-y: auto`) |
| Column layout | 3-column grid for Programs/Services dropdown |
| Dropdown trigger | `dropdown-toggle fw-normal` — chevron rotates on open |

### 9.4 Nav Links

```css
.navbar-nav .nav-link { font-size: 1rem; font-weight: 500; color: #000; }
.nav-link:hover { color: #ed1c24; }          /* red on hover */
.nav-link.active { /* current page indicator */ }

/* Link default style (body links) */
a:not([class]) {
  color: #022056;                              /* navy */
  text-decoration: none;
  border-bottom: 1px solid #ef3e42;           /* red underline */
}
a:not([class]):hover { color: #535353; border-bottom-color: #535353; }
```

### 9.5 Mobile Navigation

- Slides up from bottom (75% viewport height)
- Grab bar at top (`rgba(28,27,31,0.3)` pill)
- Sub-menus animate in from left (`translateX`)
- Social icons at bottom
- Language selector
- Active filter: `accordion-button-filter.active { background: #002056; color: white; }`

---

## 10. Form Inputs

### 10.1 Base Input

```css
.form-control {
  background-color: #efefef;          /* surface-area — not white! */
  border: 1px solid #efefef;          /* same as bg = visually borderless */
  border-radius: 0.375rem;            /* 6px default (can override with rounded-N) */
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);        /* #1C1B1F */
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
/* Override: remove all borders globally */
.form-control { border: 0; }
.input-group-text { border: 0; }
```

### 10.2 Form Select

```css
.form-select {
  background-color: #efefef;
  border: 1px solid #efefef;
  padding: 12px 60px 12px 20px;       /* extra right padding for chevron */
  border-radius: 0.375rem;
  font-size: 1rem;
}
```

### 10.3 Focus / Validation States

```css
/* Focus: outlined with red */
.datepicker-cell.selected { background-color: #ffebee; color: #ff3b30; }
/* Error: primary-300 toggle switch bg */
.form-switch .form-check-input:not(:checked) { background-color: var(--bs-primary-300); }
```

### 10.4 Search Input

```css
#search-input {
  border: 0;
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  color: rgba(28,27,31,0.6);
}
```

---

## 11. Footer (Connect With Us Block)

### 11.1 Structure

```html
<footer class="bg-light-gray py-5" id="footer">
  <!-- 1. Full-bleed "Connect with us" image block -->
  <div class="contact-us rounded-5 overflow-hidden mb-3 position-relative">
    <img class="object-fit-cover" src="connect-with-us.jpg" />
    <div class="position-absolute w-100 h-100 p-6 p-lg-8 d-flex flex-column justify-content-between z-3">
      <img src="kroc-logo.svg" width="59" height="96" />  <!-- KROC logo top-left -->
      <div class="d-flex align-items-center justify-content-between">
        <h1 class="text-white">Connect With Us</h1>
        <div class="contact-us__cta bg-white rounded-4 p-4">
          <a class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. Newsletter + Quick links row (gx-3 gutter) -->
  <!-- Newsletter card: bg-white rounded-4 py-6 px-8 -->
  <!-- Quick links: nav pills, etc. -->
</footer>
```

### 11.2 Footer Design Specs

| Property | Value |
|---|---|
| Background | `bg-light-gray` = `#D9D9D9` (same as page bg) |
| "Connect with us" block | `rounded-5` (20px), full bleed image, `rgba(28,27,31,0.3)` overlay |
| KROC logo | 59×96px, top-left of image block |
| Contact CTA container | `bg-white rounded-4 p-4` = white card 16px radius |
| Newsletter card | `bg-white rounded-4 py-6 px-8` |
| "Sign Up" button | `.btn.btn-secondary.text-white.rounded-3` |
| Footer links | `d-none d-md-flex nav nav-pills bg-white rounded-4 py-6 px-8 footer-nav-pill` |

### 11.3 Footer Image Overlay

```css
footer .contact-us::after {
  content: '';
  width: 100%; height: 100%;
  background-color: rgba(28, 27, 31, 0.3);
  position: absolute; left: 0; top: 0;
  z-index: 1;
}
footer .contact-us__cta { background-color: #fff; }
```

---

## 12. Hero / Full-bleed Image Sections

```css
#hero-full-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 1;    /* 3:1 desktop, 3:2 mobile */
}
.image-background img {
  object-fit: cover;
  filter: brightness(0.85);  /* subtle darkening */
}
.image-backdrop {           /* text-over-image gradient layer */
  position: absolute; inset: 0;
  background: linear-gradient(to top,
    rgba(0,0,0,0.98) 0%,
    rgba(0,0,0,0.8) 30%,
    rgba(0,0,0,0.1) 80%
  );
  border-radius: inherit;
  z-index: 0;
}
/* Hero text (Adobe Jenson Pro, text shadow) */
.hero-item {
  font-size: 22px;
  font-family: 'Adobe Jenson Pro';
  line-height: 26px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.6);
}
```

---

## 13. Section Layout Patterns

### 13.1 Full-bleed Sections with "Break" Effect

```css
/* White top break — creates rounded top appearance over grey page bg */
.custom-break-top   { height: 50px; background: #fff; border-radius: 20px; margin-bottom: -20px; }
.custom-break       { height: 80px; background: #d9d9d9; }
.custom-break-bottom{ height: 50px; background: #fff; border-radius: 20px; margin-top: -20px; }
```

### 13.2 Filter / Tab Navigation

```css
/* Filter tabs look like a pill-swiper nav */
.filter .active {
  padding: 4px 12px;
  border-radius: 52px;        /* pill */
  background: primary;
}
.category-filter-btn {
  background: #e9ecef;
  color: #212529;
  border: 1px solid #dee2e6;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
}
.category-filter-btn.active {
  background: #ef3e42;
  color: white;
  border-color: #ef3e42;
}
```

### 13.3 Dynamic Cards (Homepage Feature Row)

```css
.dynamic-card-1, .dynamic-card-2 { height: 380px; }
/* Desktop: side by side, tablet/mobile: stacked */
```

### 13.4 Featured Article (Story/News)

```css
.featured-article { width: 100%; height: 100%; max-height: 365px; }
.featured-article::after {
  background: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 62%);
  /* full overlay */
}
```

### 13.5 People / Biography Cards

```css
.biograph-card {
  border-radius: 1.25rem;  /* 20px */
  min-height: 400px;
  perspective: 1000px;     /* 3D flip effect */
}
.person-tile {
  height: 350px;
  background-size: cover;
  border-radius: 4px;
}
.person-tile::before { /* gradient overlay */
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
}
.person-link {
  border: 2px solid #fff;
  border-radius: 3px;
  padding: 8px 20px;
  color: white;
}
```

---

## 14. Alert / Banner Component

The theme includes the full Bootstrap `.alert` system mapped to every brand color token.

```css
.alert {
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-border-radius: var(--bs-border-radius);   /* 6px */
  border: 1px solid;
  position: relative;
}

.alert-primary-200 { background: rgba(239,62,66,0.15);  color: #c5000e; }
.alert-secondary-200 { background: rgba(0,32,86,0.15);  color: #002056; }
.alert-warning { background: rgba(242,171,83,0.15);     color: #664d03; }
.alert-success { background: rgba(18,130,95,0.15);      color: #0a3622; }
.alert-dark-100 { background: rgba(28,27,31,0.15);      color: #1c1b1f; }

.alert-dismissible { padding-right: 3rem; }
.alert-dismissible .btn-close { position: absolute; top: 0; right: 0; padding: 1.25rem 1rem; }
```

For the global site alert banner (sticky top of page), override `border-radius: 0` and `position: sticky; top: 0`.

---

## 15. CSS Custom Properties Reference

```css
:root {
  /* === BRAND COLORS === */
  --bs-primary-50: #ffebeb;
  --bs-primary-100: #ff838b;
  --bs-primary-200: #ef3e42;   /* BASE red */
  --bs-primary-300: #c5000e;
  --bs-primary-400: #9e121c;

  --bs-secondary-50: #d7e9ff;
  --bs-secondary-100: #77a9ee;
  --bs-secondary-150: #61769c;
  --bs-secondary-200: #002056; /* BASE navy */

  --bs-area: #efefef;
  --bs-dark-100: #1c1b1f;
  --bs-dark: #575757;
  --bs-success: #12825f;
  --bs-warning: #f2ab53;
  --bs-background-modal: #121212;
  --bs-photo-overlay: #1c1b1f;

  /* === TYPOGRAPHY === */
  --bs-body-font-family: 'Creato Display', sans-serif;
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-color: #1c1b1f;
  --bs-body-bg: #ffffff;

  /* === BORDER RADIUS === */
  --bs-border-radius: 0.375rem;   /* 6px — inputs */
  --bs-border-radius-sm: 0.25rem; /* 4px */
  --bs-border-radius-lg: 0.5rem;  /* 8px */
  --bs-border-radius-xl: 1rem;    /* 16px */
  --bs-border-radius-xxl: 2rem;   /* 32px */
  --bs-border-radius-pill: 50rem;
  --bs-card-border-radius: 20px;  /* custom card radius */

  /* === BUTTON BASE === */
  --bs-btn-padding-x: 24px;
  --bs-btn-padding-y: 16px;
  --bs-btn-font-size: 1rem;
  --bs-btn-border-radius: 8px;

  /* === SPACING BASE (0.25rem = 4px steps) === */
  /* Use class: p-{N}, px-{N}, py-{N}, m-{N}, gap-{N} */
  /* p-5 = 20px, p-6 = 24px, p-8 = 32px, p-12 = 48px, p-16 = 64px */
}
```

---

## 16. Key Bootstrap Classes Used Frequently

```
Layout:      container, row, col-*, g-3, gx-3, gap-3/4/6
Rounded:     rounded-3, rounded-4, rounded-5, rounded-6, rounded-pill
Padding:     p-4, p-5, p-6, p-8, px-6, px-8, py-5, py-6
Text:        display-1/2/3, text-dark-100, text-primary-200, text-white, text-truncate-2/3, fw-normal
Background:  bg-light, bg-area, bg-white, bg-secondary-200, bg-primary-200
Buttons:     btn btn-primary, btn btn-secondary, btn btn-info, btn btn-light, btn btn-sm, btn btn-lg
Cards:       card rounded-5 overflow-hidden, card-body px-6 pt-6, card-footer bg-transparent border-0 px-6 pb-6
Images:      img-fluid, object-fit-cover, ratio ratio-16x9
Position:    position-relative, position-absolute, top-0, end-0, z-3
Flex:        d-flex, align-items-center, justify-content-between, gap-2/3/4
Responsive:  d-none d-lg-block, d-sm-none d-lg-flex, col-lg-5, col-lg-7
```

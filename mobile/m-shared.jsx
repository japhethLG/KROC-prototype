/* ============================================================
   KROC Mobile v2 — shared components, chrome, navigation, cards
   Updated to match the desktop prototype (2026-06/07 sync batch):
   NAV-1/2/3 nav + mega, NAV-4 footer, BLK-1 IntroBand, BLK-2 ClassCard,
   BLK-5/SYNC-27 FeaturedPageCard compact, BLK-7 FacilityCard, HOME-4 MapBlock,
   PAGE-2/7 PricePoints, PAGE-3 PageHero, SYNC-11 "Email Us" person card.
   ============================================================ */

/* ---------- Icon set (lifted from the desktop prototype) ---------- */
function Icon({ name, size = 18, color }) {
  const s = { width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: `0 0 ${size}px`, color: color || "currentColor" };
  const p = {
    pin:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>,
    search:<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
    arrow: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
    arrowUR:<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg>,
    chev:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>,
    chevL: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6"/></svg>,
    chevR: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6"/></svg>,
    warn:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 2 21h20L12 3z"/><path d="M12 10v5M12 18v.5"/></svg>,
    info:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v.5M11 12h1v5h1"/></svg>,
    emerg: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11h4l3-8 4 18 3-10h4"/></svg>,
    close: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6 6 18"/></svg>,
    menu:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
    mail:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>,
    phone: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>,
    lock:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></svg>,
    cal:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>,
    home:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11 12 4l8 7M6 10v9h12v-9"/></svg>,
    grid:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>,
    book:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM19 3v18"/></svg>,
    star:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.3l5.9-.9z"/></svg>,
    hand:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5a1.5 1.5 0 0 1 3 0V11m0-.5a1.5 1.5 0 0 1 3 0V14c0 3-2 6-5.5 6S8 18 6.5 16L4 12.5a1.5 1.5 0 0 1 2.4-1.8L7 11"/></svg>,
    play:  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M8 5v14l11-7z"/></svg>,
    check: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m5 13 4 4L19 7"/></svg>,
    /* class & event category icons — mobile mega menu (NAV-2) */
    water:    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z"/></svg>,
    dumbbell: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12"/></svg>,
    users:    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2A3 3 0 0 1 16 11M20.5 20a5.5 5.5 0 0 0-4-5.3"/></svg>,
    palette:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.9 2-2 0-1.3 1-2 2.2-2H18a3 3 0 0 0 3-3c0-5-4-8-9-8z"/><circle cx="7.5" cy="11" r="1.1"/><circle cx="12" cy="7.5" r="1.1"/><circle cx="16.5" cy="11" r="1.1"/></svg>,
    music:    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>,
    ball:     <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6a13 13 0 0 0 12.8 12.8M18.4 5.6A13 13 0 0 1 5.6 18.4"/></svg>,
    heart:    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21C12 21 4 15.5 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.5 12 21 12 21z"/></svg>,
    sun:      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/></svg>,
    gift:     <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M3 7h18v4H3zM12 7v14"/><path d="M12 7S10.5 3 8 4s2 3 4 3zM12 7s1.5-4 4-3-2 3-4 3z"/></svg>,
    ticket:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z"/><path d="M15 6.5v3M15 14.5v3"/></svg>,
    trophy:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M9 20h6M10.2 20l.4-3.4M13.8 20l-.4-3.4"/></svg>,
    fb:    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.2C16.6 1 15.3 1 14 1c-3 0-5 2-5 5v4H6v4h3v8h4z"/></svg>,
    x:     <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="m17 3 4 0-7 8 8 10h-6l-5-7-5 7H2l8-10L3 3h6l4 6 4-6z"/></svg>,
    li:    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path fill="#fff" d="M7 10v7h2v-7H7zm1-3.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM11 10v7h2v-3.5c0-1 .5-1.5 1.3-1.5s1.2.6 1.2 1.5V17h2v-4c0-2-1-3-2.5-3-1 0-1.6.4-2 1V10h-2z"/></svg>,
    ig:    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>,
    yt:    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><rect x="2" y="6" width="20" height="12" rx="3"/><path fill="#fff" d="m10 9 6 3-6 3z"/></svg>,
    globe: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>,
  };
  return <span style={s}>{p[name] || null}</span>;
}

/* ---------- Navigation context ---------- */
const Nav = React.createContext({ navigate: () => {}, route: "home", openMenu: () => {} });
const useNav = () => React.useContext(Nav);

/* NAV-1: nav aligned to the desktop prototype —
   Home · About Us · Membership · Classes ▾ · Events ▾ · Rentals · Church.
   `mega` = the mobile treatment of the desktop mega menu (NAV-2): an expanding
   section with the category items + a red "All …" index link. */
const NAV_ITEMS = [
  { label: "Home", route: "home" },
  { label: "About Us", route: "about" },
  { label: "Membership", route: "membership" },
  { label: "Classes", route: "programs", mega: {
      index: { label: "All Classes", route: "programs" },
      items: [
        ["Aquatics", "water", "program-cat"], ["Group Fitness", "dumbbell", "program-cat"],
        ["Youth Programs", "users", "program-cat"], ["Arts & Crafts", "palette", "program-cat"],
        ["Music & Dance", "music", "program-cat"], ["Sports & Rec", "ball", "program-cat"],
        ["Health & Wellness", "heart", "program-cat"], ["Aging Well (55+)", "sun", "program-cat"],
      ],
  }},
  { label: "Events", route: "events", mega: {
      index: { label: "All Events", route: "events" },
      items: [
        ["Community Events", "users", "events"], ["Fundraisers", "heart", "events"],
        ["Holiday & Seasonal", "gift", "events"], ["Performances", "ticket", "events"],
        ["Workshops", "book", "events"], ["Sports Tournaments", "trophy", "events"],
        ["Family Days", "star", "events"], ["Special Events", "cal", "events"],
      ],
  }},
  { label: "Rentals", route: "rentals" },
  { label: "Church", route: "church" },
];

/* ---------- small primitives ---------- */
function PH({ ratio = "16/9", label, dims, radius, scrim = true, style = {}, children }) {
  return (
    <div className={"ph" + (scrim ? "" : " no-scrim")}
      style={{ aspectRatio: ratio, borderRadius: radius, ...style }}>
      {dims && <span className="dims">{dims}</span>}
      {label && <span className="lbl">{label}</span>}
      {children}
    </div>
  );
}

function SectionHead({ title, seeAll, onSeeAll }) {
  return (
    <div className="m-section-head">
      <h2 className="t-h2">{title}</h2>
      {seeAll && <a className="m-seeall" onClick={onSeeAll}>{seeAll} <Icon name="arrowUR" size={13} /></a>}
    </div>
  );
}

function FilterRow({ items, value, onChange }) {
  return (
    <div className="m-filters">
      {items.map((t) => (
        <span key={t} className={"pill" + (t === value ? " active" : "")} onClick={() => onChange && onChange(t)}>{t}</span>
      ))}
    </div>
  );
}

/* horizontal swipeable carousel for feature / related card rows */
function Carousel({ children, width = "80%" }) {
  return (
    <div className="m-carousel">
      {React.Children.map(children, (c, i) => (
        <div className="m-carousel-item" key={i} style={{ flexBasis: width }}>{c}</div>
      ))}
    </div>
  );
}

/* ---------- Alert bar ---------- */
function AlertBar({ text, cta, variant, top }) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <div className={"m-alert" + (variant ? " " + variant : "") + (top ? " top" : "")}>
      <span className="ic"><Icon name={variant === "danger" ? "emerg" : "warn"} size={17} /></span>
      <span style={{ flex: 1 }}>{text}{cta && <a className="util-cta" style={{ marginLeft: 6 }}> {cta} →</a>}</span>
      <button className="a-close" onClick={() => setOpen(false)}><Icon name="close" size={15} /></button>
    </div>
  );
}

/* ---------- Top bar ----------
   NAV-1: utility bar → Careers | Donate | Hours & Closures (was Visit-National / Thrift).
   NAV-3: search icon + Donate button replaced by the "Become a Member" header CTA
   (the second CTA, Purchase Classes, lives in the menu drawer). */
function MobileHeader({ active, location = "Camden Kroc · Eastern Region", navPattern, onOpenMenu, crumb }) {
  const { navigate } = useNav();
  return (
    <header className="m-topbar">
      <div className="m-topbar-util">
        <span className="loc">
          <span className="pin"><Icon name="pin" size={13} /></span>
          <span className="txt">{location}</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, whiteSpace: "nowrap" }}>
          <a className="util-cta" onClick={() => navigate("careers")}>Careers</a>
          <span style={{ color: "#c9c9cf" }}>|</span>
          <a className="util-cta">Donate</a>
          <span style={{ color: "#c9c9cf" }}>|</span>
          <a className="util-cta">Hours &amp; Closures</a>
        </span>
      </div>
      <div className="m-topbar-main">
        <div className="m-logo" role="img" aria-label="KROC Centers" onClick={() => navigate("home")} />
        <div className="m-topbar-actions">
          <button className="m-iconbtn solid-navy" aria-label="Become a Member" style={{ width: "auto", padding: "0 15px", borderRadius: 99, fontSize: 13 }} onClick={() => navigate("membership")}>Become a Member</button>
          <button className="m-iconbtn" aria-label="Menu" onClick={onOpenMenu}><Icon name="menu" size={20} /></button>
        </div>
      </div>
      {crumb && (
        <div className="m-context">
          <span className="m-crumb" onClick={crumb.onClick}><Icon name="chevL" size={13} /> {crumb.label}</span>
        </div>
      )}
    </header>
  );
}

/* ---------- Nav list (shared by sheet + overlay) ---------- */
function NavList({ active, sub, setSub, go }) {
  return (
    <ul className="m-navlist">
      {NAV_ITEMS.map((n) => (
        <li key={n.label}>
          <button className={"m-navlink" + (active === n.route ? " active" : "") + (sub === n.label ? " open" : "")}
            onClick={() => n.mega ? setSub(sub === n.label ? null : n.label) : go(n.route)}>
            <span>{n.label}</span>
            {n.mega && <span className="chev"><Icon name="chev" size={18} /></span>}
          </button>
          {n.mega && (
            <div className={"m-subnav" + (sub === n.label ? " open" : "")}>
              <a onClick={() => go(n.mega.index.route)} style={{ color: "var(--kroc-red)", display: "flex", alignItems: "center", gap: 8, fontWeight: 500 }}>
                {n.mega.index.label} <Icon name="arrowUR" size={13} />
              </a>
              {n.mega.items.map(([l, ic, r]) => (
                <a key={l} onClick={() => go(r)} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "var(--kroc-red)", display: "inline-flex" }}><Icon name={ic} size={16} /></span>{l}
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Slide-up nav drawer / overlay ----------
   CTAs per NAV-3: Become a Member (navy) + Purchase Classes (red). */
function NavDrawer({ open, onClose, active, variant = "sheet" }) {
  const { navigate } = useNav();
  const [sub, setSub] = React.useState(null);
  const go = (r) => { onClose(); navigate(r); };
  const CTAs = (
    <div className="m-sheet-cta">
      <a className="btn btn-info" onClick={() => go("membership")}>Become a Member</a>
      <a className="btn btn-primary" onClick={() => go("programs")}>Purchase Classes</a>
    </div>
  );

  if (variant === "overlay") {
    return (
      <div className={"m-overlay" + (open ? " open" : "")}>
        <div className="m-overlay-top">
          <div className="m-logo" role="img" aria-label="KROC Centers" />
          <button className="m-iconbtn" onClick={onClose} aria-label="Close menu"><Icon name="close" size={20} /></button>
        </div>
        <div className="m-overlay-scroll">
          <NavList active={active} sub={sub} setSub={setSub} go={go} />
          {CTAs}
          <div className="m-sheet-socials"><Icon name="fb" size={22} /><Icon name="x" size={22} /><Icon name="li" size={22} /><Icon name="ig" size={22} /><Icon name="yt" size={22} /></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={"m-scrim" + (open ? " open" : "")} onClick={onClose} />
      <div className={"m-sheet" + (open ? " open" : "")}>
        <div className="grab"><i /></div>
        <div className="m-sheet-scroll">
          <div className="m-sheet-head">
            <div className="m-logo" role="img" aria-label="KROC Centers" />
            <button className="m-iconbtn" onClick={onClose} aria-label="Close menu"><Icon name="close" size={18} /></button>
          </div>
          <NavList active={active} sub={sub} setSub={setSub} go={go} />
          {CTAs}
          <div className="m-sheet-langrow">
            <span>Language</span>
            <span className="m-lang-pill"><Icon name="globe" size={15} /> English <Icon name="chev" size={14} /></span>
          </div>
          <div className="m-sheet-socials">
            <Icon name="fb" size={20} /><Icon name="x" size={20} /><Icon name="li" size={20} /><Icon name="ig" size={20} /><Icon name="yt" size={20} />
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Bottom tab bar (aligned to the new nav) ---------- */
function BottomTabBar({ active, onMore }) {
  const { navigate } = useNav();
  const tabs = [
    ["home", "Home", "home"],
    ["programs", "Classes", "grid"],
    ["events", "Events", "cal"],
    ["membership", "Membership", "users"],
  ];
  const activeRoot = ({
    "program-cat": "programs", "class": "programs",
    story: "stories", event: "events", "volunteer-detail": "volunteers",
    daypass: "membership",
  })[active] || active;
  return (
    <div className="m-tabbar">
      {tabs.map(([r, l, ic]) => (
        <button key={r} className={"m-tab" + (activeRoot === r ? " active" : "")} onClick={() => navigate(r)}>
          <span className="ic"><Icon name={ic} size={23} /></span>{l}
        </button>
      ))}
      <button className="m-tab" onClick={onMore}>
        <span className="ic"><Icon name="menu" size={23} /></span>More
      </button>
    </div>
  );
}

/* ---------- Sticky CTA bar ---------- */
function StickyCTA({ label, sub, action = "Register", liftTabs, onAction }) {
  return (
    <div className={"m-stickycta" + (liftTabs ? " lift-tabs" : "")}>
      {(label || sub) && (
        <div className="meta">
          {sub && <div className="k">{sub}</div>}
          {label && <div className="v">{label}</div>}
        </div>
      )}
      <a className="btn btn-primary" onClick={onAction}>{action}</a>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero({ eyebrow, title, sub, dims = "1400×460", center, short, children, titleClass = "t-hero", icon, badge, eyebrowColor }) {
  return (
    <section className={"m-hero" + (center ? " center" : "") + (short ? " short" : "")}>
      <div className="hbg" /><span className="dims">{dims} · placeholder</span>
      <div className="hinner">
        {icon && <span className="kroc-icon" style={{ background: "rgba(255,255,255,.12)", border: "1px dashed rgba(255,255,255,.4)", color: "#fff", marginBottom: 12 }}>kroc-icon</span>}
        {badge && <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(255,255,255,.15)", borderRadius: 99, marginBottom: 12, fontSize: 13, fontFamily: "'SF Mono',Menlo,monospace" }}>{badge}</div>}
        {eyebrow && <div className="eyebrow" style={{ color: eyebrowColor || "rgba(255,255,255,.72)", marginBottom: 10 }}>{eyebrow}</div>}
        <h1 className={titleClass} style={{ margin: "0 0 12px" }}>{title}</h1>
        {sub && <p className="t-body" style={{ color: "rgba(255,255,255,.86)", margin: "0 0 18px" }}>{sub}</p>}
        {children}
      </div>
    </section>
  );
}

/* ---------- Page hero (PAGE-3 item 1) — palette-color band OR image hero ---------- */
function PageHero({ variant = "color", bg = "var(--kroc-red)", eyebrow, title, subtitle, children }) {
  if (variant === "image") {
    return (
      <div className="m-section">
        <Hero eyebrow={eyebrow} title={title} sub={subtitle} titleClass="t-h1" dims="1400×420 · hero image">{children}</Hero>
      </div>
    );
  }
  return (
    <div className="m-section">
      <div className="m-band center" style={{ background: bg, margin: 0 }}>
        {eyebrow && <div className="eyebrow" style={{ opacity: .85, marginBottom: 8 }}>{eyebrow}</div>}
        <h1 className="t-h1" style={{ margin: "0 0 12px" }}>{title}</h1>
        {subtitle && <p className="t-body" style={{ margin: 0, opacity: .92 }}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

/* ---------- Member / Public price points (PAGE-2 / PAGE-7 item 2) ----------
   size: "detail" (sidebar — label + large values) | "card" (compact, no label). */
function PricePoints({ member, publicPrice, dynamic = false, size = "detail" }) {
  const card = size === "card";
  const label = { fontSize: 10.5, color: "var(--kroc-dark)", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 2 };
  return (
    <div>
      {!card && <div className="m-meta-k">Price{dynamic && <span className="mono" style={{ fontSize: 10, color: "#999", marginLeft: 6 }}>dynamic</span>}</div>}
      <div style={{ display: "flex", gap: card ? 16 : 26, marginBottom: card ? 0 : 14 }}>
        {member && <div><div style={label}>Members</div><div style={{ fontSize: card ? 13.5 : 18 }}>{member}</div></div>}
        {publicPrice && <div><div style={label}>Public</div><div style={{ fontSize: card ? 13.5 : 18 }}>{publicPrice}</div></div>}
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */
function StoryCard({ category = "Recreation", title, date = "March 2024", author = "By Dale Bannon", body, onClick }) {
  const { navigate } = useNav();
  return (
    <div className="card" onClick={onClick || (() => navigate("story"))}>
      <div className="cimg">
        <span className="chip"><span className="ic" />{category}</span>
        <span className="lbl">16:9</span>
        <div className="metarow"><span>{date}</span><span>{author}</span></div>
      </div>
      <div className="cbody">
        <h3 className="ctitle">{title}</h3>
        {body && <p className="t-sm clamp-2 text-muted" style={{ margin: 0 }}>{body}</p>}
      </div>
    </div>
  );
}

function StoryRow({ category = "Education", title, date = "Feb 2024", author = "By M. Alvarez", onClick }) {
  const { navigate } = useNav();
  return (
    <div className="card" style={{ flexDirection: "row" }} onClick={onClick || (() => navigate("story"))}>
      <div className="cimg" style={{ width: 118, flex: "0 0 118px", aspectRatio: "auto", borderRadius: 0 }}>
        <span className="chip" style={{ top: 8, left: 8, fontSize: 10, padding: "3px 8px" }}><span className="ic" style={{ width: 10, height: 10, flex: "0 0 10px" }} />{category}</span>
      </div>
      <div className="cbody" style={{ justifyContent: "space-between", flex: 1, padding: "14px 16px" }}>
        <h4 className="t-title clamp-2" style={{ margin: "0 0 6px", fontWeight: 500 }}>{title}</h4>
        <div className="t-xs text-muted">{date} · {author}</div>
      </div>
    </div>
  );
}

/* Event card — HOME-2 / PAGE-7: short description + Member/Public price points */
function EventCard({ title, date, desc = null, address = "Camden Kroc Center", past, memberPrice = null, publicPrice = null, onClick }) {
  const { navigate } = useNav();
  return (
    <div className="card" onClick={onClick || (() => navigate("event"))}>
      <div className="cimg">
        {past && <span style={{ position: "absolute", top: 12, left: 12, zIndex: 3, padding: "4px 11px", borderRadius: 99, background: "rgba(28,27,31,.72)", color: "#fff", fontSize: 11.5 }}>Past Event</span>}
        <span className="lbl">16:9</span>
      </div>
      <div className="cbody">
        <h3 className="ctitle">{title}</h3>
        <p className="t-sm text-muted" style={{ margin: "0 0 4px" }}>{date}</p>
        {desc && <p className="t-sm clamp-2" style={{ margin: "0 0 6px" }}>{desc}</p>}
        <a className="link t-sm">{address}</a>
        {(memberPrice || publicPrice) && !past && <div style={{ marginTop: 10 }}><PricePoints member={memberPrice} publicPrice={publicPrice} size="card" /></div>}
        <div style={{ marginTop: "auto", paddingTop: 14 }}><a className="btn btn-secondary btn-sm btn-block"><Icon name="arrowUR" size={14} /> {past ? "View Recap" : "View Event"}</a></div>
      </div>
    </div>
  );
}

function CategoryCard({ name = "Aquatics", body, cta = "View Category", onClick }) {
  const { navigate } = useNav();
  return (
    <div className="card" style={{ padding: 18 }} onClick={onClick || (() => navigate("program-cat"))}>
      <span className="kroc-icon lg" style={{ marginBottom: 12 }}>kroc-icon</span>
      <h3 className="t-h3" style={{ margin: "0 0 6px" }}>{name}</h3>
      {body && <p className="t-sm" style={{ margin: "0 0 14px" }}>{body}</p>}
      <a className="btn btn-secondary btn-sm" style={{ alignSelf: "flex-start", marginTop: "auto" }}><Icon name="arrowUR" size={14} /> {cta}</a>
    </div>
  );
}

/* Class card (BLK-2 / PAGE-2) — matches the desktop ClassCard:
   · dates: roster session range line (calendar icon)
   · memberPrice / publicPrice: split price points (falls back to `price`)
   · desc: whole card is clickable → marketing-description pop-up
   · noImage: branded navy color-cover variant (same 16:9 footprint) */
function ClassCard({ title, kind = "Roster", sched, dates = null, price, memberPrice = null, publicPrice = null, desc = null, noImage = false, onClick }) {
  const { navigate } = useNav();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const pillCls = "pill sm " + (kind === "Drop-In" ? "red-fill" : "red-outline");
  const split = memberPrice || publicPrice;
  const priceEl = split
    ? <PricePoints member={memberPrice} publicPrice={publicPrice} size="card" />
    : <div className="t-body">{price}</div>;
  const handleOpen = desc ? () => setOpen(true) : (onClick || (() => navigate("class")));
  return (
    <div className="card" onClick={handleOpen} role={desc ? "button" : undefined}>
      {noImage ? (
        <div style={{ aspectRatio: "16/9", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, var(--kroc-navy), #00112e)", display: "flex", alignItems: "flex-end", padding: "16px 18px" }}>
          <span className={pillCls} style={{ position: "absolute", top: 12, left: 12, background: kind === "Drop-In" ? undefined : "#fff" }}>{kind}</span>
          <h3 style={{ margin: 0, color: "#fff", fontSize: 20, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-.01em" }}>{title}</h3>
        </div>
      ) : (
        <div className="cimg">
          <span className={pillCls} style={{ position: "absolute", top: 12, left: 12, zIndex: 3, background: kind === "Drop-In" ? undefined : "#fff" }}>{kind}</span>
          <span className="lbl">16:9</span>
        </div>
      )}
      <div className="cbody">
        {!noImage && <h3 className="t-title" style={{ margin: "0 0 6px" }}>{title}</h3>}
        <div className="t-sm text-muted" style={{ marginBottom: dates ? 3 : 6, marginTop: noImage ? 2 : 0 }}>{sched}</div>
        {dates && <div className="t-xs text-muted" style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 5 }}><Icon name="cal" size={12} /> {dates}</div>}
        <div style={{ marginBottom: 12 }}>{priceEl}</div>
        <a className="btn btn-primary btn-sm btn-block" style={{ marginTop: "auto" }} onClick={(e) => e.stopPropagation()}>Register</a>
      </div>

      {open && (
        <div onClick={(e) => { e.stopPropagation(); setOpen(false); }}
          style={{ position: "fixed", inset: 0, background: "rgba(28,27,31,.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 20 }}>
          <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true"
            style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 360, maxHeight: "80%", overflowY: "auto", padding: "26px 24px", boxShadow: "0 30px 80px rgba(0,0,0,.35)", position: "relative" }}>
            <button onClick={() => setOpen(false)} aria-label="Close"
              style={{ position: "absolute", top: 14, right: 14, border: 0, background: "var(--kroc-area)", width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--kroc-dark-100)" }}>
              <Icon name="close" size={15} />
            </button>
            <span className={pillCls}>{kind}</span>
            <h3 className="t-h2" style={{ margin: "12px 0 6px" }}>{title}</h3>
            <div className="t-sm text-muted" style={{ marginBottom: dates ? 3 : 12 }}>{sched}</div>
            {dates && <div className="t-xs text-muted" style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 5 }}><Icon name="cal" size={12} /> {dates}</div>}
            <div style={{ marginBottom: 14 }}>{priceEl}</div>
            <p className="t-sm" style={{ lineHeight: 1.6, margin: "0 0 20px" }}>{desc}</p>
            <a className="btn btn-primary btn-block" style={{ marginBottom: 8 }} onClick={(e) => e.stopPropagation()}>Register</a>
            <a className="btn btn-outline-primary btn-block btn-sm" onClick={() => setOpen(false)}>Close</a>
          </div>
        </div>
      )}
    </div>
  );
}

function OppCard({ title, dateline, body, onClick }) {
  const { navigate } = useNav();
  return (
    <div className="card" onClick={onClick || (() => navigate("volunteer-detail"))}>
      <div className="cimg"><span className="lbl">16:9 · opp hero</span></div>
      <div className="cbody">
        <h3 className="t-title" style={{ margin: "0 0 4px" }}>{title}</h3>
        {dateline && <div className="t-xs text-muted mono" style={{ marginBottom: 8, letterSpacing: ".02em" }}>{dateline}</div>}
        {body && <p className="t-sm clamp-3" style={{ margin: "0 0 14px" }}>{body}</p>}
        <a className="btn btn-secondary btn-sm" style={{ alignSelf: "flex-start", marginTop: "auto" }}>Learn More</a>
      </div>
    </div>
  );
}

/* Quick-link card (BLK-5 / SYNC-27) — the Compact Featured Pages variant:
   red-tinted circular icon chip + label, whole card is the link. */
function QuickLinkCard({ title, icon, onClick }) {
  return (
    <a onClick={onClick} style={{ background: "#fff", borderRadius: 16, padding: "16px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 9, textAlign: "center", color: "var(--kroc-dark-100)" }}>
      <span style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--kroc-red-50)", color: "var(--kroc-red)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={icon} size={20} /></span>
      <span style={{ fontSize: 12, lineHeight: 1.25 }}>{title}</span>
    </a>
  );
}

/* Featured Pages card — Full style (BLK-5): icon-on-tinted-panel OR image media. */
function FeaturedPageCard({ title, body, cta, media = "image", icon = null, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {media === "icon" ? (
        <div style={{ aspectRatio: "16/9", background: "#EEF2F8", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--kroc-navy)" }}><Icon name={icon} size={46} /></div>
      ) : (
        <div className="cimg"><span className="lbl">4:3</span></div>
      )}
      <div className="cbody">
        <h3 className="t-title" style={{ margin: "0 0 6px" }}>{title}</h3>
        {body && <p className="t-sm text-muted" style={{ margin: "0 0 14px" }}>{body}</p>}
        <a className="btn btn-secondary btn-sm" style={{ alignSelf: "flex-start", marginTop: "auto" }}>{cta}</a>
      </div>
    </div>
  );
}

/* Person card — SYNC-7 parity (bio / contact) + SYNC-11: email renders as an
   "Email Us" mailto label instead of the raw address. */
function PersonCard({ name, role, bio, email, phone, ratio = "4/5" }) {
  return (
    <div className="card">
      <PH ratio={ratio} label={"portrait · " + ratio.replace("/", ":")} style={{ borderRadius: 0 }} />
      <div className="cbody" style={{ padding: "14px 16px" }}>
        <div className="t-title">{name}</div>
        <div className="t-xs text-muted" style={{ marginBottom: bio || email || phone ? 8 : 0 }}>{role}</div>
        {bio && <p className="t-sm clamp-3" style={{ margin: "0 0 10px", lineHeight: 1.5 }}>{bio}</p>}
        {phone && <div className="t-sm" style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}><Icon name="phone" size={13} color="#EF3E42" /> {phone}</div>}
        {email && <a className="link t-sm" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Icon name="mail" size={13} color="#EF3E42" /> Email Us</a>}
      </div>
    </div>
  );
}

/* Intro / Welcome band (BLK-1 / HOME-6) — shared membership callout.
   variant "color" = palette band; "photo" = white card with photo on top. */
function IntroBand({ eyebrow, title, body, primaryCta, secondaryCta, variant = "color", bg = "var(--kroc-navy)", photoLabel = "3:2 · image" }) {
  if (variant === "photo") {
    return (
      <div className="card">
        <PH ratio="3/2" label={photoLabel} style={{ borderRadius: 0 }} />
        <div className="cbody" style={{ padding: "20px 20px 22px" }}>
          {eyebrow && <div className="eyebrow text-red" style={{ marginBottom: 8 }}>{eyebrow}</div>}
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>{title}</h2>
          {body && <p className="t-sm" style={{ margin: "0 0 16px", lineHeight: 1.6 }}>{body}</p>}
          <div style={{ display: "grid", gap: 8 }}>
            {primaryCta && <a className="btn btn-primary btn-block">{primaryCta}</a>}
            {secondaryCta && <a className="btn btn-outline-primary btn-block">{secondaryCta}</a>}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="m-band" style={{ background: bg, margin: 0 }}>
      {eyebrow && <div className="eyebrow" style={{ opacity: .75, marginBottom: 8 }}>{eyebrow}</div>}
      <h2 className="t-h1" style={{ margin: "0 0 10px" }}>{title}</h2>
      {body && <p className="t-sm" style={{ margin: "0 0 18px", opacity: .9, lineHeight: 1.6 }}>{body}</p>}
      <div style={{ display: "grid", gap: 8 }}>
        {primaryCta && <a className="btn btn-light btn-block">{primaryCta}</a>}
        {secondaryCta && <a className="btn btn-outline-light btn-block">{secondaryCta}</a>}
      </div>
    </div>
  );
}

/* Map block (HOME-4 / SCHEMA-12) — reusable.
   variant "locator" (apex · multi-center finder) | "single" (instance · one pin + directions). */
function MapBlock({ variant = "single", title, body, address, cta = "Get Directions" }) {
  const locator = variant === "locator";
  const pins = locator
    ? [[100, 110], [170, 80], [230, 140], [290, 100], [150, 170], [330, 150]]
    : [[205, 120]];
  return (
    <div className="m-panel">
      <h2 className="t-h2" style={{ margin: "0 0 10px" }}>{title}</h2>
      {body && <p className="t-sm" style={{ margin: "0 0 16px" }}>{body}</p>}
      <div style={{ aspectRatio: "5/3", background: "#EFEFEF", borderRadius: 14, position: "relative", overflow: "hidden", marginBottom: 14 }}>
        <svg viewBox="0 0 400 240" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M30 70 Q90 50 140 80 T260 70 T380 110 L380 200 Q310 220 250 200 T120 210 T20 190 Z" fill="#dcdcdf" stroke="#c4c4c8" />
          {pins.map(([x, y], i) => (
            <g key={i} transform={`translate(${x},${y})`}><path d="M0-14 a8 8 0 1 1 0-.01 z" fill={locator ? "#002056" : "#EF3E42"} /><circle cx="0" cy="-8" r="3" fill="#fff" /></g>
          ))}
        </svg>
      </div>
      {locator ? (
        <>
          <div className="m-input" style={{ marginBottom: 10 }}><span className="lead"><Icon name="search" size={16} /></span><input placeholder="City or ZIP" /></div>
          <a className="btn btn-secondary btn-block">Find a Center</a>
        </>
      ) : (
        <>
          {address && <div className="t-body" style={{ marginBottom: 12 }}>{address}</div>}
          <a className="btn btn-secondary btn-block">{cta}</a>
        </>
      )}
    </div>
  );
}

/* Facility / Location card (BLK-7) — photo carousel · pills · structured hours
   (multi-range days + Closed) · closure message · optional CTA · no-hours rentals. */
function FacilityCard({ title, body, photos = ["3:2 · facility"], pills = [], hours = null, closure = null, status = null, cta = null }) {
  const [idx, setIdx] = React.useState(0);
  const n = photos.length;
  const go = (d, e) => { e.stopPropagation(); setIdx(i => (i + d + n) % n); };
  const arrow = { position: "absolute", top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.92)", border: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1C1B1F", boxShadow: "0 2px 8px rgba(0,0,0,.18)", zIndex: 3 };
  const badge = status ? (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 99, fontSize: 11.5, fontWeight: 500, background: status.tone === "closed" ? "#FBEAEA" : "#E7F4EA", color: status.tone === "closed" ? "#B42318" : "#1E7A34" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: status.tone === "closed" ? "#B42318" : "#28A745" }} />{status.label}
    </span>
  ) : null;
  return (
    <div className="card">
      <div style={{ position: "relative" }}>
        <PH ratio="3/2" label={photos[idx]} style={{ borderRadius: 0 }} />
        {n > 1 && (
          <>
            <button onClick={(e) => go(-1, e)} aria-label="Previous photo" style={{ ...arrow, left: 10 }}><Icon name="chevL" size={16} /></button>
            <button onClick={(e) => go(1, e)} aria-label="Next photo" style={{ ...arrow, right: 10 }}><Icon name="chevR" size={16} /></button>
            <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 3 }}>
              {photos.map((_, i) => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === idx ? "#fff" : "rgba(255,255,255,.55)" }} />)}
            </div>
          </>
        )}
      </div>
      <div className="cbody" style={{ padding: "18px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
          <h3 className="t-h3" style={{ margin: 0 }}>{title}</h3>
          {badge}
        </div>
        {body && <p className="t-sm" style={{ margin: "0 0 12px", lineHeight: 1.6 }}>{body}</p>}
        {pills.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
            {pills.map(p => <span key={p} className="pill sm" style={{ background: "var(--kroc-area)" }}>{p}</span>)}
          </div>
        )}
        {closure ? (
          <div style={{ marginBottom: 14 }}>
            <div className="mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "#888", marginBottom: 6 }}>Status</div>
            <div style={{ background: "#FBEAEA", border: "1px solid #f3cccc", borderRadius: 12, padding: "10px 14px", color: "#8a1f1f", fontSize: 13, lineHeight: 1.5 }}>{closure}</div>
          </div>
        ) : hours ? (
          <div style={{ marginBottom: 14 }}>
            <div className="mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "#888", marginBottom: 6 }}>Hours of Operation</div>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                {hours.map(([day, ranges]) => (
                  <tr key={day} style={{ borderBottom: "1px solid #F0F0F0", verticalAlign: "top" }}>
                    <td className="t-sm" style={{ fontWeight: 500, padding: "6px 0" }}>{day}</td>
                    <td className="t-sm text-muted" style={{ padding: "6px 0", textAlign: "right" }}>
                      {ranges === "CLOSED"
                        ? <span style={{ color: "#9a9aa2" }}>Closed</span>
                        : (Array.isArray(ranges) ? ranges : [ranges]).map((r, i) => <div key={i}>{r}</div>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
        {cta && <a className="btn btn-secondary btn-sm" style={{ alignSelf: "flex-start" }}>{cta}</a>}
      </div>
    </div>
  );
}

/* ---------- checklist / tier / band / form-field helpers (new pages) ---------- */
function CheckList({ items, color = "var(--kroc-success)", textColor = "inherit" }) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {items.map((t, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, lineHeight: 1.5, color: textColor }}>
          <span style={{ flex: "0 0 18px", color }}><Icon name="check" size={17} /></span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function TierCard({ name, price, per = "/mo", note }) {
  return (
    <div className="card" style={{ padding: "16px 18px", flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
      <div>
        <div className="t-title" style={{ marginBottom: 2 }}>{name}</div>
        {note && <div className="t-xs text-muted">{note}</div>}
      </div>
      <div style={{ whiteSpace: "nowrap", textAlign: "right" }}>
        <span style={{ fontSize: 22, color: "var(--kroc-navy)" }}>{price}</span>
        <span className="t-xs text-muted">{per}</span>
      </div>
    </div>
  );
}

function Band({ bg = "var(--kroc-navy)", eyebrow, title, body, children, ctas = [], center }) {
  return (
    <div className="m-section">
      <div className={"m-band" + (center ? " center" : "")} style={{ background: bg, margin: 0 }}>
        {eyebrow && <div className="eyebrow" style={{ opacity: .75, marginBottom: 8 }}>{eyebrow}</div>}
        {title && <h2 className="t-h2" style={{ margin: "0 0 8px" }}>{title}</h2>}
        {body && <p className="t-sm" style={{ margin: "0 0 16px", opacity: .9, lineHeight: 1.6 }}>{body}</p>}
        {children}
        {ctas.length > 0 && (
          <div style={{ display: "grid", gap: 8 }}>
            {ctas.map((c, i) => <a key={i} className={"btn btn-block " + (c.variant || (i === 0 ? "btn-light" : "btn-outline-light"))}>{c.label}</a>)}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, req, placeholder, type = "text", area }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}{req && <span className="text-red" style={{ marginLeft: 2 }}>*</span>}</label>
      {area
        ? <div className="m-input" style={{ alignItems: "flex-start" }}><textarea rows={area} placeholder={placeholder} /></div>
        : <div className="m-input"><input type={type} placeholder={placeholder} /></div>}
    </div>
  );
}

/* ---------- FAQ accordion ---------- */
function Faq({ title, items, defaultOpen = 0 }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div>
      {title && <h2 className="t-h2" style={{ margin: "0 0 14px" }}>{title}</h2>}
      <div className="m-acc">
        {items.map(([q, a], i) => (
          <div className="m-acc-item" key={i}>
            <button className={"m-acc-q" + (open === i ? " open" : "")} onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{q}</span><span className="pm">+</span>
            </button>
            <div className={"m-acc-a" + (open === i ? " open" : "")}>{a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Image gallery — [image_gallery] · variant mosaic | grid ---------- */
function ImageGallery({ title, tiles, variant = "mosaic" }) {
  const items = tiles || [["1/1", 2, 2], ["3/2", 1, 1], ["3/2", 1, 1], ["4/5", 1, 2], ["16/9", 2, 1], ["3/2", 1, 1]];
  const grid = variant === "grid";
  return (
    <div>
      {title && <h2 className="t-h2" style={{ margin: "0 0 14px" }}>{title}</h2>}
      <div className="m-gallery">
        {items.map(([l, cs, rs], i) => (
          <div className="gt" key={i} style={{ gridColumn: `span ${grid ? 1 : Math.min(cs, 2)}`, gridRow: `span ${grid ? 1 : rs}` }}><span className="lbl">{l}</span></div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Donation band ---------- */
function DonationBand({ title, body, primaryCta = "Donate Now", secondaryCta, variant = "red" }) {
  return (
    <div className="m-section">
      <div className={"m-band" + (variant === "navy" ? " navy" : "")}>
        <h2 className="t-h1" style={{ margin: "0 0 10px" }}>{title}</h2>
        {body && <p className="t-body" style={{ margin: "0 0 18px", opacity: .92 }}>{body}</p>}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn btn-light">{primaryCta}</a>
          {secondaryCta && <a className="btn btn-outline-light">{secondaryCta}</a>}
        </div>
      </div>
    </div>
  );
}

/* ---------- Pagination ---------- */
function Pagination() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
      <div className="m-pager">
        {[1, 2, 3].map((n) => <span key={n} className={"pg" + (n === 1 ? " active" : "")}>{n}</span>)}
        <span style={{ padding: "0 6px", color: "#575757" }}>…</span>
        <span className="pg next"><Icon name="arrow" size={15} /></span>
      </div>
    </div>
  );
}

/* ---------- Connect footer (NAV-4 / SYNC-3) ----------
   · Newsletter → vendor-form callout (no inline inputs)
   · Mission → official Salvation Army Mission statement
   · Quick-links aligned to the new nav · Phoenix meta line · affiliate links */
function Connect() {
  const { navigate } = useNav();
  return (
    <section className="m-connect">
      <div className="chero">
        <div className="hbg" /><span className="dims">1400×366 placeholder</span>
        <div className="m-logo" style={{ width: 64, height: 56, background: "#fff", borderRadius: 8, padding: 6, backgroundClip: "content-box", WebkitMaskImage: "none" }} role="img" aria-label="KROC" />
        <div>
          <h2>Connect With Us</h2>
          <a className="btn btn-primary" style={{ marginTop: 14 }} onClick={() => navigate("contact")}>Contact Us</a>
        </div>
      </div>
      {/* NAV-4: newsletter is a vendor-form callout — sign-ups handled by the email partner */}
      <div className="ccard">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--kroc-red-50)", color: "var(--kroc-red)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 40px" }}><Icon name="mail" size={18} /></span>
          <h5 style={{ margin: 0 }}>Sign Up for KROC Updates</h5>
        </div>
        <p className="t-sm text-muted" style={{ margin: "0 0 14px" }}>Classes, events, and community news — straight to your inbox. Sign-ups are handled by our email partner.</p>
        <a className="btn btn-secondary btn-block">Sign Up for Updates <Icon name="arrowUR" size={14} /></a>
      </div>
      {/* NAV-4: official Salvation Army Mission statement */}
      <div className="ccard mission">
        <h5>The Salvation Army Mission</h5>
        <p className="t-sm" style={{ margin: 0, lineHeight: 1.6 }}>The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human needs in His name without discrimination.</p>
      </div>
      <div className="navpills">
        {[["Home", "home"], ["Ways To Give", null], ["About Us", "about"], ["Careers", "careers"], ["Classes", "programs"], ["Volunteer", "volunteers"], ["Accessibility", null]].map(([l, r], i) => (
          <a key={l} className={i === 0 ? "active" : ""} onClick={r ? () => navigate(r) : undefined}>{l}</a>
        ))}
      </div>
      <div className="fmeta">
        <div className="socials"><Icon name="fb" size={19} /><Icon name="x" size={19} /><Icon name="li" size={19} /><Icon name="yt" size={19} /><Icon name="ig" size={19} /></div>
        1375 E. Broadway Road, Phoenix, AZ 85040 · (602) 425-5000<br />info@krocphoenix.org · Privacy Policy · © The Salvation Army
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #f0f0f2", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px 14px" }}>
          <span className="mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "#999", width: "100%" }}>Affiliate Links</span>
          <a className="link">KrocCenters.org ↗</a>
          <a className="link">Thrift and Donate Goods ↗</a>
          <a className="link">National Recreation ↗</a>
          <a className="link">Donate ↗</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Icon, Nav, useNav, NAV_ITEMS, PH, SectionHead, FilterRow, Carousel, AlertBar,
  MobileHeader, NavDrawer, BottomTabBar, StickyCTA, Hero, PageHero, PricePoints,
  StoryCard, StoryRow, EventCard, CategoryCard, ClassCard, OppCard,
  QuickLinkCard, FeaturedPageCard, PersonCard, IntroBand, MapBlock, FacilityCard,
  CheckList, TierCard, Band, Field,
  Faq, ImageGallery, DonationBand, Pagination, Connect,
});

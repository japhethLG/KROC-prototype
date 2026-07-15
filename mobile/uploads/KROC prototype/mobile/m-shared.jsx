/* ============================================================
   KROC Mobile — shared components, chrome, navigation, cards
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

/* nav structure shared by drawer / overlay / tab bar */
const NAV_ITEMS = [
  { label: "Home", route: "home" },
  { label: "Programs", route: "programs", sub: [
      ["Aquatics", "program-cat"], ["Fitness", "program-cat"], ["Youth", "program-cat"],
      ["Arts", "program-cat"], ["All Programs", "programs"]
  ]},
  { label: "Stories", route: "stories" },
  { label: "Events", route: "events" },
  { label: "Volunteer", route: "volunteers" },
  { label: "Contact Us", route: "contact" },
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

/* ---------- Top bar ---------- */
function MobileHeader({ active, location = "Camden Kroc · Eastern Region", navPattern, onOpenMenu, crumb }) {
  const { navigate } = useNav();
  return (
    <header className="m-topbar">
      <div className="m-topbar-util">
        <span className="loc">
          <span className="pin"><Icon name="pin" size={13} /></span>
          <span className="txt">{location}</span>
        </span>
        <a className="util-cta">Hours &amp; Closures</a>
      </div>
      <div className="m-topbar-main">
        <div className="m-logo" role="img" aria-label="KROC Centers" onClick={() => navigate("home")} />
        <div className="m-topbar-actions">
          <button className="m-iconbtn" aria-label="Search"><Icon name="search" size={19} /></button>
          <button className="m-iconbtn solid-red" aria-label="Donate" style={{ width: "auto", padding: "0 16px", borderRadius: 99, fontSize: 13.5 }} onClick={() => navigate("info")}>Donate</button>
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

/* ---------- Slide-up nav drawer (DS default) ---------- */
function NavDrawer({ open, onClose, active, variant = "sheet" }) {
  const { navigate } = useNav();
  const [sub, setSub] = React.useState(null);
  const go = (r) => { onClose(); navigate(r); };
  const Body = (
    <>
      <div className="m-sheet-head">
        <div className="m-logo" role="img" aria-label="KROC Centers" />
        <button className="m-iconbtn" onClick={onClose} aria-label="Close menu"><Icon name="close" size={18} /></button>
      </div>
      <ul className="m-navlist">
        {NAV_ITEMS.map((n) => (
          <li key={n.label}>
            <button className={"m-navlink" + (active === n.route ? " active" : "") + (sub === n.label ? " open" : "")}
              onClick={() => n.sub ? setSub(sub === n.label ? null : n.label) : go(n.route)}>
              <span>{n.label}</span>
              {n.sub && <span className="chev"><Icon name="chev" size={18} /></span>}
            </button>
            {n.sub && (
              <div className={"m-subnav" + (sub === n.label ? " open" : "")}>
                {n.sub.map(([l, r]) => <a key={l} onClick={() => go(r)}>{l}</a>)}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="m-sheet-cta">
        <a className="btn btn-info" onClick={() => go("contact")}>Find Help</a>
        <a className="btn btn-primary" onClick={() => go("info")}>Donate</a>
      </div>
      <div className="m-sheet-langrow">
        <span>Language</span>
        <span className="m-lang-pill"><Icon name="globe" size={15} /> English <Icon name="chev" size={14} /></span>
      </div>
      <div className="m-sheet-socials">
        <Icon name="fb" size={20} /><Icon name="x" size={20} /><Icon name="li" size={20} /><Icon name="ig" size={20} /><Icon name="yt" size={20} />
      </div>
    </>
  );

  if (variant === "overlay") {
    return (
      <div className={"m-overlay" + (open ? " open" : "")}>
        <div className="m-overlay-top">
          <div className="m-logo" role="img" aria-label="KROC Centers" />
          <button className="m-iconbtn" onClick={onClose} aria-label="Close menu"><Icon name="close" size={20} /></button>
        </div>
        <div className="m-overlay-scroll">
          <ul className="m-navlist">
            {NAV_ITEMS.map((n) => (
              <li key={n.label}>
                <button className={"m-navlink" + (active === n.route ? " active" : "") + (sub === n.label ? " open" : "")}
                  onClick={() => n.sub ? setSub(sub === n.label ? null : n.label) : go(n.route)}>
                  <span>{n.label}</span>{n.sub && <span className="chev"><Icon name="chev" size={20} /></span>}
                </button>
                {n.sub && <div className={"m-subnav" + (sub === n.label ? " open" : "")}>{n.sub.map(([l, r]) => <a key={l} onClick={() => go(r)}>{l}</a>)}</div>}
              </li>
            ))}
          </ul>
          <div className="m-sheet-cta">
            <a className="btn btn-info" onClick={() => go("contact")}>Find Help</a>
            <a className="btn btn-primary" onClick={() => go("info")}>Donate</a>
          </div>
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
        <div className="m-sheet-scroll">{Body}</div>
      </div>
    </>
  );
}

/* ---------- Bottom tab bar ---------- */
function BottomTabBar({ active, onMore }) {
  const { navigate } = useNav();
  const tabs = [
    ["home", "Home", "home"],
    ["programs", "Programs", "grid"],
    ["stories", "Stories", "book"],
    ["events", "Events", "cal"],
  ];
  const activeRoot = ({ "program-cat": "programs", "class": "programs", story: "stories", event: "events", "volunteer-detail": "volunteers" })[active] || active;
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
function Hero({ eyebrow, title, sub, dims = "1400×460", center, short, children, titleClass = "t-hero", icon, badge }) {
  return (
    <section className={"m-hero" + (center ? " center" : "") + (short ? " short" : "")}>
      <div className="hbg" /><span className="dims">{dims} · placeholder</span>
      <div className="hinner">
        {icon && <span className="kroc-icon" style={{ background: "rgba(255,255,255,.12)", border: "1px dashed rgba(255,255,255,.4)", color: "#fff", marginBottom: 12 }}>kroc-icon</span>}
        {badge && <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(255,255,255,.15)", borderRadius: 99, marginBottom: 12, fontSize: 13, fontFamily: "'SF Mono',Menlo,monospace" }}>{badge}</div>}
        {eyebrow && <div className="eyebrow" style={{ color: "rgba(255,255,255,.72)", marginBottom: 10 }}>{eyebrow}</div>}
        <h1 className={titleClass} style={{ margin: "0 0 12px" }}>{title}</h1>
        {sub && <p className="t-body" style={{ color: "rgba(255,255,255,.86)", margin: "0 0 18px" }}>{sub}</p>}
        {children}
      </div>
    </section>
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

function EventCard({ title, date, address = "Camden Kroc Center", past, onClick }) {
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
        <a className="link t-sm">{address}</a>
        <a className="btn btn-secondary btn-sm" style={{ marginTop: 14 }}><Icon name="arrowUR" size={14} /> {past ? "View Recap" : "View Event"}</a>
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
      <a className="btn btn-secondary btn-sm" style={{ alignSelf: "flex-start" }}><Icon name="arrowUR" size={14} /> {cta}</a>
    </div>
  );
}

function ClassCard({ title, kind = "Roster", sched, price, onClick }) {
  const { navigate } = useNav();
  return (
    <div className="card" onClick={onClick || (() => navigate("class"))}>
      <div className="cimg">
        <span className={"pill sm " + (kind === "Drop-In" ? "red-fill" : "red-outline")} style={{ position: "absolute", top: 12, left: 12, zIndex: 3, background: kind === "Drop-In" ? undefined : "#fff" }}>{kind}</span>
        <span className="lbl">16:9</span>
      </div>
      <div className="cbody">
        <h3 className="t-title" style={{ margin: "0 0 6px" }}>{title}</h3>
        <div className="t-sm text-muted" style={{ marginBottom: 4 }}>{sched}</div>
        <div className="t-body" style={{ marginBottom: 12 }}>{price}</div>
        <a className="btn btn-primary btn-sm btn-block">Register</a>
      </div>
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
        <a className="btn btn-secondary btn-sm">Learn More</a>
      </div>
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

/* ---------- Image gallery ---------- */
function ImageGallery({ title, tiles }) {
  const items = tiles || [["1/1", 2, 2], ["3/2", 1, 1], ["3/2", 1, 1], ["4/5", 1, 2], ["16/9", 2, 1], ["3/2", 1, 1]];
  return (
    <div>
      {title && <h2 className="t-h2" style={{ margin: "0 0 14px" }}>{title}</h2>}
      <div className="m-gallery">
        {items.map(([l, cs, rs], i) => (
          <div className="gt" key={i} style={{ gridColumn: `span ${Math.min(cs, 2)}`, gridRow: `span ${rs}` }}><span className="lbl">{l}</span></div>
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

/* ---------- Connect footer ---------- */
function Connect({ crossLink }) {
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
      <div className="ccard">
        <h5>Sign Up for KROC Updates</h5>
        <div className="m-input" style={{ marginBottom: 8 }}><input placeholder="Email address" /></div>
        <div className="m-input" style={{ marginBottom: 12 }}><input placeholder="Phone (optional)" /></div>
        <a className="btn btn-secondary btn-block">Sign Up</a>
      </div>
      <div className="ccard mission">
        <h5>Our Mission</h5>
        <p className="t-sm" style={{ margin: 0, lineHeight: 1.6 }}>KROC Centers exist to deliver excellence in recreation, education, arts, and worship — a place for every member of our community to grow, gather, and thrive.</p>
      </div>
      <div className="navpills">
        {[["Home", "home"], ["Programs", "programs"], ["Stories", "stories"], ["Events", "events"], ["Volunteer", "volunteers"], ["Contact", "contact"]].map(([l, r], i) => (
          <a key={l} className={i === 0 ? "active" : ""} onClick={() => navigate(r)}>{l}</a>
        ))}
      </div>
      <div className="fmeta">
        <div className="socials"><Icon name="fb" size={19} /><Icon name="x" size={19} /><Icon name="li" size={19} /><Icon name="yt" size={19} /><Icon name="ig" size={19} /></div>
        1234 Community Way, Camden NJ 08103<br />1-800-KROC-CTR · Privacy Policy · © KROC Centers
      </div>
    </section>
  );
}

Object.assign(window, {
  Icon, Nav, useNav, NAV_ITEMS, PH, SectionHead, FilterRow, Carousel, AlertBar,
  MobileHeader, NavDrawer, BottomTabBar, StickyCTA, Hero,
  StoryCard, StoryRow, EventCard, CategoryCard, ClassCard, OppCard,
  Faq, ImageGallery, DonationBand, Pagination, Connect,
});

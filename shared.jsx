/* global shared components for KROC prototype frames */

// Primary nav per client review (NAV-1). `pending:true` = page not designed yet
// (NEW-1/3/4/5) → label shown, destination deferred. Search item intentionally skipped.
const NAV_ITEMS = [
  { label:"Home", href:"#" },
  { label:"About Us", href:"#", pending:true },
  { label:"Membership", href:"#", pending:true },
  { label:"Classes", href:"#", mega:{
      index:{ label:"All Classes", href:"#" },
      items:[
        { label:"Aquatics", icon:"water" },
        { label:"Group Fitness", icon:"dumbbell" },
        { label:"Youth Programs", icon:"users" },
        { label:"Arts & Crafts", icon:"palette" },
        { label:"Music & Dance", icon:"music" },
        { label:"Sports & Rec", icon:"ball" },
        { label:"Health & Wellness", icon:"heart" },
        { label:"Aging Well (55+)", icon:"sun" },
      ],
  }},
  { label:"Events", href:"#", mega:{
      index:{ label:"All Events", href:"#" },
      items:[
        { label:"Community Events", icon:"users" },
        { label:"Fundraisers", icon:"heart" },
        { label:"Holiday & Seasonal", icon:"gift" },
        { label:"Performances", icon:"ticket" },
        { label:"Workshops", icon:"book" },
        { label:"Sports Tournaments", icon:"trophy" },
        { label:"Family Days", icon:"star" },
        { label:"Special Events", icon:"cal" },
      ],
  }},
  { label:"Rentals", href:"#", pending:true },
  { label:"Church", href:"#", pending:true },
];

function Icon({ name, size=18, color }) {
  const s = { width:size, height:size, display:"inline-flex", alignItems:"center", justifyContent:"center", flex:`0 0 ${size}px`, color: color||"currentColor" };
  const paths = {
    pin:    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>,
    search: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
    arrow:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
    arrowUR:<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg>,
    chev:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>,
    chevL:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6"/></svg>,
    chevR:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6"/></svg>,
    /* class & event category icons — mega menu (NAV-2) */
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
    book:     <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 0-2 2z"/><path d="M5 20a2 2 0 0 1 2-2h11"/></svg>,
    trophy:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M9 20h6M10.2 20l.4-3.4M13.8 20l-.4-3.4"/></svg>,
    star:     <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3.5l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 20.1l1.4-6.1-4.7-4.1 6.2-.6z"/></svg>,
    check:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m5 13 4 4L19 7"/></svg>,
    upload: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/></svg>,
    warn:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 2 21h20L12 3z"/><path d="M12 10v5M12 18v.5"/></svg>,
    info:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v.5M11 12h1v5h1"/></svg>,
    emerg:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11h4l3-8 4 18 3-10h4"/></svg>,
    close:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6 6 18"/></svg>,
    mail:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>,
    phone:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>,
    share:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8 11 8-4M8 13l8 4"/></svg>,
    lock:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></svg>,
    plus:   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>,
    minus:  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>,
    cal:    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>,
    play:   <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M8 5v14l11-7z"/></svg>,
    drag:   <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>,
    fb:     <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.2C16.6 1 15.3 1 14 1c-3 0-5 2-5 5v4H6v4h3v8h4z"/></svg>,
    x:      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="m17 3 4 0-7 8 8 10h-6l-5-7-5 7H2l8-10L3 3h6l4 6 4-6z"/></svg>,
    li:     <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path fill="#fff" d="M7 10v7h2v-7H7zm1-3.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM11 10v7h2v-3.5c0-1 .5-1.5 1.3-1.5s1.2.6 1.2 1.5V17h2v-4c0-2-1-3-2.5-3-1 0-1.6.4-2 1V10h-2z"/></svg>,
    ig:     <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>,
    yt:     <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><rect x="2" y="6" width="20" height="12" rx="3"/><path fill="#fff" d="m10 9 6 3-6 3z"/></svg>,
  };
  return <span style={s}>{paths[name]||null}</span>;
}

function AlertBar({ variant="warning", text, cta, dismissible=true, kind }) {
  const ic = { warning:"warn", info:"info", danger:"emerg", navy:"info", dark:"info" }[variant] || "warn";
  const cls = variant === "warning" ? "kroc-alert" : `kroc-alert ${variant}`;
  return (
    <div className={cls}>
      <span className="icon"><Icon name={ic} size={18}/></span>
      <span>{text}</span>
      {cta && <button className="a-btn">{cta}</button>}
      {dismissible && <button className="a-close" aria-label="Dismiss"><Icon name="close" size={16}/></button>}
    </div>
  );
}

function Header({ active="Home", location="Eastern Region — Camden, NJ" }) {
  // NAV-2: mega menu for items with a `mega` definition (Classes, Events).
  const [openMega, setOpenMega] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!openMega) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpenMega(null); };
    const onKey = (e) => { if (e.key === "Escape") setOpenMega(null); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [openMega]);
  const mega = NAV_ITEMS.find(n => n.label === openMega && n.mega);
  return (
    <header className="kroc-header" ref={ref}>
      <div className="kroc-header-util">
        <div className="kroc-loc">
          <span className="pin"><Icon name="pin" size={14}/></span>
          <span>{location}</span>
        </div>
        <div className="kroc-util-links">
          {/* NAV-1: client replaced "Visit National Site" + "Find a Thrift Store" with Careers + Donate (pages pending: NEW-6, NEW-7) */}
          <a>Careers</a>
          <span className="sep">|</span>
          <a>Donate</a>
          <span className="sep">|</span>
          <a>Hours & Closures</a>
        </div>
      </div>
      <div className="kroc-header-main">
        <div className="kroc-logo" role="img" aria-label="KROC Centers"/>
        <nav className="kroc-nav">
          {NAV_ITEMS.map(n => {
            const isOpen = openMega === n.label;
            if (n.mega) {
              return (
                <a key={n.label}
                   className={(active === n.label ? "active " : "") + "has-mega" + (isOpen ? " open" : "")}
                   role="button" aria-haspopup="true" aria-expanded={isOpen}
                   onClick={() => setOpenMega(o => o === n.label ? null : n.label)}>
                  {n.label}<span className="chev"><Icon name="chev" size={15}/></span>
                </a>
              );
            }
            return <a key={n.label} className={active === n.label ? "active" : ""}>{n.label}</a>;
          })}
        </nav>
        <div className="kroc-header-cta">
          {/* NAV-3: CTAs changed from Find Help / Donate → Become a Member / Purchase Classes */}
          <a className="btn btn-info btn-sm">Become a Member</a>
          <a className="btn btn-primary btn-sm">Purchase Classes</a>
        </div>

        {mega && (
          <div className="kroc-mega" role="region" aria-label={mega.label + " menu"}>
            <div className="kroc-mega-head">
              <span className="kroc-mega-title">{mega.label}</span>
              <a className="kroc-mega-all">{mega.mega.index.label} <Icon name="arrowUR" size={15}/></a>
            </div>
            <div className="kroc-mega-grid">
              {mega.mega.items.map(it => (
                <a key={it.label} className="kroc-mega-item">
                  <span className="ic"><Icon name={it.icon} size={20}/></span>
                  <span>{it.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Connect({ crossLink }) {
  return (
    <section className="kroc-connect">
      <div className="hero">
        <div className="ph-bg"/>
        <div className="row top">
          <div className="kroc-logo kroc-logo--on-dark" style={{width:136,height:64}} role="img" aria-label="KROC Centers"/>
          <div className="dims">Image: 1400 × 366 · 16:9</div>
        </div>
        <div className="row">
          <h2>Connect With Us</h2>
          <div className="contact-card">
            <span>Having Issues?</span>
            <a className="btn btn-primary btn-sm">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="grid">
        {/* NAV-4: newsletter redesigned as a vendor-form callout — Kroc teams use different email
            providers (Mailchimp / Constant Contact / Emma), so this links out instead of an inline form */}
        <div className="card newsletter">
          <div className="nl-text">
            <div className="nl-head"><span className="nl-ic"><Icon name="mail" size={18}/></span><h5>Sign Up for KROC Updates</h5></div>
            <p>Classes, events, and community news — straight to your inbox. Sign-ups are handled by our email partner.</p>
          </div>
          <a className="btn btn-primary nl-btn">Sign Up for Updates <Icon name="arrowUR" size={15}/></a>
        </div>
        {/* NAV-4: official Salvation Army Mission statement */}
        <div className="card mission">
          <h5>The Salvation Army Mission</h5>
          <p className="t-body-md" style={{margin:0,lineHeight:1.55}}>
            The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human needs in His name without discrimination.
          </p>
        </div>
      </div>
      <nav className="nav-pills">
        <a className="active">Home</a>
        <a>Ways To Give</a>
        <a>About Us</a>
        <a>Careers</a>{/* NAV-4: was "Employment" → aligned to new nav */}
        <a>Classes</a>{/* NAV-4: was "Programs" → aligned to new nav */}
        <a>Volunteer</a>
        <a>Accessibility</a>
        {crossLink && <span style={{marginLeft:"auto",color:"#575757",fontSize:13}}>{crossLink}</span>}
      </nav>
      <div className="footer-meta">
        <div className="socials">
          <span className="s" title="Facebook"><Icon name="fb" size={18} color="#1C1B1F"/></span>
          <span className="s" style={{background:"transparent",color:"#1C1B1F"}}><Icon name="x" size={18}/></span>
          <span className="s" style={{background:"transparent",color:"#1C1B1F"}}><Icon name="li" size={18}/></span>
          <span className="s" style={{background:"transparent",color:"#1C1B1F"}}><Icon name="yt" size={18}/></span>
          <span className="s" style={{background:"transparent",color:"#1C1B1F"}}><Icon name="ig" size={18}/></span>
        </div>
        <div style={{textAlign:"center"}}>
          {/* NAV-4: Phoenix instance info + email + Salvation Army copyright */}
          1375 E. Broadway Road, Phoenix, AZ 85040 · (602) 425-5000 · info@krocphoenix.org · Privacy Policy · © The Salvation Army
        </div>
        <div style={{color:"#575757"}}>v1.0</div>
      </div>
      <div className="affiliates">
        <span className="ttl">Affiliate Links</span>
        <a>KrocCenters.org ↗</a>
        <a>Thrift and Donate Goods ↗</a>{/* NAV-4: added per comment */}
        <a>National Recreation ↗</a>
        <a>Donate ↗</a>
      </div>
    </section>
  );
}


/* Donation Block — red/navy/dark mission band for donation conversion.
   Drag-in block; renders Title + Body + up to two CTAs. */
function DonationBlock({ title, body, primaryCta="Donate Now", primaryUrl, secondaryCta, secondaryUrl, variant="red" }){
  const bg = variant === "navy" ? "var(--kroc-navy)" : variant === "dark" ? "#1C1B1F" : "var(--kroc-red)";
  return (
    <div style={{marginTop:48}}>
      <div style={{margin:"0 16px",borderRadius:20,overflow:"hidden",background:bg,color:"#fff",padding:"48px",display:"grid",gridTemplateColumns:"3fr 2fr",gap:32,alignItems:"center"}}>
        <div>
          <h2 className="t-heading-lg" style={{margin:"0 0 10px"}}>{title}</h2>
          {body && <p style={{margin:0,opacity:.9,maxWidth:540}}>{body}</p>}
        </div>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <a className="btn btn-light" href={primaryUrl}>{primaryCta}</a>
          {secondaryCta && <a className="btn btn-outline-light" href={secondaryUrl}>{secondaryCta}</a>}
        </div>
      </div>
    </div>
  );
}

/* Welcome / Intro Band (BLK-1) — text(+optional photo) section, same pattern as the Facility Section.
   Shared by the Block Library demo AND the homepage membership callout so they stay identical.
   variant "color" = text-only over a palette background; "photo" = text-left + photo-right. */
function IntroBand({ eyebrow, title, body, primaryCta, secondaryCta, variant="color", bg="var(--kroc-navy)", photoLabel="3:2 · image" }){
  if (variant === "photo") {
    return (
      <div style={{ background:"#fff", borderRadius:20, overflow:"hidden", display:"grid", gridTemplateColumns:"7fr 5fr" }}>
        <div style={{ padding:"44px 48px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
          {eyebrow && <div style={{ fontSize:12, letterSpacing:".14em", textTransform:"uppercase", fontWeight:500, marginBottom:12, color:"var(--kroc-red)" }}>{eyebrow}</div>}
          <h3 className="t-heading-md" style={{ margin:"0 0 14px" }}>{title}</h3>
          {body && <p style={{ fontSize:15, lineHeight:1.6, color:"#1C1B1F", margin:"0 0 22px" }}>{body}</p>}
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            {primaryCta && <a className="btn btn-primary">{primaryCta}</a>}
            {secondaryCta && <a className="btn btn-outline-primary">{secondaryCta}</a>}
          </div>
        </div>
        <div className="img-ph" style={{ aspectRatio:"unset", borderRadius:0, minHeight:320 }}><span className="label">{photoLabel}</span></div>
      </div>
    );
  }
  return (
    <div style={{ background:bg, color:"#fff", borderRadius:20, padding:"48px 56px" }}>
      <div style={{ maxWidth:720 }}>
        {eyebrow && <div style={{ fontSize:12, letterSpacing:".14em", textTransform:"uppercase", fontWeight:500, marginBottom:12, color:"rgba(255,255,255,.72)" }}>{eyebrow}</div>}
        <h3 className="t-heading-md" style={{ margin:"0 0 14px", color:"#fff" }}>{title}</h3>
        {body && <p style={{ fontSize:16, lineHeight:1.6, color:"rgba(255,255,255,.85)", margin:"0 0 24px" }}>{body}</p>}
        <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
          {primaryCta && <a className="btn btn-light">{primaryCta}</a>}
          {secondaryCta && <a className="btn btn-outline-light">{secondaryCta}</a>}
        </div>
      </div>
    </div>
  );
}

/* Latest Stories — editorial featured + side-stack layout for the homepage.
   Reads from [stories] pageset. */
function LatestStories({ title="Latest Stories", viewAllLabel="View All Stories", featured={}, stories=[] }){
  return (
    <div className="kroc-main" style={{marginTop:48}}>
      <div style={{maxWidth:1248,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
          <h2 className="t-heading-md" style={{margin:0}}>{title}</h2>
          <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>{viewAllLabel} <Icon name="arrowUR" size={14}/></a>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"7fr 5fr",gap:16,alignItems:"stretch"}}>
          {/* Featured story */}
          <div style={{position:"relative",borderRadius:20,overflow:"hidden",minHeight:540,background:"#1C1B1F",boxShadow:"0 0.125rem 0.25rem rgba(0,0,0,.075)"}}>
            <div className="img-ph" style={{position:"absolute",inset:0,borderRadius:0}}>
              <span className="label" style={{position:"absolute",right:14,top:12,bottom:"auto"}}>{featured.imageDims || "16:11 · 720×540"}</span>
            </div>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,.78) 100%)"}}/>
            <span className="kroc-chip" style={{position:"absolute",left:24,top:24,zIndex:3}}>
              <span className="ic"/>{featured.category}
            </span>
            <div style={{position:"absolute",left:28,right:28,bottom:24,color:"#fff",zIndex:2}}>
              <h3 style={{fontSize:38,lineHeight:1.1,margin:"0 0 14px",fontWeight:400,maxWidth:520,letterSpacing:"-.01em"}}>{featured.title}</h3>
              <p style={{fontSize:15,lineHeight:1.6,margin:"0 0 22px",maxWidth:520,color:"rgba(255,255,255,.88)"}}>{featured.excerpt}</p>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap",paddingTop:16,borderTop:"1px solid rgba(255,255,255,.18)"}}>
                <div style={{fontSize:13,color:"rgba(255,255,255,.82)"}}>{featured.date} &nbsp;|&nbsp; {featured.author}</div>
                <a style={{color:"#fff",fontSize:14,display:"inline-flex",alignItems:"center",gap:6,cursor:"pointer"}}>Read Article <Icon name="arrowUR" size={14}/></a>
              </div>
            </div>
          </div>

          {/* Side stack: 3 compact cards */}
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {stories.slice(0,3).map((s,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:16,overflow:"hidden",display:"grid",gridTemplateColumns:"160px 1fr",flex:1,boxShadow:"0 0.125rem 0.25rem rgba(0,0,0,.06)"}}>
                <div className="img-ph" style={{aspectRatio:"auto",width:"100%",height:"100%",borderRadius:0}}>
                  <span className="kroc-chip" style={{position:"absolute",top:10,left:10,zIndex:3,fontSize:11,padding:"4px 9px"}}>
                    <span className="ic" style={{width:12,height:12,flex:"0 0 12px"}}/>{s.category}
                  </span>
                  <span className="label" style={{fontSize:9,position:"absolute",right:6,bottom:6,zIndex:2}}>4:3</span>
                </div>
                <div style={{padding:"16px 18px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:8}}>
                  <div>
                    <h4 style={{fontSize:15.5,margin:"0 0 6px",fontWeight:500,lineHeight:1.3}}>{s.title}</h4>
                    <div style={{fontSize:12,color:"#575757"}}>{s.date || "March 2024"} · {s.author || "By Dale Bannon"}</div>
                  </div>
                  <a style={{fontSize:12.5,color:"var(--kroc-navy)",display:"inline-flex",alignItems:"center",gap:4,cursor:"pointer",fontWeight:500}}>Read Article <Icon name="arrowUR" size={11}/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* FAQ accordion — drag-in block [faqs]. Default first item open. */
/* Reusable page header (PAGE-3 item 1) — the Informational hero can be a palette-color
   band OR a background-image hero like Class Detail / All Programs.
   variant: "color" (palette band) | "image" (photo hero). bg: palette token for color variant. */
function PageHero({ variant="color", bg="var(--kroc-red)", eyebrow, title, subtitle, align="center" }){
  const inner = (
    <React.Fragment>
      {eyebrow && <div style={{fontSize:11,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.78)",marginBottom:10}}>{eyebrow}</div>}
      <h1 className="t-heading-xl" style={{margin: align==="center" ? "0 auto 14px" : "0 0 14px", maxWidth: align==="center" ? 760 : undefined, color:"#fff"}}>{title}</h1>
      {subtitle && <p style={{margin: align==="center" ? "0 auto" : 0, fontSize:17, color:"rgba(255,255,255,.92)", maxWidth:640, lineHeight:1.6}}>{subtitle}</p>}
    </React.Fragment>
  );
  if(variant==="image"){
    return (
      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0, aspectRatio:"unset", minHeight:340}}>
          <div className="ph-bg"><div className="dims">1400×420 · 16:9 · hero image</div></div>
          <div className="inner" style={{textAlign:align, ...(align==="center" ? {margin:"0 auto"} : {})}}>{inner}</div>
        </section>
      </div>
    );
  }
  return (
    <div style={{margin:"24px 16px 0", borderRadius:20, background:bg, color:"#fff", padding:"56px 48px", textAlign:align}}>
      {inner}
    </div>
  );
}

function FaqList({ title="Frequently Asked Questions", items=[], defaultOpen=0 }){
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div>
      {title && <h3 className="t-heading-md" style={{margin:"0 0 16px"}}>{title}</h3>}
      <div style={{background:"#fff",borderRadius:20,overflow:"hidden"}}>
        {items.map(([q,a],i)=>(
          <div key={i} style={{borderTop:i?"1px solid #eaeaee":"none"}}>
            <button onClick={()=>setOpen(open===i?-1:i)}
              style={{width:"100%",textAlign:"left",background:"none",border:0,padding:"22px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,cursor:"pointer",fontFamily:"inherit",fontSize:16,color:"#1C1B1F"}}>
              <span>{q}</span>
              <span style={{flex:"0 0 24px",width:24,height:24,borderRadius:"50%",background:"#EFEFEF",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:14,transform:open===i?"rotate(45deg)":"none",transition:"transform .2s"}}>+</span>
            </button>
            {open===i && (
              <div style={{padding:"0 28px 24px",color:"#1C1B1F",fontSize:14.5,lineHeight:1.65,maxWidth:680}}>{a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Image gallery — drag-in block [image_gallery].
   variant: "mosaic" (varied tile spans, masonry) | "grid" (uniform equal tiles). */
function ImageGallery({ title, tiles, rowHeight=160, variant="mosaic" }){
  const fallback = [["1 / 1",2,2],["3 / 2",1,1],["3 / 2",1,1],["4 / 5",1,2],["16 / 9",2,1],["3 / 2",1,1],["3 / 2",1,1]];
  const items = tiles || fallback;
  const grid = variant==="grid";
  return (
    <div>
      {title && <h3 className="t-heading-md" style={{margin:"0 0 16px"}}>{title}</h3>}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridAutoRows:`${rowHeight}px`,gridAutoFlow:"dense",gap:10}}>
        {items.map(([label,cs,rs],i)=>(
          <div key={i} className="img-ph"
            style={{gridColumn: grid ? "span 1" : `span ${cs}`, gridRow: grid ? "span 1" : `span ${rs}`, aspectRatio:"unset",borderRadius:14,cursor:"pointer"}}>
            <span className="label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* generic card */
function StoryCard({ category="Recreation", title="Story Title", date="March 2024", author="By Dale Bannon", body="Lorem ipsum dolor sit amet consectetur. Id mattis et praesent lectus aliquet enim morbi quis diam. Iaculis convallis erat eu pellentesque morbi et.", cta="Read Article" }){
  return (
    <div className="kroc-card">
      <div className="img">
        <div className="chip"><span className="ic"/>{category}</div>
        <span className="label">16:9 · 456×256</span>
        <div className="meta-row"><span>{date}</span><span>{author}</span></div>
      </div>
      <div className="body">
        <h3 className="title">{title}</h3>
        <p className="clamp-3">{body}</p>
      </div>
      <div className="footer">
        <a className="btn btn-secondary btn-sm btn-block"><Icon name="arrowUR" size={14}/> {cta}</a>
      </div>
    </div>
  );
}

function EventCard({ title="Title", date="August 9th, 2024 | 6PM - 8PM", desc=null, address="1234 Address Lane, 75035 TX", cta="View Event", past=false, memberPrice=null, publicPrice=null }){
  return (
    <div className="kroc-card" style={past?{opacity:.9}:undefined}>
      <div className="img">
        {past && <span style={{position:"absolute",top:14,left:14,zIndex:2,display:"inline-flex",alignItems:"center",gap:6,padding:"4px 11px",borderRadius:999,background:"rgba(28,27,31,.72)",color:"#fff",fontSize:11.5,fontWeight:500,letterSpacing:".02em"}}>Past Event</span>}
        <span className="label">16:9 · 456×256</span>
      </div>
      <div className="body">
        <h3 className="title">{title}</h3>
        <p style={{color:"#575757",marginBottom:6}}>{date}</p>
        {desc && <p style={{fontSize:14,color:"#1C1B1F",lineHeight:1.5,marginBottom:8}}>{desc}</p>}
        <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:13.5,cursor:"pointer"}}>{address}</a>
        {(memberPrice||publicPrice) && <div style={{marginTop:12}}><PricePoints member={memberPrice} publicPrice={publicPrice} size="card"/></div>}
      </div>
      <div className="footer">
        <a className="btn btn-secondary btn-sm btn-block"><Icon name="arrowUR" size={14}/> {past?"View Recap":cta}</a>
      </div>
    </div>
  );
}

function OppCard({ title="Volunteer Opportunity Title", city="Camden, NJ", body="Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", skeleton=false }){
  return (
    <div className="kroc-card" style={{padding:0}}>
      <div className="body" style={{padding:"24px 28px"}}>
        <h3 className="title" style={{marginBottom:4}}>{skeleton ? <span className="skel" style={{width:220}}/> : title}</h3>
        <div style={{color:"#575757",fontSize:13.5,marginBottom:10}}>{city}</div>
        <p className="clamp-3" style={{color:"#1C1B1F"}}>{skeleton ? <><span className="skel" style={{width:"100%",height:12,marginBottom:6}}/><span className="skel" style={{width:"85%",height:12}}/></> : body}</p>
      </div>
      <div className="footer" style={{padding:"0 28px 24px"}}>
        <a className="btn btn-secondary btn-sm"><Icon name="arrowUR" size={14}/> View Opportunity</a>
      </div>
    </div>
  );
}

function CategoryCard({ name="Aquatics", body="Swim lessons, lap swim, and aquatic fitness for every age and ability.", cta="View Category" }){
  return (
    <div className="kroc-card" style={{padding:"24px"}}>
      <span className="kroc-icon lg" style={{marginBottom:16}}>kroc-icon</span>
      <h3 className="title" style={{fontSize:22}}>{name}</h3>
      <p style={{color:"#1C1B1F",fontSize:13.5,marginBottom:18,marginTop:6}}>{body}</p>
      <a className="btn btn-secondary btn-sm" style={{alignSelf:"flex-start"}}><Icon name="arrowUR" size={14}/> {cta}</a>
    </div>
  );
}

function Pagination(){
  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:4,background:"#fff",borderRadius:999,padding:"4px 6px"}}>
      {[1,2,3,4,5].map(n => (
        <span key={n} style={{
          width:36,height:36,borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",
          fontSize:14,cursor:"pointer",
          background:n===1?"var(--kroc-red)":"transparent",
          color:n===1?"#fff":"#1C1B1F"
        }}>{n}</span>
      ))}
      <span style={{padding:"0 8px",color:"#575757"}}>…</span>
      <span style={{width:36,height:36,borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--kroc-red)",color:"#fff",cursor:"pointer"}}><Icon name="arrow" size={16}/></span>
    </div>
  );
}

function FrameHead({ tag, name, meta }){
  return (
    <div className="frame-label">
      <span className="tag">{tag}</span>
      <span className="name">{name}</span>
      {meta && <span className="meta">{meta}</span>}
    </div>
  );
}

function PinCallout({ x, y, children, anchor="topleft" }){
  const style = { position:"absolute", left:x, top:y };
  return <div className="pin-callout" style={style}>{children}</div>;
}

/* Class card (BLK-2) — listing card with two variants:
   - default: 16:9 photo with the program-type pill overlaid
   - noImage: a branded color cover (same 16:9 footprint) carrying the type pill + class title,
     so the grid stays aligned and it reads as intentional rather than a missing photo.
   Clicking anywhere on the card opens a pop-up with the class marketing description. */
/* Map block (HOME-4) — extracted from the homepage "Find a center" section so it can be reused.
   variant: "locator" (apex site — multi-center finder + City/ZIP search) |
            "single" (individual instance — one location + Get Directions, e.g. About Us NEW-3). */
function MapBlock({ variant="single", title, body, address, cta="Get Directions" }){
  const locator = variant==="locator";
  const pins = locator
    ? [[100,110],[170,80],[230,140],[290,100],[150,170],[260,180],[330,150],[80,180]]
    : [[205,120]];
  return (
    <div style={{ background:"#fff", borderRadius:20, padding:32, display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, alignItems:"center" }}>
      <div>
        <h2 className="t-heading-md" style={{ margin:"0 0 12px" }}>{title}</h2>
        {body && <p style={{ color:"#1C1B1F", fontSize:14.5, marginBottom:20 }}>{body}</p>}
        {locator ? (
          <div style={{ display:"flex", gap:10 }}>
            <div className="kroc-input with-icon" style={{ flex:1 }}><input placeholder="City or ZIP"/></div>
            <a className="btn btn-secondary">Find Center</a>
          </div>
        ) : (
          <React.Fragment>
            {address && <div style={{ fontSize:14.5, color:"#1C1B1F", marginBottom:14, lineHeight:1.5 }}>{address}</div>}
            <a className="btn btn-secondary">{cta}</a>
          </React.Fragment>
        )}
      </div>
      <div style={{ aspectRatio:"5/3", background:"#EFEFEF", borderRadius:16, position:"relative", overflow:"hidden" }}>
        <svg viewBox="0 0 400 240" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
          <path d="M30 70 Q90 50 140 80 T260 70 T380 110 L380 200 Q310 220 250 200 T120 210 T20 190 Z" fill="#dcdcdf" stroke="#c4c4c8"/>
          {pins.map(([x,y],i)=>(
            <g key={i} transform={`translate(${x},${y})`}>
              <path d="M0-14 a8 8 0 1 1 0-.01 z" fill="#002056"/>
              <circle cx="0" cy="-8" r="3" fill="#fff"/>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* Featured Pages / Quick Links card (BLK-5 / HOME-3). media: "icon" | "image".
   icon variant sits on a tinted 4:3 panel of the same footprint so grids stay aligned. */
/* media: icon | image (BLK-5).
   variant: "full" (icon/image panel + title + body + CTA — homepage "Get Started", About Us, etc.)
          | "compact" (quick-link: red-tinted icon chip + label, whole card clickable —
            homepage Quick Links + Membership section jump-nav). compact uses icon + title only. */
function FeaturedPageCard({ title, body, cta, media="image", icon=null, variant="full" }){
  if (variant === "compact") {
    return (
      <a style={{ background:"#fff", borderRadius:16, padding:"18px 14px", display:"flex", flexDirection:"column", alignItems:"center", gap:10, textAlign:"center", cursor:"pointer", textDecoration:"none", color:"#1C1B1F" }}>
        <span style={{ width:42, height:42, borderRadius:"50%", background:"#FFEBEB", color:"var(--kroc-red)", display:"flex", alignItems:"center", justifyContent:"center" }}><Icon name={icon} size={20}/></span>
        <span style={{ fontSize:12.5, lineHeight:1.25 }}>{title}</span>
      </a>
    );
  }
  return (
    <div className="kroc-card" style={{ padding: 0 }}>
      {media === "icon" ? (
        <div style={{ aspectRatio: "4/3", background: "#EEF2F8", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--kroc-navy)" }}><Icon name={icon} size={54} /></div>
      ) : (
        <div className="img" style={{ aspectRatio: "4/3" }}><span className="label">4:3 · 320×240</span></div>
      )}
      <div className="body" style={{ padding: "20px 22px" }}>
        <div style={{ fontSize: 18, marginBottom: 6 }}>{title}</div>
        <p style={{ fontSize: 13.5, color: "#1C1B1F", margin: "0 0 14px", lineHeight: 1.5 }}>{body}</p>
        <a className="btn btn-secondary btn-sm">{cta}</a>
      </div>
    </div>
  );
}

/* Member / Public price points (PAGE-2 / PAGE-7 item 2).
   size: "detail" (sidebar — "Price" label + large values) | "card" (compact, no label).
   dynamic = show the Traction Rec "dynamic" tag (detail size only). */
function PricePoints({ member, publicPrice, dynamic=false, size="detail" }){
  const card = size==="card";
  const label = { fontSize:11, color:"#575757", textTransform:"uppercase", letterSpacing:".04em", marginBottom:2 };
  return (
    <div>
      {!card && <div style={{ fontSize:13, color:"#575757", marginBottom:6 }}>Price{dynamic && <span style={{ fontSize:11, fontFamily:"'SF Mono',Menlo,monospace", color:"#999", marginLeft:6 }}>dynamic</span>}</div>}
      <div style={{ display:"flex", gap: card ? 18 : 28, marginBottom: card ? 0 : 14 }}>
        {member && <div><div style={label}>Members</div><div style={{ fontSize: card ? 14 : 20 }}>{member}</div></div>}
        {publicPrice && <div><div style={label}>Public</div><div style={{ fontSize: card ? 14 : 20 }}>{publicPrice}</div></div>}
      </div>
    </div>
  );
}

/* dates: roster session range, e.g. "8 weeks · Sep 8 – Nov 3, 2026" (PAGE-2 item 1).
   memberPrice / publicPrice: split price points (PAGE-2 item 2); falls back to `price`. */
function ClassCard({ title, kind="Roster", sched, dates=null, price, memberPrice=null, publicPrice=null, desc, noImage=false }){
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    if(!open) return;
    const onKey = (e)=>{ if(e.key==="Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return ()=>document.removeEventListener("keydown", onKey);
  },[open]);
  const pillCls = `pill sm ${kind==="Drop-In" ? "red-fill" : "red-outline"}`;
  const clickable = !!desc;
  const split = memberPrice || publicPrice;
  const priceEl = split ? (
    <div style={{ display:"flex", gap:18 }}>
      {memberPrice && <div><div style={{ fontSize:11, color:"#575757", textTransform:"uppercase", letterSpacing:".04em" }}>Members</div><div style={{ fontSize:14 }}>{memberPrice}</div></div>}
      {publicPrice && <div><div style={{ fontSize:11, color:"#575757", textTransform:"uppercase", letterSpacing:".04em" }}>Public</div><div style={{ fontSize:14 }}>{publicPrice}</div></div>}
    </div>
  ) : <div style={{ fontSize:14 }}>{price}</div>;
  return (
    <div className={"kroc-card" + (clickable ? " kroc-card-click" : "")} style={{ padding:0 }}
         onClick={clickable ? ()=>setOpen(true) : undefined}
         role={clickable ? "button" : undefined} tabIndex={clickable ? 0 : undefined}
         onKeyDown={clickable ? (e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setOpen(true); } } : undefined}>
      {noImage ? (
        <div style={{ aspectRatio:"16/9", position:"relative", overflow:"hidden", background:"linear-gradient(135deg, var(--kroc-navy), #00112e)", display:"flex", alignItems:"flex-end", padding:"18px 20px" }}>
          <span className={pillCls} style={{ position:"absolute", top:14, left:14 }}>{kind}</span>
          <h4 style={{ margin:0, color:"#fff", fontSize:22, fontWeight:500, lineHeight:1.15, letterSpacing:"-.01em" }}>{title}</h4>
        </div>
      ) : (
        <div className="img" style={{ aspectRatio:"16/9", position:"relative" }}>
          <span className={pillCls} style={{ position:"absolute", top:14, left:14 }}>{kind}</span>
          <span className="label">16:9 · class hero</span>
        </div>
      )}
      <div className="body" style={{ padding:"18px 20px", display:"flex", flexDirection:"column", flex:1 }}>
        {!noImage && <div style={{ fontSize:17, marginBottom:6 }}>{title}</div>}
        <div style={{ fontSize:13, color:"#575757", marginBottom: dates ? 3 : 6 }}>{sched}</div>
        {dates && <div style={{ fontSize:12.5, color:"#575757", marginBottom:8, display:"flex", alignItems:"center", gap:5 }}><Icon name="cal" size={13}/> {dates}</div>}
        <div style={{ marginBottom:14 }}>{priceEl}</div>
        {/* marginTop:auto anchors Register to the bottom so it's uniform across cards of equal height */}
        <a className="btn btn-primary btn-sm" style={{ marginTop:"auto", alignSelf:"flex-start" }} onClick={(e)=>e.stopPropagation()}>Register</a>
      </div>

      {open && (
        <div onClick={(e)=>{ e.stopPropagation(); setOpen(false); }} style={{ position:"fixed", inset:0, background:"rgba(28,27,31,.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000, padding:24 }}>
          <div onClick={(e)=>e.stopPropagation()} role="dialog" aria-modal="true" style={{ background:"#fff", borderRadius:20, maxWidth:520, width:"100%", padding:"32px 36px", boxShadow:"0 30px 80px rgba(0,0,0,.3)", position:"relative" }}>
            <button onClick={()=>setOpen(false)} aria-label="Close" style={{ position:"absolute", top:16, right:16, border:0, background:"var(--kroc-area)", width:32, height:32, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"#1C1B1F" }}><Icon name="close" size={16}/></button>
            <span className={pillCls}>{kind}</span>
            <h3 className="t-heading-md" style={{ margin:"12px 0 6px" }}>{title}</h3>
            <div style={{ fontSize:13.5, color:"#575757", marginBottom: dates ? 3 : 14 }}>{sched}</div>
            {dates && <div style={{ fontSize:13, color:"#575757", marginBottom:14, display:"flex", alignItems:"center", gap:6 }}><Icon name="cal" size={14}/> {dates}</div>}
            <div style={{ marginBottom:18 }}>{priceEl}</div>
            <p style={{ fontSize:14.5, lineHeight:1.65, color:"#1C1B1F", margin:"0 0 24px" }}>{desc}</p>
            <div style={{ display:"flex", gap:12 }}>
              <a className="btn btn-primary" onClick={(e)=>e.stopPropagation()}>Register</a>
              <a className="btn btn-outline-primary" onClick={()=>setOpen(false)}>Close</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Facility / Location card (BLK-7) — reusable for facility pages and Rentals (NEW-4).
   photos: array of labels (>1 → carousel arrows + dots). side: "left" | "right" photo position.
   hours: array of [day, ranges] where ranges is an array of time strings (stacked) or "CLOSED";
          null = no-hours variant (rentals). closure: message string → replaces hours with a status note.
   status: { tone:"open"|"closed", label }. cta: label string or null (optional). */
function FacilityCard({ title, body, photos=["3:2 · facility"], side="left", pills=[], hours=null, closure=null, status=null, cta=null }){
  const [idx, setIdx] = React.useState(0);
  const n = photos.length;
  const go = (d) => setIdx(i => (i + d + n) % n);
  const arrow = { position:"absolute", top:"50%", transform:"translateY(-50%)", width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.92)", border:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"#1C1B1F", boxShadow:"0 2px 8px rgba(0,0,0,.18)", zIndex:2 };
  const photoEl = (
    <div style={{ position:"relative", minHeight:300, overflow:"hidden" }}>
      <div className="img-ph" style={{ position:"absolute", inset:0, borderRadius:0, aspectRatio:"unset" }}><span className="label">{photos[idx]}</span></div>
      {n > 1 && (
        <React.Fragment>
          <button onClick={()=>go(-1)} aria-label="Previous photo" style={{ ...arrow, left:12 }}><Icon name="chevL" size={18}/></button>
          <button onClick={()=>go(1)} aria-label="Next photo" style={{ ...arrow, right:12 }}><Icon name="chevR" size={18}/></button>
          <div style={{ position:"absolute", bottom:12, left:0, right:0, display:"flex", justifyContent:"center", gap:6, zIndex:2 }}>
            {photos.map((_, i) => <span key={i} style={{ width:7, height:7, borderRadius:"50%", background: i===idx ? "#fff" : "rgba(255,255,255,.55)" }}/>)}
          </div>
        </React.Fragment>
      )}
    </div>
  );
  const badge = status ? (
    <span style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"4px 11px", borderRadius:999, fontSize:12, fontWeight:500, background: status.tone==="closed" ? "#FBEAEA" : "#E7F4EA", color: status.tone==="closed" ? "#B42318" : "#1E7A34" }}>
      <span style={{ width:7, height:7, borderRadius:"50%", background: status.tone==="closed" ? "#B42318" : "#28A745" }}/>{status.label}
    </span>
  ) : null;
  return (
    <div style={{ background:"#fff", borderRadius:20, overflow:"hidden", display:"grid", gridTemplateColumns: side==="right" ? "7fr 5fr" : "5fr 7fr" }}>
      {side==="left" && photoEl}
      <div style={{ padding:"36px 40px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap", marginBottom:12 }}>
          <h3 className="t-heading-md" style={{ margin:0 }}>{title}</h3>
          {badge}
        </div>
        {body && <p style={{ fontSize:15, lineHeight:1.6, color:"#1C1B1F", margin:"0 0 16px" }}>{body}</p>}
        {pills.length > 0 && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:18 }}>
            {pills.map(p => <span key={p} className="pill sm">{p}</span>)}
          </div>
        )}
        {closure ? (
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, fontFamily:"'SF Mono',Menlo,monospace", textTransform:"uppercase", letterSpacing:"0.08em", color:"#888", marginBottom:8 }}>Status</div>
            <div style={{ background:"#FBEAEA", border:"1px solid #f3cccc", borderRadius:12, padding:"12px 16px", color:"#8a1f1f", fontSize:13.5, lineHeight:1.5 }}>{closure}</div>
          </div>
        ) : hours ? (
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, fontFamily:"'SF Mono',Menlo,monospace", textTransform:"uppercase", letterSpacing:"0.08em", color:"#888", marginBottom:8 }}>Hours of Operation</div>
            <table style={{ borderCollapse:"collapse", width:"100%" }}>
              <tbody>
                {hours.map(([day, ranges]) => (
                  <tr key={day} style={{ borderBottom:"1px solid #F0F0F0", verticalAlign:"top" }}>
                    <td style={{ fontSize:13, color:"#1C1B1F", fontWeight:500, padding:"7px 0" }}>{day}</td>
                    <td style={{ fontSize:13, color:"#575757", padding:"7px 0", textAlign:"right" }}>
                      {ranges === "CLOSED"
                        ? <span style={{ color:"#9a9aa2" }}>Closed</span>
                        : (Array.isArray(ranges) ? ranges : [ranges]).map((r, i) => <div key={i}>{r}</div>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
        {cta && <a className="btn btn-secondary btn-sm">{cta}</a>}
      </div>
      {side==="right" && photoEl}
    </div>
  );
}

/* expose to other scripts */
Object.assign(window, {
  Icon, AlertBar, Header, Connect, DonationBlock, IntroBand, LatestStories, PageHero, FaqList, ImageGallery, MapBlock, StoryCard, EventCard, OppCard, CategoryCard, FeaturedPageCard, PricePoints, ClassCard, FacilityCard,
  Pagination, FrameHead, PinCallout, NAV_ITEMS
});

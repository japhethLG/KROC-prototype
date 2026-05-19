/* global shared components for KROC prototype frames */

const NAV_ITEMS = [
  { label:"Home", href:"#" },
  { label:"Programs", href:"#", chev:true },
  { label:"About Us", href:"#", chev:true },
  { label:"Events", href:"#" },
  { label:"Ways To Give", href:"#", chev:true },
  { label:"Contact Us", href:"#" },
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
  return (
    <header className="kroc-header">
      <div className="kroc-header-util">
        <div className="kroc-loc">
          <span className="pin"><Icon name="pin" size={14}/></span>
          <span>{location}</span>
        </div>
        <div className="kroc-util-links">
          <a>Visit National Site</a>
          <span className="sep">|</span>
          <a>Find a Thrift Store</a>
          <span className="sep">|</span>
          <a>Hours & Closures</a>
        </div>
      </div>
      <div className="kroc-header-main">
        <div className="kroc-logo" role="img" aria-label="KROC Centers"/>
        <nav className="kroc-nav">
          {NAV_ITEMS.map(n => (
            <a key={n.label} className={active===n.label?"active":""}>
              {n.label}{n.chev && <span className="chev">▾</span>}
            </a>
          ))}
        </nav>
        <div className="kroc-header-cta">
<a className="btn btn-info btn-sm">Find Help</a>
          <a className="btn btn-primary btn-sm">Donate</a>
        </div>
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
        <div className="card">
          <h5>Sign Up for KROC Updates</h5>
          <div className="newsletter-form">
            <div className="kroc-input with-icon"><input placeholder="Email" /></div>
            <div className="kroc-input with-icon"><input placeholder="Phone" /></div>
            <a className="btn btn-secondary btn-sm">Sign Up</a>
          </div>
        </div>
        <div className="card mission">
          <h5>Our Mission</h5>
          <p className="t-body-md" style={{margin:0,lineHeight:1.55}}>
            KROC Centers exist to deliver excellence in recreation, education, arts, and worship — providing every member of our community a place to grow, gather, and thrive.
          </p>
        </div>
      </div>
      <nav className="nav-pills">
        <a className="active">Home</a>
        <a>Ways To Give</a>
        <a>About Us</a>
        <a>Employment</a>
        <a>Programs</a>
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
          1234 Community Way, Camden NJ 08103 · 1-800-KROC-CTR · Privacy Policy · © KROC Centers
        </div>
        <div style={{color:"#575757"}}>v1.0</div>
      </div>
      <div className="affiliates">
        <span className="ttl">Affiliate Links</span>
        <a>KrocCenters.org ↗</a>
        <a>National Recreation ↗</a>
        <a>Volunteer.Golden ↗</a>
        <a>Donate ↗</a>
      </div>
    </section>
  );
}

/* Impact section — featured stat over photo + supporting stat panel.
   Used on Homepage and Program Category pages. */
function ImpactSection({ title="Our Impact", filters=["All"], slides=[], primaryCta="Learn More", showDonate=true }){
  const slide = slides[0] || {};
  const featured = slide.featured || {};
  const support  = slide.support  || {};
  const total    = Math.max(slides.length, 3);
  return (
    <div className="kroc-main" style={{marginTop:48}}>
      <div style={{maxWidth:1248,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,flexWrap:"wrap",gap:12}}>
          <h2 className="t-heading-md" style={{margin:0}}>{title}</h2>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {filters.map((f,i)=>(<span key={f} className={`pill ${i===0?"active":""}`}>{f}</span>))}
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"7fr 5fr",background:"#fff",borderRadius:20,overflow:"hidden",boxShadow:"0 0.125rem 0.25rem rgba(0,0,0,.075)"}}>
          {/* Left: image with overlaid featured stat */}
          <div style={{position:"relative",minHeight:420}}>
            <div className="img-ph" style={{position:"absolute",inset:0,borderRadius:0}}>
              <span className="label" style={{position:"absolute",right:14,top:12,bottom:"auto"}}>{featured.imageDims || "16:11 · 720×495"}</span>
            </div>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 100%)"}}/>
            <div style={{position:"absolute",left:40,top:40,right:40,zIndex:2,color:"#fff"}}>
              <div style={{fontSize:84,lineHeight:1,fontWeight:400,letterSpacing:"-.02em",marginBottom:18}}>{featured.n}</div>
              <div style={{fontSize:22,maxWidth:380,lineHeight:1.3,fontWeight:400}}>{featured.l}</div>
            </div>
          </div>

          {/* Right: supporting stat + body + actions */}
          <div style={{padding:"40px 40px 28px",display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{color:"var(--kroc-navy)",fontSize:34,lineHeight:1.15,fontWeight:400,letterSpacing:"-.01em",marginBottom:8}}>{support.headline}</div>
              {support.sub && <div style={{fontSize:14,color:"#575757"}}>{support.sub}</div>}
            </div>
            <p style={{fontSize:13.5,color:"#575757",lineHeight:1.65,margin:"auto 0 0",maxWidth:420}}>{slide.body}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"wrap",marginTop:12}}>
              <a style={{fontSize:13,color:"#1C1B1F",display:"inline-flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                <Icon name="share" size={14}/>Share Stat
              </a>
              <div style={{display:"flex",gap:10}}>
                <a className="btn btn-secondary btn-sm"><Icon name="arrowUR" size={12}/>{primaryCta}</a>
                {showDonate && <a className="btn btn-primary btn-sm">Donate</a>}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:14,gap:14}}>
          <div style={{display:"flex",gap:8}}>
            {Array.from({length: total}).map((_,i)=>(
              <span key={i} style={{width:8,height:8,borderRadius:"50%",background:i===0?"var(--kroc-dark)":"#cfcfd2"}}/>
            ))}
          </div>
          <div style={{display:"flex",gap:8}}>
            <span style={{width:30,height:30,borderRadius:"50%",border:"1px solid #d8d8db",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#575757"}}><Icon name="chevL" size={14}/></span>
            <span style={{width:30,height:30,borderRadius:"50%",border:"1px solid #d8d8db",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#1C1B1F"}}><Icon name="chevR" size={14}/></span>
          </div>
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

/* Image gallery — drag-in block [image_gallery]. Masonry tiles. */
function ImageGallery({ title, tiles, rowHeight=160 }){
  const fallback = [["1 / 1",2,2],["3 / 2",1,1],["3 / 2",1,1],["4 / 5",1,2],["16 / 9",2,1],["3 / 2",1,1],["3 / 2",1,1]];
  const items = tiles || fallback;
  return (
    <div>
      {title && <h3 className="t-heading-md" style={{margin:"0 0 16px"}}>{title}</h3>}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridAutoRows:`${rowHeight}px`,gridAutoFlow:"dense",gap:10}}>
        {items.map(([label,cs,rs],i)=>(
          <div key={i} className="img-ph"
            style={{gridColumn:`span ${cs}`,gridRow:`span ${rs}`,aspectRatio:"unset",borderRadius:14,cursor:"pointer"}}>
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

function EventCard({ title="Title", date="August 9th, 2024 | 6PM - 8PM", address="1234 Address Lane, 75035 TX", cta="View Event" }){
  return (
    <div className="kroc-card">
      <div className="img"><span className="label">16:9 · 456×256</span></div>
      <div className="body">
        <h3 className="title">{title}</h3>
        <p style={{color:"#575757",marginBottom:6}}>{date}</p>
        <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:13.5,cursor:"pointer"}}>{address}</a>
      </div>
      <div className="footer">
        <a className="btn btn-secondary btn-sm btn-block"><Icon name="arrowUR" size={14}/> {cta}</a>
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

/* expose to other scripts */
Object.assign(window, {
  Icon, AlertBar, Header, Connect, ImpactSection, LatestStories, FaqList, ImageGallery, StoryCard, EventCard, OppCard, CategoryCard,
  Pagination, FrameHead, PinCallout, NAV_ITEMS
});

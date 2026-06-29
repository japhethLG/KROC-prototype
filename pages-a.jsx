/* Pages 6.1 – 6.7 */

function PageFrame({ id, n, name, schema, fields, notes, children }){
  return (
    <div className="frame-row" id={id}>
      <div className="block-side">
        <div className="block-n">{n}</div>
        <div className="block-name">{name}</div>
        {schema && <div className="block-schema">{schema}</div>}
        {fields &&
          <div className="block-fields">
            <div className="block-fields-h">Fields</div>
            {fields.map((f, i) =>
              <div key={i} className="block-field">
                <span className="k">{f[0]}</span>
                <span className="v">{f[1]}</span>
              </div>
            )}
          </div>
        }
        {notes && <div className="block-notes">{notes}</div>}
      </div>
      <div className="frame">
        <div className="kroc-page">{children}</div>
      </div>
    </div>
  );
}

/* ===== 6.1 Homepage ===== */
function Page_Home(){
  return (
    <PageFrame id="p-home" n="6.1 · Page" name="Homepage"
      schema="[homepage]"
      fields={[
        ["Hero Eyebrow", "Text · small uppercase label above the H1"],
        ["Hero Title", "Text · required · mission-led H1"],
        ["Hero Subtitle", "Text Area"],
        ["Hero Image", "Image · required · 1400×460 (3:1)"],
        ["Hero Primary CTA Label + URL", "Text + URL"],
        ["Hero Secondary CTA Label + URL", "Text + URL"],
      ]}
      notes="Single Page · Hybrid · /. Schema owns the hero only; body is assembled from drag-in blocks ([featured_programs], [featured_stories], [donation_block], [facility_section]). Global identity (logo, donation link, address, social) pulls from [kroc_location].">

      <AlertBar text="Pool closed for maintenance — Saturday 11/15 from 6 AM to 12 PM." cta="View Schedule"/>
      {/* HOME-1 item 2: Phoenix re-theme (logo + location) is applied MANUALLY — logo skipped per standing rule; location ties to NAV-1 (footer already Phoenix). Prototype still shows the Camden placeholder. */}
      <Header active="Home" location="Camden Kroc Center · Eastern Region"/>

      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0}}>
          {/* HOME-1 item 1: hero background must support BOTH photo and video sources — schema-only for now (video pending a hosting decision), see SCHEMA-18. No visual build yet. */}
          <div className="ph-bg"><div className="dims">1400×460 · 16:9</div></div>
          <div className="inner">
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:12}}>The Camden Kroc Center</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 14px"}}>A place to play, learn, create — and call your own.</h1>
            <p style={{fontSize:18,color:"rgba(255,255,255,.85)",marginBottom:28,maxWidth:560}}>
              Membership opens 100+ weekly classes, two pools, a fitness center, arts studios, a chapel, and a community calendar bigger than the whole neighborhood.
            </p>
            <div style={{display:"flex",gap:12}}>
              <a className="btn btn-light btn-lg">Become a Member</a>
              <a className="btn btn-outline-light btn-lg">Tour the Center</a>
            </div>
          </div>
        </section>
      </div>

      {/* HOME-3: Quick Links = the Featured Pages "Get Started" block (7.9), placed directly under the hero. Shared FeaturedPageCard. */}
      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <h2 className="t-heading-md" style={{margin:"0 0 18px"}}>Get Started</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            <FeaturedPageCard title="Membership" body="Unlimited access to pools, gym, fitness studios, and member-only programs." cta="Explore Plans" media="icon" icon="users"/>
            <FeaturedPageCard title="Day Passes" body="Drop-in for a workout, swim, or open gym — no commitment." cta="Buy a Pass" media="icon" icon="ticket"/>
            <FeaturedPageCard title="Personal Training" body="One-on-one and small-group training with our certified staff." cta="Book a Session" media="image"/>
            <FeaturedPageCard title="Birthday Parties" body="Pool parties, gym parties, theme rooms — Sundays book out fast." cta="Reserve a Date" media="image"/>
          </div>
        </div>
      </div>

      {/* HOME-2: Featured Classes + Featured Events (placed before the map block). Same shared cards as blocks 7.7 / 7.17. */}
      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
            <h2 className="t-heading-md" style={{margin:0}}>Featured Classes</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>View All Classes <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,rowGap:24}}>
            <ClassCard title="Adult Learn-to-Swim" kind="Roster" sched="Tue & Thu · 7:00 PM" dates="8 weeks · Sep 8 – Nov 3, 2026" memberPrice="$76" publicPrice="$95" desc="A confidence-first course for adults who want to learn or refresh the basics in a warm-water teaching pool."/>
            <ClassCard title="Sunrise Yoga" kind="Drop-In" sched="M/W/F · 6:30 AM" memberPrice="Free" publicPrice="$10 / visit" desc="Start the day grounded — a flowing all-levels practice in the studio with natural light." noImage/>
            <ClassCard title="Beginning Guitar" kind="Roster" sched="Wed · 6:00 PM" dates="8 weeks · Sep 16 – Nov 4, 2026" memberPrice="$72" publicPrice="$90" desc="Chords, strumming, and your first songs — no experience or instrument required to start."/>
          </div>
        </div>
      </div>

      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
            <h2 className="t-heading-md" style={{margin:0}}>Featured Events</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>View All Events <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,rowGap:24}}>
            <EventCard title="Summer Camp Open House" date="June 14, 2026 · 10 AM – 1 PM" desc="Tour every camp track in 90 minutes, meet the counselors, and register on the spot." address="Camden Kroc Center" memberPrice="Free" publicPrice="$5"/>
            <EventCard title="Family Pool Night" date="June 21, 2026 · 5 – 8 PM" desc="Open swim, games, and poolside snacks for the whole family on a summer evening." address="Camden Kroc Center" memberPrice="Free" publicPrice="$8"/>
            <EventCard title="Independence Day BBQ" date="July 4, 2026 · 12 – 4 PM" desc="Food, lawn games, and live music on the plaza to celebrate the Fourth together." address="Camden Kroc Center" memberPrice="$5" publicPrice="$10"/>
          </div>
        </div>
      </div>

      {/* HOME-4: Map block — APEX-ONLY (multi-center locator). On individual Kroc instances this is
          omitted here and the Single-location MapBlock goes on About Us (NEW-3). Now a reusable MapBlock. See SCHEMA-12. */}
      <div className="kroc-main">
        <div style={{maxWidth:1248,margin:"40px auto 0"}}>
          <MapBlock
            variant="locator"
            title={<>27 Kroc Centers,<br/>one community network.</>}
            body="Find programs, classes, events, and volunteer opportunities at the Kroc Center nearest you."/>
        </div>
      </div>

      {/* How We Serve */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:20}}>
            <h2 className="t-heading-md" style={{margin:0}}>Programs and Classes</h2>{/* HOME-5 relabel: was "How We Serve" */}
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>View All Programs <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {[
              ["Aquatics","Swim, lap, and aquatic fitness."],
              ["Fitness","Weights, cardio, and group classes."],
              ["Youth","Afterschool, summer camp, mentoring."],
              ["Arts","Studio, dance, and performing arts."],
            ].map(([n,b])=>(
              <CategoryCard key={n} name={n} body={b} cta="Learn More"/>
            ))}
          </div>
        </div>
      </div>


      {/* HOME-5 relabel: "Latest Stories" → "Kroc Highlights" */}
      <LatestStories
        title="Kroc Highlights" viewAllLabel="View All Highlights"
        featured={{
          category:"Recreation",
          title:"Late-Night Basketball Is Back — And It's Changing Friday Nights In Camden.",
          excerpt:"A six-week pilot brought open-gym hours to teens 14–18, no membership required. Two coaches, three pizza nights, and 240 first-time visitors later, we have a model worth talking about.",
          date:"March 12, 2024",
          author:"By Dale Bannon",
        }}
        stories={[
          { category:"Education", title:"Summer reading hits 12,000 minutes", date:"Feb 28, 2024", author:"By M. Alvarez" },
          { category:"Arts",      title:"The kids made a mural — and a movement", date:"Feb 14, 2024", author:"By J. Pham" },
          { category:"Youth",     title:"Mentoring, year one: what worked", date:"Jan 30, 2024", author:"By D. Bannon" },
        ]}
      />

      {/* HOME-6: membership callout — the SAME IntroBand component/variant as BLK-1 (no-photo, navy palette) */}
      <div className="kroc-main" style={{ marginTop: 48 }}>
        <div style={{ maxWidth: 1248, margin: "0 auto" }}>
          <IntroBand
            variant="color"
            eyebrow="Membership"
            title="Membership is for everyone."
            body="Becoming a member at The Salvation Army Kroc Center is much more than signing up for a health club or wellness center. This is a place where you will feel welcomed and supported no matter what your physical, educational or social goals — and every person in our community is a critical component. Day passes are also available."
            primaryCta="Become a Member"
            secondaryCta="View Day Passes"
          />
        </div>
      </div>

      <Connect/>
    </PageFrame>
  );
}

/* ===== 6.2 All Programs ===== */
function Page_AllPrograms(){
  const cats = [
    ["Aquatics","Swim lessons, lap swim, and aquatic fitness for every age."],
    ["Fitness","Weight floor, cardio, and 40+ group classes weekly."],
    ["Youth","Afterschool, summer camp, mentoring, and teen nights."],
    ["Arts","Visual studio, music rooms, dance, and performing arts."],
    ["Seniors","Active aging, social hours, and silver fitness."],
    ["Worship","Sunday services, Bible study, and small groups."],
    ["Education","Tutoring, GED prep, and adult learning."],
    ["Community","Drop-in events, family nights, and meeting space."],
  ];
  // Cross-category sample for the "Search for Classes" block (auto-fed from [classes] in production)
  const allClasses = [
    {title:"Adult Learn-to-Swim", category:"Aquatics", kind:"Roster", sched:"Tue & Thu · 7:00 PM", dates:"8 weeks · Sep 8 – Nov 3, 2026", memberPrice:"$76", publicPrice:"$95", desc:"A confidence-first course for adults who want to learn or refresh the basics in a warm-water teaching pool.", noImage:false},
    {title:"Open Lap Swim", category:"Aquatics", kind:"Drop-In", sched:"Mon–Fri · 6:00–9:00 AM", memberPrice:"Free", publicPrice:"$8 / visit", desc:"Reserved lap lanes during posted hours, first-come first-served. Free for members.", noImage:true},
    {title:"Sunrise Yoga", category:"Fitness", kind:"Drop-In", sched:"M/W/F · 6:30 AM", memberPrice:"Free", publicPrice:"$10 / visit", desc:"Start the day grounded — a flowing all-levels practice in the studio with natural light.", noImage:false},
    {title:"Strength 101", category:"Fitness", kind:"Roster", sched:"Tue & Thu · 5:30 PM", dates:"6 weeks · Sep 15 – Oct 22, 2026", memberPrice:"$60", publicPrice:"$75", desc:"A coached introduction to the weight floor: form, programming, and confidence under the bar.", noImage:false},
    {title:"Spin & Sweat", category:"Fitness", kind:"Drop-In", sched:"M/W/F · 12:00 PM", memberPrice:"Free", publicPrice:"$10 / visit", desc:"A 45-minute ride with music and intervals for every fitness level.", noImage:true},
    {title:"Afterschool Club", category:"Youth", kind:"Roster", sched:"Mon–Fri · 3:00–6:00 PM", dates:"Fall term · Sep 2 – Dec 18, 2026", memberPrice:"$96 / mo", publicPrice:"$120 / mo", desc:"Homework help, snacks, sports, and arts for grades K–6 in a safe, supervised space.", noImage:false},
    {title:"Teen Open Gym", category:"Youth", kind:"Drop-In", sched:"Fri · 7:00–10:00 PM", memberPrice:"Free", publicPrice:"$5 / visit", desc:"Basketball, games, and music — a place for teens to belong on Friday nights.", noImage:true},
    {title:"Beginning Guitar", category:"Arts", kind:"Roster", sched:"Wed · 6:00 PM", dates:"8 weeks · Sep 16 – Nov 4, 2026", memberPrice:"$72", publicPrice:"$90", desc:"Chords, strumming, and your first songs — no experience or instrument required to start.", noImage:false},
    {title:"Open Art Studio", category:"Arts", kind:"Drop-In", sched:"Sat · 1:00–4:00 PM", memberPrice:"$5 / visit", publicPrice:"$8 / visit", desc:"Bring a project or start one — easels, clay, and supplies with an artist on hand.", noImage:true},
    {title:"Silver Strength", category:"Seniors", kind:"Drop-In", sched:"T/Th · 9:00 AM", memberPrice:"Free", publicPrice:"$6 / visit", desc:"Gentle, seated-option strength and balance training designed for active aging.", noImage:false},
    {title:"Active Aging Social", category:"Seniors", kind:"Drop-In", sched:"Wed · 10:30 AM", memberPrice:"Free", publicPrice:"Free", desc:"Coffee, games, and good company — a weekly gathering for our 55+ community.", noImage:true},
    {title:"GED Prep Lab", category:"Education", kind:"Roster", sched:"Mon & Wed · 6:00 PM", dates:"Rolling · Sep – Dec 2026", memberPrice:"Free", publicPrice:"Free", desc:"Small-group tutoring and practice tests to earn your high-school equivalency.", noImage:false},
  ];
  return (
    <PageFrame id="p-programs" n="6.2 · Page" name="All Programs"
      schema="[programs_index]"
      fields={[
        ["Header Title", "Text · required"],
        ["Subheader", "Text"],
        ["Filter Pills", "Auto from [program_categories] · no CMS field"],
        ["Search for Classes — Block", "Cross-category class finder · auto-fed from [classes]"],
        ["Search for Classes — Category Filter", "Auto from [program_categories] · UI only"],
        ["Search for Classes — Type / Date / Search", "Contextual · UI only"],
        ["CTA Band", "Drag-in [donation_block]"],
      ]}
      notes="Single Page · Hybrid · /programs/ — auto-feeds the 4-up category grid from [program_categories]. The 'Search for Classes' block reuses the same ClassFinder as Program Category (6.3) but searches across all categories.">

      <Header active="Classes"/>
      <div className="kroc-main">
        <section className="kroc-hero compact" style={{margin:0, aspectRatio:"unset", minHeight:280}}>
          <div className="ph-bg"><div className="dims">1400×360 · 16:9</div></div>
          <div className="inner">
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:10}}>Programs &amp; Classes</div>
            <h1 className="t-heading-lg" style={{margin:"0 0 12px"}}>Find a class. Try something new.</h1>
            <p style={{fontSize:16,color:"rgba(255,255,255,.85)",marginBottom:20,maxWidth:600}}>
              From toddler swim to senior strength, the Kroc runs hundreds of programs a season — most are free or included with membership.
            </p>
          </div>
        </section>
      </div>

      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <h2 className="t-heading-md" style={{margin:"0 0 18px"}}>Browse by Category</h2>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,flexWrap:"wrap",gap:12}}>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {["All","Aquatics","Fitness","Arts","Youth","Seniors","Worship","Education"].map((t,i)=>(<span key={t} className={`pill ${i===0?"active":""}`}>{t}</span>))}
            </div>
            <div className="kroc-input with-icon" style={{width:280}}><input placeholder="Search programs"/></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {cats.map(([n,b])=>(<CategoryCard key={n} name={n} body={b}/>))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:40}}><Pagination/></div>
        </div>
      </div>

      {/* Search for Classes (PAGE-1) — searches across all categories, reuses ClassFinder */}
      <div className="kroc-main" style={{marginTop:56}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <ClassFinder
            title="Search for Classes"
            classes={allClasses}
            categories={["Aquatics","Fitness","Youth","Arts","Seniors","Education"]}
            searchPlaceholder="Search all classes"
            total={240}/>
        </div>
      </div>

      {/* CTA band */}
      <div style={{marginTop:48}}>
        <div style={{margin:"0 16px",borderRadius:20,background:"var(--kroc-red)",color:"#fff",padding:"40px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <div>
            <h2 className="t-heading-md" style={{margin:"0 0 8px"}}>Can't find what you're looking for?</h2>
            <p style={{margin:0,opacity:.9}}>Tell us what you'd like to see — we build programs around community demand.</p>
          </div>
          <a className="btn btn-light">Suggest a Program</a>
        </div>
      </div>

      <Connect/>
    </PageFrame>
  );
}

/* ===== 6.3 Program Category ===== */
function FilterDropdown({ label, value, options, onChange }){
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(()=>{
    if(!open) return;
    const close = (e)=>{ if(ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return ()=>document.removeEventListener("mousedown", close);
  },[open]);
  return (
    <div ref={ref} style={{position:"relative"}}>
      <button type="button" className="kroc-input kroc-dd-btn" onClick={()=>setOpen(o=>!o)} aria-haspopup="listbox" aria-expanded={open}>
        <span style={{color:"#575757"}}>{label}: <span style={{color:"#1C1B1F"}}>{value}</span></span>
        <Icon name="chev" size={14} color="#575757"/>
      </button>
      {open && (
        <div className="kroc-menu" role="listbox">
          {options.map(opt=>(
            <button type="button" key={opt} className={value===opt?"sel":""} role="option" aria-selected={value===opt} onClick={()=>{ onChange(opt); setOpen(false); }}>
              {opt}{value===opt && <Icon name="check" size={15} color="var(--kroc-red)"/>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* Reusable class search + listing — Program Category 6.3 "Aquatics Classes" and
   All Programs 6.2 "Search for Classes" block. Pass `categories` to enable the
   cross-category filter (omit on a single-category page). */
function ClassFinder({ title="Classes", classes=[], categories=null, searchPlaceholder="Search classes", total=null, defaultView="card" }){
  const [view, setView] = React.useState(defaultView);
  const [dateF, setDateF] = React.useState("Any time");
  const [typeF, setTypeF] = React.useState("All");
  const [catF, setCatF] = React.useState("All Categories");
  const [q, setQ] = React.useState("");
  const shown = classes.filter(c =>
    (typeF==="All" || c.kind===typeF) &&
    (!categories || catF==="All Categories" || c.category===catF) &&
    (q.trim()==="" || (c.title+" "+(c.desc||"")).toLowerCase().includes(q.trim().toLowerCase()))
  );
  const th = { padding:"13px 22px", fontSize:11.5, color:"#888", fontWeight:600, textTransform:"uppercase", letterSpacing:".05em" };
  const td = { padding:"14px 22px", fontSize:14, color:"#1C1B1F", verticalAlign:"middle" };
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,gap:16,flexWrap:"wrap"}}>
        <h2 className="t-heading-md" style={{margin:0}}>{title}</h2>
        <div style={{display:"inline-flex",background:"#fff",borderRadius:999,padding:3}}>
          {[["card","Cards"],["table","Table"]].map(([k,l])=>(
            <button key={k} onClick={()=>setView(k)} style={{border:0,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:"7px 16px",borderRadius:999,background:view===k?"var(--kroc-red)":"transparent",color:view===k?"#fff":"#1C1B1F"}}>{l}</button>
          ))}
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,gap:16,flexWrap:"wrap"}}>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
          {categories && <FilterDropdown label="Category" value={catF} options={["All Categories",...categories]} onChange={setCatF}/>}
          <FilterDropdown label="Date" value={dateF} options={["Any time","This week","Next week","This month"]} onChange={setDateF}/>
          <FilterDropdown label="Type" value={typeF} options={["All","Roster","Drop-In"]} onChange={setTypeF}/>
        </div>
        <div className="kroc-input with-icon" style={{width:240}}><input placeholder={searchPlaceholder} value={q} onChange={e=>setQ(e.target.value)}/></div>
      </div>
      <div style={{fontSize:13,color:"#575757",marginBottom:14}}>Showing {shown.length} of {total!=null ? total : classes.length} classes</div>

      {shown.length===0 ? (
        <div style={{background:"#fff",borderRadius:20,padding:"56px 24px",textAlign:"center",color:"#575757",fontSize:14.5}}>
          No classes match your search. Try a different filter or clear the search.
        </div>
      ) : view==="card" ? (
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,rowGap:24}}>
          {shown.map(c=>(
            <ClassCard key={c.title} title={c.title} kind={c.kind} sched={c.sched} dates={c.dates} price={c.price} memberPrice={c.memberPrice} publicPrice={c.publicPrice} desc={c.desc} noImage={c.noImage}/>
          ))}
        </div>
      ) : (
        <div style={{background:"#fff",borderRadius:20,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead>
              <tr style={{textAlign:"left",borderBottom:"1px solid #eaeaee"}}>
                <th style={th}>Class</th>{categories && <th style={th}>Category</th>}<th style={th}>Type</th><th style={th}>Schedule</th><th style={th}>Price</th><th style={{...th,textAlign:"right"}}></th>
              </tr>
            </thead>
            <tbody>
              {shown.map((c,i)=>(
                <tr key={c.title} style={{borderBottom:i<shown.length-1?"1px solid #F0F0F0":"none"}}>
                  <td style={{...td,fontWeight:500}}>{c.title}</td>
                  {categories && <td style={{...td,color:"#575757"}}>{c.category}</td>}
                  <td style={td}><span className={`pill sm ${c.kind==="Drop-In"?"red-fill":"red-outline"}`}>{c.kind}</span></td>
                  <td style={{...td,color:"#575757"}}>
                    <div>{c.sched}</div>
                    {c.dates && <div style={{fontSize:12.5,color:"#888",marginTop:2}}>{c.dates}</div>}
                  </td>
                  <td style={td}>
                    {(c.memberPrice||c.publicPrice) ? (
                      <div style={{lineHeight:1.45}}>
                        {c.memberPrice && <div><span style={{fontSize:11,color:"#888"}}>Members </span>{c.memberPrice}</div>}
                        {c.publicPrice && <div><span style={{fontSize:11,color:"#888"}}>Public </span>{c.publicPrice}</div>}
                      </div>
                    ) : c.price}
                  </td>
                  <td style={{...td,textAlign:"right"}}><a className="btn btn-primary btn-sm">Register</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{display:"flex",justifyContent:"center",marginTop:32}}><Pagination/></div>
    </div>
  );
}

function Page_ProgramCategory(){
  // Roster classes carry a session date range (PAGE-2 item 1); all carry Member/Public price points (item 2).
  const classes = [
    {title:"Adult Learn-to-Swim", kind:"Roster", sched:"Tue & Thu · 7:00 PM", dates:"8 weeks · Sep 8 – Nov 3, 2026", memberPrice:"$76", publicPrice:"$95", desc:"A confidence-first course for adults who never learned — or want to refresh the basics. Small groups of six, certified instructors, and a warm-water teaching pool make every session feel safe. By week eight you'll swim the length of the pool.", noImage:false},
    {title:"Open Lap Swim", kind:"Drop-In", sched:"Mon–Fri · 6:00–9:00 AM", memberPrice:"Free", publicPrice:"$8 / visit", desc:"Reserved lap lanes during posted hours, first-come first-served. Bring your own gear — kickboards and pull buoys are at the front desk. Free for members; $8 drop-in for guests.", noImage:true},
    {title:"Masters Swim", kind:"Roster", sched:"M/W/F · 5:30 AM", dates:"12 weeks · Sep 1 – Nov 20, 2026", memberPrice:"$96", publicPrice:"$120", desc:"Coached workouts for competitive and fitness swimmers 18+. Three mornings a week, with sets scaled to every level from triathlete to weekend lap swimmer.", noImage:false},
    {title:"Parent & Baby Splash", kind:"Drop-In", sched:"Sat · 9:30 AM", memberPrice:"$8 / session", publicPrice:"$10 / session", desc:"A gentle 30-minute water-acclimation class for babies 6–36 months and a caregiver. Songs, floating games, and lots of smiles in the warm-water pool.", noImage:false},
    {title:"Water Aerobics", kind:"Drop-In", sched:"T/Th · 10:00 AM", memberPrice:"Free", publicPrice:"$8 / visit", desc:"Low-impact, high-energy fitness in the shallow end — easy on the joints, tough on the calories. Great for recovery, mobility, and anyone who'd rather move in the water.", noImage:true},
    {title:"Teen Swim Team", kind:"Roster", sched:"Wed & Fri · 4:30 PM", dates:"6 weeks · Sep 8 – Oct 15, 2026", memberPrice:"$64", publicPrice:"$80", desc:"A six-week intro to competitive swimming for ages 13–17. Stroke technique, racing starts, and team relays, capped by a friendly intra-club meet.", noImage:false},
  ];
  return (
    <PageFrame id="p-program-cat" n="6.3 · Page" name="Program Category — Aquatics"
      schema="[program_categories]"
      fields={[
        ["Category Name", "Text · required · hero H1"],
        ["Icon", "Remote API · kroc-icon in hero"],
        ["Category Intro — Left Column", "Rich Text"],
        ["Category Intro — Right Column", "Rich Text"],
        ["Classes Listing — Search", "Per-list contextual · UI only"],
        ["Classes Listing — Type Filter", "Dropdown · All · Roster · Drop-In · UI only"],
        ["Classes Listing — Date Filter", "Dropdown · Any time · This week · Next week · This month · UI only"],
        ["Classes Listing — View Toggle", "Card · Table · UI only"],
        ["Classes Listing — Pagination", "Default 6/page · UI only"],
      ]}
      notes="Pageset · Hybrid · /programs/:category — auto-feeds the Classes grid from [classes] filtered by this category. Featured Stories filtered by category=this.">

      <Header active="Classes"/>

      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0, aspectRatio:"3/1"}}>
          <div className="ph-bg"><div className="dims">1400×460 · 16:9</div></div>
          <div className="inner">
            <span className="kroc-icon" style={{background:"rgba(255,255,255,.12)",border:"1px dashed rgba(255,255,255,.4)",color:"#fff",marginBottom:14}}>kroc-icon</span>
            <h1 className="t-heading-xl" style={{margin:"0 0 12px"}}>Aquatics</h1>
            <p style={{fontSize:18,color:"rgba(255,255,255,.85)",maxWidth:600,marginBottom:24}}>
              Two pools, twelve programs, every age. From parent-and-baby splashes to masters swim and water rehab.
            </p>
            <a className="btn btn-light">View Class Schedule</a>
          </div>
        </section>
      </div>

      {/* 2-col intro */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto",background:"#fff",borderRadius:20,padding:"40px 48px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}}>
          <div>
            <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:10}}>About Aquatics at the Kroc</div>
            <h2 className="t-heading-md" style={{margin:"0 0 14px"}}>Water is for everyone.</h2>
            <p style={{margin:"0 0 14px",fontSize:15.5,color:"#1C1B1F"}}>
              Camden's Kroc operates a 25-yard lap pool and a warm-water teaching pool. Lifeguards on duty all open hours, and our learn-to-swim program is the largest in South Jersey.
            </p>
          </div>
          <div>
            <p style={{margin:"0 0 14px",fontSize:15.5,color:"#1C1B1F"}}>
              Members get unlimited open swim and a deep discount on lessons. Scholarship swim is available for any Camden child — no application required.
            </p>
            <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:14.5,cursor:"pointer"}}>See pool hours and rules →</a>
          </div>
        </div>
      </div>


      {/* Featured stories */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
            <h2 className="t-heading-md" style={{margin:0}}>Featured Stories</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>All Aquatics Stories <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            <StoryCard category="Aquatics" title="From floaties to fearless" body="Eight-year-old Marcus finished his first lap, no float, no flinch."/>
            <StoryCard category="Aquatics" title="Masters swim turns 5" body="The 5 AM crew has logged 40,000 miles since the program started."/>
            <StoryCard category="Aquatics" title="Water therapy after surgery" body="A new partnership with Cooper Hospital brings rehab into our warm-water pool."/>
          </div>
        </div>
      </div>

      {/* Aquatics Classes */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <ClassFinder title="Aquatics Classes" classes={classes} searchPlaceholder="Search Aquatics classes" total={24}/>
        </div>
      </div>

      <Connect/>
    </PageFrame>
  );
}

/* ===== 6.4 Class Detail ===== */
function Page_ClassDetail(){
  return (
    <PageFrame id="p-class" n="6.4 · Page" name="Class Detail — Adult Learn-to-Swim"
      schema="[classes]"
      fields={[
        ["Class Name", "Text · required · hero H1"],
        ["Program Category", "Relational · breadcrumb + Other Classes feed"],
        ["Class Type", "Dropdown · Roster / Drop-In · pill badge"],
        ["Description (WYSIWYG)", "Rich Text · 'About this class' body"],
        ["Program Schedule", "Repeater · sidebar Date & Time"],
        ["Session Dates", "Date range · roster classes · e.g. 6 weeks, Sep 8 – Oct 15, 2026 (PAGE-2)"],
        ["Audience", "Text / Dropdown · sidebar"],
        ["Facility Location", "Text · sidebar Location"],
        ["Member Price / Public Price", "Remote API (Traction Rec) · two price points (PAGE-2)"],
        ["Deep Link URL", "URL · Register Now button"],
        ["Additional Blocks", "Drag-in blocks (e.g. Image Gallery) · page is extensible (PAGE-5)"],
        ["Tags", "Relational · pill row at bottom"],
      ]}
      notes="Pageset · Hybrid · /programs/:category/:class. Member/Public prices are dynamic (TractionRec); capacity is runtime-only, not a CMS field. The page accepts additional drag-in blocks — the Image Gallery (mosaic) covers the client's 'additional photos' ask.">

      <Header active="Classes"/>

      <div className="kroc-main">
        <div style={{maxWidth:1248,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
          <span className="kroc-crumb"><Icon name="chevL" size={14}/> Return to Aquatics</span>
          <div style={{display:"flex",alignItems:"center",gap:14,color:"#575757",fontSize:13}}>
            <span>Share Class</span>
            <Icon name="fb" size={16}/><Icon name="x" size={16}/><Icon name="li" size={16}/><Icon name="ig" size={16}/>
          </div>
        </div>

        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <h1 className="t-heading-lg" style={{margin:"0 0 16px"}}>Adult Learn-to-Swim · Beginner</h1>
          <div className="img-ph" style={{aspectRatio:"16/7",position:"relative"}}>
            <span className="pill sm red-outline" style={{position:"absolute",top:14,left:14}}>Roster</span>
            <span className="label">1248×546 · 16:7</span>
          </div>
        </div>

        <div style={{maxWidth:1248,margin:"32px auto 0",background:"#fff",borderRadius:20,padding:"40px 48px",display:"grid",gridTemplateColumns:"320px 1fr",gap:48}}>
          <aside>
            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Date &amp; Time</div>
            <div style={{fontSize:16,marginBottom:14}}>Tuesdays &amp; Thursdays<br/>7:00 – 7:45 PM</div>

            {/* PAGE-2 item 1: roster classes show a session date range */}
            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Session Dates</div>
            <div style={{fontSize:16,marginBottom:14,display:"flex",alignItems:"center",gap:8}}><Icon name="cal" size={15} color="#575757"/> 6 weeks · Sep 8 – Oct 15, 2026</div>

            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Audience</div>
            <div style={{fontSize:16,marginBottom:14,display:"inline-flex",alignItems:"center",gap:8}}><span className="pill" style={{padding:"4px 10px",fontSize:12}}>Adults · 18+</span></div>

            {/* PAGE-2 item 2: Member vs Public price points (dynamic from Traction Rec) */}
            <PricePoints member="$76" publicPrice="$95" dynamic/>

            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Capacity</div>
            <div style={{fontSize:16,marginBottom:18}}>8 of 12 spots left</div>

            <div style={{height:1,background:"#eaeaee",margin:"14px 0"}}/>

            <div style={{fontSize:13,color:"#575757",marginBottom:8}}>Location</div>
            <div style={{fontSize:15,marginBottom:6}}>Warm-water teaching pool<br/>Camden Kroc Center</div>
            <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:13.5,cursor:"pointer"}}>Directions →</a>

            <div style={{height:1,background:"#eaeaee",margin:"18px 0"}}/>
            <a className="btn btn-primary btn-block" style={{marginBottom:8}}>Register Now</a>
            <a className="btn btn-info btn-block btn-sm"><Icon name="cal" size={14}/> Add to Calendar</a>
          </aside>
          <div>
            <h3 className="t-heading-sm" style={{margin:"0 0 12px"}}>About this class</h3>
            <p style={{color:"#1C1B1F",fontSize:15,lineHeight:1.6,marginBottom:14}}>
              Built for adults who never had a chance to learn — or who want to start over. Small group, never deeper than chest-high, two instructors on deck every session. Six-week sessions, with new sessions starting the first Tuesday of every month.
            </p>
            <p style={{color:"#1C1B1F",fontSize:15,lineHeight:1.6,marginBottom:14}}>
              By the end of week six, students typically swim a continuous half-lap unassisted and feel comfortable putting their face in the water. We provide goggles; you bring a swimsuit and a towel.
            </p>
            <p style={{color:"#1C1B1F",fontSize:15,lineHeight:1.6,marginBottom:20}}>
              Need-based scholarships available — ask at the front desk or check the box during registration.
            </p>
            <h4 style={{fontSize:18,marginTop:24,marginBottom:10}}>What to bring</h4>
            <ul style={{margin:0,paddingLeft:18,color:"#1C1B1F",fontSize:14.5,lineHeight:1.7}}>
              <li>Swimsuit and towel</li>
              <li>Goggles (we have loaners)</li>
              <li>A change of clothes — locker rooms on site</li>
            </ul>

            <div style={{display:"flex",gap:6,marginTop:28,flexWrap:"wrap"}}>
              {["Aquatics","Adults","Learn-to-Swim","Beginner"].map(t=>(<span key={t} className="pill">{t}</span>))}
            </div>
          </div>
        </div>
      </div>

      {/* PAGE-5 item 2: additional drag-in block — Image Gallery (mosaic) shows the page supports extra blocks */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <ImageGallery
            title="Class Photos"
            variant="mosaic"
            tiles={[
              ["Warm-water teaching pool",2,2],
              ["Lesson in progress",1,1],
              ["Instructor on deck",1,1],
              ["Lane markers",1,2],
              ["Group session",2,1],
              ["Poolside",1,1],
              ["Locker rooms",1,1],
            ]}/>
        </div>
      </div>

      {/* Other Aquatics Classes */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
            <h2 className="t-heading-md" style={{margin:0}}>Other Aquatics Classes</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>All Aquatics Classes <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,rowGap:24}}>
            {[
              {title:"Masters Swim", kind:"Roster", sched:"M/W/F · 5:30 AM", dates:"12 weeks · Sep 1 – Nov 20, 2026", memberPrice:"$96", publicPrice:"$120", desc:"Coached workouts for competitive and fitness swimmers 18+. Three mornings a week, with sets scaled to every level from triathlete to weekend lap swimmer.", noImage:false},
              {title:"Parent & Baby Splash", kind:"Drop-In", sched:"Sat · 9:30 AM", memberPrice:"$8 / session", publicPrice:"$10 / session", desc:"A gentle 30-minute water-acclimation class for babies 6–36 months and a caregiver. Songs, floating games, and lots of smiles in the warm-water pool.", noImage:false},
              {title:"Water Aerobics", kind:"Drop-In", sched:"T/Th · 10:00 AM", memberPrice:"Free", publicPrice:"$8 / visit", desc:"Low-impact, high-energy fitness in the shallow end — easy on the joints, tough on the calories. Great for recovery, mobility, and anyone who'd rather move in the water.", noImage:true},
            ].map(c=>(
              <ClassCard key={c.title} title={c.title} kind={c.kind} sched={c.sched} dates={c.dates} memberPrice={c.memberPrice} publicPrice={c.publicPrice} desc={c.desc} noImage={c.noImage}/>
            ))}
          </div>
        </div>
      </div>

      <Connect/>
    </PageFrame>
  );
}

/* ===== 6.5 Informational Page ===== */
function Page_Info(){
  return (
    <PageFrame id="p-info" n="6.5 · Page" name="Informational Page — Membership Policies"
      schema="[informational_pages]"
      fields={[
        ["Page Name", "Text · required · hero headline"],
        ["Page Eyebrow", "Text · small uppercase label"],
        ["Hero Subheader", "Text Area"],
        ["Hero Background Type", "Toggle · Color | Image (PAGE-3)"],
        ["Hero Background Color", "Palette select · Color variant (PAGE-3)"],
        ["Hero Background Image", "Media · Image variant (PAGE-3)"],
        ["Page Content", "WYSIWYG · required · supports Accordion block (PAGE-3)"],
        ["Access Password", "Text · powers password-gate variant"],
      ]}
      notes="Pageset · Freestyle · /:page_slug. Hero background is selectable — a palette color band OR a background image (PageHero). Page Content can include an Accordion block (reuses FaqList) for collapsible sections like facility policies. Password-gated variant locks content behind Access Password.">

      <Header/>

      <div className="kroc-main">
        <span className="kroc-crumb"><Icon name="chevL" size={14}/> Return to About Us</span>
      </div>

      {/* PAGE-3 item 1: background-image hero (PageHero also supports a palette-color band — see schema). */}
      <PageHero
        variant="image"
        eyebrow="Membership Policies"
        title="Everyone is welcome, and everyone follows the same handful of rules."
        subtitle="We keep our policies short, clear, and the same for every member — from the day you join to the day you renew."/>

      {/* PAGE-3 item 2: Page Content rendered as an accordion (facility policies) — reuses FaqList */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:840,margin:"0 auto"}}>
          <FaqList
            title="Facility Policies"
            items={[
              ["Membership dues & financial assistance","Dues are on a sliding scale based on household size and income — maximum $42/month for adults, minimum $0. Nobody is turned away for inability to pay; ask the front desk about financial assistance."],
              ["Code of conduct & safety","We expect every member to treat staff, members, and the building with respect: no harassment, discrimination, or violence. Children under 12 must stay with an adult in pool and fitness areas."],
              ["Guest & day pass policy","Members may bring guests with a day pass, available at the front desk. All guests complete a waiver and follow the same conduct and safety rules as members."],
              ["Locker rooms & changing areas","Locker rooms are gendered; family changing rooms are available to anyone for any reason. Lockers are day-use only — bring your own lock and clear it before close."],
              ["Cancellations & refunds","Cancel anytime, in person at the front desk or online from your member dashboard. Refunds on class fees are pro-rated to the day."],
            ]}/>
        </div>
      </div>

      {/* Password gate variant — inset */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:10}}>Variant — Password-Gated</div>
          <div style={{background:"#fff",borderRadius:20,padding:"56px 48px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:"#FFEBEB",color:"var(--kroc-red)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18}}>
              <Icon name="lock" size={28}/>
            </div>
            <h3 className="t-heading-sm" style={{margin:"0 0 8px"}}>Staff &amp; Board Resources</h3>
            <p style={{fontSize:14.5,color:"#575757",margin:"0 0 24px",maxWidth:420}}>
              This page is restricted to staff and board members. Enter the access password to continue.
            </p>
            <div style={{display:"flex",gap:8,maxWidth:380,width:"100%"}}>
              <div className="kroc-input" style={{flex:1}}><input type="password" placeholder="Access password"/></div>
              <a className="btn btn-primary">Unlock</a>
            </div>
          </div>
        </div>
      </div>

      <Connect/>
    </PageFrame>
  );
}

/* ===== 6.6 All Stories ===== */
function Page_AllStories(){
  return (
    <PageFrame id="p-stories" n="6.6 · Page" name="All Stories"
      schema="[stories_index]"
      fields={[
        ["Header Title", "Text · required"],
        ["Subheader", "Text Area"],
        ["Tag Filter Chips", "Auto from [tags] (national) · no CMS field"],
      ]}
      notes="Single Page · Hybrid · /stories/. Feed auto-pulls from [stories]; pagination is server-side (12 per page).">

      <Header active="Stories"/>
      <div className="kroc-main">
        <section className="kroc-hero center" style={{margin:0,minHeight:280,aspectRatio:"unset",textAlign:"center"}}>
          <div className="ph-bg"><div className="dims">1400×360 · 16:9</div></div>
          <div className="inner" style={{textAlign:"center",margin:"0 auto"}}>
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:10}}>Stories from the Kroc</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 12px"}}>Camden, told by Camden.</h1>
            <p style={{fontSize:17,color:"rgba(255,255,255,.85)",maxWidth:600,margin:"0 auto"}}>
              Every story below was reported by a member, a coach, or a volunteer who was there.
            </p>
          </div>
        </section>
      </div>

      {/* Featured 3-up */}
      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <h2 className="t-heading-md" style={{margin:"0 0 18px"}}>Featured</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            <StoryCard category="Recreation" title="Late-night basketball is back" body="A six-week pilot brought open-gym hours to Camden teens."/>
            <StoryCard category="Education" title="Summer reading hits 12,000 minutes" body="Volunteers logged a record number of one-on-one reading sessions."/>
            <StoryCard category="Arts" title="The kids made a mural — and a movement" body="A 40-foot mural in the lobby anchors weekly community gatherings."/>
          </div>
        </div>
      </div>

      {/* Filters + feed */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,flexWrap:"wrap",gap:12}}>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {["All","Aquatics","Fitness","Arts","Youth","Worship","Volunteers"].map((t,i)=>(<span key={t} className={`pill ${i===0?"active":""}`}>{t}</span>))}
            </div>
            <div className="kroc-input with-icon" style={{width:240}}><input placeholder="Search stories"/></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {Array.from({length:6}).map((_,i)=>(
              <StoryCard key={i} category={["Recreation","Fitness","Arts","Youth","Worship","Volunteers"][i]}
                title={["A new kind of pickup game","Cardio at sixty-five — and just getting started","A community mural, panel by panel","Robotics club takes nationals","Sunday choir hits a hundred members","One year of meal deliveries"][i]}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:40}}><Pagination/></div>
        </div>
      </div>

      <Connect/>
    </PageFrame>
  );
}

/* ===== 6.7 Story Detail ===== */
function Page_StoryDetail(){
  return (
    <PageFrame id="p-story" n="6.7 · Page" name="Story Detail"
      schema="[stories]"
      fields={[
        ["Title", "Text · required · H1"],
        ["Story Image", "Media · required · 16:9 hero"],
        ["Story Date", "Datetime · required"],
        ["Story Body", "Rich Text (WYSIWYG) · required · supports pull-quote"],
        ["Author", "Text · required · sidebar"],
        ["Author Location", "Relational ([kroc_location])"],
        ["Story Excerpt", "Text Area · required · cards + feeds"],
        ["Donation Override / Link", "URL · overrides instance donation link"],
        ["Article Tag", "Integration Field · from National"],
        ["Hashtag", "Repeater"],
        ["Related Event", "Relational ([events]) · sidebar card"],
        ["Related Program Category", "Relational ([program_categories]) · sidebar link"],
        ["External Article", "URL · 'View Original' banner above tags"],
      ]}
      notes="Pageset · Fixed · /stories/:page_url/. Sidebar surfaces author, location, optional donation override, and related event/program category. External Article banner appears above the tag pills.">

      <Header active="Stories"/>

      <div className="kroc-main">
        <div style={{maxWidth:1248,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
          <span className="kroc-crumb"><Icon name="chevL" size={14}/> Return to all stories</span>
          <div style={{display:"flex",alignItems:"center",gap:14,color:"#575757",fontSize:13}}>
            <span>Share Story</span>
            <Icon name="fb" size={16}/><Icon name="x" size={16}/><Icon name="li" size={16}/><Icon name="ig" size={16}/>
          </div>
        </div>

        <div style={{maxWidth:1248,margin:"0 auto",marginBottom:24}}>
          <h1 className="t-heading-lg" style={{margin:"0 0 16px"}}>Late-night basketball is back at the Camden Kroc</h1>
          <div className="img-ph" style={{aspectRatio:"16/9"}}><span className="label">1248×702 · 16:9 hero</span></div>
        </div>

        <div style={{maxWidth:1248,margin:"0 auto",background:"#fff",borderRadius:20,padding:"40px 48px",display:"grid",gridTemplateColumns:"260px 1fr",gap:48}}>
          <aside>
            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Published</div>
            <div style={{fontSize:15,marginBottom:18}}>March 14, 2026</div>
            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Author</div>
            <div style={{fontSize:15,marginBottom:18}}>Dale Bannon</div>
            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Location</div>
            <a style={{color:"var(--kroc-red)",display:"inline-flex",alignItems:"center",gap:6,fontSize:14.5,cursor:"pointer"}}><Icon name="pin" size={14}/> Camden Kroc Center</a>

            {/* donation_override_link */}
            <div style={{height:1,background:"#eaeaee",margin:"18px 0"}}/>
            <a className="btn btn-primary btn-block btn-sm">Donate to Support This Program</a>
            <div style={{fontSize:11,fontFamily:"'SF Mono',Menlo,monospace",color:"#999",marginTop:6}}>donation_override_link · overrides instance default</div>

            {/* related_event */}
            <div style={{height:1,background:"#eaeaee",margin:"18px 0"}}/>
            <div style={{fontSize:13,color:"#575757",marginBottom:8}}>Related Event</div>
            <a style={{display:"block",background:"#EFEFEF",borderRadius:12,padding:"12px 14px",cursor:"pointer",textDecoration:"none"}}>
              <div style={{fontSize:13,color:"#1C1B1F",marginBottom:2}}>Late-Night Basketball Open Gym</div>
              <div style={{fontSize:12,color:"#575757"}}>Every Thu + Sat · 9 PM – 11 PM</div>
            </a>
            <div style={{fontSize:11,fontFamily:"'SF Mono',Menlo,monospace",color:"#999",marginTop:6}}>related_event → [events]</div>

            {/* related_program_category */}
            <div style={{marginTop:16}}>
              <div style={{fontSize:13,color:"#575757",marginBottom:8}}>Related Program</div>
              <a style={{display:"inline-flex",alignItems:"center",gap:8,cursor:"pointer"}}>
                <span className="kroc-icon sm">kroc-icon</span>
                <span style={{fontSize:14,color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42"}}>Youth Programs</span>
              </a>
              <div style={{fontSize:11,fontFamily:"'SF Mono',Menlo,monospace",color:"#999",marginTop:6}}>related_program_category → [program_categories]</div>
            </div>

            <div style={{display:"flex",gap:8,marginTop:24,flexWrap:"wrap"}}>
              <a className="btn btn-info btn-sm">Share</a>
              <a className="btn btn-secondary btn-sm">Print</a>
            </div>
          </aside>
          <div>
            <h3 className="t-heading-sm" style={{margin:"0 0 14px"}}>How a six-week pilot quietly became one of the most-requested programs at the Kroc.</h3>
            <p style={{fontSize:15.5,lineHeight:1.7,color:"#1C1B1F",marginBottom:14}}>
              When Coach Reggie pitched a Thursday-night open-gym pilot last fall, nobody on the team thought it would last past Halloween. The court is busy enough already, the lights cost money, and most of our teen members already had a regular slot.
            </p>
            <p style={{fontSize:15.5,lineHeight:1.7,color:"#1C1B1F",marginBottom:14}}>
              By week three, sixty teenagers were showing up. By week six, we'd added a Saturday slot, two volunteer coaches, and a deal with a local pizza shop. <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42"}}>Read the original program proposal</a> for what we got right — and what we'd do differently next time.
            </p>
            <blockquote className="f-jenson" style={{margin:"24px 0",padding:"20px 24px",borderLeft:"3px solid var(--kroc-red)",fontSize:24,lineHeight:1.35,color:"#1C1B1F"}}>
              The gym was the point, but the pizza is what kept them. Once they kept showing up, the rest took care of itself.
            </blockquote>
            <p style={{fontSize:15.5,lineHeight:1.7,color:"#1C1B1F",marginBottom:14}}>
              We're now running late-night basketball every Thursday and Saturday through the spring. The waitlist is at 120. If you'd like to volunteer as a coach or sponsor next season's pizza, <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42"}}>get in touch with our Youth team</a>.
            </p>

            {/* external_article */}
            <div style={{display:"flex",alignItems:"center",gap:10,margin:"24px 0 20px",padding:"14px 18px",background:"#EFEFEF",borderRadius:12}}>
              <Icon name="arrowUR" size={16} color="#575757"/>
              <div>
                <div style={{fontSize:13,color:"#575757",marginBottom:2}}>This story was originally published externally.</div>
                <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:14,cursor:"pointer"}}>View Original Article →</a>
              </div>
              <div style={{marginLeft:"auto",fontSize:11,fontFamily:"'SF Mono',Menlo,monospace",color:"#999"}}>external_article · URL</div>
            </div>

            <div style={{display:"flex",gap:6,marginTop:8,flexWrap:"wrap"}}>
              {["Recreation","Youth","Camden","Community"].map(t=>(<span key={t} className="pill"><span style={{width:8,height:8,background:"var(--kroc-red)",borderRadius:2}}/>{t}</span>))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent stories */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
            <h2 className="t-heading-md" style={{margin:0}}>Recent Stories</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>View All <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            <StoryCard category="Recreation" title="A new kind of pickup game"/>
            <StoryCard category="Youth" title="Robotics club takes nationals"/>
            <StoryCard category="Arts" title="A mural, panel by panel"/>
          </div>
        </div>
      </div>

      <Connect/>
    </PageFrame>
  );
}

Object.assign(window, { Page_Home, Page_AllPrograms, Page_ProgramCategory, Page_ClassDetail, Page_Info, Page_AllStories, Page_StoryDetail });

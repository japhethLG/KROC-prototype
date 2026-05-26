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
      <Header active="Home" location="Camden Kroc Center · Eastern Region"/>

      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0}}>
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

      {/* Find a center */}
      <div className="kroc-main">
        <div style={{maxWidth:1248,margin:"40px auto 0",background:"#fff",borderRadius:20,padding:32,display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"center"}}>
          <div>
            <h2 className="t-heading-md" style={{margin:"0 0 12px"}}>27 Kroc Centers,<br/>one community network.</h2>
            <p style={{color:"#1C1B1F",fontSize:14.5,marginBottom:20}}>
              Find programs, classes, events, and volunteer opportunities at the Kroc Center nearest you.
            </p>
            <div style={{display:"flex",gap:10}}>
              <div className="kroc-input with-icon" style={{flex:1}}><input placeholder="City or ZIP"/></div>
              <a className="btn btn-secondary">Find Center</a>
            </div>
          </div>
          <div style={{aspectRatio:"5/3",background:"#EFEFEF",borderRadius:16,position:"relative",overflow:"hidden"}}>
            <svg viewBox="0 0 400 240" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
              <path d="M30 70 Q90 50 140 80 T260 70 T380 110 L380 200 Q310 220 250 200 T120 210 T20 190 Z" fill="#dcdcdf" stroke="#c4c4c8"/>
              {[[100,110],[170,80],[230,140],[290,100],[150,170],[260,180],[330,150],[80,180]].map(([x,y],i)=>(
                <g key={i} transform={`translate(${x},${y})`}>
                  <path d="M0-14 a8 8 0 1 1 0-.01 z" fill="#002056"/>
                  <circle cx="0" cy="-8" r="3" fill="#fff"/>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* How We Serve */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:20}}>
            <h2 className="t-heading-md" style={{margin:0}}>How We Serve</h2>
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


      {/* Latest Stories */}
      <LatestStories
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

      {/* [donation_block] */}
      <DonationBlock
        title="Every dollar opens a door at the Kroc."
        body="Your gift funds scholarships, free programming, and the staff who make every Kroc Center the most welcoming place in town."
        primaryCta="Donate Now"
        secondaryCta="Other Ways"
        variant="red"
      />

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
  return (
    <PageFrame id="p-programs" n="6.2 · Page" name="All Programs"
      schema="[programs_index]"
      fields={[
        ["Header Title", "Text · required"],
        ["Subheader", "Text"],
        ["Filter Pills", "Auto from [program_categories] · no CMS field"],
        ["CTA Band", "Drag-in [donation_block]"],
      ]}
      notes="Single Page · Hybrid · /programs/ — auto-feeds the 4-up category grid from [program_categories].">

      <Header active="Programs"/>
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
function Page_ProgramCategory(){
  return (
    <PageFrame id="p-program-cat" n="6.3 · Page" name="Program Category — Aquatics"
      schema="[program_categories]"
      fields={[
        ["Category Name", "Text · required · hero H1"],
        ["Icon", "Remote API · kroc-icon in hero"],
        ["Category Intro — Left Column", "Rich Text"],
        ["Category Intro — Right Column", "Rich Text"],
        ["Classes Listing — Search", "Per-list contextual · UI only"],
        ["Classes Listing — Class Type Filter", "All · Roster · Drop-In · UI only"],
        ["Classes Listing — Pagination", "Default 6/page · UI only"],
      ]}
      notes="Pageset · Hybrid · /programs/:category — auto-feeds the Classes grid from [classes] filtered by this category. Featured Stories filtered by category=this.">

      <Header active="Programs"/>

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
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:14,gap:16,flexWrap:"wrap"}}>
            <h2 className="t-heading-md" style={{margin:0}}>Aquatics Classes</h2>
            <div className="kroc-input with-icon" style={{width:300}}><input placeholder="Search Aquatics classes"/></div>
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:18}}>
            {["All","Roster","Drop-In"].map((t,i)=>(<span key={t} className={`pill ${i===0?"active":""}`}>{t}</span>))}
          </div>
          <div style={{fontSize:13,color:"#575757",marginBottom:14}}>1 – 6 of 24 classes</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,rowGap:24}}>
            {[
              ["Adult Learn-to-Swim","Roster","Tue & Thu · 7:00 PM","$95 / 8 weeks"],
              ["Open Lap Swim","Drop-In","Mon–Fri · 6:00–9:00 AM","Members free · $8 drop-in"],
              ["Masters Swim","Roster","M/W/F · 5:30 AM","$120 / 12 weeks"],
              ["Parent & Baby Splash","Drop-In","Sat · 9:30 AM","$10 / session"],
              ["Water Aerobics","Drop-In","T/Th · 10:00 AM","Members free · $8 drop-in"],
              ["Teen Swim Team","Roster","Wed & Fri · 4:30 PM","$80 / 6 weeks"],
            ].map(([t,kind,sched,price])=>(
              <div key={t} className="kroc-card" style={{padding:0}}>
                <div className="img" style={{aspectRatio:"16/9",position:"relative"}}>
                  <span className={`pill sm ${kind==="Drop-In"?"red-fill":"red-outline"}`} style={{position:"absolute",top:14,left:14}}>{kind}</span>
                  <span className="label">16:9 · class hero</span>
                </div>
                <div className="body" style={{padding:"18px 20px"}}>
                  <div style={{fontSize:17,marginBottom:6}}>{t}</div>
                  <div style={{fontSize:13,color:"#575757",marginBottom:6}}>{sched}</div>
                  <div style={{fontSize:14,marginBottom:14}}>{price}</div>
                  <a className="btn btn-primary btn-sm">Register</a>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:32}}><Pagination/></div>
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
        ["Description", "Remote API / Text · About this class body"],
        ["Program Schedule", "Repeater · sidebar Date & Time"],
        ["Audience", "Text / Dropdown · sidebar"],
        ["Facility Location", "Text · sidebar Location"],
        ["Dynamic Price", "Remote API · sidebar with skeleton state"],
        ["Deep Link URL", "URL · Register Now button"],
        ["Tags", "Relational · pill row at bottom"],
      ]}
      notes="Pageset · Hybrid · /programs/:category/:class. Sidebar Price uses a skeleton state until the dynamic price API resolves. Capacity is runtime-only (TractionRec), not a CMS field.">

      <Header active="Programs"/>

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

            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Audience</div>
            <div style={{fontSize:16,marginBottom:14,display:"inline-flex",alignItems:"center",gap:8}}><span className="pill" style={{padding:"4px 10px",fontSize:12}}>Adults · 18+</span></div>

            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Price <span style={{fontSize:11,fontFamily:"'SF Mono',Menlo,monospace",color:"#999"}}>dynamic</span></div>
            <div style={{fontSize:20,marginBottom:14}}>
              <span className="skel" style={{width:80,height:18}}/> <span style={{fontSize:13,color:"#575757"}}>· loading…</span>
            </div>

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

      {/* Other Aquatics Classes */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
            <h2 className="t-heading-md" style={{margin:0}}>Other Aquatics Classes</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>All Aquatics Classes <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {[
              ["Masters Swim","Roster","M/W/F · 5:30–7:00 AM","$120 / 12 weeks"],
              ["Parent & Baby Splash","Drop-In","Sat · 9:30 AM","$10 / session"],
              ["Water Aerobics","Drop-In","T/Th · 10:00 AM","Members free · $8 drop-in"],
            ].map(([t,kind,sched,price])=>(
              <div key={t} className="kroc-card" style={{padding:0}}>
                <div className="img" style={{aspectRatio:"16/9",position:"relative"}}>
                  <span className={`pill sm ${kind==="Drop-In"?"red-fill":"red-outline"}`} style={{position:"absolute",top:14,left:14}}>{kind}</span>
                  <span className="label">16:9 · class hero</span>
                </div>
                <div className="body" style={{padding:"18px 20px"}}>
                  <div style={{fontSize:17,marginBottom:6}}>{t}</div>
                  <div style={{fontSize:13,color:"#575757",marginBottom:6}}>{sched}</div>
                  <div style={{fontSize:14,marginBottom:14}}>{price}</div>
                  <a className="btn btn-primary btn-sm">Register</a>
                </div>
              </div>
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
        ["Page Content", "WYSIWYG · required"],
        ["Access Password", "Text · powers password-gate variant"],
      ]}
      notes="Pageset · Freestyle · /:page_slug. Hero is rendered as a red mission band. Password-gated variant locks content behind Access Password.">

      <Header/>

      <div className="kroc-main">
        <span className="kroc-crumb"><Icon name="chevL" size={14}/> Return to About Us</span>
      </div>

      {/* Red mission band */}
      <div style={{margin:"24px 16px 0",borderRadius:20,background:"var(--kroc-red)",color:"#fff",padding:"56px 48px",textAlign:"center"}}>
        <div style={{fontSize:11,letterSpacing:".14em",textTransform:"uppercase",opacity:.85,marginBottom:10}}>Membership Policies</div>
        <h1 className="t-heading-xl" style={{margin:"0 auto 14px",maxWidth:760}}>Everyone is welcome, and everyone follows the same handful of rules.</h1>
        <p style={{margin:"0 auto",fontSize:17,opacity:.92,maxWidth:640,lineHeight:1.6}}>
          We keep our policies short, clear, and the same for every member — from the day you join to the day you renew.
        </p>
      </div>

      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:840,margin:"0 auto",background:"#fff",borderRadius:20,padding:"48px 56px"}}>
          <h2 className="t-heading-sm" style={{margin:"0 0 14px"}}>1 · Sliding-scale dues</h2>
          <p style={{fontSize:15.5,lineHeight:1.65,color:"#1C1B1F",marginBottom:24}}>
            Membership at any Camden Kroc Center is on a sliding scale based on household size and income. The maximum monthly rate is $42 for adults; the minimum is $0. Nobody is turned away — full stop.
          </p>

          <h2 className="t-heading-sm" style={{margin:"24px 0 14px"}}>2 · Conduct &amp; safety</h2>
          <p style={{fontSize:15.5,lineHeight:1.65,color:"#1C1B1F",marginBottom:8}}>
            We expect every member to treat staff, other members, and the building with respect. Specifically:
          </p>
          <ul style={{margin:"0 0 24px",paddingLeft:22,fontSize:15,lineHeight:1.75,color:"#1C1B1F"}}>
            <li>No harassment, discrimination, or violence — verbal or physical.</li>
            <li>Children under 12 stay with an adult in pool and fitness areas.</li>
            <li>Locker rooms are gendered; family changing rooms are available for any reason.</li>
          </ul>

          <h2 className="t-heading-sm" style={{margin:"24px 0 14px"}}>3 · Cancellation</h2>
          <p style={{fontSize:15.5,lineHeight:1.65,color:"#1C1B1F",marginBottom:14}}>
            Cancel anytime, in person at the front desk or online from your member dashboard. Refunds are pro-rated to the day.
          </p>
          <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:14.5,cursor:"pointer"}}>Download the full policy PDF →</a>
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

/* Pages 6.8 – 6.13 */

function PageFrameB({ id, n, name, schema, fields, notes, children }){
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

/* ===== 6.8 All Tags ===== */
function Page_AllTags(){
  const tags = [
    ["Recreation",24],["Fitness",18],["Aquatics",16],["Youth",22],["Arts",14],["Music",9],
    ["Worship",11],["Education",13],["Tutoring",7],["Volunteers",19],["Seniors",10],["Family",17],
    ["Camden",31],["Wellness",8],["Mentoring",6],["Scholarships",5],
  ];
  return (
    <PageFrameB id="p-tags" n="6.8 · Page" name="All Tags"
      schema="[tags_index]"
      fields={[
        ["Name", "Text · required"],
        ["Description", "Rich Text"],
        ["Sort Options", "A-Z · Most stories · Recently used · UI only"],
      ]}
      notes="Single Page · Hybrid · /tags/. 4-up grid auto-fed from [tags] (wildcard, National). Story counts auto-computed.">

      <Header/>
      <div className="kroc-main">
        <section className="kroc-hero center" style={{margin:0,minHeight:280,aspectRatio:"unset",textAlign:"center"}}>
          <div className="ph-bg"><div className="dims">1400×360 · 16:9</div></div>
          <div className="inner" style={{textAlign:"center",margin:"0 auto"}}>
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:10}}>Browse by Topic</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 12px"}}>Every tag, every story.</h1>
            <p style={{fontSize:17,color:"rgba(255,255,255,.85)",maxWidth:560,margin:"0 auto"}}>
              Tags are how we connect a swim story in Camden to a music story in San Diego.
            </p>
          </div>
        </section>
      </div>

      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
            <div style={{display:"flex",gap:6}}>
              <span className="pill active">A–Z</span>
              <span className="pill">Most stories</span>
              <span className="pill">Recently used</span>
            </div>
            <div className="kroc-input with-icon" style={{width:280}}><input placeholder="Search tags"/></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {tags.map(([t,c]) => (
              <div key={t} className="kroc-card" style={{padding:"20px 22px",cursor:"pointer"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                  <span className="kroc-icon sm">tag</span>
                  <div style={{fontSize:11,color:"#575757",fontFamily:"'SF Mono',Menlo,monospace"}}>#{t.toLowerCase()}</div>
                </div>
                <div style={{fontSize:18,marginBottom:4}}>{t}</div>
                <div style={{fontSize:12.5,color:"#575757"}}>{c} stories · 3 events · 2 programs</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:40}}><Pagination/></div>
        </div>
      </div>

      <Connect/>
    </PageFrameB>
  );
}

/* ===== 6.9 Tag Detail ===== */
function Page_TagDetail(){
  return (
    <PageFrameB id="p-tag" n="6.9 · Page" name="Tag Detail — #Youth"
      schema="[tags]"
      fields={[
        ["Name", "Text · required · wildcard from National"],
        ["Description", "Rich Text"],
        ["Position", "Sort Order"],
        ["Content Type Filter", "All · Stories · Events · Programs · UI only"],
        ["Story / Event Counts", "Auto-computed · no CMS field"],
      ]}
      notes="Pageset · Automated · /tags/:tag_url/. Mixed feed of all content matching this tag.">

      <Header/>
      <div className="kroc-main">
        <span className="kroc-crumb"><Icon name="chevL" size={14}/> All Tags</span>
      </div>

      <div className="kroc-main" style={{marginTop:16}}>
        <section className="kroc-hero center" style={{margin:0,minHeight:280,aspectRatio:"unset",textAlign:"center"}}>
          <div className="ph-bg"><div className="dims">1400×360 · 16:9</div></div>
          <div className="inner" style={{textAlign:"center",margin:"0 auto"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",background:"rgba(255,255,255,.15)",borderRadius:999,marginBottom:14,fontSize:13,fontFamily:"'SF Mono',Menlo,monospace"}}>#youth</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 10px"}}>Youth at the Kroc</h1>
            <p style={{fontSize:16,color:"rgba(255,255,255,.85)",margin:0}}>22 stories · 3 events · 2 programs</p>
          </div>
        </section>
      </div>

      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,flexWrap:"wrap",gap:12}}>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {["All","Stories","Events","Programs"].map((t,i)=>(<span key={t} className={`pill ${i===0?"active":""}`}>{t}</span>))}
            </div>
            <div style={{fontSize:13,color:"#575757"}}>Showing 1–8 of 27</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {Array.from({length:8}).map((_,i) => (
              i % 2 === 0
                ? <StoryCard key={i} category="Youth" title={["Robotics club takes nationals","A new kind of pickup game","The summer-camp class of 2025","Mentoring, year one"][i/2]}/>
                : <EventCard key={i} title={["Teen Open Mic","Youth Career Day","Summer Camp Open House","Family Movie Night"][(i-1)/2]} date="August 9, 2026 · 6–8 PM" address="Camden Kroc · Main Hall"/>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:40}}><Pagination/></div>
        </div>
      </div>

      <Connect/>
    </PageFrameB>
  );
}

/* ===== 6.10 Events Root ===== */
function Page_Events(){
  return (
    <PageFrameB id="p-events" n="6.10 · Page" name="Events Root"
      schema="[events_root]"
      fields={[
        ["Hero Title", "Text · required"],
        ["Hero Subtitle", "Text Area"],
        ["Hero Image", "Image"],
      ]}
      notes="Single Page · Hybrid · /events/. Upcoming events 3-up grid auto-fed from [events], sorted by Start Datetime.">

      <Header active="Events"/>
      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0, aspectRatio:"3/1"}}>
          <div className="ph-bg"><div className="dims">1400×460 · 16:9</div></div>
          <div className="inner">
            <h1 className="t-heading-xl" style={{margin:"0 0 12px"}}>Events</h1>
            <p style={{fontSize:18,color:"rgba(255,255,255,.85)",maxWidth:560}}>
              Concerts, open houses, community nights, and seasonal celebrations — there's something on the calendar every week.
            </p>
            <div style={{display:"flex",gap:8,marginTop:20,flexWrap:"wrap"}}>
              {["Facebook","X","LinkedIn","Instagram"].map(s => (
                <span key={s} style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"#fff"}}>
                  <Icon name={({Facebook:"fb",X:"x",LinkedIn:"li",Instagram:"ig"})[s]} size={16}/>
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:6}}>
            <h2 className="t-heading-md" style={{margin:0}}>Upcoming Events</h2>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              <div className="kroc-input" style={{padding:"8px 14px"}}><span>Sort: Soonest</span><Icon name="chev" size={14}/></div>
            </div>
          </div>
          <div style={{fontSize:13,color:"#575757",marginBottom:18}}>1 – 6 of 20 events</div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,rowGap:24}}>
            {[
              ["Summer Camp Open House","June 14, 2026 · 10 AM – 1 PM"],
              ["Family Pool Night","June 21, 2026 · 5 – 8 PM"],
              ["Teen Open Mic","June 27, 2026 · 7 PM"],
              ["Senior Health Fair","July 9, 2026 · 9 AM – 12 PM"],
              ["Volunteer Onboarding","July 12, 2026 · 6 PM"],
              ["Independence Day BBQ","July 4, 2026 · 12 – 4 PM"],
            ].map(([t,d])=>(
              <EventCard key={t} title={t} date={d} address="Camden Kroc Center · 1234 Community Way"/>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:40}}><Pagination/></div>
        </div>
      </div>

      <Connect/>
    </PageFrameB>
  );
}

/* ===== 6.11 Event Detail ===== */
function Page_EventDetail(){
  return (
    <PageFrameB id="p-event" n="6.11 · Page" name="Event Detail — Summer Camp Open House"
      schema="[events]"
      fields={[
        ["Event Title", "Text · required · H1"],
        ["Event Image", "Image · 16:7 hero"],
        ["Start Datetime", "Datetime · required"],
        ["End Datetime", "Datetime"],
        ["Event Body", "Rich Text (WYSIWYG) · required · About the Event"],
        ["Register Link", "URL / Remote API"],
        ["Address", "Text · required"],
        ["Contact Name", "Text"],
        ["Contact Email", "Text"],
        ["Contact Phone", "Text"],
      ]}
      notes="Pageset · Hybrid · /events/:page_slug/. Mirrors Class Detail layout: hero + 2-col sidebar/body. Map embed uses an OSM tile.">

      <Header active="Events"/>

      <div className="kroc-main">
        <div style={{maxWidth:1248,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
          <span className="kroc-crumb"><Icon name="chevL" size={14}/> Return to all events</span>
          <div style={{display:"flex",alignItems:"center",gap:14,color:"#575757",fontSize:13}}>
            <span>Share Event</span>
            <Icon name="fb" size={16}/><Icon name="x" size={16}/><Icon name="li" size={16}/><Icon name="ig" size={16}/>
          </div>
        </div>

        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <h1 className="t-heading-lg" style={{margin:"0 0 16px"}}>Summer Camp Open House</h1>
          <div className="img-ph" style={{aspectRatio:"16/7"}}><span className="label">1248×546 · 16:7</span></div>
        </div>

        <div style={{maxWidth:1248,margin:"32px auto 0",background:"#fff",borderRadius:20,padding:"40px 48px",display:"grid",gridTemplateColumns:"320px 1fr",gap:48}}>
          <aside>
            <h3 className="t-heading-sm" style={{margin:"0 0 16px"}}>Details</h3>
            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Date &amp; Time</div>
            <div style={{fontSize:16,marginBottom:8}}>Saturday, June 14, 2026<br/>10:00 AM – 1:00 PM</div>
            <a style={{display:"inline-flex",alignItems:"center",gap:6,color:"var(--kroc-red)",fontSize:13.5,marginBottom:18,cursor:"pointer"}}>
              <Icon name="cal" size={14}/> Add to Calendar
            </a>
            <div style={{display:"flex",gap:8,marginBottom:24}}>
              <a className="btn btn-primary btn-sm">Register Here</a>
            </div>

            <div style={{height:1,background:"#eaeaee",margin:"4px 0 18px"}}/>
            <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Location</div>
            <div style={{fontSize:15,marginBottom:8}}>Camden Kroc Center<br/>1234 Community Way, Camden NJ</div>
            <a style={{color:"var(--kroc-red)",display:"inline-flex",alignItems:"center",gap:6,fontSize:13.5,cursor:"pointer",marginBottom:14}}><Icon name="pin" size={14}/> Directions</a>
            <div style={{aspectRatio:"4/3",background:"#EFEFEF",borderRadius:12,position:"relative",overflow:"hidden"}}>
              <svg viewBox="0 0 200 150" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
                <rect width="200" height="150" fill="#EFEFEF"/>
                <path d="M10 40 Q50 30 80 50 T160 60 L190 80 L190 130 Q140 140 100 130 T10 120 Z" fill="#dcdcdf"/>
                <g transform="translate(100,70)">
                  <path d="M0-14 a8 8 0 1 1 0-.01 z" fill="#EF3E42"/>
                  <circle cx="0" cy="-8" r="3" fill="#fff"/>
                </g>
              </svg>
            </div>
          </aside>

          <div>
            <h3 className="t-heading-sm" style={{margin:"0 0 14px"}}>About the Event</h3>
            <p style={{fontSize:15.5,lineHeight:1.65,color:"#1C1B1F",marginBottom:14}}>
              Walk through every camp track in 90 minutes. Meet the counselors, see the studios, take a swim test, and register on the spot — most kids will be enrolled before they leave.
            </p>
            <p style={{fontSize:15.5,lineHeight:1.65,color:"#1C1B1F",marginBottom:14}}>
              Open to any child entering grades K–8 next fall. Families welcome. Lunch is on us.
            </p>
            <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:14.5,cursor:"pointer"}}>View More →</a>

            <div style={{height:1,background:"#eaeaee",margin:"24px 0"}}/>
            <h4 style={{fontSize:16,margin:"0 0 10px"}}>Contact</h4>
            <div style={{marginBottom:4,fontSize:15}}>Jennifer Smith · Camp Director</div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
              <Icon name="mail" size={14} color="#EF3E42"/>
              <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:14.5,cursor:"pointer"}}>jennifer.smith@kroccenters.org</a>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <Icon name="phone" size={14} color="#EF3E42"/>
              <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:14.5,cursor:"pointer"}}>(856) 555-0123</a>
            </div>
          </div>
        </div>
      </div>

      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <h2 className="t-heading-md" style={{margin:"0 0 18px"}}>Other Events</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            <EventCard title="Family Pool Night" date="June 21, 2026 · 5–8 PM" address="Camden Kroc · Pool"/>
            <EventCard title="Teen Open Mic" date="June 27, 2026 · 7 PM" address="Camden Kroc · Main Hall"/>
            <EventCard title="Independence Day BBQ" date="July 4, 2026 · 12–4 PM" address="Camden Kroc · Plaza"/>
          </div>
        </div>
      </div>

      <Connect/>
    </PageFrameB>
  );
}

/* ===== 6.12 Contact Us ===== */
function Page_Contact(){
  return (
    <PageFrameB id="p-contact" n="6.12 · Page" name="Contact Us"
      schema="[contact_us]"
      fields={[
        ["Page Title", "Text · required"],
        ["Page Intro", "Text Area"],
        ["Department Contacts", "Repeater (Department Name, Email, Phone) · sidebar 'Reach a Team'"],
      ]}
      notes="Single Page · Hybrid · /contact/. Address + Hours auto from [kroc_location]. Form is a drag-in [custom_forms]. FAQs and People Block are drag-in blocks. Connect footer is replaced with a cross-link card to avoid recursion.">

      <Header active="Contact Us"/>

      <div className="kroc-main">
        <div style={{maxWidth:1248,margin:"0 auto",padding:"24px 0"}}>
          <div style={{fontSize:12,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:10}}>Camden Kroc Center</div>
          <h1 className="t-heading-xl" style={{margin:"0 0 14px"}}>We'd love to hear from you.</h1>
          <p style={{fontSize:17,color:"#1C1B1F",maxWidth:600,marginBottom:0}}>
            Drop a message below or get in touch with the right team directly. We typically respond within two business days.
          </p>
        </div>
      </div>

      <div className="kroc-main">
        <div style={{maxWidth:1248,margin:"24px auto 0",display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:24}}>
          {/* form */}
          <div style={{background:"#fff",borderRadius:20,padding:"40px 44px"}}>
            <h3 className="t-heading-sm" style={{margin:"0 0 4px"}}>Send Us a Message</h3>
            <p style={{color:"#575757",margin:"0 0 24px",fontSize:14}}>All fields required unless marked optional.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
              <div className="kroc-input"><input placeholder="First name"/></div>
              <div className="kroc-input"><input placeholder="Last name"/></div>
            </div>
            <div className="kroc-input" style={{marginBottom:12}}><input placeholder="Email"/></div>
            <div className="kroc-input" style={{marginBottom:12}}><input placeholder="Phone (optional)"/></div>
            <div className="kroc-input" style={{marginBottom:12}}><input placeholder="Topic — e.g. Membership, Programs, Volunteer"/></div>
            <div className="kroc-input" style={{marginBottom:12,alignItems:"flex-start"}}>
              <textarea rows="5" placeholder="How can we help?" style={{flex:1,background:"none",border:0,outline:"none",fontFamily:"inherit",fontSize:14,resize:"vertical"}}/>
            </div>
            <label style={{display:"flex",gap:8,fontSize:13,color:"#575757",marginBottom:20}}>
              <input type="checkbox"/>I'd like to receive Kroc updates by email.
            </label>
            <a className="btn btn-primary">Send Message</a>
          </div>

          {/* sidebar */}
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{background:"#fff",borderRadius:20,padding:"24px 28px"}}>
              <h4 style={{fontSize:16,margin:"0 0 10px"}}>Visit Us</h4>
              <div style={{fontSize:14.5,marginBottom:8}}>1234 Community Way<br/>Camden, NJ 08103</div>
              <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:13.5,cursor:"pointer"}}>Get Directions →</a>
              <div style={{height:1,background:"#eaeaee",margin:"16px 0"}}/>
              <div style={{fontSize:13,color:"#575757",marginBottom:4}}>Center Hours</div>
              <div style={{fontSize:14}}>Mon–Fri · 5:30 AM – 10 PM<br/>Saturday · 7 AM – 8 PM<br/>Sunday · 9 AM – 6 PM</div>
            </div>
            <div style={{background:"#fff",borderRadius:20,padding:"24px 28px"}}>
              <h4 style={{fontSize:16,margin:"0 0 10px"}}>Reach a Team</h4>
              {[
                ["Membership","membership@kroccenters.org","(856) 555-0100"],
                ["Programs","programs@kroccenters.org","(856) 555-0110"],
                ["Volunteer","volunteer@kroccenters.org","(856) 555-0120"],
                ["Press","press@kroccenters.org","—"],
              ].map(([t,e,p],i)=>(
                <div key={t} style={{padding:"10px 0",borderTop:i?"1px solid #eaeaee":"none",fontSize:14}}>
                  <div style={{fontWeight:500,marginBottom:2}}>{t}</div>
                  <a style={{color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",cursor:"pointer"}}>{e}</a>
                  <div style={{color:"#575757",fontSize:13}}>{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* People block — informal */}
        <div style={{maxWidth:1248,margin:"48px auto 0"}}>
          <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:6}}>People Block · open question — informal model</div>
          <h2 className="t-heading-md" style={{margin:"0 0 18px"}}>Camden Leadership</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {[
              ["Marcus Johnson","Executive Director"],
              ["Jennifer Smith","Director of Programs"],
              ["Reggie Lewis","Director of Recreation"],
              ["Priya Patel","Director of Volunteers"],
            ].map(([n,r])=>(
              <div key={n} className="kroc-card" style={{padding:0}}>
                <div className="img" style={{aspectRatio:"4/5"}}><span className="label">portrait · 4:5</span></div>
                <div className="body" style={{padding:"16px 20px"}}>
                  <div style={{fontSize:17}}>{n}</div>
                  <div style={{fontSize:13,color:"#575757"}}>{r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs — drag-in block, freestyle body region */}
        <div style={{maxWidth:1248,margin:"48px auto 0"}}>
          <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:6}}>Block · [faqs] — drag-in</div>
          <FaqList
            title="Before You Reach Out"
            items={[
              ["What are your hours?", "Mon–Fri 5:30 AM – 10 PM, Saturday 7 AM – 8 PM, Sunday 9 AM – 6 PM. Holiday hours are posted on the homepage banner two weeks in advance."],
              ["Do I need a membership to come in?", "No — drop-in passes are available at the front desk, and many community events are free and open. Members get priority program registration and discounted pricing."],
              ["Where do I park?", "Free parking is available in the main lot off Community Way. Overflow parking opens on weekends in the adjacent church lot. Two ADA-accessible spaces are at the main entrance."],
              ["How do I sign up for a class?", "Most classes register through TractionRec — there's a 'Register' link on every class page that takes you straight in without the extra login screen."],
              ["I'd like to volunteer — how do I start?", "Head to the Volunteers page to browse current openings, or email volunteer@kroccenters.org. Most roles start with a 30-minute orientation."],
            ]}
          />
        </div>

        {/* Cross-link replaces Connect on Contact */}
        <div style={{maxWidth:1248,margin:"48px auto 32px",background:"var(--kroc-navy)",color:"#fff",borderRadius:20,padding:"40px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <div>
            <div style={{fontSize:11,letterSpacing:".14em",textTransform:"uppercase",opacity:.7,marginBottom:8}}>Stay In Touch</div>
            <h3 className="t-heading-sm" style={{margin:"0 0 6px"}}>Sign up for Kroc updates without leaving Contact.</h3>
            <p style={{margin:0,opacity:.85,fontSize:14}}>The full Connect block lives on every other page — head back to the homepage to subscribe.</p>
          </div>
          <a className="btn btn-light">Visit Home →</a>
        </div>
      </div>
    </PageFrameB>
  );
}

/* ===== 6.13 Volunteers ===== */
function Page_Volunteers(){
  return (
    <PageFrameB id="p-volunteers" n="6.13 · Page" name="Volunteers"
      schema="[volunteers]"
      fields={[
        ["Hero Title", "Text · required"],
        ["Hero Subtitle", "Text Area"],
        ["Hero Image", "Image"],
        ["Hero CTA 1 Label + URL", "Text + URL"],
        ["Hero CTA 2 Label + URL", "Text + URL"],
        ["Highlight Image", "Image"],
        ["Highlight Title", "Text"],
        ["Highlight Body", "Rich Text"],
        ["Highlight CTA Label + URL", "Text + URL"],
        ["Why Volunteer Image", "Image"],
        ["Why Volunteer Body", "Rich Text"],
        ["Golden API Failure Copy", "Text Area · required · ⚠️ pending"],
      ]}
      notes="Single Page · Hybrid · /volunteer/. Featured Opportunities cards stream from the Golden API with a skeleton state. Image Gallery is a drag-in block.">

      <Header active="Volunteer"/>

      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0, aspectRatio:"3/1"}}>
          <div className="ph-bg"><div className="dims">1400×460 · 16:9</div></div>
          <div className="inner">
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:10}}>Volunteer</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 12px"}}>Show up. Stay a while.</h1>
            <p style={{fontSize:17,color:"rgba(255,255,255,.85)",maxWidth:560,marginBottom:24}}>
              The Kroc runs on volunteers — coaches, mentors, kitchen hands, front-desk smiles. Find a slot that fits your schedule.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a className="btn btn-light">View All Opportunities</a>
              <a className="btn btn-outline-light">Featured Roles</a>
            </div>
          </div>
        </section>
      </div>

      {/* Featured opportunities — Golden API */}
      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
            <h2 className="t-heading-md" style={{margin:0}}>Featured Volunteer Opportunities</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>View All Local Opportunities <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{fontSize:12,fontFamily:"'SF Mono',Menlo,monospace",color:"#575757",marginBottom:14}}>← live from Golden API · skeleton until resolved</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <OppCard title="Afterschool Tutor — K–5 Math" city="Camden, NJ" body="Spend 90 minutes a week with a small group of elementary students working on number sense and fluency. Training provided; ongoing commitment preferred."/>
            <OppCard title="Pool Deck Volunteer" city="Camden, NJ" body="Help our aquatics team during open-swim hours — towel handout, lane setup, and a friendly face at the entry desk. Lifeguard certification not required."/>
            <OppCard skeleton/>
            <OppCard skeleton/>
          </div>
        </div>
      </div>

      {/* Highlight — Bell Ringer */}
      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto",background:"#fff",borderRadius:20,padding:0,overflow:"hidden",display:"grid",gridTemplateColumns:"5fr 7fr"}}>
          <div className="img-ph" style={{aspectRatio:"unset",borderRadius:0,minHeight:340}}><span className="label">3:2 · 660×440</span></div>
          <div style={{padding:"40px 44px"}}>
            <h2 className="t-heading-md" style={{margin:"0 0 14px"}}>Volunteer as a Holiday Ambassador</h2>
            <p style={{fontSize:15,lineHeight:1.6,color:"#1C1B1F",marginBottom:14}}>
              Every December, the Camden Kroc partners with local businesses for our holiday gift drive. Volunteer slots run two hours at a time — sign up for as many as you can.
            </p>
            <p style={{fontSize:15,lineHeight:1.6,color:"#1C1B1F",marginBottom:20}}>
              No prior experience needed. We'll train you on the day, hand you a kettle and a smile, and you'll be out in the community by 9 AM.
            </p>
            <a className="btn btn-secondary">Register to Volunteer</a>
          </div>
        </div>
      </div>

      {/* Why Volunteer */}
      <div className="kroc-main" style={{marginTop:32}}>
        <div style={{maxWidth:1248,margin:"0 auto",background:"#fff",borderRadius:20,padding:0,overflow:"hidden",display:"grid",gridTemplateColumns:"7fr 5fr"}}>
          <div style={{padding:"40px 44px"}}>
            <h2 className="t-heading-md" style={{margin:"0 0 14px"}}>Why Volunteer at the Kroc?</h2>
            <p style={{fontSize:15,lineHeight:1.6,color:"#1C1B1F",marginBottom:14}}>
              Because the Kroc only works when the community shows up for itself. Our volunteers run programs, mentor kids, staff events, and quietly hold the whole place together.
            </p>
            <p style={{fontSize:15,lineHeight:1.6,color:"#1C1B1F",marginBottom:0}}>
              And because it's good for you, too — every volunteer gets free use of the fitness center, a flexible schedule built around your life, and the company of a few hundred people who picked the same thing.
            </p>
          </div>
          <div className="img-ph" style={{aspectRatio:"unset",borderRadius:0,minHeight:300}}><span className="label">3:2 · 660×440</span></div>
        </div>
      </div>

      {/* Image gallery — drag-in block, freestyle body region */}
      <div className="kroc-main" style={{marginTop:40}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:6}}>Block · [image_gallery] — drag-in</div>
          <ImageGallery
            title="Volunteers In Action"
            tiles={[
              ["tutoring · K–5",        2, 2],
              ["pool deck",             1, 1],
              ["kettle drive",          1, 1],
              ["front desk",            1, 2],
              ["summer camp",           2, 1],
              ["meal pack",             1, 1],
              ["family night",          1, 1],
            ]}
          />
        </div>
      </div>

      {/* Local volunteer stories */}
      <div className="kroc-main" style={{marginTop:48}}>
        <div style={{maxWidth:1248,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18}}>
            <h2 className="t-heading-md" style={{margin:0}}>Local Volunteer Stories</h2>
            <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>View All Stories <Icon name="arrowUR" size={14}/></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            <StoryCard category="Volunteer" title="Three years on the pool deck"/>
            <StoryCard category="Volunteer" title="The tutoring shift that changed her major"/>
            <StoryCard category="Volunteer" title="Why he comes back every Saturday"/>
          </div>
        </div>
      </div>

      <Connect/>
    </PageFrameB>
  );
}

Object.assign(window, { Page_AllTags, Page_TagDetail, Page_Events, Page_EventDetail, Page_Contact, Page_Volunteers });

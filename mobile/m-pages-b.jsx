/* ============================================================
   KROC Mobile — Pages 6.8 – 6.14
   ============================================================ */

const grid2b = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };

/* ===== 6.8 All Tags ===== */
function Page_AllTags() {
  const { navigate, openMenu } = useNav();
  const [sort, setSort] = React.useState("A–Z");
  const tags = [
    ["Recreation", 24], ["Fitness", 18], ["Aquatics", 16], ["Youth", 22], ["Arts", 14], ["Music", 9],
    ["Worship", 11], ["Education", 13], ["Volunteers", 19], ["Seniors", 10], ["Camden", 31], ["Family", 17],
  ];
  return (
    <div>
      <MobileHeader active="tags" onOpenMenu={openMenu} crumb={{ label: "Home", onClick: () => navigate("home") }} />
      <div className="m-section">
        <Hero center eyebrow="Browse by Topic" title="Every tag, every story." titleClass="t-h1"
          sub="Tags are how we connect a swim story in Camden to a music story in San Diego." short dims="1400×360" />
      </div>

      <div className="m-section">
        <div className="m-input" style={{ marginBottom: 14 }}><span className="lead"><Icon name="search" size={16} /></span><input placeholder="Search tags" /></div>
        <FilterRow items={["A–Z", "Most stories", "Recently used"]} value={sort} onChange={setSort} />
        <div style={grid2b}>
          {tags.map(([t, c]) => (
            <div key={t} className="card" style={{ padding: 16, cursor: "pointer" }} onClick={() => navigate("tag")}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span className="kroc-icon sm">tag</span>
                <div className="t-xs text-muted mono">#{t.toLowerCase()}</div>
              </div>
              <div className="t-title" style={{ marginBottom: 4 }}>{t}</div>
              <div className="t-xs text-muted">{c} stories · 3 events</div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.9 Tag Detail ===== */
function Page_TagDetail() {
  const { navigate, openMenu } = useNav();
  const [f, setF] = React.useState("All");
  return (
    <div>
      <MobileHeader active="tags" onOpenMenu={openMenu} crumb={{ label: "All Tags", onClick: () => navigate("tags") }} />
      <div className="m-section">
        <Hero center badge="#youth" title="Youth at the Kroc" titleClass="t-h1" sub="22 stories · 3 events · 2 programs" short dims="1400×360" />
      </div>

      <div className="m-section">
        <FilterRow items={["All", "Stories", "Events", "Programs"]} value={f} onChange={setF} />
        <div className="t-sm text-muted" style={{ marginBottom: 14 }}>Showing 1–6 of 27</div>
        <div style={{ display: "grid", gap: 14 }}>
          <StoryCard category="Youth" title="Robotics club takes nationals" body="A scrappy after-school team built a robot in a converted art room — and beat schools triple their size." />
          <EventCard title="Teen Open Mic" date="August 9, 2026 · 6–8 PM" address="Camden Kroc · Main Hall" />
          <StoryCard category="Youth" title="The summer-camp class of 2025" body="Two hundred kids, eight weeks, one unforgettable talent show finale." />
          <EventCard title="Youth Career Day" date="September 14, 2026 · 10 AM" address="Camden Kroc · Gym" />
        </div>
        <Pagination />
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.10 Events Root ===== */
function Page_Events() {
  const { navigate, openMenu } = useNav();
  const [tab, setTab] = React.useState("Upcoming");
  const upcoming = [
    ["Summer Camp Open House", "June 14, 2026 · 10 AM – 1 PM"], ["Family Pool Night", "June 21, 2026 · 5 – 8 PM"],
    ["Teen Open Mic", "June 27, 2026 · 7 PM"], ["Senior Health Fair", "July 9, 2026 · 9 AM – 12 PM"],
    ["Independence Day BBQ", "July 4, 2026 · 12 – 4 PM"],
  ];
  const past = [
    ["Spring Family 5K", "April 12, 2026 · 8 AM"], ["Community Easter Egg Hunt", "March 30, 2026 · 11 AM"],
    ["Winter Talent Showcase", "February 21, 2026 · 6 PM"],
  ];
  const events = tab === "Upcoming" ? upcoming : past;
  return (
    <div>
      <MobileHeader active="events" onOpenMenu={openMenu} />
      <div className="m-section">
        <Hero title="Events" sub="Concerts, open houses, community nights, and seasonal celebrations — something on the calendar every week." dims="1400×460">
          <div style={{ display: "flex", gap: 8 }}>
            {["fb", "x", "li", "ig"].map((s) => <span key={s} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><Icon name={s} size={16} /></span>)}
          </div>
        </Hero>
      </div>

      <div className="m-section">
        <FilterRow items={["Upcoming", "Past"]} value={tab} onChange={setTab} />
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          <span className="m-select">June 2026 <Icon name="chev" size={14} /></span>
          <span className="m-select">Sort: Soonest <Icon name="chev" size={14} /></span>
        </div>
        <div className="t-sm text-muted" style={{ marginBottom: 14 }}>{tab === "Upcoming" ? "1 – 5 of 20 upcoming" : "1 – 3 of 42 past events"}</div>
        <div style={{ display: "grid", gap: 14 }}>
          {events.map(([t, d]) => <EventCard key={t} title={t} date={d} address="Camden Kroc Center · 1234 Community Way" past={tab === "Past"} />)}
        </div>
        <Pagination />
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.11 Event Detail ===== */
function Page_EventDetail() {
  const { navigate, openMenu, stickyOn } = useNav();
  return (
    <div>
      <MobileHeader active="events" onOpenMenu={openMenu} crumb={{ label: "Return to all events", onClick: () => navigate("events") }} />
      <div className="m-section">
        <div className="m-share" style={{ justifyContent: "flex-end", marginBottom: 12, fontSize: 12.5 }}>
          <span>Share</span><Icon name="fb" size={16} /><Icon name="x" size={16} /><Icon name="li" size={16} /><Icon name="ig" size={16} />
        </div>
        <h1 className="t-h1" style={{ margin: "0 0 14px" }}>Summer Camp Open House</h1>
        <PH ratio="16/9" label="1248×546 · 16:7" dims="16:7" />
      </div>

      <div className="m-section">
        <div className="m-panel">
          <h2 className="t-h3" style={{ margin: "0 0 14px" }}>Details</h2>
          <div className="m-meta-k">Date &amp; Time</div>
          <div className="m-meta-v" style={{ marginBottom: 6 }}>Saturday, June 14, 2026 · 10:00 AM – 1:00 PM</div>
          <a className="text-red t-sm" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}><Icon name="cal" size={14} /> Add to Calendar</a>
          {!stickyOn && <a className="btn btn-primary btn-block" style={{ marginBottom: 16 }}>Register Here</a>}
          <div className="m-divider" />
          <div className="m-meta-k">Location</div>
          <div className="m-meta-v" style={{ marginBottom: 6 }}>Camden Kroc Center · 1234 Community Way, Camden NJ</div>
          <a className="text-red t-sm" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 14 }}><Icon name="pin" size={14} /> Directions</a>
          <div style={{ aspectRatio: "16/10", background: "#EFEFEF", borderRadius: 12, position: "relative", overflow: "hidden" }}>
            <svg viewBox="0 0 200 125" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <rect width="200" height="125" fill="#EFEFEF" />
              <path d="M10 40 Q50 30 80 50 T160 55 L190 75 L190 110 Q140 120 100 110 T10 100 Z" fill="#dcdcdf" />
              <g transform="translate(100,62)"><path d="M0-14 a8 8 0 1 1 0-.01 z" fill="#EF3E42" /><circle cx="0" cy="-8" r="3" fill="#fff" /></g>
            </svg>
          </div>
        </div>
      </div>

      <div className="m-section">
        <h2 className="t-h2" style={{ margin: "0 0 12px" }}>About the Event</h2>
        <p className="t-body" style={{ margin: "0 0 12px" }}>Walk through every camp track in 90 minutes. Meet the counselors, see the studios, take a swim test, and register on the spot — most kids will be enrolled before they leave.</p>
        <p className="t-body" style={{ margin: "0 0 12px" }}>Open to any child entering grades K–8 next fall. Families welcome. Lunch is on us.</p>
        <a className="link t-sm">View More →</a>
        <div className="m-divider" />
        <h3 className="t-h3" style={{ margin: "0 0 10px" }}>Contact</h3>
        <div className="t-body" style={{ marginBottom: 8 }}>Jennifer Smith · Camp Director</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}><Icon name="mail" size={14} color="#EF3E42" /><a className="link t-sm">jennifer.smith@kroccenters.org</a></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="phone" size={14} color="#EF3E42" /><a className="link t-sm">(856) 555-0123</a></div>
      </div>

      <div className="m-section">
        <SectionHead title="Other Events" seeAll="All Events" onSeeAll={() => navigate("events")} />
        <Carousel width="80%">
          <EventCard title="Family Pool Night" date="June 21, 2026 · 5–8 PM" address="Camden Kroc · Pool" />
          <EventCard title="Teen Open Mic" date="June 27, 2026 · 7 PM" address="Camden Kroc · Main Hall" />
          <EventCard title="Independence Day BBQ" date="July 4, 2026 · 12–4 PM" address="Camden Kroc · Plaza" />
        </Carousel>
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.12 Contact Us ===== */
function Page_Contact() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="contact" onOpenMenu={openMenu} />
      <div className="m-section">
        <div className="eyebrow text-red" style={{ marginBottom: 8 }}>Camden Kroc Center</div>
        <h1 className="t-h1" style={{ margin: "0 0 12px" }}>We'd love to hear from you.</h1>
        <p className="t-body">Drop a message below or get in touch with the right team directly. We typically respond within two business days.</p>
      </div>

      {/* form */}
      <div className="m-section">
        <div className="m-panel">
          <h2 className="t-h3" style={{ margin: "0 0 4px" }}>Send Us a Message</h2>
          <p className="t-sm text-muted" style={{ margin: "0 0 18px" }}>All fields required unless marked optional.</p>
          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div className="m-input"><input placeholder="First name" /></div>
              <div className="m-input"><input placeholder="Last name" /></div>
            </div>
            <div className="m-input"><input placeholder="Email" /></div>
            <div className="m-input"><input placeholder="Phone (optional)" /></div>
            <div className="m-input"><input placeholder="Topic — Membership, Programs…" /></div>
            <div className="m-input" style={{ alignItems: "flex-start" }}><textarea rows="4" placeholder="How can we help?" /></div>
            <label style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--kroc-dark)", alignItems: "center" }}><input type="checkbox" /> I'd like to receive Kroc updates by email.</label>
            <a className="btn btn-primary btn-block">Send Message</a>
          </div>
        </div>
      </div>

      {/* visit + teams */}
      <div className="m-section">
        <div className="m-panel" style={{ marginBottom: 12 }}>
          <h3 className="t-h3" style={{ margin: "0 0 10px" }}>Visit Us</h3>
          <div className="t-body" style={{ marginBottom: 8 }}>1234 Community Way<br />Camden, NJ 08103</div>
          <a className="link t-sm">Get Directions →</a>
          <div className="m-divider" />
          <div className="m-meta-k">Center Hours</div>
          <div className="t-body">Mon–Fri · 5:30 AM – 10 PM<br />Saturday · 7 AM – 8 PM<br />Sunday · 9 AM – 6 PM</div>
        </div>
        <div className="m-panel">
          <h3 className="t-h3" style={{ margin: "0 0 10px" }}>Reach a Team</h3>
          {[["Membership", "membership@kroccenters.org", "(856) 555-0100"], ["Programs", "programs@kroccenters.org", "(856) 555-0110"], ["Volunteer", "volunteer@kroccenters.org", "(856) 555-0120"], ["Press", "press@kroccenters.org", "—"]].map(([t, e, p], i) => (
            <div key={t} style={{ padding: "10px 0", borderTop: i ? "1px solid #eaeaee" : "none" }}>
              <div className="t-body" style={{ fontWeight: 500, marginBottom: 2 }}>{t}</div>
              <a className="link t-sm">{e}</a>
              <div className="t-xs text-muted">{p}</div>
            </div>
          ))}
        </div>
      </div>

      {/* people block */}
      <div className="m-section">
        <SectionHead title="Camden Leadership" />
        <div style={grid2b}>
          {[["Marcus Johnson", "Executive Director"], ["Jennifer Smith", "Director of Programs"], ["Reggie Lewis", "Director of Recreation"], ["Priya Patel", "Director of Volunteers"]].map(([n, r]) => (
            <div key={n} className="card">
              <PH ratio="4/5" label="portrait · 4:5" style={{ borderRadius: 0 }} />
              <div className="cbody" style={{ padding: "12px 14px" }}>
                <div className="t-title">{n}</div>
                <div className="t-xs text-muted">{r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="m-section">
        <Faq title="Before You Reach Out" items={[
          ["What are your hours?", "Mon–Fri 5:30 AM – 10 PM, Saturday 7 AM – 8 PM, Sunday 9 AM – 6 PM. Holiday hours are posted on the homepage banner two weeks in advance."],
          ["Do I need a membership to come in?", "No — drop-in passes are available at the front desk, and many community events are free and open. Members get priority registration and discounted pricing."],
          ["Where do I park?", "Free parking is available in the main lot off Community Way. Overflow opens on weekends in the adjacent church lot. Two ADA spaces are at the main entrance."],
          ["How do I sign up for a class?", "Most classes register through TractionRec — there's a 'Register' link on every class page that takes you straight in."],
          ["I'd like to volunteer — how do I start?", "Head to the Volunteers page to browse openings, or email volunteer@kroccenters.org. Most roles start with a 30-minute orientation."],
        ]} />
      </div>

      {/* cross-link (replaces Connect on Contact) */}
      <div className="m-section">
        <div className="m-band navy">
          <div className="eyebrow" style={{ opacity: .7, marginBottom: 8 }}>Stay In Touch</div>
          <h3 className="t-h3" style={{ margin: "0 0 6px" }}>Sign up for Kroc updates without leaving Contact.</h3>
          <p className="t-sm" style={{ margin: "0 0 16px", opacity: .85 }}>The full Connect block lives on every other page — head back to the homepage to subscribe.</p>
          <a className="btn btn-light" onClick={() => navigate("home")}>Visit Home →</a>
        </div>
      </div>
      <div style={{ height: 8 }} />
    </div>
  );
}

/* ===== 6.13 Volunteers ===== */
function Page_Volunteers() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="volunteers" onOpenMenu={openMenu} />
      <div className="m-section">
        <Hero eyebrow="Volunteer" title="Show up. Stay a while." titleClass="t-h1"
          sub="The Kroc runs on volunteers — coaches, mentors, kitchen hands, front-desk smiles. Find a slot that fits your schedule." dims="1400×460">
          <div style={{ display: "grid", gap: 10 }}>
            <a className="btn btn-light btn-block">View All Opportunities</a>
            <a className="btn btn-outline-light btn-block">Featured Roles</a>
          </div>
        </Hero>
      </div>

      <div className="m-section">
        <SectionHead title="Featured Opportunities" />
        <Carousel width="80%">
          <OppCard title="Summer Food Program 2026" dateline="Jun 1 – Aug 7, 2026" body="Mornings, two-shift options · help serve meals 11:30 AM – 1:00 PM in our community kitchen." />
          <OppCard title="Afterschool Tutor — K–5 Math" dateline="Ongoing · Sep 2026 – May 2027" body="90 min/week with a small group of elementary students · training provided." />
          <OppCard title="Holiday Ambassador" dateline="Dec 1 – Dec 24, 2026" body="Two-hour shifts at kettle locations across Camden. Train on the day; no prior experience needed." />
        </Carousel>
      </div>

      {/* highlight */}
      <div className="m-section">
        <div className="card">
          <PH ratio="3/2" label="3:2 · 660×440" style={{ borderRadius: 0 }} />
          <div className="cbody" style={{ padding: 20 }}>
            <h2 className="t-h2" style={{ margin: "0 0 12px" }}>Volunteer as a Holiday Ambassador</h2>
            <p className="t-body" style={{ margin: "0 0 12px" }}>Every December, the Camden Kroc partners with local businesses for our holiday gift drive. Slots run two hours at a time — sign up for as many as you can.</p>
            <p className="t-body" style={{ margin: "0 0 18px" }}>No prior experience needed. We'll train you on the day, hand you a kettle and a smile, and you'll be out in the community by 9 AM.</p>
            <a className="btn btn-secondary">Register to Volunteer</a>
          </div>
        </div>
      </div>

      {/* why volunteer */}
      <div className="m-section">
        <div className="card">
          <div className="cbody" style={{ padding: 20 }}>
            <h2 className="t-h2" style={{ margin: "0 0 12px" }}>Why Volunteer at the Kroc?</h2>
            <p className="t-body" style={{ margin: "0 0 12px" }}>Because the Kroc only works when the community shows up for itself. Our volunteers run programs, mentor kids, staff events, and quietly hold the whole place together.</p>
            <p className="t-body" style={{ margin: 0 }}>And because it's good for you, too — every volunteer gets free use of the fitness center, a flexible schedule, and the company of a few hundred people who picked the same thing.</p>
          </div>
          <PH ratio="3/2" label="3:2 · 660×440" style={{ borderRadius: 0 }} />
        </div>
      </div>

      {/* gallery */}
      <div className="m-section">
        <ImageGallery title="Volunteers In Action" tiles={[["tutoring", 2, 2], ["pool deck", 1, 1], ["kettle drive", 1, 1], ["front desk", 1, 1], ["summer camp", 1, 1], ["meal pack", 2, 1]]} />
      </div>

      {/* stories */}
      <div className="m-section">
        <SectionHead title="Local Volunteer Stories" seeAll="View All" onSeeAll={() => navigate("stories")} />
        <Carousel width="80%">
          <StoryCard category="Volunteer" title="Three years on the pool deck" body="Why one retiree shows up for every open-swim shift, rain or shine." />
          <StoryCard category="Volunteer" title="The tutoring shift that changed her major" body="A college sophomore found her calling one Tuesday afternoon at a time." />
          <StoryCard category="Volunteer" title="Why he comes back every Saturday" body="For one Camden dad, the kettle line is the best part of the week." />
        </Carousel>
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.14 Volunteer Opportunity Detail ===== */
function Page_VolunteerDetail() {
  const { navigate, openMenu, stickyOn } = useNav();
  return (
    <div>
      <MobileHeader active="volunteers" onOpenMenu={openMenu} crumb={{ label: "Return to all opportunities", onClick: () => navigate("volunteers") }} />
      <div className="m-section">
        <div className="m-share" style={{ justifyContent: "flex-end", marginBottom: 12, fontSize: 12.5 }}>
          <span>Share</span><Icon name="fb" size={16} /><Icon name="x" size={16} /><Icon name="li" size={16} /><Icon name="ig" size={16} />
        </div>
        <div className="eyebrow text-red" style={{ marginBottom: 8 }}>Volunteer Opportunity</div>
        <h1 className="t-h1" style={{ margin: "0 0 14px" }}>Summer Food Program 2026</h1>
        <PH ratio="16/9" label="1248×546 · 16:7" dims="16:7" />
      </div>

      <div className="m-section">
        <div className="m-panel">
          <div className="m-meta-k">Date Range</div>
          <div className="m-meta-v">Mon, Jun 1, 2026 – Fri, Aug 7, 2026</div>
          <div className="m-meta-k">Shifts</div>
          <div style={{ marginBottom: 14 }}>
            {[["Morning", "10:30 – 11:30 AM"], ["Midday", "11:15 AM – 1:15 PM"]].map(([l, t]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #f0f0f2", fontSize: 14 }}>
                <span style={{ fontWeight: 500 }}>{l}</span><span className="text-muted">{t}</span>
              </div>
            ))}
          </div>
          <div className="m-meta-k">Location</div>
          <div className="m-meta-v">Camden Kroc Center · Main Kitchen</div>
          <div className="m-meta-k">Required Trainings</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}><Icon name="lock" size={14} /><a className="link t-sm">Civil Rights Training</a></div>
          {!stickyOn && (
            <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
              <a className="btn btn-primary btn-block">Sign Up to Volunteer</a>
              <a className="btn btn-info btn-block btn-sm"><Icon name="cal" size={14} /> Add to Calendar</a>
            </div>
          )}
          <div className="m-divider" />
          <div className="m-meta-k">Questions?</div>
          <div className="t-body">Dylan Reyes</div>
          <a className="link t-sm" style={{ display: "block", marginBottom: 2 }}>dylan@kroccenters.org</a>
          <div className="t-xs text-muted">(217) 231-5655</div>
        </div>
      </div>

      <div className="m-section">
        <h2 className="t-h2" style={{ margin: "0 0 12px" }}>About this Opportunity</h2>
        <p className="t-body" style={{ margin: "0 0 12px" }}>Welcome to the 2026 Summer Food Program at the Camden Kroc Center. From June 1st through August 7th, we'll serve free meals to neighborhood kids and families weekdays from 11:30 AM to 1:00 PM — and we need a steady crew of volunteers to make it happen.</p>
        <p className="t-body" style={{ margin: "0 0 12px" }}>Volunteers help serve food, keep tables clean and sanitized, and hand out additional milk or snacks as needed. It's friendly, fast-paced work alongside our kitchen staff.</p>
        <div style={{ background: "#FFF8F8", border: "1px solid #ffe2e2", borderRadius: 14, padding: "16px 18px", marginTop: 8 }}>
          <div className="eyebrow text-red" style={{ marginBottom: 8 }}>Role Requirements</div>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }} className="t-body">
            <li>Standing for the majority of the shift</li>
            <li>Serving food and maintaining sanitized tables</li>
            <li>Distributing additional milk or snacks as needed</li>
            <li>Completion of <a className="link">Civil Rights Training</a> before your first shift</li>
          </ul>
        </div>
      </div>

      <div className="m-section">
        <ImageGallery title="From the 2025 Summer Food Program" tiles={[["serving line", 2, 2], ["kitchen prep", 1, 1], ["volunteer crew", 1, 1], ["family meal", 1, 1], ["dish station", 1, 1], ["sign-in desk", 2, 1]]} />
      </div>

      <div className="m-section">
        <Faq title="Before You Sign Up" items={[
          ["Do I need to commit to the whole summer?", "No — pick the shifts that work for you, even if that's just one. Most volunteers sign up for a handful of slots across the summer."],
          ["What if I can't complete Civil Rights Training in advance?", "Reach out to Dylan and we'll get you onto the next group training, or send you the self-paced version."],
          ["Can I bring my teen to volunteer with me?", "Yes — volunteers under 18 can shadow you on a shift if they're 14 or older. Please email Dylan a day ahead."],
          ["Will food be provided for volunteers?", "Yes. Volunteers eat the same meal we serve, free of charge, before or after their shift."],
        ]} />
      </div>

      <div className="m-section">
        <SectionHead title="Other Ways to Volunteer" seeAll="View All" onSeeAll={() => navigate("volunteers")} />
        <Carousel width="80%">
          <OppCard title="Afterschool Tutor — K–5 Math" dateline="Ongoing · Sep 2026 – May 2027" body="Spend 90 minutes a week with a small group of elementary students working on number sense and fluency." />
          <OppCard title="Pool Deck Volunteer" dateline="Year-round · open shifts" body="Help our aquatics team during open-swim hours — towel handout, lane setup, and a friendly face at the desk." />
          <OppCard title="Holiday Ambassador" dateline="Dec 1 – Dec 24, 2026" body="Two-hour shifts at kettle locations across Camden. Train on the day; no prior experience needed." />
        </Carousel>
      </div>

      <Connect />
    </div>
  );
}

Object.assign(window, {
  Page_AllTags, Page_TagDetail, Page_Events, Page_EventDetail,
  Page_Contact, Page_Volunteers, Page_VolunteerDetail,
});

/* ============================================================
   KROC Mobile — Pages 6.1 – 6.7
   ============================================================ */

const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };

/* ===== 6.1 Homepage ===== */
function Page_Home() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <AlertBar top text="Pool closed for maintenance — Sat 11/15, 6 AM–12 PM." cta="View Schedule" />
      <MobileHeader active="home" onOpenMenu={openMenu} location="Camden Kroc · Eastern Region" />

      <div className="m-section">
        <Hero
          eyebrow="The Camden Kroc Center"
          title="A place to play, learn, create — and call your own."
          sub="Membership opens 100+ weekly classes, two pools, a fitness center, arts studios, a chapel, and a community calendar bigger than the neighborhood."
          dims="1400×460">
          <div style={{ display: "grid", gap: 10 }}>
            <a className="btn btn-light btn-lg btn-block" onClick={() => navigate("info")}>Become a Member</a>
            <a className="btn btn-outline-light btn-block">Tour the Center</a>
          </div>
        </Hero>
      </div>

      {/* Find a center */}
      <div className="m-section">
        <div className="m-panel">
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>27 Kroc Centers, one network.</h2>
          <p className="t-sm" style={{ margin: "0 0 16px" }}>Find programs, classes, events, and volunteer opportunities at the Kroc Center nearest you.</p>
          <div style={{ aspectRatio: "5/3", background: "#EFEFEF", borderRadius: 14, position: "relative", overflow: "hidden", marginBottom: 12 }}>
            <svg viewBox="0 0 400 240" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <path d="M30 70 Q90 50 140 80 T260 70 T380 110 L380 200 Q310 220 250 200 T120 210 T20 190 Z" fill="#dcdcdf" stroke="#c4c4c8" />
              {[[100, 110], [170, 80], [230, 140], [290, 100], [150, 170], [330, 150]].map(([x, y], i) => (
                <g key={i} transform={`translate(${x},${y})`}><path d="M0-14 a8 8 0 1 1 0-.01 z" fill="#002056" /><circle cx="0" cy="-8" r="3" fill="#fff" /></g>
              ))}
            </svg>
          </div>
          <div className="m-input" style={{ marginBottom: 10 }}><span className="lead"><Icon name="search" size={16} /></span><input placeholder="City or ZIP" /></div>
          <a className="btn btn-secondary btn-block">Find a Center</a>
        </div>
      </div>

      {/* How We Serve */}
      <div className="m-section">
        <SectionHead title="How We Serve" seeAll="All Programs" onSeeAll={() => navigate("programs")} />
        <Carousel width="60%">
          {[["Aquatics", "Swim, lap & aquatic fitness."], ["Fitness", "Weights, cardio, classes."], ["Youth", "Camp, mentoring, teen nights."], ["Arts", "Studio, dance, performance."]].map(([n, b]) => (
            <CategoryCard key={n} name={n} body={b} cta="Learn More" />
          ))}
        </Carousel>
      </div>

      {/* Latest Stories */}
      <div className="m-section">
        <SectionHead title="Latest Stories" seeAll="View All" onSeeAll={() => navigate("stories")} />
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", minHeight: 420, background: "#1C1B1F", marginBottom: 12 }} onClick={() => navigate("story")}>
          <div className="ph" style={{ position: "absolute", inset: 0, borderRadius: 0 }}><span className="lbl" /></div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,.82) 100%)" }} />
          <span className="chip" style={{ position: "absolute", left: 16, top: 16, zIndex: 3 }}><span className="ic" />Recreation</span>
          <div style={{ position: "absolute", left: 18, right: 18, bottom: 18, color: "#fff", zIndex: 2 }}>
            <h3 style={{ fontSize: 24, lineHeight: 1.12, margin: "0 0 10px", fontWeight: 400 }}>Late-night basketball is back — and it's changing Friday nights in Camden.</h3>
            <p className="t-sm" style={{ margin: "0 0 14px", color: "rgba(255,255,255,.86)" }}>A six-week pilot brought open-gym hours to teens 14–18, no membership required.</p>
            <div className="t-xs" style={{ color: "rgba(255,255,255,.8)", borderTop: "1px solid rgba(255,255,255,.2)", paddingTop: 12 }}>March 12, 2024 &nbsp;·&nbsp; By Dale Bannon</div>
          </div>
        </div>
        <Carousel width="80%">
          <StoryCard category="Education" title="Summer reading hits 12,000 minutes" date="Feb 28, 2024" author="By M. Alvarez" body="Volunteers logged a record number of one-on-one reading sessions." />
          <StoryCard category="Arts" title="The kids made a mural — and a movement" date="Feb 14, 2024" author="By J. Pham" body="A 40-foot mural in the lobby anchors weekly community gatherings." />
          <StoryCard category="Youth" title="Mentoring, year one: what worked" date="Jan 30, 2024" author="By D. Bannon" body="One year in, the numbers — and the kids — tell the story." />
        </Carousel>
      </div>

      <DonationBand title="Every dollar opens a door." body="Your gift funds scholarships, free programming, and the staff who make the Kroc the most welcoming place in town." primaryCta="Donate Now" secondaryCta="Other Ways" />
      <Connect />
    </div>
  );
}

/* ===== 6.2 All Programs ===== */
function Page_AllPrograms() {
  const { navigate, openMenu } = useNav();
  const [f, setF] = React.useState("All");
  const cats = [
    ["Aquatics", "Swim lessons, lap swim & aquatic fitness."],
    ["Fitness", "Weight floor, cardio & 40+ classes weekly."],
    ["Youth", "Afterschool, camp, mentoring & teen nights."],
    ["Arts", "Visual studio, music, dance & performance."],
    ["Seniors", "Active aging, social hours & silver fitness."],
    ["Worship", "Sunday services, Bible study & small groups."],
    ["Education", "Tutoring, GED prep & adult learning."],
    ["Community", "Drop-in events, family nights & meeting space."],
  ];
  return (
    <div>
      <MobileHeader active="programs" onOpenMenu={openMenu} />
      <div className="m-section">
        <Hero eyebrow="Programs & Classes" title="Find a class. Try something new." titleClass="t-h1"
          sub="From toddler swim to senior strength, the Kroc runs hundreds of programs a season — most free or included with membership." short dims="1400×360" />
      </div>

      <div className="m-section">
        <div className="m-input" style={{ marginBottom: 14 }}><span className="lead"><Icon name="search" size={16} /></span><input placeholder="Search programs" /></div>
        <FilterRow items={["All", "Aquatics", "Fitness", "Arts", "Youth", "Seniors", "Worship", "Education"]} value={f} onChange={setF} />
        <div style={grid2}>
          {cats.map(([n, b]) => <CategoryCard key={n} name={n} body={b} />)}
        </div>
        <Pagination />
      </div>

      <div className="m-section">
        <div className="m-band">
          <h2 className="t-h2" style={{ margin: "0 0 8px" }}>Can't find what you're looking for?</h2>
          <p className="t-body" style={{ margin: "0 0 16px", opacity: .92 }}>Tell us what you'd like to see — we build programs around community demand.</p>
          <a className="btn btn-light">Suggest a Program</a>
        </div>
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.3 Program Category ===== */
function Page_ProgramCategory() {
  const { navigate, openMenu } = useNav();
  const [kind, setKind] = React.useState("All");
  const classes = [
    ["Adult Learn-to-Swim", "Roster", "Tue & Thu · 7:00 PM", "$95 / 8 weeks"],
    ["Open Lap Swim", "Drop-In", "Mon–Fri · 6:00–9:00 AM", "Members free · $8"],
    ["Masters Swim", "Roster", "M/W/F · 5:30 AM", "$120 / 12 weeks"],
    ["Parent & Baby Splash", "Drop-In", "Sat · 9:30 AM", "$10 / session"],
    ["Water Aerobics", "Drop-In", "T/Th · 10:00 AM", "Members free · $8"],
    ["Teen Swim Team", "Roster", "Wed & Fri · 4:30 PM", "$80 / 6 weeks"],
  ];
  const shown = kind === "All" ? classes : classes.filter((c) => c[1] === kind);
  return (
    <div>
      <MobileHeader active="programs" onOpenMenu={openMenu}
        crumb={{ label: "All Programs", onClick: () => navigate("programs") }} />

      <div className="m-section">
        <Hero title="Aquatics" icon sub="Two pools, twelve programs, every age. From parent-and-baby splashes to masters swim and water rehab." dims="1400×460">
          <a className="btn btn-light">View Class Schedule</a>
        </Hero>
      </div>

      {/* intro */}
      <div className="m-section">
        <div className="m-panel">
          <div className="eyebrow text-red" style={{ marginBottom: 8 }}>About Aquatics at the Kroc</div>
          <h2 className="t-h2" style={{ margin: "0 0 12px" }}>Water is for everyone.</h2>
          <p className="t-body" style={{ margin: "0 0 12px" }}>Camden's Kroc operates a 25-yard lap pool and a warm-water teaching pool. Lifeguards on duty all open hours, and our learn-to-swim program is the largest in South Jersey.</p>
          <p className="t-body" style={{ margin: "0 0 12px" }}>Members get unlimited open swim and a deep discount on lessons. Scholarship swim is available for any Camden child — no application required.</p>
          <a className="link t-sm">See pool hours and rules →</a>
        </div>
      </div>

      {/* featured stories */}
      <div className="m-section">
        <SectionHead title="Featured Stories" seeAll="All Aquatics" onSeeAll={() => navigate("stories")} />
        <Carousel width="80%">
          <StoryCard category="Aquatics" title="From floaties to fearless" body="Eight-year-old Marcus finished his first lap — no float, no flinch." />
          <StoryCard category="Aquatics" title="Masters swim turns 5" body="The 5 AM crew has logged 40,000 miles since the program started." />
          <StoryCard category="Aquatics" title="Water therapy after surgery" body="A new partnership with Cooper Hospital brings rehab into our warm-water pool." />
        </Carousel>
      </div>

      {/* classes */}
      <div className="m-section">
        <SectionHead title="Aquatics Classes" />
        <FilterRow items={["All", "Roster", "Drop-In"]} value={kind} onChange={setKind} />
        <div className="t-sm text-muted" style={{ marginBottom: 14 }}>{shown.length} of 24 classes</div>
        <div style={{ display: "grid", gap: 14 }}>
          {shown.map(([t, k, s, p]) => <ClassCard key={t} title={t} kind={k} sched={s} price={p} />)}
        </div>
        <Pagination />
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.4 Class Detail ===== */
function Page_ClassDetail() {
  const { navigate, openMenu, stickyOn } = useNav();
  return (
    <div>
      <MobileHeader active="programs" onOpenMenu={openMenu}
        crumb={{ label: "Return to Aquatics", onClick: () => navigate("program-cat") }} />

      <div className="m-section">
        <div className="m-share" style={{ justifyContent: "flex-end", marginBottom: 12, fontSize: 12.5 }}>
          <span>Share</span><Icon name="fb" size={16} /><Icon name="x" size={16} /><Icon name="li" size={16} /><Icon name="ig" size={16} />
        </div>
        <h1 className="t-h1" style={{ margin: "0 0 14px" }}>Adult Learn-to-Swim · Beginner</h1>
        <PH ratio="16/9" label="1248×546 · 16:7" dims="16:7">
          <span className="pill sm red-outline" style={{ position: "absolute", top: 12, left: 12, zIndex: 3, background: "#fff" }}>Roster</span>
        </PH>
      </div>

      {/* key facts */}
      <div className="m-section">
        <div className="m-panel">
          <div className="m-meta-k">Date &amp; Time</div>
          <div className="m-meta-v">Tuesdays &amp; Thursdays · 7:00–7:45 PM</div>
          <div className="m-meta-k">Audience</div>
          <div className="m-meta-v"><span className="pill sm">Adults · 18+</span></div>
          <div style={grid2}>
            <div>
              <div className="m-meta-k">Price <span className="mono" style={{ fontSize: 10, color: "#999" }}>dynamic</span></div>
              <div className="m-meta-v"><span className="skel" style={{ width: 70 }} /></div>
            </div>
            <div>
              <div className="m-meta-k">Capacity</div>
              <div className="m-meta-v">8 of 12 left</div>
            </div>
          </div>
          <div className="m-divider" />
          <div className="m-meta-k">Location</div>
          <div className="m-meta-v" style={{ marginBottom: 6 }}>Warm-water teaching pool · Camden Kroc Center</div>
          <a className="link t-sm">Directions →</a>
          {!stickyOn && (
            <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
              <a className="btn btn-primary btn-block">Register Now</a>
              <a className="btn btn-info btn-block btn-sm"><Icon name="cal" size={14} /> Add to Calendar</a>
            </div>
          )}
        </div>
      </div>

      {/* about */}
      <div className="m-section">
        <h2 className="t-h2" style={{ margin: "0 0 12px" }}>About this class</h2>
        <p className="t-body" style={{ margin: "0 0 12px" }}>Built for adults who never had a chance to learn — or who want to start over. Small group, never deeper than chest-high, two instructors on deck every session. Six-week sessions starting the first Tuesday of every month.</p>
        <p className="t-body" style={{ margin: "0 0 12px" }}>By the end of week six, students typically swim a continuous half-lap unassisted and feel comfortable putting their face in the water. We provide goggles; you bring a swimsuit and a towel.</p>
        <p className="t-body" style={{ margin: "0 0 18px" }}>Need-based scholarships available — ask at the front desk or check the box during registration.</p>
        <h3 className="t-h3" style={{ margin: "0 0 8px" }}>What to bring</h3>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }} className="t-body">
          <li>Swimsuit and towel</li><li>Goggles (we have loaners)</li><li>A change of clothes — lockers on site</li>
        </ul>
        <div style={{ display: "flex", gap: 8, marginTop: 22, flexWrap: "wrap" }}>
          {["Aquatics", "Adults", "Learn-to-Swim", "Beginner"].map((t) => <span key={t} className="pill sm">{t}</span>)}
        </div>
      </div>

      {/* other classes */}
      <div className="m-section">
        <SectionHead title="Other Aquatics Classes" seeAll="All" onSeeAll={() => navigate("program-cat")} />
        <Carousel width="80%">
          <ClassCard title="Masters Swim" kind="Roster" sched="M/W/F · 5:30 AM" price="$120 / 12 weeks" />
          <ClassCard title="Parent & Baby Splash" kind="Drop-In" sched="Sat · 9:30 AM" price="$10 / session" />
          <ClassCard title="Water Aerobics" kind="Drop-In" sched="T/Th · 10:00 AM" price="Members free · $8" />
        </Carousel>
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.5 Informational Page ===== */
function Page_Info() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="info" onOpenMenu={openMenu}
        crumb={{ label: "Return to About Us", onClick: () => navigate("home") }} />

      <div className="m-section">
        <div className="m-band center">
          <div className="eyebrow" style={{ opacity: .85, marginBottom: 8 }}>Membership Policies</div>
          <h1 className="t-h1" style={{ margin: "0 0 12px" }}>Everyone is welcome, and everyone follows the same handful of rules.</h1>
          <p className="t-body" style={{ margin: 0, opacity: .92 }}>We keep our policies short, clear, and the same for every member — from the day you join to the day you renew.</p>
        </div>
      </div>

      <div className="m-section">
        <div className="m-panel">
          <h2 className="t-h3" style={{ margin: "0 0 10px" }}>1 · Sliding-scale dues</h2>
          <p className="t-body" style={{ margin: "0 0 20px" }}>Membership at any Camden Kroc Center is on a sliding scale based on household size and income. The maximum monthly rate is $42 for adults; the minimum is $0. Nobody is turned away — full stop.</p>
          <h2 className="t-h3" style={{ margin: "0 0 10px" }}>2 · Conduct &amp; safety</h2>
          <p className="t-body" style={{ margin: "0 0 8px" }}>We expect every member to treat staff, other members, and the building with respect:</p>
          <ul style={{ margin: "0 0 20px", paddingLeft: 20, lineHeight: 1.75 }} className="t-body">
            <li>No harassment, discrimination, or violence.</li>
            <li>Children under 12 stay with an adult in pool and fitness areas.</li>
            <li>Family changing rooms are available for any reason.</li>
          </ul>
          <h2 className="t-h3" style={{ margin: "0 0 10px" }}>3 · Cancellation</h2>
          <p className="t-body" style={{ margin: "0 0 14px" }}>Cancel anytime, in person at the front desk or online from your member dashboard. Refunds are pro-rated to the day.</p>
          <a className="link t-sm">Download the full policy PDF →</a>
        </div>
      </div>

      {/* password gate variant */}
      <div className="m-section">
        <div className="eyebrow text-red" style={{ marginBottom: 8 }}>Variant — Password-Gated</div>
        <div className="m-panel" style={{ textAlign: "center", padding: "34px 22px" }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#FFEBEB", color: "var(--kroc-red)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><Icon name="lock" size={26} /></div>
          <h3 className="t-h3" style={{ margin: "0 0 8px" }}>Staff &amp; Board Resources</h3>
          <p className="t-sm text-muted" style={{ margin: "0 0 18px" }}>This page is restricted to staff and board members. Enter the access password to continue.</p>
          <div className="m-input" style={{ marginBottom: 10 }}><span className="lead"><Icon name="lock" size={15} /></span><input type="password" placeholder="Access password" /></div>
          <a className="btn btn-primary btn-block">Unlock</a>
        </div>
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.6 All Stories ===== */
function Page_AllStories() {
  const { navigate, openMenu } = useNav();
  const [f, setF] = React.useState("All");
  const feed = [
    ["Recreation", "A new kind of pickup game"], ["Fitness", "Cardio at sixty-five — and just getting started"],
    ["Arts", "A community mural, panel by panel"], ["Youth", "Robotics club takes nationals"],
    ["Worship", "Sunday choir hits a hundred members"], ["Volunteers", "One year of meal deliveries"],
  ];
  return (
    <div>
      <MobileHeader active="stories" onOpenMenu={openMenu} />
      <div className="m-section">
        <Hero center eyebrow="Stories from the Kroc" title="Camden, told by Camden." titleClass="t-h1"
          sub="Every story below was reported by a member, a coach, or a volunteer who was there." short dims="1400×360" />
      </div>

      <div className="m-section">
        <SectionHead title="Featured" />
        <div style={{ display: "grid", gap: 14 }}>
          <StoryCard category="Recreation" title="Late-night basketball is back" body="A six-week pilot brought open-gym hours to Camden teens." />
          <StoryCard category="Education" title="Summer reading hits 12,000 minutes" body="Volunteers logged a record number of one-on-one reading sessions." />
        </div>
      </div>

      <div className="m-section">
        <div className="m-input" style={{ marginBottom: 14 }}><span className="lead"><Icon name="search" size={16} /></span><input placeholder="Search stories" /></div>
        <FilterRow items={["All", "Aquatics", "Fitness", "Arts", "Youth", "Worship", "Volunteers"]} value={f} onChange={setF} />
        <div style={{ display: "grid", gap: 14 }}>
          {feed.map(([c, t]) => <StoryCard key={t} category={c} title={t} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />)}
        </div>
        <Pagination />
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.7 Story Detail ===== */
function Page_StoryDetail() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="stories" onOpenMenu={openMenu}
        crumb={{ label: "Return to all stories", onClick: () => navigate("stories") }} />

      <div className="m-section">
        <div className="m-share" style={{ justifyContent: "flex-end", marginBottom: 12, fontSize: 12.5 }}>
          <span>Share</span><Icon name="fb" size={16} /><Icon name="x" size={16} /><Icon name="li" size={16} /><Icon name="ig" size={16} />
        </div>
        <span className="chip" style={{ marginBottom: 12 }}><span className="ic" />Recreation</span>
        <h1 className="t-h1" style={{ margin: "0 0 14px" }}>Late-night basketball is back at the Camden Kroc</h1>
        <PH ratio="16/9" label="1248×702 · 16:9 hero" dims="16:9" />
        <div className="t-sm text-muted" style={{ display: "flex", gap: 10, marginTop: 12, alignItems: "center" }}>
          <span>March 14, 2026</span><span>·</span><span>Dale Bannon</span><span>·</span>
          <a className="text-red" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="pin" size={13} /> Camden Kroc</a>
        </div>
      </div>

      <div className="m-section">
        <h2 className="t-h3" style={{ margin: "0 0 14px" }}>How a six-week pilot quietly became one of the most-requested programs at the Kroc.</h2>
        <p className="t-body" style={{ margin: "0 0 14px" }}>When Coach Reggie pitched a Thursday-night open-gym pilot last fall, nobody on the team thought it would last past Halloween. The court is busy enough already, the lights cost money, and most of our teen members already had a regular slot.</p>
        <p className="t-body" style={{ margin: "0 0 14px" }}>By week three, sixty teenagers were showing up. By week six, we'd added a Saturday slot, two volunteer coaches, and a deal with a local pizza shop.</p>
        <blockquote className="f-jenson m-quote">The gym was the point, but the pizza is what kept them. Once they kept showing up, the rest took care of itself.</blockquote>
        <p className="t-body" style={{ margin: "0 0 18px" }}>We're now running late-night basketball every Thursday and Saturday through the spring. The waitlist is at 120. If you'd like to volunteer as a coach or sponsor next season's pizza, <a className="link">get in touch with our Youth team</a>.</p>

        {/* external article banner */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", background: "#EFEFEF", borderRadius: 12, marginBottom: 18 }}>
          <Icon name="arrowUR" size={16} color="#575757" />
          <div><div className="t-xs text-muted">Originally published externally.</div><a className="link t-sm">View Original Article →</a></div>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Recreation", "Youth", "Camden", "Community"].map((t) => <span key={t} className="pill sm"><span style={{ width: 7, height: 7, background: "var(--kroc-red)", borderRadius: 2 }} />{t}</span>)}
        </div>
      </div>

      {/* sidebar content stacked: donate + related */}
      <div className="m-section">
        <a className="btn btn-primary btn-block" style={{ marginBottom: 14 }}>Donate to Support This Program</a>
        <div className="m-panel">
          <div className="m-meta-k">Related Event</div>
          <a style={{ display: "block", background: "#EFEFEF", borderRadius: 12, padding: "12px 14px", marginBottom: 16 }} onClick={() => navigate("event")}>
            <div className="t-sm">Late-Night Basketball Open Gym</div>
            <div className="t-xs text-muted">Every Thu + Sat · 9–11 PM</div>
          </a>
          <div className="m-meta-k">Related Program</div>
          <a style={{ display: "inline-flex", alignItems: "center", gap: 8 }} onClick={() => navigate("program-cat")}>
            <span className="kroc-icon sm">kroc-icon</span><span className="link">Youth Programs</span>
          </a>
        </div>
      </div>

      <div className="m-section">
        <SectionHead title="Recent Stories" seeAll="View All" onSeeAll={() => navigate("stories")} />
        <Carousel width="80%">
          <StoryCard category="Recreation" title="A new kind of pickup game" body="Open-gym Fridays are quietly becoming the most popular slot on the calendar." />
          <StoryCard category="Youth" title="Robotics club takes nationals" body="A scrappy after-school team built a robot in a converted art room." />
          <StoryCard category="Arts" title="A mural, panel by panel" body="Forty feet of lobby wall, painted by two hundred hands." />
        </Carousel>
      </div>

      <Connect />
    </div>
  );
}

Object.assign(window, {
  Page_Home, Page_AllPrograms, Page_ProgramCategory, Page_ClassDetail,
  Page_Info, Page_AllStories, Page_StoryDetail,
});

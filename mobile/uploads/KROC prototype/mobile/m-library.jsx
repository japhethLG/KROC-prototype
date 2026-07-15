/* ============================================================
   KROC Mobile — Component / Block Library + Screens Directory
   ============================================================ */

function Swatch({ name, hex, dark }) {
  return (
    <div className="lib-swatch">
      <span className="sw" style={{ background: hex }} />
      <div className="meta"><div className="nm">{name}</div><div className="hx">{hex}</div></div>
    </div>
  );
}

function Page_Library() {
  const { navigate, openMenu } = useNav();
  const [demoF, setDemoF] = React.useState("All");
  return (
    <div>
      <MobileHeader active="library" onOpenMenu={openMenu} crumb={{ label: "Home", onClick: () => navigate("home") }} />

      <div className="m-section">
        <div className="eyebrow text-red" style={{ marginBottom: 6 }}>Mobile Design System</div>
        <h1 className="t-h1" style={{ margin: "0 0 10px" }}>Block &amp; Component Library</h1>
        <p className="t-body text-muted">The mobile-scaled building blocks every KROC screen is assembled from — tokens, type, buttons, cards, and patterns.</p>
      </div>

      {/* Colors */}
      <div className="lib-h"><div className="k">Color</div><h3>Brand &amp; Surface</h3></div>
      <div className="lib-block">
        <Swatch name="Primary Red — base" hex="#EF3E42" />
        <Swatch name="Red dark (hover)" hex="#C5000E" />
        <Swatch name="Red darkest (active)" hex="#9E121C" />
        <Swatch name="Red tint" hex="#FFEBEB" />
        <Swatch name="Navy — base" hex="#002056" />
        <Swatch name="Navy mid (info)" hex="#61769C" />
        <Swatch name="Navy tint" hex="#D7E9FF" />
      </div>
      <div className="lib-block" style={{ marginTop: 12 }}>
        <Swatch name="Page background" hex="#D9D9D9" />
        <Swatch name="Surface area" hex="#EFEFEF" />
        <Swatch name="White / cards" hex="#FFFFFF" />
        <Swatch name="Text — dark 100" hex="#1C1B1F" />
        <Swatch name="Text — grey" hex="#575757" />
        <Swatch name="Success" hex="#12825F" />
        <Swatch name="Warning" hex="#F2AB53" />
      </div>

      {/* Type */}
      <div className="lib-h"><div className="k">Type · Creato Display</div><h3>Mobile Scale</h3></div>
      <div className="lib-block">
        <div className="t-hero" style={{ marginBottom: 10 }}>Hero · 31</div>
        <div className="t-h1" style={{ marginBottom: 10 }}>Heading 1 · 27</div>
        <div className="t-h2" style={{ marginBottom: 10 }}>Heading 2 · 22</div>
        <div className="t-h3" style={{ marginBottom: 10 }}>Heading 3 · 19</div>
        <div className="t-title" style={{ marginBottom: 10 }}>Title · 17</div>
        <div className="t-body" style={{ marginBottom: 10 }}>Body · 15 — the workhorse paragraph size for mobile reading.</div>
        <div className="t-sm" style={{ marginBottom: 10 }}>Small · 13 — meta, captions, secondary detail.</div>
        <div className="eyebrow text-red" style={{ marginBottom: 10 }}>Eyebrow · 11 uppercase</div>
        <div className="f-jenson" style={{ fontSize: 22 }}>Adobe Jenson Pro — pull-quotes &amp; editorial accents</div>
      </div>

      {/* Buttons */}
      <div className="lib-h"><div className="k">Components</div><h3>Buttons</h3></div>
      <div className="lib-block">
        <div className="lib-row" style={{ marginBottom: 10 }}>
          <a className="btn btn-primary">Primary</a>
          <a className="btn btn-secondary">Secondary</a>
          <a className="btn btn-info">Info</a>
        </div>
        <div className="lib-row" style={{ marginBottom: 10 }}>
          <a className="btn btn-outline-primary">Outline</a>
          <a className="btn btn-primary btn-sm">Small</a>
          <a className="btn btn-primary btn-lg">Large</a>
        </div>
        <a className="btn btn-primary btn-block">Full-width block button</a>
      </div>

      {/* Pills / chips */}
      <div className="lib-h"><div className="k">Components</div><h3>Pills, Chips &amp; Filters</h3></div>
      <div className="lib-block">
        <FilterRow items={["All", "Aquatics", "Fitness", "Arts", "Youth"]} value={demoF} onChange={setDemoF} />
        <div className="lib-row" style={{ marginTop: 4 }}>
          <span className="pill">Default</span>
          <span className="pill active">Active</span>
          <span className="pill navy">Navy</span>
          <span className="pill sm red-outline">Roster</span>
          <span className="pill sm red-fill">Drop-In</span>
          <span className="chip"><span className="ic" />Category chip</span>
        </div>
      </div>

      {/* Inputs */}
      <div className="lib-h"><div className="k">Components</div><h3>Form Inputs</h3></div>
      <div className="lib-block">
        <div style={{ display: "grid", gap: 10 }}>
          <div className="m-input"><span className="lead"><Icon name="search" size={16} /></span><input placeholder="Search input" /></div>
          <div className="m-input"><input placeholder="Text field" /></div>
          <div className="m-select">Dropdown / select <Icon name="chev" size={14} /></div>
          <div className="m-input" style={{ alignItems: "flex-start" }}><textarea rows="3" placeholder="Text area" /></div>
        </div>
      </div>

      {/* Alerts */}
      <div className="lib-h"><div className="k">Components</div><h3>Alert Banners</h3></div>
      <div className="lib-block" style={{ padding: 0, overflow: "hidden" }}>
        <AlertBar text="Pool closed for maintenance — Sat 11/15." cta="View Schedule" />
        <AlertBar text="Severe weather closure in effect today." variant="danger" />
      </div>

      {/* Cards */}
      <div className="lib-h"><div className="k">Blocks</div><h3>Cards</h3></div>
      <div className="m-section" style={{ marginTop: 0 }}>
        <div style={{ display: "grid", gap: 14 }}>
          <StoryCard category="Recreation" title="Story card" body="16:9 image, category chip, title, two-line excerpt, meta row." onClick={() => {}} />
          <EventCard title="Event card" date="June 14, 2026 · 10 AM" address="Camden Kroc Center" onClick={() => {}} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <CategoryCard name="Category" body="Icon, title, blurb, CTA." onClick={() => {}} />
            <ClassCard title="Class card" kind="Roster" sched="Tue & Thu · 7 PM" price="$95 / 8 wks" onClick={() => {}} />
          </div>
          <StoryRow category="Education" title="Compact story row — thumbnail + title + meta" onClick={() => {}} />
          <OppCard title="Volunteer opportunity card" dateline="Jun 1 – Aug 7, 2026" body="Dateline, three-line excerpt, and a Learn More CTA." onClick={() => {}} />
        </div>
      </div>

      {/* Accordion */}
      <div className="lib-h"><div className="k">Blocks</div><h3>FAQ Accordion</h3></div>
      <div className="m-section" style={{ marginTop: 0 }}>
        <Faq items={[["Tap to expand a question", "The answer reveals with a smooth height transition; the + rotates into a red ×-style marker."], ["Only one open at a time", "Opening one collapses the others, keeping the list compact on a small screen."]]} />
      </div>

      {/* Placeholders / icon */}
      <div className="lib-h"><div className="k">Blocks</div><h3>Image &amp; Icon Placeholders</h3></div>
      <div className="m-section" style={{ marginTop: 0 }}>
        <PH ratio="16/9" label="striped placeholder · shows ratio" dims="16:9" />
        <div className="lib-row" style={{ marginTop: 12 }}>
          <span className="kroc-icon sm">sm</span>
          <span className="kroc-icon">md</span>
          <span className="kroc-icon lg">lg</span>
        </div>
      </div>

      {/* Nav patterns note */}
      <div className="lib-h"><div className="k">Navigation</div><h3>Three Patterns</h3></div>
      <div className="lib-block">
        <p className="t-sm" style={{ margin: "0 0 6px" }}><b>Slide-up drawer</b> — sheet rises from the bottom with a grab bar (the DS default).</p>
        <p className="t-sm" style={{ margin: "0 0 6px" }}><b>Hamburger overlay</b> — full-screen menu slides in from the right.</p>
        <p className="t-sm" style={{ margin: 0 }}><b>Bottom tab bar</b> — persistent Home / Programs / Stories / Events / More.</p>
        <p className="lib-note" style={{ margin: "10px 0 0", paddingLeft: 0 }}>Switch live in the <b>Tweaks</b> panel to compare.</p>
      </div>

      <div style={{ height: 8 }} />
      <Connect />
    </div>
  );
}

/* ===== In-app Screens Directory ===== */
const SCREENS = [
  ["6.1", "Homepage", "home"], ["6.2", "All Programs", "programs"], ["6.3", "Program Category", "program-cat"],
  ["6.4", "Class Detail", "class"], ["6.5", "Informational", "info"], ["6.6", "All Stories", "stories"],
  ["6.7", "Story Detail", "story"], ["6.8", "All Tags", "tags"], ["6.9", "Tag Detail", "tag"],
  ["6.10", "Events Root", "events"], ["6.11", "Event Detail", "event"], ["6.12", "Contact Us", "contact"],
  ["6.13", "Volunteers", "volunteers"], ["6.14", "Volunteer Detail", "volunteer-detail"], ["—", "Component Library", "library"],
];

function Page_Directory() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="directory" onOpenMenu={openMenu} />
      <div className="m-section">
        <div className="eyebrow text-red" style={{ marginBottom: 6 }}>Prototype Index</div>
        <h1 className="t-h1" style={{ margin: "0 0 10px" }}>All Screens</h1>
        <p className="t-body text-muted">Every KROC mobile page in one place. Tap any card to jump straight to it.</p>
      </div>
      <div className="m-section tight">
        <div className="dir-grid">
          {SCREENS.map(([n, l, r]) => (
            <div key={r} className="dir-card" onClick={() => navigate(r)}>
              <div className="n">{n}</div>
              <div className="mini">
                <div style={{ position: "absolute", left: 8, right: 8, top: 8, height: 10, borderRadius: 3, background: "var(--kroc-red)", opacity: .8 }} />
                <div style={{ position: "absolute", left: 8, right: 28, top: 24, height: 6, borderRadius: 3, background: "#cfcfd4" }} />
                <div style={{ position: "absolute", left: 8, right: 40, top: 36, height: 6, borderRadius: 3, background: "#dcdce0" }} />
                <div style={{ position: "absolute", left: 8, right: 8, bottom: 8, height: 16, borderRadius: 4, background: "var(--kroc-navy)", opacity: .85 }} />
              </div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 24 }} />
    </div>
  );
}

Object.assign(window, { Page_Library, Page_Directory, SCREENS });

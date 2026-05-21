/* 12 reusable blocks — aligned to prototype-brief §7. Each block stands alone. */

function BlockFrame({ id, n, name, schema, fields, notes, children, height }) {
  return (
    <div className="frame-row" id={id}>
      <div className="block-side">
        <div className="block-n">{n}</div>
        <div className="block-name">{name}</div>
        <div className="block-schema">{schema}</div>
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
      <div className="frame" style={height ? { minHeight: height } : undefined}>
        <div className="kroc-page" style={{ minHeight: 0, paddingBottom: 32, padding: "0px 20px 32px 0px" }}>{children}</div>
      </div>
    </div>);

}

/* ---- 7.1 Site Alert ---- */
function B_Alert() {
  return (
    <BlockFrame id="b-alert" n="7.1 · Block" name="Global Site Alert / Banner"
    schema="[site_alert]"
    fields={[
    ["Alert Message", "Body copy"],
    ["Alert Variant", "warning / info / danger / navy / dark"],
    ["Show Icon", "boolean"],
    ["Optional CTA", "Label + URL"],
    ["Start / End Date", "auto-show window"],
    ["Dismissible", "boolean — persists per session"]]
    }
    notes="Slim full-width strip · sticky above floating header · scheduled window auto-hides outside dates.">
      <div style={{ padding: "20px 0" }}>
        <AlertBar variant="warning" text="Pool closed for maintenance Saturday, June 14 — all other facilities open as normal." cta="Read more" />
        <div style={{ height: 14 }} />
        <AlertBar variant="navy" text="Holiday hours: Centers will close at 4 PM on Thursday, July 3 and remain closed July 4." cta="See schedule" />
        <div style={{ height: 14 }} />
        <AlertBar variant="danger" text="Building closed today due to severe weather. All classes and events postponed." cta="Updates" />
        <div style={{ marginTop: 14, fontSize: 11.5, fontFamily: "'SF Mono',Menlo,monospace", color: "#575757" }}>
          CMS behavior · scheduled window <strong>Nov 1, 2025 → Nov 30, 2025</strong> · auto-hide after end_date
        </div>
      </div>
    </BlockFrame>);

}

/* ---- 7.2 Site Header ---- */
function B_Header() {
  return (
    <BlockFrame id="b-header" n="7.2 · Block" name="Site Header / Custom Navigation"
    schema="[kroc_location] + [custom_navigation]"
    fields={[
    ["Center Name + Location", "← from [kroc_location]"],
    ["Logo (Kroc + Local Lockup)", "← from [kroc_location]"],
    ["Nav Items (repeater)", "Label, URL, Children, Seasonal?, Start/End Date"],
    ["Utility Links", "Visit National · Find a Thrift · Hours"],
    ["Right-side CTAs", "Find Help (info) · Donate (red)"]]
    }
    notes="Floating pill · rounded-bottom-5 · my-lg-5 from viewport · two-row layout (utility + main). Never spans full width.">
      <Header active="Home" location="Camden Kroc Center · Eastern Region" />
    </BlockFrame>);

}

/* ---- 7.3 Connect With Us ---- */
function B_Connect() {
  return (
    <BlockFrame id="b-connect" n="7.3 · Block" name="Site Footer / Connect With Us"
    schema="[kroc_location] + [custom_navigation] (automated)"
    fields={[
    ["Hero photo (Connect band)", "← from [kroc_location]"],
    ["Mission statement card", "[connect_block] · global"],
    ["Newsletter signup", "Email + Phone → ESP"],
    ["Quick nav", "← from [custom_navigation]"],
    ["Address · Phone · Hours", "← from [kroc_location]"],
    ["Social handles", "← from [kroc_location]"]]
    }
    notes="Universal — appears on every page except 6.12 Contact Us (replaced with cross-link card).">
      <Connect />
    </BlockFrame>);

}

/* ---- 7.4 FAQs ---- */
function B_FAQs() {
  const [open, setOpen] = React.useState(0);
  const qs = [
  ["What should I bring to my first class?", "Bring a refillable water bottle, a towel, and clothes you can move in. Lockers are first-come; we recommend a small lock or you can rent one at the front desk for a dollar."],
  ["Do I need to be a member to register?", "No — Kroc programs are open to the community. Members get priority registration (one week early) and discounted pricing on most classes."],
  ["What's your cancellation policy?", "Cancel up to 24 hours before the class start time for a full credit. Same-day cancellations forfeit the session fee but never the relationship."],
  ["Is financial assistance available?", "Yes. Our Open Door scholarship covers up to 100% of program fees on a sliding scale based on household income. Apply at the front desk."]];

  return (
    <BlockFrame id="b-faqs" n="7.4 · Block" name="FAQs"
    schema="[faqs]"
    fields={[
    ["Block Name (admin)", "internal label"],
    ["Repeater · Question", "text"],
    ["Repeater · Answer", "Media (rich text or media)"]]
    }
    notes="Accordion list · default first item open · keyboard-accessible · used on Class Detail, Program Category, Info pages.">
      <div style={{ padding: "24px 0 8px", maxWidth: 880 }}>
        <h3 className="t-heading-md" style={{ margin: "0 0 16px" }}>Frequently Asked Questions</h3>
        <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden" }}>
          {qs.map(([q, a], i) =>
          <div key={i} style={{ borderTop: i ? "1px solid #eaeaee" : "none" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
            style={{ width: "100%", textAlign: "left", background: "none", border: 0, padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, cursor: "pointer", fontFamily: "inherit", fontSize: 16, color: "#1C1B1F" }}>
                <span>{q}</span>
                <span style={{ flex: "0 0 24px", width: 24, height: 24, borderRadius: "50%", background: "#EFEFEF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s" }}>+</span>
              </button>
              {open === i &&
            <div style={{ padding: "0 28px 24px", color: "#1C1B1F", fontSize: 14.5, lineHeight: 1.65, maxWidth: 680 }}>{a}</div>
            }
            </div>
          )}
        </div>
      </div>
    </BlockFrame>);

}

/* ---- 7.5 External Embed ---- */
function B_ExternalEmbed() {
  return (
    <BlockFrame id="b-embed" n="7.5 · Block" name="External Embed"
    schema="[external_embed]"
    fields={[
    ["Block Name", "internal label"],
    ["Embed Type", "Canva (3:4) · Video (16:9) · TikTok (9:16) · Custom"],
    ["Embed URL", "iframe src — sandboxed"]]
    }
    notes="Container locks aspect ratio per type · Canva 3:4 portrait · Video 16:9 · TikTok 9:16. Used for monthly schedules, promos, social.">
      <div style={{ padding: "24px 0", display: "grid", gridTemplateColumns: "3fr 5fr 2fr", gap: 18, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: "'SF Mono',Menlo,monospace", color: "#575757", marginBottom: 6 }}>type: canva · 3:4</div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 12 }}>
            <div style={{ aspectRatio: "3/4", background: "repeating-linear-gradient(135deg,#EFEFEF 0 12px,#e6e6ea 12px 24px)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#575757", fontSize: 13 }}>
              Canva — Monthly Schedule
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontFamily: "'SF Mono',Menlo,monospace", color: "#575757", marginBottom: 6 }}>type: video · 16:9</div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 12 }}>
            <div style={{ aspectRatio: "16/9", background: "#0e0e10", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, position: "relative" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 0, height: 0, borderLeft: "14px solid #fff", borderTop: "9px solid transparent", borderBottom: "9px solid transparent", marginLeft: 4 }} />
              </div>
              <div style={{ position: "absolute", bottom: 12, left: 14, fontSize: 12, opacity: .8 }}>youtube · 4:32</div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontFamily: "'SF Mono',Menlo,monospace", color: "#575757", marginBottom: 6 }}>type: tiktok · 9:16</div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 12 }}>
            <div style={{ aspectRatio: "9/16", background: "linear-gradient(135deg,#1C1B1F,#3a3a40)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13 }}>
              TikTok
            </div>
          </div>
        </div>
      </div>
    </BlockFrame>);

}

/* ---- 7.6 Featured Stories ---- */
function B_FeaturedStories() {
  return (
    <BlockFrame id="b-featured-stories" n="7.6 · Block" name="Featured Stories"
    schema="[featured_stories]"
    fields={[
    ["Block Title (optional)", "+ View All link"],
    ["Repeater → Story Ref", "[stories]"],
    ["Display Mode", "Grid 3-up · Carousel if >3"]]
    }
    notes="Each card uses universal scrim + category pill + date/author footer + navy `View Article` CTA.">
      <div style={{ padding: "24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <h3 className="t-heading-md" style={{ margin: 0 }}>Featured Stories</h3>
          <a style={{ fontSize: 13, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>View All Stories <Icon name="arrowUR" size={14} /></a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          <StoryCard category="Recreation" title="A new kind of pickup game" />
          <StoryCard category="Volunteer" title="Three years on the pool deck" />
          <StoryCard category="Youth" title="Robotics club takes nationals" />
        </div>
      </div>
    </BlockFrame>);

}

/* ---- 7.7 Featured Classes ---- */
function B_FeaturedClasses() {
  return (
    <BlockFrame id="b-featured-classes" n="7.7 · Block" name="Featured Classes"
    schema="[featured_classes]"
    fields={[
    ["Block Title (optional)", "+ View All link"],
    ["Repeater → Class Ref", "[classes]"],
    ["Display Mode", "Grid 3-up or 4-up"]]
    }
    notes="Class card shows program_type chip (Drop-In filled vs Roster outlined), title, schedule line, dynamic price (skeleton until API resolves), navy Register CTA.">
      <div style={{ padding: "24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <h3 className="t-heading-md" style={{ margin: 0 }}>Featured Classes</h3>
          <a style={{ fontSize: 13, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>View All Classes <Icon name="arrowUR" size={14} /></a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[
          ["Adult Learn-to-Swim", "Roster", "Tuesdays · 6 PM", "$95 / 8 weeks"],
          ["Open Lap Swim", "Drop-In", "Mon–Fri · 6 AM – 9 AM", "Members free · $8 drop-in"],
          ["Teen Strength Foundations", "Roster", "Wed + Fri · 4:30 PM", "$60 / 6 weeks"]].
          map(([t, kind, sched, price]) =>
          <div key={t} className="kroc-card" style={{ padding: 0 }}>
              <div className="img" style={{ aspectRatio: "16/9" }}>
                <span className={`pill sm ${kind === "Drop-In" ? "red-fill" : "red-outline"}`} style={{ position: "absolute", top: 14, left: 14 }}>{kind}</span>
                <span className="label">16:9 · class hero</span>
              </div>
              <div className="body" style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: 18, marginBottom: 6 }}>{t}</div>
                <div style={{ color: "#575757", fontSize: 13, marginBottom: 2 }}>{sched}</div>
                <div style={{ color: "#022056", fontSize: 13.5, marginBottom: 14 }}>{price}</div>
                <a className="btn btn-secondary btn-sm">Register</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </BlockFrame>);

}

/* ---- 7.8 Facility Section ---- */
function B_FacilitySection() {
  return (
    <BlockFrame id="b-facility" n="7.8 · Block" name="Facility Section"
    schema="[facility_section]"
    fields={[
    ["Layout Variant", "Photo-left / Photo-right"],
    ["Title", "text"],
    ["Body (WYSIWYG)", "rich text"],
    ["Optional CTA", "Label + URL"],
    ["Photo", "3:2 or 4:3"],
    ["Feature Pills", "repeater · py-2 px-4"],
    ["Hours of Operation", "repeater · Day Label + Hours Text"]]
    }
    notes="Two variants — photo-left and photo-right. Used to describe individual facilities (pool, gym, theater, chapel). Each block carries its own hours — pool hours differ from theater hours.">
      <div style={{ padding: "24px 0", display: "flex", flexDirection: "column", gap: 24 }}>
        {[0, 1].map((side) => {
          const hours = side
            ? [["Mon–Thu", "4:00 PM – 9:00 PM"], ["Fri", "4:00 PM – 11:00 PM"], ["Sat–Sun", "10:00 AM – 11:00 PM"]]
            : [["Mon–Fri", "5:30 AM – 9:00 PM"], ["Sat", "6:00 AM – 8:00 PM"], ["Sun", "7:00 AM – 6:00 PM"]];
          return (
          <div key={side} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: side ? "7fr 5fr" : "5fr 7fr" }}>
            {side === 0 && <div className="img-ph" style={{ aspectRatio: "unset", borderRadius: 0, minHeight: 300 }}><span className="label">3:2 · facility</span></div>}
            <div style={{ padding: "36px 40px" }}>
              <h3 className="t-heading-md" style={{ margin: "0 0 12px" }}>{side ? "The Black Box Theater" : "The Aquatic Center"}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#1C1B1F", margin: "0 0 16px" }}>
                {side ?
              "A 120-seat flexible performance space with retractable bleachers, full lighting grid, and a sprung dance floor. Booked nightly for community theater, dance recitals, and weekly worship." :
              "An eight-lane competition pool, a separate warm-water teaching pool, and a kids' splash deck — open 18 hours a day with certified lifeguards on every shift."
              }
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {(side ? ["120 seats", "Sprung floor", "Full lighting grid", "Green room"] : ["8 lanes", "Warm-water pool", "Splash deck", "Open 5:30 AM"]).map((p) =>
              <span key={p} className="pill sm">{p}</span>
              )}
              </div>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontFamily: "'SF Mono',Menlo,monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", marginBottom: 8 }}>Hours of Operation</div>
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                  <tbody>
                    {hours.map(([day, time]) => (
                      <tr key={day} style={{ borderBottom: "1px solid #F0F0F0" }}>
                        <td style={{ fontSize: 13, color: "#1C1B1F", fontWeight: 500, padding: "5px 0" }}>{day}</td>
                        <td style={{ fontSize: 13, color: "#575757", padding: "5px 0", textAlign: "right" }}>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a className="btn btn-secondary btn-sm">Learn More</a>
            </div>
            {side === 1 && <div className="img-ph" style={{ aspectRatio: "unset", borderRadius: 0, minHeight: 300 }}><span className="label">3:2 · facility</span></div>}
          </div>
          );
        })}
      </div>
    </BlockFrame>);

}

/* ---- 7.9 Featured Pages ---- */
function B_FeaturedPages() {
  return (
    <BlockFrame id="b-featured-pages" n="7.9 · Block" name="Featured Pages"
    schema="[featured_pages]"
    fields={[
    ["Block Title (optional)", "+ View All link"],
    ["Repeater → Page Ref", "any internal page"],
    ["Display Mode", "Grid 3-up or 4-up"]]
    }
    notes="Curates landing pages from homepage — Membership, Day Passes, Personal Training. Same component used for Western variant 'quick-action card row' under hero.">
      <div style={{ padding: "24px 0" }}>
        <h3 className="t-heading-md" style={{ margin: "0 0 18px" }}>Get Started</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
          ["Membership", "Unlimited access to pools, gym, fitness studios, and member-only programs.", "Explore Plans"],
          ["Day Passes", "Drop-in for a workout, swim, or open gym — no commitment.", "Buy a Pass"],
          ["Personal Training", "One-on-one and small-group training with our certified staff.", "Book a Session"],
          ["Birthday Parties", "Pool parties, gym parties, theme rooms — Sundays book out fast.", "Reserve a Date"]].
          map(([t, b, c]) =>
          <div key={t} className="kroc-card" style={{ padding: 0 }}>
              <div className="img" style={{ aspectRatio: "4/3" }}><span className="label">4:3 · 320×240</span></div>
              <div className="body" style={{ padding: "20px 22px" }}>
                <div style={{ fontSize: 18, marginBottom: 6 }}>{t}</div>
                <p style={{ fontSize: 13.5, color: "#1C1B1F", margin: "0 0 14px", lineHeight: 1.5 }}>{b}</p>
                <a className="btn btn-secondary btn-sm">{c}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </BlockFrame>);

}

/* ---- 7.10 Image Gallery ---- */
function B_ImageGallery() {
  const [light, setLight] = React.useState(false);
  return (
    <BlockFrame id="b-gallery" n="7.10 · Block" name="Image Gallery"
    schema="[image_gallery]"
    fields={[
    ["Block Name", "internal label"],
    ["Repeater → Image", "src · alt · caption"],
    ["Layout", "3-col masonry · 4-up fixed"],
    ["Lightbox", "click → modal"]]
    }
    notes="Masonry grid · click for lightbox with prev/next + caption. Closed grid state and one open lightbox example shown.">
      <div style={{ padding: "24px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "160px", gridAutoFlow: "dense", gap: 10 }}>
          {[
          ["1 / 1", 2, 2], ["3 / 2", 1, 1], ["3 / 2", 1, 1],
          ["4 / 5", 1, 2], ["16 / 9", 2, 1],
          ["3 / 2", 1, 1], ["3 / 2", 1, 1]].
          map(([r, cs, rs], i) =>
          <div key={i} onClick={() => setLight(true)} className="img-ph"
          style={{ gridColumn: `span ${cs}`, gridRow: `span ${rs}`, aspectRatio: "unset", borderRadius: 14, cursor: "pointer" }}>
              <span className="label">{r}</span>
            </div>
          )}
        </div>
        <button onClick={() => setLight(true)} style={{ marginTop: 14, fontSize: 12, fontFamily: "'SF Mono',Menlo,monospace", color: "#575757", background: "none", border: 0, cursor: "pointer" }}>→ open lightbox demo</button>

        {light &&
        <div onClick={() => setLight(false)} style={{ position: "absolute", inset: 0, background: "rgba(14,14,16,.85)", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5 }}>
            <button onClick={(e) => {e.stopPropagation();setLight(false);}} style={{ position: "absolute", top: 18, right: 20, background: "rgba(255,255,255,.15)", color: "#fff", border: 0, width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 16 }}>×</button>
            <button style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.15)", color: "#fff", border: 0, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: 18 }}>‹</button>
            <button style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.15)", color: "#fff", border: 0, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: 18 }}>›</button>
            <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "75%" }}>
              <div className="img-ph" style={{ aspectRatio: "3/2", width: 540, borderRadius: 14, background: "#3a3a40" }}><span className="label" style={{ color: "#fff" }}>3:2 · selected image</span></div>
              <div style={{ color: "#fff", marginTop: 12, fontSize: 13.5, opacity: .85, textAlign: "center" }}>Saturday Family Swim — June 2025 · 3 of 7</div>
            </div>
          </div>
        }
      </div>
    </BlockFrame>);

}

/* ---- 7.11 Custom Forms ---- */
function B_CustomForms() {
  return (
    <BlockFrame id="b-form" n="7.11 · Block" name="Custom Forms"
    schema="[custom_forms]"
    fields={[
    ["Block Name", "internal label"],
    ["Form Fields", "repeater · text · email · select · textarea"],
    ["Submit Label", "text"],
    ["Webhook / Recipient", "URL or address"],
    ["Success Message", "text"]]
    }
    notes="Grey #EFEFEF input bg · no border · 12px 20px padding · textarea min-height 10em. Used for Contact Us, program signups, volunteer interest.">
      <div style={{ padding: "24px 0", maxWidth: 560 }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: "32px 36px" }}>
          <h3 className="t-heading-sm" style={{ margin: "0 0 18px" }}>Get in Touch</h3>
          <div className="kroc-input" style={{ marginBottom: 12 }}><input placeholder="Name" /></div>
          <div className="kroc-input" style={{ marginBottom: 12 }}><input placeholder="Email" /></div>
          <div className="kroc-input" style={{ marginBottom: 12, justifyContent: "space-between" }}>
            <span style={{ color: "#575757" }}>Subject — pick one</span>
            <Icon name="chev" size={14} color="#575757" />
          </div>
          <div className="kroc-input" style={{ marginBottom: 18, alignItems: "flex-start", minHeight: "10em" }}>
            <textarea rows="6" placeholder="How can we help?" style={{ flex: 1, background: "none", border: 0, outline: "none", fontFamily: "inherit", fontSize: 14, resize: "vertical" }} />
          </div>
          <a className="btn btn-primary">Send Message</a>
        </div>
      </div>
    </BlockFrame>);

}

/* ---- 7.12 People Block (informal) ---- */
function B_PeopleBlock() {
  return (
    <BlockFrame id="b-people" n="7.12 · Block" name="People Block (informal)"
    schema="[people_block] — OPEN, not yet formalized"
    fields={[
    ["Repeater → Person", "Name, Role, Headshot, Bio (optional), Email (optional), Phone (optional)"],
    ["Layout", "4-up cards · 3-up with bio · 1-up feature"]]
    }
    notes="No formal Architecture Proposal schema — prototyped informally on Contact Us / Volunteers / Program Category (instructor). Flag for architect to formalize.">
      <div style={{ padding: "24px 0" }}>
        <div style={{ fontSize: 11, color: "var(--kroc-red)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 6 }}>open · informal model</div>
        <h3 className="t-heading-md" style={{ margin: "0 0 18px" }}>Camden Leadership</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
          ["Marcus Johnson", "Executive Director"],
          ["Jennifer Smith", "Director of Programs"],
          ["Reggie Lewis", "Director of Recreation"],
          ["Priya Patel", "Director of Volunteers"]].
          map(([n, r]) =>
          <div key={n} className="kroc-card" style={{ padding: 0 }}>
              <div className="img" style={{ aspectRatio: "4/5" }}><span className="label">portrait · 4:5</span></div>
              <div className="body" style={{ padding: "16px 20px" }}>
                <div style={{ fontSize: 17 }}>{n}</div>
                <div style={{ fontSize: 13, color: "#575757" }}>{r}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BlockFrame>);

}

/* ---- Library wrapper ---- */
function BlocksLibrary() {
  return (
    <section style={{ padding: "40px 0 16px" }}>
      <div className="block-toc">
        <div className="block-toc-h">Block Library — §7 of the brief</div>
        <div className="block-toc-grid">
          {[
          ["7.1", "Site Alert", "b-alert"], ["7.2", "Site Header", "b-header"], ["7.3", "Connect Footer", "b-connect"],
          ["7.4", "FAQs", "b-faqs"], ["7.5", "External Embed", "b-embed"], ["7.6", "Featured Stories", "b-featured-stories"],
          ["7.7", "Featured Classes", "b-featured-classes"], ["7.8", "Facility Section", "b-facility"], ["7.9", "Featured Pages", "b-featured-pages"],
          ["7.10", "Image Gallery", "b-gallery"], ["7.11", "Custom Forms", "b-form"], ["7.12", "People Block", "b-people"]].
          map(([n, l, id]) =>
          <a key={id} href={`#${id}`} className="block-toc-card">
              <div className="n">{n}</div>
              <div className="l">{l}</div>
            </a>
          )}
        </div>
      </div>
      <B_Alert /><B_Header /><B_Connect /><B_FAQs /><B_ExternalEmbed /><B_FeaturedStories />
      <B_FeaturedClasses /><B_FacilitySection /><B_FeaturedPages /><B_ImageGallery /><B_CustomForms /><B_PeopleBlock />
    </section>);

}

Object.assign(window, { BlocksLibrary });
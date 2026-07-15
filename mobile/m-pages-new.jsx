/* ============================================================
   KROC Mobile v2 — New Pages 6.15 – 6.20
   Membership · Day Pass · About Us · Rentals · Church · Careers.
   Ported from the desktop prototype (pages-new.jsx / NEW-1…NEW-6)
   onto the mobile component kit. All ride [informational_pages].
   ============================================================ */

const grid2n = { display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 12 };

/* ===== 6.15 Membership ===== */
function Page_Membership() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="membership" onOpenMenu={openMenu} />

      <div className="m-section">
        <Hero eyebrow="Join the Kroc" title="Become a Kroc Member" titleClass="t-h1"
          sub="One membership opens two pools, the fitness center, the climbing tower, the recreation field, and 100+ weekly classes — for every age in your household." dims="1400×460">
          <div style={{ display: "grid", gap: 10 }}>
            <a className="btn btn-light btn-lg btn-block">Sign Up Today</a>
            <a className="btn btn-outline-light btn-block">View Member Benefits</a>
          </div>
        </Hero>
      </div>

      {/* section jump-nav — same Compact Featured Pages cards as the homepage Quick Links (SYNC-27) */}
      <div className="m-section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[
            ["Member Benefits", "heart"], ["PlayCare", "star"], ["Center Features", "dumbbell"],
            ["Member Stories", "users"], ["Financial Assistance", "info"], ["Policies", "lock"],
          ].map(([t, ic]) => <QuickLinkCard key={t} title={t} icon={ic} />)}
        </div>
      </div>

      {/* benefits band */}
      <div className="m-section">
        <div className="m-band navy">
          <div className="eyebrow" style={{ opacity: .75, marginBottom: 8 }}>Included with every membership</div>
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Kroc Membership Benefits</h2>
          <p className="t-sm" style={{ margin: "0 0 16px", opacity: .9 }}>These benefits are included with all Kroc memberships — no add-ons, no surprises.</p>
          <div style={{ marginBottom: 18 }}>
            <CheckList color="#fff" textColor="rgba(255,255,255,.92)" items={[
              "Fitness Center — free weights, strength & cardio (ages 13+)",
              "Recreational, lap & warm-water therapy pools + climbing tower",
              "Water & Land Group/X classes (ages 16+)",
              "Recreation field & playground access",
              "Priority registration for camps & sports",
              "Early registration for swim lessons before the public",
              "Complimentary guest coupons each month",
              "Discounts on classes & programs, plus $4 off public ice skating",
            ]} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <a className="btn btn-light btn-block">Purchase a Membership Online</a>
            <a className="btn btn-outline-light btn-block">View our Program Guide</a>
          </div>
        </div>
      </div>

      {/* discounts & holds accordion */}
      <div className="m-section">
        <Faq title="Discounts, Assistance & Holds" items={[
          ["Insurance-Paid Memberships", "We partner with SilverSneakers, Renew Active, Silver&Fit, and several Medicare Advantage plans. Bring your member ID to the front desk and we'll verify your eligibility — your plan may cover your membership in full."],
          ["Military & Public Safety Discounts", "Active-duty military, veterans, and first responders receive a standing discount on adult and family memberships. Show valid ID when you join; the discount renews automatically each month."],
          ["Financial Assistance", "Nobody is turned away for inability to pay. Membership is offered on a sliding scale based on household size and income — ask the front desk for a confidential assistance application."],
          ["Holds", "Dormant Hold ($10/month) and Medical Hold ($5/month with a physician's note) let you keep your current rate and waive a rejoin fee. Holds are available for a minimum of 2 months. Submit your hold request by the 25th of the month."],
        ]} />
      </div>

      {/* membership tiers — [rate_cards] Cards mode */}
      <div className="m-section">
        <div className="eyebrow text-red" style={{ marginBottom: 6 }}>Pricing</div>
        <h2 className="t-h2" style={{ margin: "0 0 14px" }}>Find the membership type that's right for you</h2>
        <div style={{ display: "grid", gap: 10 }}>
          <TierCard name="Teen" price="$22" note="Ages 12–17" />
          <TierCard name="Young Adult" price="$37" note="Ages 18–25" />
          <TierCard name="Adult" price="$52" note="Ages 26–61" />
          <TierCard name="Senior" price="$48" note="Ages 62+" />
          <TierCard name="2 Adult" price="$95" note="Ages 18–61 · 2 adults, same household" />
          <TierCard name="1 Adult Family" price="$85" note="1 adult 26+ + up to 6 dependents (0–25)" />
          <TierCard name="2 Adult Family" price="$105" note="2 adults 26+ + up to 6 dependents (0–25)" />
          <TierCard name="1 Adult Family Play" price="$106" note="1 adult 26+ + up to 6 dependents (0–25)" />
          <TierCard name="2 Adult Family Play" price="$126" note="2 adults 26+ + up to 6 dependents (0–25)" />
        </div>
        <p className="t-xs text-muted" style={{ marginTop: 12, textAlign: "center" }}>A $55 one-time Joiner's Fee is required with each membership type. All rates include sales tax. Details &amp; prices are subject to change without notice.</p>
      </div>

      {/* Family Play Pass comparison — [rate_cards] Comparison Table mode */}
      <div className="m-section">
        <div className="m-panel">
          <div className="eyebrow text-red" style={{ marginBottom: 8 }}>Family Play Pass Membership</div>
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Your all-access key to active, quality family time.</h2>
          <p className="t-sm" style={{ margin: "0 0 16px", lineHeight: 1.6 }}>
            Designed for families who want more ways to move, play, and be together. From pool days and ice skating to fitness, sports, and family events, the Family Play Pass makes it easy to say yes more often — without worrying about drop-in fees or juggling schedules.
          </p>
          <div style={{ marginBottom: 18 }}>
            <CheckList items={[
              "Unlimited access for the whole household",
              "Pools, fitness center, climbing tower & gymnasium",
              "Family-friendly classes and open play times",
              "Priority registration on programs, camps & lessons",
              "Exclusive member events & early-access opportunities",
              "PLUS 15% off select parties & 15% off swim lessons",
            ]} />
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e6e6ea", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: "var(--kroc-navy)", color: "#fff" }}>
                  <th style={{ textAlign: "left", padding: "10px 10px", fontWeight: 500 }}>Benefit</th>
                  <th style={{ textAlign: "center", padding: "10px 6px", fontWeight: 500 }}>Standard</th>
                  <th style={{ textAlign: "center", padding: "10px 6px", fontWeight: 500, background: "#001844" }}>Family Play</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["PlayCare", "$5/child", "Included"],
                  ["Corner Zone", "$5/child", "Included"],
                  ["Therapy Pool Tot Sessions", "—", "Included"],
                  ["Weekday Youth Offerings", "—", "Included"],
                  ["Camp Discounts", "$15 off/wk", "10% off/wk"],
                  ["Parent's Night Out", "$25/child", "$5/child"],
                ].map(([b, s, f], i) => (
                  <tr key={b} style={{ borderTop: "1px solid #ececf0", background: i % 2 ? "#fafafb" : "#fff" }}>
                    <td style={{ padding: "9px 10px", fontWeight: 500 }}>{b}</td>
                    <td style={{ padding: "9px 6px", textAlign: "center", color: "#575757" }}>{s}</td>
                    <td style={{ padding: "9px 6px", textAlign: "center", fontWeight: 500, color: "var(--kroc-navy)", background: "#F4F8FF" }}>{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="f-jenson" style={{ fontSize: 16, color: "var(--kroc-navy)", textAlign: "center", margin: "0 0 16px" }}>Parent &amp; Me Fitness and STEAM classes coming late Winter</p>
          <a className="btn btn-primary btn-block">Purchase a Membership Online</a>
        </div>
      </div>

      {/* PlayCare band */}
      <div className="m-section">
        <div className="m-band navy">
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>PlayCare at the Kroc</h2>
          <p className="t-sm" style={{ margin: "0 0 12px", opacity: .9, lineHeight: 1.6 }}>
            Safe, supervised, and engaging care while you enjoy the Kroc Center. Whether you're taking a fitness class, swimming, or working out, your kids are nearby having fun, learning, and making new friends.
          </p>
          <p className="t-sm" style={{ margin: "0 0 16px", opacity: .9, lineHeight: 1.6 }}>
            For children ages 6 months–11 years while parents are exercising or using the facility. Pre-registration is strongly recommended.
          </p>
          <div style={{ background: "rgba(255,255,255,.08)", borderRadius: 14, padding: "18px 20px" }}>
            <div className="eyebrow" style={{ opacity: .7, marginBottom: 10 }}>Daily Drop-In Rates</div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,.16)", fontSize: 14 }}><span>Members</span><span style={{ fontWeight: 500 }}>$5 / child</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", marginBottom: 14, fontSize: 14 }}><span>Nonmembers</span><span style={{ fontWeight: 500 }}>$9 / child</span></div>
            <a className="btn btn-light btn-block btn-sm">PlayCare Policies</a>
          </div>
        </div>
      </div>

      {/* member story */}
      <div className="m-section">
        <div className="card">
          <PH ratio="3/2" label="member photo · 3:2" style={{ borderRadius: 0 }} />
          <div className="cbody" style={{ padding: 20 }}>
            <div className="eyebrow text-red" style={{ marginBottom: 10 }}>Member Story</div>
            <blockquote className="f-jenson" style={{ margin: 0, fontSize: 20, lineHeight: 1.4 }}>
              "The Kroc is important to me because I'm 93 years old and I come here every day to work out for one hour. I want to stay in shape and keep going. I live a healthy life because of the Kroc."
            </blockquote>
            <div className="t-sm text-muted" style={{ marginTop: 14 }}>— Edward Fletcher, Member since 2011</div>
          </div>
        </div>
      </div>

      {/* hold / cancel form */}
      <div className="m-section">
        <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Need to cancel or place your membership on hold?</h2>
        <p className="t-body" style={{ margin: "0 0 14px" }}>Fill out the form and our Membership Team will be in touch with you.</p>
        <div style={{ background: "#FFF8F8", border: "1px solid #ffe2e2", borderRadius: 14, padding: "16px 18px", marginBottom: 14 }}>
          <div className="eyebrow text-red" style={{ marginBottom: 8 }}>About Holds</div>
          <p className="t-sm" style={{ margin: 0, lineHeight: 1.6 }}>
            Dormant Hold ($10/month) or Medical Hold ($5/month, attach a physician's note). Holds are available for a minimum of 2 months and let you keep your current rate and waive a Joiner's Fee when you're ready to come back. Submit on or before the 25th of every month.
          </p>
        </div>
        <div className="m-panel">
          <div style={grid2n}>
            <Field label="First Name" req placeholder="First name" />
            <Field label="Last Name" req placeholder="Last name" />
          </div>
          <Field label="Membership Type" req placeholder="e.g. 2 Adult Family" />
          <Field label="Email Address" req placeholder="you@example.com" type="email" />
          <Field label="Phone Number" req placeholder="123-456-7890" />
          <Field label="Birthdate" placeholder="MM/DD/YYYY" />
          <Field label="Reason for Leaving / Hold" area={4} placeholder="Leave some brief feedback or your reason for leaving / placing your membership on hold." />
          <a className="btn btn-primary btn-block">Submit</a>
        </div>
      </div>

      {/* policies band */}
      <Band bg="var(--kroc-navy)" title="Stay up to date with Kroc Policies & Codes of Conduct"
        ctas={[{ label: "Safety Policies" }, { label: "General Kroc Policies", variant: "btn-outline-light" }, { label: "Code of Conduct", variant: "btn-outline-light" }]} />

      <Connect />
    </div>
  );
}

/* ===== 6.16 Day Pass ===== */
function Page_DayPass() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="membership" onOpenMenu={openMenu} crumb={{ label: "Membership", onClick: () => navigate("membership") }} />

      <div className="m-section">
        <Hero center short title="Kroc Day Passes" titleClass="t-h1"
          sub="Spend the day with us — no membership required." dims="1400×460 · kids in pool" />
      </div>

      {/* intro / access band (green) */}
      <div className="m-section">
        <div className="m-band" style={{ background: "var(--kroc-success)" }}>
          <h2 className="t-h2" style={{ margin: "0 0 12px" }}>Spend the day with us, buy a day pass!</h2>
          <p className="t-sm" style={{ margin: "0 0 10px", opacity: .95, lineHeight: 1.6 }}>
            A Kroc Center Day Pass gives you the ability to try out some of the different activities we offer without the commitment of a membership. Whether you're looking to jump in the pool or take a fitness class, we have a day pass to fit your needs.
          </p>
          <p className="t-sm" style={{ margin: "0 0 10px", opacity: .95, lineHeight: 1.6 }}>
            Get access to the gymnasium, fitness center, public swimming, recreation field, and climbing tower. Day passes are available online or at the front desk. <strong>Please bring a photo ID when purchasing a day pass. This pass does not include ice skating.</strong>
          </p>
          <p className="t-sm" style={{ margin: "0 0 16px", opacity: .95, lineHeight: 1.6 }}>
            Before purchasing, please view the Hours of Operation to make sure your area of interest is open during your visit.
          </p>
          <div style={{ display: "grid", gap: 8 }}>
            <a className="btn btn-light btn-block">Hours of Operation</a>
            <a className="btn btn-outline-light btn-block">Facility Policies</a>
          </div>
        </div>
      </div>

      {/* pass pricing — [rate_cards] */}
      <div className="m-section">
        <div style={{ display: "grid", gap: 14 }}>
          {[["Youth", "$15", "Ages 3–11"], ["Adult", "$30", "Ages 12+"]].map(([a, price, ages]) => (
            <div key={a} className="card" style={{ padding: "30px 24px", alignItems: "center", textAlign: "center" }}>
              <div style={{ fontSize: 21, marginBottom: 4 }}><strong style={{ fontWeight: 600 }}>{a}</strong> Day Pass</div>
              <div style={{ fontSize: 52, lineHeight: 1, color: "var(--kroc-navy)", margin: "6px 0 4px" }}>{price}</div>
              <div className="t-sm text-muted" style={{ marginBottom: 18 }}>{ages}</div>
              <a className="btn btn-primary btn-lg btn-block">Purchase a Day Pass</a>
            </div>
          ))}
        </div>
      </div>

      {/* membership callout — the same shared IntroBand (photo variant) as the homepage */}
      <div className="m-section">
        <IntroBand
          variant="photo"
          eyebrow="Membership"
          title="Membership is for everyone."
          body="Becoming a member at The Salvation Army Kroc Center is much more than signing up for a health club or wellness center. This is a place where you will feel welcomed and supported no matter what your physical, educational, or social goals — and every person in our community is a critical component."
          primaryCta="Learn More"
          photoLabel="family · 3:2"
        />
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.17 About Us ===== */
function Page_AboutUs() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="about" onOpenMenu={openMenu} />

      <div className="m-section">
        <Hero eyebrow="About Us" title="The Salvation Army Kroc Center" titleClass="t-h1"
          sub="Lt. Colonels Michael & Cindy Dickinson — divisional leadership — and a team of officers, soldiers, and volunteers serving our community every day." dims="1400×460 · leadership" />
      </div>

      {/* Our Vision */}
      <div className="m-section">
        <div className="card">
          <PH ratio="3/2" label="service photo · 3:2" style={{ borderRadius: 0 }} />
          <div className="cbody" style={{ padding: 20 }}>
            <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Our Vision</h2>
            <p className="t-sm" style={{ margin: "0 0 14px", lineHeight: 1.6 }}>The Salvation Army Kroc Center is committed to serving men, women, and children in need every day without discrimination, by:</p>
            <CheckList color="var(--kroc-red)" items={[
              "Providing basic-needs services such as food, rental, and utility assistance, and case management for families in distress",
              "Helping youth overcome obstacles including poverty, violence, and the influence of drugs and illegal activities",
              "Providing a safety net for individuals working to make necessary life changes",
              "Filling a critical need for affordable housing for low-income seniors and families",
              "Responding to disasters by ensuring the most vulnerable receive shelter, food, and help rebuilding their lives",
              "Measuring, communicating, and learning from the impact of our efforts",
            ]} />
          </div>
        </div>
      </div>

      {/* Our Impact */}
      <div className="m-section">
        <SectionHead title="Our Impact" />
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", minHeight: 220, background: "#1C1B1F", color: "#fff", marginBottom: 12 }}>
          <div className="ph" style={{ position: "absolute", inset: 0, borderRadius: 0 }}><span className="lbl" /></div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.7) 100%)" }} />
          <div style={{ position: "absolute", left: 22, bottom: 20, zIndex: 2 }}>
            <div style={{ fontSize: 46, lineHeight: 1 }}>18%</div>
            <div className="t-sm" style={{ color: "rgba(255,255,255,.9)", marginTop: 6, maxWidth: 240 }}>Increase in homelessness from the previous year.</div>
          </div>
        </div>
        <div className="m-panel">
          <h3 className="t-h3" style={{ margin: "0 0 12px" }}>The Salvation Army supplied 10,075,059 safe nights of sleep for people in need in 2024.</h3>
          <p className="t-sm text-muted" style={{ margin: "0 0 16px", lineHeight: 1.6 }}>
            We're committed to putting and keeping a roof over our community members' heads, offering a range of resources for individuals and families experiencing homelessness in a time of crisis. With affordable housing in short supply, The Salvation Army is ready to help all people looking for shelter.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a className="btn btn-primary">Donate</a>
            <div style={{ display: "flex", gap: 12 }}><Icon name="fb" size={18} /><Icon name="x" size={18} /><Icon name="li" size={18} /></div>
          </div>
        </div>
      </div>

      {/* explore links — Featured Pages (icon media) */}
      <div className="m-section">
        <div style={{ display: "grid", gap: 14 }}>
          <FeaturedPageCard media="icon" icon="book" title="Our History" body="Read a brief history of The Salvation Army's more than 130 years of service in our community." cta="Our History" />
          <FeaturedPageCard media="icon" icon="pin" title="Service Areas & Locations" body="We serve counties across the region — find a service center or get in touch with our team." cta="Service Areas" />
          <FeaturedPageCard media="icon" icon="users" title="Who We Are" body="Discover the dedicated officers, soldiers, and volunteers behind The Salvation Army's mission." cta="Learn More" />
        </div>
      </div>

      {/* leadership — People block (bio cards) */}
      <div className="m-section">
        <SectionHead title="Leadership" />
        <Carousel width="80%">
          <PersonCard name="Lt. Colonels Michael & Cindy Dickinson" role="Divisional Commander" ratio="4/5"
            bio="Lt. Colonel Michael Dickinson is divisional commander and Lt. Colonel Cindy Dickinson is divisional director of women's ministries, leading the Salvation Army's work across the division." />
          <PersonCard name="General Lyndon Buckingham" role="General" ratio="4/5"
            bio="General Lyndon Buckingham and Commissioner Bronwyn Buckingham, originally from New Zealand, are passionate representatives of The Salvation Army worldwide." />
          <PersonCard name="Commissioners Merle & Dawn Heatwole" role="National Commander" ratio="4/5"
            bio="National leaders of The Salvation Army in the United States, the Heatwoles assumed their appointments in 2025 with a heart for program and mission." />
        </Carousel>
      </div>

      {/* Visit Us — MapBlock Single (the instance home of the relocated homepage map, HOME-4) */}
      <div className="m-section">
        <MapBlock variant="single"
          title="Visit Us"
          body="The Camden Kroc Center is open to the whole community. Stop by for a tour, a class, or just to say hello."
          address="1234 Community Way, Camden, NJ 08103"
          cta="Get Directions" />
      </div>

      {/* mission band — DonationBlock */}
      <DonationBand
        title="Our Mission"
        body="The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human needs in His name without discrimination."
        primaryCta="Donate Now"
        secondaryCta="Volunteer With Us" />

      <Connect />
    </div>
  );
}

/* ===== 6.18 Rentals ===== */
function Page_Rentals() {
  const { navigate, openMenu } = useNav();
  const [tab, setTab] = React.useState("Theatre");
  return (
    <div>
      <MobileHeader active="rentals" onOpenMenu={openMenu} />

      {/* "Save the Arts" hero */}
      <div className="m-section">
        <Hero center title="Take a Seat" eyebrow="Save the Arts" eyebrowColor="var(--kroc-warning)" dims="1400×460 · theatre">
          <a className="btn" style={{ background: "var(--kroc-warning)", color: "#1C1B1F" }}>Take a Seat Today <Icon name="arrow" size={15} /></a>
        </Hero>
      </div>

      {/* section tabs + quick actions */}
      <div className="m-section">
        <FilterRow items={["Theatre", "Event Spaces", "Corner Zone", "Interest Form", "Resources", "Policy"]} value={tab} onChange={setTab} />
        <div style={{ display: "grid", gap: 8, marginBottom: 14 }}>
          <a className="btn btn-secondary btn-sm btn-block">Book an Event</a>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <a className="btn btn-info btn-sm">Request a Quote</a>
            <a className="btn btn-primary btn-sm">Rates &amp; Specs</a>
          </div>
        </div>
        <div className="m-panel">
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Host an event at the Kroc</h2>
          <p className="t-sm" style={{ margin: 0, lineHeight: 1.6 }}>
            The centrally located Kroc Center is a 12.4-acre campus with unique gathering spaces outfitted with state-of-the-art technical capabilities. Whether you are planning a corporate event, birthday party, baby shower, theatre performance, or field trip, we invite you to take a look.
          </p>
        </div>
      </div>

      {/* Theatre — FacilityCard (carousel · pills · no hours · CTA) */}
      <div className="m-section">
        <FacilityCard
          title="The Joan B. Kroc Theatre & Performing Arts Center"
          photos={["theatre seating · 3:2", "stage · 3:2"]}
          body="Our fully-equipped 33,000-square-foot Performing Arts Center consists of the Joan B. Kroc Theatre, two dance studios, band and orchestra rooms, practice rooms, and a large multipurpose conference room. The theatre seats 549, with a recessed orchestra pit, scene shop, green room, and dressing rooms."
          pills={["Seats 549", "Orchestra pit", "2 dance studios", "Green room", "Recessed stage"]}
          cta="Book the Theatre" />
      </div>

      {/* Rates & specs accordion */}
      <div className="m-section">
        <Faq title="Event Spaces — Rates & Specs" items={[
          ["Rolando Room — 43' × 69' / 2,985 sq. ft.", "The perfect setting for your next corporate occasion, business retreat, awards banquet, or group get-together. Capacity 180 (banquet) / 50 (classroom). Rates from $100/hr (3-hour minimum); nonprofit $50/hr. Round tables $40, theatre-style chairs $1/chair, audio set-up $50, AV technician $50/hour."],
          ["Community Room", "A flexible meeting and gathering space ideal for classes, workshops, and community events. Configurable for lecture, classroom, or banquet seating. High-speed wireless internet throughout."],
          ["Other Kroc Spaces to Rent", "From the gymnasium and recreation field to the aquatics center and the chapel, several additional spaces are available to rent for tournaments, gatherings, and special events."],
          ["Rent an Education Space", "Classrooms and studio spaces are available for tutoring programs, rehearsals, and workshops on a recurring or one-time basis. Educational and nonprofit rates apply."],
          ["Rentals Form & Specifications", "Download our full rental packet for room dimensions, capacities, included equipment, and the fee schedule — or submit the interest form below and our team will follow up within 1–2 business days."],
        ]} />
      </div>

      {/* Corner Zone */}
      <div className="m-section">
        <FacilityCard
          title="Corner Zone Indoor Play Park"
          photos={["play park · 3:2", "climbing structure · 3:2"]}
          body="Looking for the perfect place to host your next party? Book the Corner Zone Indoor Play Park and bounce your way into a fun-filled day at the Kroc Center with family and friends on their special day!"
          pills={["Bounce houses", "Swings", "Trampoline line", "Imaginative playground", "Agility ball toss", "Connect 4 hoops"]}
          cta="Learn More" />
      </div>

      {/* interest form — [custom_forms] */}
      <div className="m-section">
        <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Facility Rental Interest Form</h2>
        <p className="t-sm text-muted" style={{ margin: "0 0 14px", lineHeight: 1.6 }}>
          Please use this application to submit your rental request. The approval process for scheduling your event may require up to 14 days.
        </p>
        <div className="m-panel">
          <Field label="Group / Organization / Private Party" req placeholder="Group or organization name" />
          <Field label="Name of Event" req placeholder="Event name" />
          <Field label="Contact Name" req placeholder="First and last name" />
          <Field label="Rental Dates / Times" req placeholder="All dates, with start and end times" />
          <div style={grid2n}>
            <Field label="Day Phone" placeholder="(000) 000-0000" />
            <Field label="Cell Phone" placeholder="(000) 000-0000" />
          </div>
          <div style={grid2n}>
            <Field label="Email" req placeholder="you@example.com" type="email" />
            <Field label="Est. Attendance" placeholder="e.g. 120" />
          </div>
          <Field label="What spaces are you interested in renting?" placeholder="Theatre, Rolando Room, Corner Zone…" />
          <Field label="Describe your organization's mission and purpose" area={4} placeholder="Tell us a little about your group and your event." />
          <a className="btn btn-primary btn-block">Submit</a>
        </div>
      </div>

      {/* theatre director + policies */}
      <Band bg="var(--kroc-navy)"
        eyebrow="Theatre Director"
        title="Have a production in mind?"
        body="Reach our Theatre Director to talk through technical needs, seating configurations, and available dates — (619) 269-1581 · theatre@kroccenters.org."
        ctas={[{ label: "Email the Theatre Director" }]} />

      <Band bg="var(--kroc-navy)"
        title="Stay up to date with Theatre Policies & Codes of Conduct"
        ctas={[{ label: "Theatre Policy & FAQ" }, { label: "General Kroc Policies", variant: "btn-outline-light" }, { label: "Code of Conduct", variant: "btn-outline-light" }]} />

      <Connect />
    </div>
  );
}

/* ===== 6.19 Kroc Church ===== */
function Page_Church() {
  const { navigate, openMenu } = useNav();
  return (
    <div>
      <MobileHeader active="church" onOpenMenu={openMenu} />

      <div className="m-section">
        <Hero eyebrow="Kroc Church" title="Come as you are. Belong here." titleClass="t-h1"
          sub="A church known for relentlessly seeking the Lord and His truth — serving a great and loving God who loves all people." dims="1400×460 · church" />
      </div>

      {/* welcome */}
      <div className="m-section">
        <div className="eyebrow text-red" style={{ marginBottom: 8, textAlign: "center" }}>Welcome</div>
        <p className="t-body" style={{ margin: 0, textAlign: "center", lineHeight: 1.7 }}>
          We acknowledge that all of us are on a journey. We're at different places, coming from different experiences — oftentimes headed in very different directions. It is our prayerful passion to love God, love others, and serve our community in Jesus' name. Wherever you are, come and discover what a beautiful journey life can be with God directing your paths.
        </p>
      </div>

      {/* service times — FacilityCard with hours */}
      <div className="m-section">
        <FacilityCard
          title="Sunday Worship"
          photos={["worship hall · 3:2"]}
          body="Join us for a heartwarming morning of faith and fellowship. Breakfast Church at 9 AM pairs a delicious breakfast with worship led by our Salvation Army Band, Praise Team, and inspiring preaching — free and open to the public, all ages welcome. Sunday School follows at 10:30 AM."
          hours={[["Breakfast Church", ["Sundays · 9:00 AM"]], ["Sunday School", ["Sundays · 10:30 – 11:30 AM"]]]}
          cta="Plan Your Visit" />
      </div>

      {/* team */}
      <div className="m-section">
        <SectionHead title="Meet the Kroc Church Team" />
        <div style={{ display: "grid", gap: 14 }}>
          <PersonCard name="Majors Rich & Linnea Forney" role="Area Command Leaders / Senior Kroc Officers" ratio="3/2"
            bio="In The Salvation Army, officers serve as pastors of the church congregation as well as administrators for the community-oriented ministries within the facility."
            phone="217-231-5662" email="forney@kroccenters.org" />
          <PersonCard name="Heather Martin" role="Administrative Assistant to the Captains" ratio="3/2"
            bio="Heather supports the church office and ministry teams — a friendly first point of contact for anything happening at Kroc Church."
            phone="217-231-5674" email="heather@kroccenters.org" />
        </div>
      </div>

      {/* connect links */}
      <div className="m-section">
        <SectionHead title="Connect with Kroc Church!" />
        <div style={{ display: "grid", gap: 10 }}>
          {[["Kroc Church Facebook Page", "var(--kroc-red)"], ["Join Ministry Groups", "var(--kroc-navy)"]].map(([t, bg]) => (
            <a key={t} style={{ background: bg, color: "#fff", borderRadius: 14, padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 15.5 }}>{t}<Icon name="arrowUR" size={17} /></a>
          ))}
          {["Youth Ministries Group", "Teen Ministries Group", "Adult Ministries Group"].map(t => (
            <a key={t} style={{ background: "var(--kroc-navy-150)", color: "#fff", borderRadius: 14, padding: "15px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 14 }}>{t}<Icon name="arrowUR" size={15} /></a>
          ))}
        </div>
      </div>

      {/* weekly ministries */}
      <div className="m-section">
        <SectionHead title="Weekly Ministries" />
        <div className="m-panel" style={{ padding: "4px 20px" }}>
          {[
            ["Daytime Women's Group", "Tuesdays · 10 AM – Noon", "Fellowship, education, service, and worship. Free and open to the public."],
            ["Wednesday Devotions", "Wednesdays · 10–10:30 AM", "A time of prayer and inspiration from God's word. Ages 18+."],
            ["Bible Study", "Wednesdays · 6 PM", "Walking through the Holy Land with video curriculum."],
            ["Men's & Women's Fellowship", "3rd Sunday · 4–6:30 PM", "Embrace (women) and The Forge (men) — fellowship and Bible discussion."],
            ["Family Fun — Game On!", "Last Sunday · 1 PM", "Christ-centered fellowship for the whole family — board games, scavenger hunts, movie nights, and theme parties!"],
          ].map(([t, when, desc], i) => (
            <div key={t} style={{ padding: "14px 0", borderTop: i ? "1px solid #f0f0f2" : "none" }}>
              <div className="t-title" style={{ fontWeight: 500, marginBottom: 2 }}>{t}</div>
              <div className="t-xs text-red" style={{ marginBottom: 4 }}>{when}</div>
              <p className="t-sm text-muted" style={{ margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* prayer request */}
      <div className="m-section">
        <div className="m-band navy">
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Prayer Request</h2>
          <p className="t-sm" style={{ margin: "0 0 16px", opacity: .9, lineHeight: 1.6 }}>
            It is our prayerful passion to love God, love others, and serve our community in Jesus' name. Let us pray with you and for you.
          </p>
          <a className="btn btn-light btn-block">Submit a Prayer Request</a>
        </div>
      </div>

      {/* K.R.O.C. Kids */}
      <div className="m-section">
        <div className="m-panel">
          <div className="eyebrow text-red" style={{ marginBottom: 8 }}>K.R.O.C. Kids · Keep Relying On Christ</div>
          <h2 className="t-h2" style={{ margin: "0 0 10px" }}>Weekly Character Building</h2>
          <p className="t-sm" style={{ margin: "0 0 16px", lineHeight: 1.6 }}>
            Held every Wednesday when school is in session. Join us to worship, study, and seek to know Jesus together. We build character, relationships, and learn the importance of morality. Open to Pre-K–12th.
          </p>
          <div className="t-sm text-muted" style={{ marginBottom: 8, fontWeight: 500 }}>Troops · 4–5 PM</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
            {["Moonbeams · Pre-K", "Sunbeams", "Girl Guards", "Adventure Corps — Explorers", "Adventure Corps — Rangers"].map(t => <span key={t} className="pill sm" style={{ background: "var(--kroc-area)" }}>{t}</span>)}
          </div>
          <div className="t-sm text-muted" style={{ marginBottom: 8, fontWeight: 500 }}>Award Ceremonies</div>
          <div style={{ background: "#FFEBEB", borderRadius: 12, padding: "12px 16px", marginBottom: 10 }}>
            <div className="t-sm" style={{ fontWeight: 500 }}>K.R.O.C. Kids: Court of Awards</div>
            <div className="t-xs text-muted">Youth graduate to new troops and are recognized for emblems earned.</div>
          </div>
          <div style={{ background: "#FFF6E8", borderRadius: 12, padding: "12px 16px", marginBottom: 14 }}>
            <div className="t-sm" style={{ fontWeight: 500 }}>K.R.O.C. Kids: Divine Service</div>
            <div className="t-xs text-muted">Youth present in uniform, share music, and celebrate accomplishments.</div>
          </div>
          <a className="btn btn-secondary btn-sm" style={{ alignSelf: "flex-start" }}>Register at the Control Desk</a>
        </div>
      </div>

      {/* music + auxiliary */}
      <div className="m-section">
        <div style={{ display: "grid", gap: 14 }}>
          <div className="m-panel">
            <h3 className="t-h3" style={{ margin: "0 0 8px" }}>Music + Praise</h3>
            <p className="t-sm text-muted" style={{ margin: "0 0 12px", lineHeight: 1.55 }}>Music programs are held in the Worship Theater. Dates are subject to change — see the monthly class schedule for times and locations.</p>
            <div style={{ display: "flex", gap: 8 }}><span className="pill sm" style={{ background: "var(--kroc-area)" }}>Praise Team</span><span className="pill sm" style={{ background: "var(--kroc-area)" }}>Senior Band</span></div>
          </div>
          <div className="m-panel">
            <h3 className="t-h3" style={{ margin: "0 0 8px" }}>Women's Auxiliary</h3>
            <p className="t-sm text-muted" style={{ margin: "0 0 12px", lineHeight: 1.55 }}>Open to all women (ages 18+) in the community. Members provide thousands of volunteer hours and raise funds that strengthen the local Salvation Army.</p>
            <div style={{ display: "flex", gap: 8 }}><span className="pill sm" style={{ background: "var(--kroc-area)" }}>$20 Annual</span><span className="pill sm" style={{ background: "var(--kroc-area)" }}>$30 Sustaining</span></div>
          </div>
        </div>
      </div>

      <Connect />
    </div>
  );
}

/* ===== 6.20 Careers ===== */
function Page_Careers() {
  const { navigate, openMenu } = useNav();
  const jobs = [
    ["Kroc Center", "Camden, NJ", ["Welcome Team Attendant", "Child Watch Attendant", "Custodian"]],
    ["Family Services & Shelter", "Camden, NJ", ["Shelter Monitor", "Homeless Programs Case Manager"]],
    ["Family Store", "Camden, NJ", ["Family Store Worker", "Softgoods Specialist"]],
  ];
  return (
    <div>
      <MobileHeader active="careers" onOpenMenu={openMenu} />

      {/* team headshot row */}
      <div className="m-section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <PH key={i} ratio="1/1" style={{ borderRadius: "50%" }} scrim={false} />
          ))}
        </div>
      </div>

      {/* intro */}
      <div className="m-section">
        <h1 className="t-h1" style={{ margin: "0 0 10px", textAlign: "center" }}>Join our Team!</h1>
        <p className="t-body" style={{ margin: 0, textAlign: "center", lineHeight: 1.7 }}>
          At The Salvation Army's Area Command, we're committed to making a positive impact in our community by fostering an environment where everyone can thrive.
        </p>
      </div>

      {/* why work with us */}
      <div className="m-section">
        <SectionHead title="Why work with us?" />
        <div style={{ display: "grid", gap: 14 }}>
          {[
            ["heart", "Meaningful Work", "Every role plays a vital part in improving lives — whether you're working with clients at Family Services, assisting a donation at the Family Store, or serving members at the Kroc Center."],
            ["users", "Inclusive Culture", "We strive to create a welcoming and diverse workplace where all employees feel respected, supported, and empowered to grow professionally and personally."],
            ["star", "Community Impact", "Be part of a team committed to serving the community. From social services to fitness and wellness programs, we work together to uplift and support those around us."],
          ].map(([ic, t, b]) => (
            <div key={t} className="card" style={{ padding: 20 }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: "var(--kroc-red-50)", color: "var(--kroc-red)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}><Icon name={ic} size={22} /></span>
              <h3 className="t-h3" style={{ margin: "0 0 6px" }}>{t}</h3>
              <p className="t-sm text-muted" style={{ margin: 0, lineHeight: 1.6 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* benefits */}
      <div className="m-section">
        <div className="m-panel">
          <h3 className="t-h3" style={{ margin: "0 0 14px" }}>Our Benefits</h3>
          <CheckList items={[
            "Free Kroc membership — you just cover the taxes!",
            "Paid time off — varies based on employment status",
            "Comprehensive benefits for full-time staff: health, dental, vision, and hearing",
            "Retirement savings plan with employer contributions",
          ]} />
        </div>
      </div>

      {/* open positions band */}
      <Band bg="var(--kroc-navy)" center
        title="Open Positions"
        body="Explore our current job openings and find a role that fits your skills and passion. Whether you're just starting your career or looking to take the next step, we have opportunities in various departments." />

      {/* job listings — [job_postings] */}
      <div className="m-section">
        <div style={{ display: "grid", gap: 14 }}>
          {jobs.map(([dept, loc, roles]) => (
            <div key={dept} className="card" style={{ padding: 20 }}>
              <h3 className="t-h3" style={{ margin: "0 0 2px" }}>{dept}</h3>
              <div className="t-xs text-muted" style={{ marginBottom: 12 }}>{loc}</div>
              <div style={{ display: "grid", gap: 9 }}>
                {roles.map(r => (
                  <a key={r} className="text-red" style={{ fontSize: 14.5, display: "inline-flex", alignItems: "center", gap: 8 }}><Icon name="arrowUR" size={14} /> {r}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* how to apply + text-to-apply */}
      <div className="m-section">
        <div style={{ display: "grid", gap: 14 }}>
          <div className="m-panel">
            <h3 className="t-h3" style={{ margin: "0 0 8px" }}>How to Apply</h3>
            <p className="t-sm" style={{ margin: 0, lineHeight: 1.6 }}>
              Applying is easy! Select a position that interests you from our listings. You'll be redirected to the posting and can click "Apply Now" to complete your application. We review applications on a rolling basis and will be in touch if we see a potential match.
            </p>
          </div>
          <div className="m-band" style={{ margin: 0, textAlign: "center" }}>
            <div className="eyebrow" style={{ opacity: .8, marginBottom: 6 }}>Text to Apply</div>
            <div style={{ fontSize: 21, marginBottom: 2 }}>Text "SALVATION ARMY"</div>
            <div className="t-body" style={{ opacity: .9 }}>to <strong>22633</strong></div>
          </div>
        </div>
      </div>

      {/* join us band */}
      <Band bg="var(--kroc-red)" center
        title="Join us in making a difference!"
        ctas={[{ label: "View All Openings" }]} />

      {/* HR contacts — People block */}
      <div className="m-section">
        <SectionHead title="Questions?" />
        <div style={{ display: "grid", gap: 12 }}>
          {[
            ["Cassie Dierker", "Human Resources Director", "cassie@kroccenters.org"],
            ["Dylan Altmix", "Human Resources Assistant", "dylan@kroccenters.org"],
          ].map(([n, r, e]) => (
            <div key={n} className="m-panel" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px" }}>
              <PH ratio="1/1" style={{ width: 64, flex: "0 0 64px", borderRadius: "50%" }} scrim={false} />
              <div>
                <div className="t-title" style={{ fontWeight: 500 }}>{n}</div>
                <div className="t-xs text-muted" style={{ marginBottom: 6 }}>{r}</div>
                <a className="link t-sm" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Icon name="mail" size={13} color="#EF3E42" /> Email Us</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Connect />
    </div>
  );
}

Object.assign(window, { Page_Membership, Page_DayPass, Page_AboutUs, Page_Rentals, Page_Church, Page_Careers });

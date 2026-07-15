/* New Pages — Membership, Day Pass, About Us, Rentals, Church, Careers.
   Built on the existing KROC component kit (shared.jsx). Content migrated from the
   legacy Salvation Army / Kroc site screenshots into the current design philosophy.
   All pages ride on the [informational_pages] freestyle model + drag-in blocks. */

/* PageFrame is defined once in pages-a.jsx (loaded before this file) and reused here. */

/* centered max-width content wrapper used across pages */
function Wrap({ children, mt=48, max=1248, style }){
  return (
    <div className="kroc-main" style={{marginTop:mt}}>
      <div style={{maxWidth:max,margin:"0 auto",...style}}>{children}</div>
    </div>
  );
}

function SectionHead({ eyebrow, title, link, linkLabel }){
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:18,gap:16,flexWrap:"wrap"}}>
      <div>
        {eyebrow && <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:8}}>{eyebrow}</div>}
        <h2 className="t-heading-md" style={{margin:0}}>{title}</h2>
      </div>
      {link && <a style={{fontSize:13,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,whiteSpace:"nowrap"}}>{linkLabel} <Icon name="arrowUR" size={14}/></a>}
    </div>
  );
}

/* full-bleed palette band with optional CTA cluster (policies / save-the-arts / "join us") */
function Band({ bg="var(--kroc-navy)", eyebrow, title, body, children, ctas=[], align="left", mt=48 }){
  return (
    <div style={{marginTop:mt}}>
      <div style={{margin:"0 16px",borderRadius:20,background:bg,color:"#fff",padding:"44px 48px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:28,flexWrap:"wrap",textAlign:align}}>
          <div style={{maxWidth:640}}>
            {eyebrow && <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.72)",marginBottom:10}}>{eyebrow}</div>}
            {title && <h2 className="t-heading-md" style={{margin:"0 0 10px",color:"#fff"}}>{title}</h2>}
            {body && <p style={{margin:0,fontSize:15.5,lineHeight:1.6,color:"rgba(255,255,255,.85)"}}>{body}</p>}
            {children}
          </div>
          {ctas.length>0 &&
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              {ctas.map((c,i)=>(<a key={i} className={`btn ${c.variant||(i===0?"btn-light":"btn-outline-light")}`}>{c.label}</a>))}
            </div>}
        </div>
      </div>
    </div>
  );
}

/* simple text input field row */
function Field({ label, req, placeholder, type="text", area, half }){
  return (
    <div style={{marginBottom:14, ...(half?{}:{})}}>
      <label style={{display:"block",fontSize:13,fontWeight:500,color:"#1C1B1F",marginBottom:7}}>{label}{req && <span style={{color:"var(--kroc-red)",marginLeft:2}}>*</span>}</label>
      {area
        ? <div className="kroc-input" style={{alignItems:"flex-start"}}><textarea rows={area} placeholder={placeholder} style={{flex:1,background:"none",border:0,outline:"none",fontFamily:"inherit",fontSize:14,resize:"vertical"}}/></div>
        : <div className="kroc-input"><input type={type} placeholder={placeholder}/></div>}
    </div>
  );
}

/* member-tier price card */
function TierCard({ name, price, per="/mo", note }){
  return (
    <div className="kroc-card" style={{padding:"20px 22px",flexDirection:"row",alignItems:"baseline",justifyContent:"space-between",gap:12}}>
      <div>
        <div style={{fontSize:17,marginBottom:2}}>{name}</div>
        {note && <div style={{fontSize:12.5,color:"#575757"}}>{note}</div>}
      </div>
      <div style={{whiteSpace:"nowrap",textAlign:"right"}}>
        <span style={{fontSize:24,color:"var(--kroc-navy)"}}>{price}</span>
        <span style={{fontSize:12.5,color:"#575757"}}>{per}</span>
      </div>
    </div>
  );
}

/* person card with optional bio / contact */
function PersonCard({ name, role, bio, email, phone, ratio="4/5" }){
  return (
    <div className="kroc-card" style={{padding:0}}>
      <div className="img" style={{aspectRatio:ratio}}><span className="label">portrait · {ratio.replace("/",":")}</span></div>
      <div className="body" style={{padding:"18px 22px"}}>
        <div style={{fontSize:18}}>{name}</div>
        <div style={{fontSize:13,color:"#575757",marginBottom: bio||email||phone?8:0}}>{role}</div>
        {bio && <p style={{fontSize:13.5,color:"#1C1B1F",margin:"0 0 10px",lineHeight:1.55}}>{bio}</p>}
        {phone && <div style={{fontSize:13.5,color:"#1C1B1F",marginBottom:4,display:"flex",alignItems:"center",gap:8}}><Icon name="phone" size={14} color="#EF3E42"/> {phone}</div>}
        {email && <a style={{fontSize:13.5,color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",display:"inline-flex",alignItems:"center",gap:8,cursor:"pointer"}}><Icon name="mail" size={14} color="#EF3E42"/> {email}</a>}
      </div>
    </div>
  );
}

/* checklist (What's Included / Benefits) */
function CheckList({ items, columns=1, color="var(--kroc-success)", textColor="#1C1B1F" }){
  return (
    <div style={{display:"grid",gridTemplateColumns:`repeat(${columns},1fr)`,gap:"10px 28px"}}>
      {items.map((t,i)=>(
        <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14.5,lineHeight:1.5,color:textColor}}>
          <span style={{flex:"0 0 20px",color}}><Icon name="check" size={18}/></span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

/* =========================================================================
   6.15 MEMBERSHIP
   ========================================================================= */
function Page_Membership(){
  return (
    <PageFrame id="p-membership" n="6.15 · Page" name="Membership"
      schema="[informational_pages]"
      fields={[
        ["Page Name", "Text · required · hero H1"],
        ["Hero Image — Desktop / Mobile", "Image · campaign hero"],
        ["Hero Primary / Secondary CTA", "Text + URL"],
        ["Benefits Band", "Drag-in [donation_block]-style mission band"],
        ["Discounts & Holds", "Drag-in [faqs] (accordion)"],
        ["Membership Tiers", "Page Content (WYSIWYG) · pricing table"],
        ["Family Play Comparison", "Page Content · comparison table"],
        ["PlayCare Band", "Drag-in [facility_section] variant"],
        ["Member Story", "Drag-in [featured_stories] · quote"],
        ["Hold / Cancel Form", "Drag-in [custom_forms]"],
        ["Policies Band", "Drag-in band · cross-links to [informational_pages]"],
      ]}
      notes="Pageset · Freestyle · /membership/. Migrated from the San Diego Kroc membership page: benefits, tiered pricing, the Family Play Pass comparison, PlayCare rates, member story, and the hold/cancel form — all rebuilt on the current component kit.">

      <Header active="Membership" location="Camden Kroc Center · Eastern Region"/>

      {/* Hero */}
      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0, aspectRatio:"3/1"}}>
          <div className="ph-bg"><div className="dims">1400×460 · pool / facility</div></div>
          <div className="inner">
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:12}}>Join the Kroc</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 14px"}}>Become a Kroc Member</h1>
            <p style={{fontSize:18,color:"rgba(255,255,255,.85)",marginBottom:28,maxWidth:560}}>
              One membership opens two pools, the fitness center, the climbing tower, the recreation field, and 100+ weekly classes — for every age in your household.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a className="btn btn-light btn-lg">Sign Up Today</a>
              <a className="btn btn-outline-light btn-lg">View Member Benefits</a>
            </div>
          </div>
        </section>
      </div>

      {/* Quick-nav row — Featured Pages "compact" variant (shared FeaturedPageCard) */}
      <Wrap mt={40}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:12}}>
          {[
            ["Member Benefits","heart"],["PlayCare","star"],["Center Features","dumbbell"],
            ["Member Stories","users"],["Financial Assistance","info"],["Policies","lock"],
          ].map(([t,ic])=>(
            <FeaturedPageCard key={t} variant="compact" title={t} icon={ic}/>
          ))}
        </div>
      </Wrap>

      {/* Benefits band */}
      <div style={{marginTop:40}}>
        <div style={{margin:"0 16px",borderRadius:20,background:"var(--kroc-navy)",color:"#fff",padding:"44px 48px",display:"grid",gridTemplateColumns:"5fr 7fr",gap:40,alignItems:"center"}}>
          <div>
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.72)",marginBottom:10}}>Included with every membership</div>
            <h2 className="t-heading-md" style={{margin:"0 0 16px",color:"#fff"}}>Kroc Membership Benefits</h2>
            <p style={{margin:"0 0 24px",fontSize:15,lineHeight:1.6,color:"rgba(255,255,255,.85)"}}>
              These benefits are included with all Kroc memberships — no add-ons, no surprises.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a className="btn btn-light">Purchase a Membership Online</a>
              <a className="btn btn-outline-light">View our Program Guide</a>
            </div>
          </div>
          <CheckList color="#fff" textColor="rgba(255,255,255,.92)" columns={2} items={[
            "Fitness Center — free weights, strength equipment, and cardio (ages 13+)",
            "Recreational pool, lap pool, warm-water therapy pool, and climbing tower",
            "Water & Land Group/X classes (ages 16+)",
            "Recreation field & playground access",
            "Priority registration for camps & sports",
            "Early registration for swim lessons before the public",
            "Complimentary guest coupons each month",
            "Discounts on classes & programs, plus $4 off public ice skating",
          ]}/>
        </div>
      </div>

      {/* Discounts & holds accordion */}
      <Wrap mt={48} max={1248}>
        <FaqList
          title="Discounts, Assistance & Holds"
          items={[
            ["Insurance-Paid Memberships","We partner with SilverSneakers, Renew Active, Silver&Fit, and several Medicare Advantage plans. Bring your member ID to the front desk and we'll verify your eligibility — your plan may cover your membership in full."],
            ["Military & Public Safety Discounts","Active-duty military, veterans, and first responders receive a standing discount on adult and family memberships. Show valid ID when you join; the discount renews automatically each month."],
            ["Financial Assistance","Nobody is turned away for inability to pay. Membership is offered on a sliding scale based on household size and income — ask the front desk for a confidential assistance application."],
            ["Holds","Dormant Hold ($10/month) and Medical Hold ($5/month with a physician's note) let you keep your current rate and waive a rejoin fee. Holds are available for a minimum of 2 months. Submit your hold request by the 25th of the month."],
          ]}
        />
      </Wrap>

      {/* Membership tiers */}
      <Wrap mt={56}>
        <SectionHead eyebrow="Pricing" title="Find the membership type that's right for you"/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14}}>
          <TierCard name="Teen" price="$22" note="Ages 12–17"/>
          <TierCard name="Young Adult" price="$37" note="Ages 18–25"/>
          <TierCard name="Adult" price="$52" note="Ages 26–61"/>
          <TierCard name="Senior" price="$48" note="Ages 62+"/>
          <TierCard name="2 Adult" price="$95" note="Ages 18–61 · 2 adults, same household"/>
          <TierCard name="1 Adult Family" price="$85" note="1 adult 26+ + up to 6 dependents (0–25)"/>
          <TierCard name="2 Adult Family" price="$105" note="2 adults 26+ + up to 6 dependents (0–25)"/>
          <TierCard name="1 Adult Family Play" price="$106" note="1 adult 26+ + up to 6 dependents (0–25)"/>
          <TierCard name="2 Adult Family Play" price="$126" note="2 adults 26+ + up to 6 dependents (0–25)"/>
        </div>
        <p style={{fontSize:12.5,color:"#575757",marginTop:16,textAlign:"center"}}>A $55 one-time Joiner's Fee is required with each membership type. All rates include sales tax. Details & prices are subject to change without notice.</p>
      </Wrap>

      {/* Family Play Pass comparison */}
      <Wrap mt={56}>
        <div style={{background:"#fff",borderRadius:20,padding:"40px 48px"}}>
          <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:10}}>Family Play Pass Membership</div>
          <h2 className="t-heading-md" style={{margin:"0 0 14px"}}>Your all-access key to active, quality family time.</h2>
          <p style={{fontSize:15,lineHeight:1.65,color:"#1C1B1F",maxWidth:760,margin:"0 0 24px"}}>
            Designed for families who want more ways to move, play, and be together. From pool days and ice skating to fitness, sports, and family events, the Family Play Pass makes it easy to say yes more often — without worrying about drop-in fees or juggling schedules.
          </p>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px 32px",marginBottom:28}}>
            <CheckList items={[
              "Unlimited access for the whole household",
              "Pools, fitness center, climbing tower, and gymnasium",
              "Family-friendly classes and open play times",
            ]}/>
            <CheckList items={[
              "Priority registration on programs, camps, and lessons",
              "Exclusive member events and early-access opportunities",
              "PLUS 15% off select parties & 15% off swim lessons",
            ]}/>
          </div>

          {/* comparison table */}
          <div style={{borderRadius:14,overflow:"hidden",border:"1px solid #e6e6ea"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:14.5}}>
              <thead>
                <tr style={{background:"var(--kroc-navy)",color:"#fff"}}>
                  <th style={{textAlign:"left",padding:"16px 22px",fontWeight:500}}>Benefit</th>
                  <th style={{textAlign:"center",padding:"16px 22px",fontWeight:500}}>Standard Family Plan</th>
                  <th style={{textAlign:"center",padding:"16px 22px",fontWeight:500,background:"#001844"}}>Family Play Membership</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["PlayCare","$5/child (drop-in)","Included"],
                  ["Corner Zone","$5/child (drop-in)","Included"],
                  ["Therapy Pool Tot Sessions","—","Included"],
                  ["New Weekday Youth Offerings","—","Included"],
                  ["Camp Discounts","$15 off/week","10% off/week (up to $35/week)"],
                  ["Parent's Night Out","$25/child (Nonmembers: $40)","$5/child"],
                ].map(([b,s,f],i)=>(
                  <tr key={b} style={{borderTop:"1px solid #ececf0",background:i%2?"#fafafb":"#fff"}}>
                    <td style={{padding:"14px 22px",fontWeight:500}}>{b}</td>
                    <td style={{padding:"14px 22px",textAlign:"center",color:"#575757"}}>{s}</td>
                    <td style={{padding:"14px 22px",textAlign:"center",fontWeight:500,color:"var(--kroc-navy)",background:"#F4F8FF"}}>{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="f-jenson" style={{fontSize:18,color:"var(--kroc-navy)",textAlign:"center",margin:"22px 0 22px"}}>Parent &amp; Me Fitness and STEAM classes coming late Winter</p>
          <div style={{display:"flex",justifyContent:"center"}}><a className="btn btn-primary">Purchase a Membership Online</a></div>
        </div>
      </Wrap>

      {/* PlayCare band */}
      <div style={{marginTop:48}}>
        <div style={{margin:"0 16px",borderRadius:20,background:"var(--kroc-navy)",color:"#fff",padding:"44px 48px",display:"grid",gridTemplateColumns:"7fr 5fr",gap:40,alignItems:"center"}}>
          <div>
            <h2 className="t-heading-md" style={{margin:"0 0 14px",color:"#fff"}}>PlayCare at the Kroc</h2>
            <p style={{fontSize:15,lineHeight:1.6,color:"rgba(255,255,255,.85)",margin:"0 0 14px"}}>
              PlayCare is more than just a children's program — it's safe, supervised, and engaging care while you enjoy the Kroc Center. Whether you're taking a fitness class, swimming, or working out, your kids are nearby having fun, learning, and making new friends.
            </p>
            <p style={{fontSize:15,lineHeight:1.6,color:"rgba(255,255,255,.85)",margin:0}}>
              A great value for families: supervised, active care for children ages 6 months–11 years while parents are exercising or using the Kroc Center facility. Pre-registration is strongly recommended.
            </p>
          </div>
          <div style={{background:"rgba(255,255,255,.08)",borderRadius:16,padding:"24px 28px"}}>
            <div style={{fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:12}}>Daily Drop-In Rates</div>
            <div style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,.16)"}}><span>Members</span><span style={{fontWeight:500}}>$5 / child</span></div>
            <div style={{display:"flex",justifyContent:"space-between",padding:"8px 0",marginBottom:18}}><span>Nonmembers</span><span style={{fontWeight:500}}>$9 / child</span></div>
            <a className="btn btn-light btn-block btn-sm">PlayCare Policies</a>
          </div>
        </div>
      </div>

      {/* Member story */}
      <Wrap mt={48}>
        <div style={{background:"#fff",borderRadius:20,overflow:"hidden",display:"grid",gridTemplateColumns:"5fr 7fr"}}>
          <div className="img-ph" style={{aspectRatio:"unset",borderRadius:0,minHeight:300}}><span className="label">member photo · 3:2</span></div>
          <div style={{padding:"44px 48px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:14}}>Member Story</div>
            <blockquote className="f-jenson" style={{margin:0,fontSize:26,lineHeight:1.35,color:"#1C1B1F"}}>
              "The Kroc is important to me because I'm 93 years old and I come here every day to work out for one hour. I want to stay in shape and keep going. I live a healthy life because of the Kroc."
            </blockquote>
            <div style={{marginTop:20,fontSize:14,color:"#575757"}}>— Edward Fletcher, Member since 2011</div>
          </div>
        </div>
      </Wrap>

      {/* Hold / cancel form */}
      <Wrap mt={48}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"start"}}>
          <div>
            <h2 className="t-heading-md" style={{margin:"0 0 12px"}}>Need to cancel or place your membership on hold?</h2>
            <p style={{fontSize:15,lineHeight:1.6,color:"#1C1B1F",marginBottom:16}}>
              Fill out the form and our Membership Team will be in touch with you.
            </p>
            <div style={{background:"#FFF8F8",border:"1px solid #ffe2e2",borderRadius:14,padding:"18px 22px"}}>
              <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:8}}>About Holds</div>
              <p style={{fontSize:13.5,lineHeight:1.6,color:"#1C1B1F",margin:0}}>
                Dormant Hold ($10/month) or Medical Hold ($5/month, attach a physician's note). Holds are available for a minimum of 2 months and let you keep your current rate and waive a Joiner's Fee when you're ready to come back. Submit on or before the 25th of every month.
              </p>
            </div>
          </div>
          <div style={{background:"#fff",borderRadius:20,padding:"36px 40px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <Field label="First Name" req placeholder="First name"/>
              <Field label="Last Name" req placeholder="Last name"/>
            </div>
            <Field label="Membership Type" req placeholder="e.g. 2 Adult Family"/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <Field label="Email Address" req placeholder="you@example.com" type="email"/>
              <Field label="Phone Number" req placeholder="123-456-7890"/>
            </div>
            <Field label="Birthdate" placeholder="MM/DD/YYYY"/>
            <Field label="Reason for Leaving / Hold" area={4} placeholder="Leave some brief feedback or your reason for leaving / placing your membership on hold."/>
            <a className="btn btn-primary">Submit</a>
          </div>
        </div>
      </Wrap>

      {/* Policies band */}
      <Band bg="var(--kroc-navy)" title="Stay up to date with Kroc Policies & Codes of Conduct"
        ctas={[{label:"Safety Policies"},{label:"General Kroc Policies",variant:"btn-outline-light"},{label:"Code of Conduct",variant:"btn-outline-light"}]}/>

      <Connect/>
    </PageFrame>
  );
}

/* =========================================================================
   6.16 DAY PASS
   ========================================================================= */
function Page_DayPass(){
  return (
    <PageFrame id="p-daypass" n="6.16 · Page" name="Day Pass"
      schema="[informational_pages]"
      fields={[
        ["Page Name", "Text · required · hero H1"],
        ["Hero Image — Desktop / Mobile", "Image · aquatics hero"],
        ["Intro Band", "Page Content (WYSIWYG) + CTA links"],
        ["Pass Pricing", "Page Content · price cards (Youth / Adult)"],
        ["Membership Callout", "Drag-in [facility_section] / IntroBand"],
      ]}
      notes="Pageset · Freestyle · /day-pass/. Migrated from the San Diego Kroc Day Pass page: intro + access notes, Youth/Adult pass pricing, and the shared 'Membership is for everyone' callout (same IntroBand used on the homepage).">

      <Header active="Membership" location="Camden Kroc Center · Eastern Region"/>

      {/* Hero */}
      <div className="kroc-main">
        <section className="kroc-hero center" style={{margin:0, aspectRatio:"3/1",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
          <div className="ph-bg"><div className="dims">1400×460 · kids in pool</div></div>
          <div className="inner" style={{textAlign:"center",margin:"0 auto"}}>
            <h1 className="t-heading-xl" style={{margin:"0 0 12px"}}>Kroc Day Passes</h1>
            <p style={{fontSize:18,color:"rgba(255,255,255,.85)",maxWidth:560,margin:"0 auto"}}>
              Spend the day with us — no membership required.
            </p>
          </div>
        </section>
      </div>

      {/* Intro band */}
      <div style={{marginTop:40}}>
        <div style={{margin:"0 16px",borderRadius:20,background:"var(--kroc-success)",color:"#fff",padding:"44px 48px"}}>
          <h2 className="t-heading-md" style={{margin:"0 0 16px",color:"#fff"}}>Spend the day with us, buy a day pass!</h2>
          <p style={{fontSize:15.5,lineHeight:1.6,color:"rgba(255,255,255,.92)",maxWidth:880,margin:"0 0 14px"}}>
            A Kroc Center Day Pass gives you the ability to try out some of the different activities we offer without the commitment of a membership. Whether you're looking to jump in the pool or take a fitness class, we have a day pass to fit your needs.
          </p>
          <p style={{fontSize:15.5,lineHeight:1.6,color:"rgba(255,255,255,.92)",maxWidth:880,margin:"0 0 14px"}}>
            Get access to the gymnasium, fitness center, public swimming, recreation field, and climbing tower. Day passes are available for purchase online or at the front desk. <strong>Please bring a photo ID when purchasing a day pass. This pass does not include ice skating.</strong>
          </p>
          <p style={{fontSize:15.5,lineHeight:1.6,color:"rgba(255,255,255,.92)",maxWidth:880,margin:"0 0 24px"}}>
            Before purchasing a day pass, please view the Hours of Operation to make sure that your area of interest is open during your visit.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <a className="btn btn-light">Hours of Operation</a>
            <a className="btn btn-outline-light">Facility Policies</a>
          </div>
        </div>
      </div>

      {/* Pricing cards */}
      <Wrap mt={48} max={960}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
          {[
            ["Youth","Day Pass","$15","Ages 3–11"],
            ["Adult","Day Pass","$30","Ages 12+"],
          ].map(([a,b,price,ages])=>(
            <div key={a} className="kroc-card" style={{padding:"44px 40px",alignItems:"center",textAlign:"center"}}>
              <div style={{fontSize:26,marginBottom:6}}><strong style={{fontWeight:600}}>{a}</strong> {b}</div>
              <div style={{fontSize:64,lineHeight:1,color:"var(--kroc-navy)",margin:"6px 0 4px"}}>{price}</div>
              <div style={{fontSize:14,color:"#575757",marginBottom:24}}>{ages}</div>
              <a className="btn btn-primary btn-lg">Purchase a Day Pass</a>
            </div>
          ))}
        </div>
      </Wrap>

      {/* Membership callout — shared IntroBand (photo variant) */}
      <Wrap mt={48}>
        <IntroBand
          variant="photo"
          eyebrow="Membership"
          title="Membership is for everyone."
          body="Becoming a member at The Salvation Army Kroc Center is much more than signing up for a health club or wellness center. This is a place where you will feel welcomed and supported no matter what your physical, educational, or social goals — and every person in our community is a critical component."
          primaryCta="Learn More"
          photoLabel="family · 3:2"
        />
      </Wrap>

      <Connect/>
    </PageFrame>
  );
}

/* =========================================================================
   6.17 ABOUT US
   ========================================================================= */
function Page_AboutUs(){
  return (
    <PageFrame id="p-about" n="6.17 · Page" name="About Us"
      schema="[informational_pages]"
      fields={[
        ["Page Name", "Text · required · hero H1"],
        ["Hero Image — Desktop", "Image · leadership / facility hero"],
        ["Our Vision", "Page Content (WYSIWYG) · image + bulleted card"],
        ["Our Impact", "Page Content · stat + narrative"],
        ["Explore Links", "Drag-in [featured_pages] (3-up)"],
        ["Leadership", "Drag-in [people_block] (3-up with bio)"],
        ["Visit Us", "Drag-in [map_block] (single location)"],
        ["Mission Band", "Drag-in [donation_block]"],
      ]}
      notes="Pageset · Freestyle · /about-us/. Migrated from the Salvation Army Southern California About page: vision, impact, explore links, leadership bios, location, and the mission band.">

      <Header active="About Us" location="Camden Kroc Center · Eastern Region"/>

      {/* Hero (dark) */}
      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0, aspectRatio:"3/1"}}>
          <div className="ph-bg"><div className="dims">1400×460 · leadership</div></div>
          <div className="inner">
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:12}}>About Us</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 14px"}}>The Salvation Army Kroc Center</h1>
            <p style={{fontSize:17,color:"rgba(255,255,255,.85)",maxWidth:620}}>
              Lt. Colonels Michael &amp; Cindy Dickinson — divisional leadership — and a team of officers, soldiers, and volunteers serving our community every day.
            </p>
          </div>
        </section>
      </div>

      {/* Our Vision */}
      <Wrap mt={48}>
        <div style={{background:"#fff",borderRadius:20,overflow:"hidden",display:"grid",gridTemplateColumns:"5fr 7fr"}}>
          <div className="img-ph" style={{aspectRatio:"unset",borderRadius:0,minHeight:420}}><span className="label">service photo · 4:5</span></div>
          <div style={{padding:"40px 44px"}}>
            <h2 className="t-heading-md" style={{margin:"0 0 14px"}}>Our Vision</h2>
            <p style={{fontSize:15,lineHeight:1.6,color:"#1C1B1F",marginBottom:16}}>
              The Salvation Army Kroc Center is committed to serving men, women, and children in need every day without discrimination, by:
            </p>
            <CheckList color="var(--kroc-red)" items={[
              "Providing basic-needs services such as food, rental, and utility assistance, and case management for families in distress",
              "Helping youth overcome obstacles including poverty, violence, and the influence of drugs and illegal activities",
              "Providing a safety net for individuals working to make necessary life changes",
              "Filling a critical need for affordable housing for low-income seniors and families",
              "Responding to disasters by ensuring the most vulnerable receive shelter, food, and help rebuilding their lives",
              "Measuring, communicating, and learning from the impact of our efforts",
            ]}/>
          </div>
        </div>
      </Wrap>

      {/* Our Impact */}
      <Wrap mt={48}>
        <SectionHead title="Our Impact"/>
        <div style={{display:"grid",gridTemplateColumns:"5fr 7fr",gap:16}}>
          <div style={{position:"relative",borderRadius:20,overflow:"hidden",minHeight:300,background:"#1C1B1F",color:"#fff"}}>
            <div className="img-ph" style={{position:"absolute",inset:0,borderRadius:0}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.7) 100%)"}}/>
            <div style={{position:"absolute",left:32,bottom:28,zIndex:2}}>
              <div style={{fontSize:54,lineHeight:1,fontWeight:400}}>18%</div>
              <div style={{fontSize:15,color:"rgba(255,255,255,.9)",marginTop:8,maxWidth:260}}>Increase in homelessness from the previous year.</div>
            </div>
          </div>
          <div style={{background:"#fff",borderRadius:20,padding:"40px 44px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h3 className="t-heading-sm" style={{margin:"0 0 16px",lineHeight:1.2}}>The Salvation Army supplied 10,075,059 safe nights of sleep for people in need in 2024.</h3>
            <p style={{fontSize:14.5,lineHeight:1.65,color:"#575757",margin:"0 0 22px"}}>
              We're committed to putting and keeping a roof over our community members' heads, offering a range of resources for individuals and families experiencing homelessness in a time of crisis. With affordable housing in short supply, The Salvation Army is ready to help all people looking for shelter.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:16}}>
              <a className="btn btn-primary">Donate</a>
              <div style={{display:"flex",gap:12,color:"#1C1B1F"}}>
                <Icon name="fb" size={18}/><Icon name="x" size={18}/><Icon name="li" size={18}/>
              </div>
            </div>
          </div>
        </div>
      </Wrap>

      {/* Explore links */}
      <Wrap mt={48}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          <FeaturedPageCard media="icon" icon="book" title="Our History" body="Read a brief history of The Salvation Army's more than 130 years of service in our community." cta="Our History"/>
          <FeaturedPageCard media="icon" icon="pin" title="Service Areas & Locations" body="We serve counties across the region — find a service center or get in touch with our team." cta="Service Areas"/>
          <FeaturedPageCard media="icon" icon="users" title="Who We Are" body="Discover the dedicated officers, soldiers, and volunteers behind The Salvation Army's mission." cta="Learn More"/>
        </div>
      </Wrap>

      {/* Leadership */}
      <Wrap mt={48}>
        <SectionHead title="Leadership"/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          <PersonCard name="Lt. Colonels Michael & Cindy Dickinson" role="Divisional Commander" ratio="4/5"
            bio="Lt. Colonel Michael Dickinson is divisional commander and Lt. Colonel Cindy Dickinson is divisional director of women's ministries, leading the Salvation Army's work across the division."/>
          <PersonCard name="General Lyndon Buckingham" role="General" ratio="4/5"
            bio="General Lyndon Buckingham and Commissioner Bronwyn Buckingham, originally from New Zealand, are passionate representatives of The Salvation Army worldwide."/>
          <PersonCard name="Commissioners Merle & Dawn Heatwole" role="National Commander" ratio="4/5"
            bio="National leaders of The Salvation Army in the United States, the Heatwoles assumed their appointments in 2025 with a heart for program and mission."/>
        </div>
      </Wrap>

      {/* Visit us — single map */}
      <Wrap mt={48}>
        <MapBlock variant="single"
          title="Visit Us"
          body="The Camden Kroc Center is open to the whole community. Stop by for a tour, a class, or just to say hello."
          address="1234 Community Way, Camden, NJ 08103"
          cta="Get Directions"/>
      </Wrap>

      {/* Mission band */}
      <DonationBlock
        variant="red"
        title="Our Mission"
        body="The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human needs in His name without discrimination."
        primaryCta="Donate Now"
        secondaryCta="Volunteer With Us"/>

      <Connect/>
    </PageFrame>
  );
}

/* =========================================================================
   6.18 RENTALS
   ========================================================================= */
function Page_Rentals(){
  const [tab, setTab] = React.useState("Theatre");
  const tabs = ["Theatre","Event Spaces","Corner Zone","Interest Form","Resources","Policy"];
  return (
    <PageFrame id="p-rentals" n="6.18 · Page" name="Rentals"
      schema="[informational_pages]"
      fields={[
        ["Page Name", "Text · required · hero H1"],
        ["Hero Image — Desktop", "Image · theatre campaign hero"],
        ["Section Tabs", "Page anchors · UI only"],
        ["Theatre / Spaces", "Drag-in [facility_section] (repeater)"],
        ["Rates & Specs", "Drag-in [faqs] (accordion)"],
        ["Corner Zone", "Drag-in [facility_section]"],
        ["Interest Form", "Drag-in [custom_forms]"],
        ["Client List / Policies", "Page Content + cross-link band"],
      ]}
      notes="Pageset · Freestyle · /rentals/. Migrated from the San Diego Kroc Rentals page: Joan B. Kroc Theatre, event spaces with rates & specs, the Corner Zone play park, and the facility rental interest form — rebuilt with FacilityCard, FaqList, and a custom form.">

      <Header active="Rentals" location="Camden Kroc Center · Eastern Region"/>

      {/* Hero — art-deco "Save the Arts" */}
      <div className="kroc-main">
        <section className="kroc-hero center" style={{margin:0, aspectRatio:"3/1",background:"#0d0d0f",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
          <div className="ph-bg" style={{filter:"brightness(.5)"}}><div className="dims">1400×460 · theatre</div></div>
          <div className="inner" style={{textAlign:"center",margin:"0 auto"}}>
            <div className="f-jenson" style={{fontSize:14,letterSpacing:".3em",textTransform:"uppercase",color:"var(--kroc-warning)",marginBottom:14}}>Save the Arts</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 20px",letterSpacing:".04em"}}>Take a Seat</h1>
            <a className="btn btn-warning" style={{background:"var(--kroc-warning)",color:"#1C1B1F"}}>Take a Seat Today <Icon name="arrow" size={16}/></a>
          </div>
        </section>
      </div>

      {/* tabs + quick actions */}
      <Wrap mt={32}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:24}}>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {tabs.map(t=>(<span key={t} onClick={()=>setTab(t)} className={`pill ${tab===t?"active":""}`} style={{cursor:"pointer"}}>{t}</span>))}
          </div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <a className="btn btn-secondary btn-sm">Book an Event</a>
            <a className="btn btn-info btn-sm">Request a Quote</a>
            <a className="btn btn-primary btn-sm">Rates &amp; Specs</a>
          </div>
        </div>
        <div style={{background:"#fff",borderRadius:20,padding:"36px 44px"}}>
          <h2 className="t-heading-md" style={{margin:"0 0 12px"}}>Host an event at the Kroc</h2>
          <p style={{fontSize:15,lineHeight:1.65,color:"#1C1B1F",maxWidth:820,margin:0}}>
            The centrally located Kroc Center is a 12.4-acre campus built with state-of-the-art technical capabilities. Our campus has unique gathering spaces outfitted with date-of-the-art technical capabilities. Whether you are planning a corporate event, birthday party, baby shower, theatre performance, field trip, or any other special occasion, we invite you to take a look.
          </p>
        </div>
      </Wrap>

      {/* Theatre — FacilityCard */}
      <Wrap mt={32}>
        <FacilityCard
          title="The Joan B. Kroc Theatre & Performing Arts Center"
          side="left"
          photos={["theatre seating · 3:2","stage · 3:2"]}
          body="Our fully-equipped 33,000-square-foot Performing Arts Center consists of the Joan B. Kroc Theatre, two dance studios, band and orchestra rooms, vocal and instrumental practice rooms, and a large multipurpose conference room. The theatre seats 549, with a 2,512-square-foot recessed orchestra pit, scene shop, and support facilities including a green room, dressing rooms, and other adjacent meeting spaces."
          pills={["Seats 549","Orchestra pit","2 dance studios","Green room","Recessed stage"]}
          cta="Book the Theatre"/>
      </Wrap>

      {/* Rates & specs accordion */}
      <Wrap mt={40}>
        <FaqList
          title="Event Spaces — Rates & Specs"
          items={[
            ["Rolando Room — 43' × 69' / 2,985 sq. ft.","The centrally located Rolando Room is the perfect setting for your next special corporate occasion, business retreat, awards banquet, or simple group get-together. Capacity 180 (banquet) / 50 (classroom). Rates from $100/hr (3-hour minimum); nonprofit $50/hr. Additional fees: round tables $40 (incl. chairs & linen), theatre-style chairs $1/chair, audio set-up $50, AV technician $50/hour. Caterer and glitter are not permitted."],
            ["Community Room","A flexible meeting and gathering space ideal for classes, workshops, and community events. Configurable for lecture, classroom, or banquet seating. High-speed wireless internet access throughout. Contact our events team for current capacity and pricing."],
            ["Other Kroc Spaces to Rent","From the gymnasium and recreation field to the aquatics center and the chapel, several additional spaces are available to rent for tournaments, gatherings, and special events. Availability varies by season and program schedule."],
            ["Rent an Education Space","Classrooms and studio spaces are available for tutoring programs, rehearsals, and workshops on a recurring or one-time basis. Educational and nonprofit rates apply."],
            ["Rentals Form & Specifications","Download our full rental information packet for room dimensions, capacities, included equipment, and the complete fee schedule, or submit the interest form below and our team will follow up within 1–2 business days."],
          ]}
        />
      </Wrap>

      {/* Corner Zone — FacilityCard, photo right, navy */}
      <Wrap mt={40}>
        <FacilityCard
          title="Corner Zone Indoor Play Park"
          side="right"
          photos={["play park · 3:2","climbing structure · 3:2"]}
          body="Looking for the perfect place to host your next party? Book the Corner Zone Indoor Play Park and bounce your way into a fun-filled day at the Kroc Center. Our indoor play park is the perfect place for your not-to-have-fun-and-make-memories with family and friends on their special day!"
          pills={["Bounce houses","Swings","Trampoline line","Imaginative playground","Agility ball toss","Connect 4 hoops","Floor ball tables, and more!"]}
          cta="Learn More"/>
      </Wrap>

      {/* Interest form */}
      <Wrap mt={48}>
        <SectionHead eyebrow="Custom Form · [custom_forms]" title="Facility Rental Interest Form"/>
        <div style={{background:"#fff",borderRadius:20,padding:"40px 48px"}}>
          <p style={{fontSize:14.5,color:"#575757",margin:"0 0 24px",maxWidth:820,lineHeight:1.6}}>
            Please use this application to submit your rental request for the Kroc Center. Please note, the approval process for scheduling your event may require up to 14 days. Thank you for considering the Kroc Center for your event.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 24px"}}>
            <Field label="Name of Group / Organization / Private Party" req placeholder="Group or organization name"/>
            <Field label="Name of Event" req placeholder="Event name"/>
            <Field label="Contact Name" req placeholder="First and last name"/>
            <Field label="Rental Dates / Times" req placeholder="List all rental dates, with start and end times"/>
            <Field label="Day Phone" placeholder="(000) 000-0000"/>
            <Field label="Cell Phone" placeholder="(000) 000-0000"/>
            <Field label="Email" req placeholder="you@example.com" type="email"/>
            <Field label="Estimated Attendance" placeholder="e.g. 120"/>
          </div>
          <Field label="What spaces are you interested in renting?" placeholder="Theatre, Rolando Room, Corner Zone, gymnasium…"/>
          <Field label="Describe your organization's mission and purpose (if applicable)" area={4} placeholder="Tell us a little about your group and your event."/>
          <a className="btn btn-primary">Submit</a>
        </div>
      </Wrap>

      {/* Theatre director + policies */}
      <Band bg="var(--kroc-navy)" mt={48}
        eyebrow="Theatre Director"
        title="Have a production in mind?"
        body="Reach our Theatre Director to talk through technical needs, seating configurations, and available dates — (619) 269-1581 · theatre@kroccenters.org."
        ctas={[{label:"Email the Theatre Director"}]}/>

      <Band bg="var(--kroc-navy)" mt={16}
        title="Stay up to date with Theatre Policies & Codes of Conduct"
        ctas={[{label:"Theatre Policy & FAQ"},{label:"General Kroc Policies",variant:"btn-outline-light"},{label:"Code of Conduct",variant:"btn-outline-light"}]}/>

      <Connect/>
    </PageFrame>
  );
}

/* =========================================================================
   6.19 CHURCH
   ========================================================================= */
function Page_Church(){
  return (
    <PageFrame id="p-church" n="6.19 · Page" name="Kroc Church"
      schema="[informational_pages]"
      fields={[
        ["Page Name", "Text · required · hero H1"],
        ["Hero Image — Desktop", "Image · church / facility hero"],
        ["Welcome", "Page Content (WYSIWYG)"],
        ["Service Times", "Drag-in [facility_section]"],
        ["Leadership / Team", "Drag-in [people_block]"],
        ["Connect Links", "Page Content · colored link buttons"],
        ["Ministries & Schedule", "Drag-in [faqs] + schedule list"],
        ["Kroc Kids / Music", "Page Content"],
      ]}
      notes="Pageset · Freestyle · /church/. Migrated from the Quincy Kroc Church page: welcome, service times, leadership, ministry connect links, weekly schedule, Kroc Kids troops, and Music + Praise.">

      <Header active="Church" location="Camden Kroc Center · Eastern Region"/>

      {/* Hero */}
      <div className="kroc-main">
        <section className="kroc-hero" style={{margin:0, aspectRatio:"3/1"}}>
          <div className="ph-bg"><div className="dims">1400×460 · church</div></div>
          <div className="inner">
            <div style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:12}}>Kroc Church</div>
            <h1 className="t-heading-xl" style={{margin:"0 0 14px"}}>Come as you are. Belong here.</h1>
            <p style={{fontSize:17,color:"rgba(255,255,255,.85)",maxWidth:600}}>
              A church known for relentlessly seeking the Lord and His truth — serving a great and loving God who loves all people.
            </p>
          </div>
        </section>
      </div>

      {/* Welcome */}
      <Wrap mt={48} max={900}>
        <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:10,textAlign:"center"}}>Welcome</div>
        <p style={{fontSize:18,lineHeight:1.7,color:"#1C1B1F",textAlign:"center",margin:0}}>
          We acknowledge that all of us are on a journey. We're at different places, coming from different experiences — oftentimes headed in very different directions. Here at the Kroc Center, we are privileged to be located in such a vibrant and diverse community, and it is our prayerful passion to love God, love others, and serve our community in Jesus' name. Wherever you are, it is our hope that you come and discover what a beautiful journey life can be with God directing your paths.
        </p>
      </Wrap>

      {/* Service times — FacilityCard */}
      <Wrap mt={48}>
        <FacilityCard
          title="Sunday Worship"
          side="left"
          photos={["worship hall · 3:2"]}
          body="Join us for a heartwarming morning of faith and fellowship. Breakfast Church at 9 AM pairs a delicious breakfast with worship led by our Salvation Army Band, Praise Team, and inspiring preaching — free and open to the public, all ages welcome. Sunday School follows at 10:30 AM, a hands-on approach to applying God's Word combined with the love of a family."
          hours={[["Breakfast Church",["Sundays · 9:00 AM"]],["Sunday School",["Sundays · 10:30 – 11:30 AM"]]]}
          cta="Plan Your Visit"/>
      </Wrap>

      {/* Meet the leaders */}
      <Wrap mt={48}>
        <SectionHead title="Meet the Kroc Church Team"/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          <PersonCard name="Majors Rich & Linnea Forney" role="Area Command Leaders / Senior Kroc Officers" ratio="3/2"
            bio="In The Salvation Army, officers serve as pastors of the church congregation as well as administrators for the community-oriented ministries that happen within the facility. We are excited to be part of the beautiful Ray & Joan Kroc Corps Community Center!"
            phone="217-231-5662" email="forney@kroccenters.org"/>
          <PersonCard name="Heather Martin" role="Administrative Assistant to the Captains" ratio="3/2"
            bio="Heather supports the church office and ministry teams — a friendly first point of contact for anything happening at Kroc Church."
            phone="217-231-5674" email="heather@kroccenters.org"/>
        </div>
      </Wrap>

      {/* Connect links */}
      <Wrap mt={48}>
        <SectionHead title="Connect with Kroc Church!"/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
          {[["Kroc Church Facebook Page","var(--kroc-red)"],["Join Ministry Groups","var(--kroc-navy)"]].map(([t,bg])=>(
            <a key={t} style={{background:bg,color:"#fff",borderRadius:14,padding:"22px 26px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",textDecoration:"none",fontSize:16}}>{t}<Icon name="arrowUR" size={18}/></a>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
          {["Youth Ministries Group","Teen Ministries Group","Adult Ministries Group"].map(t=>(
            <a key={t} style={{background:"var(--kroc-navy-150)",color:"#fff",borderRadius:14,padding:"18px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",textDecoration:"none",fontSize:14.5}}>{t}<Icon name="arrowUR" size={16}/></a>
          ))}
        </div>
      </Wrap>

      {/* Prayer + weekly schedule */}
      <Wrap mt={48}>
        <div style={{display:"grid",gridTemplateColumns:"7fr 5fr",gap:24,alignItems:"start"}}>
          <div>
            <SectionHead title="Weekly Ministries"/>
            <div style={{background:"#fff",borderRadius:20,overflow:"hidden"}}>
              {[
                ["Daytime Women's Group","Tuesdays · 10 AM – Noon","Fellowship, education, service, and worship. Free and open to the public."],
                ["Wednesday Devotions","Wednesdays · 10–10:30 AM","A time of prayer and inspiration from God's word. Ages 18+."],
                ["Bible Study","Wednesdays · 6 PM","Walking through the Holy Land with video curriculum."],
                ["Men's & Women's Fellowship","3rd Sunday · 4–6:30 PM","Embrace (women) and The Forge (men) — fellowship and Bible discussion."],
                ["Family Fun — Game On!","Last Sunday · 1 PM","Christ-centered fellowship for the whole family — board games, scavenger hunts, movie nights, and theme parties!"],
              ].map(([t,when,desc],i)=>(
                <div key={t} style={{padding:"18px 24px",borderTop:i?"1px solid #eaeaee":"none"}}>
                  <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"baseline",marginBottom:4,flexWrap:"wrap"}}>
                    <div style={{fontSize:16,fontWeight:500}}>{t}</div>
                    <div style={{fontSize:13,color:"var(--kroc-red)"}}>{when}</div>
                  </div>
                  <p style={{margin:0,fontSize:13.5,color:"#575757",lineHeight:1.5}}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHead title="Prayer Request"/>
            <div style={{background:"var(--kroc-navy)",color:"#fff",borderRadius:20,padding:"32px 34px"}}>
              <p style={{fontSize:15,lineHeight:1.6,color:"rgba(255,255,255,.88)",margin:"0 0 20px"}}>
                It is our prayerful passion to love God, love others, and serve our community in Jesus' name. Let us pray with you and for you.
              </p>
              <a className="btn btn-light">Submit a Prayer Request</a>
            </div>
          </div>
        </div>
      </Wrap>

      {/* Kroc Kids */}
      <Wrap mt={48}>
        <div style={{background:"#fff",borderRadius:20,padding:"40px 48px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:16,flexWrap:"wrap",marginBottom:8}}>
            <div>
              <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:8}}>K.R.O.C. Kids · Keep Relying On Christ</div>
              <h2 className="t-heading-md" style={{margin:0}}>Weekly Character Building</h2>
            </div>
            <a className="btn btn-secondary btn-sm">Register at the Control Desk</a>
          </div>
          <p style={{fontSize:14.5,lineHeight:1.6,color:"#1C1B1F",maxWidth:760,margin:"6px 0 24px"}}>
            Held every Wednesday when school is in session. Join us to worship, study, and seek to know Jesus together. We build character, relationships, and learn the importance of morality. Open to Pre-K–12th.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"7fr 5fr",gap:32}}>
            <div>
              <div style={{fontSize:13,color:"#575757",marginBottom:10,fontWeight:500}}>Troops · 4–5 PM</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {["Moonbeams · Pre-K","Sunbeams","Girl Guards","Adventure Corps — Explorers","Adventure Corps — Rangers"].map(t=>(<span key={t} className="pill">{t}</span>))}
              </div>
            </div>
            <div>
              <div style={{fontSize:13,color:"#575757",marginBottom:10,fontWeight:500}}>Award Ceremonies</div>
              <div style={{background:"#FFEBEB",borderRadius:12,padding:"12px 16px",marginBottom:10}}>
                <div style={{fontSize:14,fontWeight:500}}>K.R.O.C. Kids: Court of Awards</div>
                <div style={{fontSize:12.5,color:"#575757"}}>Youth graduate to new troops and are recognized for emblems earned.</div>
              </div>
              <div style={{background:"#FFF6E8",borderRadius:12,padding:"12px 16px"}}>
                <div style={{fontSize:14,fontWeight:500}}>K.R.O.C. Kids: Divine Service</div>
                <div style={{fontSize:12.5,color:"#575757"}}>Youth present in uniform, share music, and celebrate accomplishments.</div>
              </div>
            </div>
          </div>
        </div>
      </Wrap>

      {/* Music + Praise / Women's Auxiliary */}
      <Wrap mt={32}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          <div style={{background:"#fff",borderRadius:20,padding:"32px 36px"}}>
            <h3 className="t-heading-sm" style={{margin:"0 0 10px"}}>Music + Praise</h3>
            <p style={{fontSize:14,color:"#575757",margin:"0 0 16px",lineHeight:1.55}}>Music programs are held in the Worship Theater. Dates are subject to change — see the monthly class schedule for times and locations.</p>
            <div style={{display:"flex",gap:8}}><span className="pill">Praise Team</span><span className="pill">Senior Band</span></div>
          </div>
          <div style={{background:"#fff",borderRadius:20,padding:"32px 36px"}}>
            <h3 className="t-heading-sm" style={{margin:"0 0 10px"}}>Women's Auxiliary</h3>
            <p style={{fontSize:14,color:"#575757",margin:"0 0 16px",lineHeight:1.55}}>Open to all women (ages 18+) in the community. Members provide thousands of volunteer hours and raise funds that strengthen the local Salvation Army.</p>
            <div style={{display:"flex",gap:8}}><span className="pill">$20 Annual</span><span className="pill">$30 Sustaining</span></div>
          </div>
        </div>
      </Wrap>

      <Connect/>
    </PageFrame>
  );
}

/* =========================================================================
   6.20 CAREERS
   ========================================================================= */
function Page_Careers(){
  const jobs = [
    ["Kroc Center","Camden, NJ",["Welcome Team Attendant","Child Watch Attendant","Custodian"]],
    ["Family Services & Shelter","Camden, NJ",["Shelter Monitor","Homeless Programs Case Manager"]],
    ["Family Store","Camden, NJ",["Family Store Worker","Softgoods Specialist"]],
  ];
  return (
    <PageFrame id="p-careers" n="6.20 · Page" name="Careers"
      schema="[informational_pages]"
      fields={[
        ["Page Name", "Text · required · hero H1"],
        ["Team Photos", "Page Content · headshot row"],
        ["Why Work With Us", "Page Content (WYSIWYG)"],
        ["Benefits", "Page Content · checklist"],
        ["Open Positions", "Page Content · role lists by location"],
        ["How to Apply", "Page Content"],
        ["CTA Band", "Drag-in [donation_block]-style band"],
        ["Questions / HR", "Drag-in [people_block]"],
      ]}
      notes="Pageset · Freestyle · /careers/. Migrated from the Quincy Kroc Careers page: intro, why-work-with-us, benefits, open positions by location, how-to-apply, and the HR contacts.">

      <Header active="Careers" location="Camden Kroc Center · Eastern Region"/>

      {/* Team headshot row */}
      <Wrap mt={32}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:16}}>
          {Array.from({length:5}).map((_,i)=>(
            <div key={i} className="img-ph" style={{aspectRatio:"1/1",borderRadius:"50%"}}><span className="label" style={{fontSize:10}}>staff</span></div>
          ))}
        </div>
      </Wrap>

      {/* Join our team intro */}
      <Wrap mt={40} max={900}>
        <h1 className="t-heading-lg" style={{margin:"0 0 14px",textAlign:"center"}}>Join our Team!</h1>
        <p style={{fontSize:16.5,lineHeight:1.7,color:"#1C1B1F",textAlign:"center",margin:0}}>
          At The Salvation Army's Area Command, we're committed to making a positive impact in our community by fostering an environment where everyone can thrive.
        </p>
      </Wrap>

      {/* Why work with us */}
      <Wrap mt={48}>
        <SectionHead title="Why work with us?"/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {[
            ["heart","Meaningful Work","Every role plays a vital part in improving lives — whether you're working with clients at Family Services, assisting a donation at the Family Store, or serving members at the Kroc Center."],
            ["users","Inclusive Culture","We strive to create a welcoming and diverse workplace where all employees feel respected, supported, and empowered to grow professionally and personally."],
            ["star","Community Impact","Be part of a team committed to serving the community. From social services to fitness and wellness programs, we work together to uplift and support those around us."],
          ].map(([ic,t,b])=>(
            <div key={t} className="kroc-card" style={{padding:"28px 26px"}}>
              <span style={{width:48,height:48,borderRadius:12,background:"#FFEBEB",color:"var(--kroc-red)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}><Icon name={ic} size={24}/></span>
              <h3 style={{fontSize:19,margin:"0 0 8px",fontWeight:500}}>{t}</h3>
              <p style={{fontSize:14,lineHeight:1.6,color:"#575757",margin:0}}>{b}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* Benefits */}
      <Wrap mt={32}>
        <div style={{background:"#fff",borderRadius:20,padding:"36px 44px"}}>
          <h3 className="t-heading-sm" style={{margin:"0 0 18px"}}>Our Benefits</h3>
          <CheckList color="var(--kroc-success)" columns={2} items={[
            "Free Kroc membership — you just cover the taxes!",
            "Paid time off — varies based on employment status",
            "Comprehensive benefits for full-time staff: health, dental, vision, and hearing",
            "Retirement savings plan with employer contributions",
          ]}/>
        </div>
      </Wrap>

      {/* Open positions band */}
      <Band bg="var(--kroc-navy)" mt={48} align="center"
        title="Open Positions"
        body="Explore our current job openings and find a role that fits your skills and passion. Whether you're just starting your career or looking to take the next step, we have opportunities in various departments."/>

      {/* Job listings */}
      <Wrap mt={32}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {jobs.map(([dept,loc,roles])=>(
            <div key={dept} className="kroc-card" style={{padding:"28px 28px"}}>
              <h3 style={{fontSize:21,margin:"0 0 2px",fontWeight:500}}>{dept}</h3>
              <div style={{fontSize:13,color:"#575757",marginBottom:16}}>{loc}</div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {roles.map(r=>(
                  <a key={r} style={{color:"var(--kroc-red)",textDecoration:"none",fontSize:15,display:"inline-flex",alignItems:"center",gap:8,cursor:"pointer"}}><Icon name="arrowUR" size={14}/> {r}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Text to Apply + How to apply */}
        <div style={{display:"grid",gridTemplateColumns:"7fr 5fr",gap:16,marginTop:24,alignItems:"stretch"}}>
          <div style={{background:"#fff",borderRadius:20,padding:"32px 36px"}}>
            <h3 className="t-heading-sm" style={{margin:"0 0 10px"}}>How to Apply</h3>
            <p style={{fontSize:14.5,lineHeight:1.65,color:"#1C1B1F",margin:0}}>
              Applying is easy! Select a position that interests you from our listings. You'll be redirected to the posting and can click "Apply Now" to complete your application. We review applications on a rolling basis and will be in touch if we see a potential match.
            </p>
          </div>
          <div style={{background:"var(--kroc-red)",color:"#fff",borderRadius:20,padding:"32px 36px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <div style={{fontSize:11,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.8)",marginBottom:8}}>Text to Apply</div>
            <div style={{fontSize:24,marginBottom:4}}>Text "SALVATION ARMY"</div>
            <div style={{fontSize:15,color:"rgba(255,255,255,.9)"}}>to <strong>22633</strong></div>
          </div>
        </div>
      </Wrap>

      {/* Join us band */}
      <Band bg="var(--kroc-red)" mt={48} align="center"
        title="Join us in making a difference!"
        ctas={[{label:"View All Openings"}]}/>

      {/* Questions / HR contacts */}
      <Wrap mt={48}>
        <SectionHead title="Questions?"/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          {[
            ["Cassie Dierker","Human Resources Director","cassie@kroccenters.org"],
            ["Dylan Altmix","Human Resources Assistant","dylan@kroccenters.org"],
          ].map(([n,r,e])=>(
            <div key={n} style={{background:"#fff",borderRadius:20,padding:"24px 28px",display:"flex",alignItems:"center",gap:20}}>
              <div className="img-ph" style={{width:84,height:84,flex:"0 0 84px",aspectRatio:"1/1",borderRadius:"50%"}}><span className="label" style={{fontSize:9}}>photo</span></div>
              <div>
                <div style={{fontSize:19,fontWeight:500}}>{n}</div>
                <div style={{fontSize:14,color:"#575757",marginBottom:10}}>{r}</div>
                <a style={{display:"inline-flex",alignItems:"center",gap:8,color:"#022056",textDecoration:"underline",textDecorationColor:"#EF3E42",fontSize:14,cursor:"pointer"}}><Icon name="mail" size={15} color="#EF3E42"/> {e}</a>
              </div>
            </div>
          ))}
        </div>
      </Wrap>

      <Connect/>
    </PageFrame>
  );
}

Object.assign(window, { Page_Membership, Page_DayPass, Page_AboutUs, Page_Rentals, Page_Church, Page_Careers });

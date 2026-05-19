/* meta sections: Cover, Essence Audit, Open Questions */

function Cover(){
  return (
    <section className="frame" style={{aspectRatio:"1280/720", background:"#0e0e10", color:"#fff", display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"64px", overflow:"hidden", position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 75% 30%, rgba(239,62,66,.18), transparent 55%), radial-gradient(circle at 15% 85%, rgba(0,32,86,.35), transparent 50%)"}}/>
      <div style={{position:"relative",display:"flex",alignItems:"center",gap:16}}>
        <div className="kroc-logo kroc-logo--on-dark" style={{width:168,height:80}} role="img" aria-label="KROC Centers"/>
        <div>
          <div style={{fontSize:13,color:"#999",letterSpacing:".12em",textTransform:"uppercase"}}>Hi-Fi Prototype · v0.1</div>
          <div style={{fontSize:18,marginTop:2}}>KROC Centers — Website Redesign</div>
        </div>
        <div style={{marginLeft:"auto",fontSize:12,color:"#888",fontFamily:"'SF Mono',Menlo,monospace"}}>1280px desktop · May 2026</div>
      </div>

      <div style={{position:"relative",maxWidth:920}}>
        <div style={{fontSize:14,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:24}}>The Ray &amp; Joan Kroc Community Centers</div>
        <h1 style={{fontSize:88,lineHeight:1.02,margin:"0 0 28px",fontWeight:400,letterSpacing:"-.02em"}}>
          A national framework,<br/>
          <span className="f-jenson" style={{fontStyle:"italic",color:"#FF838B"}}>built block by block.</span>
        </h1>
        <p style={{fontSize:18,color:"#bbb",margin:0,maxWidth:680,lineHeight:1.6}}>
          High-fidelity desktop prototypes for 13 page templates and 12 reusable blocks, styled in the KROC web design system. One CMS — four regions — every KROC center.
        </p>
      </div>

      <div style={{position:"relative",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24,fontSize:13,color:"#aaa",borderTop:"1px solid #2a2a2e",paddingTop:24}}>
        <div><div style={{color:"#666",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",marginBottom:6}}>Pages</div>13 templates</div>
        <div><div style={{color:"#666",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",marginBottom:6}}>Blocks</div>12 reusable patterns</div>
        <div><div style={{color:"#666",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",marginBottom:6}}>Regions</div>Central · Eastern · Southern · Western</div>
        <div><div style={{color:"#666",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",marginBottom:6}}>Designed by</div>Web Design Team</div>
      </div>
    </section>
  );
}

function Essence(){
  const tokens = [
    { label:"red.500",          hex:"#EF3E42", use:"Primary CTA · accents · active filters" },
    { label:"navy.500",         hex:"#002056", use:"In-card CTAs · headings · links" },
    { label:"navy.150",         hex:"#61769C", use:"Utility CTAs (Find Help)" },
    { label:"bg.surface",       hex:"#D9D9D9", use:"Page background — never white" },
    { label:"area.input",       hex:"#EFEFEF", use:"Form inputs · subtle panels" },
    { label:"text.primary",     hex:"#1C1B1F", use:"Body copy" },
    { label:"text.muted",       hex:"#575757", use:"Captions · meta" },
    { label:"link.body",        hex:"#022056", use:"Inline links (red underline)" },
  ];
  return (
    <section className="frame" style={{padding:"56px 64px", background:"#fff"}}>
      <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:48,marginBottom:48}}>
        <div>
          <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:8}}>Essence Audit</div>
          <h2 style={{fontSize:48,margin:"0 0 16px",fontWeight:400,letterSpacing:"-.01em",lineHeight:1.1}}>
            The five rhythms<br/>that hold every page together.
          </h2>
          <p style={{color:"#575757",margin:0,maxWidth:540,fontSize:15.5,lineHeight:1.6}}>
            Across all 13 templates, the same five moves repeat: a floating header pill, a full-bleed photo hero on a grey page, white cards with 20px corners, a navy in-card CTA, and the Connect With Us footer block. If a frame breaks one of these, it isn't KROC.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,alignContent:"start"}}>
          {[
            { n:"01", t:"Floating header", d:"White pill, 20px bottom corners, never spans the viewport." },
            { n:"02", t:"Grey page canvas", d:"#D9D9D9 — every page. Cards float on top, not the other way around." },
            { n:"03", t:"Photo hero", d:"Full-bleed, dark-bottom scrim, no full-width header above it." },
            { n:"04", t:"Card system", d:"20px radius · border:0 · shadow only. One pattern, every page." },
            { n:"05", t:"Connect footer", d:"Same six-row block closes every page except Contact." },
            { n:"06", t:"CTA color rules", d:"Red = conversion. Navy = in-card. Blue-grey = utility. White = on photos." },
          ].map(c => (
            <div key={c.n} style={{padding:"16px 18px",border:"1px solid #e6e6ea",borderRadius:12,background:"#fafafb"}}>
              <div style={{fontSize:10,color:"var(--kroc-red)",fontFamily:"'SF Mono',Menlo,monospace",marginBottom:6}}>{c.n}</div>
              <div style={{fontSize:14,marginBottom:4,fontWeight:500}}>{c.t}</div>
              <div style={{fontSize:12.5,color:"#575757",lineHeight:1.5}}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* type + color */}
      <div style={{display:"grid",gridTemplateColumns:"7fr 5fr",gap:48,marginBottom:48}}>
        <div>
          <div style={{fontSize:11,color:"#575757",letterSpacing:".14em",textTransform:"uppercase",marginBottom:14}}>Typography</div>
          <div style={{padding:"24px 28px",border:"1px solid #e6e6ea",borderRadius:16,background:"#fafafb",marginBottom:12}}>
            <div style={{fontSize:11,fontFamily:"'SF Mono',Menlo,monospace",color:"#575757",marginBottom:6}}>Creato Display · Regular · 60/64</div>
            <div style={{fontSize:60,lineHeight:1.05,fontWeight:400}}>Recreation, education, arts &amp; worship.</div>
          </div>
          <div style={{padding:"24px 28px",border:"1px solid #e6e6ea",borderRadius:16,background:"#fafafb",marginBottom:12}}>
            <div style={{fontSize:11,fontFamily:"'SF Mono',Menlo,monospace",color:"#575757",marginBottom:6}}>Adobe Jenson Pro · Italic · accent only</div>
            <div className="f-jenson" style={{fontSize:48,lineHeight:1.1,color:"#1C1B1F"}}>built block by block.</div>
          </div>
          <div style={{padding:"20px 24px",border:"1px solid #e6e6ea",borderRadius:16,background:"#fafafb",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,fontSize:13}}>
            {[
              ["Heading XL","60 / 1.1"],["Heading LG","48 / 1.15"],["Heading MD","34 / 1.25"],["Heading SM","28 / 1.3"],
              ["Title LG","20 / 1.35"],["Body LG","16 / 1.6"],["Body MD","14 / 1.55"],["Caption","11 / 1.4"],
            ].map(([t,v]) => (
              <div key={t}>
                <div style={{fontSize:11,color:"#575757",fontFamily:"'SF Mono',Menlo,monospace"}}>{v}</div>
                <div>{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{fontSize:11,color:"#575757",letterSpacing:".14em",textTransform:"uppercase",marginBottom:14}}>Color tokens</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {tokens.map(t => (
              <div key={t.label} style={{display:"flex",alignItems:"center",gap:14,padding:"10px 12px",border:"1px solid #e6e6ea",borderRadius:10,background:"#fafafb"}}>
                <div style={{width:44,height:44,borderRadius:8,background:t.hex,border:"1px solid rgba(0,0,0,.06)",flex:"0 0 44px"}}/>
                <div style={{flex:1}}>
                  <div style={{fontFamily:"'SF Mono',Menlo,monospace",fontSize:12}}>{t.label} <span style={{color:"#575757"}}>{t.hex}</span></div>
                  <div style={{fontSize:12,color:"#575757"}}>{t.use}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* spacing + radii + buttons */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:24}}>
        <div>
          <div style={{fontSize:11,color:"#575757",letterSpacing:".14em",textTransform:"uppercase",marginBottom:14}}>Radii &amp; shadows</div>
          <div style={{padding:"24px",border:"1px solid #e6e6ea",borderRadius:16,background:"#fafafb",display:"flex",gap:16,alignItems:"flex-end"}}>
            {[8,12,16,20,24].map(r => (
              <div key={r} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:6}}>
                <div style={{width:56,height:56,background:"#fff",border:"1px solid #e6e6ea",borderRadius:r,boxShadow:"0 0.125rem 0.25rem rgba(0,0,0,.075)"}}/>
                <div style={{fontSize:10,color:"#575757",fontFamily:"'SF Mono',Menlo,monospace"}}>{r}px</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:12.5,color:"#575757",marginTop:10}}>Cards always <code style={{fontFamily:"'SF Mono',Menlo,monospace",background:"#f0f0f3",padding:"1px 6px",borderRadius:3}}>rounded-5</code> (20px). Buttons <code style={{fontFamily:"'SF Mono',Menlo,monospace",background:"#f0f0f3",padding:"1px 6px",borderRadius:3}}>8px</code>.</div>
        </div>
        <div>
          <div style={{fontSize:11,color:"#575757",letterSpacing:".14em",textTransform:"uppercase",marginBottom:14}}>Buttons</div>
          <div style={{padding:"24px",border:"1px solid #e6e6ea",borderRadius:16,background:"#fafafb",display:"flex",flexDirection:"column",gap:10,alignItems:"flex-start"}}>
            <a className="btn btn-primary btn-sm">Donate (conversion)</a>
            <a className="btn btn-secondary btn-sm">View Opportunity (in-card)</a>
            <a className="btn btn-info btn-sm">Find Help (utility)</a>
            <a className="btn btn-light btn-sm" style={{boxShadow:"inset 0 0 0 1px #e6e6ea"}}>White (on photo)</a>
            <a className="btn btn-outline-primary btn-sm">Outline secondary</a>
          </div>
        </div>
        <div>
          <div style={{fontSize:11,color:"#575757",letterSpacing:".14em",textTransform:"uppercase",marginBottom:14}}>Card image scrim</div>
          <div style={{padding:"24px",border:"1px solid #e6e6ea",borderRadius:16,background:"#fafafb"}}>
            <div className="img-ph" style={{aspectRatio:"16/9",borderRadius:12}}>
              <div className="label" style={{position:"absolute",left:14,bottom:10,color:"#fff",fontSize:12,zIndex:3}}>scrim · rgba(28,27,31,.5 → .1)</div>
            </div>
            <div style={{fontSize:12.5,color:"#575757",marginTop:10,lineHeight:1.5}}>
              Every card image gets <code style={{fontFamily:"'SF Mono',Menlo,monospace",background:"#f0f0f3",padding:"1px 6px",borderRadius:3,fontSize:11}}>linear-gradient(360deg, rgba(28,27,31,.5) 0%, rgba(28,27,31,.1) 100%)</code> so white text on a chip/date stays legible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenQuestions(){
  const items = [
    { tag:"Architecture · Comment 2 + 5", title:"Events content model not yet schematized",
      body:"Architect inferred Events from common patterns. We need formal fields: Event Name, Start/End DateTime, Audience Tag (Youth · Family · Adult · Senior · All), Hero Image, Body, Optional CTA, Registration URL, Tag relation, Location override (defaults to KROC center). All Event Detail prototypes assume these — please confirm or amend." },
    { tag:"Architecture · Comment 6", title:"Contact Us needs a hybrid template type",
      body:"Current proposal does not model Contact Us. We've assumed: hybrid template containing form + sidebar (hours · address · embedded map · key staff). Connect With Us is replaced by a cross-link card to avoid recursion." },
    { tag:"Architecture · Comment 7", title:"Volunteers — hybrid model + Golden integration scope",
      body:"Volunteer Opportunity cards on the Volunteers page show skeleton loading states keyed to Golden API. We need: (a) which Golden endpoints power Featured vs All? (b) failure state copy if Golden is down? (c) is the People/Leadership block on Volunteers in scope for v1?" },
    { tag:"Architecture · Comments 1 + 4", title:"Custom kroc-icon library endpoint",
      body:"All program-category and quick-action tiles use kroc-icon placeholders. Confirm: is there a global icons endpoint to register? Naming convention? Falls back to which kit if missing?" },
    { tag:"Architecture · Comment 8", title:"Tags wildcard fed from National",
      body:"All Tags index (6.8) and Tag Detail (6.9) are designed as wildcard pages reading from the national feed. Confirm tag taxonomy is single-source or layered (national + region)?" },
    { tag:"Architecture · Notes", title:"People Block not yet modeled",
      body:"Staff / leadership directory mentioned in proposal Notes but no schema. We've wireframed informally on Contact Us and Volunteers. Needs decision: is it a global block or page-specific?" },
    { tag:"Architecture · Footer", title:"Footer modeled as automated/hybrid",
      body:"Footer reads from [kroc_location] (address, phone, region) and [custom_navigation] (link groups, social, affiliates). Mission card copy: per-center override or global default?" },
    { tag:"Brief", title:"Map block (Southern tourism) and quick-action row (Western)",
      body:"Two regional one-off blocks have no formal schemas. Treated as ad-hoc components for now. Promote to first-class blocks if other regions will reuse." },
    { tag:"Brief", title:"Site Alert behavior",
      body:"Alert annotations include the CMS 'Scheduled: Nov 1 – Nov 30' callout. Confirm: max one alert visible, or can stack? Variant precedence (danger > navy > warning)?" },
    { tag:"Visual", title:"Hero photography is placeholder",
      body:"All heroes use striped grey placeholders. Final visual quality depends on photo art direction — needs a shoot brief covering: faces vs facilities, scrim-friendly composition, 16:9 + 3:1 crops, regional rep." },
  ];
  return (
    <section className="frame" style={{padding:"56px 64px",background:"#fff"}}>
      <div style={{maxWidth:720,marginBottom:32}}>
        <div style={{fontSize:11,color:"var(--kroc-red)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:8}}>Open Questions</div>
        <h2 style={{fontSize:48,margin:"0 0 16px",fontWeight:400,letterSpacing:"-.01em",lineHeight:1.1}}>
          What we've flagged for the architect &amp; PM.
        </h2>
        <p style={{color:"#575757",margin:0,fontSize:15,lineHeight:1.6}}>
          Each item below is a decision the prototype assumed but the architecture proposal didn't yet formalize. Annotations in the page frames point back to these.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        {items.map((q,i) => (
          <div key={i} style={{padding:"22px 24px",border:"1px solid #e6e6ea",borderRadius:16,background:"#fafafb"}}>
            <div style={{fontFamily:"'SF Mono',Menlo,monospace",fontSize:10.5,color:"var(--kroc-red)",marginBottom:8,letterSpacing:".06em"}}>{q.tag}</div>
            <h4 style={{fontSize:17,margin:"0 0 8px",fontWeight:500,lineHeight:1.3}}>{q.title}</h4>
            <p style={{color:"#575757",fontSize:13.5,lineHeight:1.55,margin:0}}>{q.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Cover, Essence, OpenQuestions });


import Head from 'next/head'

export default function Home() {
  const address = "327 16th St"
  return (
    <>
      <Head>
        <title>Product Design and Manufacturing Consulting</title>
        <meta name="description" content="Product design, engineering, prototyping and manufacturing consulting from concept to production." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Product Design and Manufacturing Consulting" />
        <meta property="og:title" content="Product Design and Manufacturing Consulting" />
        <meta property="og:site_name" content="pdmcmanaging.com" />
      </Head>

      <div className="page">
        {/* Fixed contact bar */}
        <div className="contact-bar">
          <div className="contact-left">
            <svg className="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27c1.02.26 2.12.4 3.25.4a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.13.14 2.23.4 3.25a1 1 0 01-.27.95l-2.01 2.59z"/></svg>
            <span className="phone">(917) 572-5163</span>
          </div>
          <div className="contact-mid">
            <svg className="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
            <span className="address">327 16th St</span>
          </div>
          <a href="#contact" className="contact-cta">Contact Us</a>
        </div>

        <header className="site-header">
          <h1 className="main-heading">Product Design and Manufacturing Consulting</h1>
          <div className="header-contact">
            <div className="call">Call: <strong>(917) 572-5163</strong></div>
            <div className="addr">{address}</div>
          </div>
        </header>

        <main className="container">
          <section className="hero">
            <div className="hero-left">
              <h2>Bring your product idea to life — faster and with less risk.</h2>
              <p>We combine industrial design, engineering, and manufacturing expertise to help startups and established businesses move from concept to mass production. Save time, reduce cost, and launch with confidence.</p>
              <div className="hero-cta">
                <a href="#contact" className="btn primary">Request a Consultation</a>
                <a href="#services" className="btn outline">View Services</a>
              </div>

              <div className="stats">
                <div><strong>Typical time-to-prototype</strong><div>4–12 weeks</div></div>
                <div><strong>Reduce rework & cost</strong><div>By up to 30% with early DFM</div></div>
              </div>
            </div>

            <aside className="hero-right">
              <div className="card">
                <h3>Client Intake Snapshot</h3>
                <p>Fill out a quick brief and we’ll provide a tailored next-step plan.</p>
                <form className="brief-form" onSubmit={(e)=>e.preventDefault()}>
                  <input placeholder="Company / Project name" />
                  <input placeholder="Email" />
                  <select>
                    <option>Choose primary goal</option>
                    <option>Prototype quickly</option>
                    <option>Optimize for mass production</option>
                    <option>Explore product-market fit</option>
                  </select>
                  <textarea rows="3" placeholder="Short project description"></textarea>
                  <div className="form-actions">
                    <button className="btn submit">Submit</button>
                    <button className="btn secondary" type="button">Download brief</button>
                  </div>
                </form>
              </div>
            </aside>
          </section>

          <section id="services" className="services">
            <h3>Key Services</h3>
            <p>Comprehensive offerings covering concept to production.</p>
            <div className="service-grid">
              <article className="service">
                <div className="service-icon">⚙️</div>
                <h4>Concept Development & Strategy</h4>
                <p>Define product vision, target market, business goals and a clear roadmap from idea to launch.</p>
              </article>
              <article className="service">
                <div className="service-icon">📋</div>
                <h4>Industrial & User-Centric Design</h4>
                <p>Create aesthetic, functional designs with great ergonomics and delightful user experiences.</p>
              </article>
              <article className="service">
                <div className="service-icon">🔧</div>
                <h4>Engineering & Technical Design</h4>
                <p>Mechanical, electrical and embedded software design ready for prototyping and production.</p>
              </article>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="contact-main">
              <h3>Ready to build the next great product?</h3>
              <p>Schedule a free 30-minute consultation to review your concept and outline the next steps.</p>
              <a className="btn primary" href="#">Book a meeting</a>

              <div className="contact-info">
                <div><strong>Phone:</strong> (917) 572-5163</div>
                <div><strong>Address:</strong> 327 16th St</div>
                <div><strong>Email:</strong> hello@pdmcmanaging.com</div>
              </div>
            </div>

            <aside className="estimate">
              <h4>Estimate</h4>
              <p>Basic engagements typically start at $12k; full program engagements vary by scope.</p>
              <ul>
                <li>Discovery workshop</li>
                <li>Concept & prototype package</li>
                <li>Manufacturing readiness review</li>
              </ul>
              <a className="btn secondary" href="#">Request Estimate</a>
            </aside>
          </section>
        </main>

        <footer className="site-footer">
          <div>
            <h5>Product Design and Manufacturing Consulting</h5>
            <p>Expert guidance from concept to production.</p>
            <p className="small">(917) 572-5163 | 327 16th St</p>
          </div>
          <div className="footer-links">
            <div>
              <h6>Resources</h6>
              <ul>
                <li>Whitepapers</li>
                <li>Guides</li>
                <li>Case studies</li>
              </ul>
            </div>
            <div>
              <h6>Company</h6>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        :root{
          --navy:#0b2340;
          --orange:#ff7a00;
          --yellow:#ffd24a;
          --muted:#6b7280;
        }
        .page{font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#0f172a;}
        .contact-bar{
          position:fixed; left:0; right:0; bottom:0;
          background:var(--navy); color:white; display:flex; gap:16px; align-items:center;
          padding:12px 20px; justify-content:space-between; z-index:60;
        }
        .contact-bar .icon{width:18px; height:18px; margin-right:8px; vertical-align:middle; color:var(--yellow)}
        .contact-cta{background:var(--orange); color:white; padding:8px 12px; border-radius:8px; text-decoration:none;}
        .site-header{background:white; border-bottom:1px solid #e6e6e9; padding:28px 20px; display:flex; justify-content:space-between; align-items:center;}
        .main-heading{font-size:28px; font-weight:800; color:black; margin:0;}
        .header-contact{ text-align:right; font-size:14px; color:var(--muted); }
        .container{max-width:1100px; margin:32px auto; padding:0 18px;}
        .hero{display:grid; grid-template-columns:1fr 380px; gap:28px; align-items:start;}
        .hero-left h2{font-size:32px; margin:0 0 12px; color:var(--navy);}
        .hero-left p{color:#374151;}
        .hero-cta{margin-top:18px; display:flex; gap:12px;}
        .btn{display:inline-block; padding:10px 14px; border-radius:8px; text-decoration:none; font-weight:600;}
        .btn.primary{background:var(--orange); color:white;}
        .btn.outline{border:2px solid var(--navy); color:var(--navy); background:white;}
        .card{background:white; padding:18px; border-radius:12px; box-shadow:0 6px 18px rgba(15,23,42,0.06); border:1px solid #f3e9d6;}
        .brief-form input, .brief-form textarea, .brief-form select{width:100%; padding:10px; border-radius:8px; border:1px solid #e5e7eb; margin-top:8px;}
        .form-actions{display:flex; gap:8px; margin-top:10px;}
        .form-actions .submit{background:var(--navy); color:white; border:none; padding:10px; border-radius:8px;}
        .form-actions .secondary{background:#fff; border:1px solid #e5e7eb; padding:10px; border-radius:8px;}
        .services{margin-top:48px;}
        .service-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:18px;}
        .service{background:white; padding:18px; border-radius:12px; box-shadow:0 6px 18px rgba(15,23,42,0.04); border-left:6px solid var(--orange);}
        .service-icon{font-size:28px;}
        .contact-section{display:grid; grid-template-columns:1fr 320px; gap:20px; margin-top:36px;}
        .contact-main .contact-info{margin-top:16px; display:flex; flex-direction:column; gap:6px; color:#374151;}
        .estimate{background:white; padding:18px; border-radius:12px; box-shadow:0 6px 18px rgba(15,23,42,0.04);}
        .site-footer{display:flex; justify-content:space-between; gap:20px; padding:28px 20px; background:var(--navy); color:white; margin-top:40px;}
        .site-footer h5{color:var(--yellow); margin:0 0 6px 0;}
        .small{opacity:0.9; color:#f3f4f6;}
        @media (max-width:900px){
          .hero{grid-template-columns:1fr; }
          .service-grid{grid-template-columns:1fr;}
          .contact-section{grid-template-columns:1fr;}
          .site-header{flex-direction:column; align-items:flex-start; gap:12px;}
        }
      `}</style>
    </>
  )
}

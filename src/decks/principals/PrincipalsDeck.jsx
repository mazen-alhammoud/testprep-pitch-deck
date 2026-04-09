import Slide from '../../components/Slide'
import DeckShell from '../../components/DeckShell'
import './PrincipalsDeck.css'

export default function PrincipalsDeck() {
  const base = import.meta.env.BASE_URL
  return (
    <DeckShell title="Principals">

      {/* SLIDE 1 — COVER */}
      <Slide className="p-cover">
        <div className="p-bg">
          <div className="dot-grid" />
          <div className="p-glow p-glow-1" />
          <div className="p-glow p-glow-2" />
        </div>
        <div className="p-cover-content">
          <div className="p-cover-left animate-on-scroll">
            <img src={`${base}testpreo-logo.svg`} alt="Test.Prep" className="p-cover-logo" />
            <h1 className="p-cover-h1">
              We don't teach the test.<br />
              <span className="gradient-text-primary">We engineer the score.</span>
            </h1>
          </div>
          <div className="p-cover-right animate-on-scroll animate-delay-2">
            <div className="p-cover-stack">
              <div className="p-cover-img"><img src={`${base}IMG_5004.jpg`} alt="TestPrep session" /></div>
              <div className="p-cover-img"><img src={`${base}IMG_6438.jpg`} alt="TestPrep students" /></div>
            </div>
            <div className="p-cover-img p-cover-img-tall"><img src={`${base}IMG_6122.jpg`} alt="TestPrep classroom" /></div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 2 — WHO WE ARE */}
      <Slide className="p-who">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            For over 12 years, TestPrep has been the <span className="gradient-text-primary">benchmark</span> for standardized test preparation in Lebanon.
          </h2>
          <div className="p-stats animate-on-scroll animate-delay-2">
            {[
              { n: '20,000+', l: 'Students Trained' },
              { n: '92%', l: 'Improved by 50+ Points' },
              { n: '12+', l: 'Years of Operation' },
              { n: '40+', l: 'School Partners' },
            ].map((s) => (
              <div className="p-stat glass-card" key={s.l}>
                <span className="p-stat-n">{s.n}</span>
                <span className="p-stat-l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 3 — EXCLUSIVE RIGHTS */}
      <Slide className="p-exclusive">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            Lebanon's <span className="gradient-text-primary">Only Exclusive Rights Holder</span> of the World's Three Most Trusted Exam Preparation Resources.
          </h2>
          <div className="p-partners animate-on-scroll animate-delay-2">
            <div className="p-partner glass-card p-partner-zoom"><img src={`${base}blob-2.png`} alt="Partner 1" /></div>
            <div className="p-partner glass-card p-partner-zoom"><img src={`${base}AAMCdatabase_FeaturedImage.png`} alt="AAMC" /></div>
            <div className="p-partner glass-card"><img src={`${base}images.png`} alt="Partner 3" /></div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 4 — ONE SYSTEM */}
      <Slide className="p-one-system">
        <div className="p-bg"><div className="dot-grid" /></div>
        <div className="p-section" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="p-h2 animate-on-scroll">
            Every Standardized Test. <span className="gradient-text-primary">One System.</span>
          </h2>
          <div className="p-tags animate-on-scroll animate-delay-1">
            {['SAT & PSAT', 'MCAT', 'GMAT & GRE', 'IELTS & TOEFL', 'EEE', 'Duolingo English Test', 'French Concours & DELF', 'CFA'].map((e) => (
              <span className="p-tag glass-card" key={e}>{e}</span>
            ))}
          </div>
          <p className="p-body animate-on-scroll animate-delay-3">
            The exam changes. The system does not. Every student who enters TestPrep moves through the same diagnostic-first, data-driven, technology-powered methodology — regardless of the test they are preparing for.
          </p>
        </div>
      </Slide>

      {/* SLIDE 5 — THE SYSTEM */}
      <Slide className="p-process">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            The System Behind <span className="gradient-text-primary">Every Score.</span>
          </h2>
          <div className="p-pipeline animate-on-scroll animate-delay-1">
            {['Diagnostic', 'Data Analysis', 'Personalized Plan', 'Execution', 'Proactive Tracking'].map((s, i) => (
              <div className="p-pipe-group" key={s}>
                <div className="p-pipe-step">
                  <div className="p-pipe-dot" />
                  <span className="p-pipe-label">{s}</span>
                </div>
                {i < 4 && <div className="p-pipe-line" />}
              </div>
            ))}
            <div className="p-pipe-step">
              <div className="p-pipe-dot p-pipe-dot-final" />
              <span className="p-pipe-label p-pipe-label-final">Engineered Results</span>
            </div>
          </div>
          <div className="p-cards-2 animate-on-scroll animate-delay-3">
            <div className="p-card glass-card">
              <div className="p-card-bar p-bar-primary" />
              <div className="p-card-body">
                <div className="p-card-num">01</div>
                <h3>Diagnostic-First Approach</h3>
                <p>Every student begins with a full diagnostic exam. No assumptions. No generic curriculum. The data tells us exactly where the gaps are — and the plan gets built from there.</p>
              </div>
            </div>
            <div className="p-card glass-card">
              <div className="p-card-bar p-bar-secondary" />
              <div className="p-card-body">
                <div className="p-card-num">02</div>
                <h3>Continuous Tracking via <span className="gradient-text-secondary">ELMY</span></h3>
                <p>Progress is not reviewed at the end. It is tracked continuously through ELMY — our proprietary education technology platform — from the first session to the last. We identify deviation before it becomes a result, and we correct it before the exam date arrives.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 6 — WHAT YOUR SCHOOL RECEIVES */}
      <Slide className="p-receives">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            What Your School <span className="gradient-text-primary">Receives.</span>
          </h2>
          <div className="p-timeline animate-on-scroll animate-delay-1">
            {[
              { phase: 'Before', title: 'Diagnosis Before Teaching', body: 'Every student sits a full diagnostic exam before instruction begins. Your administration receives an individual diagnostic report per student before the first lesson is taught.', dot: '' },
              { phase: 'During', title: 'Proactive Tracking Throughout', body: 'Progress is monitored in real time through <strong>ELMY</strong>. Your school receives three structured performance reports across the program — flagging who is gaining and who needs intervention — before results are affected.', dot: 'active' },
              { phase: 'After', title: 'Measured Outcomes at Completion', body: 'Every program ends with a full-length practice exam under real conditions. Your administration receives a side-by-side score comparison against the Day 1 diagnostic for every student. The improvement is documented. It is not anecdotal.', dot: 'final' },
            ].map((item, i) => (
              <div className="p-tl-row" key={item.phase}>
                <div className="p-tl-marker">
                  {i < 2 && <div className="p-tl-line" />}
                  <div className={`p-tl-dot ${item.dot === 'active' ? 'p-tl-dot-active' : ''} ${item.dot === 'final' ? 'p-tl-dot-final' : ''}`} />
                  <span className={`p-tl-phase ${item.dot === 'final' ? 'p-tl-phase-final' : ''}`}>{item.phase}</span>
                </div>
                <div className="p-tl-card glass-card">
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 7 — PEOPLE */}
      <Slide className="p-people">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            The People Behind <span className="gradient-text-primary">the Results.</span>
          </h2>
          <p className="p-body animate-on-scroll animate-delay-1">
            Every cohort is assigned a dedicated expert instructor — not a rotating roster. One person owns the student journey from diagnostic to final exam and is accountable for every result in between.
          </p>
          <div className="p-instructors animate-on-scroll animate-delay-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="p-instructor" key={i}>
                <div className="p-instructor-avatar"><span>{`0${i}`}</span></div>
                <div className="p-instructor-name">Instructor Name</div>
                <div className="p-instructor-role">Subject Expert</div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 8 — TRUSTED */}
      <Slide className="p-trusted">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            Trusted By Lebanon's <span className="gradient-text-primary">Leading Schools.</span>
          </h2>
          <p className="p-body animate-on-scroll animate-delay-1">
            For over 12 years, the institutions that set the academic standard in Lebanon have trusted TestPrep to prepare their students. This is not a claim. It is a list.
          </p>
          <div className="p-schools animate-on-scroll animate-delay-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div className="p-school glass-card" key={i}><span>School {i}</span></div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 9 — SCORE JUMPS */}
      <Slide className="p-jumps">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            Real Students. <span className="gradient-text-primary">Real Score Jumps.</span>
          </h2>
          <div className="p-jumps-grid animate-on-scroll animate-delay-1">
            {[
              { name: 'Nader M.', before: 1290, after: 1440, gain: 150 },
              { name: 'Anthony Z.', before: 920, after: 1300, gain: 380 },
              { name: 'Pia H.', before: 730, after: 1240, gain: 510 },
              { name: 'Raphael E.', before: 1010, after: 1250, gain: 240 },
            ].map((s) => {
              const max = 1600, bPct = (s.before / max) * 100, aPct = (s.after / max) * 100, isTop = s.gain >= 500
              return (
                <div className="p-jump glass-card" key={s.name}>
                  <div className="p-jump-header">
                    <span className="p-jump-name">{s.name}</span>
                    <span className={`p-jump-gain ${isTop ? 'gradient-text-secondary' : 'gradient-text-primary'}`}>+{s.gain}</span>
                  </div>
                  <div className="p-thermo">
                    <span className="p-thermo-before">{s.before}</span>
                    <div className="p-thermo-track">
                      <div className="p-thermo-fill p-thermo-bg" style={{ width: `${bPct}%` }} />
                      <div className={`p-thermo-fill p-thermo-fg ${isTop ? 'p-thermo-fg-top' : ''}`} style={{ width: `${aPct}%` }} />
                    </div>
                    <span className={`p-thermo-after ${isTop ? 'p-thermo-after-top' : ''}`}>{s.after}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Slide>

      {/* SLIDE 10 — RESULTS */}
      <Slide className="p-results">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            Results Across <span className="gradient-text-primary">Every Standardized Test.</span>
          </h2>
          <div className="p-results-cols animate-on-scroll animate-delay-1">
            {[
              { exam: 'SAT', alt: false, entries: [{ s: '1570', n: 'Isabelle Illya', sc: 'AIS Riyadh' }, { s: '1570', n: 'Anesse Jaffa', sc: 'American Community School' }, { s: '1570', n: 'Zein Tannir', sc: 'International College' }, { s: '1540', n: 'Karim Nasrallah', sc: 'International College' }] },
              { exam: 'MCAT', alt: false, entries: [{ s: '524', n: 'Emmanuel Basil', sc: 'HEC Paris' }, { s: '521', n: 'Bashar Saab', sc: 'AUB' }, { s: '520', n: 'Rami Tfaily', sc: 'AUB' }, { s: '516', n: 'Ramzi Ghaddar', sc: 'AUB' }] },
              { exam: 'IELTS', alt: true, entries: [{ s: '8.5', n: 'Juliana Dirawi', sc: 'CIS LWIS' }, { s: '8.5', n: 'Mariam Hamze', sc: 'Rawdah High School' }, { s: '8.5', n: 'Hussein Smaili', sc: 'AUB' }, { s: '8.5', n: 'Imane Dumyati', sc: 'College Louise Wegmann' }] },
              { exam: 'GMAT', alt: true, entries: [{ s: '8.5', n: 'Karine Majdalani', sc: 'HEC Paris' }, { s: '8.5', n: 'Hassan Chami', sc: 'AUB' }, { s: '8.5', n: 'Harout Ishkania', sc: 'AUB' }, { s: '8.5', n: 'Ehsan Jari', sc: 'AUB' }] },
            ].map((col) => (
              <div className="p-results-col" key={col.exam}>
                <div className={`p-results-label ${col.alt ? 'p-results-label-alt' : ''}`}>{col.exam}</div>
                {col.entries.map((e) => (
                  <div className="p-result glass-card" key={e.n}>
                    <span className={`p-result-score ${col.alt ? 'p-result-score-alt' : ''}`}>{e.s}</span>
                    <span className="p-result-name">{e.n}</span>
                    <span className="p-result-school">{e.sc}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 11 — PARTNERSHIP */}
      <Slide className="p-partnership">
        <div className="p-section">
          <h2 className="p-h2 animate-on-scroll">
            What a Partnership With TestPrep <span className="gradient-text-primary">Looks Like.</span>
          </h2>
          <div className="p-cards-3 animate-on-scroll animate-delay-1">
            {[
              { num: '01', title: 'We come to your students.', body: 'All instruction is delivered on your campus, on your schedule, with zero disruption to your academic calendar. Your students do not leave school to prepare. The preparation comes to them.', bar: 'primary' },
              { num: '02', title: 'Your administration has full visibility.', body: 'Three structured performance reports across the program. Behavioral flags. Grade tracking. Score trajectory. Everything is documented and delivered to your desk at every phase — not just at the end.', bar: 'primary' },
              { num: '03', title: 'We are accountable for results.', body: 'We do not show up, deliver hours, and leave. Every program ends with a documented score comparison between Day 1 and program completion. The outcome is measurable. So is our accountability.', bar: 'secondary' },
            ].map((c) => (
              <div className="p-card glass-card" key={c.num}>
                <div className={`p-card-bar p-bar-${c.bar}`} />
                <div className="p-card-body">
                  <div className="p-card-num">{c.num}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 12 — INVESTMENT */}
      <Slide className="p-investment">
        <div className="p-bg"><div className="dot-grid" /></div>
        <div className="p-section" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="p-h2 animate-on-scroll">
            The <span className="gradient-text-primary">Investment.</span>
          </h2>
          <div className="p-pricing animate-on-scroll animate-delay-1">
            <div className="p-price-card p-price-std glass-card">
              <span className="p-price-badge">Standard Rate</span>
              <div className="p-price-amt"><span className="p-price-dollar">$</span><span className="p-price-val">450</span></div>
              <span className="p-price-detail">Per student &middot; Full program</span>
            </div>
            <div className="p-price-card p-price-partner">
              <span className="p-price-badge p-price-badge-hl">Partnership Rate</span>
              <div className="p-price-amt"><span className="p-price-dollar">$</span><span className="p-price-val gradient-text-primary">300</span></div>
              <span className="p-price-detail">Per student &middot; Full program</span>
              <span className="p-price-save">Save $150 per student</span>
            </div>
          </div>
          <div className="p-included animate-on-scroll animate-delay-3">
            <span className="p-included-label">All included. Zero add-ons.</span>
            <div className="p-included-grid">
              {['40 hours of on-campus instruction', 'Full ELMY platform access', 'Diagnostic exam + final practice exam', '3 structured performance reports', 'Dedicated lead instructor assigned exclusively to your cohort', 'Personalized score strategy per student'].map((item) => (
                <div className="p-included-item" key={item}>
                  <span className="p-check">&#10003;</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 13 — CLOSING */}
      <Slide className="p-closing">
        <div className="p-bg">
          <div className="dot-grid" />
          <div className="p-glow p-glow-1" />
          <div className="p-glow p-glow-2" />
        </div>
        <div className="p-closing-content animate-on-scroll">
          <img src={`${base}testpreo-logo.svg`} alt="Test.Prep" className="p-closing-logo" />
          <h2 className="p-closing-h2">
            Let's Engineer <span className="gradient-text-primary">Their Scores.</span>
          </h2>
          <p className="p-body">
            The next step is a 30-minute meeting to align on cohort size, scheduling, and any specific academic priorities your school has for this cycle. Everything else is already in place.
          </p>
          <div className="p-contact glass-card">
            <span className="p-contact-label">Get in Touch.</span>
            <div className="p-contact-people">
              <div className="p-contact-person">
                <div className="p-contact-avatar"><span>KF</span></div>
                <span className="p-contact-name">Karim Fattah</span>
              </div>
              <div className="p-contact-person">
                <div className="p-contact-avatar"><span>NA</span></div>
                <span className="p-contact-name">Nizar Al Awar</span>
              </div>
            </div>
            <div className="p-contact-divider" />
            <div className="p-contact-info">
              <span className="p-contact-org">TestPrep — House of Prep Group</span>
              <span className="p-contact-phone">+961 71 891 942</span>
              <span className="p-contact-site">testprepinstitute.com</span>
              <div className="p-contact-socials">
                <span className="p-social-tag">Instagram</span>
                <span className="p-social-tag">LinkedIn</span>
                <span className="p-social-tag">Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

    </DeckShell>
  )
}

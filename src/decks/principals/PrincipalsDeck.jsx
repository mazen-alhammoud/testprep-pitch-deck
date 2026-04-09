import Slide from '../../components/Slide'
import DeckShell from '../../components/DeckShell'
import './PrincipalsDeck.css'

export default function PrincipalsDeck() {
  return (
    <DeckShell title="Principals">
      <Slide className="principals-cover">
        <div className="mesh-bg">
          <div className="mesh-grid" />
          <div className="mesh-glow mesh-glow-primary" />
          <div className="mesh-glow mesh-glow-secondary" />
        </div>
        <div className="cover-content">
          <div className="cover-left">
            <img src="/testpreo-logo.svg" alt="Test.Prep" className="cover-logo" />
            <h1 className="cover-headline">
              We don't teach the test.<br />
              <span className="highlight">We engineer the score.</span>
            </h1>
          </div>
          <div className="cover-right">
            <div className="cover-col-stack">
              <div className="cover-img">
                <img src="/IMG_5004.jpg" alt="TestPrep session" />
              </div>
              <div className="cover-img">
                <img src="/IMG_6438.jpg" alt="TestPrep students" />
              </div>
            </div>
            <div className="cover-img cover-img-tall">
              <img src="/IMG_6122.jpg" alt="TestPrep classroom" />
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-who">
        <div className="who-content">
          <h2 className="who-headline">
            For over 12 years, TestPrep has been the <span className="highlight">benchmark</span> for standardized test preparation in Lebanon.
          </h2>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">20,000+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">92%</span>
              <span className="stat-label">Improved by 50+ Points</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years of Operation</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">40+</span>
              <span className="stat-label">School Partners</span>
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-exclusive">
        <div className="exclusive-content">
          <h2 className="exclusive-headline">
            Lebanon's <span className="highlight">Only Exclusive Rights Holder</span> of the World's Three Most Trusted Exam Preparation Resources.
          </h2>
          <div className="partners-grid">
            <div className="partner-logo partner-logo-zoom">
              <img src="/blob-2.png" alt="Partner 1" />
            </div>
            <div className="partner-logo partner-logo-zoom">
              <img src="/AAMCdatabase_FeaturedImage.png" alt="AAMC" />
            </div>
            <div className="partner-logo">
              <img src="/images.png" alt="Partner 3" />
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-system">
        <div className="system-content">
          <h2 className="system-headline">
            Every Standardized Test. <span className="highlight">One System.</span>
          </h2>
          <div className="exam-tags">
            <span className="exam-tag">SAT & PSAT</span>
            <span className="exam-tag">MCAT</span>
            <span className="exam-tag">GMAT & GRE</span>
            <span className="exam-tag">IELTS & TOEFL</span>
            <span className="exam-tag">EEE</span>
            <span className="exam-tag">Duolingo English Test</span>
            <span className="exam-tag">French Concours & DELF</span>
            <span className="exam-tag">CFA</span>
          </div>
          <p className="system-body">
            The exam changes. The system does not. Every student who enters TestPrep moves through the same diagnostic-first, data-driven, technology-powered methodology — regardless of the test they are preparing for.
          </p>
        </div>
      </Slide>
      <Slide className="principals-process">
        <div className="process-content">
          <h2 className="process-headline">
            The System Behind <span className="highlight">Every Score.</span>
          </h2>

          <div className="process-pipeline">
            <div className="process-step">
              <div className="step-dot" />
              <span className="step-label">Diagnostic</span>
            </div>
            <div className="step-connector" />
            <div className="process-step">
              <div className="step-dot" />
              <span className="step-label">Data Analysis</span>
            </div>
            <div className="step-connector" />
            <div className="process-step">
              <div className="step-dot" />
              <span className="step-label">Personalized Plan</span>
            </div>
            <div className="step-connector" />
            <div className="process-step">
              <div className="step-dot" />
              <span className="step-label">Execution</span>
            </div>
            <div className="step-connector" />
            <div className="process-step">
              <div className="step-dot" />
              <span className="step-label">Proactive Tracking</span>
            </div>
            <div className="step-connector" />
            <div className="process-step">
              <div className="step-dot dot-final" />
              <span className="step-label step-label-final">Engineered Results</span>
            </div>
          </div>

          <div className="process-cards">
            <div className="process-card">
              <div className="process-card-accent accent-primary" />
              <div className="process-card-body">
                <div className="process-card-number">01</div>
                <h3 className="process-card-title">Diagnostic-First Approach</h3>
                <p>Every student begins with a full diagnostic exam. No assumptions. No generic curriculum. The data tells us exactly where the gaps are — and the plan gets built from there.</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-card-accent accent-secondary" />
              <div className="process-card-body">
                <div className="process-card-number">02</div>
                <h3 className="process-card-title">Continuous Tracking via <span className="elmy">ELMY</span></h3>
                <p>Progress is not reviewed at the end. It is tracked continuously through ELMY — our proprietary education technology platform — from the first session to the last. We identify deviation before it becomes a result, and we correct it before the exam date arrives.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-receives">
        <div className="receives-content">
          <h2 className="receives-headline">
            What Your School <span className="highlight">Receives.</span>
          </h2>

          <div className="receives-timeline">
            <div className="receives-card">
              <div className="receives-marker">
                <div className="marker-line" />
                <div className="marker-dot" />
                <span className="marker-phase">Before</span>
              </div>
              <div className="receives-card-inner">
                <h3>Diagnosis Before Teaching</h3>
                <p>Every student sits a full diagnostic exam before instruction begins. Your administration receives an individual diagnostic report per student before the first lesson is taught.</p>
              </div>
            </div>

            <div className="receives-card">
              <div className="receives-marker">
                <div className="marker-line" />
                <div className="marker-dot marker-dot-active" />
                <span className="marker-phase">During</span>
              </div>
              <div className="receives-card-inner">
                <h3>Proactive Tracking Throughout</h3>
                <p>Progress is monitored in real time through <strong>ELMY</strong>. Your school receives three structured performance reports across the program — flagging who is gaining and who needs intervention — before results are affected.</p>
              </div>
            </div>

            <div className="receives-card">
              <div className="receives-marker">
                <div className="marker-line marker-line-last" />
                <div className="marker-dot marker-dot-final" />
                <span className="marker-phase">After</span>
              </div>
              <div className="receives-card-inner">
                <h3>Measured Outcomes at Completion</h3>
                <p>Every program ends with a full-length practice exam under real conditions. Your administration receives a side-by-side score comparison against the Day 1 diagnostic for every student. The improvement is documented. It is not anecdotal.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-people">
        <div className="people-content">
          <h2 className="people-headline">
            The People Behind <span className="highlight">the Results.</span>
          </h2>
          <p className="people-body">
            Every cohort is assigned a dedicated expert instructor — not a rotating roster. One person owns the student journey from diagnostic to final exam and is accountable for every result in between.
          </p>

          <div className="instructors-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="instructor-card" key={i}>
                <div className="instructor-avatar">
                  <span>{`0${i}`}</span>
                </div>
                <div className="instructor-name">Instructor Name</div>
                <div className="instructor-role">Subject Expert</div>
              </div>
            ))}
          </div>
        </div>
      </Slide>
      <Slide className="principals-trusted">
        <div className="trusted-content">
          <h2 className="trusted-headline">
            Trusted By Lebanon's <span className="highlight">Leading Schools.</span>
          </h2>
          <p className="trusted-body">
            For over 12 years, the institutions that set the academic standard in Lebanon have trusted TestPrep to prepare their students. This is not a claim. It is a list.
          </p>
          <div className="schools-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div className="school-logo-placeholder" key={i}>
                <span>School {i}</span>
              </div>
            ))}
          </div>
        </div>
      </Slide>
      <Slide className="principals-jumps">
        <div className="jumps-content">
          <h2 className="jumps-headline">
            Real Students. <span className="highlight">Real Score Jumps.</span>
          </h2>
          <div className="jumps-grid">
            {[
              { name: 'Nader M.', before: 1290, after: 1440, gain: 150 },
              { name: 'Anthony Z.', before: 920, after: 1300, gain: 380 },
              { name: 'Pia H.', before: 730, after: 1240, gain: 510 },
              { name: 'Raphael E.', before: 1010, after: 1250, gain: 240 },
            ].map((s) => {
              const max = 1600
              const beforePct = (s.before / max) * 100
              const afterPct = (s.after / max) * 100
              const isTop = s.gain >= 500
              return (
                <div className="jump-card" key={s.name}>
                  <div className="jump-header">
                    <div className="jump-name">{s.name}</div>
                    <div className={`jump-gain ${isTop ? 'jump-gain-top' : ''}`}>+{s.gain}</div>
                  </div>
                  <div className="thermo-wrapper">
                    <span className="thermo-label-before">{s.before}</span>
                    <div className="thermo-track">
                      <div
                        className="thermo-fill thermo-fill-before"
                        style={{ width: `${beforePct}%` }}
                      />
                      <div
                        className={`thermo-fill thermo-fill-after ${isTop ? 'thermo-fill-top' : ''}`}
                        style={{ width: `${afterPct}%` }}
                      />
                    </div>
                    <span className={`thermo-label-after ${isTop ? 'thermo-label-top' : ''}`}>{s.after}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Slide>

      <Slide className="principals-results">
        <div className="results-content">
          <h2 className="results-headline">
            Results Across <span className="highlight">Every Standardized Test.</span>
          </h2>
          <div className="results-columns">
            <div className="results-column">
              <div className="results-exam-label">SAT</div>
              <div className="result-entry">
                <span className="result-score">1570</span>
                <span className="result-name">Isabelle Illya</span>
                <span className="result-school">AIS Riyadh</span>
              </div>
              <div className="result-entry">
                <span className="result-score">1570</span>
                <span className="result-name">Anesse Jaffa</span>
                <span className="result-school">American Community School</span>
              </div>
              <div className="result-entry">
                <span className="result-score">1570</span>
                <span className="result-name">Zein Tannir</span>
                <span className="result-school">International College</span>
              </div>
              <div className="result-entry">
                <span className="result-score">1540</span>
                <span className="result-name">Karim Nasrallah</span>
                <span className="result-school">International College</span>
              </div>
            </div>

            <div className="results-column">
              <div className="results-exam-label">MCAT</div>
              <div className="result-entry">
                <span className="result-score">524</span>
                <span className="result-name">Emmanuel Basil</span>
                <span className="result-school">HEC Paris</span>
              </div>
              <div className="result-entry">
                <span className="result-score">521</span>
                <span className="result-name">Bashar Saab</span>
                <span className="result-school">AUB</span>
              </div>
              <div className="result-entry">
                <span className="result-score">520</span>
                <span className="result-name">Rami Tfaily</span>
                <span className="result-school">AUB</span>
              </div>
              <div className="result-entry">
                <span className="result-score">516</span>
                <span className="result-name">Ramzi Ghaddar</span>
                <span className="result-school">AUB</span>
              </div>
            </div>

            <div className="results-column">
              <div className="results-exam-label results-exam-label-alt">IELTS</div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Juliana Dirawi</span>
                <span className="result-school">CIS LWIS</span>
              </div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Mariam Hamze</span>
                <span className="result-school">Rawdah High School</span>
              </div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Hussein Smaili</span>
                <span className="result-school">AUB</span>
              </div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Imane Dumyati</span>
                <span className="result-school">College Louise Wegmann</span>
              </div>
            </div>

            <div className="results-column">
              <div className="results-exam-label results-exam-label-alt">GMAT</div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Karine Majdalani</span>
                <span className="result-school">HEC Paris</span>
              </div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Hassan Chami</span>
                <span className="result-school">AUB</span>
              </div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Harout Ishkania</span>
                <span className="result-school">AUB</span>
              </div>
              <div className="result-entry">
                <span className="result-score result-score-alt">8.5</span>
                <span className="result-name">Ehsan Jari</span>
                <span className="result-school">AUB</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-partnership">
        <div className="partnership-content">
          <h2 className="partnership-headline">
            What a Partnership With TestPrep <span className="highlight">Looks Like.</span>
          </h2>

          <div className="partnership-cards">
            <div className="partnership-card">
              <div className="partnership-card-accent accent-primary" />
              <div className="partnership-card-body">
                <div className="partnership-card-number">01</div>
                <h3>We come to your students.</h3>
                <p>All instruction is delivered on your campus, on your schedule, with zero disruption to your academic calendar. Your students do not leave school to prepare. The preparation comes to them.</p>
              </div>
            </div>

            <div className="partnership-card">
              <div className="partnership-card-accent accent-primary" />
              <div className="partnership-card-body">
                <div className="partnership-card-number">02</div>
                <h3>Your administration has full visibility.</h3>
                <p>Three structured performance reports across the program. Behavioral flags. Grade tracking. Score trajectory. Everything is documented and delivered to your desk at every phase — not just at the end.</p>
              </div>
            </div>

            <div className="partnership-card">
              <div className="partnership-card-accent accent-secondary" />
              <div className="partnership-card-body">
                <div className="partnership-card-number">03</div>
                <h3>We are accountable for results.</h3>
                <p>We do not show up, deliver hours, and leave. Every program ends with a documented score comparison between Day 1 and program completion. The outcome is measurable. So is our accountability.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-investment">
        <div className="investment-content">
          <h2 className="investment-headline">
            The <span className="highlight">Investment.</span>
          </h2>

          <div className="pricing-grid">
            <div className="pricing-card pricing-standard">
              <span className="pricing-badge">Standard Rate</span>
              <div className="pricing-amount">
                <span className="pricing-dollar">$</span>
                <span className="pricing-value">450</span>
              </div>
              <span className="pricing-detail">Per student &middot; Full program</span>
            </div>

            <div className="pricing-card pricing-partner">
              <span className="pricing-badge pricing-badge-highlight">Partnership Rate</span>
              <div className="pricing-amount">
                <span className="pricing-dollar">$</span>
                <span className="pricing-value">300</span>
              </div>
              <span className="pricing-detail">Per student &middot; Full program</span>
              <span className="pricing-save">Save $150 per student</span>
            </div>
          </div>

          <div className="included-section">
            <span className="included-label">All included. Zero add-ons.</span>
            <div className="included-grid">
              <div className="included-item">
                <span className="included-check">&#10003;</span>
                40 hours of on-campus instruction
              </div>
              <div className="included-item">
                <span className="included-check">&#10003;</span>
                Full ELMY platform access
              </div>
              <div className="included-item">
                <span className="included-check">&#10003;</span>
                Diagnostic exam + final practice exam
              </div>
              <div className="included-item">
                <span className="included-check">&#10003;</span>
                3 structured performance reports
              </div>
              <div className="included-item">
                <span className="included-check">&#10003;</span>
                Dedicated lead instructor assigned exclusively to your cohort
              </div>
              <div className="included-item">
                <span className="included-check">&#10003;</span>
                Personalized score strategy per student
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="principals-closing">
        <div className="mesh-bg">
          <div className="mesh-grid" />
          <div className="mesh-glow mesh-glow-primary" />
          <div className="mesh-glow mesh-glow-secondary" />
        </div>
        <div className="closing-content">
          <img src="/testpreo-logo.svg" alt="Test.Prep" className="closing-logo" />
          <h2 className="closing-headline">
            Let's Engineer <span className="highlight">Their Scores.</span>
          </h2>
          <p className="closing-body">
            The next step is a 30-minute meeting to align on cohort size, scheduling, and any specific academic priorities your school has for this cycle. Everything else is already in place.
          </p>

          <div className="closing-contact">
            <span className="closing-contact-label">Get in Touch.</span>
            <div className="closing-people">
              <div className="closing-person">
                <div className="closing-avatar">
                  <span>KF</span>
                </div>
                <span className="closing-person-name">Karim Fattah</span>
              </div>
              <div className="closing-person">
                <div className="closing-avatar">
                  <span>NA</span>
                </div>
                <span className="closing-person-name">Nizar Al Awar</span>
              </div>
            </div>
            <div className="closing-divider" />
            <div className="closing-contact-details">
              <span className="contact-org">TestPrep — House of Prep Group</span>
              <span className="contact-phone">+961 71 891 942</span>
              <span className="contact-site">testprepinstitute.com</span>
              <div className="contact-socials">
                <span className="contact-social-tag">Instagram</span>
                <span className="contact-social-tag">LinkedIn</span>
                <span className="contact-social-tag">Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </DeckShell>
  )
}

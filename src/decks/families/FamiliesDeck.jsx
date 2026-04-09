import Slide from '../../components/Slide'
import DeckShell from '../../components/DeckShell'
import './FamiliesDeck.css'

export default function FamiliesDeck() {
  return (
    <DeckShell title="Families">

      {/* SLIDE 1 — COVER */}
      <Slide className="fam-cover">
        <div className="fam-bg">
          <div className="dot-grid" />
          <div className="fam-glow fam-glow-1" />
          <div className="fam-glow fam-glow-2" />
        </div>
        <div className="fam-cover-content">
          <div className="fam-cover-left">
            <img src={`${import.meta.env.BASE_URL}testpreo-logo.svg`} alt="Test.Prep" className="fam-cover-logo" />
            <h1 className="fam-cover-headline">
              We don't teach the test.<br />
              <span className="gradient-text-primary">We engineer the score.</span>
            </h1>
          </div>
          <div className="fam-cover-right">
            <div className="fam-cover-col-stack">
              <div className="fam-cover-img">
                <img src={`${import.meta.env.BASE_URL}IMG_5004.jpg`} alt="TestPrep session" />
              </div>
              <div className="fam-cover-img">
                <img src={`${import.meta.env.BASE_URL}IMG_6438.jpg`} alt="TestPrep students" />
              </div>
            </div>
            <div className="fam-cover-img fam-cover-img-tall">
              <img src={`${import.meta.env.BASE_URL}IMG_6122.jpg`} alt="TestPrep classroom" />
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 2 — WHO WE ARE */}
      <Slide className="fam-who">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            For over 12 years, TestPrep has set the standard for standardized test preparation <span className="gradient-text-primary">in Lebanon.</span>
          </h2>
          <div className="fam-stats-grid">
            <div className="fam-stat-card glass-card">
              <span className="fam-stat-number">20,000+</span>
              <span className="fam-stat-label">Students Trained</span>
            </div>
            <div className="fam-stat-card glass-card">
              <span className="fam-stat-number">92%</span>
              <span className="fam-stat-label">Improved by 50+ Points</span>
            </div>
            <div className="fam-stat-card glass-card">
              <span className="fam-stat-number">12+</span>
              <span className="fam-stat-label">Years of Operation</span>
            </div>
            <div className="fam-stat-card glass-card">
              <span className="fam-stat-number">100+</span>
              <span className="fam-stat-label">Expert Instructors</span>
            </div>
          </div>
          <p className="fam-body-text">
            Through a proven methodology engineered to deliver measurable results — consistently, across every exam, for every committed student.
          </p>
        </div>
      </Slide>

      {/* SLIDE 3 — EXAMS WE COVER */}
      <Slide className="fam-exams">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            Every Standardized Test. <span className="gradient-text-primary">One System.</span>
          </h2>
          <div className="fam-exam-tags">
            {['SAT & PSAT', 'MCAT', 'GMAT & GRE', 'IELTS & TOEFL', 'EEE', 'Duolingo English Test', 'French Concours & DELF', 'CFA'].map((exam) => (
              <span className="fam-exam-tag" key={exam}>{exam}</span>
            ))}
          </div>
          <p className="fam-body-text">
            Whatever the exam. Whatever the goal. The same system that has engineered results for over 20,000 students is built to work for you.
          </p>
        </div>
      </Slide>

      {/* SLIDE 4 — LET'S TALK ABOUT THE SAT */}
      <Slide className="fam-sat-intro">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            Here Is What You Are <span className="gradient-text-primary">Actually Preparing For.</span>
          </h2>
          <p className="fam-body-text">
            The SAT is one of the most important academic decisions a student makes. Understanding exactly what it is — before preparation begins — is the difference between preparing smart and preparing blind.
          </p>
          <div className="fam-sat-specs">
            <div className="fam-spec-card">
              <span className="fam-spec-value">Math & R&W</span>
              <span className="fam-spec-label">Sections</span>
            </div>
            <div className="fam-spec-card">
              <span className="fam-spec-value">98</span>
              <span className="fam-spec-label">Total Questions</span>
            </div>
            <div className="fam-spec-card">
              <span className="fam-spec-value">2h 14m</span>
              <span className="fam-spec-label">Total Time</span>
            </div>
            <div className="fam-spec-card">
              <span className="fam-spec-value">400–1600</span>
              <span className="fam-spec-label">Score Range</span>
            </div>
            <div className="fam-spec-card fam-spec-highlight">
              <span className="fam-spec-value">Digital & Adaptive</span>
              <span className="fam-spec-label">Format</span>
            </div>
          </div>
          <p className="fam-body-text fam-body-emphasis">
            That last point matters. The SAT is not a fixed exam. It adjusts in real time based on your answers. Knowing this — and preparing for it specifically — changes everything.
          </p>
        </div>
      </Slide>

      {/* SLIDE 5 — WHAT THE SAT ACTUALLY MEASURES */}
      <Slide className="fam-measures">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            The SAT Is Not <span className="gradient-text-primary">a Knowledge Test.</span>
          </h2>
          <p className="fam-body-text">
            Most students prepare for the SAT the same way they prepare for a school exam — by studying content. That is not wrong. But it is not enough. The SAT measures three things that classroom preparation alone does not build:
          </p>
          <div className="fam-three-cards">
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-primary" />
              <div className="fam-card-body">
                <div className="fam-card-num">01</div>
                <h3>Reasoning Under Pressure</h3>
                <p>The ability to apply what you know quickly, accurately, and consistently — under timed conditions.</p>
              </div>
            </div>
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-primary" />
              <div className="fam-card-body">
                <div className="fam-card-num">02</div>
                <h3>Time Management</h3>
                <p>Every section has a specific time window. Students who have not trained for this will feel it — regardless of how well they know the material.</p>
              </div>
            </div>
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-secondary" />
              <div className="fam-card-body">
                <div className="fam-card-num">03</div>
                <h3>Exam-Specific Technique</h3>
                <p>There is a correct approach to every question type on the SAT. It is learned, practiced, and eventually automatic. It is not something students discover on their own.</p>
              </div>
            </div>
          </div>
          <p className="fam-body-text fam-body-emphasis">
            Understanding this is the first step. Building it is what we do.
          </p>
        </div>
      </Slide>

      {/* SLIDE 6 — WHERE POINTS ARE WAITING */}
      <Slide className="fam-points">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            This Is Where Your <span className="gradient-text-primary">Score Grows.</span>
          </h2>
          <p className="fam-body-text">
            Every student — regardless of where they start — has a score that is higher than their current baseline. The gap between where you are and where you could be is not a reflection of ability. It is a reflection of preparation.
          </p>
          <div className="fam-three-cards">
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-primary" />
              <div className="fam-card-body">
                <div className="fam-card-num">01</div>
                <h3>Time</h3>
                <p>The average time per question on the SAT is 70 to 90 seconds. Students who have not trained for this pace consistently run out of time — not because they do not know the answer, but because they have not built the speed yet.</p>
              </div>
            </div>
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-primary" />
              <div className="fam-card-body">
                <div className="fam-card-num">02</div>
                <h3>Strategy</h3>
                <p>There is a way to approach each question type that is faster, more reliable, and more accurate than the natural instinct. Students who know it gain points. Students who do not, leave them on the table.</p>
              </div>
            </div>
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-secondary" />
              <div className="fam-card-body">
                <div className="fam-card-num">03</div>
                <h3>Hidden Gaps</h3>
                <p>Every student has specific areas of weakness that do not show up in their school performance. The diagnostic identifies them precisely — before preparation begins — so they can be addressed directly rather than discovered on exam day.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 7 — THE SYSTEM */}
      <Slide className="fam-system">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            This Is <span className="gradient-text-primary">How We Do It.</span>
          </h2>
          <div className="fam-system-steps">
            {[
              { num: '01', title: 'Diagnostic', text: 'Your preparation starts with a full-length simulated SAT. Before a single lesson begins, we know exactly where you stand — section by section, skill by skill.' },
              { num: '02', title: 'Data Analysis', text: 'Your diagnostic produces data. We analyze it before building anything. Your gaps, your time profile, your performance ceiling — all mapped before your plan is written.' },
              { num: '03', title: 'Personalized Plan', text: 'Your plan is built from your data, not from a template. What you study, in what order, at what pace — all determined by your diagnostic results.' },
              { num: '04', title: 'Execution', text: 'Instruction begins. Every session targets the specific gaps your data revealed. Every hour has a purpose.' },
              { num: '05', title: 'Proactive Tracking', text: 'Your progress is monitored continuously through ELMY — our proprietary education technology platform. We see your trajectory in real time. If something needs correcting, we correct it before it reaches your result.' },
              { num: '06', title: 'Engineered Results', text: 'By the time you sit the real exam, the outcome has already been shaped. The gaps are closed. The strategies are internalized. The format is no longer unfamiliar.' },
            ].map((step) => (
              <div className="fam-step" key={step.num}>
                <div className={`fam-step-marker ${step.num === '06' ? 'fam-step-marker-final' : ''}`}>
                  <span>{step.num}</span>
                </div>
                <div className="fam-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 8 — POWERED BY ELMY */}
      <Slide className="fam-elmy">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            Your Preparation. <span className="gradient-text-secondary">Tracked in Real Time.</span>
          </h2>
          <p className="fam-body-text">
            Every student inside TestPrep is powered by <strong>ELMY</strong> — our proprietary education technology platform.
          </p>
          <div className="fam-elmy-features">
            <div className="fam-elmy-item">
              <span className="fam-elmy-check">&#10003;</span>
              <p>ELMY builds your practice around your specific gaps — not generic content.</p>
            </div>
            <div className="fam-elmy-item">
              <span className="fam-elmy-check">&#10003;</span>
              <p>ELMY tracks your performance after every session — not just at the end of the program.</p>
            </div>
            <div className="fam-elmy-item">
              <span className="fam-elmy-check">&#10003;</span>
              <p>Your instructor sees your data before you walk in the door — every session is prepared around where you actually are, not where you were last week.</p>
            </div>
          </div>
          <div className="fam-elmy-screenshot">
            <span>ELMY Platform Screenshot</span>
          </div>
        </div>
      </Slide>

      {/* SLIDE 9 — WE HANDLE EVERYTHING */}
      <Slide className="fam-handle">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            Your Only Job Is to <span className="gradient-text-primary">Show Up and Perform.</span>
          </h2>
          <div className="fam-three-cards">
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-primary" />
              <div className="fam-card-body">
                <div className="fam-card-num">01</div>
                <h3>Your personalized study plan</h3>
                <p>Built from your diagnostic data before your first session. You walk in knowing exactly what you are working on and why.</p>
              </div>
            </div>
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-primary" />
              <div className="fam-card-body">
                <div className="fam-card-num">02</div>
                <h3>Your SAT registration on College Board</h3>
                <p>We handle it for you. One less thing to think about — for you and for your family — so you can focus entirely on your preparation.</p>
              </div>
            </div>
            <div className="fam-card glass-card">
              <div className="fam-card-accent accent-secondary" />
              <div className="fam-card-body">
                <div className="fam-card-num">03</div>
                <h3>Your progress tracking</h3>
                <p>Monitored continuously from your first session to your last. You always know where you stand. So does your instructor. So do your parents.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 10 — OUR INSTRUCTORS */}
      <Slide className="fam-instructors">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            100+ Instructors. <span className="gradient-text-primary">One Mission.</span>
          </h2>
          <p className="fam-body-text">
            Every instructor at TestPrep is selected for one reason: they know how to close the gap between where a student is and where they need to be. Not just academically — strategically, technically, and personally.
          </p>
          <p className="fam-body-text fam-body-emphasis">
            These are not teachers who show up and deliver a lesson. They are the people who will know your name, track your numbers, and push you further than you thought you could go.
          </p>
          <div className="fam-instructor-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="fam-instructor-card" key={i}>
                <div className="fam-instructor-avatar">
                  <span>{`0${i}`}</span>
                </div>
                <div className="fam-instructor-name">Instructor Name</div>
                <div className="fam-instructor-role">Subject Expert</div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 11 — TRUSTED BY */}
      <Slide className="fam-trusted">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            Students and Boards From These Schools <span className="gradient-text-primary">Trust TestPrep.</span>
          </h2>
          <div className="fam-schools-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div className="fam-school-placeholder" key={i}>
                <span>School {i}</span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 12 — REAL RESULTS */}
      <Slide className="fam-results">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            Real Students. <span className="gradient-text-primary">Real Score Jumps.</span>
          </h2>
          <div className="fam-jumps-grid">
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
                <div className="fam-jump-card glass-card" key={s.name}>
                  <div className="fam-jump-header">
                    <div className="fam-jump-name">{s.name}</div>
                    <div className={`fam-jump-gain ${isTop ? 'fam-jump-gain-top' : ''}`}>+{s.gain}</div>
                  </div>
                  <div className="fam-thermo-wrapper">
                    <span className="fam-thermo-label-before">{s.before}</span>
                    <div className="fam-thermo-track">
                      <div className="fam-thermo-fill fam-thermo-fill-before" style={{ width: `${beforePct}%` }} />
                      <div className={`fam-thermo-fill fam-thermo-fill-after ${isTop ? 'fam-thermo-fill-top' : ''}`} style={{ width: `${afterPct}%` }} />
                    </div>
                    <span className={`fam-thermo-label-after ${isTop ? 'fam-thermo-label-top' : ''}`}>{s.after}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <h3 className="fam-subheadline">What students say.</h3>
          <div className="fam-testimonials">
            {[
              { quote: 'I learned so much during this course. The teaching made a real difference in my confidence, especially in English.', name: 'Lila Bejjani' },
              { quote: 'The sessions were engaging and well-structured. It helped me improve my SAT performance.', name: 'Laura Massaad' },
              { quote: 'Very strong course. I appreciated being given time to solve problems independently — it really helped my understanding.', name: 'Christian Saad' },
              { quote: 'I really enjoyed the class.', name: 'Marc Bechara' },
            ].map((t) => (
              <div className="fam-testimonial" key={t.name}>
                <p>"{t.quote}"</p>
                <span>— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 13 — LIFE AT TESTPREP */}
      <Slide className="fam-life">
        <div className="fam-section-content">
          <h2 className="fam-headline animate-on-scroll">
            You Don't Just Come to Study. <span className="gradient-text-primary">You Come to Belong.</span>
          </h2>
          <p className="fam-body-text">
            TestPrep is not a classroom you walk into and out of. It is a community of students who are serious about their results — and an environment that makes being serious exciting.
          </p>
          <p className="fam-body-text fam-body-emphasis">
            The sessions are demanding. The energy is high. The people around you are pushing just as hard as you are. And somewhere between the diagnostic and the final exam, something shifts.
          </p>
          <p className="fam-callout">You stop dreading the SAT. You start owning it.</p>
          <div className="fam-life-gallery">
            {[1, 2, 3, 4].map((i) => (
              <div className="fam-life-img" key={i}>
                <span>Photo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 14 — TPI LEGENDS / CLOSING */}
      <Slide className="fam-legends">
        <div className="fam-bg">
          <div className="dot-grid" />
          <div className="fam-glow fam-glow-1" />
          <div className="fam-glow fam-glow-2" />
        </div>
        <div className="fam-legends-content">
          <h2 className="fam-legends-headline">
            Are You Ready to Become a <span className="gradient-text-secondary">TestPrep Legend?</span>
          </h2>
          <div className="fam-legends-wall">
            <span>Legends Wall Photo</span>
          </div>
          <div className="fam-legends-text">
            <p>Every student who walks through our doors gets their picture on our wall. Thousands have come through. Thousands are on that wall.</p>
            <p className="fam-body-emphasis">Only <strong>10</strong> have ever made it to the TPI Legends Wall.</p>
            <p>Not because they scored the highest. Because they committed fully — to the process, to the community, and to the version of themselves they were building toward. The score was the result. The legend was earned long before exam day.</p>
            <p className="fam-legends-cta-line">Ten names. Ten stories. One wall.<br /><strong>Your name could be next.</strong></p>
          </div>
          <div className="fam-legends-closing">
            <span className="fam-legends-action">It starts with one test.</span>
            <span className="fam-legends-action-sub">Book your diagnostic today.</span>
            <div className="fam-legends-contact">
              <span className="fam-legends-phone">+961 71 891 942</span>
              <span>testprepinstitute.com</span>
              <div className="fam-legends-socials">
                <span className="fam-social-tag">Instagram</span>
                <span className="fam-social-tag">LinkedIn</span>
                <span className="fam-social-tag">Facebook</span>
              </div>
            </div>
            <img src={`${import.meta.env.BASE_URL}testpreo-logo.svg`} alt="Test.Prep" className="fam-legends-logo" />
          </div>
        </div>
      </Slide>

    </DeckShell>
  )
}

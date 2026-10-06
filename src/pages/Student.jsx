import { Link } from "react-router-dom";
import "./Student.css";

function Student() {
  const roadmap = Array.from({ length: 24 }, (_, index) => ({
    session: index + 1,
    completed: index < 6,
    current: index === 6,
  }));

  const progress = [
    { skill: "Speaking", baseline: 2, current: 3 },
    { skill: "Listening", baseline: 3, current: 4 },
    { skill: "Grammar", baseline: 3, current: 3 },
    { skill: "Vocabulary", baseline: 2, current: 3 },
    { skill: "Pronunciation", baseline: 3, current: 4 },
  ];

  return (
    <div className="student-page">
      {/* SIDEBAR */}
      <aside className="student-sidebar">
        <Link to="/" className="student-brand">
          <div className="student-brand-mark">SU</div>

          <div className="student-brand-text">
            <strong>SPEAKUP</strong>
            <span>STUDENT PORTAL</span>
          </div>
        </Link>

        <nav className="student-menu">
          <button className="student-menu-item active">
            <span>▦</span>
            Dashboard
          </button>

          <button className="student-menu-item">
            <span>◷</span>
            My Classes
          </button>

          <button className="student-menu-item">
            <span>✎</span>
            Homework
            <b>1</b>
          </button>

          <button className="student-menu-item">
            <span>↗</span>
            My Progress
          </button>

          <button className="student-menu-item">
            <span>▣</span>
            Resources
          </button>

          <button className="student-menu-item">
            <span>★</span>
            Certificate
          </button>
        </nav>

        <div className="student-sidebar-bottom">
          <div className="student-profile">
            <div className="student-avatar">S</div>

            <div>
              <strong>Sofía Martínez</strong>
              <span>Speak With Confidence</span>
            </div>
          </div>

          <Link to="/" className="student-logout">
            ← Log out
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="student-main">
        <header className="student-header">
          <div>
            <span className="student-eyebrow">SPEAKUP ENGLISH</span>
            <h1>Welcome back, Sofía 👋</h1>
            <p>Keep going. Every conversation gets you closer to fluency.</p>
          </div>

          <div className="student-header-badge">
            <span>YOUR PROGRAM</span>
            <strong>Speak With Confidence</strong>
          </div>
        </header>

        {/* TOP STATS */}
        <section className="student-stats">
          <article className="student-stat-card">
            <span>PROGRAM PROGRESS</span>
            <strong>6 / 24</strong>
            <p>sessions completed</p>

            <div className="student-progress-track">
              <div
                className="student-progress-fill"
                style={{ width: "25%" }}
              ></div>
            </div>

            <small>25% complete</small>
          </article>

          <article className="student-stat-card">
            <span>CURRENT WEEK</span>
            <strong>Week 3</strong>
            <p>of your 12-week program</p>

            <div className="student-status-positive">
              ✓ You&apos;re on track
            </div>
          </article>

          <article className="student-stat-card">
            <span>HOMEWORK</span>
            <strong>1</strong>
            <p>assignment due</p>

            <div className="student-status-warning">
              Due before next class
            </div>
          </article>

          <article className="student-stat-card">
            <span>NEXT PROGRESS CHECK</span>
            <strong>Week 4</strong>
            <p>speaking · listening · grammar</p>

            <div className="student-status-neutral">
              Coming up soon
            </div>
          </article>
        </section>

        {/* DASHBOARD GRID */}
        <section className="student-dashboard-grid">
          {/* NEXT CLASS */}
          <article className="student-panel next-class-panel">
            <div className="student-panel-header">
              <div>
                <span className="student-panel-label">UP NEXT</span>
                <h2>Your Next Class</h2>
              </div>

              <button>View schedule →</button>
            </div>

            <div className="next-class-content">
              <div className="next-class-date">
                <span>TUE</span>
                <strong>08</strong>
                <small>OCT</small>
              </div>

              <div className="next-class-info">
                <span className="session-label">SESSION 7 OF 24</span>

                <h3>Expressing Opinions</h3>

                <p>Tuesday · 10:00 AM · 60 minutes</p>

                <div className="next-class-tags">
                  <span>Speaking</span>
                  <span>Conversation</span>
                  <span>Real-Life English</span>
                </div>
              </div>

              <button className="join-class-button">
                Join Class →
              </button>
            </div>
          </article>

          {/* HOMEWORK */}
          <article className="student-panel homework-panel">
            <div className="student-panel-header">
              <div>
                <span className="student-panel-label">HOMEWORK</span>
                <h2>Current Assignment</h2>
              </div>
            </div>

            <div className="homework-content">
              <div className="homework-icon">✎</div>

              <span className="homework-due">DUE BEFORE NEXT CLASS</span>

              <h3>Tell me about your weekend</h3>

              <p>
                Record a 2-minute voice message using past tense and the
                expressions practiced in class.
              </p>

              <button className="homework-button">
                Open Assignment →
              </button>
            </div>
          </article>

          {/* PROGRESS */}
          <article className="student-panel progress-panel-student">
            <div className="student-panel-header">
              <div>
                <span className="student-panel-label">MY PROGRESS</span>
                <h2>Your English Is Growing</h2>
              </div>

              <button>Full progress →</button>
            </div>

            <div className="skills-list">
              {progress.map((item) => (
                <div className="skill-row" key={item.skill}>
                  <div className="skill-name">
                    <strong>{item.skill}</strong>
                    <span>
                      Baseline {item.baseline}/5 → Current {item.current}/5
                    </span>
                  </div>

                  <div className="skill-score">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <span
                        key={score}
                        className={
                          score <= item.current ? "score-active" : ""
                        }
                      ></span>
                    ))}
                  </div>

                  <strong className="current-score">
                    {item.current}/5
                  </strong>
                </div>
              ))}
            </div>
          </article>

          {/* FEEDBACK */}
          <article className="student-panel feedback-panel">
            <div className="student-panel-header">
              <div>
                <span className="student-panel-label">TEACHER FEEDBACK</span>
                <h2>From Your Last Class</h2>
              </div>
            </div>

            <div className="feedback-message">
              <div className="feedback-avatar">M</div>

              <div>
                <strong>Manuela</strong>

                <p>
                  Great improvement with your confidence today. You&apos;re
                  answering faster without translating every sentence first.
                  Keep practicing your past-tense pronunciation.
                </p>
              </div>
            </div>

            <div className="feedback-focus">
              <span>NEXT FOCUS</span>
              <strong>Past tense + natural storytelling</strong>
            </div>
          </article>
        </section>

        {/* NOTES */}
        <section className="student-notes-grid">
          <article className="student-panel notes-card">
            <div className="student-panel-header">
              <div>
                <span className="student-panel-label">VOCABULARY</span>
                <h2>Words to Practice</h2>
              </div>
            </div>

            <div className="word-list">
              <span>actually</span>
              <span>eventually</span>
              <span>instead</span>
              <span>pretty good</span>
              <span>by the way</span>
            </div>
          </article>

          <article className="student-panel notes-card">
            <div className="student-panel-header">
              <div>
                <span className="student-panel-label">PRONUNCIATION</span>
                <h2>Your Current Focus</h2>
              </div>
            </div>

            <div className="pronunciation-note">
              <strong>Past tense endings</strong>

              <p>
                Practice the difference between -ed sounds in worked, played
                and wanted.
              </p>
            </div>
          </article>

          <article className="student-panel notes-card">
            <div className="student-panel-header">
              <div>
                <span className="student-panel-label">CURRENT GOAL</span>
                <h2>What We&apos;re Working Toward</h2>
              </div>
            </div>

            <div className="goal-note">
              <span>🎯</span>

              <p>
                Speak for 5 minutes about a personal experience without
                switching to Spanish.
              </p>
            </div>
          </article>
        </section>

        {/* ROADMAP */}
        <section className="student-panel roadmap-panel">
          <div className="student-panel-header">
            <div>
              <span className="student-panel-label">YOUR PROGRAM</span>
              <h2>24-Session Roadmap</h2>
            </div>

            <span className="roadmap-progress-text">
              6 of 24 completed
            </span>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <div
                key={item.session}
                className={`roadmap-session ${
                  item.completed ? "completed" : ""
                } ${item.current ? "current" : ""}`}
              >
                <span>{item.completed ? "✓" : item.session}</span>

                <small>
                  {item.current
                    ? "NEXT"
                    : item.completed
                      ? "DONE"
                      : `SESSION ${item.session}`}
                </small>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM MESSAGE */}
        <section className="student-motivation">
          <div>
            <span>REAL CONVERSATIONS. REAL PROGRESS.</span>
            <h2>Keep speaking. You&apos;re getting there.</h2>
          </div>

          <Link to="/" className="student-site-link">
            Visit SpeakUp website →
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Student;
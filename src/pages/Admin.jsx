import { Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const upcomingClasses = [
    {
      time: "9:00 AM",
      student: "Sofía Martínez",
      program: "Speak With Confidence",
      session: "Session 7 of 24",
    },
    {
      time: "11:00 AM",
      student: "Daniel Gómez",
      program: "English Foundations",
      session: "Session 3 of 24",
    },
    {
      time: "2:00 PM",
      student: "Valentina Ruiz",
      program: "Real-Life Fluency",
      session: "Session 12 of 24",
    },
  ];

  const assessmentRequests = [
    {
      name: "Laura Pérez",
      level: "Not sure",
      goal: "Speaking confidence",
      date: "Today",
    },
    {
      name: "Andrés López",
      level: "Intermediate",
      goal: "Work",
      date: "Yesterday",
    },
  ];

  return (
    <div className="admin-page">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <Link to="/" className="admin-brand">
          <div className="admin-brand-mark">SU</div>

          <div className="admin-brand-text">
            <strong>SPEAKUP</strong>
            <span>ADMIN</span>
          </div>
        </Link>

        <nav className="admin-menu">
          <button className="admin-menu-item active">
            <span>▦</span>
            Dashboard
          </button>

          <button className="admin-menu-item">
            <span>👥</span>
            Students
          </button>

          <button className="admin-menu-item">
            <span>◷</span>
            Schedule
          </button>

          <button className="admin-menu-item">
            <span>✓</span>
            Assessments
            <b>2</b>
          </button>

          <button className="admin-menu-item">
            <span>▣</span>
            Curriculum
          </button>

          <button className="admin-menu-item">
            <span>✎</span>
            Homework
            <b>3</b>
          </button>

          <button className="admin-menu-item">
            <span>$</span>
            Payments
          </button>

          <button className="admin-menu-item">
            <span>↗</span>
            Progress
          </button>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-profile">
            <div className="admin-avatar">M</div>

            <div>
              <strong>Manuela</strong>
              <span>Administrator</span>
            </div>
          </div>

          <Link to="/" className="admin-view-site">
            ← View website
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        {/* HEADER */}
        <header className="admin-header">
          <div>
            <span className="admin-eyebrow">SPEAKUP ENGLISH</span>
            <h1>Good morning, Manuela 👋</h1>
            <p>Here&apos;s what&apos;s happening with SpeakUp today.</p>
          </div>

          <button className="admin-primary-button">
            + Add Student
          </button>
        </header>

        {/* STATS */}
        <section className="admin-stats">
          <article className="stat-card">
            <div className="stat-card-top">
              <span>ACTIVE STUDENTS</span>
              <div className="stat-icon">👥</div>
            </div>

            <strong>7</strong>
            <p>of 7 private coaching spots</p>

            <div className="capacity-bar">
              <div className="capacity-fill"></div>
            </div>

            <small>Capacity full</small>
          </article>

          <article className="stat-card">
            <div className="stat-card-top">
              <span>CLASSES THIS WEEK</span>
              <div className="stat-icon">◷</div>
            </div>

            <strong>14</strong>
            <p>2 sessions per student</p>

            <div className="stat-status positive">
              ✓ Schedule on track
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-card-top">
              <span>4-WEEK REVENUE</span>
              <div className="stat-icon">$</div>
            </div>

            <strong className="revenue-number">5,040,000</strong>
            <p>COP current cycle</p>

            <div className="stat-status">
              7 active coaching blocks
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-card-top">
              <span>ACTION NEEDED</span>
              <div className="stat-icon">!</div>
            </div>

            <strong>6</strong>
            <p>items need your attention</p>

            <div className="action-summary">
              <span>2 payments</span>
              <span>3 homework</span>
              <span>1 progress check</span>
            </div>
          </article>
        </section>

        {/* MAIN GRID */}
        <section className="admin-dashboard-grid">
          {/* TODAY'S CLASSES */}
          <article className="admin-panel classes-panel">
            <div className="panel-header">
              <div>
                <span className="panel-label">TODAY</span>
                <h2>Upcoming Classes</h2>
              </div>

              <button>View schedule →</button>
            </div>

            <div className="class-list">
              {upcomingClasses.map((classItem) => (
                <div className="class-row" key={classItem.student}>
                  <div className="class-time">
                    <strong>{classItem.time}</strong>
                    <span>60 min</span>
                  </div>

                  <div className="class-divider"></div>

                  <div className="class-information">
                    <strong>{classItem.student}</strong>
                    <span>{classItem.program}</span>
                  </div>

                  <span className="session-badge">
                    {classItem.session}
                  </span>

                  <button className="open-class-button">
                    Open
                  </button>
                </div>
              ))}
            </div>
          </article>

          {/* QUICK ACTIONS */}
          <article className="admin-panel quick-panel">
            <div className="panel-header">
              <div>
                <span className="panel-label">SHORTCUTS</span>
                <h2>Quick Actions</h2>
              </div>
            </div>

            <div className="quick-actions">
              <button>
                <span>＋</span>
                <div>
                  <strong>Add Student</strong>
                  <small>Create a new student profile</small>
                </div>
              </button>

              <button>
                <span>✓</span>
                <div>
                  <strong>New Assessment</strong>
                  <small>Record assessment results</small>
                </div>
              </button>

              <button>
                <span>✎</span>
                <div>
                  <strong>Assign Homework</strong>
                  <small>Send work to a student</small>
                </div>
              </button>

              <button>
                <span>▣</span>
                <div>
                  <strong>Curriculum</strong>
                  <small>Open lesson materials</small>
                </div>
              </button>
            </div>
          </article>

          {/* ASSESSMENT REQUESTS */}
          <article className="admin-panel assessment-panel">
            <div className="panel-header">
              <div>
                <span className="panel-label">NEW LEADS</span>
                <h2>Assessment Requests</h2>
              </div>

              <button>View all →</button>
            </div>

            <div className="request-list">
              {assessmentRequests.map((request) => (
                <div className="request-row" key={request.name}>
                  <div className="request-avatar">
                    {request.name.charAt(0)}
                  </div>

                  <div className="request-info">
                    <strong>{request.name}</strong>
                    <span>
                      {request.level} · {request.goal}
                    </span>
                  </div>

                  <span className="request-date">
                    {request.date}
                  </span>

                  <button className="review-button">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </article>

          {/* BUSINESS OVERVIEW */}
          <article className="admin-panel overview-panel">
            <div className="panel-header">
              <div>
                <span className="panel-label">THIS CYCLE</span>
                <h2>Business Overview</h2>
              </div>
            </div>

            <div className="overview-list">
              <div>
                <span>Available spots</span>
                <strong>0 / 7</strong>
              </div>

              <div>
                <span>Payments coming up</span>
                <strong>2</strong>
              </div>

              <div>
                <span>Homework to review</span>
                <strong>3</strong>
              </div>

              <div>
                <span>Progress checks due</span>
                <strong>1</strong>
              </div>

              <div>
                <span>Waitlist</span>
                <strong>4</strong>
              </div>
            </div>

            <button className="waitlist-button">
              Manage Waitlist
            </button>
          </article>
        </section>

        {/* BOTTOM */}
        <section className="admin-bottom-grid">
          <article className="admin-panel progress-panel">
            <div className="panel-header">
              <div>
                <span className="panel-label">STUDENT PROGRESS</span>
                <h2>Progress Checks</h2>
              </div>

              <button>View students →</button>
            </div>

            <div className="progress-alert">
              <div className="progress-alert-icon">↗</div>

              <div>
                <strong>1 progress check is due this week</strong>

                <p>
                  Review speaking, listening, grammar, vocabulary and
                  pronunciation scores.
                </p>
              </div>

              <button>Review</button>
            </div>
          </article>

          <article className="admin-panel revenue-panel">
            <span className="panel-label">CURRENT 4-WEEK CYCLE</span>

            <div className="revenue-content">
              <div>
                <span>Total Revenue</span>
                <strong>COP 5,040,000</strong>
              </div>

              <div>
                <span>Active Students</span>
                <strong>7</strong>
              </div>

              <div>
                <span>Revenue / Student</span>
                <strong>COP 720,000</strong>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Admin;
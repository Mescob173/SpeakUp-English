import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="brand">
            <div className="brand-mark">SU</div>

            <div className="brand-text">
              <span className="brand-name">SPEAKUP ENGLISH</span>
              <span className="brand-tagline">ENGLISH FOR REAL LIFE</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#method">How It Works</a>
            <a href="#about">About</a>
          </nav>

          <div className="nav-actions">
            <button className="login-btn">Student Login</button>
            <button className="assessment-btn">
              Free Assessment
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-container">

            <div className="hero-content">
              <div className="hero-label">
                100% Virtual • Private 1:1 English Coaching
              </div>

              <h1>
                Stop studying English.
                <span> Start speaking it.</span>
              </h1>

              <p className="hero-description">
                Clases privadas de inglés diseñadas para ayudarte a hablar
                con confianza en situaciones reales — trabajo, viajes,
                conversaciones y vida cotidiana.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn">
                  Take Your Free Assessment
                  <span>→</span>
                </button>

                <a href="#programs" className="secondary-btn">
                  Explore Programs
                </a>
              </div>

              <div className="hero-features">
                <div className="feature">
                  <span className="check">✓</span>
                  <span>Private 1:1</span>
                </div>

                <div className="feature">
                  <span className="check">✓</span>
                  <span>100% Virtual</span>
                </div>

                <div className="feature">
                  <span className="check">✓</span>
                  <span>Personalized</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">

                <div className="conversation-header">
                  <div>
                    <p className="small-label">TODAY'S GOAL</p>
                    <h3>Speak with confidence.</h3>
                  </div>

                  <div className="speech-icon">💬</div>
                </div>

                <div className="conversation">
                  <div className="message teacher">
                    <span className="message-label">SPEAKUP</span>
                    Hey! How's it going?
                  </div>

                  <div className="message student">
                    Pretty good! How about you?
                  </div>

                  <div className="message teacher">
                    <span className="message-label">SPEAKUP</span>
                    Great! Tell me about your weekend.
                  </div>

                  <div className="message student">
                    I went out with some friends and we tried a new restaurant.
                  </div>
                </div>

                <div className="progress-box">
                  <div className="progress-top">
                    <span>Speaking Confidence</span>
                    <strong>Growing ↑</strong>
                  </div>

                  <div className="progress-track">
                    <div className="progress-fill"></div>
                  </div>
                </div>

              </div>

              <div className="floating-card">
                <div className="floating-icon">✓</div>
                <div>
                  <strong>Real conversations</strong>
                  <span>Real progress.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PROGRAM PREVIEW */}
        <section className="program-preview" id="programs">
          <div className="section-container">

            <div className="section-heading">
              <span className="section-label">FIND YOUR LEVEL</span>
              <h2>There's a program for where you are now.</h2>
              <p>
                From your first English conversation to advanced real-life
                fluency, your program is built around your level and goals.
              </p>
            </div>

            <div className="program-grid">

              <article className="program-card">
                <span className="level">A1–A2</span>
                <h3>English Foundations</h3>
                <p>
                  Build the foundation you need to communicate in everyday
                  situations with confidence.
                </p>
                <span className="program-link">Explore program →</span>
              </article>

              <article className="program-card featured">
                <span className="popular">MOST POPULAR</span>
                <span className="level">B1–B2</span>
                <h3>Speak With Confidence</h3>
                <p>
                  Stop translating every sentence and start having natural,
                  confident conversations.
                </p>
                <span className="program-link">Explore program →</span>
              </article>

              <article className="program-card">
                <span className="level">B2–C1</span>
                <h3>Real-Life Fluency</h3>
                <p>
                  Develop natural, professional English for advanced
                  conversations and real-world communication.
                </p>
                <span className="program-link">Explore program →</span>
              </article>

            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;

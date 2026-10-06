import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  const programs = [
    {
      level: "PRE-A1 · A1 · A2",
      title: "English Foundations",
      description:
        "Construye una base sólida para comunicarte en situaciones cotidianas, incluso si estás comenzando desde cero.",
      focus: ["Conversaciones básicas", "Gramática esencial", "Inglés cotidiano"],
    },
    {
      level: "B1 · B2",
      title: "Speak With Confidence",
      description:
        "Deja de traducir cada frase en tu cabeza y empieza a mantener conversaciones con más seguridad y naturalidad.",
      focus: ["Fluidez al hablar", "Expresiones naturales", "Confianza"],
      featured: true,
    },
    {
      level: "B2 · C1",
      title: "Real-Life Fluency",
      description:
        "Lleva tu inglés a un nivel más natural y profesional para comunicarte con seguridad en situaciones reales.",
      focus: ["Inglés profesional", "Fluidez avanzada", "Comunicación natural"],
    },
  ];

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
            <a href="#home">Inicio</a>
            <a href="#programs">Programas</a>
            <a href="#method">Cómo funciona</a>
            <a href="#about">Sobre SpeakUp</a>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="login-btn">
  Login
</Link>

            <a href="/assessment" className="assessment-btn">
              Evaluación gratis
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-label">
                100% Virtual · Private 1:1 English Coaching
              </div>

              <h1>
                Stop studying English.
                <span> Start speaking it.</span>
              </h1>

              <p className="hero-description">
                Clases privadas de inglés diseñadas para ayudarte a comunicarte
                con confianza en situaciones reales: trabajo, viajes,
                conversaciones y vida cotidiana.
              </p>

              <div className="hero-buttons">
                <a href="/assessment" className="primary-btn">
                  Agenda tu evaluación gratis
                  <span>→</span>
                </a>

                <a href="#programs" className="secondary-btn">
                  Ver programas
                </a>
              </div>

              <div className="hero-features">
                <div className="feature">
                  <span className="check">✓</span>
                  <span>Clases privadas 1:1</span>
                </div>

                <div className="feature">
                  <span className="check">✓</span>
                  <span>100% virtual</span>
                </div>

                <div className="feature">
                  <span className="check">✓</span>
                  <span>Plan personalizado</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="conversation-header">
                  <div>
                    <p className="small-label">TODAY&apos;S GOAL</p>
                    <h3>Speak with confidence.</h3>
                  </div>

                  <div className="speech-icon">💬</div>
                </div>

                <div className="conversation">
                  <div className="message teacher">
                    <span className="message-label">SPEAKUP</span>
                    Hey! How&apos;s it going?
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
                  <strong>Real conversations.</strong>
                  <span>Real progress.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="program-preview" id="programs">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-label">ENCUENTRA TU NIVEL</span>

              <h2>Un programa diseñado para el punto en el que estás hoy.</h2>

              <p>
                Desde tu primera conversación hasta una comunicación avanzada,
                tu proceso comienza con tu nivel actual y tus objetivos.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article
                  className={`program-card ${
                    program.featured ? "featured" : ""
                  }`}
                  key={program.title}
                >
                  {program.featured && (
                    <span className="popular">MÁS POPULAR</span>
                  )}

                  <span className="level">{program.level}</span>

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <div className="program-focus">
                    {program.focus.map((item) => (
                      <span key={item}>
                        <b>✓</b> {item}
                      </span>
                    ))}
                  </div>

                  <a href="/assessment" className="program-link">
                    Descubre tu nivel →
                  </a>
                </article>
              ))}
            </div>

            <div className="program-note">
              <strong>Todos los programas incluyen:</strong>
              <span>12 semanas</span>
              <span>24 sesiones privadas</span>
              <span>2 clases por semana</span>
              <span>60 minutos por sesión</span>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="method-section" id="method">
          <div className="section-container">
            <div className="method-layout">
              <div className="method-intro">
                <span className="section-label">HOW IT WORKS</span>

                <h2>Tu camino para empezar a hablar inglés.</h2>

                <p>
                  No tienes que adivinar cuál programa elegir. Primero
                  identificamos tu nivel, tus objetivos y lo que necesitas
                  mejorar.
                </p>

                <a href="/assessment" className="text-link">
                  Empieza con tu evaluación gratis →
                </a>
              </div>

              <div className="steps">
                <div className="step-card">
                  <span className="step-number">01</span>

                  <div>
                    <h3>Haz tu evaluación</h3>

                    <p>
                      Una conversación virtual de 15–20 minutos para conocer tu
                      nivel actual de inglés.
                    </p>
                  </div>
                </div>

                <div className="step-card">
                  <span className="step-number">02</span>

                  <div>
                    <h3>Recibe tu recomendación</h3>

                    <p>
                      Identificamos tus fortalezas, áreas de mejora y el
                      programa que mejor se adapta a ti.
                    </p>
                  </div>
                </div>

                <div className="step-card">
                  <span className="step-number">03</span>

                  <div>
                    <h3>Elige tu horario</h3>

                    <p>
                      Selecciona dos horarios semanales para tus sesiones
                      privadas de 60 minutos.
                    </p>
                  </div>
                </div>

                <div className="step-card">
                  <span className="step-number">04</span>

                  <div>
                    <h3>Empieza a hablar</h3>

                    <p>
                      Comienza tus clases, practica inglés real y sigue tu
                      progreso durante el programa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METHOD / DIFFERENCE */}
        <section className="difference-section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-label">THE SPEAKUP METHOD</span>

              <h2>Aprender inglés es diferente a usarlo.</h2>

              <p>
                SpeakUp está diseñado para ayudarte a convertir lo que sabes en
                comunicación real.
              </p>
            </div>

            <div className="difference-grid">
              <div className="difference-card">
                <div className="difference-icon">🗣️</div>

                <h3>Habla desde el primer día</h3>

                <p>
                  La conversación es parte central de cada sesión. No vas a
                  pasar una hora solamente escuchando teoría.
                </p>
              </div>

              <div className="difference-card">
                <div className="difference-icon">🎯</div>

                <h3>Un plan para ti</h3>

                <p>
                  Las clases se adaptan a tu nivel, objetivos, dificultades y
                  progreso.
                </p>
              </div>

              <div className="difference-card">
                <div className="difference-icon">🌎</div>

                <h3>Inglés para la vida real</h3>

                <p>
                  Practica situaciones que realmente puedes enfrentar en el
                  trabajo, viajes y conversaciones cotidianas.
                </p>
              </div>

              <div className="difference-card">
                <div className="difference-icon">📈</div>

                <h3>Ve tu progreso</h3>

                <p>
                  Seguimos tu avance en speaking, listening, grammar,
                  vocabulary y pronunciation durante el programa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing-section" id="pricing">
          <div className="section-container pricing-layout">
            <div className="pricing-copy">
              <span className="section-label">PRIVATE COACHING</span>

              <h2>Tu inglés merece atención personalizada.</h2>

              <p>
                Trabajamos 1:1 para que cada sesión tenga un propósito claro y
                esté conectada con tus objetivos.
              </p>

              <div className="pricing-benefits">
                <span>✓ Plan personalizado</span>
                <span>✓ Seguimiento de progreso</span>
                <span>✓ Práctica y homework</span>
                <span>✓ Feedback individual</span>
                <span>✓ Horario fijo semanal</span>
              </div>
            </div>

            <div className="price-card">
              <span className="price-eyebrow">PRIVATE 1:1</span>

              <div className="price">
                <span className="currency">COP</span>
                <strong>720.000</strong>
              </div>

              <p className="price-period">por cada ciclo de 4 semanas</p>

              <div className="price-divider"></div>

              <div className="price-details">
                <div>
                  <strong>8</strong>
                  <span>sesiones privadas</span>
                </div>

                <div>
                  <strong>60</strong>
                  <span>minutos cada una</span>
                </div>

                <div>
                  <strong>2×</strong>
                  <span>por semana</span>
                </div>
              </div>

              <p className="price-note">
                Los programas completos tienen una duración de 12 semanas y se
                pagan en bloques de 4 semanas.
              </p>

              <a href="/assessment" className="price-button">
                Comienza con tu evaluación gratis
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="section-container about-layout">
            <div className="about-visual">
              <div className="photo-placeholder">
                <span>YOUR PHOTO</span>
                <small>We'll add your photo here later</small>
              </div>

              <div className="about-badge">
                <strong>SpeakUp English</strong>
                <span>English for real life.</span>
              </div>
            </div>

            <div className="about-copy">
              <span className="section-label">MEET YOUR ENGLISH COACH</span>

              <h2>Hi, I&apos;m Manuela.</h2>

              <p>
                Creé SpeakUp English con una idea muy simple: aprender inglés
                debería ayudarte a comunicarte en la vida real, no solamente a
                memorizar reglas.
              </p>

              <p>
                Por eso, las sesiones están enfocadas en conversaciones,
                situaciones reales y práctica personalizada según tu nivel y
                tus objetivos.
              </p>

              <p>
                Mi objetivo es crear un espacio donde puedas practicar, cometer
                errores, recibir feedback y desarrollar la confianza para usar
                el inglés que estás aprendiendo.
              </p>

              <div className="about-quote">
                <span>“</span>

                <p>
                  You don&apos;t need perfect English to start speaking. You
                  need to start speaking to improve your English.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ASSESSMENT CTA */}
        <section className="assessment-section" id="assessment">
          <div className="assessment-container">
            <div>
              <span className="assessment-label">START HERE</span>

              <h2>¿No sabes cuál es tu nivel?</h2>

              <p>
                Empieza con una evaluación virtual gratuita de 15–20 minutos.
                Conoceremos tu nivel, tus objetivos y qué programa puede
                ayudarte más.
              </p>
            </div>

            <div className="assessment-action">
              <a href="/assessment" className="assessment-main-btn">
                Solicita tu evaluación gratis
                <span>→</span>
              </a>

              <small>Sin compromiso · 100% virtual</small>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand footer-logo">
              <div className="brand-mark">SU</div>

              <div className="brand-text">
                <span className="brand-name">SPEAKUP ENGLISH</span>
                <span className="brand-tagline">ENGLISH FOR REAL LIFE</span>
              </div>
            </div>

            <p>
              Clases privadas de inglés para ayudarte a comunicarte con
              confianza en la vida real.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>SpeakUp</strong>
              <a href="#programs">Programas</a>
              <a href="#method">Cómo funciona</a>
              <a href="#about">Sobre SpeakUp</a>
            </div>

            <div>
              <strong>Empieza</strong>
              <a href="/assessment">Evaluación gratis</a>
              <a href="#pricing">Private Coaching</a>
              <Link to="/login" className="login-btn">
  Login
</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SpeakUp English</span>
          <span>Real Conversations. Real Progress.</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
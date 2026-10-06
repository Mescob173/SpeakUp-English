import { useState } from "react";
import { Link } from "react-router-dom";
import "./Assessment.css";

function Assessment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // For now, this shows the confirmation screen.
    // Next, we'll connect it to the database.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="assessment-page">
        <header className="assessment-nav">
          <div className="assessment-nav-inner">
            <Link to="/" className="assessment-brand">
              <div className="assessment-brand-mark">SU</div>

              <div className="assessment-brand-text">
                <strong>SPEAKUP ENGLISH</strong>
                <span>ENGLISH FOR REAL LIFE</span>
              </div>
            </Link>
          </div>
        </header>

        <main className="success-wrapper">
          <div className="success-card">
            <div className="success-icon">✓</div>

            <span className="assessment-kicker">REQUEST RECEIVED</span>

            <h1>¡Gracias por solicitar tu evaluación!</h1>

            <p>
              Recibimos tu información. El próximo paso será coordinar tu
              evaluación virtual de inglés de 15–20 minutos.
            </p>

            <div className="success-note">
              <strong>¿Qué sigue?</strong>

              <div className="success-step">
                <span>01</span>
                <p>Revisamos tu solicitud.</p>
              </div>

              <div className="success-step">
                <span>02</span>
                <p>Coordinamos contigo el horario de tu evaluación.</p>
              </div>

              <div className="success-step">
                <span>03</span>
                <p>
                  Después de la evaluación recibirás tu nivel y recomendación
                  de programa.
                </p>
              </div>
            </div>

            <Link to="/" className="back-home-button">
              Volver al inicio
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="assessment-page">
      {/* NAVBAR */}
      <header className="assessment-nav">
        <div className="assessment-nav-inner">
          <Link to="/" className="assessment-brand">
            <div className="assessment-brand-mark">SU</div>

            <div className="assessment-brand-text">
              <strong>SPEAKUP ENGLISH</strong>
              <span>ENGLISH FOR REAL LIFE</span>
            </div>
          </Link>

          <Link to="/" className="assessment-back">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="assessment-content">
        {/* INTRO */}
        <section className="assessment-intro">
          <span className="assessment-kicker">FREE LEVEL ASSESSMENT</span>

          <h1>
            Descubre tu nivel.
            <span> Empieza desde donde realmente estás.</span>
          </h1>

          <p>
            Completa esta información para solicitar tu evaluación gratuita.
            Después coordinaremos una videollamada de 15–20 minutos para conocer
            tu inglés, tus objetivos y recomendarte el programa adecuado.
          </p>

          <div className="assessment-info-row">
            <div>
              <strong>15–20 min</strong>
              <span>Evaluación virtual</span>
            </div>

            <div>
              <strong>100% gratis</strong>
              <span>Sin compromiso</span>
            </div>

            <div>
              <strong>Personalizada</strong>
              <span>Según tus objetivos</span>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="assessment-form-section">
          <form className="assessment-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>LET&apos;S GET STARTED</span>

              <h2>Cuéntame un poco sobre ti.</h2>

              <p>
                No necesitas saber tu nivel exacto. Para eso es la evaluación.
              </p>
            </div>

            {/* SECTION 1 */}
            <div className="form-section">
              <div className="form-section-title">
                <span>01</span>

                <div>
                  <h3>Tu información</h3>
                  <p>Para contactarte y coordinar la evaluación.</p>
                </div>
              </div>

              <div className="form-grid">
                <label className="form-field">
                  <span>Nombre completo *</span>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Tu nombre"
                    required
                  />
                </label>

                <label className="form-field">
                  <span>WhatsApp *</span>

                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="+57 300 000 0000"
                    required
                  />

                  <small>Incluye el código de tu país.</small>
                </label>

                <label className="form-field">
                  <span>Email *</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                  />
                </label>

                <label className="form-field">
                  <span>Ciudad / País *</span>

                  <input
                    type="text"
                    name="location"
                    placeholder="Ej. Medellín, Colombia"
                    required
                  />
                </label>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="form-section">
              <div className="form-section-title">
                <span>02</span>

                <div>
                  <h3>Tu inglés</h3>
                  <p>No pasa nada si no estás seguro/a de tu nivel.</p>
                </div>
              </div>

              <div className="form-grid">
                <label className="form-field">
                  <span>¿Cómo describirías tu nivel actual? *</span>

                  <select name="currentLevel" required defaultValue="">
                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    <option value="beginner">Principiante</option>
                    <option value="intermediate">Intermedio</option>
                    <option value="advanced">Avanzado</option>
                    <option value="unsure">No estoy seguro/a</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>¿Has estudiado inglés antes? *</span>

                  <select name="studiedBefore" required defaultValue="">
                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    <option value="yes">Sí</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>

              <fieldset className="choice-group">
                <legend>¿Cuál es tu objetivo principal? *</legend>

                <div className="choice-grid">
                  <label className="choice-card">
                    <input
                      type="radio"
                      name="mainGoal"
                      value="confidence"
                      required
                    />

                    <span>🗣️</span>
                    <strong>Hablar con confianza</strong>
                  </label>

                  <label className="choice-card">
                    <input type="radio" name="mainGoal" value="work" />

                    <span>💼</span>
                    <strong>Trabajo</strong>
                  </label>

                  <label className="choice-card">
                    <input type="radio" name="mainGoal" value="travel" />

                    <span>✈️</span>
                    <strong>Viajes</strong>
                  </label>

                  <label className="choice-card">
                    <input type="radio" name="mainGoal" value="abroad" />

                    <span>🌎</span>
                    <strong>Vivir o estudiar afuera</strong>
                  </label>

                  <label className="choice-card">
                    <input
                      type="radio"
                      name="mainGoal"
                      value="pronunciation"
                    />

                    <span>🎧</span>
                    <strong>Pronunciación</strong>
                  </label>

                  <label className="choice-card">
                    <input
                      type="radio"
                      name="mainGoal"
                      value="comprehension"
                    />

                    <span>💬</span>
                    <strong>Comprender mejor</strong>
                  </label>

                  <label className="choice-card">
                    <input type="radio" name="mainGoal" value="other" />

                    <span>✨</span>
                    <strong>Otro objetivo</strong>
                  </label>
                </div>
              </fieldset>

              <fieldset className="choice-group">
                <legend>¿Qué se te dificulta más? *</legend>

                <div className="difficulty-grid">
                  <label className="pill-choice">
                    <input
                      type="radio"
                      name="biggestDifficulty"
                      value="speaking"
                      required
                    />
                    <span>Speaking</span>
                  </label>

                  <label className="pill-choice">
                    <input
                      type="radio"
                      name="biggestDifficulty"
                      value="listening"
                    />
                    <span>Listening</span>
                  </label>

                  <label className="pill-choice">
                    <input
                      type="radio"
                      name="biggestDifficulty"
                      value="grammar"
                    />
                    <span>Grammar</span>
                  </label>

                  <label className="pill-choice">
                    <input
                      type="radio"
                      name="biggestDifficulty"
                      value="pronunciation"
                    />
                    <span>Pronunciation</span>
                  </label>

                  <label className="pill-choice">
                    <input
                      type="radio"
                      name="biggestDifficulty"
                      value="vocabulary"
                    />
                    <span>Vocabulary</span>
                  </label>

                  <label className="pill-choice">
                    <input
                      type="radio"
                      name="biggestDifficulty"
                      value="writing"
                    />
                    <span>Writing</span>
                  </label>

                  <label className="pill-choice">
                    <input
                      type="radio"
                      name="biggestDifficulty"
                      value="unsure"
                    />
                    <span>No estoy seguro/a</span>
                  </label>
                </div>
              </fieldset>
            </div>

            {/* SECTION 3 */}
            <div className="form-section">
              <div className="form-section-title">
                <span>03</span>

                <div>
                  <h3>Tu disponibilidad</h3>

                  <p>
                    Esto nos ayuda a saber qué horarios podrían funcionar para
                    ti.
                  </p>
                </div>
              </div>

              <fieldset className="choice-group">
                <legend>¿Qué días tienes disponibilidad?</legend>

                <div className="day-grid">
                  <label className="day-choice">
                    <input
                      type="checkbox"
                      name="availability"
                      value="monday"
                    />
                    <span>Lun</span>
                  </label>

                  <label className="day-choice">
                    <input
                      type="checkbox"
                      name="availability"
                      value="tuesday"
                    />
                    <span>Mar</span>
                  </label>

                  <label className="day-choice">
                    <input
                      type="checkbox"
                      name="availability"
                      value="wednesday"
                    />
                    <span>Mié</span>
                  </label>

                  <label className="day-choice">
                    <input
                      type="checkbox"
                      name="availability"
                      value="thursday"
                    />
                    <span>Jue</span>
                  </label>

                  <label className="day-choice">
                    <input
                      type="checkbox"
                      name="availability"
                      value="friday"
                    />
                    <span>Vie</span>
                  </label>
                </div>
              </fieldset>

              <label className="form-field">
                <span>¿Qué horario prefieres? *</span>

                <select name="preferredTime" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="morning">Mañana</option>
                  <option value="afternoon">Tarde</option>
                  <option value="evening">Noche</option>
                  <option value="flexible">Soy flexible</option>
                </select>
              </label>
            </div>

            {/* SECTION 4 */}
            <div className="form-section">
              <div className="form-section-title">
                <span>04</span>

                <div>
                  <h3>Una última cosa</h3>
                  <p>Ya casi terminamos.</p>
                </div>
              </div>

              <label className="form-field">
                <span>¿Cómo conociste SpeakUp English? *</span>

                <select name="source" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="friend">Recomendación</option>
                  <option value="google">Google</option>
                  <option value="other">Otro</option>
                </select>
              </label>

              <label className="form-field">
                <span>¿Hay algo más que quieras contarme?</span>

                <textarea
                  name="notes"
                  rows="5"
                  placeholder="Cuéntame sobre tus objetivos, experiencias con el inglés o cualquier otra cosa que consideres importante."
                />
              </label>
            </div>

            {/* SUBMIT */}
            <div className="form-submit-area">
              <button type="submit" className="assessment-submit">
                Solicitar mi evaluación gratis
                <span>→</span>
              </button>

              <p>
                Al enviar tu solicitud no estás realizando ningún pago ni
                adquiriendo ningún compromiso.
              </p>
            </div>
          </form>
        </section>
      </main>

      <footer className="assessment-footer">
        <strong>SpeakUp English</strong>
        <span>English for real life.</span>
      </footer>
    </div>
  );
}

export default Assessment;
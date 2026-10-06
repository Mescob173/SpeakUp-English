import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Temporary login while we build the frontend.
    // Real authentication will be connected later.
    if (accountType === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }
  };

  return (
    <div className="login-page">
      {/* NAVBAR */}
      <header className="login-nav">
        <div className="login-nav-container">
          <Link to="/" className="login-brand">
            <div className="login-brand-mark">SU</div>

            <div className="login-brand-text">
              <strong>SPEAKUP ENGLISH</strong>
              <span>ENGLISH FOR REAL LIFE</span>
            </div>
          </Link>

          <Link to="/" className="login-home-link">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="login-main">
        <div className="login-layout">
          {/* LEFT SIDE */}
          <section className="login-intro">
            <span className="login-eyebrow">SPEAKUP PORTAL</span>

            <h1>
              Welcome
              <span> back.</span>
            </h1>

            <p>
              Accede a tu espacio de SpeakUp English para continuar con tu
              proceso.
            </p>

            <div className="login-benefits">
              <div>
                <span>✓</span>

                <div>
                  <strong>Students</strong>
                  <p>
                    Revisa tus clases, homework, feedback, recursos y progreso.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>

                <div>
                  <strong>Admin</strong>
                  <p>
                    Gestiona estudiantes, evaluaciones, clases, pagos y
                    curriculum.
                  </p>
                </div>
              </div>
            </div>

            <div className="login-quote">
              <span>“</span>

              <p>Real Conversations. Real Progress.</p>
            </div>
          </section>

          {/* LOGIN CARD */}
          <section className="login-card">
            <div className="login-card-heading">
              <span>WELCOME BACK</span>
              <h2>Log in to SpeakUp</h2>
              <p>Selecciona cómo quieres ingresar.</p>
            </div>

            {/* ACCOUNT TYPE */}
            <div className="account-selector">
              <button
                type="button"
                className={accountType === "student" ? "selected" : ""}
                onClick={() => setAccountType("student")}
              >
                <div className="account-icon">🎓</div>

                <div>
                  <strong>Student</strong>
                  <span>Mi progreso y clases</span>
                </div>
              </button>

              <button
                type="button"
                className={accountType === "admin" ? "selected" : ""}
                onClick={() => setAccountType("admin")}
              >
                <div className="account-icon">⚙</div>

                <div>
                  <strong>Admin</strong>
                  <span>Manage SpeakUp</span>
                </div>
              </button>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <label>
                <span>Email</span>

                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>

              <label>
                <div className="password-label">
                  <span>Password</span>

                  <button type="button">
                    Forgot password?
                  </button>
                </div>

                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              <button type="submit" className="login-submit">
                Log in as {accountType === "admin" ? "Admin" : "Student"}
                <span>→</span>
              </button>
            </form>

            <div className="login-help">
              {accountType === "student" ? (
                <>
                  <p>¿Todavía no eres estudiante?</p>

                  <Link to="/assessment">
                    Solicita tu evaluación gratis →
                  </Link>
                </>
              ) : (
                <>
                  <p>Admin access is restricted.</p>
                  <span>SpeakUp English Administration</span>
                </>
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="login-footer">
        <span>© 2026 SpeakUp English</span>
        <span>English for real life.</span>
      </footer>
    </div>
  );
}

export default Login;
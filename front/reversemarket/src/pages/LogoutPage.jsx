
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ProjectsPage.css";

function LogoutPage() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(true);

  function confirmLogout() {
    // Demo only: no real authentication session exists yet.
    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="app dashboard-layout projects-layout">
      <div className="dashboard-main">
        <main className="main-content">
          <section className="projects-list-section">
            <h1>Log out of ReverseMarket?</h1>
            <p className="projects-subtitle">
              You are using a demo account. No real account session
              is connected yet.
            </p>

            {showConfirm && (
              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <button
                  className="primary-button"
                  onClick={confirmLogout}
                >
                  Yes, log out
                </button>

                <button
                  className="outline-button"
                  onClick={() => {
                    setShowConfirm(false);
                    navigate("/dashboard");
                  }}
                >
                  Cancel
                </button>
              </div>
            )}

            <p style={{ marginTop: "24px" }}>
              <Link to="/dashboard">Return to Dashboard</Link>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default LogoutPage;

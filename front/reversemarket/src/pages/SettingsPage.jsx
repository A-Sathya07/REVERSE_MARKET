
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

function SettingsPage() {
  return (
    <div className="app dashboard-layout projects-layout">
      <aside className="sidebar">
        <Link to="/dashboard" className="sidebar-logo">
          Reverse<span>Market</span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link">
            <span>▦</span> Dashboard
          </Link>
          <Link to="/projects" className="sidebar-link">
            <span>▤</span> Projects
          </Link>
          <Link to="/settings" className="sidebar-link active">
            <span>⚙</span> Settings
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-card">
            <div className="avatar">D</div>
            <div className="profile-info">
              <strong>Demo Buyer</strong>
              <span>Buyer account</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="topbar">
          <div>
            <span className="breadcrumb">Workspace / </span>
            <strong>Settings</strong>
          </div>
        </header>

        <main className="main-content">
          <section className="projects-heading">
            <div>
              <p className="eyebrow">PREFERENCES</p>
              <h1>Settings</h1>
              <p className="projects-subtitle">
                Manage your profile and workspace preferences.
              </p>
            </div>
          </section>

          <section className="projects-list-section">
            <h2>Profile Settings</h2>
            <p className="projects-subtitle">
              These are demo settings and are not saved to a server.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Settings saved for this demo session.");
              }}
              style={{
                display: "grid",
                gap: "18px",
                maxWidth: "550px",
                marginTop: "25px",
              }}
            >
              <label>
                Display Name
                <input
                  type="text"
                  defaultValue="Demo Buyer"
                  style={fieldStyle}
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  defaultValue="buyer@example.com"
                  style={fieldStyle}
                />
              </label>

              <label>
                Workspace
                <input
                  type="text"
                  defaultValue="ReverseMarket"
                  style={fieldStyle}
                />
              </label>

              <button type="submit" className="primary-button">
                Save Settings
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

const fieldStyle = {
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  marginTop: "8px",
  padding: "12px",
  border: "1px solid #d6deed",
  borderRadius: "8px",
  background: "#fff",
  color: "#172554",
  fontSize: "14px",
};

export default SettingsPage;

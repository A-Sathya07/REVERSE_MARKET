
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectsPage.css";
import "./SettingsPage.css";

function SettingsPage() {
  const [theme, setTheme] = useState("light");

  const accountItems = [
    { icon: "▣", label: "Add funds" },
    { icon: "＄", label: "Withdraw funds" },
    { icon: "▤", label: "Transaction history" },
    { icon: "▥", label: "Financial dashboard" },
    { icon: "▱", label: "Payment sharing" },
  ];

  const toolItems = [
    { icon: "▦", label: "Account analytics" },
    { icon: "▣", label: "Bid Insights" },
    { icon: "☏", label: "Support" },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-mark">R</span>
          <span>ReverseMarket</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className="sidebar-link">
            <span>▦</span> Dashboard
          </NavLink>
          <NavLink to="/projects" className="sidebar-link">
            <span>▤</span> Projects
          </NavLink>
          <a href="/dashboard#requirements" className="sidebar-link">
            <span>☷</span> My Requirements
          </a>
          
          <NavLink to="/settings" className="sidebar-link">
            <span>⚙</span> Settings
          </NavLink>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-icon">?</span>
            <div>
              <strong>Need help?</strong>
              <p>Explore how ReverseMarket works.</p>
            </div>
          </div>

          <div className="profile-card">
            <div className="avatar">S</div>
            <div className="profile-info">
              <strong>Sudharsan</strong>
              <span>Workspace Member</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="dashboard-main settings-page-main">
        <header className="topbar">
          <div>
            <span className="breadcrumb-muted">Workspace</span>
            {" / "}
            <strong>Settings</strong>
          </div>
          <div className="workspace-status">
            <span className="status-dot"></span>
            Demo Workspace
          </div>
        </header>

        <section className="settings-content">
          <div className="settings-heading">
            <span className="workspace-label">YOUR ACCOUNT</span>
            <h1>Account & Settings</h1>
            <p>Manage your profile, wallet, preferences, and account tools.</p>
          </div>

          <section className="account-wallet-card">
            <div className="account-profile">
              <div className="account-avatar">👤</div>
              <div className="account-identity">
                <h2>sudharsan62</h2>
                <p>@sudharsan62</p>
                <div className="account-rating">
                  <span>★★★★★</span> 0.0
                  <small>(0 reviews)</small>
                </div>
              </div>
            </div>

           <div className="wallet-balance">
           <span>Amount Earned</span>
           <strong>₹1,019.58 <small>INR</small></strong>
           </div>
          </section>

          <section className="settings-section">
            <h2>Financial Management</h2>
            <div className="settings-menu">
              {accountItems.map((item) => (
                <button
                  className="settings-menu-item"
                  key={item.label}
                  onClick={() =>
                    alert(`${item.label} will be available when connected to the backend.`)
                  }
                >
                  <span className="settings-menu-icon">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="settings-menu-arrow">›</span>
                </button>
              ))}
            </div>
          </section>

          <section className="settings-section theme-section">
            <div className="theme-label">
              <span className="settings-menu-icon">☼</span>
              <div>
                <h2>Theme</h2>
                <p>Choose your preferred appearance.</p>
              </div>
            </div>

            <div className="theme-options">
              <button
                className={theme === "light" ? "theme-option selected" : "theme-option"}
                onClick={() => setTheme("light")}
                aria-pressed={theme === "light"}
              >
                ☀ Light
              </button>
              <button
                className={theme === "dark" ? "theme-option selected" : "theme-option"}
                onClick={() => setTheme("dark")}
                aria-pressed={theme === "dark"}
              >
                ☾ Dark
              </button>
              <button
                className={theme === "system" ? "theme-option selected" : "theme-option"}
                onClick={() => setTheme("system")}
                aria-pressed={theme === "system"}
              >
                ▣ System
              </button>
            </div>
          </section>

          <section className="settings-section">
            <h2>Account Tools</h2>
            <div className="settings-menu">
              {toolItems.map((item) => (
                <button
                  className="settings-menu-item"
                  key={item.label}
                  onClick={() =>
                    alert(`${item.label} will be available when connected to the backend.`)
                  }
                >
                  <span className="settings-menu-icon">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="settings-menu-arrow">›</span>
                </button>
              ))}

              <NavLink to="/settings" className="settings-menu-item">
                <span className="settings-menu-icon">⚙</span>
                <span>Settings</span>
                <span className="settings-menu-arrow">›</span>
              </NavLink>

              <NavLink to="/logout" className="settings-menu-item logout-menu-item">
                <span className="settings-menu-icon">↪</span>
                <span>Logout</span>
                <span className="settings-menu-arrow">›</span>
              </NavLink>
            </div>
          </section>

          <footer className="settings-footer">
            ReverseMarket · Account & Preferences
          </footer>
        </section>
      </main>
    </div>
  );
}

export default SettingsPage;

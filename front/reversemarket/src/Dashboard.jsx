import { NavLink, Link } from "react-router-dom";
import "./App.css";

function Dashboard() {
  const requirements = [
    {
      id: 1,
      title: "College Event Website",
      category: "Web Development",
      budget: 10000,
      deadline: 10,
      proposals: 5,
      status: "Receiving offers",
    },
    {
      id: 2,
      title: "Student Portfolio Design",
      category: "UI/UX Design",
      budget: 5000,
      deadline: 7,
      proposals: 3,
      status: "Review offers",
    },
    {
      id: 3,
      title: "Python Automation Tool",
      category: "Programming",
      budget: 8000,
      deadline: 14,
      proposals: 4,
      status: "Receiving offers",
    },
  ];

  return (
    <div className="app dashboard-layout">
      <aside className="sidebar">
        <Link to="/dashboard" className="sidebar-logo">
          Reverse<span>Market</span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>

        {/* Sidebar navigation in your requested order */}
        <nav className="sidebar-nav">
          
<nav className="sidebar-nav">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>▦</span> Dashboard
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>▤</span> Projects
          </NavLink>

          <a href="#requirements" className="sidebar-link">
            <span>⇄</span> My Requirements
          </a>

          <a href="#how-it-works" className="sidebar-link">
            <span>◉</span> How It Works
          </a>

          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>↪</span> Logout
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>⚙</span> Settings
          </NavLink>
        </nav>
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
            <strong>Dashboard</strong>
          </div>

          <div className="topbar-right">
            <span className="online-dot"></span>
            <span>Demo Workspace</span>
          </div>
        </header>

        <main className="main-content">
          <section className="welcome" id="overview">
            <div>
              <p className="eyebrow">BUYER WORKSPACE</p>
              <h1>Find the right offer for your needs.</h1>
              <p className="welcome-description">
                Post your requirements, compare proposals, and choose
                the offer that best matches your budget and deadline.
              </p>
            </div>

            <a href="#requirements" className="primary-button">
              + Post a Requirement
            </a>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-top">
                <span>Active Requirements</span>
                <span className="stat-icon blue">▤</span>
              </div>
              <h2>03</h2>
              <p>Your posted projects</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Total Proposals</span>
                <span className="stat-icon purple">⇄</span>
              </div>
              <h2>12</h2>
              <p>Offers received</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Top Compatibility</span>
                <span className="stat-icon green">↗</span>
              </div>
              <h2>
                92<span className="score-total">/100</span>
              </h2>
              <p>Highest matching score</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Awaiting Decision</span>
                <span className="stat-icon orange">◷</span>
              </div>
              <h2>02</h2>
              <p>Projects to review</p>
            </div>
          </section>

          <section
            className="requirements-section"
            id="requirements"
          >
            <div className="section-heading">
              <div>
                <h2>My Requirements</h2>
                <p>
                  Track your projects and compare provider offers.
                </p>
              </div>

              <button
                className="outline-button"
                onClick={() =>
                  alert("The Post Requirement form will be built next.")
                }
              >
                + New Requirement
              </button>
            </div>

            <div className="requirements-list">
              {requirements.map((item) => (
                <article
                  className="requirement-card"
                  key={item.id}
                >
                  <div className="requirement-main">
                    <span className="category-tag">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <div className="requirement-details">
                      <span>
                        <strong>Budget:</strong>{" "}
                        ₹{item.budget.toLocaleString("en-IN")}
                      </span>

                      <span>
                        <strong>Deadline:</strong>{" "}
                        {item.deadline} days
                      </span>

                      <span>
                        <strong>Proposals:</strong>{" "}
                        {item.proposals}
                      </span>
                    </div>
                  </div>

                  <div className="requirement-actions">
                    <span
                      className={
                        item.status === "Review offers"
                          ? "status review"
                          : "status receiving"
                      }
                    >
                      {item.status}
                    </span>

                    <button
                      className="compare-button"
                      onClick={() =>
                        alert(
                          "Proposal comparison for " +
                            item.title +
                            " will be built next."
                        )
                      }
                    >
                      Compare Offers →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="demo-note">
              Demo content only — all requirements and statistics
              are examples.
            </p>
          </section>

          <section
            className="how-section"
            id="how-it-works"
          >
            <div className="section-heading">
              <div>
                <h2>How ReverseMarket Works</h2>
                <p>
                  A simple way to find the most suitable offer.
                </p>
              </div>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3>Post a Requirement</h3>
                <p>
                  Describe your project, set your maximum budget,
                  and specify your deadline.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>
                <h3>Receive Proposals</h3>
                <p>
                  Providers submit their prices, delivery estimates,
                  and proposals.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">03</div>
                <h3>Compare and Choose</h3>
                <p>
                  Compare budget fit, timeline, provider ratings,
                  and compatibility scores.
                </p>
              </div>
            </div>
          </section>

          <footer className="footer">
            © 2026 ReverseMarket · Your needs, compared intelligently.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

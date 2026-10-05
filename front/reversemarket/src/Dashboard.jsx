
import { NavLink, Link } from "react-router-dom";
import "./App.css";

function Dashboard() {
  // Demo data: projects completed as a provider/bidder
  const completedProjects = [
    {
      id: 1,
      title: "College Event Website",
      category: "Web Development",
      earned: 8000,
      completedDate: "15 Sep 2026",
    },
    {
      id: 2,
      title: "Student Portfolio Design",
      category: "UI/UX Design",
      earned: 3500,
      completedDate: "22 Sep 2026",
    },
    {
      id: 3,
      title: "Python Automation Tool",
      category: "Programming",
      earned: 5000,
      completedDate: "28 Sep 2026",
    },
  ];

  return (
    <div className="app dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/dashboard" className="sidebar-logo">
          Reverse<span>Market</span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>

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

          
          <NavLink
            to="/requirements"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>⇄</span> My Requirements
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

      {/* Main Dashboard */}
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
          {/* Dashboard summary */}
          <section className="stats-grid dashboard-summary">
            <div className="stat-card">
              <div className="stat-top">
                <span>Projects Given</span>
                <span className="stat-icon blue">▤</span>
              </div>
              <h2>03</h2>
              <p>Projects posted by you</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Projects Completed</span>
                <span className="stat-icon green">✓</span>
              </div>
              <h2>08</h2>
              <p>Completed as a provider</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Overall Rating</span>
                <span className="stat-icon orange">★</span>
              </div>
              <h1>4.8/5</h1>
              <p>Your provider rating</p>
            </div>
          </section>

          {/* Completed projects */}
          <section className="requirements-section completed-projects-section">
            <div className="section-heading">
              <div>
                <h2>Completed Projects</h2>
                <p>
                  Projects you have completed for other clients as a
                  provider or bidder.
                </p>
              </div>
            </div>

            <div className="requirements-list">
              {completedProjects.map((project) => (
                <article className="requirement-card" key={project.id}>
                  <div className="requirement-main">
                    <span className="category-tag">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <div className="requirement-details">
                      <span>
                        <strong>Earned:</strong>{" "}
                        ₹{project.earned.toLocaleString("en-IN")}
                      </span>

                      <span>
                        <strong>Completed:</strong>{" "}
                        {project.completedDate}
                      </span>
                    </div>
                  </div>

                  <div className="requirement-actions">
                    <span className="status receiving">
                      Completed
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="demo-note">
              Demo content only. Project details and amounts are examples.
            </p>
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

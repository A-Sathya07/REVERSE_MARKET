
import { NavLink, Link } from "react-router-dom";
import "./ProjectsPage.css";

const projects = [
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

function ProjectsPage() {
  return (
    <div className="app dashboard-layout projects-layout">
      <aside className="sidebar">
        <Link to="/dashboard" className="sidebar-logo">
          Reverse<span>Market</span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>

        <nav className="sidebar-nav">
          
        <NavLink
        to="/settings"
        className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
        }
        >
        <span>⚙</span> Settings
        </NavLink>

        <NavLink
        to="/logout"
        className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
        }
        >
        <span>↪</span> Logout
        </NavLink>

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

          <a href="/dashboard#requirements" className="sidebar-link">
            <span>⇄</span> My Requirements
          </a>

          <a href="/dashboard#how-it-works" className="sidebar-link">
            <span>◉</span> How It Works
          </a>
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
            <strong>Projects</strong>
          </div>
          <div className="topbar-right">
            <span className="online-dot"></span>
            <span>Demo Workspace</span>
          </div>
        </header>

        <main className="main-content">
          <section className="projects-heading">
            <div>
              <p className="eyebrow">YOUR WORKSPACE</p>
              <h1>My Projects</h1>
              <p className="projects-subtitle">
                Manage your requirements, track proposals, and find the
                right provider for every project.
              </p>
            </div>

            <button
              className="primary-button project-create-button"
              onClick={() =>
                alert("The new project form will be built next.")
              }
            >
              + New Project
            </button>
          </section>

          <section className="project-summary">
            <div className="project-summary-card">
              <span>Total Projects</span>
              <strong>03</strong>
              <small>All your requirements</small>
            </div>

            <div className="project-summary-card">
              <span>Open Projects</span>
              <strong>02</strong>
              <small>Receiving proposals</small>
            </div>

            <div className="project-summary-card">
              <span>Total Proposals</span>
              <strong>12</strong>
              <small>Across all projects</small>
            </div>
          </section>

          <section className="projects-list-section">
            <div className="projects-list-heading">
              <div>
                <h2>All Projects</h2>
                <p>Review the status and details of your requirements.</p>
              </div>
              <span className="project-count">3 projects</span>
            </div>

            <div className="projects-table-wrap">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>PROJECT</th>
                    <th>BUDGET</th>
                    <th>DEADLINE</th>
                    <th>PROPOSALS</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td>
                        <div className="project-name">
                          <div className="project-symbol">
                            {project.id.toString().padStart(2, "0")}
                          </div>
                          <div>
                            <strong>{project.title}</strong>
                            <span>{project.category}</span>
                          </div>
                        </div>
                      </td>

                      <td className="project-budget">
                        ₹{project.budget.toLocaleString("en-IN")}
                      </td>

                      <td>{project.deadline} days</td>

                      <td>
                        <span className="proposal-count">
                          {project.proposals}
                        </span>
                      </td>

                      <td>
                        <span
                          className={
                            project.status === "Review offers"
                              ? "status review"
                              : "status receiving"
                          }
                        >
                          {project.status}
                        </span>
                      </td>

                      <td>
                        <button
                          className="project-action"
                          onClick={() =>
                            alert(
                              "Project details for " +
                                project.title +
                                " will be added next."
                            )
                          }
                        >
                          View details →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="projects-demo-note">
              Demo data only. Project details and proposal counts are examples.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProjectsPage;

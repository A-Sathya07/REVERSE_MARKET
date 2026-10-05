
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./ProjectsPage.css";

const sampleProjects = [
  {
    id: 1,
    name: "Real-Time Crypto Exchange Monitor",
    budget: "₹60,000 – ₹1,20,000",
    deadline: "30 Nov 2026",
    proposals: 12,
    status: "Open",
    description:
      "Build a secure dashboard that monitors crypto exchanges, displays live market indicators, and sends customizable alerts.",
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Modern E-Commerce Website",
    budget: "₹25,000 – ₹45,000",
    deadline: "15 Nov 2026",
    proposals: 8,
    status: "In Progress",
    description:
      "Develop a responsive online store with product listings, search, shopping cart, and a simple checkout experience.",
    rating: 4.5,
    reviews: 16,
  },
  {
    id: 3,
    name: "Student Management System",
    budget: "₹15,000 – ₹30,000",
    deadline: "20 Dec 2026",
    proposals: 0,
    status: "Draft",
    description:
      "Create a student management platform for maintaining student records, attendance, and academic information.",
    rating: 0,
    reviews: 0,
  },
];

function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = sampleProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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

      <main className="dashboard-main projects-page-main">
        <header className="topbar">
          <div>
            <span className="breadcrumb-muted">Workspace</span>
            {" / "}
            <strong>Projects</strong>
          </div>

          <div className="workspace-status">
            <span className="status-dot"></span>
            Demo Workspace
          </div>
        </header>

        <section className="projects-content">
          <div className="projects-heading">
            <div>
              <span className="workspace-label">YOUR WORKSPACE</span>
              <h1>Projects</h1>
              <p>
                Discover projects, review requirements, and find the right
                opportunity.
              </p>
            </div>
          </div>

          <div className="project-search-row">
            <div className="project-search">
              <span className="search-icon">⌕</span>
              <input
                type="search"
                placeholder="Search projects by name or description..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search projects"
              />
              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="project-filter">
              <span>Filter:</span>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                aria-label="Filter projects by status"
              >
                <option value="All">All Projects</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Draft">Draft</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="project-results-heading">
            <strong>Available Projects</strong>
            <span>
              Showing {filteredProjects.length} of {sampleProjects.length} projects
            </span>
          </div>

          <div className="project-list">
            {filteredProjects.map((project) => (
              <article className="project-listing" key={project.id}>
                <div className="project-listing-top">
                  <div className="project-title-group">
                    <h2>{project.name}</h2>
                    <span className={`project-status status-${project.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}>
                      {project.status}
                    </span>
                  </div>
                  <button
                    className="project-action"
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.id ? null : project.id
                      )
                    }
                  >
                    {selectedProject === project.id
                      ? "Hide Details"
                      : "View Details"}
                  </button>
                </div>

                <div className="project-meta">
                  <div>
                    <span className="meta-label">Budget</span>
                    <strong>{project.budget}</strong>
                  </div>
                  <div>
                    <span className="meta-label">Deadline</span>
                    <strong>{project.deadline}</strong>
                  </div>
                  <div>
                    <span className="meta-label">Proposals</span>
                    <strong>{project.proposals}</strong>
                  </div>
                  <div>
                    <span className="meta-label">Client Rating</span>
                    <strong className="project-rating">
                      <span>★</span>{" "}
                      {project.reviews ? project.rating.toFixed(1) : "No ratings"}
                      {project.reviews > 0 && (
                        <small> ({project.reviews})</small>
                      )}
                    </strong>
                  </div>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {selectedProject === project.id && (
                  <div className="project-expanded-details">
                    <strong>Project details</strong>
                    <p>{project.description}</p>
                    <p>
                      <strong>Current status:</strong> {project.status}
                    </p>
                    <p>
                      <strong>Proposal count:</strong> {project.proposals}
                    </p>
                  </div>
                )}

                <div className="project-listing-footer">
                  <span>
                    <span className="proposal-dot"></span>
                    {project.proposals === 0
                      ? "No proposals yet"
                      : `${project.proposals} proposals received`}
                  </span>
                  <button
                    className="project-text-action"
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.id ? null : project.id
                      )
                    }
                  >
                    {selectedProject === project.id
                      ? "Show less ↑"
                      : "More details →"}
                  </button>
                </div>
              </article>
            ))}

            {filteredProjects.length === 0 && (
              <div className="projects-empty-state">
                <span>⌕</span>
                <h3>No projects found</h3>
                <p>Try another search term or choose a different status.</p>
                <button
                  className="project-text-action"
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("All");
                  }}
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectsPage;

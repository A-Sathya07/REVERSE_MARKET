
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectsPage.css";

const myRequirements = [
  {
    id: 1,
    name: "AI Resume Analyzer",
    budget: "₹5,000 – ₹8,000",
    deadline: "12 Oct 2026",
    proposals: 6,
    status: "Open",
    description:
      "Develop an AI-powered application that analyzes resumes and suggests improvements based on job descriptions.",
  },
  {
    id: 2,
    name: "Campus Lost and Found App",
    budget: "₹7,000 – ₹10,000",
    deadline: "15 Oct 2026",
    proposals: 4,
    status: "In Progress",
    description:
      "Build an application where students can report lost items, find missing belongings, and contact their owners.",
  },
  {
    id: 3,
    name: "Online Book Exchange Platform",
    budget: "₹5,000 – ₹9,000",
    deadline: "18 Oct 2026",
    proposals: 0,
    status: "Open",
    description:
      "Create a platform for students to exchange, sell, or donate used textbooks and study materials.",
  },
  {
    id: 4,
    name: "Personal Finance Tracker",
    budget: "₹3,000 – ₹5,000",
    deadline: "22 Oct 2026",
    proposals: 8,
    status: "Completed",
    description:
      "Create a finance dashboard to record expenses, manage budgets, and visualize monthly savings.",
  },
  {
    id: 5,
    name: "College Fest Poster Design",
    budget: "₹2,000 – ₹3,500",
    deadline: "14 Oct 2026",
    proposals: 3,
    status: "Open",
    description:
      "Design creative posters, event banners, and social media graphics for a college cultural festival.",
  },
];

function RequirementsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedRequirement, setSelectedRequirement] = useState(null);

  const filteredRequirements = myRequirements.filter((requirement) => {
    const matchesSearch =
      requirement.name.toLowerCase().includes(search.toLowerCase()) ||
      requirement.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || requirement.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-mark">R</span>
          <span>ReverseMarket</span>
        </div>

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
            <span>☷</span> My Requirements
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

      {/* Main Content */}
      <main className="dashboard-main projects-page-main">
        <header className="topbar">
          <div>
            <span className="breadcrumb-muted">Workspace</span>
            {" / "}
            <strong>My Requirements</strong>
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
              <h1>My Requirements</h1>
              <p>
                View and track the projects you have posted for providers.
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="project-search-row">
            <div className="project-search">
              <span className="search-icon">⌕</span>

              <input
                type="search"
                placeholder="Search your requirements..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search requirements"
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
                aria-label="Filter requirements by status"
              >
                <option value="All">All Requirements</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          {/* Results Heading */}
          <div className="project-results-heading">
            <strong>Your Posted Requirements</strong>
            <span>
              Showing {filteredRequirements.length} of{" "}
              {myRequirements.length} requirements
            </span>
          </div>

          {/* Requirements List */}
          <div className="project-list">
            {filteredRequirements.map((requirement) => (
              <article className="project-listing" key={requirement.id}>
                <div className="project-listing-top">
                  <div className="project-title-group">
                    <h2>{requirement.name}</h2>

                    <span
                      className={`project-status status-${requirement.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {requirement.status}
                    </span>
                  </div>

                  <button
                    className="project-action"
                    onClick={() =>
                      setSelectedRequirement(
                        selectedRequirement === requirement.id
                          ? null
                          : requirement.id
                      )
                    }
                  >
                    {selectedRequirement === requirement.id
                      ? "Hide Details"
                      : "View Details"}
                  </button>
                </div>

                <div className="project-meta">
                  <div>
                    <span className="meta-label">Budget</span>
                    <strong>{requirement.budget}</strong>
                  </div>

                  <div>
                    <span className="meta-label">Deadline</span>
                    <strong>{requirement.deadline}</strong>
                  </div>

                  <div>
                    <span className="meta-label">Proposals</span>
                    <strong>{requirement.proposals}</strong>
                  </div>

                  <div>
                    <span className="meta-label">Requirement ID</span>
                    <strong>RM-{String(requirement.id).padStart(3, "0")}</strong>
                  </div>
                </div>

                <p className="project-description">
                  {requirement.description}
                </p>

                {selectedRequirement === requirement.id && (
                  <div className="project-expanded-details">
                    <strong>Requirement Details</strong>
                    <p>{requirement.description}</p>
                    <p>
                      <strong>Budget:</strong> {requirement.budget}
                    </p>
                    <p>
                      <strong>Deadline:</strong> {requirement.deadline}
                    </p>
                    <p>
                      <strong>Current Status:</strong> {requirement.status}
                    </p>
                    <p>
                      <strong>Proposals Received:</strong>{" "}
                      {requirement.proposals}
                    </p>
                  </div>
                )}

                <div className="project-listing-footer">
                  <span>
                    <span className="proposal-dot"></span>
                    {requirement.proposals === 0
                      ? "No proposals yet"
                      : `${requirement.proposals} proposals received`}
                  </span>

                  <button
                    className="project-text-action"
                    onClick={() =>
                      setSelectedRequirement(
                        selectedRequirement === requirement.id
                          ? null
                          : requirement.id
                      )
                    }
                  >
                    {selectedRequirement === requirement.id
                      ? "Show less ↑"
                      : "More details →"}
                  </button>
                </div>
              </article>
            ))}

            {filteredRequirements.length === 0 && (
              <div className="projects-empty-state">
                <span>⌕</span>
                <h3>No requirements found</h3>
                <p>
                  Try another search term or choose a different status.
                </p>

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

          <p className="demo-note">
            Demo content only. Requirements and proposal counts are examples.
          </p>
        </section>
      </main>
    </div>
  );
}

export default RequirementsPage;

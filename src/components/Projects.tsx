"use client";

import { GitFork, ExternalLink } from "lucide-react";

interface Project {
  title:       string;
  description: string;
  stack:       string[];
  github?:     string;
  demo?:       string;
}

const PROJECTS: Project[] = [
  {
    title: "Seldi — Financial Management System",
    description:
      "Enterprise-grade financial management platform with budgeting, forecasting, revenue/expense tracking, and financial analytics. Implements role-based access control (RBAC) across a three-part system: a FastAPI backend, a Next.js web frontend, and a React Native mobile app.",
    stack: ["FastAPI", "Next.js", "React Native", "PostgreSQL", "RBAC"],
    github: "[ADD_SELDI_GITHUB_URL]",
    demo:   "[ADD_SELDI_DEMO_URL]",
  },
  {
    title: "HewanNet — Educational Mentorship Platform",
    description:
      "Connects students with mentors, with features for real-time communication, session scheduling, resource sharing, and system administration. Built a full async backend with JWT auth, and a stateful Next.js frontend using Zustand for client state.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "JWT",
      "Recharts",
    ],
    github: "[ADD_HEWANNET_GITHUB_URL]",
    demo:   "[ADD_HEWANNET_DEMO_URL]",
  },
  {
    title: "Student Registration System",
    description:
      "[PLACEHOLDER — Add 2–3 sentences describing what this system does, who it's for, and any notable technical decisions. Example: 'A web-based student registration system for managing enrollment, course selection, and academic records...']",
    stack: ["[ADD_STACK]"],
    github: "[ADD_STUDENT_REG_GITHUB_URL]",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const hasPlaceholderGithub = project.github?.startsWith("[");
  const hasPlaceholderDemo   = project.demo?.startsWith("[");

  return (
    <article
      style={{
        padding: "2rem",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "var(--radius-lg)",
        background: "rgba(255,255,255,0.02)",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        transition:
          "border-color var(--transition-slow), background var(--transition-slow), transform var(--transition-slow)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(201,154,60,0.35)";
        el.style.background   = "rgba(201,154,60,0.03)";
        el.style.transform    = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.background   = "rgba(255,255,255,0.02)";
        el.style.transform    = "translateY(0)";
      }}
    >
      {/* Title row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "var(--off-white)",
            fontSize: "1.15rem",
          }}
        >
          {project.title}
        </h3>

        <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
          {project.github && !hasPlaceholderGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              style={{
                color: "rgba(242,244,245,0.4)",
                transition: "color var(--transition-base)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--off-white)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(242,244,245,0.4)")
              }
            >
              <GitFork size={18} aria-hidden="true" />
            </a>
          )}
          {project.demo && !hasPlaceholderDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              style={{
                color: "rgba(242,244,245,0.4)",
                transition: "color var(--transition-base)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--amber)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(242,244,245,0.4)")
              }
            >
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.92rem",
          lineHeight: 1.7,
          color: "rgba(242,244,245,0.65)",
          maxWidth: "none",
        }}
      >
        {project.description}
      </p>

      {/* Stack tags */}
      <ul
        role="list"
        aria-label="Tech stack"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          listStyle: "none",
          marginTop: "auto",
          paddingTop: "0.5rem",
        }}
      >
        {project.stack.map((tech) => (
          <li key={tech}>
            <span className="tag">{tech}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span className="section-label" aria-hidden="true">Projects</span>
      <h2 id="projects-heading" className="section-heading">
        Things I&apos;ve built
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

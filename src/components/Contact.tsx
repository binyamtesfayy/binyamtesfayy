"use client";

import { Mail, GitFork, Link2 } from "lucide-react";

// ─── PLACEHOLDERS — fill these in ──────────────
const EMAIL        = "[YOUR_EMAIL]";
const GITHUB_URL   = "[GITHUB_URL]";
const LINKEDIN_URL = "[LINKEDIN_URL]";
// ────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    label: "Email",
    href:  `mailto:${EMAIL}`,
    icon:  <Mail size={20} />,
    display: EMAIL,
  },
  {
    label: "GitHub",
    href:  GITHUB_URL,
    icon:  <GitFork size={20} />,
    display: "github.com/[handle]",
  },
  {
    label: "LinkedIn",
    href:  LINKEDIN_URL,
    icon:  <Link2 size={20} />,
    display: "linkedin.com/in/[handle]",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span className="section-label" aria-hidden="true">Contact</span>
      <h2 id="contact-heading" className="section-heading">
        Get in touch
      </h2>

      <p style={{ marginBottom: "2.5rem" }}>
        I&apos;m open to full-time roles, internships, and interesting
        freelance projects. The best way to reach me is by email — I
        usually reply within 24 hours.
      </p>

      <ul
        role="list"
        aria-label="Contact options"
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {CONTACT_LINKS.map(({ label, href, icon, display }) => {
          const isPlaceholder = display.includes("[");
          return (
            <li key={label} role="listitem">
              <a
                href={isPlaceholder ? undefined : href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={`Contact via ${label}: ${display}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  color: isPlaceholder
                    ? "rgba(242,244,245,0.3)"
                    : "rgba(242,244,245,0.7)",
                  cursor: isPlaceholder ? "default" : "pointer",
                  transition: "color var(--transition-base)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isPlaceholder)
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--amber)";
                }}
                onMouseLeave={(e) => {
                  if (!isPlaceholder)
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(242,244,245,0.7)";
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  {icon}
                </span>
                <span style={{ fontSize: "0.95rem" }}>{display}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

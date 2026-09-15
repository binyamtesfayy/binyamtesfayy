"use client";

import { GitFork, Link2, Mail, FileText } from "lucide-react";

// ─── Contact & Profile Details ───────────────────
const NAME         = "Binyam Tesfay";
const EMAIL        = "binyamtesfay93@gmail.com";
const GITHUB_URL   = "https://github.com/binyamtesfayy";
const LINKEDIN_URL = "https://linkedin.com/in/binyamtesfayy";
const YEAR         = new Date().getFullYear();
// ────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="footer-container"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2.5rem 1.25rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontSize: "0.82rem",
          color: "rgba(242,244,245,0.4)",
        }}
      >
        © {YEAR} {NAME}. Built with Next.js & React.
      </p>

      <nav aria-label="Footer social links">
        <ul
          role="list"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            listStyle: "none",
          }}
        >
          {[
            { label: "GitHub",   href: GITHUB_URL,          icon: <GitFork  size={18} /> },
            { label: "LinkedIn", href: LINKEDIN_URL,        icon: <Link2    size={18} /> },
            { label: "Email",    href: `mailto:${EMAIL}`,   icon: <Mail     size={18} /> },
            { label: "Resume",   href: "/resume.pdf",       icon: <FileText size={18} /> },
          ].map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "rgba(242,244,245,0.6)",
                  transition: "color var(--transition-base), background var(--transition-base)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "44px",
                  minHeight: "44px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}


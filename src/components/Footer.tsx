"use client";

import { GitFork, Link2, Mail } from "lucide-react";

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
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2.5rem 1.5rem",
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <p
        style={{
          fontSize: "0.82rem",
          color: "rgba(242,244,245,0.35)",
        }}
      >
        © {YEAR} {NAME}. Built with Next.js.
      </p>

      <nav aria-label="Footer social links">
        <ul
          role="list"
          style={{
            display: "flex",
            gap: "1.25rem",
            listStyle: "none",
          }}
        >
          {[
            { label: "GitHub",   href: GITHUB_URL,          icon: <GitFork   size={16} /> },
            { label: "LinkedIn", href: LINKEDIN_URL,        icon: <Link2 size={16} /> },
            { label: "Email",    href: `mailto:${EMAIL}`,   icon: <Mail     size={16} /> },
          ].map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "rgba(242,244,245,0.35)",
                  transition: "color var(--transition-base)",
                  display: "block",
                  padding: "0.25rem",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--amber)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(242,244,245,0.35)")
                }
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

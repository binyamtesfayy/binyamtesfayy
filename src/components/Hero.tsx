"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GitFork, Link2, Mail, FileText, ArrowDownRight } from "lucide-react";

// ─── Contact & Profile Details ──────
const NAME         = "Binyam Tesfay";
const GITHUB_URL   = "https://github.com/binyamtesfayy";
const LINKEDIN_URL = "https://linkedin.com/in/binyamtesfayy";
const EMAIL        = "binyamtesfay93@gmail.com";
const RESUME_URL   = "#contact";
// ─────────────────────────────────────────────────────────

interface SocialLink {
  label: string;
  href:  string;
  icon:  React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub",   href: GITHUB_URL,   icon: <GitFork   size={18} /> },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: <Link2 size={18} /> },
  { label: "Email",    href: `mailto:${EMAIL}`, icon: <Mail size={18} /> },
  { label: "Resume",   href: RESUME_URL,   icon: <FileText size={18} /> },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Stagger children animation on mount (the ONE deliberate motion moment)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 1.5rem 5rem",
        maxWidth: "900px",
        margin: "0 auto",
        paddingTop: "80px",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        aria-live="polite"
      >
        {/* Greeting line */}
        <motion.p
          variants={item}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            color: "var(--emerald)",
            marginBottom: "1.25rem",
            textTransform: "uppercase",
          }}
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "var(--off-white)",
            marginBottom: "0.5rem",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {NAME}
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            fontWeight: 300,
            color: "rgba(242,244,245,0.55)",
            marginBottom: "1.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Software Engineer — Full-Stack Developer
        </motion.p>

        {/* Positioning line */}
        <motion.p
          variants={item}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.65,
            color: "rgba(242,244,245,0.75)",
            maxWidth: "56ch",
            marginBottom: "3rem",
          }}
        >
          I build full-stack systems for education and finance — from
          mentorship platforms to enterprise budgeting tools.
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
          role="list"
          aria-label="Contact and profile links"
        >
          {SOCIAL_LINKS.map(({ label, href, icon }) => {
            const isResume = label === "Resume";
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                role="listitem"
                aria-label={
                  label === "Resume"
                    ? "Download resume PDF"
                    : `Visit ${label} profile`
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: isResume ? "0.55rem 1.1rem" : "0.55rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: isResume
                    ? "1px solid var(--amber)"
                    : "1px solid rgba(255,255,255,0.12)",
                  background: isResume ? "var(--amber)" : "transparent",
                  color: isResume ? "var(--navy)" : "rgba(242,244,245,0.7)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  transition:
                    "background var(--transition-base), border-color var(--transition-base), color var(--transition-base), transform var(--transition-base)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  if (isResume) {
                    el.style.background = "var(--amber-dim)";
                    el.style.borderColor = "var(--amber-dim)";
                  } else {
                    el.style.borderColor = "var(--amber)";
                    el.style.color = "var(--off-white)";
                  }
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  if (isResume) {
                    el.style.background = "var(--amber)";
                    el.style.borderColor = "var(--amber)";
                  } else {
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.color = "rgba(242,244,245,0.7)";
                  }
                  el.style.transform = "translateY(0)";
                }}
              >
                {icon}
                {label}
              </a>
            );
          })}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={item}
          style={{
            marginTop: "5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(242,244,245,0.3)",
            fontSize: "0.78rem",
            letterSpacing: "0.06em",
          }}
          aria-hidden="true"
        >
          <span>scroll</span>
          <ArrowDownRight size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

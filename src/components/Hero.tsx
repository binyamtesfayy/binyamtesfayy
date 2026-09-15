"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GitFork, Link2, Mail, FileText, ArrowDownRight } from "lucide-react";

// ─── Contact & Profile Details ──────
const NAME         = "Binyam Tesfay";
const GITHUB_URL   = "https://github.com/binyamtesfayy";
const LINKEDIN_URL = "https://linkedin.com/in/binyamtesfayy";
const EMAIL        = "binyamtesfay93@gmail.com";
const RESUME_URL   = "/resume.pdf";
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
        minHeight: "calc(100svh - 60px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "5rem 1rem 3rem",
        maxWidth: "900px",
        margin: "0 auto",
        paddingTop: "90px",
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
            marginBottom: "0.85rem",
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
            lineHeight: 1.08,
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {NAME}
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 3.5vw, 1.85rem)",
            fontWeight: 300,
            color: "rgba(242,244,245,0.6)",
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          Software Engineer — Full-Stack Developer
        </motion.p>

        {/* Positioning line */}
        <motion.p
          variants={item}
          style={{
            fontSize: "clamp(0.92rem, 2.2vw, 1.05rem)",
            lineHeight: 1.7,
            color: "rgba(242,244,245,0.75)",
            maxWidth: "56ch",
            marginBottom: "2rem",
          }}
        >
          I build full-stack systems for education and finance — from
          mentorship platforms to enterprise budgeting tools.
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={item}
          className="hero-buttons-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
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
                className="hero-btn"
                aria-label={
                  label === "Resume"
                    ? "Download resume PDF"
                    : `Visit ${label} profile`
                }
                style={{
                  padding: isResume ? "0.65rem 1.25rem" : "0.65rem 1rem",
                  border: isResume
                    ? "1px solid var(--amber)"
                    : "1px solid rgba(255,255,255,0.12)",
                  background: isResume ? "var(--amber)" : "rgba(255,255,255,0.03)",
                  color: isResume ? "var(--navy)" : "rgba(242,244,245,0.8)",
                  fontWeight: isResume ? 600 : 500,
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
            marginTop: "3.5rem",
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

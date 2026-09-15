"use client";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: "fixed",
        top: "-100%",
        left: "1rem",
        padding: "0.5rem 1rem",
        background: "var(--amber)",
        color: "var(--navy)",
        fontSize: "0.85rem",
        fontWeight: 600,
        borderRadius: "var(--radius-sm)",
        zIndex: 999,
        transition: "top 0.1s",
        textDecoration: "none",
      }}
      onFocus={(e) => (e.currentTarget.style.top = "1rem")}
      onBlur={(e) => (e.currentTarget.style.top = "-100%")}
    >
      Skip to main content
    </a>
  );
}

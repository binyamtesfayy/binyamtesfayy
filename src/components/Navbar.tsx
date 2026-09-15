"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Education",  href: "#education" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [activeId,   setActiveId]     = useState("");
  const [menuOpen,   setMenuOpen]     = useState(false);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: isScrolled
            ? "rgba(18, 23, 43, 0.92)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "none",
          transition: "background-color 300ms ease, border-color 300ms ease",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo / Name */}
          <a
            href="#hero"
            aria-label="Back to top"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--off-white)",
              letterSpacing: "-0.02em",
              transition: "color var(--transition-base)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--amber)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--off-white)")
            }
          >
            BT
          </a>

          {/* Desktop links */}
          <ul
            role="list"
            style={{
              gap: "2rem",
              listStyle: "none",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={isActive ? "true" : undefined}
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: isActive ? "var(--amber)" : "rgba(242,244,245,0.65)",
                      position: "relative",
                      paddingBottom: "2px",
                      transition: "color var(--transition-base)",
                    }}
                    onMouseEnter={(e) =>
                      !isActive &&
                      (e.currentTarget.style.color = "var(--off-white)")
                    }
                    onMouseLeave={(e) =>
                      !isActive &&
                      (e.currentTarget.style.color = "rgba(242,244,245,0.65)")
                    }
                  >
                    {label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "1px",
                          background: "var(--amber)",
                          borderRadius: "1px",
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="mobile-nav-btn"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-sm)",
              color: "var(--off-white)",
              cursor: "pointer",
              padding: "0.6rem",
              minWidth: "44px",
              minHeight: "44px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(18, 23, 43, 0.98)",
          backdropFilter: "blur(16px)",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          padding: "2rem 1.5rem",
          gap: "0.5rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 280ms ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className="mobile-nav-btn"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "var(--off-white)",
              padding: "0.75rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              transition: "color var(--transition-base), padding-left var(--transition-base)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--amber)";
              e.currentTarget.style.paddingLeft = "0.5rem";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--off-white)";
              e.currentTarget.style.paddingLeft = "0";
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}

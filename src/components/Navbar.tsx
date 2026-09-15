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

  // Lock body scroll when mobile menu is open & handle Escape key
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

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
          backgroundColor: isScrolled || menuOpen
            ? "rgba(18, 23, 43, 0.95)"
            : "transparent",
          backdropFilter: isScrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: isScrolled || menuOpen
            ? "1px solid rgba(255,255,255,0.06)"
            : "none",
          transition: "background-color 300ms ease, border-color 300ms ease",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 1.25rem",
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
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--off-white)",
              letterSpacing: "-0.02em",
              transition: "color var(--transition-base)",
              display: "inline-flex",
              alignItems: "center",
              minHeight: "44px",
            }}
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
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
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
          padding: "1.5rem 1.5rem calc(2rem + env(safe-area-inset-bottom, 0px))",
          gap: "0.5rem",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 280ms ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className="mobile-nav-btn"
      >
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.slice(1);
          const isActive = activeId === id;
          return (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              aria-current={isActive ? "true" : undefined}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.35rem",
                fontWeight: 500,
                color: isActive ? "var(--amber)" : "var(--off-white)",
                padding: "0.85rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                minHeight: "48px",
                transition: "color var(--transition-base), padding-left var(--transition-base)",
              }}
            >
              {label}
            </a>
          );
        })}
      </div>
    </>
  );
}


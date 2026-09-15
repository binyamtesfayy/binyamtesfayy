"use client";

export default function Education() {
  const stats = [
    { value: "3.93", label: "CGPA", sub: "out of 4.00" },
    { value: "87.5%", label: "National Exit Exam", sub: "score" },
    { value: "2026", label: "Graduation Year", sub: "Mekelle University" },
  ];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span className="section-label" aria-hidden="true">Education</span>
      <h2 id="education-heading" className="section-heading">
        Academic background
      </h2>

      {/* Degree block */}
      <div style={{ marginBottom: "2.25rem" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.15rem, 3.5vw, 1.35rem)",
            fontWeight: 500,
            color: "var(--off-white)",
            marginBottom: "0.35rem",
          }}
        >
          BSc in Software Engineering
        </p>
        <p
          style={{
            fontSize: "0.92rem",
            color: "rgba(242,244,245,0.55)",
          }}
        >
          Mekelle University, Mekelle, Ethiopia
        </p>
      </div>

      {/* Stat cards */}
      <div
        role="list"
        aria-label="Academic achievements"
        className="stats-grid"
      >
        {stats.map(({ value, label, sub }) => (
          <div
            key={label}
            role="listitem"
            style={{
              padding: "1.25rem 1rem",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "var(--radius-md)",
              background: "rgba(255,255,255,0.025)",
              transition:
                "border-color var(--transition-base), background var(--transition-base)",
              cursor: "default",
            }}
          >
            <p
              aria-label={`${label}: ${value}`}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 6.5vw, 2.2rem)",
                fontWeight: 600,
                color: "var(--amber)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--off-white)",
                marginBottom: "0.2rem",
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(242,244,245,0.4)",
              }}
            >
              {sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


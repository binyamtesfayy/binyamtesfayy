import { Building2 } from "lucide-react";

interface BulletPoint {
  text: string;
}

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  context: string;
  bullets: BulletPoint[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern",
    company: "Alena Tech",
    period: "Mar 2025 – May 2025",
    location: "Ethiopia",
    context:
      "Worked on Menzo, a financial management system built for SACCOs (Savings and Credit Cooperatives).",
    bullets: [
      { text: "Assisted with data migration, data verification, and User Acceptance Testing (UAT) to help ensure system accuracy and reliability." },
      { text: "Supported testing, troubleshooting, quality assurance, and documentation while working with developers, business analysts, and operational teams." },
      { text: "Contributed to an AI chatbot project as an AI/NLP Logic & Analytics Developer, helping design intents for balance inquiries, loan repayments, savings balances, and transaction history using Rasa." },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span className="section-label" aria-hidden="true">Experience</span>
      <h2 id="experience-heading" className="section-heading">
        Where I&apos;ve worked
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        {EXPERIENCE.map((entry) => (
          <article
            key={`${entry.company}-${entry.period}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.75rem",
            }}
          >
            {/* Role + company row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.85rem",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  marginTop: "0.2rem",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(31,111,84,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--emerald)",
                }}
              >
                <Building2 size={14} />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--off-white)",
                    marginBottom: "0.15rem",
                  }}
                >
                  {entry.role}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--amber)",
                    fontWeight: 500,
                    marginBottom: "0.15rem",
                  }}
                >
                  {entry.company}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(242,244,245,0.4)",
                  }}
                >
                  {entry.period} · {entry.location}
                </p>
              </div>
            </div>

            {/* Context paragraph */}
            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(242,244,245,0.6)",
                marginLeft: "2.85rem",
                maxWidth: "none",
              }}
            >
              {entry.context}
            </p>

            {/* Bullets */}
            <ul
              aria-label={`Responsibilities at ${entry.company}`}
              style={{
                marginLeft: "2.85rem",
                paddingLeft: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {entry.bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(242,244,245,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {b.text}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

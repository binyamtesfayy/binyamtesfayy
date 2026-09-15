interface SkillGroup {
  category: string;
  skills:   string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Python", "Django", "Node.js", "Express", "NestJS", "PHP", "Java"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "Next.js", "Flutter"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
  {
    category: "Languages spoken",
    skills: ["Tigrigna (native)", "Amharic (native)", "English (professional)"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span className="section-label" aria-hidden="true">Skills</span>
      <h2 id="skills-heading" className="section-heading">
        What I work with
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        {SKILL_GROUPS.map(({ category, skills }) => {
          const isLanguages = category === "Languages spoken";
          return (
            <div key={category}>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--emerald)",
                  marginBottom: "0.85rem",
                }}
              >
                {category}
              </p>

              <ul
                role="list"
                aria-label={`${category} skills`}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  listStyle: "none",
                }}
              >
                {skills.map((skill) => (
                  <li key={skill} role="listitem">
                    <span
                      className="tag"
                      style={
                        isLanguages
                          ? {
                              fontFamily: "var(--font-body)",
                              fontSize: "0.85rem",
                              padding: "0.3em 0.8em",
                              borderColor: "rgba(31,111,84,0.4)",
                              color: "rgba(242,244,245,0.7)",
                            }
                          : undefined
                      }
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

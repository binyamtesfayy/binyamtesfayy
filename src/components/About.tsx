export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section"
    >
      <span className="section-label" aria-hidden="true">About</span>
      <h2 id="about-heading" className="section-heading">
        Who I am
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          maxWidth: "68ch",
        }}
      >
        <p>
          I&apos;m a full-stack software engineer educated at Mekelle University,
          Ethiopia (BSc Software Engineering, CGPA 3.93/4.00, National Exit
          Exam 87.5%).
        </p>
        <p>
          I work across the stack — Python/Django and Node/NestJS on the backend,
          React/Next.js and Flutter on the frontend and mobile. During my final
          year I shipped two production-style systems: an education mentorship
          platform and an enterprise financial management platform.
        </p>
        <p>
          I speak Tigrigna and Amharic as native languages and work
          professionally in English.
        </p>
      </div>
    </section>
  );
}

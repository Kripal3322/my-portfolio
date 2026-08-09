const skills = {
  "Programming Languages": [
    "C",
    "Java",
    "Python",
    "JavaScript",
  ],

  "Web Development": [
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],

  "Database": [
    "MySQL",
    "MongoDB",
  ],

  "Machine Learning": [
    "Python",
    "NumPy",
    "Pandas",
    "Scikit-learn",
  ],

  "Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Vercel",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#030712] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A collection of technologies and tools I use to build
            applications and solve technical problems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
            >
              <h3 className="text-xl font-semibold">
                {category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
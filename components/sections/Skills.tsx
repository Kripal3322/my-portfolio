const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Machine Learning",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-sky-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build applications,
            analyze data, and solve technical problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition hover:border-sky-400/40 hover:text-sky-300"
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
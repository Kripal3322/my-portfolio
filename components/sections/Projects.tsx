const projects = [
  {
    title: "Project One",
    description: "Project description will be added here.",
    technologies: ["Technology 1", "Technology 2"],
  },
  {
    title: "Project Two",
    description: "Project description will be added here.",
    technologies: ["Technology 1", "Technology 2"],
  },
  {
    title: "Project Three",
    description: "Project description will be added here.",
    technologies: ["Technology 1", "Technology 2"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My Projects
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A collection of projects I have built and worked on.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
            >
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <span className="text-sm text-gray-500">
                  Project Image
                </span>
              </div>

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  type="button"
                  className="text-sm text-sky-400 transition hover:text-sky-300"
                >
                  GitHub →
                </button>

                <button
                  type="button"
                  className="text-sm text-sky-400 transition hover:text-sky-300"
                >
                  Live Demo →
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
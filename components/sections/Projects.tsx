const projects = [
  {
    title: "Online Voting System",
    description:
      "A web-based voting application designed to provide a simple and user-friendly platform for voter authentication, candidate selection, secure vote submission, and election result viewing.",
    technologies: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
    images: [
      "/images/projects/online-voting-system/home.png",
      "/images/projects/online-voting-system/login.png",
      "/images/projects/online-voting-system/voting-booth.png",
      "/images/projects/online-voting-system/success.png",
      "/images/projects/online-voting-system/results.png",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-sky-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Project
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of projects that showcase my development,
            problem-solving, and technical skills.
          </p>
        </div>

        {/* Project Card */}
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          >

            {/* Main Screenshot */}
            <div className="p-4 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <img
                  src={project.images[0]}
                  alt={`${project.title} main screenshot`}
                  className="h-auto max-h-[600px] w-full object-contain"
                />
              </div>
            </div>

            {/* Smaller Screenshots */}
            <div className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:px-6">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-xl border border-white/10 bg-black"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="aspect-video h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Project Details */}
            <div className="mt-6 border-t border-white/10 p-6 sm:p-8">

              <div className="flex flex-col justify-between gap-5 sm:flex-row">

                <div>
                  <p className="mb-2 text-sm text-sky-400">
                    Web Application
                  </p>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

              </div>

              <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
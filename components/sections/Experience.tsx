const experiences = [
  {
    role: "Experience Title",
    company: "Company / Organization",
    period: "2026",
    description:
      "Details about your experience will be added here.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full overflow-hidden bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My Experience
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            My professional experience, internships, and other
            learning opportunities.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-sky-400">
                    {experience.company}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  {experience.period}
                </p>
              </div>

              <p className="mt-5 leading-7 text-gray-400">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
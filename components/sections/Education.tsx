const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Dr.T.Thimmaiah Institute of Technology",
    period: "2023 – 2027",
    description:
      "Currently pursuing a Bachelor of Engineering in Computer Science Engineering.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full overflow-hidden bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Education
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My Education
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            My academic journey and educational background.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-sky-400">
                    {item.institution}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  {item.period}
                </p>

              </div>

              <p className="mt-5 leading-7 text-gray-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
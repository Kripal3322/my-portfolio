export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-sky-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A Little About Me
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">

          {/* About text */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <p className="text-lg leading-8 text-gray-300">
              I am a Computer Science Engineering student with a strong
              interest in software development, machine learning, and
              artificial intelligence.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I enjoy building practical applications that solve
              real-world problems while continuously improving my
              technical and problem-solving skills.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I am particularly interested in developing useful software
              solutions and exploring modern technologies across web
              development, data analytics, and machine learning.
            </p>

          </div>

          {/* Interests */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <h3 className="text-2xl font-semibold">
              What I&apos;m Interested In
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="flex gap-3 text-gray-300">
                <span className="text-sky-400">→</span>
                Machine Learning & Artificial Intelligence
              </li>

              <li className="flex gap-3 text-gray-300">
                <span className="text-sky-400">→</span>
                Full Stack Web Development
              </li>

              <li className="flex gap-3 text-gray-300">
                <span className="text-sky-400">→</span>
                Data Analytics
              </li>

              <li className="flex gap-3 text-gray-300">
                <span className="text-sky-400">→</span>
                Building practical software solutions
              </li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}
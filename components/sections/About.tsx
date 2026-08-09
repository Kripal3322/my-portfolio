export default function About() {
  return (
    <section
      id="about"
      className="bg-[#030712] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            A little about me
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-lg leading-8 text-gray-400">
              I am a Computer Science Engineering student with a strong
              interest in software development, machine learning, and
              artificial intelligence.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I enjoy building practical applications that solve real-world
              problems while continuously improving my skills in modern
              technologies and software development.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-xl font-semibold">
              What I&apos;m interested in
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li>• Machine Learning & Artificial Intelligence</li>
              <li>• Full Stack Web Development</li>
              <li>• Data Analytics</li>
              <li>• Building practical software solutions</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
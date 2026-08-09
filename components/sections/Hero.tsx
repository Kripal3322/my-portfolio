export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 text-white sm:px-6"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-5xl text-center">

        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-sky-400">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Kripal Naidu
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
          Computer Science Engineering Student
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          Passionate about Machine Learning, Artificial Intelligence,
          software development, and building practical solutions to
          real-world problems.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#projects"
            className="rounded-full bg-sky-500 px-7 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-3 font-medium text-gray-200 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            Contact Me
          </a>

        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs text-gray-500 transition hover:text-gray-300"
          >
            <span>Scroll to explore</span>
            <span className="text-lg">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
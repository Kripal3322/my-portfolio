export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Kripal Naidu
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-300 sm:text-3xl">
          Computer Science Engineering Student
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Passionate about Machine Learning, Artificial Intelligence,
          and building modern web applications.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-7 py-3 font-medium text-white transition hover:bg-sky-400"
          >
            Contact Me
          </a>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View Resume
          </a>

        </div>

      </div>
    </section>
  );
}
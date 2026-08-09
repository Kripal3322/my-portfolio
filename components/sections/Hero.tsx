export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-20 text-white sm:px-6"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">

            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-sky-500/60 shadow-xl shadow-sky-500/20 sm:h-80 sm:w-80 bg-gray-800">
              <img
                src="/images/profile/profile.jpeg"
                alt="Kripal Naidu S"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Small badge */}
            <div className="absolute bottom-3 right-3 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              CSE Student
            </div>

          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-sky-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Kripal Naidu S
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Computer Science Engineering Student
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
            Passionate about Machine Learning, Artificial Intelligence,
            software development, and building practical solutions to
            real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">

            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-7 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-600 px-7 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:text-sky-400"
            >
              Contact Me
            </a>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-center text-xs text-gray-500 sm:block">
        <p>Scroll to explore</p>
        <span className="mt-2 block text-lg">↓</span>
      </div>
    </section>
  );
}
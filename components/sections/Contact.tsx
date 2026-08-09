export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let&apos;s connect
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Have a project, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-2xl font-semibold">
              Get in touch
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-gray-300">
                  srinivasannaidu666@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-gray-300">
                  India
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <form className="space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-400"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
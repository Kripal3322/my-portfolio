export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kripal Naidu. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition hover:text-sky-400"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-sm text-gray-400 transition hover:text-sky-400"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
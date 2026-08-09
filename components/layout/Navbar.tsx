import Link from "next/link";
import { Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white transition hover:text-blue-400"
        >
          {"<KN />"}
        </Link>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 text-gray-300 md:flex">
          <li>
            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="transition hover:text-blue-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#education" className="transition hover:text-blue-400">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-white"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Resume
          </a>

          <button
            className="rounded-full p-2 text-gray-300 transition hover:bg-gray-800 hover:text-white"
            aria-label="Toggle Theme"
          >
            <Moon size={20} />
          </button>

        </div>
      </div>
    </nav>
  );
}
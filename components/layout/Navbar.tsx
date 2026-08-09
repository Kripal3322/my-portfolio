"use client";

import Link from "next/link";
import { Moon, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold text-white transition hover:text-sky-400 sm:text-2xl"
        >
          {"<KN />"}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 lg:flex">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 transition hover:scale-110 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/kripal-naidu-192945374/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 transition hover:scale-110 hover:text-sky-400"
          >
            <FaLinkedin size={20} />
          </a>

          <button
            type="button"
            aria-label="Theme"
            className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            <Moon size={19} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#030712]/95 px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-gray-300 transition hover:text-sky-400"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-5 border-t border-white/10 pt-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={21} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-sky-400"
              >
                <FaLinkedin size={21} />
              </a>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
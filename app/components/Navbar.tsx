"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-cyan-400 hover:text-white transition duration-300"
        >
          Abhishek Guda
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-white">

          <a
            href="#about"
            className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}
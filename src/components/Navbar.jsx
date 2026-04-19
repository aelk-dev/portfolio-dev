import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons8-hibiscus-64.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-linear-to-r from-fuchsia-300 via-rose-400 to-purple-500 backdrop-blur-2xl border border-white/20 px-8 h-20 rounded-full flex items-center justify-between gap-12 shadow-2xl ring-1 ring-black/5">
      {/* Logo */}
      <div className="px-4 sm:px-6 lg:px-3">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </div>
          <span className="text-2xl font-bold bg-linear-to-r from-black to-blue-800 bg-clip-text text-transparent">
            FolioDev<span className="text-orange-600">.</span>
          </span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-bold uppercase tracking-widest">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-slate-200 hover:text-blue-600 font-semibold transition"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#hireme"
          className="bg-indigo-800 text-white px-6 py-3 h-10 rounded-full text-xs font-black uppercase whitespace-nowrap transition-all shadow-xl hover:scale-105 active:scale-95 shadow-indigo-900/20 hover:-translate-y-0.5"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Button */}
      <button onClick={() => setOpen(!isOpen)} class="md:hidden p-2 text-white">
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M12 12h8M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu (logique ajoutée sans casser ton design) */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 left-1/2 -translate-x-1/2 w-[92%] md:hidden
        bg-linear-to-br from-fuchsia-300/30 via-rose-400/30 to-purple-500/30
        backdrop-blur-3xl border border-white/30
        rounded-3xl p-8 shadow-2xl space-y-6
        transition-all duration-300 origin-top
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block text-xl font-bold text-indigo-950 hover:text-indigo-700 transition text-center"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#hireme"
          onClick={() => setOpen(false)}
          className="block w-full text-center bg-indigo-900/90 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition border border-white/10"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

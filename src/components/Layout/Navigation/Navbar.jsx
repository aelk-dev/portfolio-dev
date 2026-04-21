import { useState } from "react";
import { Download } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="
      fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 
      bg-linear-to-r from-fuchsia-300 via-rose-400 to-purple-500 
      backdrop-blur-2xl border border-white/20 px-8 h-20 rounded-full 
      flex items-center justify-between gap-12 shadow-2xl ring-1 ring-black/5
    ">
      
      <Logo />

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-6 lg:gap-10 text-sm font-bold uppercase tracking-widest -ml-9">
        <NavLinks />

        <ThemeToggle />

        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex items-center gap-2
          bg-indigo-800 text-white 
          px-6 py-3 h-10 rounded-full 
          text-xs font-black uppercase 
          whitespace-nowrap transition-all 
          shadow-xl hover:scale-105 active:scale-95 
          shadow-indigo-900/20 hover:-translate-y-0.5
          "
        >
          <Download size={16} />
          Resume
        </a>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center gap-3">
        <ThemeToggle />

        <button onClick={() => setOpen(!isOpen)} className="p-2 text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M12 12h8M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-[92%] lg:hidden
        bg-linear-to-br from-fuchsia-300/90 via-rose-400/90 to-purple-500/90
        backdrop-blur-3xl border border-white/90
        rounded-3xl p-8 shadow-2xl space-y-6
        transition-all duration-300 origin-top
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>

        <div className="flex flex-col gap-6 text-center text-xl font-bold">
          <NavLinks onClick={() => setOpen(false)} />
        </div>

        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="
          flex items-center justify-center gap-2
          w-full text-center 
          bg-indigo-900/90 text-white py-4 
          rounded-2xl font-black text-lg shadow-xl 
          hover:scale-105 active:scale-95 
          transition border border-white/10
          "
        >
          <Download size={18} />
          Resume
        </a>
      </div>
    </nav>
  );
}; 

export default Navbar;
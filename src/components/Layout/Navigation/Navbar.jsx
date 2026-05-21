// ✅ VERSION OPTIMALE
import { useState } from "react";
import { Download } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import useActiveSection from "../../../hooks/useActiveSection";

const RESUME_URL = "/Aya_ElHakkouni_CV_FE_.pdf";

// Composant réutilisable pour le bouton CV
const ResumeButton = ({ className = "", variant = "desktop" }) => (
  <a
    href={RESUME_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center gap-2
      bg-indigo-800 text-white 
      font-black uppercase whitespace-nowrap transition-all 
      shadow-xl hover:scale-105 active:scale-95 
      shadow-indigo-900/20 hover:-translate-y-0.5
      ${variant === "desktop" ? "px-6 py-3 h-10 rounded-full text-xs" : "w-full py-4 rounded-2xl text-lg"}
      ${className}
    `}
  >
    <Download size={variant === "desktop" ? 16 : 18} />
    Resume
  </a>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const sectionIds = ["home", "about", "projects", "skills", "contact"];
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav
      className="
      fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 
      bg-linear-to-r from-fuchsia-300 via-rose-400 to-purple-500 
      backdrop-blur-2xl border border-white/20 px-8 h-20 rounded-full 
      flex items-center justify-between gap-12 shadow-2xl ring-1 ring-black/5
    "
    >
      <Logo />

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-6 lg:gap-10 text-sm font-bold uppercase tracking-widest -ml-9">
        <NavLinks activeSection={activeSection} />
        <ThemeToggle />
        <ResumeButton variant="desktop" />
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center gap-3">
        <ThemeToggle />
        <button
          onClick={() => setOpen(!isOpen)}
          className="p-2 text-white hover:bg-white/20 rounded-lg transition"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M12 12h8M4 18h16"
            />
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
      <div
        className={`absolute top-24 left-1/2 -translate-x-1/2 w-[92%] lg:hidden
        bg-linear-to-br from-fuchsia-300/90 via-rose-400/90 to-purple-500/90
        backdrop-blur-3xl border border-white/90
        rounded-3xl p-8 shadow-2xl space-y-6
        transition-all duration-300 origin-top
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-6 text-center text-xl font-bold">
          <NavLinks
            onClick={() => setOpen(false)}
            activeSection={activeSection}
          />
        </div>

        <ResumeButton variant="mobile" onClick={() => setOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;

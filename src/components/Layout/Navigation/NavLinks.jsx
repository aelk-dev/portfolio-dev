import { navLinks } from "../../../data/navLinks";

const NavLinks = ({ onClick, activeSection }) => {
  return (
    <>
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.replace("#", "");

        return (
          <a
            key={link.href}
            href={link.href}
            onClick={onClick}
            className="
              relative
              text-indigo-900 dark:text-white 
              font-semibold transition
              hover:text-fuchsia-300 dark:hover:text-blue-600
            "
          >
            {link.label}

            {/* Ligne active */}
            <span
              className={`
                absolute left-0 -bottom-1 h-0.5 w-full
                bg-linear-to-r from-blue-400 via-indigo-500 to-cyan-400
                transition-all duration-300
                ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
                origin-left
              `}
            />
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;

import { navLinks } from "../../../data/navLinks";

const NavLinks = ({ onClick }) => {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="
          text-indigo-900 dark:text-white 
          hover:text-fuchsia-300 dark:hover:text-blue-600 
          font-semibold transition
          "
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
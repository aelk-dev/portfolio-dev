import { Sun, Moon } from "lucide-react";
import useDarkMode from "../../../hooks/userDarkMode";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded-full bg-white/20 text-white hover:scale-110 transition"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
const HeroButtons = () => {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <a
        href="#projects"
        className="
        px-6 py-3 rounded-full font-semibold text-white
        bg-indigo-900 dark:bg-indigo-700
        hover:bg-indigo-800 dark:hover:bg-indigo-600
        shadow-lg hover:scale-105 transition
        text-center
        "
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="
        px-6 py-3 rounded-full font-semibold
        border border-indigo-900/20 dark:border-white/20
        text-indigo-900 dark:text-white
        backdrop-blur-md bg-white/20 dark:bg-white/10
        hover:scale-105 transition
        text-center
        "
      >
        Contact Me
      </a>
    </div>
  );
};

export default HeroButtons;
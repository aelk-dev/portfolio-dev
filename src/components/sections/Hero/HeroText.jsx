const HeroText = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        <span className="block text-indigo-900 dark:text-white">Hi,</span>

        <span className="block text-indigo-900 dark:text-white">
          I'm{" "}
          <span
            className="
            bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500
            bg-clip-text text-transparent
          "
          >
            Aya
          </span>
        </span>
      </h1>

      <p className="mt-4 text-lg text-indigo-900/60 dark:text-white/80 max-w-md bold">
        Full-Stack Developer passionate about building reliable and useful
        solutions.
      </p>
    </>
  );
};

export default HeroText;

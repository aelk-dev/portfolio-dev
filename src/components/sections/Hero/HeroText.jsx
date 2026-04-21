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

      <p className="mt-4 text-lg text-indigo-900/80 dark:text-white/80 max-w-md">
        I’m a software developer who enjoys building full applications from
        start to finish, including development, testing, and deployment. I like
        working across different parts of a project and learning new areas like
        DevOps, security, and software quality.
      </p>
    </>
  );
};

export default HeroText;

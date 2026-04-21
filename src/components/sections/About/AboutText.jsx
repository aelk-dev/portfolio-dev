const AboutText = () => {
  return (
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-4xl font-bold">
        About <span className="text-fuchsia-500">Me</span>
      </h2>

      <p className="text-lg text-indigo-900/80 dark:text-white/80 max-w-2xl mx-auto md:mx-0">
        I’m a full-stack developer who enjoys building complete and reliable
        applications, from idea to production.
      </p>

      <p className="text-lg text-indigo-900/80 dark:text-white/80 max-w-2xl mx-auto md:mx-0">
        I like taking ownership of projects, combining technical skills and
        problem-solving to create efficient and scalable solutions.
      </p>
    </div>
  );
};

export default AboutText;

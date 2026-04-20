import React from "react";
import avatar from "../../assets/avatar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      min-h-screen 
      flex items-center justify-center 
      px-6 pt-32
      text-indigo-900 dark:text-white
      "
    >
      <div
        className="
        max-w-6xl w-full 
        grid md:grid-cols-2 
        gap-10 items-center
        "
      >
        {/* LEFT */}
        <div className="space-y-4 text-center md:text-left">
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
            {" "}
            I’m a software developer who enjoys building full applications from
            start to finish, including development, testing, and deployment. I
            like working across different parts of a project and learning new
            areas like DevOps, security, and software quality.
          </p>
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
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <img
            src={avatar}
            alt="Aya profile"
            className="
            w-[320px] h-80
            sm:w-95 sm:h-95
            md:w-112.5 md:h-112.5
            lg:w-130 lg:h-130
            object-cover
            rounded-3xl
            shadow-2xl
            hover:scale-105 transition duration-300
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

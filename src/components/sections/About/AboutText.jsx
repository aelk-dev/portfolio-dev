import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const aboutSections = [
  {
    title: "Who I Am",
    content: (
      <>
        I am a{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          Full-Stack Developer
        </strong>{" "}
        who enjoys understanding problems, transforming ideas into concrete
        solutions, and building useful applications. For me, development is not
        only about writing code, but about understanding needs, identifying
        friction points, and creating clear, maintainable, and impactful
        solutions.
        <br />
        <br />I particularly enjoy environments where I can{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          solve real problems, transform ideas into innovative solutions, and
          learn quickly
        </strong>
        . Curious, adaptable, and solution-oriented, I enjoy contributing to
        projects with a global vision, always keeping maintainability, user
        experience, and real product impact in mind.
      </>
    ),
  },
  {
    title: "What I’m Looking For",
    content: (
      <>
        I’m looking for a{" "}
        <strong className="font-bold text-purple-500">
          Full-Stack Developer position
        </strong>
        , with a strong focus on{" "}
        <strong className="font-bold text-purple-500">
          backend development
        </strong>
        , where I can contribute to{" "}
        <strong className="font-bold text-purple-500">
          meaningful projects
        </strong>
        , collaborate with{" "}
        <strong className="font-bold text-purple-500">talented teams</strong>,
        and continue growing{" "}
        <strong className="font-bold text-purple-500">
          technically and creatively
        </strong>
        . Explore my portfolio to see how I approach problems and build
        solutions !
      </>
    ),
  },
  {
    title: "Professional Journey",
    content: (
      <>
        Through my internship at{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          Opal Solutions
        </strong>{" "}
        and various{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          academic projects
        </strong>
        , I’ve had the chance to work on{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          real-world
        </strong>{" "}
        applications, from backend systems and databases to frontend interfaces
        and automated testing. I like being involved in the full process of a
        product: understanding the problem, designing the solution, and making
        it work smoothly in production.
      </>
    ),
  },
  {
    title: "Key Projects",
    content: (
      <>
        •{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          FolioDev Portfolio
        </strong>
        <br />
        My personal project to showcase my work, designed to be modern,
        responsive, and clear, giving visitors an inside look at my skills and
        approach.
        <br />
        <br />•{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          IP Access Management System (Opal Solutions)
        </strong>
        <br />
        I simplified a complex system for managing internal and external access
        rights. Previously, everything was manual and difficult to manage. I
        implemented an automated system with a cron job and bidirectional
        synchronization, creating a secure and reliable workflow that made
        updates faster and reduced the risk of errors.
        <br />
        <br />•{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          Automated Testing System Improvement (Opal Solutions)
        </strong>
        <br />
        During a technical migration to Docker, the company’s automated testing
        system stopped working properly, making it harder to detect issues early
        in development. I restored and improved the testing framework, ensuring
        tests could run smoothly again and helping the team identify bugs faster
        and maintain code quality.
        <br />
        <br />•{" "}
        <strong className="font-bold bg-clip-text bg-linear-to-r text-purple-500">
          BetterBusiness Evaluation Platform (Academic project)
        </strong>
        <br />
        I helped build an automated scoring system for companies, including
        interactive visualizations and features for contract management, making
        the platform intuitive and efficient.
        <br />
        <br />
      </>
    ),
  },
  {
    title: "My Skills",
    content: (
      <>
        I mainly focus on{" "}
        <strong className="font-bold text-purple-500">
          backend development
        </strong>
        , while also enjoying frontend development and automated testing. Over
        time, I’ve worked with a wide range of technologies, but the tools I
        feel the most confident working with today include:
        <br />
        <br />
        <strong className="font-bold text-purple-500">Java</strong> •{" "}
        <strong className="font-bold text-purple-500">Spring Boot</strong> •{" "}
        <strong className="font-bold text-purple-500">TypeScript</strong> •{" "}
        <strong className="font-bold text-purple-500">Node.js</strong> •{" "}
        <strong className="font-bold text-purple-500">Express.js</strong> •{" "}
        <strong className="font-bold text-purple-500">React</strong> •{" "}
        <strong className="font-bold text-purple-500">PostgreSQL</strong> •{" "}
        <strong className="font-bold text-purple-500">Docker</strong> •{" "}
        <strong className="font-bold text-purple-500">Cypress</strong> •{" "}
        <strong className="font-bold text-purple-500">OpenAPI</strong> •{" "}
        <strong className="font-bold text-purple-500">REST APIs</strong>
        <br />
        <br />
        To explore the full range of technologies I’ve learned and used
        throughout my journey, feel free to check out the{" "}
        <a
          href="#skills"
          className="
          font-bold text-purple-500
          hover:text-fuchsia-400
          transition-colors
          underline underline-offset-4
        "
        >
          Tech Stack
        </a>{" "}
        section below.
      </>
    ),
  },
  {
    title: "Who I Am Beyond Coding",
    content: (
      <>
        Outside of programming, I enjoy{" "}
        <strong className="font-bold text-purple-500">swimming</strong>,{" "}
        <strong className="font-bold text-purple-500">boxing</strong>,{" "}
        <strong className="font-bold text-purple-500">rollerblading</strong>,
        and challenging myself with{" "}
        <strong className="font-bold text-purple-500">chess</strong>. These
        hobbies reflect my{" "}
        <strong className="font-bold text-purple-500">discipline</strong>,{" "}
        <strong className="font-bold text-purple-500">curiosity</strong>, and{" "}
        <strong className="font-bold text-purple-500">drive</strong>. Qualities
        I bring to my work as a developer.
      </>
    ),
  },
];

const AboutText = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % aboutSections.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? aboutSections.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold">
          About <span className="text-fuchsia-500">Me</span>
        </h2>
      </div>

      <div
        className="
          relative overflow-hidden
          rounded-4xl
          border border-white/10
          bg-white/10 dark:bg-white/5
          backdrop-blur-2xl
          shadow-2xl
          p-8 md:p-10
          min-h-80
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            <span className="text-fuchsia-500 text-sm uppercase tracking-[0.2em]">
              {String(index + 1).padStart(2, "0")} / {aboutSections.length}
            </span>

            <h3 className="text-2xl font-bold">{aboutSections[index].title}</h3>

            <p className="text-lg leading-8 text-indigo-900/80 dark:text-white/80">
              {aboutSections[index].content}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-10">
          <button
            onClick={prevSlide}
            className="
              p-3 rounded-full
              bg-white/10 hover:bg-white/20
              border border-white/10
              transition
            "
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-2">
            {aboutSections.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${i === index ? "w-10 bg-fuchsia-500" : "w-2 bg-white/20"}
                `}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="
              p-3 rounded-full
              bg-white/10 hover:bg-white/20
              border border-white/10
              transition
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutText;

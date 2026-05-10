import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const aboutSections = [
  {
    title: "Who I Am",
    content: (
      <>
        I am a <strong>Full-Stack Developer</strong> who enjoys understanding
        problems, transforming ideas into concrete solutions, and building
        useful applications. For me, development is not only about writing code,
        but about understanding needs, identifying friction points, and creating
        clear, maintainable, and impactful solutions.
      </>
    ),
  },
  {
    title: "Education & Foundation",
    content: (
      <>
        Throughout my studies at the{" "}
        <strong>Haute École Léonard de Vinci</strong>, as well as through
        academic and professional experiences, I developed a versatile approach
        to software development — from UI design and backend logic to databases,
        automated testing, and technical environments.
      </>
    ),
  },
  {
    title: "Professional Experience",
    content: (
      <>
        During my internship at <strong>Opal Solutions</strong>, I worked on
        real-world challenges related to access security and application
        reliability. I contributed to the digitization of an IP-based access
        management system by building a centralized solution that reduced the
        complexity of managing IP changes, improved system coordination through
        data synchronization, and automated key operational processes.
        <br />
        <br />I also helped restore and enhance automated testing after a{" "}
        <strong>Docker</strong> migration by refactoring{" "}
        <strong>Cypress</strong> tests and proposing a more sustainable testing
        approach. This work improved the reliability of the test suite, reduced
        manual intervention, and made the testing process more stable and
        maintainable over time.
      </>
    ),
  },
  {
    title: "Academic Experience",
    content: (
      <>
        One of the most significant experiences in my academic journey was my
        final year project, carried out in collaboration with the company{" "}
        <strong>BetterBusiness</strong>,
        <br />
        This project gave me the opportunity to work on a real-world business
        problem and contribute to building a system capable of evaluating and
        awarding quality labels to companies based on structured criteria. It
        allowed me to go beyond implementation and focus on delivering a
        solution that is meaningful, reliable, and usable in a real context.
        <br />
        <br />
        During my <strong>final year project</strong>, I explored technologies
        such as <strong>Python</strong> and <strong>Django ORM</strong>, working
        on business logic, score calculations, visual reporting with charts, and
        designing a smooth and user-friendly interface. My contribution helped
        make the evaluation process more structured, transparent, and easier to
        interpret for users through clear scoring rules and visual insights.
        <br />
        <br />
        Overall, this project strengthened my ability to transform complex
        requirements into a complete application, combining backend logic, data
        processing, and user experience to deliver a functional and coherent
        product.
        <br />
        <br />
        For more information, please feel free to contact me
      </>
    ),
  },
  {
    title: "Mindset",
    content: (
      <>
        I particularly enjoy environments where I can{" "}
        <strong>
          solve real problems, transform ideas into innovative solutions, and
          learn quickly
        </strong>
        . Curious, adaptable, and solution-oriented, I enjoy contributing to
        projects with a global vision, always keeping maintainability, user
        experience, and real product impact in mind.
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

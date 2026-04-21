import SectionWrapper from "../../ui/SectionWrapper";
import SkillsGrid from "../Skills/SkillsGrid";

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl font-bold text-center">
          My <span className="text-fuchsia-500">Tech Stack</span>
        </h2>

        <p className="text-center text-indigo-900/70 dark:text-white/70 max-w-2xl mx-auto">
          A versatile stack covering full-stack development, DevOps, and modern
          software engineering practices.
        </p>

        <SkillsGrid />
      </div>
    </SectionWrapper>
  );
};

export default Skills;

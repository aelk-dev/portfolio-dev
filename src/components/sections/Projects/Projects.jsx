import SectionWrapper from "../../ui/SectionWrapper";
import ProjectsGrid from "../Projects/ProjectGrid";

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl font-bold text-center">
          My <span className="text-fuchsia-500">Projects</span>
        </h2>

        <p className="text-center text-indigo-900/70 dark:text-white/70 max-w-2xl mx-auto">
          A selection of projects showcasing my full-stack development skills.
        </p>

        <ProjectsGrid />
      </div>
    </SectionWrapper>
  );
};

export default Projects;

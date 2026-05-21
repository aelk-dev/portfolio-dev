import { projects } from "../../../data/projects";
import ProjectCard from "../Projects/ProjectCard";

const ProjectsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;

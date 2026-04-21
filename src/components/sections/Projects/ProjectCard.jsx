import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="
        group relative p-6 rounded-3xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-white/10
        shadow-xl
        overflow-hidden
      "
    >
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-linear-to-br from-fuchsia-500/20 to-purple-500/20
        transition duration-500
      "
      />

      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="text-sm text-indigo-900/70 dark:text-white/70">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-white/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.github}
            className="text-sm font-semibold hover:text-fuchsia-400"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            className="text-sm font-semibold hover:text-fuchsia-400"
          >
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

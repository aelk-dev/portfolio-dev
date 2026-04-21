import { motion } from "framer-motion";

const SkillCard = ({ group, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="
        h-full p-7 rounded-3xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-white/10
        shadow-xl
        flex flex-col
      "
    >
      <h3 className="text-xl font-bold mb-5">{group.category}</h3>

      <div className="flex flex-wrap gap-2">
        {group.items.map((item, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-sm rounded-full
              bg-white/20 dark:bg-white/10
              hover:scale-105 transition
            "
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;

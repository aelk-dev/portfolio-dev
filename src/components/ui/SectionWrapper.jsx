import { motion } from "framer-motion";

const SectionWrapper = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100, scale: 0.96, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, margin: "-120px" }}
      className="
        relative
        min-h-screen 
        scroll-mt-32
        flex items-center justify-center
        px-6
        overflow-hidden
        text-indigo-900 dark:text-white
      "
    >
      {/* Glow background */}
      <div
        className="
        pointer-events-none
        absolute inset-0
        bg-linear-to-br 
        from-cyan-400/10 via-transparent to-purple-500/10
        opacity-30
        group-hover:opacity-100
        transition duration-700
      "
      />

      {/* Animation */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-2/3 h-0.5
          bg-linear-to-r 
          from-transparent via-cyan-400 to-transparent
          blur-sm
        "
      />

      {/* Animation - pulse */}
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-1/3 h-1
          bg-cyan-400
          blur-xl
        "
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;

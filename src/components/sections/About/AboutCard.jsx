// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code, Rocket, Brain } from "lucide-react";

const cards = [
  {
    icon: Code,
    title: "Full-Stack Mindset",
    desc: "Comfortable working across frontend and backend to build complete applications.",
  },
  {
    icon: Rocket,
    title: "End-to-End Projects",
    desc: "I enjoy taking a project from idea to deployment with clean and structured code.",
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    desc: "Always improving, exploring new technologies and refining my development approach.",
  },
];

const AboutCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
              relative p-6 rounded-3xl
              bg-white/10 dark:bg-white/5
              backdrop-blur-2xl
              border border-white/10
              shadow-2xl
              group overflow-hidden
            "
          >
            {/* Glow effect */}
            <div
              className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-linear-to-br from-fuchsia-500/20 to-purple-500/20
              transition duration-500
            "
            />

            <div className="relative z-10 space-y-4">
              <Icon className="w-8 h-8 text-fuchsia-500" />

              <h3 className="text-xl font-bold">{card.title}</h3>

              <p className="text-sm text-indigo-900/70 dark:text-white/70">
                {card.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutCards;

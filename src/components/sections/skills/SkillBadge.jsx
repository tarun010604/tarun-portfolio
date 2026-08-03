import { motion } from "framer-motion";

export default function SkillBadge({ skill }) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        cursor-default
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-blue-200
        transition-all
        duration-300
        hover:border-blue-500
        hover:bg-blue-500
        hover:text-white
      "
    >
      {skill}
    </motion.span>
  );
}
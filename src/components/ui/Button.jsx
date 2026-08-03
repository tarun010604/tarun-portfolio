import { motion } from "framer-motion";

export default function Button({
  children,
  primary = true,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -4,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      onClick={onClick}
      className={`
        group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        px-8
        py-4
        font-semibold
        text-base
        transition-all
        duration-300
        ${
          primary
            ? `
              bg-gradient-to-r
              from-blue-600
              via-blue-500
              to-cyan-500
              text-white
              shadow-lg
              shadow-blue-500/30
              hover:shadow-blue-500/50
            `
            : `
              border
              border-white/10
              bg-white/5
              text-white
              backdrop-blur-xl
              hover:border-blue-500
              hover:bg-white/10
              hover:shadow-lg
              hover:shadow-blue-500/20
            `
        }
      `}
    >
      {children}
    </motion.button>
  );
}
import { motion } from "framer-motion";

export default function GradientText({
  children,
  className = "",
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-violet-500
      bg-clip-text
      text-transparent
      ${className}
      `}
    >
      {children}
    </motion.span>
  );
}
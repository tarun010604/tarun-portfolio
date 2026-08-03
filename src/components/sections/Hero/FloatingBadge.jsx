import { motion } from "framer-motion";

export default function FloatingBadge({
  icon,
  label,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
      className={`
        absolute
        ${className}
      `}
    >
      <div
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          bg-slate-900/70
          backdrop-blur-xl
          px-4
          py-3
          shadow-xl
          shadow-blue-500/10
        "
      >
        {icon}

        <span className="font-medium">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
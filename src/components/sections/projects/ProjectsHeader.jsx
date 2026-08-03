import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="uppercase tracking-[6px] text-blue-400">
        Portfolio
      </p>

      <h2 className="text-5xl font-bold mt-4">
        Featured Project
      </h2>

      <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
        A real-world Java Full Stack application showcasing backend
        development, database design, authentication, payment workflow,
        email integration and responsive user interface.
      </p>
    </motion.div>
  );
}
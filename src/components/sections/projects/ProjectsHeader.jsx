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
        Projects
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-slate-400">
        A collection of projects showcasing my expertise in Java Full Stack
        development, frontend development, and modern web application design.
      </p>

    </motion.div>
  );
}
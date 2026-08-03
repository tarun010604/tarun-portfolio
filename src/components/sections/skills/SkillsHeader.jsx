import { motion } from "framer-motion";

export default function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20 text-center"
    >
      <p className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-400">
        Technical Skills
      </p>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        My Technology Stack
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        My technical expertise spans backend development, frontend
        technologies, databases, development tools, and software engineering
        concepts used to build scalable and modern applications.
      </p>
    </motion.div>
  );
}
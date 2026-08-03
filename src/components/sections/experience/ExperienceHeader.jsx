import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <p className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-400">
        Experience
      </p>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        Internship Experience
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        During my internship, I worked on enterprise application development,
        collaborated with the development team, and built a real-world Java Full
        Stack application following industry practices.
      </p>
    </motion.div>
  );
}
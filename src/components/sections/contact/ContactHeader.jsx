import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <p className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-400">
        Contact
      </p>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        Let's Work Together
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        I'm actively seeking Java Full Stack Developer, Software Developer opportunities.
        Whether you have a job opening, internship, or collaboration,
        I'd be happy to connect with you
      </p>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { about } from "../../../data/about";

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <p className="uppercase tracking-[6px] text-blue-400 mb-4">
        Get To Know Me
      </p>

      <h2 className="text-5xl font-bold mb-6">
        {about.title}
      </h2>

      <p className="text-slate-400 leading-8 text-lg">
        {about.subtitle}
      </p>
    </motion.div>
  );
}
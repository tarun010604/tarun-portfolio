import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import GlassCard from "../../ui/GlassCard";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <GlassCard className="overflow-hidden h-full">

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">

          {/* Category */}
          <p className="text-blue-400 font-medium">
            {project.category}
          </p>

          {/* Title */}
          <h2 className="text-3xl font-bold mt-2">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-4 text-slate-400 leading-7">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-6">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white"
            >
              <FaGithub />
              GitHub
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}

            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center gap-2 rounded-xl border border-blue-500 px-5 py-3 font-semibold text-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              View Details →
            </Link>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}
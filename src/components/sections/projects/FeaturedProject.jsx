import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlassCard from "../../ui/GlassCard";
import { featuredProject } from "../../../data/projects";
import { lazy } from "react";

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <GlassCard
  className="
    overflow-hidden
    border
    border-white/10
    shadow-[0_0_80px_rgba(59,130,246,.18)]
    transition-all
    duration-500
    hover:shadow-[0_0_100px_rgba(59,130,246,.30)]
  "
>

        {/* Screenshot */}
        <div className="relative">
        <img
  src={featuredProject.image}
  alt={featuredProject.title}
  loading="lazy"
  className="
    h-[450px]
    w-full
    object-cover
    transition-all
    duration-700
    hover:scale-105
  "
/>

          <div className="absolute top-6 left-6">
           <span
  className="
    rounded-full
    bg-gradient-to-r
    from-yellow-400
    to-orange-500
    px-5
    py-2
    text-sm
    font-semibold
    text-black
    shadow-lg
  "
>
              ⭐ Featured Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-10">

          <p className="text-blue-400 font-medium">
            {featuredProject.category}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {featuredProject.title}
          </h2>

          {/* Overview */}
          <div className="mt-10">
            <h3
  className="
    mb-4
    inline-block
    rounded-full
    bg-blue-500/10
    px-4
    py-2
    text-xl
    font-semibold
    text-blue-300
  "
>📖 Overview</h3>

            <p className="text-slate-400 leading-8">
              {featuredProject.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">
              ❗ Problem
            </h3>

            <p className="text-slate-400 leading-8">
              {featuredProject.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">
              💡 Solution
            </h3>

            <p className="text-slate-400 leading-8">
              {featuredProject.solution}
            </p>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-5">
              🚀 Key Features
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {featuredProject.features.map((feature) => (
                <div
                  key={feature}
                 className="
rounded-2xl
border
border-white/10
bg-white/5
p-5
transition-all
duration-300
hover:-translate-y-2
hover:border-blue-500
hover:bg-blue-500/10
hover:shadow-lg
hover:shadow-blue-500/20
"
                >
                  ✅ {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-5">
              🛠 Technology Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
rounded-full
border
border-blue-500/30
bg-blue-500/10
px-5
py-2
font-medium
text-blue-300
transition-all
duration-300
hover:bg-blue-500
hover:text-white
"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-5">
              📚 What I Learned
            </h3>

            <ul className="grid gap-4 md:grid-cols-2">
              {featuredProject.learning.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-12">
  <a
    href={featuredProject.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
  >
    <FaGithub className="text-xl" />
    View Source Code
  </a>
</div>
          <p className="mt-8 text-sm text-slate-500">
            📷 More screenshots and complete implementation details are available in the GitHub repository.
          </p>

        </div>

      </GlassCard>
    </motion.div>
  );
}
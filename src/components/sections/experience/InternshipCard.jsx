import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import GlassCard from "../../ui/GlassCard";
import { experience } from "../../../data/experience";

export default function InternshipCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <GlassCard
  className="
    p-10
    border
    border-white/10
    shadow-[0_0_80px_rgba(59,130,246,.15)]
    transition-all
    duration-500
    hover:shadow-[0_0_100px_rgba(59,130,246,.25)]
  "
>

        {/* Company */}
        <div className="flex flex-wrap justify-between gap-6">

          <div>
            <div className="flex flex-wrap items-center gap-4">

  <span className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-400">
    Internship
  </span>

  <h2 className="text-3xl font-bold">
    {experience.role}
  </h2>

</div>

            <div className="mt-5 flex items-center gap-3 text-blue-400">
              <FaBuilding />
              {experience.company}
            </div>

           <div className="mt-3 flex items-center gap-3 text-slate-400">
              <FaMapMarkerAlt />
              {experience.location}
            </div>

            <div className="flex items-center gap-2 mt-2 text-slate-400">
              <FaCalendarAlt />
              {experience.duration}
            </div>

          </div>

        </div>

        {/* Project */}

        <div className="mt-10">

          <h3 className="text-2xl font-semibold mb-3">
            Internship Project
          </h3>

          <p className="inline-block rounded-full bg-blue-500/10 px-5 py-2 font-medium text-blue-400">
            {experience.project}
          </p>

        </div>

        {/* Overview */}

        <div className="mt-8">

          <h3 className="text-2xl font-semibold mb-3">
            Overview
          </h3>

          <p className="text-slate-400 leading-8">
            {experience.description}
          </p>

        </div>

        {/* Contributions */}

        <div className="mt-10">

          <h3 className="text-2xl font-semibold mb-5">
            Key Contributions
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {experience.responsibilities.map((item) => (

              <div
                key={item}
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
                ✔ {item}
              </div>

            ))}

          </div>

        </div>

        {/* Technologies */}

        <div className="mt-10">

          <h3 className="text-2xl font-semibold mb-5">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-3">

            {experience.technologies.map((tech) => (

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

      </GlassCard>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  School,
  CheckCircle2,
} from "lucide-react";

import GlassCard from "../../ui/GlassCard";
import { about } from "../../../data/about";

export default function AboutCards() {
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* Education */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <GlassCard className="h-full p-8">

          <div className="mb-10 flex items-center gap-3">

            <GraduationCap
              className="text-blue-400"
              size={30}
            />

            <h3 className="text-3xl font-bold">
              Education
            </h3>

          </div>

          <div className="space-y-10">

            {about.education.map((edu, index) => (

              <div
                key={index}
                className="relative border-l-2 border-blue-500 pl-8"
              >

                <div
                  className="
                    absolute
                    -left-[11px]
                    top-2
                    h-5
                    w-5
                    rounded-full
                    border-4
                    border-slate-950
                    bg-blue-500
                  "
                />

                <h4 className="text-xl font-bold text-white">
                  {edu.degree}
                </h4>

                {edu.specialization && (
                  <p className="mt-1 text-blue-300">
                    {edu.specialization}
                  </p>
                )}

                <div className="mt-4 flex items-start gap-2">

                  <School
                    size={18}
                    className="mt-1 text-cyan-400"
                  />

                  <p className="text-slate-400">
                    {edu.institution}
                  </p>

                </div>

                <div className="mt-3 flex items-center gap-2">

                  <Calendar
                    size={17}
                    className="text-green-400"
                  />

                  <span className="text-sm text-slate-300">
                    {edu.duration}
                  </span>

                </div>

                {edu.percentage && (

                  <div className="mt-4">

                    <span
                      className="
                        rounded-full
                        bg-blue-500/15
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-blue-300
                      "
                    >
                      Percentage : {edu.percentage}%
                    </span>

                  </div>

                )}

              </div>

            ))}

          </div>

        </GlassCard>

      </motion.div>

      {/* Technical Expertise */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <GlassCard className="h-full p-8">

          <h3 className="mb-8 text-3xl font-bold">
            Technical Expertise
          </h3>

          <div className="space-y-5">

            {about.experience.map((item) => (

              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-blue-500/10
                "
              >

                <CheckCircle2
                  size={22}
                  className="text-green-400"
                />

                <span className="text-slate-200">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </GlassCard>

      </motion.div>

    </div>
  );
}
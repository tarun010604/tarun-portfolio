import { motion } from "framer-motion";
import GlassCard from "../../ui/GlassCard";
import SkillBadge from "./SkillBadge";

export default function SkillCard({ category }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
  y: -8,
  scale: 1.02,
}}
    >
      <GlassCard
        className="
          h-full
          p-8
          group
          hover:border-blue-500
hover:shadow-lg
hover:shadow-blue-500/20
          transition-all
          duration-500
        "
      >
        <div className="flex items-center gap-4 mb-8">

          <div
            className="
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              shadow-lg
              shadow-blue-500/20
            "
          >
            <Icon size={28} />
          </div>

          <div>
           <h3 className="text-2xl font-bold tracking-wide">
              {category.title}
            </h3>

           <p className="mt-1 text-sm text-slate-400">
              {category.skills.length} Technologies
            </p>
          </div>

        </div>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill}
            />
          ))}
        </div>

      </GlassCard>
    </motion.div>
  );
}
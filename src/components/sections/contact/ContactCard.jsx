import { motion } from "framer-motion";
import GlassCard from "../../ui/GlassCard";

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}) {
  return (
    <motion.a
      href={href}
     whileHover={{
  y: -8,
  scale: 1.02,
}}
      transition={{ duration: 0.25 }}
      className="block h-full"
    >
      <GlassCard
  className="
    h-full
    p-6
    transition-all
    duration-300
    hover:border-blue-500
    hover:shadow-lg
    hover:shadow-blue-500/20
  "
>

        <div className="flex items-center gap-5">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

            <Icon size={24}/>

          </div>

          <div>

            <h3 className="font-semibold">
              {title}
            </h3>

            <p className="text-slate-400 mt-1 break-all">
              {value}
            </p>

          </div>

        </div>

      </GlassCard>
    </motion.a>
  );
}
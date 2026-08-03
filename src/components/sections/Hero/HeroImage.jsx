import { motion } from "framer-motion";
import GlassCard from "../../ui/GlassCard";
import profile from "../../../assets/images/profile.png";

import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Floating Java */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 -left-4"
      >
        <GlassCard className="px-4 py-3 flex items-center gap-2">
          <FaJava className="text-red-500 text-2xl" />
          <span>Java</span>
        </GlassCard>
      </motion.div>

      {/* Floating React */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute top-24 -right-6"
      >
        <GlassCard className="px-4 py-3 flex items-center gap-2">
          <FaReact className="text-cyan-400 text-2xl" />
          <span>React</span>
        </GlassCard>
      </motion.div>

      {/* Floating Spring */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-24 -left-6"
      >
        <GlassCard className="px-4 py-3 flex items-center gap-2">
          <SiSpringboot className="text-green-500 text-2xl" />
          <span>Spring</span>
        </GlassCard>
      </motion.div>

      {/* Floating MySQL */}
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
        className="absolute bottom-10 -right-8"
      >
        <GlassCard className="px-4 py-3 flex items-center gap-2">
          <SiMysql className="text-blue-400 text-2xl" />
          <span>MySQL</span>
        </GlassCard>
      </motion.div>

      {/* Main Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GlassCard
  className="
  relative
  w-[390px]
  rounded-[30px]
  border
  border-white/10
  bg-white/5
  p-6
  shadow-[0_0_80px_rgba(59,130,246,.18)]
  transition-all
  duration-500
  hover:-translate-y-2
  hover:shadow-[0_0_100px_rgba(59,130,246,.30)]
"
>

          {/* Open to Work Badge */}
          <div
  className="
  absolute
  top-5
  right-5
  rounded-full
  bg-gradient-to-r
  from-green-500
  to-emerald-500
  px-4
  py-2
  text-xs
  font-semibold
  shadow-lg
  shadow-green-500/30
"
>
  🟢 Open to Work
</div>

          {/* Profile Image */}
          <img
            src={profile}
            alt="Tarun M R"
            className="
w-full
h-[430px]
object-cover
rounded-3xl
transition-all
duration-500
hover:scale-[1.02]
"
          />

          {/* Footer */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-white">
              Tarun M R
            </h2>

            <p className="mt-2 text-slate-400">
              Java Full Stack Developer
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">

              <GlassCard className="p-3">
                <h3 className="text-xl font-bold text-blue-400">3+</h3>
                <p className="text-xs text-slate-400">Projects</p>
              </GlassCard>

              <GlassCard className="p-3">
                <h3 className="text-xl font-bold text-green-400">25+</h3>
                <p className="text-xs text-slate-400">Technologies</p>
              </GlassCard>

              <GlassCard className="p-3">
                <h3 className="text-xl font-bold text-cyan-400">200+</h3>
                <p className="text-xs text-slate-400">LeetCode</p>
              </GlassCard>

            </div>

          </div>

        </GlassCard>
      </motion.div>

    </div>
  );
}
import { motion } from "framer-motion";
import GlassCard from "../../ui/GlassCard";
import profile from "../../../assets/images/profile.png";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Main Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <GlassCard
          className="
            relative
            w-[390px]
            max-w-[90vw]
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
              z-10
              rounded-full
              bg-gradient-to-r
              from-green-500
              to-emerald-500
              px-4
              py-2
              text-xs
              font-semibold
              text-white
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
            loading="eager"
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

          {/* Profile Details */}
          <div className="mt-6 text-center">

            <h2 className="text-2xl font-bold text-white">
              Tarun M R
            </h2>

            <p className="mt-2 text-slate-400">
              Java Full Stack Developer
            </p>

            {/* Statistics */}
           

          </div>

        </GlassCard>
      </motion.div>

    </div>
  );
}
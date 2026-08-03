import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import GradientText from "../../ui/GradientText";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
// import HeroStats from "./HeroStats";

import { profile } from "../../../data/profile";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      {/* Greeting */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2"
      >
        <span className="text-lg">👋</span>

        <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
          {profile.greeting}
        </p>
      </motion.div>

      {/* Name */}

      <h1 className="text-6xl font-black leading-none sm:text-7xl lg:text-8xl">
        <GradientText>{profile.name}</GradientText>
      </h1>

      {/* Typewriter */}

      <div className="mt-8 h-12">
        <h2 className="text-2xl font-semibold text-slate-200 lg:text-3xl">
          <Typewriter
            words={profile.roles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={45}
            delaySpeed={1800}
          />
        </h2>
      </div>

      {/* Description */}

      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-400">
        {profile.description}
      </p>

      {/* Buttons */}

      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Social */}

      <div className="mt-8">
        <HeroSocials />
      </div>

      {/* Stats */}

      {/* <div className="mt-12">
        <HeroStats />
      </div> */}
    </motion.div>
  );
}
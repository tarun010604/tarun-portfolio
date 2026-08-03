import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { profile } from "../../../data/profile";

const socials = [
  {
    icon: <FaGithub />,
    link: profile.github,
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: profile.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <SiLeetcode />,
    link: profile.leetcode,
    label: "LeetCode",
  },
];

export default function HeroSocials() {
  return (
    <div className="mt-10 flex items-center gap-5">

      {socials.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          whileHover={{
            y: -5,
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="
            group
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-2xl
            text-slate-200
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500
            hover:bg-blue-600
            hover:text-white
            hover:shadow-lg
            hover:shadow-blue-500/30
          "
        >
          {item.icon}
        </motion.a>
      ))}

    </div>
  );
}
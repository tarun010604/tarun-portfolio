import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import GlassCard from "../../ui/GlassCard";
import { contact } from "../../../data/contact";

export default function SocialLinks() {
  return (
    <GlassCard className="p-8 h-full">
      <h3 className="text-2xl font-bold mb-8">
        Quick Connect
      </h3>

      <div className="space-y-5">

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500 transition-all duration-300"
        >
          <FaLinkedin size={22} className="text-blue-400" />
          <span>LinkedIn</span>
        </a>

        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500 transition-all duration-300"
        >
          <FaGithub size={22} className="text-white" />
          <span>GitHub</span>
        </a>

        <a
          href={contact.leetcode}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500 transition-all duration-300"
        >
          <SiLeetcode size={22} className="text-yellow-400" />
          <span>LeetCode</span>
        </a>

        <a
          href={contact.resume}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500 transition-all duration-300"
        >
          <FaFileAlt size={22} className="text-green-400" />
          <span>Download Resume</span>
        </a>

      </div>

    
    </GlassCard>
  );
}
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ArrowUp } from "lucide-react";

import { profile } from "../../data/profile";

const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 py-12">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold">
              {profile.name}
            </h2>

            <p className="mt-3 text-blue-400">
              Java Full Stack Developer
            </p>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Passionate about building scalable,
              responsive and user-friendly web
              applications using Java, Spring Boot,
              React and MySQL.
            </p>

            <div className="mt-8 flex gap-5">

              <a href={profile.github} target="_blank">
                <FaGithub size={24}/>
              </a>

              <a href={profile.linkedin} target="_blank">
                <FaLinkedin size={24}/>
              </a>

              <a href={profile.leetcode} target="_blank">
                <SiLeetcode size={24}/>
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {links.map((item)=>(
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-slate-400 hover:text-blue-400"
                >
                  {item}
                </Link>
              ))}

            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-slate-500">
            © 2026 Tarun M R. All Rights Reserved.
          </p>

          <motion.button
            whileHover={{
              y:-5
            }}
            onClick={() =>
              window.scrollTo({
                top:0,
                behavior:"smooth",
              })
            }
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            hover:border-blue-500
            "
          >
            Back to Top

            <ArrowUp size={18}/>
          </motion.button>

        </div>

      </div>

    </footer>
  );
}
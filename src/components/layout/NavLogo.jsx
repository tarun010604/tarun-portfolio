import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavLogo() {
  return (
    <Link
      to="home"
      smooth={true}
      duration={600}
      offset={-80}
      className="cursor-pointer"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 0.2,
        }}
        className="group select-none"
      >
        <h1
          className="
            font-['Space_Grotesk']
            text-3xl
            font-bold
            tracking-wide
            transition-all
            duration-300
          "
        >
          <span
            className="
              bg-gradient-to-r
              from-blue-400
              via-cyan-400
              to-blue-600
              bg-clip-text
              text-transparent
            "
          >
            TARUN
          </span>

          <span
            className="
              ml-2
              text-white
              transition-colors
              duration-300
              group-hover:text-blue-300
            "
          >
            M R
          </span>
        </h1>
      </motion.div>
    </Link>
  );
}
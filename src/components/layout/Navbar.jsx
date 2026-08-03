  import { useEffect, useState } from "react";
  import { motion } from "framer-motion";

  import { FaGithub, FaLinkedin } from "react-icons/fa";

  import NavLogo from "./NavLogo";
  import NavLinks from "./NavLinks";
  import MobileMenu from "./MobileMenu";
  import Container from "../ui/Container";
import { Mail } from "lucide-react";


  export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          border-b
          border-white/10
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-slate-950/90 shadow-2xl py-2"
              : "bg-slate-950/60 py-4"
          }
        `}
      >
        <Container>
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-300
              ${scrolled ? "h-16" : "h-20"}
            `}
          >
            {/* Logo */}
            <NavLogo />

            {/* Desktop Navigation */}
            <NavLinks />

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/tarun010604"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-blue-500
                  hover:bg-blue-600
                  hover:shadow-lg
                  hover:shadow-blue-500/30
                "
              >
                <FaGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tarun-mr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-blue-500
                  hover:bg-blue-600
                  hover:shadow-lg
                  hover:shadow-blue-500/30
                "
              >
                <FaLinkedin size={18} />
              </a>

              {/* Theme Toggle */}

              {/* Email */}
<a
  href="mailto:tarun010604@gmail.com"
  aria-label="Email"
  className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    border
    border-white/10
    bg-white/5
    transition-all
    duration-300
    hover:scale-110
    hover:border-blue-500
    hover:bg-blue-600
    hover:shadow-lg
    hover:shadow-blue-500/30
  "
>
  <Mail size={18} />
</a>
             
            </div>

            {/* Mobile Menu */}
            <MobileMenu />

          </div>
        </Container>
      </motion.header>
    );
  }
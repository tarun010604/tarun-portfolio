import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">

      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
          text-white
          transition-all
          duration-300
          hover:border-blue-500
          hover:bg-blue-600
        "
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              left-4
              right-4
              top-[calc(100%+8px)]
              rounded-2xl
              border
              border-white/10
              bg-slate-950/95
              p-4
              shadow-2xl
              backdrop-blur-xl
            "
          >
            <nav>
              <ul className="flex flex-col gap-2">
                {links.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={handleLinkClick}
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-slate-300
                        transition-all
                        duration-300
                        hover:bg-blue-600/20
                        hover:text-white
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
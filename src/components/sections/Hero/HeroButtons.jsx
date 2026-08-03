import { FaDownload, FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

import Button from "../../ui/Button";
import { profile } from "../../../data/profile";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-5">

      {/* View Projects */}
      <Link
        to="projects"
        smooth={true}
        duration={600}
        offset={-80}
      >
        <Button>
          <span className="flex items-center gap-2">
            View Projects
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </Link>

      {/* Resume */}
      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button primary={false}>
          <span className="flex items-center gap-2">
            <FaDownload className="text-sm" />
            Download Resume
          </span>
        </Button>
      </a>

    </div>
  );
}
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Container from "../ui/Container";

export default function ProjectNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <Container>

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-bold text-white"
          >
            TARUN M R
          </Link>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <Link
              to="/#projects"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              ← Back to Portfolio
            </Link>

            <a
              href="https://github.com/tarun010604"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-blue-500 hover:bg-blue-600 transition"
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </Container>
    </header>
  );
}
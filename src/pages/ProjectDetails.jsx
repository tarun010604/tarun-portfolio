import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";

import Background from "../components/effects/Background";
import ProjectNavbar from "../components/layout/ProjectNavbar";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import GlassCard from "../components/ui/GlassCard";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, []);
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Background />
        <ProjectNavbar />

        <div className="min-h-screen flex items-center justify-center text-white text-3xl">
          Project not found
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Background />
     <ProjectNavbar />

      <section className="pt-36 pb-24">

        <Container>

          <GlassCard className="overflow-hidden">

            {/* Header */}

            <div className="p-10">

              <button
  onClick={() => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
  className="inline-block text-blue-400 hover:text-cyan-400 transition"
>
  ← Back to Projects
</button>

              <p className="mt-8 text-blue-400 font-medium uppercase tracking-widest">
                {project.category}
              </p>

              <h1 className="mt-3 text-5xl font-bold text-white">
                {project.title}
              </h1>

              <p className="mt-6 text-lg text-slate-400 leading-8 max-w-4xl">
                {project.shortDescription}
              </p>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  <FaGithub />

                  GitHub

                </a>

                {project.live && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-blue-500"
                  >
                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                )}

              </div>

            </div>

            {/* Hero Image */}

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[520px] object-cover"
            />

            <div className="p-10">

              {/* Overview */}

              <section className="mb-14">

                <h2 className="text-3xl font-bold mb-5">
                  📖 Overview
                </h2>

                <p className="text-slate-400 leading-9">
                  {project.overview}
                </p>

              </section>

              {/* Problem */}

              {project.problem && (

                <section className="mb-14">

                  <h2 className="text-3xl font-bold mb-5">
                    ❗ Problem
                  </h2>

                  <p className="text-slate-400 leading-9">
                    {project.problem}
                  </p>

                </section>

              )}

              {/* Solution */}

              {project.solution && (

                <section className="mb-14">

                  <h2 className="text-3xl font-bold mb-5">
                    💡 Solution
                  </h2>

                  <p className="text-slate-400 leading-9">
                    {project.solution}
                  </p>

                </section>

              )}

              {/* Features */}

              {project.features && (

                <section className="mb-14">

                  <h2 className="text-3xl font-bold mb-6">
                    🚀 Key Features
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">

                    {project.features.map((feature) => (

                      <div
                        key={feature}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-blue-500 transition"
                      >
                        ✅ {feature}
                      </div>

                    ))}

                  </div>

                </section>

              )}

              {/* Technology */}

              {project.technologies && (

                <section className="mb-14">

                  <h2 className="text-3xl font-bold mb-6">
                    🛠 Technology Stack
                  </h2>

                  <div className="flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </section>

              )}

              {/* Learning */}

              {project.learning && (

                <section>

                  <h2 className="text-3xl font-bold mb-6">
                    📚 What I Learned
                  </h2>

                  <ul className="space-y-4">

                    {project.learning.map((item) => (

                      <li
                        key={item}
                        className="text-slate-400"
                      >
                        ✔ {item}
                      </li>

                    ))}

                  </ul>

                </section>

              )}

            </div>

          </GlassCard>

        </Container>

      </section>

      <Footer />

    </>
  );
}
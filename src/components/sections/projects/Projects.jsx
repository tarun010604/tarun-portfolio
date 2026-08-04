import Container from "../../ui/Container";
import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";

import { projects } from "../../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <ProjectsHeader />

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}
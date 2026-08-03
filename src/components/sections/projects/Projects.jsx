import Container from "../../ui/Container";
import ProjectsHeader from "./ProjectsHeader";
import FeaturedProject from "./FeaturedProject"
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <ProjectsHeader />
        <FeaturedProject/>

      </Container>
    </section>
  );
}
import Container from "../../ui/Container";
import ExperienceHeader from "./ExperienceHeader";
import InternshipCard from "./InternshipCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>

        <ExperienceHeader />

        <InternshipCard />

      </Container>
    </section>
  );
}
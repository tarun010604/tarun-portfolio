import Container from "../../ui/Container";
import AboutHeader from "./AboutHeader";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <AboutHeader />

        <AboutCards />


      </Container>
    </section>
  );
}
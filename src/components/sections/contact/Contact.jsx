import Container from "../../ui/Container";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-10">

          <ContactInfo />

          <SocialLinks />

        </div>

      </Container>
    </section>
  );
}
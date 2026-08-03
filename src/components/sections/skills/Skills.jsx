import Container from "../../ui/Container";
import SkillsHeader from "./SkillsHeader";
import SkillCard from "./SkillCard";
import { skillCategories } from "../../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>

        <SkillsHeader />

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 auto-rows-fr">

          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              category={category}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
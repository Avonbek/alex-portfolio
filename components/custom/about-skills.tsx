import { SectionProps } from "@/lib/types";
import SkillBar from "./skill-bar";

export default function AboutSkills({ visibility }: SectionProps) {
  return (
    <div className="about-skills">
      {/* Typescript: */}
      <SkillBar
        visibility={visibility}
        width="85%"
        delay={0.5}
        text="Typescript"
      />
      {/* CSS: */}
      <SkillBar visibility={visibility} width="70%" delay={0.6} text="CSS" />
    </div>
  );
}

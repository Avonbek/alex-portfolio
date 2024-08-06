import { SectionProps } from "@/lib/types";
import SkillBar from "./skill-bar";

export default function AboutSkills({ visibility }: SectionProps) {
  return (
    <div className="about-skills">
      {/* TOP: */}

      {/* Typescript: */}
      <SkillBar
        visibility={visibility}
        width="90%"
        delay={0.5}
        text="Typescript"
      />
      {/* Next.js */}
      <SkillBar
        visibility={visibility}
        width="90%"
        delay={0.6}
        text="Next.js"
      />
      {/* React */}
      <SkillBar visibility={visibility} width="90%" delay={0.7} text="React" />

      {/* MEDIUM */}

      {/* CSS: */}
      <SkillBar visibility={visibility} width="65%" delay={0.8} text="CSS" />
      {/* HTML */}
      <SkillBar visibility={visibility} width="65%" delay={0.9} text="HTML" />
      {/* Python */}
      <SkillBar visibility={visibility} width="65%" delay={1} text="Python" />

      {/* LOW */}

      {/* C# */}
      <SkillBar visibility={visibility} width="40%" delay={1.1} text="C#" />
      {/* Firestore */}
      <SkillBar
        visibility={visibility}
        width="40%"
        delay={1.2}
        text="Databases"
      />
    </div>
  );
}

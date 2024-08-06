import { SectionProps } from "@/lib/types";
import SkillBar from "./skill-bar";

export default function AboutSkills({ visibility }: SectionProps) {
  const initialDelay = 0.5;
  const delayIncrement = 0.05;

  const skills = [
    { text: "React", width: "90%" },
    { text: "Next.js", width: "90%" },
    { text: "Typescript", width: "90%" },
    { text: "CSS", width: "65%" },
    { text: "HTML", width: "65%" },
    { text: "Python", width: "65%" },
    { text: "C#", width: "40%" },
    { text: "SQL", width: "40%" },
    { text: "No-SQL", width: "40%" },
  ];

  return (
    <div className="about-skills">
      {skills.map((skill, index) => (
        <SkillBar
          key={skill.text}
          visibility={visibility}
          width={skill.width}
          delay={initialDelay + index * delayIncrement}
          text={skill.text}
        />
      ))}
    </div>
  );
}

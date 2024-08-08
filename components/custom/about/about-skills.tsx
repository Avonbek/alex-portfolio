import { motion } from "framer-motion";
import SkillBar from "./skill-bar";

export default function AboutSkills({ visibility, variants }: any) {
  const initialDelay = 0.5;
  const delayIncrement = 0.05;

  const skills = [
    { text: "React", width: "90%" },
    { text: "Next.js", width: "90%" },
    { text: "Typescript", width: "90%" },
    { text: "CSS", width: "75%" },
    { text: "HTML", width: "75%" },
    { text: "Python", width: "75%" },
    { text: "C#", width: "55%" },
    { text: "Databases", width: "55%" },
    // { text: "No-SQL", width: "50%" },
  ];

  return (
    <div className="about-skills">
      <h2 className="title">
        My Skills
        <div className="underline"></div>
      </h2>
      <div className="skill-bar-parent">
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
    </div>
  );
}

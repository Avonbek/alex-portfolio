import { motion } from "framer-motion";
import SkillBar from "./skill-bar";

export default function AboutSkills({ visibility, variants }: any) {
  const initialDelay = 0.5;
  const delayIncrement = 0.05;

  const skills = [
    { text: "React", width: "90%" },
    { text: "Next.js", width: "90%" },
    { text: "Typescript", width: "90%" },
    { text: "CSS", width: "70%" },
    { text: "HTML", width: "70%" },
    { text: "Python", width: "70%" },
    { text: "C#", width: "50%" },
    { text: "SQL", width: "50%" },
    { text: "No-SQL", width: "50%" },
  ];

  return (
    <div className="about-skills">
      <h2 className="title">
        <motion.div
          animate={visibility.aboutSkills ? "visible" : "hiddenRight"}
          initial="hiddenRight"
          variants={variants}
        >
          My Skills
        </motion.div>
        <motion.div
          animate={visibility.aboutSkills ? "visible" : "hiddenRight"}
          initial="hiddenRight"
          variants={variants}
          className="underline"
        ></motion.div>
      </h2>
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

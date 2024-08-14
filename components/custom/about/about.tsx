import { motion } from "framer-motion";
import Image from "next/image";
import SkillBar from "./skill-bar";

type AboutProps = {
  visibility: any;
  variants: any;
};

export default function About({ visibility, variants }: AboutProps) {
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
  ];

  return (
    <motion.section
      animate={visibility.about ? "visible" : "hiddenLeft"}
      variants={variants}
      className="about"
    >
      {/* About Me */}
      <div className="about-me">
        <Image
          src="/me-and-mabel-edited.png"
          alt="Picture of the author and his cat Mable"
          width={270}
          height={270}
          className="about-me-image"
        />
        <h2 className="about-me-title">About Me</h2>
        <h3 className="about-me-description">
          I'm a software engineer and full stack developer. <br /> I specialize
          in web-development and have a passion for creating applications that
          incorporate AI.
        </h3>
      </div>{" "}
      {/* Skills */}
      <div className="about-skills">
        <h2 className="title">My Skills</h2>
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
    </motion.section>
  );
}

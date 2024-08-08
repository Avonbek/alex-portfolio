import { motion } from "framer-motion";
import AboutSkills from "./about-skills";
import AboutMe from "./about-me";

type AboutProps = {
  visibility: any;
  variants: any;
};

export default function About({ visibility, variants }: AboutProps) {
  return (
    <motion.section
      animate={visibility.about ? "visible" : "hiddenLeft"}
      variants={variants}
      className="about"
    >
      <AboutMe visibility={visibility} variants={variants} />
      <AboutSkills visibility={visibility} variants={variants} />
    </motion.section>
  );
}

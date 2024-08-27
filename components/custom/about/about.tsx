import { motion } from "framer-motion";
import Image from "next/image";

import { SkillsTabs } from "./skills-tabs";

type AboutProps = {
  visibility: any;
  variants: any;
};

export default function About({ visibility, variants }: AboutProps) {
  const initialDelay = 0.5;
  const delayIncrement = 0.05;

  return (
    <motion.section
      animate={visibility.about ? "visible" : "hiddenLeft"}
      initial="hiddenLeft"
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
          className="about-me-image opacity-95"
        />
        <h2 className="about-me-title">About Me</h2>
        <h3 className="about-me-description">
          My mission is to craft elegant applications that add real value to
          people&apos;s lives.
        </h3>
      </div>

      {/* Skills Tabs */}
      <div className="about-skills">
        <SkillsTabs
          visibility={visibility}
          initialDelay={initialDelay}
          delayIncrement={delayIncrement}
        />
      </div>
    </motion.section>
  );
}

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type SkillBarProps = {
  visibility: any;
  width: string;
  delay: number;
  text: string;
};

export default function SkillBar({
  visibility,
  width,
  delay,
  text,
}: SkillBarProps) {
  return (
    <div className="skill-bar">
      <motion.div
        // animate={"visible"}
        animate={visibility.about ? "visible" : "hiddenRight"}
        variants={{
          visible: { width: width },
          hiddenRight: { width: "130px" },
        }}
        initial="hiddenRight"
        transition={{ duration: 1, delay: delay, once: true }}
        className="skill-bar-fill"
      >
        <h3 className="skill-bar-name">{text}</h3>
      </motion.div>
    </div>
  );
}

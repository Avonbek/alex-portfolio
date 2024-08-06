import { motion } from "framer-motion";

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
        animate={visibility.aboutMe ? "visible" : "hiddenRight"}
        variants={{
          visible: { width: width },
          hiddenRight: { width: "130px" },
        }}
        initial="hiddenRight"
        transition={{ duration: 1, delay: delay }}
        className="skill-bar-fill"
      >
        <div className="skill-bar-name">
          <h3 className="whitespace-nowrap">{text}</h3>
        </div>
      </motion.div>
    </div>
  );
}

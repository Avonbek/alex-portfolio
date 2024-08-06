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
          hiddenRight: { width: 0 },
        }}
        initial="hiddenRight"
        transition={{ duration: 1, delay: delay }}
        className="skill-bar-fill"
      >
        <h2 className="">{text}</h2>
      </motion.div>
    </div>
  );
}

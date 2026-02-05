import { motion } from "framer-motion";
import { TbRobot } from "react-icons/tb";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FiLayers } from "react-icons/fi";
import AiExperienceIcon from "./ai-experience-icon";

export default function AiExperience({ visibility }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{
        opacity: visibility.aboutExperience ? 1 : 0,
        x: visibility.aboutExperience ? 0 : 30,
      }}
      transition={{ tension: 200, friction: 50, duration: 0.5 }}
      className="about-ai-experience"
    >
      <h2 className="title">Threetree</h2>
      <p className="experience-subtitle">Founder & CEO — AI Automation Solutions</p>
      <div className="ai-experience-icon-parent">
        <AiExperienceIcon
          icon={<TbRobot />}
          title="AI Assistants"
          text="Building intelligent AI assistants that help businesses streamline operations and serve customers."
        />
        <AiExperienceIcon
          icon={<HiOutlineLightningBolt />}
          title="Automation"
          text="Designing automated workflows powered by AI to eliminate repetitive tasks and boost efficiency."
        />
        <AiExperienceIcon
          icon={<FiLayers />}
          title="Integration"
          text="Seamlessly integrating AI solutions into existing systems and tech stacks."
        />
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { TbListSearch } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { FiLink } from "react-icons/fi";
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
      <h2 className="title">Experience in AI</h2>
      {/* parent div */}
      <div className="ai-experience-icon-parent">
        {/* icon section */}
        <AiExperienceIcon
          icon={<TbListSearch />}
          title="RAG"
          text="Worked on semantic search engines and database knowledge retrieval for AI assistants."
        />
        <AiExperienceIcon
          icon={<FiLink />}
          title="CoT"
          text="Familiar with chain of thought and agent-based architectures such as Langchain."
        />
        <AiExperienceIcon
          icon={<LuBrainCircuit />}
          title="Prompts"
          text="Extensive experience working with AI prompts across a variety of different models."
        />
      </div>
    </motion.div>
  );
}

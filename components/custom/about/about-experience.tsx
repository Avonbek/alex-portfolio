import { motion } from "framer-motion";
import AiExperienceAccordion from "./ai-experience-accordion";
// rag icon
import { TbListSearch } from "react-icons/tb";
// llm icon
import { LuBrainCircuit } from "react-icons/lu";
// chain icon
import { FiLink } from "react-icons/fi";
import AiExperienceIcon from "./ai-experience-icon";

export default function AboutExperience({ visibility }: any) {
  return (
    <div className="about-ai-experience">
      <h2 className="about-ai-experience-title">
        AI Skills
        <motion.div
          animate={visibility.aboutExperience ? "visible" : "hiddenRight"}
          variants={{
            visible: { width: "100%" },
            hiddenRight: { width: "0%" },
          }}
          initial="hiddenRight"
          transition={{ duration: 1 }}
          className="about-experience-underline"
        ></motion.div>
      </h2>

      {/* parent div */}
      <div className="flex gap-8 w-full p-6 justify-center items-center">
        {/* icon section */}
        <AiExperienceIcon
          icon={<TbListSearch size={80} />}
          title="RAG"
          text="Whether you need a semantic search engine or an AI chat bot, I've got you covered."
        />
        <AiExperienceIcon
          icon={<FiLink size={80} />}
          title="Chain of Thought"
          text="Familiar with multi-agent architectures and tools such as LangChain, AutoGen, etc."
        />
        <AiExperienceIcon
          icon={<LuBrainCircuit size={80} />}
          title="Prompt Engineering"
          text="Extensive experience designing AI prompts across a variety of different models."
        />
      </div>
    </div>
  );
}

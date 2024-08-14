import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { TbListSearch } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { FiLink } from "react-icons/fi";
import AiExperienceIcon from "./ai-experience-icon";

export default function AiExperience({ visibility }: any) {
  const [ref, { width }] = useMeasure();
  const titleProps = useSpring({
    opacity: visibility.aboutExperience ? 1 : 0,
    x: visibility.aboutExperience ? 0 : 30,
    config: { tension: 200, friction: 50, duration: 500 },
  });
  const iconProps = {
    initial: { opacity: 0, x: 30 },
    animate: {
      opacity: visibility.aboutExperience ? 1 : 0,
      x: visibility.aboutExperience ? 0 : 30,
    },
    transition: { tension: 200, friction: 50, duration: 0.5 },
  };

  return (
    <div className="about-ai-experience">
      <h2 ref={ref} className="title">
        <animated.div style={titleProps}>Experience in AI</animated.div>
      </h2>

      {/* parent div */}
      <motion.div className="ai-experience-icon-parent" {...iconProps}>
        {/* icon section */}
        <AiExperienceIcon
          icon={<TbListSearch />}
          title="RAG"
          text="Whether you need a semantic search engine or an AI assistant, I've got you covered."
        />
        <AiExperienceIcon
          icon={<FiLink />}
          title="CoT"
          text="Familiar with chain of thought architectures and tools such as LangChain, AutoGen, etc."
        />
        <AiExperienceIcon
          icon={<LuBrainCircuit />}
          title="Prompts"
          text="Extensive experience designing AI prompts across a variety of different models."
        />
      </motion.div>
    </div>
  );
}

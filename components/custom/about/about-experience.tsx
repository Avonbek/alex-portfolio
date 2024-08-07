import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { TbListSearch } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { FiLink } from "react-icons/fi";
import AiExperienceIcon from "./ai-experience-icon";

export default function AboutExperience({ visibility }: any) {
  const [ref, { width }] = useMeasure();
  const titleProps = useSpring({
    config: { tension: 200, friction: 50, duration: 500 },
  });
  const underlineProps = useSpring({
    opacity: visibility.aboutExperience ? 1 : 0,
    width: width,
    config: { duration: 500 },
  });
  const iconProps = useSpring({
    opacity: visibility.aboutExperience ? 1 : 0,
    transform: visibility.aboutExperience
      ? "translateX(0px)"
      : "translateX(30px)",
    config: { tension: 200, friction: 50, duration: 500 },
  });

  return (
    <div className="about-ai-experience">
      <h2 ref={ref} className="about-ai-experience-title">
        <animated.div style={titleProps}>AI Skills</animated.div>
        <animated.div
          className="about-experience-underline"
          style={underlineProps}
        ></animated.div>
      </h2>

      {/* parent div */}
      <animated.div className="ai-experience-icon-parent" style={iconProps}>
        {/* icon section */}
        <AiExperienceIcon
          icon={<TbListSearch />}
          title="RAG"
          text="Whether you need a semantic search engine or an AI chat bot, I've got you covered."
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
      </animated.div>
    </div>
  );
}

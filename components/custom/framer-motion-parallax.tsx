import { motion, useTransform, useScroll } from "framer-motion";
import Hero from "@/components/custom/hero";
import About from "./about/about";
import AiExperience from "./ai-experience/ai-experience";
import ProjectsHeader from "./projects/projects-header";
import SimweaverTitle from "./projects/simweaver/simweaver-title";
import SimweaverContentOne from "./projects/simweaver/simweaver-content-one";
import SimweaverContentTwo from "./projects/simweaver/simweaver-content-two";
import { useEffect, useState } from "react";
import { pages, variants } from "@/lib/utils";

export default function FramerMotionParallax({}) {
  const { scrollY } = useScroll();
  const fastSpeed = useTransform(scrollY, [0, 3000], [0, 500]); // Adjust range and output as needed
  const slowSpeed = useTransform(scrollY, [0, 3000], [0, 200]); // Adjust range and output as needed

  const [visibility, setVisibility] = useState({
    aboutSkills: false,
    aboutExperience: false,
    projects: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll >= 700) {
        setVisibility((prev) => ({ ...prev, about: true }));
      }
      if (currentScroll >= 2200) {
        setVisibility((prev) => ({ ...prev, aboutExperience: true }));
      }
      if (currentScroll >= 3100) {
        setVisibility((prev) => ({ ...prev, projects: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="framer-motion-parallax-component">
      <motion.div style={{ y: slowSpeed }} className="parallax-hero">
        <Hero />
      </motion.div>

      <motion.div
        // style={{ y: slowSpeed }}
        className="parallax-title"
        // initial="hidden"
        // animate={visibility.aboutSkills ? "visible" : "hidden"}
        // variants={variants}
      >
        <About visibility={visibility} variants={variants} />
      </motion.div>

      <motion.div
        style={{ y: slowSpeed }}
        className="parallax-content"
        initial="hidden"
        animate={visibility.aboutExperience ? "visible" : "hidden"}
        variants={variants}
      >
        <AiExperience visibility={visibility} />
      </motion.div>

      <motion.div
        style={{ y: slowSpeed }}
        className="parallax-title"
        initial="hidden"
        animate={visibility.projects ? "visible" : "hidden"}
        variants={variants}
      >
        <ProjectsHeader visibility={visibility} variants={variants} />
      </motion.div>

      <motion.div
        style={{ y: slowSpeed }}
        className="parallax-title"
        initial="hidden"
        animate={visibility.projects ? "visible" : "hidden"}
        variants={variants}
      >
        <SimweaverTitle visibility={visibility} variants={variants} />
      </motion.div>

      <motion.div
        style={{ y: slowSpeed }}
        className="parallax-content"
        initial="hidden"
        animate={visibility.projects ? "visible" : "hidden"}
        variants={variants}
      >
        <SimweaverContentOne visibility={visibility} variants={variants} />
      </motion.div>

      <motion.div
        style={{ y: slowSpeed }}
        className="parallax-content"
        initial="hidden"
        animate={visibility.projects ? "visible" : "hidden"}
        variants={variants}
      >
        <SimweaverContentTwo visibility={visibility} variants={variants} />
      </motion.div>
    </div>
  );
}

import { motion, useTransform, useScroll } from "framer-motion";
import Hero from "@/components/custom/hero";
import About from "./about/about";
import AiExperience from "./ai-experience/ai-experience";
import ProjectsHeader from "./projects/projects-header";
import SimweaverTitle from "./projects/simweaver/simweaver-title";
import SimweaverContentOne from "./projects/simweaver/simweaver-content-one";
import SimweaverContentTwo from "./projects/simweaver/simweaver-content-two";
import { useEffect, useState } from "react";
import { framerPages, pages, variants } from "@/lib/utils";

export default function FramerMotionParallax({}) {
  const [visibility, setVisibility] = useState({
    about: false,
    aboutExperience: false,
    projects: false,
  });

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const yAbout = useTransform(
    scrollY,
    [screenHeight * 1, screenHeight * 1.5],
    [0, screenHeight * 1.5 - screenHeight * 1]
  );
  const yExperience = useTransform(
    scrollY,
    [screenHeight * 2.5, screenHeight * 3],
    [0, screenHeight * 3 - screenHeight * 2.5]
  );
  const yProjects = useTransform(
    scrollY,
    [screenHeight * 4, screenHeight * 4.5],
    [0, screenHeight * 4.5 - screenHeight * 4]
  );
  const ySimweaverTitle = useTransform(
    scrollY,
    [screenHeight * 5.5, screenHeight * 7.5],
    [0, screenHeight * 7.5 - screenHeight * 5.5]
  );
  const ySimweaverContentOne = useTransform(
    scrollY,
    [screenHeight * 5.5, screenHeight * 6],
    [0, screenHeight * 6 - screenHeight * 5.5]
  );
  const ySimweaverContentTwo = useTransform(
    scrollY,
    [screenHeight * 7, screenHeight * 7.5],
    [0, screenHeight * 7.5 - screenHeight * 7]
  );
  // const ySimweaverContentTwo = useTransform(
  //   scrollY,
  //   [screenHeight * 7, screenHeight * 7.5],
  //   [0, screenHeight * 7.5 - screenHeight * 7]
  // );

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() >= 800) {
        setVisibility((prev) => ({ ...prev, about: true }));
      }
      if (scrollY.get() >= 2100) {
        setVisibility((prev) => ({ ...prev, aboutExperience: true }));
      }
      if (scrollY.get() >= 3100) {
        setVisibility((prev) => ({ ...prev, projects: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`framer-motion-parallax-component w-full`}>
      {/* 1. Hero */}
      <motion.div className="parallax-hero h-[100dvh]">
        <Hero />
      </motion.div>

      {/* 2. About */}
      <motion.div
        style={{
          y: yAbout,
        }}
        className="parallax-title h-[100dvh]"
      >
        <About visibility={visibility} variants={variants} />
      </motion.div>

      {/* 3. AI Experience */}
      <motion.div
        style={{
          y: yExperience,
        }}
        className="parallax-title h-[100dvh] items-center justify-center parallax-margin"
      >
        <AiExperience visibility={visibility} />
      </motion.div>

      {/* 4. Projects */}
      <motion.div
        style={{
          y: yProjects,
        }}
        className="parallax-title h-[100dvh] items-center justify-center parallax-margin"
      >
        <ProjectsHeader visibility={visibility} variants={variants} />
      </motion.div>

      {/* 5. Simweaver */}
      <div className="flex items-start justify-center parallax-margin">
        <motion.div
          style={{
            y: ySimweaverTitle,
          }}
          className="flex h-[100dvh] w-[50%] items-end justify-center"
        >
          <SimweaverTitle visibility={visibility} variants={variants} />
        </motion.div>
        {/* Simweaver Content Parent */}
        <div className="flex flex-col w-[50%] items-center justify-center">
          {/* 5.1 Simweaver Content One */}
          <motion.div
            style={{
              y: ySimweaverContentOne,
            }}
            className="flex h-[100dvh] w-[50%] items-center justify-center"
          >
            <SimweaverContentOne visibility={visibility} variants={variants} />
          </motion.div>
          {/* 5.1 Simweaver Content Two */}
          <motion.div
            style={{
              y: ySimweaverContentTwo,
            }}
            className="flex h-[100dvh] w-[50%] items-center justify-center parallax-margin"
          >
            <SimweaverContentTwo visibility={visibility} variants={variants} />
          </motion.div>
        </div>
      </div>

      {/* <div className="flex h-[100dvh] items-center justify-center parallax-margin"></div> */}
    </div>
  );
}

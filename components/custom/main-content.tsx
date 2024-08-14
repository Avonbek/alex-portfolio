import { motion, useTransform, useScroll } from "framer-motion";
import Hero from "@/components/custom/hero";
import About from "./about/about";
import AiExperience from "./ai-experience/ai-experience";
import ProjectsHeader from "./projects/projects-header";
import SimweaverSection from "./projects/simweaver/simweaver-section";
import { useEffect, useState } from "react";
import { framerPages, pages, variants } from "@/lib/utils";
import SpawnartSection from "./projects/spawnart/spawnart-section";

type FramerMotionParallaxProps = {
  homeRef: any;
  aboutRef: any;
  projectsRef: any;
};

export default function MainContent({
  homeRef,
  aboutRef,
  projectsRef,
}: FramerMotionParallaxProps) {
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
  const ySimweaverSection = useTransform(
    scrollY,
    [screenHeight * 4, screenHeight * 4.5],
    [0, screenHeight * 4.5 - screenHeight * 4]
  );
  // Simweaver
  const ySpawnartSection = useTransform(
    scrollY,
    [screenHeight * 5.5, screenHeight * 6],
    [0, screenHeight * 6 - screenHeight * 5.5]
  );
  // const yProjects = useTransform(
  //   scrollY,
  //   [screenHeight * 4, screenHeight * 4.5],
  //   [0, screenHeight * 4.5 - screenHeight * 4]
  // );
  // // Simweaver
  // const ySimweaverSection = useTransform(
  //   scrollY,
  //   [screenHeight * 5.5, screenHeight * 6],
  //   [0, screenHeight * 6 - screenHeight * 5.5]
  // );
  // const ySpawnartSection = useTransform(
  //   scrollY,
  //   [screenHeight * 7, screenHeight * 7.5],
  //   [0, screenHeight * 7.5 - screenHeight * 7]
  // );

  const [visibility, setVisibility] = useState({
    about: false,
    aboutExperience: false,
    projects: false,
  });

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
      <motion.div ref={homeRef} className="parallax-hero">
        <Hero />
      </motion.div>

      {/* 2. About */}
      <motion.div
        ref={aboutRef}
        style={{
          y: yAbout,
        }}
        className="parallax-section"
      >
        <About visibility={visibility} variants={variants} />
      </motion.div>

      {/* 3. AI Experience */}
      <motion.div
        style={{
          y: yExperience,
        }}
        className="parallax-section parallax-margin"
      >
        <AiExperience visibility={visibility} />
      </motion.div>

      {/* 4. Projects */}
      {/* <motion.div
        ref={projectsRef}
        style={{
          y: yProjects,
        }}
        className="parallax-section parallax-margin"
      >
        <ProjectsHeader visibility={visibility} variants={variants} />
      </motion.div> */}

      {/* 5. Simweaver Section */}
      <motion.div
        ref={projectsRef}
        style={{
          y: ySimweaverSection,
        }}
        className="parallax-section parallax-margin"
      >
        <SimweaverSection visibility={visibility} variants={variants} />
      </motion.div>

      {/* 6. Spawnart Section */}
      <motion.div
        style={{
          y: ySpawnartSection,
        }}
        className="parallax-section parallax-margin"
      >
        <SpawnartSection visibility={visibility} variants={variants} />
      </motion.div>

      <div className="flex h-[100dvh] items-center justify-center parallax-margin"></div>
    </div>
  );
}

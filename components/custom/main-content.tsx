import { motion, useTransform, useScroll, useInView } from "framer-motion";
import Hero from "@/components/custom/hero";
import About from "./about/about";
import AiExperience from "./ai-experience/ai-experience";
import ProjectsHeader from "./projects/projects-header";
import SimweaverSection from "./projects/simweaver/simweaver-section";
import { useEffect, useState } from "react";
import { variants } from "@/lib/utils";
import SpawnartSection from "./projects/spawnart/spawnart-section";

type MainContentProps = {
  homeRef: any;
  aboutRef: any;
  experienceRef: any;
  projectsRef: any;
};

export default function MainContent({
  homeRef,
  aboutRef,
  experienceRef,
  projectsRef,
}: MainContentProps) {
  // --- PARALLAX EFFECTS ---
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
  const yProjectHeader = useTransform(
    scrollY,
    [screenHeight * 4, screenHeight * 4.5],
    [0, screenHeight * 4.5 - screenHeight * 4]
  );
  const ySimweaverSection = useTransform(
    scrollY,
    [screenHeight * 5.5, screenHeight * 6],
    [0, screenHeight * 6 - screenHeight * 5.5]
  );
  const ySpawnartSection = useTransform(
    scrollY,
    [screenHeight * 7, screenHeight * 7.5],
    [0, screenHeight * 7.5 - screenHeight * 7]
  );

  // --- VISIBILITY ---
  const params = { once: true, amount: 0.8 };

  const aboutInView = useInView(aboutRef, params);
  const experienceInView = useInView(experienceRef, params);
  const projectsInView = useInView(projectsRef, params);

  const [visibility, setVisibility] = useState({
    about: false,
    aboutExperience: false,
    projects: false,
  });

  useEffect(() => {
    setVisibility({
      about: aboutInView,
      aboutExperience: experienceInView,
      projects: projectsInView,
    });
  }, [aboutInView, experienceInView, projectsInView]);

  // --- RENDER ---

  return (
    <div className={`framer-motion-parallax-component w-full`}>
      {/* 1. Hero (NOTE: The Outer motion.div is for parallax sticky effect.) */}
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
        ref={experienceRef}
        style={{
          y: yExperience,
        }}
        className="parallax-section parallax-margin"
      >
        <AiExperience visibility={visibility} />
      </motion.div>

      {/* 4. Projects */}
      <motion.div
        ref={projectsRef}
        style={{
          y: yProjectHeader,
        }}
        className="parallax-section parallax-margin"
      >
        <ProjectsHeader visibility={visibility} variants={variants} />
      </motion.div>

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

      {/* blank pages */}
      {/* <div className="flex h-[100dvh] items-center justify-center parallax-margin"></div> */}
    </div>
  );
}

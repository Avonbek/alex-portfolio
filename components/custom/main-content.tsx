import { motion, useTransform, useScroll, useInView } from "framer-motion";
import Hero from "@/components/custom/hero";
import About from "./about/about";
import AiExperience from "./ai-experience/ai-experience";
import ProjectsHeader from "./projects/projects-header";
import SimweaverSection from "./projects/simweaver/simweaver-section";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { variants } from "@/lib/utils";
import SpawnartSection from "./projects/spawnart/spawnart-section";
import Contact from "./contact";

type MainContentProps = {
  homeRef: any;
  aboutRef: any;
  experienceRef: any;
  projectsRef: any;
  contactRef: any;
};

export default function MainContent({
  homeRef,
  aboutRef,
  experienceRef,
  projectsRef,
  contactRef,
}: MainContentProps) {
  // --- VISIBILITY ---
  const params = { once: true, amount: 0.8 };

  const aboutInView = useInView(aboutRef, params);
  const experienceInView = useInView(experienceRef, params);
  const projectsInView = useInView(projectsRef, { ...params, amount: 0.5 });
  const contactInView = useInView(contactRef, params);

  const [visibility, setVisibility] = useState({
    about: false,
    aboutExperience: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    setVisibility({
      about: aboutInView,
      aboutExperience: experienceInView,
      projects: projectsInView,
      contact: contactInView,
    });
  }, [aboutInView, experienceInView, projectsInView, contactInView]);

  useEffect(() => {
    // Set viewport scale to 1
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0"
      );
    }
  }, []);

  // --- PARALLAX EFFECTS ---
  const { scrollY } = useScroll();

  // Calculate vh using visualViewport if available
  const [vh, setVh] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const adjustedHeight =
          window.visualViewport.height * window.visualViewport.scale; // Adjust for scale
        setVh(adjustedHeight);
      } else {
        setVh(Math.round(window.innerHeight));
      }
    };

    handleResize(); // Set on first render

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      window.visualViewport.addEventListener("scroll", handleResize);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
        window.visualViewport.removeEventListener("scroll", handleResize);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const yAbout = useTransform(
    scrollY,
    [vh * 1, vh * 1.5],
    [0, vh * 1.5 - vh * 1]
  );
  const yExperience = useTransform(
    scrollY,
    [vh * 2.5, vh * 3],
    [0, vh * 3 - vh * 2.5]
  );
  const yProjectHeader = useTransform(
    scrollY,
    [vh * 4, vh * 4.25],
    [0, (vh * 4.25 - vh * 4) / 2]
  );
  const ySimweaverSection = useTransform(
    scrollY,
    [vh * 5, vh * 5.5],
    [0, vh * 5.5 - vh * 5]
  );
  const ySpawnartSection = useTransform(
    scrollY,
    [vh * 6.5, vh * 7],
    [0, vh * 7 - vh * 6.5]
  );

  // --- RENDER ---

  return (
    <div className={`main-content`}>
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
        style={{
          y: ySimweaverSection,
        }}
        className="parallax-section"
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

      {/* 7. Contact */}
      <motion.div ref={contactRef} className="parallax-section parallax-margin">
        <Contact visibility={visibility} variants={variants} />
      </motion.div>

      {/* blank pages */}
      {/* <div className="flex h-[100dvh] items-center justify-center parallax-margin"></div> */}
    </div>
  );
}

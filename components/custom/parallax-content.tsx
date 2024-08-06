"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import AboutSkills from "./about-skills";
import About from "./about";
import AboutExperience from "./about-experience";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxContent({ pRef }: { pRef: any }) {
  const fastSpeed = 1;
  const slowSpeed = 0.5;
  const [visibility, setVisibility] = useState({
    aboutMe: false,
    projects: false,
  });
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    hiddenMobile: { opacity: 0 },
    hiddenLeft: { opacity: 0, x: -70 },
    hiddenRight: { opacity: 0, x: 70 },
  };

  // --- EFFECTS ---

  useEffect(() => {
    const container = document.querySelector(".parallax-scroll");
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- HANDLERS ---

  function handleScroll() {
    if (!pRef?.current) return;
    if (pRef.current.current >= 700) {
      setVisibility((prev) => ({ ...prev, aboutMe: true }));
    }
    if (pRef.current.current >= 3700) {
      setVisibility((prev) => ({ ...prev, projects: true }));
    }
  }

  // --- RENDER ---

  return (
    <div className="parallax-component">
      <Parallax
        ref={pRef}
        pages={6}
        config={{
          tension: 210,
          friction: 20,
          clamp: true,
        }}
        className="parallax-scroll"
      >
        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={slowSpeed} className="parallax-hero">
          <Hero />
        </ParallaxLayer>

        {/* --- About --- */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          speed={slowSpeed}
          className="parallax-title"
        >
          <motion.section
            animate={visibility.aboutMe ? "visible" : "hiddenLeft"}
            variants={variants}
            className="section-title desktop-mode"
          >
            <About />
          </motion.section>
        </ParallaxLayer>
        {/* mobile */}
        <ParallaxLayer offset={1} speed={slowSpeed} className="parallax-title">
          <motion.section
            animate={visibility.aboutMe ? "visible" : "hiddenMobile"}
            variants={variants}
            className="section-title mobile-mode"
          >
            <About />
          </motion.section>
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* --- About -> Skills --- */}
        <ParallaxLayer
          sticky={{ start: 1, end: 1.5 }}
          speed={fastSpeed}
          className="parallax-content"
        >
          <motion.div
            animate={visibility.aboutMe ? "visible" : "hiddenRight"}
            variants={variants}
            className="section-content desktop-mode"
          >
            <AboutSkills visibility={visibility} />
          </motion.div>
        </ParallaxLayer>
        {/* mobile */}
        <ParallaxLayer
          offset={2}
          speed={slowSpeed}
          className="parallax-content"
        >
          <motion.div
            animate={visibility.aboutMe ? "visible" : "hiddenMobile"}
            variants={variants}
            className="section-content mobile-mode"
          >
            <AboutSkills visibility={visibility} />
          </motion.div>
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* About -> Experience */}
        <ParallaxLayer
          sticky={{ start: 2.5, end: 3 }}
          speed={fastSpeed}
          className="parallax-content"
        >
          <motion.div className="section-content desktop-mode">
            <AboutExperience visibility={visibility} />
          </motion.div>
        </ParallaxLayer>
        {/* AboutSkills mobile */}
        <ParallaxLayer
          offset={3}
          speed={slowSpeed}
          className="parallax-content"
        >
          <div className="section-content mobile-mode">
            <AboutExperience visibility={visibility} />
          </div>
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* Projects (Title) */}
        <ParallaxLayer
          sticky={{ start: 4, end: 6 }}
          speed={slowSpeed}
          className="parallax-title"
        >
          <motion.section
            animate={visibility.projects ? "visible" : "hiddenLeft"}
            variants={variants}
            className="section-title desktop-mode"
          >
            Projects
          </motion.section>
        </ParallaxLayer>
        {/* Projects mobile */}
        <ParallaxLayer offset={4} speed={slowSpeed} className="parallax-title">
          <div className="section-title mobile-mode">Projects</div>
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* Projects -> 1 */}
        <ParallaxLayer
          sticky={{ start: 4, end: 6 }}
          speed={fastSpeed}
          className="parallax-content"
        >
          <motion.section
            animate={visibility.projects ? "visible" : "hiddenRight"}
            variants={variants}
            className="section-content desktop-mode"
          >
            <div className="section-content desktop-mode">
              Placeholder Project Content
            </div>
          </motion.section>
        </ParallaxLayer>
        {/* Projects -> 1 mobile */}
        <ParallaxLayer
          offset={5}
          speed={slowSpeed}
          className="parallax-content"
        >
          <div className="section-content mobile-mode">
            Placeholder Project Content
          </div>
        </ParallaxLayer>
        {/* ------------------------------------------------- */}
      </Parallax>
    </div>
  );
}

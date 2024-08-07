"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import AboutSkills from "./about/about-skills";
import About from "./about/about";
import AboutExperience from "./about/about-experience";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxContent({ pRef }: { pRef: any }) {
  const fastSpeed = 1;
  const slowSpeed = 0.5;
  const [visibility, setVisibility] = useState({
    aboutMe: false,
    aboutExperience: false,
    projects: false,
  });
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    hiddenMobile: { opacity: 0 },
    hiddenLeft: { opacity: 0, x: -70 },
    hiddenRight: { opacity: 0, x: 70 },
  };
  const pages = {
    about: {
      start: 1,
      end: 1.3,
      mobile: 1,
    },
    aboutSkills: {
      start: 1,
      end: 1.3,
      mobile: 1.8,
    },
    aboutExperience: {
      start: 2.5,
      end: 2.8,
      mobile: 2.6,
    },
    projects: {
      start: 4,
      end: 6,
      mobile: 3.4,
    },
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

  // THOUGHT: we can change when the trigger happens by using container width?

  function handleScroll() {
    if (!pRef?.current) return;
    if (pRef.current.current >= 700) {
      setVisibility((prev) => ({ ...prev, aboutMe: true }));
    }
    if (pRef.current.current >= 2200) {
      setVisibility((prev) => ({ ...prev, aboutExperience: true }));
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
          sticky={{ start: pages.about.start, end: pages.about.end }}
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
        <ParallaxLayer
          offset={pages.about.mobile}
          speed={slowSpeed}
          className="parallax-title"
        >
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
          sticky={{
            start: pages.aboutSkills.start,
            end: pages.aboutSkills.end,
          }}
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
          offset={pages.aboutSkills.mobile}
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
          sticky={{
            start: pages.aboutExperience.start,
            end: pages.aboutExperience.end,
          }}
          speed={fastSpeed}
          className="parallax-content"
        >
          <motion.div className="section-content section-centered desktop-mode">
            <AboutExperience visibility={visibility} />
          </motion.div>
        </ParallaxLayer>
        {/* AboutSkills mobile */}
        <ParallaxLayer
          offset={pages.aboutExperience.mobile}
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
          sticky={{ start: pages.projects.start, end: pages.projects.end }}
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
        <ParallaxLayer
          offset={pages.projects.mobile}
          speed={slowSpeed}
          className="parallax-title"
        >
          <div className="section-title mobile-mode">Projects</div>
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* Projects -> 1 */}
        {/* <ParallaxLayer
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
        <ParallaxLayer
          offset={5}
          speed={slowSpeed}
          className="parallax-content"
        >
          <div className="section-content mobile-mode">
            Placeholder Project Content
          </div>
        </ParallaxLayer> */}
        {/* ------------------------------------------------- */}
      </Parallax>
    </div>
  );
}

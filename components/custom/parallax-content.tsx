"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import About from "./about/about";
import AiExperience from "./ai-experience/ai-experience";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectsHeader from "./projects/projects-header";

export default function ParallaxContent({ pRef }: { pRef: any }) {
  const fastSpeed = 1;
  const slowSpeed = 0.5;
  const [visibility, setVisibility] = useState({
    aboutSkills: false,
    aboutExperience: false,
    projects: false,
  });
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    visibleSlow: { opacity: 1, x: 0, transition: { duration: 1.3 } },
    hidden: { opacity: 0 },
    hiddenLeft: { opacity: 0, x: -70 },
    hiddenRight: { opacity: 0, x: 70 },
    hiddenBottom: { opacity: 0, y: 70 },
    collapsed: { width: 0 },
    expanded: { width: "100%", duration: 1 },
  };
  const pages = {
    about: {
      start: 1,
      end: 1.4,
      mobile: 1,
    },
    aboutExperience: {
      start: 2.5,
      end: 2.9,
    },
    projects: {
      start: 3.8,
      end: 4.3,
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

  function handleScroll() {
    if (!pRef?.current) return;
    if (pRef.current.current >= 700) {
      setVisibility((prev) => ({ ...prev, about: true }));
    }
    if (pRef.current.current >= 2200) {
      setVisibility((prev) => ({ ...prev, aboutExperience: true }));
    }
    if (pRef.current.current >= 3300) {
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
        {/* --- Hero --- */}
        <ParallaxLayer offset={0} speed={slowSpeed} className="parallax-hero">
          <Hero />
        </ParallaxLayer>

        {/* --- About --- */}
        <ParallaxLayer
          sticky={{ start: pages.about.start, end: pages.about.end }}
          speed={slowSpeed}
          className="parallax-title"
        >
          <About visibility={visibility} variants={variants} />
        </ParallaxLayer>

        {/* --- AI Experience --- */}
        <ParallaxLayer
          sticky={{
            start: pages.aboutExperience.start,
            end: pages.aboutExperience.end,
          }}
          speed={slowSpeed}
          className="parallax-content"
        >
          <AiExperience visibility={visibility} />
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* --- Projects Header --- */}
        <ParallaxLayer
          sticky={{ start: pages.projects.start, end: pages.projects.end }}
          speed={slowSpeed}
          className="parallax-title"
        >
          <ProjectsHeader visibility={visibility} variants={variants} />
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* --- Simweaver --- */}

        {/* NOTE: we will change the layout of the left hand section to top for mobile? */}
        {/* should we hide the nav bar when scrolling down? */}

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

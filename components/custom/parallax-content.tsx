"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import About from "./about/about";
import AiExperience from "./ai-experience/ai-experience";
import { useEffect, useState } from "react";
import ProjectsHeader from "./projects/projects-header";
import SimweaverSection from "./projects/simweaver/simweaver-section";
import SimweaverContentOne from "./projects/simweaver/simweaver-content-one";
import { start } from "repl";
import SimweaverContentTwo from "./projects/simweaver/simweaver-content-two";
import { pages, variants } from "@/lib/utils";

export default function ParallaxContent({ pRef }: { pRef: any }) {
  const speed = 0;
  const [visibility, setVisibility] = useState({
    aboutSkills: false,
    aboutExperience: false,
    projects: false,
  });

  // --- EFFECTS ---

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const container = document.querySelector(".parallax-scroll");
    if (!container) return;
    container.addEventListener("scroll", handleScroll);

    let previousHeight = window.innerHeight;

    const handleResize = () => {
      const currentHeight = window.innerHeight;
      if (previousHeight !== currentHeight) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const container = document.querySelector(".parallax-scroll");
  //   if (!container) return;
  //   container.addEventListener("scroll", handleScroll);
  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // --- HANDLERS ---

  function handleScroll() {
    if (!pRef?.current) return;
    if (pRef.current.current >= 700) {
      setVisibility((prev) => ({ ...prev, about: true }));
    }
    if (pRef.current.current >= 2200) {
      setVisibility((prev) => ({ ...prev, aboutExperience: true }));
    }
    if (pRef.current.current >= 3100) {
      setVisibility((prev) => ({ ...prev, projects: true }));
    }
  }

  // --- RENDER ---

  return (
    <div className="parallax-component">
      <Parallax
        ref={pRef}
        pages={9}
        config={{
          tension: 210,
          friction: 20,
          clamp: true,
        }}
        className="parallax-scroll"
      >
        {/* --- Hero --- */}
        <ParallaxLayer offset={0} speed={speed} className="parallax-hero">
          <Hero />
        </ParallaxLayer>

        {/* --- About --- */}
        <ParallaxLayer
          sticky={{ start: pages.about.start, end: pages.about.end }}
          speed={speed}
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
          speed={speed}
          className="parallax-content"
        >
          <AiExperience visibility={visibility} />
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* --- Projects Header --- */}
        <ParallaxLayer
          sticky={{ start: pages.projects.start, end: pages.projects.end }}
          speed={speed}
          className="parallax-title"
        >
          <ProjectsHeader visibility={visibility} variants={variants} />
        </ParallaxLayer>
        {/* ------------------------------------------------- */}

        {/* --- Simweaver Title --- */}

        {/* NOTE: we will change the layout of the left hand section to top for mobile? */}
        {/* should we hide the nav bar when scrolling down? */}
        <ParallaxLayer
          sticky={{ start: pages.simweaver.start, end: pages.simweaver.end }}
          speed={speed}
          className="parallax-title"
        >
          <SimweaverSection visibility={visibility} variants={variants} />
        </ParallaxLayer>

        {/* --- Simweaver Content One --- */}

        <ParallaxLayer
          sticky={{
            start: pages.simweaverContentOne.start,
            end: pages.simweaverContentOne.end,
          }}
          speed={speed}
          className="parallax-content"
          factor={2}
        >
          <SimweaverContentOne visibility={visibility} variants={variants} />
        </ParallaxLayer>

        {/* --- Simweaver Content One --- */}

        <ParallaxLayer
          sticky={{
            start: pages.simweaverContentTwo.start,
            end: pages.simweaverContentTwo.end,
          }}
          speed={speed}
          className="parallax-content"
        >
          <SimweaverContentTwo visibility={visibility} variants={variants} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

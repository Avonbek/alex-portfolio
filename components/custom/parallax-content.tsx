"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import AboutSkills from "./about-skills";
import About from "./about";
import AboutMe from "./about-me";
// import { useSpring, animated, useScroll } from "react-spring";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ParallaxContent({ pRef }: { pRef: any }) {
  const fastSpeed = 1;
  const slowSpeed = 0.5;
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // add use scroll to detect scroll position
  const { scrollY } = useScroll({
    container: containerRef,
  });

  const handleScroll = () => {
    if (pRef?.current) {
      console.log(pRef.current.current);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".parallax-component");
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- RENDER ---

  return (
    <Parallax
      ref={pRef}
      pages={6}
      config={{
        tension: 210,
        friction: 20,
        clamp: true,
      }}
      className="parallax-component"
    >
      {/* Hero Section */}
      <ParallaxLayer
        offset={0}
        speed={slowSpeed}
        className="flex flex-col justify-center items-center"
      >
        <Hero />
      </ParallaxLayer>

      {/* About (Title) */}
      <ParallaxLayer
        sticky={{ start: 1, end: 3.5 }}
        speed={slowSpeed}
        className="flex flex-col justify-center items-start"
      >
        <div className="section-title desktop-mode">
          <About />
        </div>
      </ParallaxLayer>
      {/* About mobile */}
      <ParallaxLayer
        offset={1}
        speed={fastSpeed}
        className="flex flex-col justify-center items-start"
      >
        <div className="section-title mobile-mode">
          <About />
        </div>
      </ParallaxLayer>

      {/* About -> Me */}
      <ParallaxLayer
        sticky={{ start: 1, end: 1.5 }}
        speed={fastSpeed}
        className="flex items-center justify-end"
      >
        <div className="section-content desktop-mode">
          <AboutMe />
        </div>
      </ParallaxLayer>
      {/* About -> Me mobile */}
      <ParallaxLayer
        offset={2}
        speed={fastSpeed}
        className="flex items-center justify-end"
      >
        <div className="section-content mobile-mode">
          <AboutMe />
        </div>
      </ParallaxLayer>

      {/* About -> Skills */}
      <ParallaxLayer
        sticky={{ start: 3, end: 3.5 }}
        speed={fastSpeed}
        className="flex items-center justify-end"
      >
        <div className="section-content desktop-mode">
          <AboutSkills />
        </div>
      </ParallaxLayer>
      {/* AboutSkills mobile */}
      <ParallaxLayer
        offset={3}
        speed={fastSpeed}
        className="flex items-center justify-end"
      >
        <div className="section-content mobile-mode">
          <AboutSkills />
        </div>
      </ParallaxLayer>

      {/* Projects (Title) */}
      <ParallaxLayer
        sticky={{ start: 5, end: 10 }}
        speed={slowSpeed}
        className="flex flex-col justify-center items-start"
      >
        <div className="section-title desktop-mode">Projects</div>
      </ParallaxLayer>
      {/* Projects mobile */}
      <ParallaxLayer
        offset={4}
        speed={fastSpeed}
        className="flex flex-col justify-center items-start"
      >
        <div className="section-title mobile-mode">Projects</div>
      </ParallaxLayer>

      {/* Projects -> 1 */}
      <ParallaxLayer
        sticky={{ start: 5, end: 10 }}
        speed={fastSpeed}
        className="flex items-center justify-end"
      >
        <div className="section-content desktop-mode">
          Placeholder Project Content
        </div>
      </ParallaxLayer>
      {/* Projects -> 1 mobile */}
      <ParallaxLayer
        offset={5}
        speed={fastSpeed}
        className="flex items-center justify-end"
      >
        <div className="section-content mobile-mode">
          Placeholder Project Content
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import AboutSkills from "./about-skills";
import SkillsSticky from "./about-sticky";
import AboutMe from "./about-me";

export default function ParallaxContent({ pRef }: { pRef: any }) {
  return (
    <Parallax
      ref={pRef}
      pages={12}
      config={{
        tension: 210,
        friction: 20,
        clamp: true,
      }}
    >
      {/* Hero Section */}
      <Hero />

      {/* About (Sticky) */}
      <ParallaxLayer
        sticky={{ start: 1, end: 3 }}
        speed={0.5}
        className="flex flex-col justify-center items-start"
      >
        <SkillsSticky />
      </ParallaxLayer>

      {/* About -> Me */}
      <ParallaxLayer
        offset={1.5}
        speed={0.234}
        className="flex items-center justify-end"
      >
        <AboutMe />
      </ParallaxLayer>

      {/* About -> Skills */}
      <ParallaxLayer
        offset={2.5}
        speed={0.32}
        className="flex items-center justify-end"
      >
        <AboutSkills />
      </ParallaxLayer>

      {/* Projects (Sticky) */}
      <ParallaxLayer
        sticky={{ start: 4, end: 6 }}
        speed={0.5}
        className="flex flex-col justify-center items-start"
      >
        <div className="section-title">Projects</div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={4.5}
        speed={0.5}
        className="flex items-center justify-end"
      >
        <div className="section-content">
          <p>Placeholder Project Content</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={5.5}
        speed={0.5}
        className="flex items-center justify-end"
      >
        <div className="section-content">
          <p>Placeholder Project Content 2</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 7, end: 8 }}
        speed={0.5}
        className="flex flex-col justify-center items-start"
      >
        <div className="section-title">End</div>
      </ParallaxLayer>
    </Parallax>
  );
}

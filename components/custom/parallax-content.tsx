"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import Skills from "./skills";

export default function ParallaxContent() {
  const alignCenter = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Parallax pages={8}>
      <Hero />
      <ParallaxLayer
        sticky={{ start: 1, end: 3 }}
        speed={0.5}
        className="flex flex-col justify-center items-start"
      >
        <div className="section-title">My Skills</div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.5}
        speed={0.5}
        className="flex items-center justify-end"
      >
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={0.5}
        className="flex items-center justify-end"
      >
        <div className="section-content">
          <p>Example Skill Content 2...</p>
        </div>
      </ParallaxLayer>

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

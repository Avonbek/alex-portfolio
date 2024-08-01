"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/custom/hero";
import AboutSkills from "./about-skills";
import About from "./about";
import AboutMe from "./about-me";

export default function ParallaxContent({ pRef }: { pRef: any }) {
  // --- RENDER ---

  return (
    <div className="parallax-content">
      <Parallax
        ref={pRef}
        pages={10}
        config={{
          tension: 210,
          friction: 20,
          clamp: true,
        }}
      >
        {/* Hero Section */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="flex flex-col justify-center items-center"
        >
          <Hero />
        </ParallaxLayer>

        {/* About */}
        <ParallaxLayer
          sticky={{ start: 1, end: 4 }}
          speed={0.5}
          className="flex flex-col justify-center items-start"
        >
          <div className="desktop-mode justify-center w-[50%]">
            <About />
          </div>
        </ParallaxLayer>
        {/* About mobile */}
        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          speed={0.5}
          className="flex flex-col justify-center items-start"
        >
          <div className="mobile-mode w-full justify-center">
            <About />
          </div>
        </ParallaxLayer>

        {/* AboutMe */}
        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          speed={1}
          className="flex items-center justify-end"
        >
          <div className="desktop-mode justify-center w-[50%]">
            <AboutMe />
          </div>
        </ParallaxLayer>
        {/* AboutMe mobile */}
        <ParallaxLayer
          sticky={{ start: 3, end: 4 }}
          speed={1}
          className="flex items-center justify-end"
        >
          <div className="mobile-mode w-full justify-center">
            <AboutMe />
          </div>
        </ParallaxLayer>

        {/* AboutSkills */}
        <ParallaxLayer
          sticky={{ start: 3, end: 4 }}
          speed={1}
          className="flex items-center justify-end"
        >
          <div className="desktop-mode justify-center w-[50%]">
            <AboutSkills />
          </div>
        </ParallaxLayer>
        {/* AboutSkills mobile */}
        <ParallaxLayer
          sticky={{ start: 5, end: 6 }}
          speed={1}
          className="flex items-center justify-end"
        >
          <div className="mobile-mode w-full justify-center">
            <AboutSkills />
          </div>
        </ParallaxLayer>

        {/* Projects */}
        <ParallaxLayer
          sticky={{ start: 5, end: 10 }}
          speed={0.5}
          className="flex flex-col justify-center items-start"
        >
          <div className="desktop-mode justify-center w-[50%]">
            <div className="section-title">Projects</div>
          </div>
        </ParallaxLayer>
        {/* Projects mobile */}
        <ParallaxLayer
          sticky={{ start: 7, end: 8 }}
          speed={0.5}
          className="flex flex-col justify-center items-start"
        >
          <div className="mobile-mode w-full justify-center">
            <div className="section-title">Projects</div>
          </div>
        </ParallaxLayer>

        {/* Projects -> 1 */}
        <ParallaxLayer
          sticky={{ start: 5, end: 10 }}
          speed={1}
          className="flex items-center justify-end"
        >
          <div className="desktop-mode justify-center w-[50%]">
            <div className="section-content">
              <p>Placeholder Project Content</p>
            </div>
          </div>
        </ParallaxLayer>
        {/* Projects -> 1 mobile */}
        <ParallaxLayer
          sticky={{ start: 9, end: 10 }}
          speed={1}
          className="flex items-center justify-end"
        >
          <div className="mobile-mode w-full justify-center">
            <div className="section-content">
              <p>Placeholder Project Content</p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

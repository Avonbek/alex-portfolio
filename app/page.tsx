"use client";

import FramerMotionParallax from "@/components/custom/framer-motion-parallax";
import NavBar from "@/components/custom/nav-bar";
import ParallaxContent from "@/components/custom/parallax-content";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <main>
      <div className={"background-gradient"}></div>
      <NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} />
      <FramerMotionParallax
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />
      {/* <ParallaxContent pRef={parallaxRef} /> */}
    </main>
  );
}

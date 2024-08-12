"use client";

import FramerMotionParallax from "@/components/custom/framer-motion-parallax";
import NavBar from "@/components/custom/nav-bar";
import ParallaxContent from "@/components/custom/parallax-content";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef}>
      <div className={"background-gradient"}></div>
      <NavBar />
      <FramerMotionParallax />
      {/* <ParallaxContent pRef={parallaxRef} /> */}
    </main>
  );
}

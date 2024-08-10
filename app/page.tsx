"use client";

import FramerMotionParallax from "@/components/custom/framer-motion-parallax";
import NavBar from "@/components/custom/nav-bar";
import ParallaxContent from "@/components/custom/parallax-content";
import { useRef } from "react";

export default function Home() {
  const parallaxRef = useRef();

  return (
    <main>
      <div className={"background-gradient"}></div>
      <NavBar pRef={parallaxRef} />
      <FramerMotionParallax />
      {/* <ParallaxContent pRef={parallaxRef} /> */}
    </main>
  );
}

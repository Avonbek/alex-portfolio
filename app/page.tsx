"use client";

import NavBar from "@/components/custom/nav-bar";
import ParallaxContent from "@/components/custom/parallax-content";
import { useRef } from "react";
import { useScroll } from "react-spring";

export default function Home() {
  const parallaxRef = useRef();

  // --- RENDER ---

  return (
    <main>
      <div className={"background-gradient"}></div>
      <NavBar pRef={parallaxRef} />
      <div className="parallax-content">
        <ParallaxContent pRef={parallaxRef} />
      </div>
    </main>
  );
}

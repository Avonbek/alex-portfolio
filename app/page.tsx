"use client";

import NavBar from "@/components/custom/nav-bar";
import ParallaxContent from "@/components/custom/parallax-content";
import { useRef } from "react";

export default function Home() {
  const parallaxRef = useRef();

  return (
    <main>
      <div className={"background-gradient !bg-dot-black/[0.2]"}></div>
      <NavBar pRef={parallaxRef} />
      <ParallaxContent pRef={parallaxRef} />
    </main>
  );
}

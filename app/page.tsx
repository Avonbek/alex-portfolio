"use client";

import NavBar from "@/components/custom/nav-bar";
import ParallaxContent from "@/components/custom/parallax-content";
import { CustomBackgroundGradient } from "@/components/custom/custom-background-gradient";
import { useRef } from "react";
import { IParallax } from "@react-spring/parallax";

export default function Home() {
  const parallaxRef = useRef<IParallax>(null);
  return (
    <main>
      <CustomBackgroundGradient
        interactive={false}
        // gradientBackgroundStart=""
        // gradientBackgroundEnd=""
        gradientBackgroundStart="rgb(108, 0, 162)"
        gradientBackgroundEnd="rgb(0, 17, 82)"
        className="fixed inset-0 z-0"
        containerClassName="opacity-80"
      />

      <NavBar pRef={parallaxRef} />

      <ParallaxContent pRef={parallaxRef} />
    </main>
  );
}

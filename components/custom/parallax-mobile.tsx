"use client";

import Hero from "@/components/custom/hero";
import AboutSkills from "./about-skills";
import About from "./about";
import AboutMe from "./about-me";
import { Fragment } from "react";

export default function ParallaxMobile({}) {
  return (
    <div className="flex flex-col w-[100dvw]">
      <Hero />

      <About />

      <AboutMe />

      <AboutSkills />
    </div>
  );
}

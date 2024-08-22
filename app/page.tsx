"use client";

import AiAssistant from "@/components/custom/ai-assistant/ai-assistant";
import MainContent from "@/components/custom/main-content";
import NavBar from "@/components/custom/nav-bar";
import { useRef } from "react";

export default function Home() {
  // refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const simweaverRef = useRef(null);
  const spawnartRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main>
      <div className={"background-gradient"}></div>
      <NavBar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <MainContent
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        simweaverRef={simweaverRef}
        spawnartRef={spawnartRef}
        contactRef={contactRef}
      />
      <AiAssistant />
    </main>
  );
}

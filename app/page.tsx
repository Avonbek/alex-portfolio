"use client";

import MainContent from "@/components/custom/main-content";
import NavBar from "@/components/custom/nav-bar";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <main>
      <div className={"background-gradient"}></div>
      <NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} />
      <MainContent
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />
    </main>
  );
}

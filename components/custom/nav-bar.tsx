"use client";

import React, { useState, useEffect } from "react";
import { motion, MotionValue, useScroll } from "framer-motion";

type NavBarProps = {
  homeRef: any;
  aboutRef: any;
  projectsRef: any;
};

export default function NavBar({
  homeRef,
  aboutRef,
  projectsRef,
}: NavBarProps) {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (scrollY.get() > scrollPosition) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //     setScrollPosition(scrollY.get());
  //   };
  //   if (!window) return;
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition, scrollY.get()]);

  // useEffect(() => {
  //   setHasAnimated(true);
  // }, []);

  const handleClick = (clickedRef: any) => {
    clickedRef.current?.scrollIntoView({});
    // setScrollPosition(scrollY.get());
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.5,
        delay: hasAnimated ? 0 : 0.6,
      }}
      className="nav"
    >
      <button onClick={() => handleClick(homeRef)} className="nav-button">
        Home
      </button>
      <div className="nav-divider"></div>
      <button onClick={() => handleClick(aboutRef)} className="nav-button">
        About
      </button>
      <div className="nav-divider"></div>
      <button onClick={() => handleClick(projectsRef)} className="nav-button">
        Projects
      </button>
    </motion.nav>
  );
}

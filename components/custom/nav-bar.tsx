"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pages } from "@/lib/utils";

interface NavBarProps {
  pRef: any;
}

const NavBar: React.FC<NavBarProps> = ({ pRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = pRef.current.current;
      if (currentPosition > scrollPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollPosition(currentPosition);
    };
    const container = document.querySelector(".parallax-scroll");
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, pRef]);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

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
      <button onClick={() => pRef.current.scrollTo(0)} className="nav-button">
        Home
      </button>
      <button onClick={() => pRef.current.scrollTo(1)} className="nav-button">
        About
      </button>
      <button
        onClick={() => pRef.current.scrollTo(pages.projects.start)}
        className="nav-button"
      >
        Projects
      </button>
    </motion.nav>
  );
};

export default NavBar;

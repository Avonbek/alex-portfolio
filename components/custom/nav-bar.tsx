"use client";

import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

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
  const handleClick = (clickedRef: any) => {
    clickedRef.current?.scrollIntoView({});
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.6,
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
      {/* <div className="nav-divider"></div>
      <button
        onClick={() => console.log("handle contact btn click")}
        className="nav-hamburger"
      >
        <GiHamburgerMenu />
      </button> */}
    </motion.nav>
  );
}

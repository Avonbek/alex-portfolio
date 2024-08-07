"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavBarProps {
  pRef: any;
}

const NavBar: React.FC<NavBarProps> = ({ pRef }) => {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="nav"
    >
      <button onClick={() => pRef.current.scrollTo(0)} className="nav-button">
        Home
      </button>
      <button onClick={() => pRef.current.scrollTo(1)} className="nav-button">
        About
      </button>
      <button onClick={() => pRef.current.scrollTo(4)} className="nav-button">
        Projects
      </button>
    </motion.nav>
  );
};

export default NavBar;

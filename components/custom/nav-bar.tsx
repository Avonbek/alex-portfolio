"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="nav"
    >
      <button className="nav-button">Home</button>
      <button className="nav-button">Skills</button>
      <button className="nav-button">Projects</button>
    </motion.nav>
  );
};

export default NavBar;

"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { HiArrowLongDown } from "react-icons/hi2";

export default function Hero() {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      className="flex flex-col justify-center items-center"
    >
      {/* First Last Name */}
      <div className="hero">
        <h1>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Alex
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Threet
          </motion.div>
        </h1>
        {/* Title */}
        <h2>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Software Engineer
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            &nbsp;&nbsp;-&nbsp;&nbsp;
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Full Stack Developer
          </motion.div>
        </h2>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="down-arrow-footer"
      >
        <HiArrowLongDown size={50} />
      </motion.div>
    </ParallaxLayer>
  );
}

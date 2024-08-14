"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";
import { HiArrowLongDown } from "react-icons/hi2";

export default function Hero() {
  const duration = 0.5;
  const delay = 0.5;
  return (
    <Fragment>
      {/* First Last Name */}
      <div className="hero">
        <h1 className="hero-title">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: duration }}
          >
            Alex
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: duration }}
          >
            Threet
          </motion.div>
        </h1>
        {/* Title */}
        <h2 className="hero-subtitle">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: delay }}
          >
            Full Stack Developer
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: delay }}
          >
            &nbsp;&nbsp;-&nbsp;&nbsp;
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: delay }}
          >
            AI Engineer
          </motion.div>
        </h2>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration, delay: delay * 2 }}
        className="down-arrow-footer"
      >
        <HiArrowLongDown size={50} />
      </motion.div>
    </Fragment>
  );
}

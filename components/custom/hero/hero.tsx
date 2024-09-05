"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";
import { HeroInfiniteMovingCards } from "./hero-infinite-moving-cards";
import { Canvas } from "@react-three/fiber";
import { RotatingSphere } from "./rotating-sphere";

export default function Hero() {
  const duration = 0.5;
  const delay = 0.5;
  return (
    <Fragment>
      {/* First Last Name */}
      <div className="hero">
        <div className="hero-content-parent">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: duration }}
            className="hero-text-parent"
          >
            <h1 className="hero-title">Alex Threet</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <h3 className="hero-description">
              I build reactive, scalable, and maintainable web applications from
              the ground up.
            </h3>
          </motion.div>

          <Canvas className="hero-3d-canvas">
            <ambientLight />
            <RotatingSphere />
          </Canvas>
        </div>
      </div>

      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: duration, delay: delay }}
        className="hero-moving-card-parent"
      >
        <HeroInfiniteMovingCards
          items={cardContent}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </motion.div>
    </Fragment>
  );
}

const cardContent = [
  "React",
  "Next.js",
  "Node.js",
  "Typescript",
  "Python",
  "C#",
  "SQL",
  "Git",
];

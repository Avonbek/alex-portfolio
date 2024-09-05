"use client";

import { Fragment, FC, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { HeroInfiniteMovingCards } from "./hero-infinite-moving-cards";
import dynamic from "next/dynamic";
// import NewScene from "../scene/new-scene";

const Scene = dynamic(() => import("@/components/custom/scene/scene"), {
  ssr: false,
  // loading: () => <div>Loading Scene...</div>,
});

type HeroProps = {
  loaded: boolean;
  setLoaded: any;
};

export default function Hero({ loaded, setLoaded }: HeroProps) {
  const duration = 0.5;
  const delay = 0.5;

  // --- RENDER ---

  return (
    <Fragment>
      {/* First Last Name */}
      <div className="hero">
        <div className="hero-content-parent">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={loaded ? { x: 0, opacity: 1 } : {}}
            // animate={{ x: 0, opacity: 1 }}
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

          {/* 3D Sphere */}

          <Suspense fallback={null}>
            <Scene onLoaded={() => setLoaded(true)} />
          </Suspense>
        </div>
      </div>
    </Fragment>
  );
}

{
  /* <motion.div
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
      </motion.div> */
}

// const cardContent = [
//   "React",
//   "Next.js",
//   "Node.js",
//   "Typescript",
//   "Python",
//   "C#",
//   "SQL",
//   "Git",
// ];

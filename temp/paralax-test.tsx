"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ imageUrl }: { imageUrl: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={imageUrl} alt="sample image" />
      </div>
      <motion.h2 style={{ y }}>{`#00${imageUrl}`}</motion.h2>
    </section>
  );
}

const sampleImgUrls = [
  "/artifact-depot.webp",
  "/manor-gate.webp",
  "/town-street.webp",
];

export default function ParalaxTest() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {sampleImgUrls.map((imageUrl) => (
        <Image key={imageUrl} imageUrl={imageUrl} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { HiArrowLongDown } from "react-icons/hi2";

type ProjectsHeaderProps = {
  visibility: any;
  variants: any;
};

export default function ProjectsHeader({
  visibility,
  variants,
}: ProjectsHeaderProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], ["0.8", "1.2"]);

  // Vertical movement: from the center (0) to slightly above (-20vh)
  const arrowY = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

  // Horizontal movement: from the center (0vw) to the respective sides (50vw and -50vw)
  const arrowXLeft = useTransform(scrollYProgress, [0, 1], ["0vw", "-50vw"]);
  const arrowXRight = useTransform(scrollYProgress, [0, 1], ["0vw", "50vw"]);

  return (
    <section className="projects-header">
      <div ref={ref} className="projects-parent">
        <motion.h2
          style={{ scale: scaleY }}
          animate={visibility.projects ? "visible" : "hiddenBottom"}
          variants={variants}
          className="title"
        >
          Projects
          {/* <motion.div
            animate={visibility.projects ? "visible" : "hiddenRight"}
            initial="hiddenRight"
            variants={variants}
            transition={{ duration: 1, delay: 0.5 }}
            className="underline border-2 !w-[100px] mt-2"
          /> */}
        </motion.h2>
      </div>
    </section>
  );
}

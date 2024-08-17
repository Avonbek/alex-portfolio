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
    offset: ["start end", "center center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], ["0.8", "1"]);
  const arrowY = useTransform(scrollYProgress, [0, 1], ["100px", "50px"]);

  return (
    <section className="projects-header">
      <div ref={ref} className="line-parent">
        <motion.h2
          style={{ scale: scaleY }}
          animate={visibility.projects ? "visible" : "hiddenBottom"}
          variants={variants}
          className="title"
        >
          Projects
        </motion.h2>

        <motion.div className="down-arrow-footer">
          <HiArrowLongDown size={50} />
        </motion.div>
      </div>
    </section>
  );
}

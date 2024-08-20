import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

  const scaleY = useTransform(scrollYProgress, [0, 1], ["1", "1.3"]);

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
          <motion.div
            animate={visibility.projects ? "expanded" : "collapsed"}
            variants={variants}
            transition={{ duration: 1, delay: 0.5 }}
            className="underline border-2 !w-[100px] mt-2"
          />
        </motion.h2>
        <motion.div
          animate={visibility.projects ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <HiArrowLongDown size={60} />
        </motion.div>
      </div>
    </section>
  );
}

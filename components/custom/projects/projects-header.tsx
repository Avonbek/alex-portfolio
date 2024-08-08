import { motion } from "framer-motion";
import { ProjectsHeaderGrid } from "./projects-header-grid";

type ProjectsHeaderProps = {
  visibility: any;
  variants: any;
};

export default function ProjectsHeader({
  visibility,
  variants,
}: ProjectsHeaderProps) {
  return (
    <section className="projects-header">
      <motion.h2
        animate={visibility.projects ? "visible" : "hiddenBottom"}
        variants={variants}
        className="title"
      >
        Projects
        <div className="underline"></div>
      </motion.h2>

      {/* Bento grid? */}
      <div className="projects-header-grid">
        <ProjectsHeaderGrid />
      </div>
    </section>
  );
}

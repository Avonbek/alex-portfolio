import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { bentoGridItems } from "./projects-header-data";
import { cn } from "@/lib/utils";

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
      </motion.h2>

      <BentoGrid className="projects-header-grid">
        {bentoGridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("projects-header-grid-item", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

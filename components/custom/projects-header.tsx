type ProjectsHeaderProps = {
  visibility: any;
  variants: any;
};

export default function ProjectsHeader({
  visibility,
  variants,
}: ProjectsHeaderProps) {
  return (
    <div className="projects-header">
      <h2 className="title">
        Projects
        <div className="underline"></div>
      </h2>

      {/* plan: Make a simple bento grid showcasing Simweaver on the left, SpawnArt on the right.
          They should each take up around 30% of the screen, leaving some negative space */}
    </div>
  );
}

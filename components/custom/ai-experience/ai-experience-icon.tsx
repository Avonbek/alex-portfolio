type AiExperienceIconProps = {
  icon: any;
  title: string;
  text: string;
};

export default function AiExperienceIcon({
  icon,
  title,
  text,
}: AiExperienceIconProps) {
  return (
    <div className="ai-experience-icon-container">
      <div className="ai-experience-icon">{icon}</div>
      <h3 className="ai-experience-icon-title">{title}</h3>
      <p className="ai-experience-icon-text">{text}</p>
    </div>
  );
}

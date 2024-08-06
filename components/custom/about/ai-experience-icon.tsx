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
    <div className="flex flex-col gap-2 items-center justify-center w-[26%]">
      {icon}
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

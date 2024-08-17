"use client";

import { CustomTabs } from "@/components/custom/about/custom-tabs";
import SkillBar from "./skill-bar";

const skills = [
  { text: "React", width: "90%" },
  { text: "Next.js", width: "90%" },
  { text: "Typescript", width: "90%" },
  { text: "CSS", width: "75%" },
  { text: "HTML", width: "75%" },
  { text: "Python", width: "75%" },
  { text: "C#", width: "55%" },
  { text: "SQL", width: "55%" },
];

const libraries = [
  { text: "Tailwind", width: "90%" },
  { text: "Framer Motion", width: "90%" },
  { text: "Zustand", width: "90%" },
  { text: "Redux", width: "75%" },
  { text: "Langchain", width: "75%" },
  { text: "React Flow", width: "75%" },
  { text: "React Spring", width: "55%" },
  { text: "Pandas", width: "55%" },
  { text: "Prisma", width: "55%" },
];

const miscellaneous = [
  { text: "SolidJS", width: "90%" },
  { text: "Firebase", width: "75%" },
  { text: "Supabase", width: "75%" },
  { text: "Batch Scripting", width: "55%" },
];

type SkillsTabsProps = {
  visibility: any;
  initialDelay: number;
  delayIncrement: number;
};

export function SkillsTabs({
  visibility,
  initialDelay,
  delayIncrement,
}: SkillsTabsProps) {
  const tabs = [
    {
      title: "Skills",
      value: "general",
      content: (
        <div className={`skill-tab-content-background`}>
          <div className="skill-bar-parent">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.text}
                visibility={visibility}
                width={skill.width}
                delay={initialDelay + index * delayIncrement}
                text={skill.text}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Libraries",
      value: "libraries",
      content: (
        <div className={`skill-tab-content-background`}>
          <div className="skill-bar-parent">
            {libraries.map((library, index) => (
              <SkillBar
                key={library.text}
                visibility={visibility}
                width={library.width}
                delay={initialDelay + index * delayIncrement}
                text={library.text}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Other",
      value: "other",
      content: (
        <div className={`skill-tab-content-background`}>
          <div className="skill-bar-parent">
            {miscellaneous.map((misc, index) => (
              <SkillBar
                key={misc.text}
                visibility={visibility}
                width={misc.width}
                delay={initialDelay + index * delayIncrement}
                text={misc.text}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full h-full justify-center">
      <div className="relative flex flex-col w-full h-fit max-w-5xl justify-start b [perspective:1000px]">
        <CustomTabs tabs={tabs} visibility={visibility} />
      </div>
    </div>
  );
}

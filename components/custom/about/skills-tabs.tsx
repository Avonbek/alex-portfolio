"use client";

import Image from "next/image";
import { CustomTabs } from "@/components/custom/custom-tabs";
import { AnimatePresence, motion } from "framer-motion";
import SkillBar from "./skill-bar";

const generalSkills = [
  { text: "React", width: "90%" },
  { text: "Next.js", width: "90%" },
  { text: "Typescript", width: "90%" },
  { text: "CSS", width: "75%" },
  { text: "HTML", width: "75%" },
  { text: "Python", width: "75%" },
  { text: "C#", width: "55%" },
  { text: "Databases", width: "55%" },
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
          <div>Skills</div>
          <div className="skill-bar-parent">
            {generalSkills.map((skill, index) => (
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
          <p>Libraries</p>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className={`skill-tab-content-background`}>
          <p>Services tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <CustomTabs tabs={tabs} visibility={visibility} />
    </div>
  );
}

"use client";

import Image from "next/image";
import { CustomTabs } from "@/components/custom/custom-tabs";
import { AnimatePresence, motion } from "framer-motion";
import SkillBar from "./skill-bar";

const skills = [
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
      title: "General Skills",
      value: "general",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <AnimatePresence>
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
          </AnimatePresence>
        </div>
      ),
    },
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <CustomTabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

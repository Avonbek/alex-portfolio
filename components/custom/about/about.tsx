import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shad-tabs";

import SkillBar from "./skill-bar";
import { useState } from "react";

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

type AboutProps = {
  visibility: any;
  variants: any;
};

export default function About({ visibility, variants }: AboutProps) {
  const initialDelay = 0.5;
  const delayIncrement = 0.05;

  const [tab, setTab] = useState(
    "general" as "general" | "libraries" | "other"
  );

  const onTabChange = (value: any) => {
    setTab(value);
  };

  return (
    <motion.section
      animate={visibility.about ? "visible" : "hiddenLeft"}
      variants={variants}
      className="about"
    >
      {/* About Me */}
      <div className="about-me">
        <Image
          src="/me-and-mabel-edited.png"
          alt="Picture of the author and his cat Mable"
          width={270}
          height={270}
          className="about-me-image"
        />
        <h2 className="about-me-title">About Me</h2>
        <h3 className="about-me-description">
          My goal is to create software that is both beautiful and functional.
        </h3>
      </div>

      <div className="about-skills">
        {/* <h2 className="title">My Skills</h2> */}

        <Tabs
          value={tab}
          onValueChange={onTabChange}
          className="flex flex-col w-full overflow-hidden"
        >
          <div className="flex flex-col w-full items-center text-lg gap-2">
            <TabsList className={`w-fit grid grid-cols-3 mb-2`}>
              <TabsTrigger value="general">General Skills</TabsTrigger>
              <TabsTrigger value="libraries">Libraries</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>

          {/* General Skills Tab */}
          <AnimatePresence>
            {tab === "general" && (
              <TabsContent
                className="flex flex-col h-full gap-1 w-full"
                value="general"
              >
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
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.section>
  );
}

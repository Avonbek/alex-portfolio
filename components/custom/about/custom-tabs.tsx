"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const CustomTabs = ({
  tabs: propTabs,
  visibility,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  visibility: any;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  useLayoutEffect(() => {
    const newTabs = [...propTabs];
    setTabs(newTabs);
    setActive(newTabs[0]);
  }, [visibility.about, propTabs]);

  return (
    <>
      <div
        className={cn(
          "skill-tab-list-background no-visible-scrollbar",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                className={cn(
                  "absolute inset-0 bg-white bg-opacity-5 dark:bg-zinc-800 rounded-full border border-white border-opacity-20",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-white dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-1", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="flex justify-center items-center relative w-full h-full">
      <AnimatePresence>
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              zIndex: -idx,
              opacity: idx === 0 ? 1 : 0,
            }}
            exit={{ opacity: 0 }}
            animate={{
              y: isActive(tab) ? [-10, 0] : 0,
              x: isActive(tab) ? [-10, 0] : 0,
              opacity: isActive(tab) ? [0.4, 1] : 0,
            }}
            transition={{
              type: "spring",
              // mass: 1,
              duration: 1,
            }}
            // className={cn("flex w-[100%] h-full border", className)}
            className={cn("w-full h-full absolute top-0 left-0", className)}
          >
            {tab.content}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

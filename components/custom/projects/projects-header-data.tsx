import React from "react";
import { IconClipboardCopy, IconFileBroken } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const bentoGridItems = [
  {
    title: (
      <Image
        src={"/logos/Simweaver_Logo_Horizontal.svg"}
        alt="Simweaver Logo"
        width={200}
        height={200}
        quality="100"
        className="rounded-md object-cover"
      />
    ),
    description: (
      <span className="text-sm">
        Web-based game engine powered by AI language models.
      </span>
    ),
    header: <SkeletonOne />,
    className: "",
    icon: null,
  },
  {
    title: (
      <Image
        src={"/logos/Spawn_Logo_full_white_SVG.svg"}
        alt="Spawnart Logo"
        width={200}
        height={200}
        quality="100"
        className="rounded-md object-cover"
      />
    ),
    description: (
      <span className="text-sm">
        AI text-to-image platform that can generate from your local machine.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "",
    icon: null,
  },
];

function SkeletonOne() {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 justify-center items-center relative w-full h-full min-h-[6rem] flex-col space-y-2 dot"
    >
      {/* <Image
        src={"/map-dark.png"}
        alt="Simweaver Logo"
        fill
        quality="100"
        className="rounded-md object-cover"
      /> */}
    </motion.div>
  );
}

function SkeletonTwo() {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 dot"
    >
      {/* {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))} */}
    </motion.div>
  );
}

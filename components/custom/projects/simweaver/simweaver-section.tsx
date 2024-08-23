import Image from "next/image";
import { motion } from "framer-motion";
import { CustomInfiniteMovingCards } from "../custom-infinite-moving-cards";

export default function SimweaverSection({ visibility, variants }: any) {
  // replace with logo
  return (
    <>
      <div className="project-section">
        <motion.div
          animate={visibility.simweaver ? "visible" : "hiddenLeft"}
          initial="hiddenLeft"
          variants={variants}
          className="simweaver-title"
        >
          <Image
            src={"/logos/Simweaver_Logo_Horizontal.svg"}
            alt="Simweaver Logo"
            loading="eager"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
          />
        </motion.div>
        <motion.h2
          animate={visibility.simweaver ? "visible" : "hiddenRight"}
          initial="hiddenRight"
          variants={variants}
          className="hero-subtitle max-w-[600px] mt-4"
        >
          Create games powered by AI.
        </motion.h2>
        {/* maybe this could be an image carousel? Or we could open with a video? */}
        <motion.div
          animate={visibility.simweaver ? "visibleSlow" : "hidden"}
          initial="hidden"
          variants={variants}
          className="flex justify-center my-8 gap-4 w-full"
        >
          <div className="text-start rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-3">
            <CustomInfiniteMovingCards
              items={cardContent}
              direction="left"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </motion.div>
        <motion.div
          animate={visibility.simweaver ? "visibleSlow" : "hidden"}
          initial="hidden"
          variants={variants}
          className="flex mt-auto gap-4"
        >
          <a href="https://simweaver.com/" target="_blank" rel="noreferrer">
            <button className="colored-btn">Visit Website</button>
          </a>
        </motion.div>
      </div>
    </>
  );
}

const cardContent = [
  {
    quote: (
      <Image
        src={"/simweaver-screenshots/map-light.png"}
        alt="Simweaver Map"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        quality={100}
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Build Worlds",
    title: "Weave worlds together using the custom map editor.",
  },
  {
    quote: (
      <Image
        src={"/simweaver-screenshots/exposition-light.png"}
        alt="Simweaver Exposition"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Tell Stories",
    title: "Combine images, videos and text to enrich your narrative.",
  },
  {
    quote: (
      <Image
        src={"/simweaver-screenshots/dialog-light.png"}
        alt="Simweaver Dialog"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
        }}
      />
    ),
    name: "Talk to Characters",
    title: "All characters are powered by AI, allowing dynamic interactions.",
  },
  {
    quote: (
      <Image
        src={"/simweaver-screenshots/trade-ui-light.png"}
        alt="Simweaver Trade"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
        }}
      />
    ),
    name: "Add Complex Interactions",
    title: "Simweaver is more than just a chatbot, it's a full game engine.",
  },
  {
    quote: (
      <Image
        src={"/simweaver-screenshots/object-editor-light.png"}
        alt="Simweaver Editor"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        quality={100}
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
        priority
      />
    ),
    name: "Customize Everything",
    title: "All characters, locations and objects are fully customizable.",
  },
];

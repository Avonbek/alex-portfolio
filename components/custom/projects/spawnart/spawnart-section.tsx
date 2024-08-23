import Image from "next/image";
import { CustomInfiniteMovingCards } from "../custom-infinite-moving-cards";
import { motion } from "framer-motion";
import SpawnLogo from "/public/logos/Spawn_Logo_full_white_SVG.svg";

export default function SpawnartSection({ visibility, variants }: any) {
  // replace with logo
  return (
    <>
      <div className="project-section">
        <motion.div
          animate={visibility.spawnart ? "visible" : "hiddenLeft"}
          initial="hiddenLeft"
          variants={variants}
          className="spawnart-title"
        >
          <Image
            src={SpawnLogo}
            alt="Spawnart Logo"
            loading="eager"
            width={1}
            height={1}
            sizes="100%"
            style={{ width: "auto", height: "100%", borderRadius: "0rem" }}
          />
        </motion.div>
        <motion.h2
          animate={visibility.spawnart ? "visible" : "hiddenRight"}
          initial="hiddenRight"
          variants={variants}
          className="hero-subtitle max-w-[600px] mt-6"
        >
          Generate images from text locally.
        </motion.h2>
        {/* maybe this could be an image carousel? Or we could open with a video? */}
        <motion.div
          animate={visibility.spawnart ? "visibleSlow" : "hidden"}
          initial="hidden"
          variants={variants}
          className="flex justify-center my-8 gap-4 w-full"
        >
          <div className="text-start rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <CustomInfiniteMovingCards
              items={cardContent}
              direction="left"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </motion.div>
        <motion.div
          animate={visibility.spawnart ? "visibleSlow" : "hidden"}
          initial="hidden"
          variants={variants}
          className="flex mt-auto"
        >
          <a href="https://spawnart.ai/" target="_blank" rel="noreferrer">
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
        src={"/spawnart-screenshots/genetics.webp"}
        alt="Spawnart genetics"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Create Genetic Art",
    title: "Generate prompts via genetic algorithms.",
  },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/local-generation.webp"}
        alt="Spawnart local generation"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Generate Locally",
    title: "Use your own hardware to generate images anytime, anywhere.",
  },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/resource-pooling.webp"}
        alt="Spawnart resource pooling"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Pool Resources",
    title: "Combine multiple GPUs to speed up the generation process.",
  },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/ratings.png"}
        alt="Spawnart ratings"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Organize Content",
    title:
      "Utilize folders, tags and ratings to help keep track of your images.",
  },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/download-model.webp"}
        alt="Spawnart download model"
        loading="eager"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Use Custom Models",
    title: "Download models and loras directly to your interface.",
  },
];

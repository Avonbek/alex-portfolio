import Image from "next/image";
import { CustomInfiniteMovingCards } from "../custom-infinite-moving-cards";

export default function SpawnartSection({ visibility, variants }: any) {
  // replace with logo
  return (
    <>
      <div className="project-section">
        <div className="spawnart-title">
          <Image
            src={"/logos/Spawn_Logo_full_white_SVG.svg"}
            alt="Simweaver Logo"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
          />
        </div>
        <h2 className="hero-subtitle max-w-[600px] mt-6">
          Generate images from text locally.
        </h2>
        {/* maybe this could be an image carousel? Or we could open with a video? */}
        <div className="flex justify-center my-8 gap-4 w-full">
          <div className="text-start rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <CustomInfiniteMovingCards
              items={cardContent}
              direction="right"
              speed="slow"
              pauseOnHover={false}
            />
          </div>
        </div>
        <div className="flex mt-auto">
          <a href="https://spawnart.ai/" target="_blank" rel="noreferrer">
            <button className="colored-btn">Visit Website</button>
          </a>
        </div>
      </div>
    </>
  );
}

const cardContent = [
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/genetics.webp"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Create Genetic Art",
    title: "Generate prompts via genetic algorithms.",
  },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/local-generation.webp"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Generate Locally",
    title: "Use your own hardware to generate images anytime, anywhere.",
  },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/resource-pooling.webp"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Pool Resources",
    title: "Combine multiple GPUs to speed up the generation process.",
  },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/ratings.png"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Organize Content",
    title:
      "Utilize folders, tags and ratings to help keep track of your images.",
  },
  // {
  //   quote: (
  //     <Image
  //       src={"/spawnart-screenshots/ratings.png"}
  //       alt="Simweaver Logo"
  //       width={0}
  //       height={0}
  //       sizes="100%"
  //       style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
  //     />
  //   ),
  //   name: "Advanced Search",
  //   title: "Find images by description, or by similarity to another image.",
  // },
  {
    quote: (
      <Image
        src={"/spawnart-screenshots/download-model.webp"}
        alt="Simweaver Logo"
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

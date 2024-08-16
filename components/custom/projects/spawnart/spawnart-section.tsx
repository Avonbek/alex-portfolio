import Image from "next/image";
import { CustomInfiniteMovingCards } from "../../custom-infinite-moving-cards";

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
              direction="left"
              speed="slow"
            />
          </div>
        </div>
        <div className="flex mt-auto">
          <a href="https://spawnart.ai/" target="_blank" rel="noreferrer">
            <button className="spawnart-btn">Visit Website</button>
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
        src={"/manor-gate.webp"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Placeholder Title 1",
    title: "Lorem Ipsum",
  },
  {
    quote: (
      <Image
        src={"/artifact-depot.webp"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Placeholder Title 2",
    title: "Lorem Ipsum",
  },
  {
    quote: (
      <Image
        src={"/town-street.webp"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Placeholder Title 3",
    title: "Lorem Ipsum",
  },
];

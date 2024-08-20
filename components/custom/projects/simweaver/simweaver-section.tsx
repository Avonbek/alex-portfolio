import Image from "next/image";
import { CustomInfiniteMovingCards } from "../custom-infinite-moving-cards";

export default function SimweaverSection({ visibility, variants }: any) {
  // replace with logo
  return (
    <>
      <div className="project-section">
        <div className="simweaver-title">
          <Image
            src={"/logos/Simweaver_Logo_Horizontal.svg"}
            alt="Simweaver Logo"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
          />
        </div>
        <h2 className="hero-subtitle max-w-[600px] mt-4">
          Create games powered by AI.
        </h2>
        {/* maybe this could be an image carousel? Or we could open with a video? */}
        <div className="flex justify-center my-8 gap-4 w-full">
          <div className="text-start rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-3">
            <CustomInfiniteMovingCards
              items={cardContent}
              direction="left"
              speed="slow"
              pauseOnHover={false}
            />
          </div>
        </div>
        <div className="flex mt-auto gap-4">
          <a href="https://simweaver.com/" target="_blank" rel="noreferrer">
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
        src={"/simweaver-screenshots/map-2.png"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        quality={100}
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Build Worlds",
    title: "Weave worlds together using the custom map editor.",
  },
  {
    quote: (
      <Image
        src={"/simweaver-screenshots/exposition.png"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
      />
    ),
    name: "Tell Stories",
    title: "Combine images, videos and text to enrich your narrative.",
  },
  {
    quote: (
      <Image
        src={"/simweaver-screenshots/dialog.png"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        style={{
          width: "auto",
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
        src={"/simweaver-screenshots/editing-object.png"}
        alt="Simweaver Logo"
        width={0}
        height={0}
        sizes="100%"
        quality={100}
        style={{ width: "auto", height: "100%", borderRadius: "0.5rem" }}
        priority
      />
    ),
    name: "Customize Everything",
    title: "All characters, locations and objects are fully customizable.",
  },
];

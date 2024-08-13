// plan: Could add some images or something...
// some description of what you can do with Simweaver?

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

export default function SimweaverTitle({ visibility, variants }: any) {
  // replace with logo
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-md p-5 w-full">
        <Image
          src={"/logos/Simweaver_Logo_Horizontal.svg"}
          alt="Simweaver Logo"
          width={400}
          height={400}
          quality="100"
          className="rounded-md object-cover"
        />
        <h2 className="hero-subtitle max-w-[600px] mt-4">
          Create games powered by AI.
        </h2>
        {/* maybe this could be an image carousel? Or we could open with a video? */}
        <div className="flex justify-center my-8 gap-4 w-full">
          <div className="text-start rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={cardContent}
              direction="left"
              speed="slow"
            />
          </div>

          {/* <Image
            src={"/artifact-depot.webp"}
            alt="Simweaver Logo"
            width={300}
            height={300}
            quality="100"
            className="rounded-md"
          /> */}
          {/* placeholder img */}
          {/* <Image
            src={"/manor-gate.webp"}
            alt="Simweaver Logo"
            width={300}
            height={300}
            quality="100"
            className="rounded-md"
          /> */}
          {/* <Image
            src={"/town-street.webp"}
            alt="Simweaver Logo"
            width={300}
            height={300}
            quality="100"
            className="rounded-md"
          /> */}
        </div>
        <div className="flex mt-auto gap-4">
          <button className="simweaver-btn">Website</button>
          {/* <button className="simweaver-btn">Github</button> */}
        </div>
      </div>
    </>
  );
}

const cardContent = [
  {
    quote: (
      <Image
        src={"/artifact-depot.webp"}
        alt="Simweaver Logo"
        width={200}
        height={200}
        quality="100"
        className="rounded-md"
      />
    ),
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  // {
  //   quote:
  //     "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //   name: "William Shakespeare",
  //   title: "Hamlet",
  // },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];

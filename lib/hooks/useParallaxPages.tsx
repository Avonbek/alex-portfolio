import { MotionValue, useTransform } from "framer-motion";

export default function useParallaxPages(
  pageCount: number,
  scrollY: MotionValue<number>,
  screenHeight: number,
  margin = 0.5
) {
  const yList: MotionValue<number>[] = [];
  console.log("useParallaxPages");

  for (let i = 0; i < pageCount; i++) {
    console.log("useParallaxPages loop", i);
    const start = screenHeight * i;
    const end = screenHeight * (i + margin);
    yList.push(useTransform(scrollY, [start, end], [0, end - start]));
  }

  return yList;
}

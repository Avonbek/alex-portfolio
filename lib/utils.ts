import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  visibleSlow: { opacity: 1, x: 0, transition: { duration: 1.3 } },
  hidden: { opacity: 0 },
  hiddenLeft: { opacity: 0, x: -70 },
  hiddenRight: { opacity: 0, x: 70 },
  hiddenBottom: { opacity: 0, y: 70 },
  collapsed: { width: 0 },
  expanded: { width: "100%", duration: 1 },
};

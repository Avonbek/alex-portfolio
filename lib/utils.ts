import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pages = {
  about: {
    start: 1,
    end: 1.4,
  },
  aboutExperience: {
    start: 2.5,
    end: 2.9,
  },
  projects: {
    start: 3.8,
    end: 4.3,
  },
  simweaver: {
    start: 5.2,
    end: 9,
  },
  simweaverContentOne: {
    start: 5.2,
    end: 5.7,
  },
  simweaverContentTwo: {
    start: 6.6,
    end: 7.1,
  },
};

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

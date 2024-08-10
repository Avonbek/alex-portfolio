import { useTransform, useScroll } from "framer-motion";

const useStickyTransform = (
  start: number,
  end: number,
  stickyDuration: number
) => {
  const { scrollY } = useScroll();

  return useTransform(scrollY, (latest) => {
    if (latest < start) {
      return 0;
    } else if (latest >= start && latest < start + stickyDuration) {
      return start;
    } else if (latest >= start + stickyDuration && latest <= end) {
      return latest - stickyDuration;
    } else {
      return end - stickyDuration;
    }
  });
};

export default useStickyTransform;

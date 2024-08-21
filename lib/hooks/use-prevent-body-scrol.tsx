import { useEffect } from "react";

export function usePreventBodyScroll(targetSelector: string) {
  useEffect(() => {
    const targetElement = document.querySelector(targetSelector);

    const preventScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const allowScroll = () => {
      document.body.style.overflow = "";
    };

    if (targetElement) {
      targetElement.addEventListener("mouseenter", preventScroll);
      targetElement.addEventListener("mouseleave", allowScroll);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (targetElement) {
        targetElement.removeEventListener("mouseenter", preventScroll);
        targetElement.removeEventListener("mouseleave", allowScroll);
      }
    };
  }, [targetSelector]);
}

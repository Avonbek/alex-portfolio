import { AnimatePresence, motion, animate } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
// import {} from "ga-gtag";

interface AssistantToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
  loaded: boolean;
}

export default function AssistantToggleButton({
  isOpen,
  onClick,
  loaded,
}: AssistantToggleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // --- RENDER ---

  return (
    <motion.button
      id="ai-assistant-btn"
      ref={buttonRef}
      initial={{ y: -100 }}
      animate={
        loaded
          ? {
              y: 0,
              boxShadow: "0 0 5px rgba(0, 128, 128, 0.5)",
              transition: { duration: 0.5, delay: 0.5 },
            }
          : {}
      }
      whileHover={{
        boxShadow: [
          "0 0 5px rgba(0, 255, 255, 0.5)",
          "0 0 10px rgba(0, 255, 255, 0.8)",
        ],
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      onHoverEnd={() => {
        if (!buttonRef.current) return;
        animate(
          buttonRef.current,
          {
            boxShadow: "0 0 5px rgba(0, 128, 128, 0.5)",
          },
          {
            duration: 0.2,
            ease: "easeInOut",
          }
        );
      }}
      onClick={onClick}
      className="ai-assistant-btn"
    >
      <AnimatePresence mode={"wait"}>
        {isOpen ? (
          <motion.div
            key="chevron"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={30} />
          </motion.div>
        ) : (
          <motion.div
            key="ai"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className="ai-assistant-btn-text-wide">AI Assistant</div>
            <div className="ai-assistant-btn-text-small">AI</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

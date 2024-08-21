import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AssistantToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function AssistantToggleButton({
  isOpen,
  onClick,
}: AssistantToggleButtonProps) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="ai-assistant-btn"
    >
      <AnimatePresence mode={"popLayout"}>
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
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            AI
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

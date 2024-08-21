import { motion } from "framer-motion";
import ChatMessage from "./chat-message";

export default function ThinkingAnimation() {
  return (
    <motion.div
      initial={{ y: 70 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
      }}
    >
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <ChatMessage message={{ text: "Thinking...", isUser: false }} />
      </motion.div>
    </motion.div>
  );
}

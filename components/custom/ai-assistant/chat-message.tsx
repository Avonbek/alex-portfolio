import { message } from "@/lib/types";
import { RiRobot2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function ChatMessage({ message }: { message: message }) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (message.isUser) {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="ai-assistant-message-body justify-end"
      >
        <div className="ai-assistant-chat-bubble !bg-[var(--teal-dark)]">
          {message.text}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="ai-assistant-message-body"
      >
        <RiRobot2Fill size={25} className="ai-assistant-icon" />
        <div className="ai-assistant-chat-bubble">{message.text}</div>
      </motion.div>
    );
  }
}

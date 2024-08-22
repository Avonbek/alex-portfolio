import { Message } from "@/lib/types";
import { RiRobot2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import sanitize from "sanitize-html";

export default function ChatMessage({ message }: { message: Message }) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (message.type === "system") {
    return null;
  }

  if (message.type === "user") {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="ai-assistant-message-body justify-end"
      >
        <div className="ai-assistant-chat-bubble !bg-[var(--teal-dark)]">
          {message.content}
        </div>
      </motion.div>
    );
  }

  if (message.type === "assistant") {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="ai-assistant-message-body"
      >
        <RiRobot2Fill size={25} className="ai-assistant-icon" />
        <div
          className="ai-assistant-chat-bubble"
          // dangerouslySetInnerHTML={{ __html: message.html }}
          dangerouslySetInnerHTML={{ __html: sanitize(message.html) }}
        />
      </motion.div>
    );
  }
}

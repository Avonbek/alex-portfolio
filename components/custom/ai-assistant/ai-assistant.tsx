"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { message } from "@/lib/types";
import ChatMessage from "./chat-message";
import toast from "react-hot-toast";
import AssistantToggleButton from "./assistant-toggle-button";
import ThinkingAnimation from "./thinking-animation";
import { usePreventBodyScroll } from "@/lib/hooks/use-prevent-body-scrol";

// PLAN:
// Start work on calling AI model

// TODO: import this and set up route or server action with streaming text response
// new ChatGroq({
//   apiKey: theGroqApiKey,
//   model: selectedModel,
//   temperature,
// });

// Write context for AI model

const suggestions = [
  "Who is Alex?",
  "What are Alex's skills?",
  "Tell me about Alex's projects.",
];

export default function AiAssistant({}) {
  // --- STATE ---
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [userText, setUserText] = useState("");

  // messages
  const [messages, setMessages] = useState<message[]>([
    {
      text: "Hello! I am Alex's portfolio assistant. How can I help you today?",
      isUser: false,
    },
  ]);

  // --- FUNCTIONS ---

  function handleSendMessage(text: string) {
    if (!text) return;
    if (isThinking) {
      toast.loading("Please wait for the AI to respond.", {
        style: {
          background: "var(--teal-dark)",
          color: "var(--slate-100)",
        },
        duration: 2000,
      });
      return;
    }
    setMessages([...messages, { text, isUser: true }]);
    setUserText("");
    setIsThinking(true);
    // callAIModel(text);
    setTimeout(() => {
      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        { text: "Test AI response", isUser: false },
      ]);
    }, 2000);
  }

  function handleScrollToBottom() {
    const chatBody = document.querySelector(".ai-assistant-chat-body");
    if (chatBody) {
      chatBody.scrollTo({
        top: chatBody.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  // --- EFFECTS ---

  useEffect(() => {
    handleScrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setAiAssistantOpen(false);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // --- RENDER ---

  return (
    // ai assistant container (includes chat and toggle button)
    <div className="ai-assistant">
      {/* AI assistant container */}
      <motion.div
        initial={false}
        animate={{
          y: aiAssistantOpen ? 0 : 70,
          scale: aiAssistantOpen ? 1 : 0,
          opacity: aiAssistantOpen ? 1 : 0,
          height: aiAssistantOpen ? "70dvh" : 0,
          width: aiAssistantOpen ? "50dvh" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="ai-assistant-container"
      >
        {/* header */}
        <div className="ai-assistant-chat-header">AI Assistant</div>
        {/* chat body */}
        <div className="ai-assistant-chat-body">
          {/* messages */}
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {/* thinking animation */}
          {isThinking && <ThinkingAnimation />}
        </div>
        {/* textarea body */}
        <div className="flex flex-col mt-auto w-full p-4 gap-2">
          {/* suggestions */}
          <div className="flex justify-end flex-wrap gap-2 mt-2">
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                whileHover={{ backgroundColor: "var(--teal-dark)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSendMessage(suggestion)}
                className="flex items-center justify-center p-2 rounded-lg bg-gray-800 text-[var(--muted-text)] text-sm"
              >
                {suggestion}
              </motion.button>
            ))}
          </div>
          {/* textarea */}
          <textarea
            placeholder="Ask me anything..."
            rows={1}
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSendMessage(userText);
              }
            }}
            className="flex w-full p-3 rounded-full bg-gray-900 border border-[var(--slate-400)] resize-none overflow-hidden"
          />
        </div>
      </motion.div>
      {/* assistant toggle button */}
      <AssistantToggleButton
        isOpen={aiAssistantOpen}
        onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
      />
    </div>
  );
}

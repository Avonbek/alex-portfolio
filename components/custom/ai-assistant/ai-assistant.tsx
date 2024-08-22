"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Message } from "@/lib/types";
import ChatMessage from "./chat-message";
import AssistantToggleButton from "./assistant-toggle-button";
import ThinkingAnimation from "./thinking-animation";
import { handleSendMessage } from "./ai-assistant-utils";

const suggestions = [
  "Who is Alex?",
  "What are Alex's skills?",
  "Tell me about Alex's projects.",
];

export default function AiAssistant({}) {
  // --- STATE ---
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [userText, setUserText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content:
        "Hello! I am Alex's portfolio assistant. How can I help you today?",
      html: `
        <p><strong>Hello!</strong> I am Alex's portfolio assistant. How can I help you today?</p>
      `,
    },
  ]);

  // --- EFFECTS ---

  useEffect(() => {
    if (aiAssistantOpen) {
      textAreaRef.current?.focus();
    }
  }, [aiAssistantOpen]);

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

  // --- HANDLERS ---

  const handleSendMessageCallback = useCallback(
    (userMessage: string) => {
      handleSendMessage(
        userMessage,
        isThinking,
        setIsThinking,
        messages,
        setMessages,
        setUserText
      );
    },
    [isThinking, messages, setIsThinking, setMessages, setUserText]
  );

  function handleScrollToBottom() {
    const chatBody = document.querySelector(".ai-assistant-chat-body");
    if (chatBody) {
      chatBody.scrollTo({
        top: chatBody.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  // --- RENDER ---

  return (
    // ai assistant container (includes chat and toggle button)
    <div onClick={(e) => console.log("test")} className="ai-assistant">
      {/* assistant toggle button */}
      <AssistantToggleButton
        isOpen={aiAssistantOpen}
        onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
      />
      {/* AI assistant container */}
      <div className="flex w-full h-full justify-center">
        <motion.div
          initial={false}
          animate={{
            y: aiAssistantOpen ? 0 : -70,
            x: aiAssistantOpen ? 0 : 200,
            scale: aiAssistantOpen ? 1 : 0,
            opacity: aiAssistantOpen ? 1 : 0,
            height: aiAssistantOpen ? "85dvh" : 0,
            width: aiAssistantOpen ? "100%" : 0,
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
                  whileHover={{ backgroundColor: "var(--teal-800)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessageCallback(suggestion)}
                  className="flex items-center justify-center p-2 rounded-lg bg-teal-900 text-[var(--muted-text)] text-sm"
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
            {/* textarea */}
            <textarea
              ref={textAreaRef}
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
                  handleSendMessageCallback(userText);
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

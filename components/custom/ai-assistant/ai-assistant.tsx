"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Message } from "@/lib/types";
import ChatMessage from "./chat-message";
import toast from "react-hot-toast";
import AssistantToggleButton from "./assistant-toggle-button";
import ThinkingAnimation from "./thinking-animation";

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

  const handleSendMessage = useCallback(
    async (userMessage: string) => {
      const newMessages = [
        ...messages,
        { type: "user", content: userMessage },
      ] as Message[];
      setMessages(newMessages);
      setUserText("");

      const controller = new AbortController();

      try {
        setIsThinking(true);
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: newMessages }),
          signal: controller.signal,
        });
        setIsThinking(false);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let htmlContent = "";

        if (!reader) {
          throw new Error("Failed to get response body reader");
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          console.log("chunk", chunk);
          htmlContent += chunk;

          setMessages((prev) => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage.type === "assistant") {
              return [
                ...prev.slice(0, -1),
                {
                  type: "assistant",
                  content: lastMessage.content + chunk,
                  html: htmlContent,
                },
              ];
            }
            return [
              ...prev,
              { type: "assistant", content: chunk, html: htmlContent },
            ];
          });
        }
      } catch (error) {
        console.error("Error during message streaming:", error);
      } finally {
        setIsThinking(false);
      }
    },
    [messages]
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
    <div className="ai-assistant">
      {/* assistant toggle button */}
      <AssistantToggleButton
        isOpen={aiAssistantOpen}
        onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
      />
      {/* AI assistant container */}
      <motion.div
        initial={false}
        animate={{
          y: aiAssistantOpen ? 0 : -70,
          scale: aiAssistantOpen ? 1 : 0,
          opacity: aiAssistantOpen ? 1 : 0,
          height: aiAssistantOpen ? "80dvh" : 0,
          width: aiAssistantOpen ? "60dvh" : 0,
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
                handleSendMessage(userText);
              }
            }}
            className="flex w-full p-3 rounded-full bg-gray-900 border border-[var(--slate-400)] resize-none overflow-hidden"
          />
        </div>
      </motion.div>
    </div>
  );
}

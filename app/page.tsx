"use client";

import MainContent from "@/components/custom/main-content";
import NavBar from "@/components/custom/nav-bar";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { RiRobot2Fill } from "react-icons/ri";

export default function Home() {
  // refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // AI Assistant
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  return (
    <main>
      <div className={"background-gradient"}></div>
      <NavBar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <MainContent
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {/* AI Assistant */}
      <div className="ai-assistant">
        <motion.div
          animate={{
            y: aiAssistantOpen ? 0 : 70,
            scale: aiAssistantOpen ? 1 : 0,
            opacity: aiAssistantOpen ? 1 : 0,
            height: aiAssistantOpen ? "50dvh" : 0,
            width: aiAssistantOpen ? "40dvh" : 0,
          }}
          transition={{ duration: 0.4 }}
          className="ai-assistant-chat"
        >
          <div className="ai-assistant-chat-header">AI Assistant</div>
          {/* TODO: chat content */}
          <div className="ai-assistant-chat-body overflow-y-auto">
            {/* message-content-body */}
            <div className="flex items-center gap-3">
              <RiRobot2Fill size={25} className="text-[var(--muted-text)]" />
              <div className="ai-assistant-chat-bubble">Hello world!</div>
            </div>
          </div>
          {/* TODO: textarea input */}
          <div className="flex mt-auto w-full p-4">
            <textarea
              className="flex w-full p-2 rounded-lg bg-gray-900 border border-[var(--slate-400)] resize-none overflow-hidden"
              placeholder="Type a message..."
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
            {/* <input
              type="text"
              className="flex w-full p-2 rounded-lg bg-gray-950 border border-[var(--slate-400)]"
              placeholder="Type a message..."
            /> */}
          </div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
          className="ai-assistant-btn"
        >
          AI
        </motion.button>
      </div>
    </main>
  );
}

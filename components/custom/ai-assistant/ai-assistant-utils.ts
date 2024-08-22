import { Message } from "@/lib/types";
import toast from "react-hot-toast";

export const handleSendMessage = async (
  userMessage: string,
  isThinking: boolean,
  setIsThinking: React.Dispatch<React.SetStateAction<boolean>>,
  messages: Message[],
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  setUserText: React.Dispatch<React.SetStateAction<string>>
) => {
  if (isThinking) {
    toast.loading("Please wait for the assistant to finish thinking.", {
      duration: 2000,
    });
    return;
  }

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
};

import type { AIMessageChunk } from "@langchain/core/messages";
import { concat } from "@langchain/core/utils/stream";
import { ChatGroq } from "@langchain/groq";
import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/components/custom/ai-assistant/system-prompt";

// THOUGHT: consider using 3.1 for higher quality responses
// llama-3.1-70b-versatile

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  if (!messages) {
    return NextResponse.json(
      { message: "Messages not found, aborting chat stream" },
      { status: 400 }
    );
  }

  try {
    const llm = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama3-70b-8192",
      temperature: 0.1,
      maxRetries: 2,
      maxTokens: 512,
      streaming: true,
    });

    const stream = await llm.stream([
      { type: "system", content: systemPrompt },
      ...messages,
    ]);

    const readableStream = new ReadableStream({
      async start(controller) {
        let gathered: AIMessageChunk | undefined = undefined;

        for await (const chunk of stream) {
          if (gathered === undefined) {
            gathered = chunk;
          } else {
            gathered = concat(gathered, chunk);
          }

          const contentString = chunk.content as string;
          controller.enqueue(new TextEncoder().encode(contentString));
        }

        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error calling ChatGroq API:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";
import { NextResponse } from "next/server";

// export const runtime = "edge"; - הוסר כדי לתמוך בייצוא סטטי

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const result = await streamText({
      model: openai("gpt-4o"),
      messages: convertToCoreMessages(messages),
      system: "You are a helpful AI assistant",
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in OpenAI chat:", error);
    return NextResponse.json(
      { error: "OpenAI API unavailable or not configured correctly" },
      { status: 503 }
    );
  }
}

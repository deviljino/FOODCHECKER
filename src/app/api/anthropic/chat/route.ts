import { anthropic } from "@ai-sdk/anthropic";
import { convertToCoreMessages, streamText } from "ai";
import { NextResponse } from "next/server";

// export const runtime = "edge"; - הוסר כדי לתמוך בייצוא סטטי

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20240620"),
      messages: convertToCoreMessages(messages),
      system: "You are a helpful AI assistant",
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in Anthropic chat:", error);
    return NextResponse.json(
      { error: "Anthropic API unavailable or not configured correctly" },
      { status: 503 }
    );
  }
}

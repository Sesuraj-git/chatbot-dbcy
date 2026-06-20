import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

// This route runs on the SERVER only.
// That's why it's safe to use the API key here — it never reaches the browser.
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "messages array is required" },
        { status: 400 }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      messages: messages, // [{ role: "user", content: "..." }, ...]
    });

    const reply = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Claude API error:", error);
    return NextResponse.json(
      { error: "Something went wrong talking to Claude." },
      { status: 500 }
    );
  }
}

import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

// 1. Define a Template Function
const tweetPrompt = (topic: string, mood: "funny" | "serious") => `
You are a social media expert.
Topic: ${topic}
Mood: ${mood}

Write a single tweet (max 280 chars).
Include 2 hashtags.
`;

async function main() {
  const topic = "Generative AI";
  const mood = "funny";

  console.log(`🐦 Generating ${mood} tweet about ${topic}...`);

  const { text } = await generateText({
    model: openai(process.env.OPENAI_MODEL_NAME || "gpt-4o"),
    prompt: tweetPrompt(topic, mood),
  });

  console.log(`\n${text}`);
}

main().catch(console.error);

// Output:
// 🐦 Generating funny tweet about Generative AI...

// Asked my generative AI for a one-liner. It handed me a novella about coffee, ethics, and goblins in the cloud. Me: "Just a joke." AI: "Here’s a trilogy." #GenerativeAI #AIhumor

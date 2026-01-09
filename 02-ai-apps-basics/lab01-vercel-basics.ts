import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import dotenv from "dotenv";
import path from "path";

// Load .env from root
dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

async function main() {
  console.log("🤖 Asking OpenAI...");

  const { text } = await generateText({
    model: openai(process.env.OPENAI_MODEL_NAME || "gpt-4o"),
    prompt: "Why is TypeScript better than JavaScript? Answer in 1 sentence.",
  });

  console.log(`\nAnswer: ${text}`);
}

main().catch(console.error);

// Output:
// Answer: TypeScript adds static typing and richer tooling on top of JavaScript,
// catching errors earlier and improving maintainability while compiling down to plain JavaScript for broad compatibility.

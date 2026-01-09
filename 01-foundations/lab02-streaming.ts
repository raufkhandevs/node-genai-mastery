import OpenAI from "openai";
import dotenv from "dotenv";

import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

const MODEL = process.env.OPENAI_MODEL_NAME || "gpt-4o";

async function main() {
  const stream = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Write a haiku about TypeScript." }],
    model: MODEL,
    stream: true,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

main();

// Output:
// TypeScript, typed and true
// Static types guiding the code

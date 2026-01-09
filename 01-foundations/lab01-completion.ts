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
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Explain how AI works in one sentence." },
    ],
    model: MODEL,
  });

  console.log(completion.choices[0].message.content);
}

main();

// Output:
// AI works by training a model on large datasets to learn patterns and relationships,
// then using that learned mapping to make predictions or decisions on new data

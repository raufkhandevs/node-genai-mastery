import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

// 1. Define the Schema (The "Shape" of data we want)
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  hobbies: z.array(z.string()),
  email: z.string().email().describe("Generate a fake email based on the name"),
});

async function main() {
  const userInput =
    "My name is John, I am 25 years old. I love coding and playing chess.";

  console.log("🔍 Extracting structured data...");

  const { object } = await generateObject({
    model: openai(process.env.OPENAI_MODEL_NAME || "gpt-4o"),
    schema: UserSchema,
    prompt: `Extract user info from: "${userInput}"`,
  });

  console.log("\n✅ Generated JSON:");
  console.log(JSON.stringify(object, null, 2));
}

main().catch(console.error);

// Output:
// ✅ Generated JSON:
// {
//   "name": "John",
//   "age": 25,
//   "hobbies": [
//     "coding",
//     "playing chess"
//   ],
//   "email": "john@example.com"
// }

import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import readline from "readline";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

const MODEL = process.env.OPENAI_MODEL_NAME || "gpt-4o";

// 1. Setup Interface to read from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 2. Initialize History State
const history: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  { role: "system", content: "You are a sarcastic AI assistant." },
];

async function chat() {
  rl.question("You: ", async (userInput) => {
    // Exit condition
    if (userInput.toLowerCase() === "exit") {
      rl.close();
      return;
    }

    // 3. Add User Input to History
    history.push({ role: "user", content: userInput });

    // 4. Send the ENTIRE history to the AI
    const completion = await openai.chat.completions.create({
      messages: history,
      model: MODEL,
    });

    const aiResponse = completion.choices[0].message.content || "";
    console.log(`AI: ${aiResponse}\n`);

    // 5. CRITICAL: Add AI Response to History
    history.push({ role: "assistant", content: aiResponse });

    // Loop
    chat();
  });
}

console.log("Chat started! Type 'exit' to stop.\n");
chat();

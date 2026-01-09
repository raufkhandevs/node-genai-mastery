import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

/**
 * ⚠️ IMPORTANT:
 * The "Assistants API" is a proprietary OpenAI feature.
 * This lab will NOT work with Groq, Ollama, or standard Llama models.
 * You MUST have a paid OpenAI account (Credits > $0) to run this.
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  console.log("1. Creating an Assistant...");
  const assistant = await openai.beta.assistants.create({
    name: "Math Tutor",
    instructions:
      "You are a personal math tutor. Write and run code to answer math questions.",
    model: "gpt-4o",
  });
  console.log("   > Assistant ID:", assistant.id);

  console.log("\n2. Creating a Thread (Stateful Container)...");
  const thread = await openai.beta.threads.create();
  console.log("   > Thread ID:", thread.id);

  console.log("\n3. Adding a User Message...");
  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: "I need to solve the equation `3x + 11 = 14`. Can you help me?",
  });

  console.log("\n4. Running the Assistant...");
  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
  });

  // Polling loop (Assistants API is async, we must check if it's done)
  let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  process.stdout.write("   > Waiting for AI ");

  while (runStatus.status !== "completed") {
    process.stdout.write(".");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    if (runStatus.status === "failed") {
      console.error("\nRun failed:", runStatus.last_error);
      return;
    }
  }
  console.log(" Done!");

  console.log("\n5. Retrieving Messages...");
  const messages = await openai.beta.threads.messages.list(thread.id);

  messages.data.forEach((msg) => {
    if (msg.role === "assistant") {
      // @ts-ignore
      console.log(`\nAI: ${msg.content[0].text.value}`);
    }
  });

  // Cleanup (Optional)
  // await openai.beta.assistants.del(assistant.id);
}

main().catch((err) => {
  if (err.status === 404) {
    console.error(
      "Error: Endpoint not found. Are you trying to use Groq? Assistants API is OpenAI only."
    );
  } else {
    console.error(err);
  }
});

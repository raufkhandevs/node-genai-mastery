# Module 2: Building AI Apps with Vercel AI SDK

In Module 1, we learned the "Raw" way (OpenAI/Groq SDK).
In Module 2, we switch to the **Industry Standard** for Node.js/Next.js apps: **The Vercel AI SDK**.

## 🎯 Goals

1.  Understand why "Standardization" matters (switching providers easily).
2.  Learn **Prompt Engineering** techniques (System Prompts, Few-Shot).
3.  Master **Structured Output** (Getting JSON back, not text).

## 🧠 Concepts

- **The Provider Pattern**: changing from OpenAI to Anthropic to Groq with 1 line of code.
- **Zod Schemas**: Using TypeScript validation to force the AI to return data we can use in code (e.g., generating a UI component config).
- **Prompt Engineering**:
  - _Zero-Shot_: "Do this."
  - _Few-Shot_: "Here are 3 examples. Now do this."
  - _Chain of Thought_: "Think step-by-step."

## 🧪 Labs

1.  **`lab01-vercel-basics.ts`**: The "Hello World" using `generateText`.
2.  **`lab02-structured-output.ts`**: **CRITICAL**. Getting the AI to return a JSON object (e.g., extraction user info) instead of a paragraph.
3.  **`lab03-prompt-templates.ts`**: Building dynamic prompts.

## 🔥 Challenge

Build a "Tweet Generator" that takes a topic and an "Emotion" (Angry, Happy, Professional) and outputs a JSON with the tweet text and valid hashtags.

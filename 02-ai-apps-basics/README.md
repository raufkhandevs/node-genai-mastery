# Module 2: Building AI Apps with Vercel AI SDK

In Module 1, we learned the "Raw" way (OpenAI/Groq SDK).
In Module 2, we switch to the **Industry Standard** for Node.js/Next.js apps: **The Vercel AI SDK**.

## 🎯 Goals

1.  **Standardization**: Write code once, run it with OpenAI, Anthropic, or Groq.
2.  **Structured Output (Zod)**: Moving from "Text Generators" to "Data Generators".
3.  **Prompt Engineering**: Building reusable, dynamic prompts.

## 🧠 Concepts Deep Dive

### 1. The "Provider Pattern"

Instead of importing `OpenAI` or `Anthropic` directly, we import `generateText` from `ai`.

- **Why?** Vendor lock-in is real. Models change weekly.
- **Code**: `generateText({ model: openai("gpt-4o") })` vs `generateText({ model: anthropic("claude-3-5") })`.
- **Result**: You can switch providers by changing **1 line of code** (or an env var).

### 2. Structured Output (The "Magic")

How does the AI return JSON?

- **Old Way**: You beg in the prompt: _"Please return JSON, do not reply with text."_ (Unreliable).
- **New Way (`generateObject`)**: We pass a **Zod Schema**.
  - Under the hood, this uses the model's **"Tool Calling"** or **"JSON Mode"** capabilities.
  - The SDK validates the output. If the AI returns a string instead of a number for `age`, it throws an error (or retries).

### 3. Prompt Temples

Prompts are not valid string literals. They are **Functions**.

- **Bad**: `const prompt = "Summarize this article: " + article;`
- **Good**:
  ```typescript
  const summarizePrompt = (context: string) => `
    You are a senior editor.
    Summarize the following text in 3 bullets:
    ${context}
  `;
  ```

## 🧪 Labs Breakdown

### Lab 01: Vercel Basics

We built "Hello World" using `generateText`.

- **Key Takeaway**: The API is identical for generating 1 sentence or a whole book.

### Lab 02: Structured Output (CRITICAL SKILL)

We used `generateObject` with `z.object({ name, age, hobbies })`.

- **Real World Use Case**: extracting data from emails, parsing resumes, generating UI config from valid JSON.

### Lab 03: Prompt Templates

We created a "Tweet Generator" function.

- **Key Takeaway**: Treat prompts like code. Version control them, separate them from logic.

## 🔥 Challenge

**"The Tweet Generator"**

- **Input**: "AI Engineering" + "Happy"
- **Output**: JSON `{ tweet: "...", hashtags: ["#AI", "#Code"] }`
- **Hint**: Combine `generateObject` (for JSON) with a dynamic Prompt Template function.

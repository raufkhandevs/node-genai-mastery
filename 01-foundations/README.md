# Module 1: Foundations of Generative AI

Welcome to the start of your journey. In this module, we strip away the frameworks (LangChain, Vercel AI SDK) and talk directly to the LLM.

## 🧠 Concepts

### 1. The Request/Response Cycle

LLMs are **stateless**. This means if you say "Hi" and then "My name is Bob", the second request doesn't know about the first one unless you send the _entire history_ back.

- **System Prompt**: The "God setup". Instructions that persist.
- **User Prompt**: The current input.
- **Assistant Prompt**: The model's previous replies.

### 2. Normal vs. Streaming

- **Normal (`stream: false`)**: The script waits until the _entire_ response is generated (e.g., 5 seconds) and then prints it all at once.
  - _Pros_: Easier to code.
  - _Cons_: User stares at a blank screen. Bad for long texts.
- **Streaming (`stream: true`)**: The API sends "chunks" (tokens) as they are generated (every 100ms).
  - _Pros_: "Typewriter effect". Feels instant.
  - _Cons_: Slightly harder to handle in code (async iterators).

### 3. Managing History (Context)

Since the API is stateless, **YOU are the database**.
To have a conversation, you must keep an array of messages and append to it.

```typescript
const history = [
  { role: "system", content: "You are helpful." },
  { role: "user", content: "Hi, I'm Bob." },
  { role: "assistant", content: "Hello Bob!" }, // <--- You must save this!
  { role: "user", content: "What is my name?" }, // <--- Send ALL of this back.
];
```

## 🧪 The Labs

1.  `lab01-completion.ts`: A simple request.
2.  `lab02-streaming.ts`: Learning how to stream text.
3.  `lab03-history.ts`: **(New)** A CLI chatbot that remembers who you are.

## 🚀 Setup (Free Tier Friendly)

We use a "Provider Agnostic" setup. You can use Groq (Free) or OpenAI.

1.  **Get a Key**: Go to [Groq Console](https://console.groq.com) (Free).
2.  **Configure `.env`**:
    ```ini
    OPENAI_API_KEY=gsk_...
    OPENAI_BASE_URL=https://api.groq.com/openai/v1
    OPENAI_MODEL_NAME=llama3-8b-8192
    ```
3.  **Run**:
    ```bash
    npx tsx lab01-completion.ts
    ```

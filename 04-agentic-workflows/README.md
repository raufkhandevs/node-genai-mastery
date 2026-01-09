# Module 4: Agentic Workflows & Tool Calling

This is where we move from "Chatbots" to "Agents".
An Agent is an AI that can **DO** things (Search the web, Query a DB, Calculate math).

## 🎯 Goals

1.  Understand **Function Calling** (The mechanism behind plugins).
2.  Learn how to describe your code to the LLM so it can call it.
3.  Build a "ReAct" Loop (Reason + Act).

## 🧠 Concepts

- **Tools**: A function + A Schema (Description).
  - Ex: `function getWeather(city: string)`
- **The Loop**:
  1.  AI thinks: "I need user info."
  2.  AI outputs: `CALL_TOOL("getUser", { id: 1 })`
  3.  **Code** executes the function.
  4.  **Code** gives result back to AI.
  5.  AI answers user.

## 🧪 Labs

1.  **`lab01-tools-basics.ts`**: Defining a "Calculator" tool that the AI can use.
2.  **`lab02-agent-loop.ts`**: Building a manual `while()` loop that lets the AI call tools multiple times until it's done.

## 🔥 Challenge

**"The Smart Assistant"**
Give the AI two tools: `getCurrentTime()` and `convertCurrency()`.
Ask: "How much is $100 in EUR, and is the bank open right now?"
It should call BOTH tools and synthesize the answer.

# Module 5: LangGraph & Advanced State

This is the most advanced and important module.
We move away from simple loops to **Graph-based Orchestration**.

## 🎯 Goals

1.  Master **LangGraph**: Nodes, Edges, and Conditional Logic.
2.  Implement **Persistence (Memory/Threads)**: How to make an agent "remember" a conversation even if you restart the server.
3.  **Human-in-the-Loop**: Pausing the agent to ask "Advisor, should I proceed?".

## 🧠 Concepts

### 1. The Strategy: Chat Completions vs. Assistants API vs. LangGraph

There are three ways to build "Stateful" agents. Use this guide to choose:

| Method                | State (Memory) | Vendor Lock-in | Pros                 | Cons                                                  |
| :-------------------- | :------------- | :------------- | :------------------- | :---------------------------------------------------- |
| **Chat Completions**  | ❌ Stateless   | 🟢 None        | Full control, cheap. | You must manage the DB array manually.                |
| **OpenAI Assistants** | ✅ Stateful    | 🔴 **High**    | Easy (Thread ID).    | Cannot switch to Groq/Llama. Data is stuck in OpenAI. |
| **LangGraph**         | ✅ Stateful    | 🟢 **None**    | **Best of both**.    | Requires a bit more setup (Postgres/SQLite).          |

### 2. Why LangGraph?

LangGraph solves the " Assistants API" problem.

- **It uses a Database** (like Postgres) to save the `thread_id`.
- **It uses Standard Models** (Chat Completions) to do the thinking.
- **Result**: You get the "Nice DX" of Threads ("Just run thread_abc"), but you **OWN the data** and can switch models anytime.

### 3. The Graph Architecture

- **Nodes**: Functions that do work (e.g., `search_web`, `write_code`).
- **Edges**: Logic (e.g., `if (error) -> retry`).
- **State Schema**: Defining exactly what data the agent holds.
- **Checkpoints**: The secret sauce that saves the state to the DB after every step.

## 🧪 Labs

1.  **`lab01-graph-basics.ts`**: Building a simple cyclic graph.
2.  **`lab02-persistence.ts`**: **(Thread ID Demo)**. We will run an agent, stop it, restart the script, pass the `thread_id`, and watch it resume the conversation.
3.  **`lab03-human-approval.ts`**: An agent that researches a topic but _waits_ for you to type "yes" before writing the final report.

## 🔥 Challenge

**"The Travel Planner"**

1.  User: "Plan a trip to Japan."
2.  Agent: _Generates itinerary_.
3.  Agent: _Pauses_ "Do you like this hotel?"
4.  User: "No, cheaper."
5.  Agent: _Resumes with previous context_ and updates the plan.

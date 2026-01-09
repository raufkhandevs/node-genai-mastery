# 🧠 Node.js Generative AI Mastery

**From Chatbots to Autonomous Agents: A Full Stack Engineer's Guide.**

> "You don't need Python to build 99% of AI apps today. You need TypeScript, Architecture, and Orchestration."

This repository is a structured learning path designed for **JavaScript/TypeScript Developers** who want to master Generative AI Engineering without switching stacks.

## 🗺️ The Roadmap

- [**Roadmap**](./roadmap.md): The full technical curriculum.
- [**Teaching Strategy**](./teaching_strategy.md): How to use this repo (Concept -> Lab -> Challenge).

## 📂 Modules

**Phase 1: Foundations**

- [**01-foundations**](./01-foundations): The Raw Metal. Http Requests, Tokens, Streaming. (No Frameworks).

**Phase 2: Applications**

- [**02-ai-apps-basics**](./02-ai-apps-basics): Vercel AI SDK, Prompt Engineering, Structured Output (JSON).
- [**03-rag-vector-db**](./03-rag-vector-db): RAG, Vector Databases (Pinecone), Embeddings.

**Phase 3: Agentic Workflows (The Advanced Stuff)**

- [**04-agentic-workflows**](./04-agentic-workflows): Tool Calling, ReAct Loops.
- [**05-langgraph-deepdive**](./05-langgraph-deepdive): **LangGraph**, State Machines, Persistence (Threads), Human-in-the-loop.
- [**06-mcp-servers**](./06-mcp-servers): **Model Context Protocol**. Building "Drivers" for AI.

**Phase 4: Capstones**

- [**07-capstones**](./07-capstones): Final projects (Chat with Codebase, Autonomous Researcher).

## 🛠️ Tech Stack

- **Runtime**: Node.js / TypeScript (`tsx`)
- **Models**: OpenAI (GPT-4o) / Groq (Llama 3) / Anthropic (Claude 3.5)
- **Orchestration**: LangChain.js / LangGraph.js
- **Vector DB**: Pinecone / Supabase

## 🚀 Getting Started

1.  **Clone the repo**.
2.  **Start Module 1**:
    ```bash
    cd 01-foundations
    cp .env.example .env
    npm install
    npx tsx lab01-completion.ts
    ```

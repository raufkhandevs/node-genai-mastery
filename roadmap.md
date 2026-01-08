# Generative AI Engineer Roadmap (Node.js Specialization)

> **Goal**: Master Generative AI Engineering using your existing Full Stack (Node.js/TypeScript) skills.
> **Philosophy**: Use **Node.js** for the Application, Orchestration, and API layers. Use **Python** only when interacting directly with model weights (Fine-tuning) or data science heavy lifting.

---

## 📚 1. Foundations & Prerequisites

Before diving into AI, ensure your core engineering base is solid.

- [ ] **TypeScript Mastery**: Generative AI in JS relies heavily on strict types for "Structured Outputs" and schema definitions.
- [ ] **Python Literacy**: You don't need to be a pro, but you must be able to _read_ Python to understand research papers or basic model scripts.
- [ ] **HTTP & Streaming**: Understanding Server-Sent Events (SSE) and Streaming is critical for AI UX.

## 🧠 2. Core Concepts (The "What")

Understand the terminology. These concepts are language-agnostic.

- [ ] **LLMs (Large Language Models)**: How they work (Next token prediction).
- [ ] **Tokenization**: How text becomes numbers. (e.g., `tiktoken`).
- [ ] **Embeddings**: Converting text to vectors to measure "semantic similarity".
- [ ] **Context Window**: The memory limit of the model.
- [ ] **Temperature**: Controlling randomness vs. determinism.

## 🛠️ 3. Building AI Applications (Node.js Layer)

The "Application Layer" is where you will spend 90% of your time.

### Frameworks

- [ ] **Vercel AI SDK**: The industry standard for building AI UIs in Next.js/React.
  - `useChat`, `useCompletion`.
  - `streamText`, `generateText`.
- [ ] **LangChain.js**: The "Swiss Army Knife" for chaining components.
  - Learning interfaces: `ChatOpenAI`, `ChatAnthropic`.
  - `StringOutputParser`.

### Techniques

- [ ] **Prompt Engineering**: Zero-shot, Few-shot, Chain of Thought (CoT).
- [ ] **Structured Output**: **CRITICAL SKILL**. Using **Zod** schemas to force the LLM to return JSON (e.g., for UI generation or API payloads).
  - `generateObject` (Vercel AI SDK).
  - `.withStructuredOutput` (LangChain).

## 🗄️ 4. RAG (Retrieval Augmented Generation)

Giving the AI a "Brain" (Long-term memory).

- [ ] **Vector Databases**:
  - **Pinecone** (Serverless, easy).
  - **Supabase `pgvector`** (Great if you already use Postgres).
- [ ] **Ingestion Pipelines**: Reading PDFs/Docs -> Chunking (Splitting text) -> Embedding -> Saving to DB.
  - Library: `Compromise` (NLP) or LangChain formatters.

## 🔌 5. Agentic AI & Advanced Orchestration

Moving from "Chatbots" to "Systems that do work".

### The Agent Loop

1.  **Thought**: Model decides what to do.
2.  **Action**: Model calls a "Tool".
3.  **Observation**: System runs the tool and gives result back to Model.
4.  **Repeat**.

### Key Technologies

- [ ] **Tool Calling (Function Calling)**: Defining tools with JSON Schema/Zod so the model can call APIs (Google Search, Calculator, Database).
- [ ] **LangGraph.js**: **The standard for Production Agents**.
  - Building "State Machines" (Graphs) instead of simple Chains.
  - Cycles (Loops) for retrying errors.
  - **Human-in-the-Loop**: "Breakpoints" where the agent pauses and waits for Human approval before executing a sensitive action (like `delete_database`).
- [ ] **MCP (Model Context Protocol)**:
  - The "USB-C for AI". Standard way to connect data (Slack, GitHub, Local Files) to LLMs.
  - **Action**: Build a simple MCP Server in Node.js.

## 🤖 6. Multi-Agent Systems

- [ ] **Supervisor Pattern**: One "Manager" LLM delegates tasks to "Worker" agents (Coder, Researcher, Reviewer).
- [ ] **Hierarchical Teams**: Complex org charts of agents.

## 🚀 7. GenAI DevOps (LLMOps) & Deployment

- [ ] **Evaluation (Evals)**: How do you know your bot keeps working?
  - **LangSmith**: Tracing, Debugging, and Testing.
- [ ] **Deployment**:
  - Edge Functions (Vercel) vs. Long-running Servers (Node.js on AWS/Railway) - Agents often need timeouts longer than standard serverless limits!

---

## 💡 Model Selection Guide (Cheat Sheet)

Which model should you use? (Updated early 2025)

| Use Case                   | Recommended Model           | Why?                                                      |
| :------------------------- | :-------------------------- | :-------------------------------------------------------- |
| **Coding & Architecture**  | **Claude 3.5 Sonnet**       | Current king of coding. Massive context, highly accurate. |
| **Reasoning & Planning**   | **OpenAI o1** / **o1-mini** | "Thinks" before answering. Best for complex logic/math.   |
| **General Purpose / Chat** | **GPT-4o**                  | Fast, multimodal (sees images), good at everything.       |
| **Creative Writing**       | **Claude 3 Opus**           | More "human" nuance, less robotic than GPT.               |
| **Local / Privacy**        | **Llama 3** / **Mistral**   | Run on your own laptop with **Ollama**. Free & Private.   |
| **Vision (Images/Video)**  | **Gemini 1.5 Pro**          | Extremely large context window (Video analysis).          |

---

## 🎓 Capstone Projects to Build

1.  **"Chat with your Codebase"**: RAG app that ingests a GitHub repo and answers questions (Stack: Next.js + Pinecone + Vercel AI SDK).
2.  **"Autonomous Research Agent"**: An agent that searches the web, reads 5 pages, and writes a blog post (Stack: LangGraph.js + Tavily Search API).
3.  **"DevOps Bot (MCP)"**: An MCP server that lets an LLM restart your Docker containers or query your logs.

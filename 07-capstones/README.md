# Module 7: Capstone Projects

No new theory. Just building.
We will combine everything: Vector DBs, Agents, LangGraph, and Vercel SDK.

## Project 1: "Chat with Codebase" (RAG)

- **Goal**: Clone your own git repo, digest it, and answer questions.
- **Tech**: Next.js (UI), Supabase (Vector DB), Vercel AI SDK.

## Project 2: "Autonomous Researcher" (Agent)

- **Goal**: You give a topic ("Latest advances in fusion energy").
- **Agent**:
  1.  Searches Google.
  2.  Reads top 5 URLs.
  3.  Summarizes them.
  4.  Writes a markdown report.
  5.  Saves it to disk.
- **Tech**: LangGraph.js, Tavily API.

## Project 3: "Slack Support Bot" (MCP + Persistence)

- **Goal**: A bot that lives in a Slack channel.
- **Features**:
  - Remembers thread context.
  - Can "ticket" issues to Jira (via Tool calling).
- **Tech**: Node.js, Slack Bolt, LangGraph (Persistence).

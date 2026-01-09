# Module 6: MCP (Model Context Protocol)

MCP is the open standard (created by Anthropic) for connecting AI to data.
Instead of writing custom code to read a file or database, you build an **MCP Server**.

## 🎯 Goals

1.  Understand Client vs. Server in MCP.
2.  Build a custom MCP Server in Node.js.
3.  Connect your custom server to `Claude Desktop` or your own Agent.

## 🧠 Concepts

- **MCP Server**: A standardized API that exposes "Resources" (files) and "Tools" (functions).
- **Universality**: If you build a "Postgres MCP Server", it works with Claude, LangChain, and any other MCP client automatically.

## 🧪 Labs

1.  **`lab01-simple-server.ts`**: A server that exposes a local JSON file as a "Resource" to the AI.
2.  **`lab02-tool-server.ts`**: A server that exposes a "restart_server()" tool.

## 🔥 Challenge

**"The DevOps Bridge"**
Build an MCP server that lets the AI access your local Docker logs (`docker logs <id>`).
Connect it to Claude Desktop and ask "Why did my container crash?"

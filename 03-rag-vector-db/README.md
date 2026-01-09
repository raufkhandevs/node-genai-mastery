# Module 3: RAG (Retrieval Augmented Generation)

The #1 problem with LLMs is **Hallucination** and **Lack of Knowledge** (they don't know your private data).
RAG solves this by giving the AI a "Long Term Memory".

## 🎯 Goals

1.  Understand **Vector Embeddings** (The math behind semantic search).
2.  Set up a **Vector Database** (Pinecone).
3.  Build a pipeline to "Chat with your PDF/Text".

## 🧠 Concepts

- **Embeddings**: Converting text into a list of numbers (vectors). Text with similar meaning has similar numbers.
- **Vector Database**: A DB optimized to find "Nearest Neighbors" (Cosine Similarity).
- **Chunking**: You can't fit a whole book in the prompt. You must break it into "Chunks".

## 🧪 Labs

1.  **`lab01-embeddings.ts`**: We will turn "Cat" and "Dog" into numbers and compare them using math to see they are related.
2.  **`lab02-vector-db.ts`**: We will insert documents into Pinecone.
3.  **`lab03-simple-rag.ts`**: A script that searches our DB first, then sends the result to the LLM to answer a question.

## 🔥 Challenge

**"The Corporate Wiki Search"**.
Ingest a fake "Employee Handbook" into a vector DB.
Ask: "What is the policy on remote work?"
The AI must find the exact paragraph and answer based ONLY on that.

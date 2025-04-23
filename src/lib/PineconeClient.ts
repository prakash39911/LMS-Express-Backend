import { Pinecone } from "@pinecone-database/pinecone";

const KEY = process.env.PINECONE_API_KEY || "";

export const pineconeClient = new Pinecone({
  apiKey: KEY,
});

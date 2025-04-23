import { GoogleGenAI } from "@google/genai";

export const geminiClient = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function TextToEmbeddings(document: any) {
  const embeddingsResult = await geminiClient.models.embedContent({
    model: "gemini-embedding-exp-03-07",
    contents: document.text,
    config: {
      taskType: "SEMANTIC_SIMILARITY",
      outputDimensionality: 1536,
    },
  });

  if (!embeddingsResult?.embeddings?.[0]?.values) {
    throw new Error("Embeddings array is undefined");
  }

  const embeddingArray: number[] = embeddingsResult.embeddings[0].values;

  return embeddingArray;
}

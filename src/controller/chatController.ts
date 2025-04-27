import { Request, Response } from "express";
import { geminiClient, TextToEmbeddings } from "../lib/GeminiApi";
import { pineconeClient } from "../lib/PineconeClient";

export async function handleChat(req: Request, res: Response) {
  try {
    const { query } = req.body;

    if (!query) {
      res.status(400).json({ status: false, message: "Query not received" });
      return;
    }

    const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME;
    const PINECONE_HOST = process.env.PINECONE_HOST;

    if (!PINECONE_INDEX_NAME || !PINECONE_HOST) {
      throw Error("Pinecon Index or Host did not get loaded");
    }

    const index = pineconeClient.index(PINECONE_INDEX_NAME, PINECONE_HOST);

    const queryEmbedding = await TextToEmbeddings({ text: query });

    const queryResponse = await index.namespace("lms-namespace").query({
      vector: queryEmbedding,
      topK: 2,
      includeValues: false,
      includeMetadata: true,
    });

    const context = queryResponse?.matches
      .map((match) => JSON.stringify(match.metadata))
      .join(`\n\n`);

    const prompt = `
      You are a helpful and knowledgeable assistant for our course selling application. You will use the provided context to answer user questions about our courses. If the question is not directly related to the courses in the context, use your general knowledge to provide a helpful answer.

      Context:
      ${context}

      User Query:
      ${query}

      Example:

      User Query: Do you have any courses on data science for beginners?
      Response: Based on the current information, there are no courses specifically for data science beginners. However, we offer an introductory course on artificial intelligence that you might find helpful.

      User Query: Tell me about the history of the internet.
      Response: The internet's origins can be traced back to the late 1960s with the development of ARPANET by the U.S. Department of Defense... [general knowledge answer about the internet's history]

      Instructions:

      1.  **Answer based on the context:** If the user's question is directly related to the courses described in the context, use that information to formulate your response. Be specific and provide relevant details.

      2.  **Address general queries:** If the user's question falls outside the scope of the provided courses or context, use your general knowledge to answer it accurately and helpfully.

      3.  **Handle requests for similar courses:** If the user asks about similar courses and the context doesn't mention any, respond clearly and directly. You can also suggest related courses if you know of any from your general knowledge.

      4.  **Maintain accuracy:** Do not invent information or mention courses that are not present in the provided context unless you are using your general knowledge for unrelated queries. Clearly distinguish between answers based on the provided context and those based on general knowledge.

      5.  **Be direct and confident:** Provide straightforward answers without unnecessary apologies or hedging.

      Response:
      `;

    const response = await geminiClient.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    res.status(200).json({
      status: true,
      message: "Response received successfully",
      data: response.text,
    });
  } catch (error) {
    console.error("Error occurred in chat", error);
    res
      .status(500)
      .json({ status: false, message: "Failed to generate response" });
  }
}

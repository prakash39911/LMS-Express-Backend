import { Request, Response } from "express";
import { geminiClient, TextToEmbeddings } from "../lib/GeminiApi";
import { pineconeClient } from "../lib/PineconeClient";
import { getAuth } from "@clerk/express";
import prisma from "../lib/prisma";

export async function handleChat(req: Request, res: Response) {
  try {
    const { userId } = getAuth(req);
    const { query } = req.body;

    if (!query || !userId) {
      res.status(400).json({ status: false, message: "Query not received" });
      return;
    }

    const chatSession = await prisma.chatMessage.findFirst({
      where: {
        userId,
      },
    });

    let chatSessionId: string;

    if (!chatSession) {
      const created = await prisma.chatMessage.create({
        data: {
          userId,
          MessageStore: {
            create: {
              role: "user",
              message: query,
            },
          },
        },
      });

      chatSessionId = created.id;
    } else {
      await prisma.messageStore.create({
        data: {
          role: "user",
          message: query,
          chatMessageId: chatSession.id,
        },
      });

      chatSessionId = chatSession.id;
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
      topK: 3,
      includeValues: false,
      includeMetadata: true,
    });

    const context =
      queryResponse?.matches
        .map((match) => JSON.stringify(match.metadata))
        .join(`\n\n`) || "No context found.";

    const messages = await prisma.messageStore.findMany({
      where: {
        chatMessageId: chatSessionId,
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 10,
    });

    const conversationHistory = messages.map((eachMessage) => ({
      role: eachMessage.role === "user" ? "user" : "model",
      parts: [{ text: eachMessage.message }],
    }));

    const finalPrompt = `You are a versatile AI assistant for our course application.

    Your primary role is to answer questions about our courses using the provided CONTEXT.
    However, you must also answer general knowledge questions.

    **Your Decision Process:**
    1.  First, analyze the user's QUESTION to see if it is related to our courses.
    2.  **If the question can be answered by the CONTEXT**, provide a concise answer based *only* on the CONTEXT.
    3.  **If the question is clearly a general knowledge query** (e.g., "who is the prime minister of India?", "what is 2+2?"), ignore the CONTEXT and answer it using your own internal knowledge.

    **Rules:**
    -   Your answers must be concise and to the point.
    -   Do not mention the "CONTEXT" or "general knowledge". Just give the final answer.
    -   Do not make up information about courses that is not in the CONTEXT.
    
    ---
    CONTEXT:
    ${context}
    ---
    QUESTION:
    ${query}
    ---
    `;

    const response = await geminiClient.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        ...conversationHistory, // Note: conversation history now includes the latest user query via DB
        {
          role: "user",
          parts: [{ text: finalPrompt }],
        },
      ],
      config: {
        maxOutputTokens: 100,
        temperature: 0.3,
      },
    });

    const responseText =
      response.text || "Sorry, I couldn't process that request.";

    await prisma.messageStore.create({
      data: {
        role: "model",
        message: responseText,
        chatMessageId: chatSessionId,
      },
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

export const handleGetConversationHistory = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged in" });
      return;
    }

    const history = await prisma.chatMessage.findMany({
      where: {
        userId,
      },
      select: {
        MessageStore: {
          select: {
            id: true,
            role: true,
            message: true,
            createdAt: true,
          },
        },
      },
    });

    if (history.length === 0) {
      res
        .status(200)
        .json({ status: true, message: "There is no history", data: [] });
      return;
    }

    const finalArray = history[0].MessageStore;

    const MessageListArray = finalArray.map((eachObj) => ({
      id: eachObj.id,
      text: eachObj.message,
      sender: `${eachObj.role}`,
      timestamp: eachObj.createdAt,
    }));

    res.status(200).json({
      status: true,
      message: "Messages fetched Successfully",
      data: MessageListArray,
    });
  } catch (error) {
    console.error("Something went wrong", error);
    res.status(500).json({ status: false, message: "Unable to Fetch Data" });
  }
};

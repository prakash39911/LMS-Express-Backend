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

    const context = queryResponse?.matches
      .map((match) => JSON.stringify(match.metadata))
      .join(`\n\n`);

    const messages = await prisma.messageStore.findMany({
      where: {
        chatMessageId: chatSessionId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    const conversationHistory = messages.map((eachMessage) => ({
      role: eachMessage.role === "user" ? "user" : "model",
      parts: [{ text: eachMessage.message }],
    }));

    const prompt = `
      You are a helpful and knowledgeable assistant for our course selling application. You will use the provided context to answer user questions about our courses. If the question is not directly related to the courses in the context, use your general knowledge to provide a helpful answer.

      Context:
      ${context}

      Instructions:

      1.  **Understand the Current Topic:** Pay close attention to the most recent user query and the immediately preceding turns in the 'Conversation History' to identify the current topic of discussion.

      2.  **Answer based on the context:** If the user's question is directly related to the courses described in the context, use that information to formulate your response. Be specific and provide relevant details about the course being discussed.

      3.  **Resolve Pronouns and References:** Carefully interpret pronouns (like "it," "they," "this") and other references in the current user query based on the most recent entities or topics mentioned in the 'Conversation History'. For example, if the user asks about "it" after a course was just discussed, "it" likely refers to that course.

      4.  **Reference Previous Turns Directly:** If the current question explicitly refers to something discussed earlier in the 'Conversation History', explicitly mention it in your answer. For example, "Regarding the 'SpeedUp Pages' course we were just discussing..."

      5.  **Consider conversation history for relevance:** Use the 'Conversation History' to maintain context and provide a more personalized and relevant response to the current query. Focus on information related to the ongoing topic.

      6.  **Address general queries:** If the user's question falls outside the scope of the provided courses or context, use your general knowledge to answer it accurately and helpfully.

      7.  **Handle requests for similar courses:** If the user asks about similar courses and the context doesn't mention any related to the current topic, respond clearly and directly. You can also suggest related courses if you know of any from your general knowledge, making sure to distinguish them from the context.

      8.  **Maintain accuracy:** Do not invent information or mention courses that are not present in the provided context unless you are using your general knowledge for unrelated queries. Clearly distinguish between answers based on the provided context and those based on general knowledge.

      9.  **Be direct and confident:** Provide straightforward answers without unnecessary apologies or hedging.

      Response:
      `;

    const response = await geminiClient.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "model",
          parts: [
            {
              text: prompt,
            },
          ],
        },
        ...conversationHistory,
        {
          role: "user",
          parts: [{ text: query }],
        },
      ],

      config: {
        maxOutputTokens: 200,
      },
    });

    await prisma.messageStore.create({
      data: {
        role: "system",
        message: response.text!,
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

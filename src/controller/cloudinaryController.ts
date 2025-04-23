import { Request, Response } from "express";
import { cloudinary } from "../lib/Cloudinary";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import { geminiClient } from "../lib/GeminiApi";
import prisma from "../lib/prisma";

export async function deleteFromCloudinary(req: Request, res: Response) {
  try {
    const { public_id } = req.body;

    const result = await cloudinary.v2.uploader.destroy(public_id);

    if (result.result === "ok") {
      res.status(200).json({ message: "Asset Deleted Successfully", result });
    } else {
      res.status(404).json({ message: "Asset not found" });
    }
  } catch (error) {
    console.error("Error deleting asset", error);
    res.status(500).json({ message: "Error while deleting asset" });
  }
}

async function downloadAndReadFile(cloudinaryUrl: string): Promise<string> {
  try {
    const response = await fetch(cloudinaryUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const tempFilePath = path.join(__dirname, "temp-download-file");

    await fs.writeFile(tempFilePath, buffer);
    const fileContent = await fs.readFile(tempFilePath, "utf8");
    await fs.unlink(tempFilePath); // Clean up

    return fileContent;
  } catch (error) {
    console.error("Error downloading or reading the file:", error);
    throw error;
  }
}

export async function handlecloudinaryWebhookForTranscription(
  req: Request,
  res: Response
) {
  const payload = req.body;

  console.log("Transcription Webhook Received, Total Data:-", payload);

  // Handle transcription data
  if (
    payload.info_kind === "auto_transcription" &&
    payload.info_status === "complete"
  ) {
    console.log(`Transcription Complete for public ID:- ${payload?.public_id}`);
    console.log("Transcription Final Data:-", payload?.info_data);
    console.log(
      "Secure Url of Transcription data :-",
      payload?.info_data?.secure_url
    );

    const fileData = await downloadAndReadFile(payload?.info_data?.secure_url);

    const prompt = `
    Please extract all word from the given data and arrange them in sentence properly.

    data : 
    ${fileData}
    `;

    const response = await geminiClient.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    console.log("gemini response from the given INPUT: -----", response.text);

    // const videoSection = await prisma.videoSection.findFirst({
    //   where: {
    //     video_public_id: payload?.public_id,
    //   },
    // });

    // const updateVideoSection = await prisma.videoSection.update({
    //   where: {
    //     id: videoSection?.id,
    //   },
    //   data: {
    //     transcription: response.text,
    //     transcription_summary: "",
    //   },
    // });

    res.status(200).send("Webhook received");
  }
}

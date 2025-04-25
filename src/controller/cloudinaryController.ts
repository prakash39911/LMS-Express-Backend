import { Request, Response } from "express";
import { cloudinary } from "../lib/Cloudinary";
import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";
import { geminiClient } from "../lib/GeminiApi";
import prisma from "../lib/prisma";
import { getAuth } from "@clerk/express";
import { GenerateSummaryPdf } from "../lib/summaryPdf";

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

    if (!response) {
      console.error("Error getiing gemini response");
      return;
    }

    console.log("gemini response from the given INPUT: -----", response.text);

    const createEntryInDB = await prisma.videoTranscription.create({
      data: {
        video_publicID: payload?.public_id,
        transcription_data: response.text || "",
      },
    });

    res.status(200).send("Webhook received");
  }
}

export async function handleGenerateSummary(req: Request, res: Response) {
  const { userId } = getAuth(req);

  if (!userId) {
    throw new Error("No Logged in user");
  }

  try {
    const { videoPublicId: VideoPublicID } = req.body;

    if (!VideoPublicID) {
      res.status(400).json({ status: false, message: "Insuffecient Info" });
      return;
    }

    const transcriptionData = await prisma.videoTranscription.findFirst({
      where: {
        video_publicID: VideoPublicID,
      },
    });

    if (!transcriptionData) {
      res.status(400).json({ status: false, message: "No data Found" });
      return;
    }

    const prompt = `
    Instructions:
    1. Generate Summary by analysing the text in depth and summary should include all the important points and arranged properly using paragraph, bullet points using HTML tags.
    2. Do not include strings like '''html or '''. So that i can directly display it correctly on my webpage.

    context: 
    ${transcriptionData?.transcription_data}
    `;

    const summary = await geminiClient.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    res.status(200).json({
      status: true,
      data: summary.text,
      message: "Summary generated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export async function handleGetTranscriptionSummary(
  req: Request,
  res: Response
) {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(400).json({ status: false, message: "You are not logged In" });
    return;
  }
  try {
    const { VideoPublicID } = req.body;

    if (!VideoPublicID) {
      res.status(400).json({ status: false, message: "Insufficient Data" });
      return;
    }

    const summary = await prisma.videoSection.findFirst({
      where: {
        video_public_id: VideoPublicID,
      },
      select: {
        transcription_summary: true,
      },
    });

    if (!summary) {
      res.status(400).json({ status: false, message: "Data not found" });
    }

    res.status(200).json({
      status: true,
      data: summary?.transcription_summary,
      message: "Data fetched Successfully",
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export async function handleSaveTranscriptionSummary(
  req: Request,
  res: Response
) {
  try {
    const { summary, videoPublicId } = req.body;

    if (!summary || !videoPublicId) {
      res.status(400).json({ status: false, message: "Insufficient Data" });
      return;
    }

    const videoSection = await prisma.videoSection.findFirst({
      where: {
        video_public_id: videoPublicId,
      },
    });

    if (!videoSection) {
      res.status(400).json({ status: false, message: "Data not Found" });
    }

    await prisma.videoSection.update({
      where: { id: videoSection?.id },
      data: {
        transcription_summary: summary,
      },
    });

    res.status(200).json({ status: true, message: "DB Updated Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export async function handledeleteGeneratedSummary(
  req: Request,
  res: Response
) {
  try {
    const { videoPublicId } = req.body;

    if (!videoPublicId) {
      res.status(400).json({ status: false, message: "Insufficient Data" });
      return;
    }

    const videoSection = await prisma.videoSection.findFirst({
      where: {
        video_public_id: videoPublicId,
      },
    });

    if (!videoSection) {
      res.status(400).json({ status: false, message: "Data not found" });
      return;
    }

    await prisma.videoSection.update({
      where: {
        id: videoSection.id,
      },
      data: {
        transcription_summary: "",
      },
    });

    res.status(200).json({
      status: true,
      message: "Transcription Summary deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export const handleGenerateSummaryPdf = async (req: Request, res: Response) => {
  const { videoPublicId } = req.body;

  if (!videoPublicId) {
    res.status(400).json({ status: false, message: "Insufficient Data" });
    return;
  }

  const summaryData = await prisma.videoSection.findFirst({
    where: {
      video_public_id: videoPublicId,
    },
    select: {
      video_title: true,
      transcription_summary: true,
      section: {
        select: {
          sectionName: true,
          course: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  });

  if (!summaryData) {
    res.status(400).json({ status: false, message: "Data Not Found" });
    return;
  }

  const pdfBuffer = await GenerateSummaryPdf(summaryData);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=summary.pdf");
  res.send(Buffer.from(pdfBuffer));
};

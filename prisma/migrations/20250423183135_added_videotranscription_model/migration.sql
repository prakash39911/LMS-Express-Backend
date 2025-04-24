/*
  Warnings:

  - You are about to drop the column `transcription` on the `VideoSection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VideoSection" DROP COLUMN "transcription";

-- CreateTable
CREATE TABLE "VideoTranscription" (
    "id" TEXT NOT NULL,
    "video_publicID" TEXT NOT NULL,
    "transcription_data" TEXT NOT NULL,

    CONSTRAINT "VideoTranscription_pkey" PRIMARY KEY ("id")
);

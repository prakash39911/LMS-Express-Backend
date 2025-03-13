/*
  Warnings:

  - Added the required column `video_duration` to the `VideoSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VideoSection" ADD COLUMN     "video_duration" TEXT NOT NULL;

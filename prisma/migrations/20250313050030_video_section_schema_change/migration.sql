/*
  Warnings:

  - Changed the type of `video_duration` on the `VideoSection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "VideoSection" DROP COLUMN "video_duration",
ADD COLUMN     "video_duration" DOUBLE PRECISION NOT NULL;

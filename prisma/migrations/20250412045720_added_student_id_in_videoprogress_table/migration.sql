/*
  Warnings:

  - Added the required column `studentId` to the `VideoProgress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VideoProgress" ADD COLUMN     "studentId" TEXT NOT NULL;

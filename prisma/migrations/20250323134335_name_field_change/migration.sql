/*
  Warnings:

  - You are about to drop the column `name` on the `FilterPreset` table. All the data in the column will be lost.
  - Added the required column `name` to the `SavedFilterData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FilterPreset" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "SavedFilterData" ADD COLUMN     "name" TEXT NOT NULL;

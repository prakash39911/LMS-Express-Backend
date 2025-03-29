/*
  Warnings:

  - Added the required column `payment_status` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('PENDING', 'CAPTURE', 'FAILED');

-- AlterTable
ALTER TABLE "EnrolledStudents" ADD COLUMN     "payment_status" "payment_status" NOT NULL;

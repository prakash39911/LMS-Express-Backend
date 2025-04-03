/*
  Warnings:

  - Added the required column `invoice_no` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoice_url` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EnrolledStudents" ADD COLUMN     "invoice_no" TEXT NOT NULL,
ADD COLUMN     "invoice_url" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `invoice_no` on the `EnrolledStudents` table. All the data in the column will be lost.
  - Added the required column `invoice_name` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EnrolledStudents" DROP COLUMN "invoice_no",
ADD COLUMN     "invoice_name" TEXT NOT NULL;

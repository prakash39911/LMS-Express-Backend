/*
  Warnings:

  - You are about to drop the column `payment_id` on the `EnrolledStudents` table. All the data in the column will be lost.
  - Added the required column `amount` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `EnrolledStudents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EnrolledStudents" DROP COLUMN "payment_id",
ADD COLUMN     "amount" TEXT NOT NULL,
ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

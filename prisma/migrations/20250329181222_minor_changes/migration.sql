/*
  Warnings:

  - The values [CAPTURE] on the enum `payment_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "payment_status_new" AS ENUM ('PENDING', 'CAPTURED', 'FAILED');
ALTER TABLE "EnrolledStudents" ALTER COLUMN "payment_status" TYPE "payment_status_new" USING ("payment_status"::text::"payment_status_new");
ALTER TYPE "payment_status" RENAME TO "payment_status_old";
ALTER TYPE "payment_status_new" RENAME TO "payment_status";
DROP TYPE "payment_status_old";
COMMIT;

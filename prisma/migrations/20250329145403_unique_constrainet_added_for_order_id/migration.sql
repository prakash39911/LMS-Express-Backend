/*
  Warnings:

  - A unique constraint covering the columns `[order_id]` on the table `EnrolledStudents` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EnrolledStudents_order_id_key" ON "EnrolledStudents"("order_id");

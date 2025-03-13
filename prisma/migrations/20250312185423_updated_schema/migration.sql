/*
  Warnings:

  - Added the required column `main_image` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "main_image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "EnrolledStudents" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "EnrolledStudents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EnrolledStudents" ADD CONSTRAINT "EnrolledStudents_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

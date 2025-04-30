-- CreateEnum
CREATE TYPE "role" AS ENUM ('user', 'system');

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageStore" (
    "id" TEXT NOT NULL,
    "role" "role" NOT NULL,
    "message" TEXT NOT NULL,
    "chatMessageId" TEXT NOT NULL,

    CONSTRAINT "MessageStore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MessageStore" ADD CONSTRAINT "MessageStore_chatMessageId_fkey" FOREIGN KEY ("chatMessageId") REFERENCES "ChatMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

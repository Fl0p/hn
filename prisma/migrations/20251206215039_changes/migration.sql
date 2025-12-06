/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterEnum
ALTER TYPE "SubmissionStatus" ADD VALUE 'PROLONGATED';

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ADD COLUMN     "initDate" TIMESTAMP(3),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Post_id_seq";

-- CreateTable
CREATE TABLE "InitialPdf" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "InitialPdf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProlongatedPdf" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "ProlongatedPdf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DecisionPdf" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "DecisionPdf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversationPdf" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "ConversationPdf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InitialPdf_url_key" ON "InitialPdf"("url");

-- CreateIndex
CREATE UNIQUE INDEX "InitialPdf_postId_key" ON "InitialPdf"("postId");

-- CreateIndex
CREATE INDEX "InitialPdf_url_idx" ON "InitialPdf"("url");

-- CreateIndex
CREATE INDEX "InitialPdf_postId_idx" ON "InitialPdf"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "ProlongatedPdf_url_key" ON "ProlongatedPdf"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ProlongatedPdf_postId_key" ON "ProlongatedPdf"("postId");

-- CreateIndex
CREATE INDEX "ProlongatedPdf_url_idx" ON "ProlongatedPdf"("url");

-- CreateIndex
CREATE INDEX "ProlongatedPdf_postId_idx" ON "ProlongatedPdf"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "DecisionPdf_url_key" ON "DecisionPdf"("url");

-- CreateIndex
CREATE UNIQUE INDEX "DecisionPdf_postId_key" ON "DecisionPdf"("postId");

-- CreateIndex
CREATE INDEX "DecisionPdf_url_idx" ON "DecisionPdf"("url");

-- CreateIndex
CREATE INDEX "DecisionPdf_postId_idx" ON "DecisionPdf"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationPdf_url_key" ON "ConversationPdf"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationPdf_postId_key" ON "ConversationPdf"("postId");

-- CreateIndex
CREATE INDEX "ConversationPdf_url_idx" ON "ConversationPdf"("url");

-- CreateIndex
CREATE INDEX "ConversationPdf_postId_idx" ON "ConversationPdf"("postId");

-- AddForeignKey
ALTER TABLE "InitialPdf" ADD CONSTRAINT "InitialPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProlongatedPdf" ADD CONSTRAINT "ProlongatedPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DecisionPdf" ADD CONSTRAINT "DecisionPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationPdf" ADD CONSTRAINT "ConversationPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

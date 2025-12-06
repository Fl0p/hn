-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "caseNumber" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "partyType" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE INDEX "Post_caseNumber_idx" ON "Post"("caseNumber");

-- CreateIndex
CREATE INDEX "Post_partyType_idx" ON "Post"("partyType");

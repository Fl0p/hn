-- DropForeignKey
ALTER TABLE "ConversationPdf" DROP CONSTRAINT "ConversationPdf_postId_fkey";

-- DropForeignKey
ALTER TABLE "DecisionPdf" DROP CONSTRAINT "DecisionPdf_postId_fkey";

-- DropForeignKey
ALTER TABLE "ProlongatedPdf" DROP CONSTRAINT "ProlongatedPdf_postId_fkey";

-- AddForeignKey
ALTER TABLE "ProlongatedPdf" ADD CONSTRAINT "ProlongatedPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DecisionPdf" ADD CONSTRAINT "DecisionPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationPdf" ADD CONSTRAINT "ConversationPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

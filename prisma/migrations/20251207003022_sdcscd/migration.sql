-- DropForeignKey
ALTER TABLE "InitialPdf" DROP CONSTRAINT "InitialPdf_postId_fkey";

-- AddForeignKey
ALTER TABLE "InitialPdf" ADD CONSTRAINT "InitialPdf_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

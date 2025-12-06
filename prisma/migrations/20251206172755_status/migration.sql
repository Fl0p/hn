-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'INITIALIZED');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "status" "SubmissionStatus" NOT NULL DEFAULT 'INITIALIZED';

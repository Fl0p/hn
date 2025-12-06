/*
  Warnings:

  - The values [PENDING,PROCESSING,FAILED] on the enum `SubmissionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SubmissionStatus_new" AS ENUM ('INITIALIZED', 'IN_PROGRESS', 'PROLONGATED', 'DECISION_MADE', 'COMPLETED');
ALTER TABLE "public"."Post" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "status" TYPE "SubmissionStatus_new" USING ("status"::text::"SubmissionStatus_new");
ALTER TYPE "SubmissionStatus" RENAME TO "SubmissionStatus_old";
ALTER TYPE "SubmissionStatus_new" RENAME TO "SubmissionStatus";
DROP TYPE "public"."SubmissionStatus_old";
ALTER TABLE "Post" ALTER COLUMN "status" SET DEFAULT 'INITIALIZED';
COMMIT;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "initDate" SET DEFAULT '2000-01-01',
ALTER COLUMN "initDate" SET DATA TYPE TEXT;

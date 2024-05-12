/*
  Warnings:

  - The primary key for the `Income` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Income" DROP CONSTRAINT "Income_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Income_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Income_id_seq";

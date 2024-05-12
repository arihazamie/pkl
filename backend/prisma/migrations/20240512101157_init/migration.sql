/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Income` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Income_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Income_id_key" ON "Income"("id");

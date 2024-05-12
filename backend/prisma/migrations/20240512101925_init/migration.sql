/*
  Warnings:

  - The primary key for the `Expenditure` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Income` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "Income_id_key";

-- AlterTable
ALTER TABLE "Expenditure" DROP CONSTRAINT "Expenditure_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Expenditure_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Expenditure_id_seq";

-- AlterTable
ALTER TABLE "Income" DROP CONSTRAINT "Income_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Income_pkey" PRIMARY KEY ("id");

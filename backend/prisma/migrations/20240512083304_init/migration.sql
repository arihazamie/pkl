/*
  Warnings:

  - The primary key for the `Expenditure` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Expenditure` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Income` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Income` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Expenditure" DROP CONSTRAINT "Expenditure_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Expenditure_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Income" DROP CONSTRAINT "Income_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Income_pkey" PRIMARY KEY ("id");

/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Expenditure` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Expenditure` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Income` table. All the data in the column will be lost.
  - Added the required column `date` to the `Expenditure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenditure" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

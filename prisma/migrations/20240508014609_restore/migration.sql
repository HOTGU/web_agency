/*
  Warnings:

  - You are about to drop the column `cost` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `purpose` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "cost",
DROP COLUMN "purpose";

/*
  Warnings:

  - You are about to drop the column `Devis` on the `formation` table. All the data in the column will be lost.
  - Added the required column `devis` to the `Formation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `devis` to the `Theme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `formation` DROP COLUMN `Devis`,
    ADD COLUMN `devis` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `theme` ADD COLUMN `devis` BOOLEAN NOT NULL;

/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `username`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `formateurId` VARCHAR(191) NULL,
    ADD COLUMN `partenaireId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_formateurId_fkey` FOREIGN KEY (`formateurId`) REFERENCES `Formateur`(`matricule`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_partenaireId_fkey` FOREIGN KEY (`partenaireId`) REFERENCES `Partenaire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

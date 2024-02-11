-- CreateTable
CREATE TABLE `Formation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `themeId` INTEGER NOT NULL,
    `domId` INTEGER NOT NULL,
    `partId` INTEGER NULL,
    `formateurId` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `DateDebut` DATETIME(3) NOT NULL,
    `DateFin` DATETIME(3) NOT NULL,
    `NbJours` INTEGER NOT NULL,
    `NbParticipants` INTEGER NOT NULL,
    `lieu` VARCHAR(191) NOT NULL,
    `TarifP` DOUBLE NOT NULL,
    `devis` BOOLEAN NOT NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Theme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `domId` INTEGER NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `Duree` INTEGER NOT NULL,
    `NbFormateur` INTEGER NULL,
    `Niveau` VARCHAR(191) NOT NULL,
    `TarifP` DOUBLE NOT NULL,
    `isCertif` BOOLEAN NOT NULL,
    `devis` BOOLEAN NOT NULL,
    `description` VARCHAR(191) NULL,
    `prerequis` VARCHAR(191) NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StringList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,
    `themeId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formateur` (
    `matricule` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `specialite` VARCHAR(191) NOT NULL,
    `fonction` VARCHAR(191) NOT NULL,
    `NumCompte` VARCHAR(191) NOT NULL,
    `Salaire` DOUBLE NOT NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`matricule`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `partId` INTEGER NOT NULL,
    `formId` INTEGER NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `DateNaissance` DATETIME(3) NOT NULL,
    `sexe` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Domaine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partenaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `formateurId` VARCHAR(191) NULL,
    `partenaireId` INTEGER NULL,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Demande` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTheme` INTEGER NOT NULL,
    `nomOrganisme` VARCHAR(191) NOT NULL,
    `nbParticipants` INTEGER NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `note` VARCHAR(191) NULL,
    `isTraite` BOOLEAN NOT NULL DEFAULT false,
    `DateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DateModification` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Formation` ADD CONSTRAINT `Formation_themeId_fkey` FOREIGN KEY (`themeId`) REFERENCES `Theme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formation` ADD CONSTRAINT `Formation_domId_fkey` FOREIGN KEY (`domId`) REFERENCES `Domaine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formation` ADD CONSTRAINT `Formation_partId_fkey` FOREIGN KEY (`partId`) REFERENCES `Partenaire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formation` ADD CONSTRAINT `Formation_formateurId_fkey` FOREIGN KEY (`formateurId`) REFERENCES `Formateur`(`matricule`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Theme` ADD CONSTRAINT `Theme_domId_fkey` FOREIGN KEY (`domId`) REFERENCES `Domaine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StringList` ADD CONSTRAINT `StringList_themeId_fkey` FOREIGN KEY (`themeId`) REFERENCES `Theme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_partId_fkey` FOREIGN KEY (`partId`) REFERENCES `Partenaire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `Formation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_formateurId_fkey` FOREIGN KEY (`formateurId`) REFERENCES `Formateur`(`matricule`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_partenaireId_fkey` FOREIGN KEY (`partenaireId`) REFERENCES `Partenaire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Demande` ADD CONSTRAINT `Demande_idTheme_fkey` FOREIGN KEY (`idTheme`) REFERENCES `Theme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

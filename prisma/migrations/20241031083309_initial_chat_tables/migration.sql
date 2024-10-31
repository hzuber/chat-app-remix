-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `iconIcon` VARCHAR(191) NULL,
    `iconBg` VARCHAR(191) NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `chatId` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `dateEdited` DATETIME(3) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'live',

    UNIQUE INDEX `Message_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat` (
    `id` VARCHAR(191) NOT NULL,
    `iconIcon` VARCHAR(191) NULL,
    `iconBg` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `chatName` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL DEFAULT 'private_chat',
    `lastSent` VARCHAR(191) NULL,

    UNIQUE INDEX `Chat_id_key`(`id`),
    UNIQUE INDEX `Chat_lastSent_key`(`lastSent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserChat` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `chatId` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `lastRead` VARCHAR(191) NULL,
    `theme` VARCHAR(191) NULL,
    `deleted` BOOLEAN NULL,

    UNIQUE INDEX `UserChat_id_key`(`id`),
    UNIQUE INDEX `UserChat_userId_key`(`userId`),
    UNIQUE INDEX `UserChat_chatId_key`(`chatId`),
    UNIQUE INDEX `UserChat_lastRead_key`(`lastRead`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_author_fkey` FOREIGN KEY (`author`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_lastSent_fkey` FOREIGN KEY (`lastSent`) REFERENCES `Message`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserChat` ADD CONSTRAINT `UserChat_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserChat` ADD CONSTRAINT `UserChat_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserChat` ADD CONSTRAINT `UserChat_lastRead_fkey` FOREIGN KEY (`lastRead`) REFERENCES `Message`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

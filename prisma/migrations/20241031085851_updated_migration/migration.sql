-- DropForeignKey
ALTER TABLE `userchat` DROP FOREIGN KEY `UserChat_chatId_fkey`;

-- AlterTable
ALTER TABLE `userchat` MODIFY `chatId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `UserChat` ADD CONSTRAINT `UserChat_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

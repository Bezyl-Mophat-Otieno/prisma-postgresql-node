-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_preferenceId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "preferenceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "UserPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;

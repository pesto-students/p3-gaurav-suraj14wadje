/*
  Warnings:

  - Added the required column `userId` to the `CashFlow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CashFlow" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CashFlow" ADD CONSTRAINT "CashFlow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "CurrencyUnit" AS ENUM ('Thousand', 'Lakh', 'Crore');

-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "unit" "CurrencyUnit";

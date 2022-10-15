-- CreateEnum
CREATE TYPE "CashFlowType" AS ENUM ('Income', 'Expense', 'Saving');

-- CreateTable
CREATE TABLE "CashFlow" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" "CashFlowType" NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,

    CONSTRAINT "CashFlow_pkey" PRIMARY KEY ("id")
);

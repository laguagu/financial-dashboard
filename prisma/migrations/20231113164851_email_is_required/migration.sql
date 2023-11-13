/*
  Warnings:

  - Made the column `email` on table `Customers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customers" ALTER COLUMN "email" SET NOT NULL;

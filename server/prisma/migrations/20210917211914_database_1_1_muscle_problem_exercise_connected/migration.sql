/*
  Warnings:

  - You are about to drop the column `muscleGroups` on the `Body` table. All the data in the column will be lost.
  - You are about to drop the column `problemID` on the `Muscle` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Effectivity" AS ENUM ('NONE', 'E1', 'E2', 'E3');

-- DropForeignKey
ALTER TABLE "Muscle" DROP CONSTRAINT "Muscle_problemID_fkey1";

-- DropForeignKey
ALTER TABLE "Muscle" DROP CONSTRAINT "Muscle_problemID_fkey";

-- AlterTable
ALTER TABLE "Body" DROP COLUMN "muscleGroups";

-- AlterTable
ALTER TABLE "Muscle" DROP COLUMN "problemID";

-- CreateTable
CREATE TABLE "MuscleForExercise" (
    "id" SERIAL NOT NULL,
    "exerciseID" INTEGER NOT NULL,
    "muscleID" "MuscleEnum" NOT NULL,
    "effectivity" "Effectivity" NOT NULL DEFAULT E'NONE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MuscleHasProblem" (
    "id" SERIAL NOT NULL,
    "problemID" INTEGER NOT NULL,
    "muscleID" "MuscleEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MuscleHasProblemToProblem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MuscleHasProblemToProblem_AB_unique" ON "_MuscleHasProblemToProblem"("A", "B");

-- CreateIndex
CREATE INDEX "_MuscleHasProblemToProblem_B_index" ON "_MuscleHasProblemToProblem"("B");

-- AddForeignKey
ALTER TABLE "MuscleForExercise" ADD FOREIGN KEY ("exerciseID") REFERENCES "Excercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MuscleForExercise" ADD FOREIGN KEY ("muscleID") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MuscleHasProblem" ADD FOREIGN KEY ("problemID") REFERENCES "Problem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MuscleHasProblem" ADD FOREIGN KEY ("muscleID") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MuscleHasProblemToProblem" ADD FOREIGN KEY ("A") REFERENCES "MuscleHasProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MuscleHasProblemToProblem" ADD FOREIGN KEY ("B") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

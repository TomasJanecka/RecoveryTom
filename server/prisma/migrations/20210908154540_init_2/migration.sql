/*
  Warnings:

  - You are about to drop the `Muscle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MuscleGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Muscle" DROP CONSTRAINT "Muscle_bodyId_fkey";

-- DropForeignKey
ALTER TABLE "Muscle" DROP CONSTRAINT "Muscle_locationID_fkey";

-- DropForeignKey
ALTER TABLE "Muscle" DROP CONSTRAINT "Muscle_problemID_fkey";

-- DropForeignKey
ALTER TABLE "MuscleGroup" DROP CONSTRAINT "MuscleGroup_problemID_fkey";

-- DropTable
DROP TABLE "Muscle";

-- DropTable
DROP TABLE "MuscleGroup";

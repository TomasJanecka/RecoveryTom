/*
  Warnings:

  - You are about to drop the column `changedAt` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `changedAt` on the `Message` table. All the data in the column will be lost.
  - The `effectivity` column on the `MuscleForExercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `problemID` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `difficulty` on the `Excercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `userID` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EffectivityOfMuscle" AS ENUM ('NONE', 'E1', 'E2', 'E3');

-- CreateEnum
CREATE TYPE "ExerciseDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "editedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "problemID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Excercise" DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" "ExerciseDifficulty" NOT NULL;

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "changedAt",
ADD COLUMN     "editedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "changedAt",
ADD COLUMN     "editedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MuscleForExercise" DROP COLUMN "effectivity",
ADD COLUMN     "effectivity" "EffectivityOfMuscle" NOT NULL DEFAULT E'NONE';

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userID" VARCHAR(128) NOT NULL;

-- DropEnum
DROP TYPE "Effectivity";

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("problemID") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `Excercise` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('STRETCH', 'STRENGTH', 'MASAGE', 'ENDURANCE', 'TEST');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_exerciseID_fkey";

-- DropForeignKey
ALTER TABLE "MessageExercise" DROP CONSTRAINT "MessageExercise_exerciseID_fkey";

-- DropForeignKey
ALTER TABLE "UserFavExercise" DROP CONSTRAINT "UserFavExercise_exerciseID_fkey";

-- DropTable
DROP TABLE "Excercise";

-- DropEnum
DROP TYPE "ExcerciseType";

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "type" "ExerciseType" NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "difficulty" "ExerciseDifficulty" NOT NULL,
    "encodedMuscleEffectivity" VARCHAR(128)[],

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercise.name_unique" ON "Exercise"("name");

-- AddForeignKey
ALTER TABLE "UserFavExercise" ADD FOREIGN KEY ("exerciseID") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageExercise" ADD FOREIGN KEY ("exerciseID") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("exerciseID") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

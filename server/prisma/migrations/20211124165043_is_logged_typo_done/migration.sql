/*
  Warnings:

  - You are about to drop the `UserProblem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserProblem" DROP CONSTRAINT "UserProblem_problemID_fkey";

-- DropForeignKey
ALTER TABLE "UserProblem" DROP CONSTRAINT "UserProblem_userID_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isLogged" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "UserProblem";

-- CreateTable
CREATE TABLE "UserFavProblem" (
    "id" SERIAL NOT NULL,
    "userID" VARCHAR(128) NOT NULL,
    "problemID" INTEGER NOT NULL,
    "liked" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserFavProblem" ADD FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavProblem" ADD FOREIGN KEY ("problemID") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

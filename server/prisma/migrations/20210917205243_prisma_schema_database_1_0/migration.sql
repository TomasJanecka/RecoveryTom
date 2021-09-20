/*
  Warnings:

  - You are about to drop the column `muscles` on the `Excercise` table. All the data in the column will be lost.
  - You are about to drop the column `favoriteByID` on the `Food` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Excercise` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exerciseID` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `messageID` to the `Excercise` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MuscleEnum" AS ENUM ('STERNOHYOID', 'OMOHYOID', 'STERNOCLEIDOMASTEOID', 'SEMISPINALIS_CAPITIS', 'SPLENIUS_CAPITIS', 'LEVATOR_SCAPULAE', 'SCALENES', 'PECTORALIS_MAJOR', 'PECTORALIS_MINOR', 'SERRATUS_ANTERIOR', 'SUPRASPINATUS', 'INFRASPINATUS', 'TERES_MAJOR', 'TERES_MINOR', 'SUBSCAPULARIS', 'RHOMBOID_MINOR', 'RHOMBOID_MAJOR', 'SERRATUS_POSTERIOR', 'LATISSIMUS_DORSI', 'TRAPEZIUS', 'DELTOID', 'CORACOBRACHIALIS', 'BICEPS_BRACHII_SHORT', 'BICEPS_BRACHII_LONG', 'TRICEPS_BRACHII', 'BRACHIALIS', 'PRONATOR_TERES', 'FLEXOR_CARPI_RADIALIS', 'FLEXOR_CARPI_ULNARIS', 'PALMARIS_LONGUS', 'ANCONEUS', 'EXTENSOR_CARPI_RADIALIS_LONGUS', 'EXTENSOR_CARPI_RADIALIS_BREVIS', 'EXTENSOR_DIGITORUM', 'EXTENSOR_POLICIS_LONGUS', 'EXTENSOR_POLICIS_BREVIS', 'RECTUS_ABDOMINIS', 'TRANVERSUS_ABDOMINIS', 'EXTERNAL_OBLIQUE', 'INTERNAL_OBLIQUE', 'PSOAS_MINOR', 'PSOAS_MAJOR', 'ILIACUS', 'ILIOPSOAS', 'SARTORIUS', 'TENSOR_FASCIAE_LATAE', 'RECTUS_FEMORIS', 'VASTUS_LATERALIS', 'VASTUS_MEDIALIS', 'GRACILIS', 'ADDUCTOR_LONGUS', 'GLUTEUS_MAXIMUS', 'GLUTEUS_MEDIUS', 'GLUTEUS_MINIMUS', 'PIRIFORMIS', 'ADDUCTOR_MAGNUS', 'BICEPS_FEMORIS', 'SEMITENDINOSUS', 'SEMIMEMBRANOSUS', 'GASTROCNEMIUS', 'POPLITERIUS', 'PLANTARIS', 'FIBULARIS_LONGUS', 'TIBIALIS_ANTERIOR', 'EXTENSOR_DIGITORUM_LONGUS', 'ETENSOR_HALLUCIS_LONGUS', 'SOLEUS', 'FIBULARIS_TERTIUS');

-- CreateEnum
CREATE TYPE "Joint" AS ENUM ('HEAD', 'NECK', 'SHOULDER_CENTER', 'SHOULDER', 'ELBOW', 'WRIST', 'FINGERS_HAND', 'LOW_BACK', 'COCCYGIS', 'HIP', 'KNEE', 'ANKLE', 'FINGERS_FOOT');

-- CreateEnum
CREATE TYPE "MuscleGroup" AS ENUM ('SERRATUS_ANTERIOR', 'RHOMBOID_MAJOR', 'RHOMBOID_MINOR');

-- CreateEnum
CREATE TYPE "Lopatka" AS ENUM ('SERRATUS_ANTERIOR', 'RHOMBOID_MAJOR', 'RHOMBOID_MINOR');

-- AlterEnum
ALTER TYPE "ExcerciseType" ADD VALUE 'TEST';

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_favoriteByID_fkey";

-- AlterTable
ALTER TABLE "Body" ADD COLUMN     "muscleGroups" "MuscleGroup"[];

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "exerciseID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Excercise" DROP COLUMN "muscles",
ADD COLUMN     "messageID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "favoriteByID",
ADD COLUMN     "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "joints" "Joint"[],
ADD COLUMN     "muscleGroups" "MuscleGroup"[],
ADD COLUMN     "name" VARCHAR(128) DEFAULT E'';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "darkmode" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "signedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "UserHasProblem" (
    "id" SERIAL NOT NULL,
    "userID" VARCHAR(128) NOT NULL,
    "problemID" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageExercise" (
    "id" SERIAL NOT NULL,
    "exerciseID" INTEGER NOT NULL,
    "messageID" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(128) NOT NULL DEFAULT E'',
    "userID" VARCHAR(128) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFavExercise" (
    "id" SERIAL NOT NULL,
    "userID" VARCHAR(128) NOT NULL,
    "exerciseID" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFavFood" (
    "id" SERIAL NOT NULL,
    "userID" VARCHAR(128) NOT NULL,
    "foodID" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Muscle" (
    "id" "MuscleEnum" NOT NULL,
    "bodyID" INTEGER NOT NULL,
    "problemID" INTEGER NOT NULL,
    "exerciseID" INTEGER NOT NULL,
    "condition" "MuscleCondition" NOT NULL DEFAULT E'GOOD',
    "muscleGroup" "MuscleGroup" NOT NULL,
    "joints" "Joint"[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageFood" (
    "id" SERIAL NOT NULL,
    "messageID" INTEGER NOT NULL,
    "foodID" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Excercise.name_unique" ON "Excercise"("name");

-- AddForeignKey
ALTER TABLE "UserHasProblem" ADD FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasProblem" ADD FOREIGN KEY ("problemID") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageExercise" ADD FOREIGN KEY ("exerciseID") REFERENCES "Excercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageExercise" ADD FOREIGN KEY ("messageID") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavExercise" ADD FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavExercise" ADD FOREIGN KEY ("exerciseID") REFERENCES "Excercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavFood" ADD FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavFood" ADD FOREIGN KEY ("foodID") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Muscle" ADD FOREIGN KEY ("bodyID") REFERENCES "Body"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Muscle" ADD FOREIGN KEY ("problemID") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Muscle" ADD FOREIGN KEY ("problemID") REFERENCES "Excercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageFood" ADD FOREIGN KEY ("messageID") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageFood" ADD FOREIGN KEY ("foodID") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("exerciseID") REFERENCES "Excercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

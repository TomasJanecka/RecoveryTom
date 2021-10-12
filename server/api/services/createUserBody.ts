import { PrismaClient, MuscleID, Joint, MuscleGroup } from "@prisma/client";
import { response } from "express";

const prisma = new PrismaClient();

async function createBody(userID: string) {
  const body = await prisma.body.create({
    data: {
      userID: userID,
    },
  });

  if (!body) {
    response.status(500).json({ message: "Could not create body." });
    return;
  }

  await prisma.muscle.create({
    data: {
      bodyID: userID,
      name: MuscleID.OMOHYOIDS,
      joints: [Joint.NECK, Joint.HEAD],
      muscleGroup: MuscleGroup.NECK,
    },
  });
}

// const headUp: Exercise = prisma.excercise.create({
//   data: {
//     type: EExerciseType.STRETCH,
//     difficulty: EExerciseDifficulty.EASY,
//     muscle: [EMuscleID.ADDUCTOR_LONGUS, EMuscleID.ADDUCTOR_MAGNUS],
//   },
// });
//
// const adductor: IMuscle = prisma.muscle.create({
//   data: {
//     id: EMuscleID.ADDUCTOR_LONGUS,
//   },
// });
//
// const adductorExercise: IMuscleForExercise = prisma.muscleForExercise.create({
//   data: {
//     muscleID: adductor.id,
//     exercise: headUp.id,
//   },
// });

// const serratusAnterior = prisma;

export default createBody;

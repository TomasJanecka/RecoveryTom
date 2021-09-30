import { PrismaClient, Excercise } from "@prisma/client";
import {
  IBody,
  IExercise,
  IMuscle,
  IMuscleForExercise,
} from "../../../recovery-app/@types/models";
import {
  EExerciseDifficulty,
  EExerciseType,
  EMuscleID,
} from "../../../recovery-app/@types/enums";

const prisma = new PrismaClient();

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
//
// const body: IBody = prisma.body.create({
//   data: {
//     userID: "",
//     muscles: {},
//   },
// });

// const serratusAnterior = prisma;

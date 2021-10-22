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

  await prisma.muscle.createMany({
    data: [
      {
        bodyID: userID,
        name: MuscleID.STERNOHYOID,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        bodyID: userID,
        name: MuscleID.OMOHYOIDS,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        bodyID: userID,
        name: MuscleID.STERNOCLEIDOMASTEOID,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        bodyID: userID,
        name: MuscleID.SEMISPINALIS_CAPITIS,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        bodyID: userID,
        name: MuscleID.LEVATOR_SCAPULAE,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK, MuscleGroup.SCAPULA],
      },
      {
        bodyID: userID,
        name: MuscleID.SCALENES,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        bodyID: userID,
        name: MuscleID.PECTORALIS_MAJOR,
        joints: [Joint.SHOULDER_CENTER],
        muscleGroup: [MuscleGroup.CHEST, MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.PECTORALIS_MAJOR,
        joints: [Joint.SHOULDER_CENTER],
        muscleGroup: [MuscleGroup.CHEST, MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.PECTORALIS_MINOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SCAPULA,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.SERRATUS_ANTERIOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SCAPULA,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.SUPRASPINATUS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.INFRASPINATUS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.TERES_MAJOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.TERES_MINOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.SUBSCAPULARIS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.RHOMBOID_MINOR,
        joints: [Joint.SHOULDER, Joint.SHOULDER_CENTER],
        muscleGroup: [
          MuscleGroup.SCAPULA,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SPINE_UP,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.RHOMBOID_MAJOR,
        joints: [Joint.SHOULDER, Joint.SHOULDER_CENTER],
        muscleGroup: [
          MuscleGroup.SCAPULA,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SPINE_UP,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.SERRATUS_POSTERIOR_SUPERIOR,
        joints: [Joint.SHOULDER_CENTER],
        muscleGroup: [MuscleGroup.RIBS, MuscleGroup.SHOULDER_CENTER],
      },
      {
        bodyID: userID,
        name: MuscleID.SERRATUS_POSTERIOR_INFERIOR,
        joints: [Joint.LOW_BACK],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.LOW_BACK,
          MuscleGroup.SPINE_LOW,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.LATISSIMUS_DORSI,
        joints: [Joint.LOW_BACK, Joint.SHOULDER],
        muscleGroup: [
          MuscleGroup.LOW_BACK,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SPINE_LOW,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.TRAPEZIUS,
        joints: [Joint.SHOULDER, Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [
          MuscleGroup.NECK,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SHOULDER_CENTER,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.DELTOID,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.UPPER_ARM],
      },
      {
        bodyID: userID,
        name: MuscleID.CORACOBRACHIALIS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.SCAPULA],
      },
      {
        bodyID: userID,
        name: MuscleID.BICEPS_BRACHII_SHORT,
        joints: [Joint.SHOULDER, Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        bodyID: userID,
        name: MuscleID.BICEPS_BRACHII_LONG,
        joints: [Joint.SHOULDER, Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        bodyID: userID,
        name: MuscleID.TRICEPS_BRACHII,
        joints: [Joint.SHOULDER, Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        bodyID: userID,
        name: MuscleID.BRACHIORADIALIS,
        joints: [Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        bodyID: userID,
        name: MuscleID.PRONATOR_TERES,
        joints: [Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        bodyID: userID,
        name: MuscleID.FLEXOR_CARPI_RADIALIS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.FLEXOR_CARPI_ULNARIS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.PALMARIS_LONGUS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.ANCONEUS,
        joints: [Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        bodyID: userID,
        name: MuscleID.EXTENSOR_CARPI_RADIALIS_LONGUS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.EXTENSOR_CARPI_RADIALIS_BREVIS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.EXTENSOR_DIGITORUM,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.EXTENSOR_POLICIS_LONGUS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.EXTENSOR_POLICIS_BREVIS,
        joints: [Joint.FINGERS_HAND],
        muscleGroup: [MuscleGroup.FOREARM, MuscleGroup.FINGERS_HAND],
      },
      {
        bodyID: userID,
        name: MuscleID.RECTUS_ABDOMINIS,
        joints: [],
        muscleGroup: [MuscleGroup.RIBS, MuscleGroup.PELVIS, MuscleGroup.BELLY],
      },
      {
        bodyID: userID,
        name: MuscleID.TRANVERSUS_ABDOMINIS,
        joints: [Joint.LOW_BACK],
        muscleGroup: [
          MuscleGroup.BELLY,
          MuscleGroup.LOW_BACK,
          MuscleGroup.RIBS,
          MuscleGroup.PELVIS,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.EXTERNAL_OBLIQUE,
        joints: [],
        muscleGroup: [MuscleGroup.BELLY, MuscleGroup.RIBS, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.INTERNAL_OBLIQUE,
        joints: [],
        muscleGroup: [MuscleGroup.BELLY, MuscleGroup.RIBS, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.QUADRATUS_LUMBORUM,
        joints: [Joint.LOW_BACK],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.PELVIS,
          MuscleGroup.SPINE_LOW,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.PSOAS_MINOR,
        joints: [Joint.LOW_BACK],
        muscleGroup: [MuscleGroup.PELVIS, MuscleGroup.SPINE_LOW],
      },
      {
        bodyID: userID,
        name: MuscleID.PSOAS_MAJOR,
        joints: [Joint.LOW_BACK, Joint.HIP],
        muscleGroup: [MuscleGroup.PELVIS, MuscleGroup.SPINE_LOW],
      },
      {
        bodyID: userID,
        name: MuscleID.ILIACUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.SARTORIUS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [
          MuscleGroup.PELVIS,
          MuscleGroup.THIGH_FRONT,
          MuscleGroup.THIGH_BACK,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.SARTORIUS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [
          MuscleGroup.PELVIS,
          MuscleGroup.THIGH_FRONT,
          MuscleGroup.THIGH_BACK,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.TENSOR_FASCIAE_LATAE,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.PELVIS, MuscleGroup.THIGH_FRONT],
      },
      {
        bodyID: userID,
        name: MuscleID.RECTUS_FEMORIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT],
      },
      {
        bodyID: userID,
        name: MuscleID.VASTUS_LATERALIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT],
      },
      {
        bodyID: userID,
        name: MuscleID.VASTUS_MEDIALIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT],
      },
      {
        bodyID: userID,
        name: MuscleID.GRACILIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT, MuscleGroup.THIGH_BACK],
      },
      {
        bodyID: userID,
        name: MuscleID.ADDUCTOR_LONGUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.THIGH_FRONT, MuscleGroup.THIGH_BACK],
      },
      {
        bodyID: userID,
        name: MuscleID.GLUTEUS_MAXIMUS,
        joints: [Joint.HIP, Joint.COCCYGIS],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.GLUTEUS_MEDIUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.GLUTEUS_MINIMUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.PIRIFORMIS,
        joints: [Joint.HIP, Joint.COCCYGIS],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.ADDUCTOR_MAGNUS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [
          MuscleGroup.THIGH_BACK,
          MuscleGroup.PELVIS,
          MuscleGroup.THIGH_FRONT,
        ],
      },
      {
        bodyID: userID,
        name: MuscleID.BICEPS_FEMORIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.SEMITENDINOSUS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        bodyID: userID,
        name: MuscleID.GASTROCNEMIUS,
        joints: [Joint.KNEE, Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        bodyID: userID,
        name: MuscleID.POPLITERIUS,
        joints: [Joint.KNEE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        bodyID: userID,
        name: MuscleID.PLANTARIS,
        joints: [Joint.KNEE, Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        bodyID: userID,
        name: MuscleID.FIBULARIS_LONGUS,
        joints: [Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_FRONT],
      },
      {
        bodyID: userID,
        name: MuscleID.TIBIALIS_ANTERIOR,
        joints: [Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_FRONT],
      },
      {
        bodyID: userID,
        name: MuscleID.EXTENSOR_DIGITORUM_LONGUS,
        joints: [Joint.ANKLE, Joint.FINGERS_FOOT],
        muscleGroup: [MuscleGroup.CALF_FRONT, MuscleGroup.FINGERS_FOOT],
      },
      {
        bodyID: userID,
        name: MuscleID.ETENSOR_HALLUCIS_LONGUS,
        joints: [Joint.ANKLE, Joint.FINGERS_FOOT],
        muscleGroup: [MuscleGroup.CALF_FRONT, MuscleGroup.FINGERS_FOOT],
      },
      {
        bodyID: userID,
        name: MuscleID.SOLEUS,
        joints: [Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        bodyID: userID,
        name: MuscleID.FIBULARIS_TERTIUS,
        joints: [Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_FRONT, MuscleGroup.FINGERS_FOOT],
      },
    ],
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

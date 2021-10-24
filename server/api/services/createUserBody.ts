import { PrismaClient, MuscleID, Joint, MuscleGroup } from "@prisma/client";

const prisma = new PrismaClient();

async function createMuscleTable() {
  await prisma.muscle.createMany({
    data: [
      {
        id: MuscleID.STERNOHYOID,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        id: MuscleID.OMOHYOIDS,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        id: MuscleID.STERNOCLEIDOMASTEOID,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        id: MuscleID.SEMISPINALIS_CAPITIS,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        id: MuscleID.LEVATOR_SCAPULAE,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK, MuscleGroup.SCAPULA],
      },
      {
        id: MuscleID.SCALENES,
        joints: [Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [MuscleGroup.NECK],
      },
      {
        id: MuscleID.PECTORALIS_MAJOR,
        joints: [Joint.SHOULDER_CENTER],
        muscleGroup: [MuscleGroup.CHEST, MuscleGroup.UPPER_ARM],
      },
      {
        id: MuscleID.PECTORALIS_MINOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SCAPULA,
        ],
      },
      {
        id: MuscleID.SERRATUS_ANTERIOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SCAPULA,
        ],
      },
      {
        id: MuscleID.SUPRASPINATUS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        id: MuscleID.INFRASPINATUS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        id: MuscleID.TERES_MAJOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        id: MuscleID.TERES_MINOR,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        id: MuscleID.SUBSCAPULARIS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.SCAPULA, MuscleGroup.UPPER_ARM],
      },
      {
        id: MuscleID.RHOMBOID_MINOR,
        joints: [Joint.SHOULDER, Joint.SHOULDER_CENTER],
        muscleGroup: [
          MuscleGroup.SCAPULA,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SPINE_UP,
        ],
      },
      {
        id: MuscleID.RHOMBOID_MAJOR,
        joints: [Joint.SHOULDER, Joint.SHOULDER_CENTER],
        muscleGroup: [
          MuscleGroup.SCAPULA,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SPINE_UP,
        ],
      },
      {
        id: MuscleID.SERRATUS_POSTERIOR_SUPERIOR,
        joints: [Joint.SHOULDER_CENTER],
        muscleGroup: [MuscleGroup.RIBS, MuscleGroup.SHOULDER_CENTER],
      },
      {
        id: MuscleID.SERRATUS_POSTERIOR_INFERIOR,
        joints: [Joint.LOW_BACK],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.LOW_BACK,
          MuscleGroup.SPINE_LOW,
        ],
      },
      {
        id: MuscleID.LATISSIMUS_DORSI,
        joints: [Joint.LOW_BACK, Joint.SHOULDER],
        muscleGroup: [
          MuscleGroup.LOW_BACK,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SPINE_LOW,
        ],
      },
      {
        id: MuscleID.TRAPEZIUS,
        joints: [Joint.SHOULDER, Joint.SHOULDER_CENTER, Joint.HEAD],
        muscleGroup: [
          MuscleGroup.NECK,
          MuscleGroup.UPPER_ARM,
          MuscleGroup.SHOULDER_CENTER,
        ],
      },
      {
        id: MuscleID.DELTOID,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.UPPER_ARM],
      },
      {
        id: MuscleID.CORACOBRACHIALIS,
        joints: [Joint.SHOULDER],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.SCAPULA],
      },
      {
        id: MuscleID.BICEPS_BRACHII_SHORT,
        joints: [Joint.SHOULDER, Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        id: MuscleID.BICEPS_BRACHII_LONG,
        joints: [Joint.SHOULDER, Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        id: MuscleID.TRICEPS_BRACHII,
        joints: [Joint.SHOULDER, Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        id: MuscleID.BRACHIORADIALIS,
        joints: [Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        id: MuscleID.PRONATOR_TERES,
        joints: [Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        id: MuscleID.FLEXOR_CARPI_RADIALIS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        id: MuscleID.FLEXOR_CARPI_ULNARIS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        id: MuscleID.PALMARIS_LONGUS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        id: MuscleID.ANCONEUS,
        joints: [Joint.ELBOW],
        muscleGroup: [MuscleGroup.UPPER_ARM, MuscleGroup.FOREARM],
      },
      {
        id: MuscleID.EXTENSOR_CARPI_RADIALIS_LONGUS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        id: MuscleID.EXTENSOR_CARPI_RADIALIS_BREVIS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        id: MuscleID.EXTENSOR_DIGITORUM,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        id: MuscleID.EXTENSOR_POLICIS_LONGUS,
        joints: [Joint.ELBOW, Joint.FINGERS_HAND],
        muscleGroup: [
          MuscleGroup.UPPER_ARM,
          MuscleGroup.FOREARM,
          MuscleGroup.FINGERS_HAND,
        ],
      },
      {
        id: MuscleID.EXTENSOR_POLICIS_BREVIS,
        joints: [Joint.FINGERS_HAND],
        muscleGroup: [MuscleGroup.FOREARM, MuscleGroup.FINGERS_HAND],
      },
      {
        id: MuscleID.RECTUS_ABDOMINIS,
        joints: [],
        muscleGroup: [MuscleGroup.RIBS, MuscleGroup.PELVIS, MuscleGroup.BELLY],
      },
      {
        id: MuscleID.TRANVERSUS_ABDOMINIS,
        joints: [Joint.LOW_BACK],
        muscleGroup: [
          MuscleGroup.BELLY,
          MuscleGroup.LOW_BACK,
          MuscleGroup.RIBS,
          MuscleGroup.PELVIS,
        ],
      },
      {
        id: MuscleID.EXTERNAL_OBLIQUE,
        joints: [],
        muscleGroup: [MuscleGroup.BELLY, MuscleGroup.RIBS, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.INTERNAL_OBLIQUE,
        joints: [],
        muscleGroup: [MuscleGroup.BELLY, MuscleGroup.RIBS, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.QUADRATUS_LUMBORUM,
        joints: [Joint.LOW_BACK],
        muscleGroup: [
          MuscleGroup.RIBS,
          MuscleGroup.PELVIS,
          MuscleGroup.SPINE_LOW,
        ],
      },
      {
        id: MuscleID.PSOAS_MINOR,
        joints: [Joint.LOW_BACK],
        muscleGroup: [MuscleGroup.PELVIS, MuscleGroup.SPINE_LOW],
      },
      {
        id: MuscleID.PSOAS_MAJOR,
        joints: [Joint.LOW_BACK, Joint.HIP],
        muscleGroup: [MuscleGroup.PELVIS, MuscleGroup.SPINE_LOW],
      },
      {
        id: MuscleID.ILIACUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.SARTORIUS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [
          MuscleGroup.PELVIS,
          MuscleGroup.THIGH_FRONT,
          MuscleGroup.THIGH_BACK,
        ],
      },
      {
        id: MuscleID.TENSOR_FASCIAE_LATAE,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.PELVIS, MuscleGroup.THIGH_FRONT],
      },
      {
        id: MuscleID.RECTUS_FEMORIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT],
      },
      {
        id: MuscleID.VASTUS_LATERALIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT],
      },
      {
        id: MuscleID.VASTUS_MEDIALIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT],
      },
      {
        id: MuscleID.GRACILIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_FRONT, MuscleGroup.THIGH_BACK],
      },
      {
        id: MuscleID.ADDUCTOR_LONGUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.THIGH_FRONT, MuscleGroup.THIGH_BACK],
      },
      {
        id: MuscleID.GLUTEUS_MAXIMUS,
        joints: [Joint.HIP, Joint.COCCYGIS],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.GLUTEUS_MEDIUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.GLUTEUS_MINIMUS,
        joints: [Joint.HIP],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.PIRIFORMIS,
        joints: [Joint.HIP, Joint.COCCYGIS],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.ADDUCTOR_MAGNUS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [
          MuscleGroup.THIGH_BACK,
          MuscleGroup.PELVIS,
          MuscleGroup.THIGH_FRONT,
        ],
      },
      {
        id: MuscleID.BICEPS_FEMORIS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.SEMITENDINOSUS,
        joints: [Joint.HIP, Joint.KNEE],
        muscleGroup: [MuscleGroup.THIGH_BACK, MuscleGroup.PELVIS],
      },
      {
        id: MuscleID.GASTROCNEMIUS,
        joints: [Joint.KNEE, Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        id: MuscleID.POPLITERIUS,
        joints: [Joint.KNEE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        id: MuscleID.PLANTARIS,
        joints: [Joint.KNEE, Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        id: MuscleID.FIBULARIS_LONGUS,
        joints: [Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_FRONT],
      },
      {
        id: MuscleID.TIBIALIS_ANTERIOR,
        joints: [Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_FRONT],
      },
      {
        id: MuscleID.EXTENSOR_DIGITORUM_LONGUS,
        joints: [Joint.ANKLE, Joint.FINGERS_FOOT],
        muscleGroup: [MuscleGroup.CALF_FRONT, MuscleGroup.FINGERS_FOOT],
      },
      {
        id: MuscleID.ETENSOR_HALLUCIS_LONGUS,
        joints: [Joint.ANKLE, Joint.FINGERS_FOOT],
        muscleGroup: [MuscleGroup.CALF_FRONT, MuscleGroup.FINGERS_FOOT],
      },
      {
        id: MuscleID.SOLEUS,
        joints: [Joint.ANKLE],
        muscleGroup: [MuscleGroup.CALF_BACK],
      },
      {
        id: MuscleID.FIBULARIS_TERTIUS,
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

export default createMuscleTable;

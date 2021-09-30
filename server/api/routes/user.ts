import {
  PrismaClient,
  User,
  MuscleID,
  Muscle,
  Joint,
  MuscleGroup,
} from "@prisma/client";
import { Request, Response, NextFunction, Router } from "express";
import express from "express";
import {
  UserFavorites,
  UsersBody,
  UsersProducts,
  UserWithMessages,
} from "../../@types/types";

const prisma = new PrismaClient();
let router: Router = express.Router();
router.use(express.json());

router.use(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    next();
  }
);

router.route("/id").get(async (request: Request, response: Response) => {
  const user: User | null = await prisma.user.findUnique({
    where: { id: response.locals.userID },
    include: { body: true },
  });
  response.status(200).json(user);
});

router.route("/products").get(async (request: Request, response: Response) => {
  const user: UsersProducts | null = await prisma.user.findUnique({
    where: { id: response.locals.userID },
    include: { products: true },
  });

  if (user) {
    response.status(200).json(user.products);
  } else {
    response.status(400).json({ message: "Failed to load user's products!" });
  }
});

router.route("/messages").get(async (request: Request, response: Response) => {
  const user: UserWithMessages | null = await prisma.user.findUnique({
    where: { id: response.locals.userID },
    include: { messages: true },
  });
  if (user) {
    response.status(200).json(user.messages);
  } else {
    response.status(400).json({ message: "Failed to load user's messages" });
  }
});

router.route("/favorites").get(async (request: Request, response: Response) => {
  const userFavoriteItems: UserFavorites | null = await prisma.user.findUnique({
    where: { id: response.locals.userID },
    include: { favoriteFood: true, favoriteExercises: true },
  });

  if (userFavoriteItems) {
    response.status(200).json({
      foods: userFavoriteItems.favoriteFood,
      exercises: userFavoriteItems.favoriteExercises,
    });
  } else {
    response
      .status(400)
      .json({ message: "Failed to load user's favorite items!" });
  }
});

router.route("/buy").post(async (request: Request, response: Response) => {
  const ProductInfo = {
    stick: { price: 20 },
    ball: { price: 20 },
  };
  const queryTypes = ["stick", "massageBall"];
  const productName = <string>request.query.product;

  if (!queryTypes.includes(productName)) {
    response
      .status(400)
      .json({ message: `Wrong product query parameter=${productName}!` });
  }

  const newProduct = await prisma.product.create({
    data: {
      userID: response.locals.userID,
      name: productName,
      price: ProductInfo.stick.price,
    },
  });

  if (!newProduct) {
    response.status(500).json({ message: "Failed to create data!" });
  } else {
    response.status(200).json({ message: "Product created." });
  }
});

router.route("/favorite").post(async (request: Request, response: Response) => {
  const queryTypes = ["exercise", "food"];
  const queryType = <string>request.query.type;
  const exerciseID = request.header("X-Exercise");

  let newRelation;
  if (!exerciseID) {
    response.status(400).json({ message: `Wrong exerciseID=${exerciseID}!` });
  } else {
    switch (queryType) {
      case queryTypes[0]:
        newRelation = await prisma.userFavExercise.create({
          data: {
            userID: response.locals.userID,
            exerciseID: +exerciseID,
          },
        });
        break;
      case queryTypes[1]:
        newRelation = await prisma.userFavExercise.create({
          data: {
            userID: response.locals.userID,
            exerciseID: +exerciseID,
          },
        });
        break;
      default:
        response
          .status(400)
          .json({ message: `Wrong query parameter=${queryType}!` });
    }
  }

  response.status(200).json({ message: `${queryType} was added to favorite.` });
});

router.route("/problem").post(async (request: Request, response: Response) => {
  const { name, muscles } = request.body;
  const muscleNames = Object.values(MuscleID).map((muscle) => {
    return muscle.toString();
  });

  const usersBodyMuscles: UsersBody | null = await prisma.body.findUnique({
    where: { userID: response.locals.userID },
    include: { muscles: true },
  });

  let bodyMuscles: Muscle[] = [];
  if (usersBodyMuscles) {
    bodyMuscles = usersBodyMuscles.muscles;
  } else {
    response
      .status(500)
      .json({ message: "Failed to load users body muscles!" });
  }

  // const newProblem = await prisma.problem.create({
  //   data: {
  //     name: name,
  //   },
  // });

  let problemJoints = [];
  let problemAreas = [];

  for (const muscle of muscles) {
    if (!muscleNames.includes(muscle)) {
      response.status(400).json({ message: `Wrong muscle=${muscle}!` });
    }
    const muscleToConnect = bodyMuscles.find(
      (actMuscle) => actMuscle.name === muscle
    );
    if (muscleToConnect) {
      // console.log(muscleToConnect.joints);
      problemJoints.push(muscleToConnect.joints);
      problemAreas.push(muscleToConnect.muscleGroup);
      // const newConnection = await prisma.muscleHasProblem.create({
      //   data: {
      //     muscleID: muscleToConnect.id,
      //     problemID: newProblem.id,
      //   },
      // });
    }
  }

  console.log(problemAreas);

  // let typedMuscleGroup: MuscleGroup = MuscleGroup;
  // let typedMuscleGroupString: keyof typeof MuscleGroup = problemAreas[0];

  const problemMuscles: MuscleGroup[] = problemAreas.map((area) => {
    return Object(typeof area as MuscleGroup);
  });

  console.log(problemMuscles);

  // await prisma.problem.update({
  //   where: { id: newProblem.id },
  //   data: {
  //     joints: problemJoints.flat(1),
  //     muscleGroups: problemMuscles,
  //   },
  // });

  response.status(200).json({ message: `Problem created.` });
});

export default router;

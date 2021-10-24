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

router
  .route("/favorite/:type(exercise||food)/:id(\\d+)")
  .post(async (request: Request, response: Response) => {
    let newRelation;
    const paramID = +request.params.id;
    switch (request.params.type) {
      case "exercise":
        if (
          paramID &&
          (await prisma.exercise.findUnique({ where: { id: paramID } }))
        ) {
          newRelation = await prisma.userFavExercise.create({
            data: {
              userID: response.locals.userID,
              exerciseID: +request.params.id,
            },
          });
        } else {
          response
            .status(400)
            .json({ message: `Wrong header X-Exercise=${request.params.id}!` });
          return;
        }
        break;
      case "food":
        if (
          paramID &&
          (await prisma.food.findUnique({ where: { id: paramID } }))
        ) {
          newRelation = await prisma.userFavExercise.create({
            data: {
              userID: response.locals.userID,
              exerciseID: +request.params.id,
            },
          });
        } else {
          response
            .status(400)
            .json({ message: `Wrong header X-Food=${request.params.id}!` });
          return;
        }
        break;
      default:
        response
          .status(400)
          .json({ message: `Wrong query parameter=${request.params.id}!` });
        return;
    }

    if (!newRelation) {
      response.status(500).json({ message: "Failed to create new relation!" });
      return;
    }

    response
      .status(200)
      .json({ message: `${request.params.type} was added to favorite.` });
  });

// router.route("/problem").post(async (request: Request, response: Response) => {
//   const { name, muscles } = request.body;
//   const muscleNames = Object.values(MuscleID).map((muscle) => {
//     return muscle.toString();
//   });
//
//   const usersBodyMuscles: UsersBody | null = await prisma.body.findUnique({
//     where: { userID: response.locals.userID },
//     include: { muscles: true },
//   });
//
//   let bodyMuscles: Muscle[] = [];
//   if (usersBodyMuscles) {
//     bodyMuscles = usersBodyMuscles.muscles;
//   } else {
//     response
//       .status(500)
//       .json({ message: "Failed to load users body muscles!" });
//     return;
//   }
//
//   let newProblem = await prisma.problem.create({
//     data: {
//       name: name.toString(),
//     },
//   });
//
//   let problemJoints: Set<Joint> = new Set();
//   let problemGroups: Set<MuscleGroup> = new Set();
//
//   for (const muscle of muscles) {
//     if (!muscleNames.includes(muscle)) {
//       response.status(400).json({ message: `Wrong muscle=${muscle}!` });
//       await prisma.problem.delete({ where: { id: newProblem.id } });
//       return;
//     }
//     const problemMuscle = bodyMuscles.find(
//       (actMuscle) => actMuscle.name === muscle
//     );
//
//     if (problemMuscle) {
//       problemMuscle.joints.map((joint) => {
//         if (joint) {
//           problemJoints.add(joint as keyof typeof Joint);
//         }
//       });
//       problemMuscle.muscleGroup.map((group) => {
//         if (group) {
//           problemGroups.add(group as keyof typeof MuscleGroup);
//         }
//       });
//     }
//   }
//
//   newProblem = await prisma.problem.update({
//     where: { id: newProblem.id },
//     data: {
//       joints: [...problemJoints],
//       muscleGroups: [...problemGroups],
//     },
//   });
//
//   if (!newProblem) {
//     response.status(500).json({ message: "Failed to create user's problem!" });
//     return;
//   }
//
//   response.status(200).json({ message: `Problem created.` });
// });

router.route("/message").post(async (request: Request, response: Response) => {
  const { text, exerciseID, foodID, problemID } = request.body;
  const queryType = <string>request.query.type;

  const newMessage = await prisma.message.create({
    data: {
      text: text,
      userID: response.locals.userID,
    },
  });

  switch (queryType) {
    case "exercise":
      if (!(typeof exerciseID === "number")) {
        response
          .status(400)
          .json({ message: `Wrong exerciseID=${exerciseID}!` });
        return;
      }
      const exercise = await prisma.exercise.findUnique({
        where: { id: exerciseID },
      });
      if (!exercise) {
        response
          .status(400)
          .json({ message: `Wrong exerciseID=${exerciseID}!` });
        return;
      }
      const messageExercise = await prisma.messageExercise.create({
        data: { messageID: newMessage.id, exerciseID: exerciseID },
      });
      if (!messageExercise) {
        response
          .status(500)
          .json({ message: "Failed to create binding message exercise!" });
        return;
      }
      break;
    case "food":
      if (!(typeof foodID === "number")) {
        response.status(400).json({ message: `Wrong foodID=${foodID}!` });
        return;
      }
      const food = await prisma.food.findUnique({ where: { id: foodID } });
      if (!food) {
        response.status(400).json({ message: `Wrong foodID=${foodID}!` });
        return;
      }
      const messageFood = await prisma.messageFood.create({
        data: { messageID: newMessage.id, foodID: foodID },
      });
      if (!messageFood) {
        response
          .status(500)
          .json({ message: "Failed to create binding message food!" });
        return;
      }
      break;
    case "problem":
      if (!(typeof problemID === "number")) {
        response.status(400).json({ message: `Wrong problemID=${problemID}!` });
        return;
      }
      const problem = await prisma.problem.findUnique({
        where: { id: problemID },
      });
      if (!problem) {
        response.status(400).json({ message: `Wrong problemID=${problemID}!` });
        return;
      }
      const messageProblem = await prisma.messageProblem.create({
        data: { messageID: newMessage.id, problemID: problemID },
      });
      if (!messageProblem) {
        response
          .status(500)
          .json({ message: "Failed to create binding message problem!" });
        return;
      }
      break;
    default:
      await prisma.message.delete({ where: { id: newMessage.id } });
      response
        .status(400)
        .json({ message: `Wrong query type parameter=${queryType}!` });
      return;
  }

  response.status(200).json({ message: "Message was created!" });
});

export default router;

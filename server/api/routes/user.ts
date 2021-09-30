import { PrismaClient, User } from "@prisma/client";
import { Request, Response, NextFunction, Router } from "express";
import express from "express";
import {
  UserFavorites,
  UsersProducts,
  UserWithMessages,
} from "../../@types/types";

const prisma = new PrismaClient();
let router: Router = express.Router();
// router.use(express.json());

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

export default router;

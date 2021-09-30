import { NextFunction, Request, Response, Router } from "express";
import express from "express";
import user from "../routes/user";
import exercises from "./exercises";
import create from "./create";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let router: Router = express.Router();

router.use(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    const userID = "" + request.header("X-User");
    if (!userID) return response.status(404).send("invalid username");
    response.locals.userID = userID;
    const user = await prisma.user.findUnique({
      where: { id: userID },
    });
    if (!user) {
      response.status(400).json({ message: `Wrong user userID=${userID}` });
    }
    next();
  }
);

router.use("/user", user);
router.use("/create", create);
router.use("/exercises", exercises);

export default router;

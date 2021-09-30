import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const express = require("express");
const prisma = new PrismaClient();
let router: Router = express.Router();

router.route("/").post(async (request: Request, response: Response) => {});

export default router;

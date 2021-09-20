import { PrismaClient } from "@prisma/client";
import { request, response, Router } from "express";

const express = require("express");
const prisma = new PrismaClient();
let router: Router = express.Router();

export default router;

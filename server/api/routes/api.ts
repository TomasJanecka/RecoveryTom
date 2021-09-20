import { request, response, Router } from "express";
import post from "../routes/post";
import user from "../routes/user";

const express = require("express");
let router: Router = express.Router();

router.use("/user", user);
router.use("/create", post);
router.use("/create", post);

export default router;

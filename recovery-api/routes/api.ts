import { request, response, Router } from "express";

const express = require("express");
let router: Router = express.Router();

// router.use("/property", property);
// router.use("/user", user);

router.route("/").get(async (request, response) => {
  response.status(200).json({ message: "OK" });
});

export default router;

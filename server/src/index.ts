import { PrismaClient, MuscleID, MuscleGroup, Joint } from "@prisma/client";
import express from "express";
import path from "path";
import passport from "passport";
import api from "../api/routes/api";

require("../api/services/passport");
const cookieSession = require("cookie-session");
const keys = require("../config/keys");
const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

async function main() {
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  require("../api/routes/authorization")(app);

  app.use("/api", api);

  // await prisma.body.create({
  //   data: {
  //     userID: "109393565192571700735",
  //   },
  // });
  //
  // await prisma.muscle.create({
  //   data: {
  //     name: MuscleID.PECTORALIS_MINOR,
  //     bodyID: "109393565192571700735",
  //     muscleGroup: MuscleGroup.CHEST,
  //     joints: [Joint.SHOULDER, Joint.NECK, Joint.SHOULDER_CENTER],
  //   },
  // });
  //
  // await prisma.muscle.create({
  //   data: {
  //     name: MuscleID.RHOMBOID_MINOR,
  //     bodyID: "109393565192571700735",
  //     muscleGroup: MuscleGroup.SCAPULA,
  //   },
  // });

  if (process.env.NODE_ENV === "production") {
    app.use(
      express.static(
        path.join(__dirname, "../", "../", "recovery-app", "build")
      )
    );
    app.get("*", (req, res) => {
      res.sendFile(
        path.join(
          __dirname,
          "../",
          "../",
          "recovery-app",
          "build",
          "index.html"
        )
      );
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import api from "../api/routes/api";

require("../api/services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("../config/keys");
const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

async function main() {
  // if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../", "../", "recovery-app", "build"))
  );

  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  require("../api/routes/authorization")(app);

  // app.use("/", api);

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../", "../", "recovery-app", "build", "index.html")
    );
  });
  // }

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

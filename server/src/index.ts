import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";

require("../api/services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");
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

  require("../api/routes/authorization")(app);

  console.log(process.env.NODE_ENV);
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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// }

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

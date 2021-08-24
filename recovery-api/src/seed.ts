import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import api from "../routes/api";

const prisma = new PrismaClient();
const port = process.env.PORT || 5000;
const app = express();

async function main() {
  // if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../", "../", "recovery-app", "build"))
  );

  app.use("/", api);

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

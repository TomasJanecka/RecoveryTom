import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const port = process.env.PORT || 5000;
const app = express();

async function main() {
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

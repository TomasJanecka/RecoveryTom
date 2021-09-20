import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const body: any = prisma.body.create({
  data: {
    userID: "",
    muscles: {},
  },
});

const serratusAnterior = prisma;

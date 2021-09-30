import { Prisma } from "@prisma/client";

const userWithMessages = Prisma.validator<Prisma.UserArgs>()({
  include: { messages: true },
});
export type UserWithMessages = Prisma.UserGetPayload<typeof userWithMessages>;

const userFavorites = Prisma.validator<Prisma.UserArgs>()({
  include: { favoriteFood: true, favoriteExercises: true },
});
export type UserFavorites = Prisma.UserGetPayload<typeof userFavorites>;

const usersProducts = Prisma.validator<Prisma.UserArgs>()({
  include: { products: true },
});
export type UsersProducts = Prisma.UserGetPayload<typeof usersProducts>;

const usersBody = Prisma.validator<Prisma.BodyArgs>()({
  include: { muscles: true },
});
export type UsersBody = Prisma.BodyGetPayload<typeof usersBody>;

import { PrismaClient } from "@prisma/client";

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../../config/keys");
const prisma = new PrismaClient();

passport.serializeUser((user: any, done: any) => {
  console.log("serialize", user);
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done: any) => {
  console.log("deserialize", id);
  const user = await prisma.user.findUnique({ where: { id: id } });
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      console.log(Number(profile.id));
      let user = await prisma.user.findUnique({
        where: { id: profile.id },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            id: profile._json.sub,
            name: profile._json.name,
            email: profile._json.email,
            picture: profile._json.picture,
            location: profile._json.location,
          },
        });
      }
      done(null, user);
    }
  )
);

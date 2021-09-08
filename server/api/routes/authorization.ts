import { Express, Request } from "express";

const passport = require("passport");

module.exports = (app: Express) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // app.get("/api/logout", (req: Request, res) => {
  //   req.logout();
  // });

  app.get("/api/current_user", (req: any, res) => {
    res.send(req.user);
  });
};

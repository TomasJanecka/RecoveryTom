const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../../config/keys");

passport.serializeUser((user: any, done: any) => {
  console.log("serialize", user);
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done: any) => {
  // const user = await User.findById(id);
  console.log("deserialize", id);
  done(null, { id });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken: any, refreshToken: any, profile: any, done: any) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      console.log("helo theeere");
      // let user = await User.findOne({ googleId: profile.id });
      // if (!user) {
      //   user = await new User({ googleId: profile.id }).save();
      // }
      done(null, { id: profile.id });
    }
  )
);

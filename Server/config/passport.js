const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../Model/UserSchema');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails, photos } = profile;
      try {
        let user = await User.findOne({ googleId: id });

        if (!user) {
          user = new User({
            googleId: id,
            Name: displayName,
            email: emails[0].value,
            profilePicture: photos[0].value,
            SignUpMethod: "google"
          });
          await user.save();
        }
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);


passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
      profileFields: ["id", "displayName", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user exists in the database using facebookId or email
        console.log("Facebook Profile:", profile);
        let user = await User.findOne({
          $or: [
            { facebookId: profile.id },
            { email: profile.emails?.[0]?.value },
          ],
        });

        if (!user) {
          // If user does not exist, create a new user
          user = new User({
            facebookId: profile.id,
            Name: profile.displayName || "Anonymous User",
            email: profile.emails?.[0]?.value || "no-email@domain.com",
          });
          await user.save();
        }

        // User exists or has been created, return user
        return done(null, user);
      } catch (err) {
        return done(err, null); // Pass any error to Passport
      }
    }
  )
);


module.exports = passport;

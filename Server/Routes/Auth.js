const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google Auth Routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/Dashboard"); // Redirect to React frontend
  }
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:3000");
  });
});

router.get("/user", (req, res) => {
  res.send(req.user);
});

// Facebook Auth Route

router.get(
  "/facebook",
  passport.authenticate("facebook", {scope:"email"})
)

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {failureRedirect:"/Login"}),
  (req,res) => {
    res.redirect("http://localhost:3000/Dashboard")
  }
)


module.exports = router;

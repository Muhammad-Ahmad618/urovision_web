const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session'); // Updated: Using express-session
const passport = require('./config/passport'); // Passport configuration
const cors = require('cors');
// Import routes
const RegistrationRoute = require('./Routes/RegisterRoute');
const SignInRoute = require('./routes/SignInRoute');
const AuthRoute = require('./Routes/Auth');

//Import OTP related Routes

const OtpGeneration = require('./Routes/GenerateOtp_Route')
const verifyOtp = require('./Routes/verifyOTP_Route')
const resetPassword = require('./Routes/resetPassword_Route')

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware for session handling
app.use(
  session({
    secret: "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", // Replace with a strong, unique secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to `true` if using HTTPS
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/urovision_web")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Define routes
app.use('/SignUp', RegistrationRoute);
app.use('/LogIn', SignInRoute);
app.use('/auth', AuthRoute);

//Define OTP related Routes

app.use('/otp-Generate',OtpGeneration)
app.use('/otp-verify', verifyOtp)
app.use('/password-reset', resetPassword)


// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));

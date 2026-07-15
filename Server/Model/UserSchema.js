const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    cnic: { type: String, validate: {
        validator: function (value) {
        
          return this.loginMethod === "manual" ? !!value : true;
        },
        message: "CNIC is required for manual sign-up.",
      }, },
       // Make optional or provide a default value
    Gender: { type: String,   validate: {
        validator: function (value) {
          // Only require gender for manual sign-ups
          return this.loginMethod === "manual" ? !!value : true;
        },
        message: "Gender is required for manual sign-up.",
      },
     },
    DateOfBirth: { type: Date, 
        validate: {
            validator: function (value) {
              // Only require DOB for manual sign-ups
              return this.loginMethod === "manual" ? !!value : true;
            },
            message: "Date of Birth is required for manual sign-up.",
          },
     },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Make this optional for Google users
    googleId: { type: String, unique: true, sparse: true, }, // Add Google-specific field
    facebookId: { type: String, unique: true, sparse:true},
    profilePicture: { type: String },
    otp: { type: Number },
});

module.exports = mongoose.model('User', UserSchema);

const express = require('express')
const router = express.Router()
const GenerateOtpController = require("../otp_handling/GenerateOTP_Controller")

router.post('/send-otp', GenerateOtpController.sendOTP)

module.exports = router;
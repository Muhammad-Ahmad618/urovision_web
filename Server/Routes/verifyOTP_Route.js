const express = require('express')
const router = express.Router()
const verify_OTP_Controller = require('../otp_handling/verifyOTP_Controller')

router.post('/verify-otp', verify_OTP_Controller.verifyOTP)

module.exports = router
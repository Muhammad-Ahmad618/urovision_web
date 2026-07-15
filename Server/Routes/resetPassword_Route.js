const express = require('express')
const router = express.Router()
const resetPassword_Controller = require('../otp_handling/resetPassword_Controller')

router.post('/reset-password', resetPassword_Controller.resetPassword)

module.exports = router;
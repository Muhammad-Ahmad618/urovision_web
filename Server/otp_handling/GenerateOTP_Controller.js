const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('../Model/UserSchema'); // Adjust path as necessary
require('dotenv').config()


const sendOTP =  async(req,res) => {

    const {email} = req.body;

    try{

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message: 'Account Does not Exist'})
        }

        const otp = crypto.randomInt(10000,99999);

        user.otp = otp
        user.otpExpiration = Date.now() + 10*60*1000
        await user.save()

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        })
     
        const mailOption = {
            from:process.env.EMAIL_USER,
            to:email,
            subject:"Your OTP for Password Reset",
            text:`Your OTP is ${otp}`,
        }

        transporter.sendMail(mailOption, (err, info) => {
            if(err){
                return res.status(500).json({message:'Error sending OTP to the Email Address',error:err})
            }
            res.status(200).json({success:true})
        })
    }
    catch(err){
      return res.status(500).json({message:'Server Error'})
    }
}

module.exports = {sendOTP};

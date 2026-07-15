const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../Model/UserSchema')
const jwt = require('jsonwebtoken')

router.post('/SignIn', async(req, res) => {

    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"Please enter both Email and Password"})
    }
    try{
      const user = await User.findOne({email})
      if(!user){
        return res.status(404).json({message:"User not Found"})
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)
      if(!isPasswordValid){
        return res.status(401).json({message:"Invalid Password"})
      }

      const token = jwt.sign({userId: user._id}, 'secretKey', {expiresIn:'1h'}) 

      res.status(200).json({message:"Login Successfull",
        token,
        user:{
            id:user._id,
            Name:user.Name,
            email:user.email,
        }
      });

    }
    catch(error){
        res.status(500).json({message:"Server Error"})
    }
})
module.exports = router;
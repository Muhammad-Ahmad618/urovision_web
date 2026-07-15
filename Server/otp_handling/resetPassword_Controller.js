const User = require('../Model/UserSchema')
const bcrypt = require('bcrypt')

const resetPassword = async(req,res) => {
      
    const {email, newPassword} = req.body;
     
    try{
        const user = User.findOne({email})

        if(!user){
            return res.status(404).json({message:'Account Does not Exist'})
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password
        user.password = hashedPassword;
        user.otp = null;  // Clear OTP after successful password reset
        user.otpExpiration = null;  // Clear OTP expiration
        await user.save()

        res.status(200).json({success:true, message:'Password Reset Successfully'})
    }
    catch(error){
        return res.status(500).json({message:"Server Error", error:error})
    }
}

module.exports = {resetPassword}
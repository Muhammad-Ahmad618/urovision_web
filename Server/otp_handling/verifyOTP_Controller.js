const User = require('../Model/UserSchema')

const verifyOTP =  async(req,res) => {

    const {email, otp} = req.body;

    try{

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({message:"Account does not Exist"})
        }

        if(user.otp !== otp){
            return res.status(400).json({message:"Invalid OTP"})
        }
        if(user.otpExpiration < Date.now()){
            return res.status(400).json({message:'OTP has Expired'})
        }
         
        res.status(200).json({success:true, message:"OTP verified successfully"})
    }
    catch(error){
        return res.status(500).json({message:"Server Error"})
    }S
}

module.exports = {verifyOTP}
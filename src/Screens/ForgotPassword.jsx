import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/UroVision Logo.png";
import { IoArrowBackCircle } from "react-icons/io5";
import Button1 from "../Components/Button1";

export default function ForgotPassword({
  heading,
  description,
  image,
  buttonLabel,
}) {
  const navigator = useNavigate();
  const [otp, setOtp] = useState(Array(5).fill(" "));
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input field if the current field has a value
    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input field if backspace is pressed and the current field is empty
    if (e.key === "Backspace" && !e.target.value && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleSendOtp = async(e) => {
    e.preventDefault()

    if(!email) {
      setMessage("Please enter a valid Email Address")
    }

    try{
      const response = await fetch("http://localhost:5000/otp-Generate/send-otp", {

        method:'POST',
        headers: {
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email}),
      })
      
      const data = await response.json()
       
      if(data.success){
        setMessage("OTP send Successfully")
      }
      else{
        setMessage(data.message || "Failed to Send OTP")
      }
    }
    catch(error){
       setMessage("An Error occured while sending OTP")
    }

  }

  const handleSubmitOtp = async(e) =>{
    e.preventDefault()

    const enteredOTP = otp.join("")
    if(enteredOTP.lenght < 5){
      setMessage("Please enter All otp Digits")
      return;
    }

    try{
      
      const response = await fetch("http://localhost:5000/otp-verify/verify-otp",{
        method:"POST",
        header:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, otp: enteredOTP})
      })

      const data = await response.json()
      if(data.success){
        setMessage("OTP verified Successfully")
      }
      else{
        setMessage(data.message || "Failed to verify OTP")
      }
    }
    catch(err){
      setMessage("Error Occured While Verifying OTP")
    }

  }

  const handleBackButton = () => {
    navigator(-1);
  };

  return (
    <div className=" flex items-baseline sm:items-center font-poppins py-4 px-2 md:px-8 lg:px-20 xl:px-28 2xl:px-32 bg-[#ededfc] min-h-screen">
      <div className="flex relative h-[95vh] sm:h-[35rem] justify-center gap-y-10 w-[95%] sm:w-[90%] m-auto rounded-xl shadow-sm shadow-gray-500 bg-white ">
      <div className="absolute top-5 left-4 md:left-8">
            <IoArrowBackCircle
              className="text-gray-300 text-[2rem] hover:text-blue-600 cursor-pointer"
              onClick={handleBackButton}
            />
          </div>

        <div className="hidden sm:flex flex-grow flex-1 items-center justify-center rounded-l-xl">
          <img src={image} alt="Fp_vector" className="max-w-[26rem] w-full" />
        </div>

        <div className="flex flex-col justify-start sm:justify-center gap-y-5 flex-1 px-3 sm:px-5 py-14 rounded-r-xl">
          <div className="flex justify-center sm:justify-start">
            <img src={logo} alt="UroVision" className="max-w-[7rem] lg:max-w-[9rem]" />
          </div>

          <div className="space-y-2 max-w-[100%] w-full">
            <h1 className="text-[1.4rem] lg:text-[1.6rem] font-bold">{heading}</h1>
            <p className="text-gray-400 text-[0.7rem] lg:text-[0.85rem]">{description}</p>
           
            {heading === "Enter OTP" ? (
              <div className="space-y-8 max-w-[30rem] m-auto sm:m-0">
                <div className="flex justify-evenly sm:justify-between gap-x-2 pt-5">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={value}
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onFocus={(e) => e.target.select()}
                      className="w-10 h-10 border rounded-md border-gray-300 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
                </div>
                <div className="sm:hidden flex justify-center items-center">
            <img src={image} alt="Fp_vector" className="max-w-[14rem] min-[460px]:max-w-[18rem] w-full" />
           </div>
                <div className="text-start">
                <Button1
                  label={buttonLabel}
                  width="max-w-[30rem]"
                  click={handleSubmitOtp}
                  height="h-[2.7rem]"
                />
                </div>
              </div>
            ) : (
              <div className="space-y-8 w-full">
              <div className="sm:hidden flex justify-center items-center">
              <img src={image} alt="Fp_vector" className="max-w-[14rem] min-[460px]:max-w-[18rem] w-full" />
              </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 px-2 p-3 sm:max-w-[30rem] w-full rounded-md lg:rounded-lg text-xs lg:text-[0.85rem]"
                  placeholder="Enter Email"
                  required
                />
                <Button1
                  label={buttonLabel}
                  width="max-w-[30rem]"
                  click={handleSendOtp}
                  height="h-[2.7rem]"
                />
              </div>
            )}
             {message && <p className="text-red-500">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

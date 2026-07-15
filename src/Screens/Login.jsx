import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/UroVision Logo.png";
import healthCareVector from "../Assets/vector1.png";
import Button1 from "../Components/Button1";
import { FaFacebook } from "react-icons/fa6";
import { BiError } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import PasswordField from "../Components/PasswordField";
import LoadingScreen from "../Components/LoadingScreen";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [rememberMe, setRemeberMe] = useState(false)

  const navigate = useNavigate();

  useEffect(()=>{

    const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
    if(token){
      navigate("/DashBoard")
    }

  },[navigate])

  const handleLogin = async (e) => {
    e.preventDefault();
     setLoading(true)
    try {
      const response = await axios.post("http://localhost:5000/LogIn/SignIn", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login Successfull:", response.data);
        const token = response.data.token

        if(rememberMe){
          localStorage.setItem("authToken", token)
        }
        else{
          sessionStorage.setItem("authToken",token)
        }
        
        setTimeout(() => {
            setLoading(false)
            navigate("/DashBoard");
        }, 3000);
      }
    } catch (error) {
      if (error.response.status === 400  || error.response.status === 401 || error.response.status === 404) {
        setTimeout(() => {
            setError(error.response.data.message);
            setLoading(false)
        }, 2000);
      } 
      else {
        setTimeout(() => {
            setError(error.response.data.message);
            setLoading(false)
        }, 2000);
      }
    }
  };

    const handleGoogleLogin = (e) => {
       e.preventDefault() //  To prevent default behavior like form submission (incomplete field etc)

      // Redirect to your backend's Google OAuth2 login route
      window.location.href = "http://localhost:5000/auth/google";
    };

    const handleFacebookLogin = (e) => {
      e.preventDefault()
      window.location.href = "http://localhost:5000/auth/facebook"

    }

  return (
    <div className="flex items-center justify-center px-2 sm:20px md:px-0 lg:px-22 xl:px-36 bg-[#ededfc] min-h-screen font-poppins">
      <LoadingScreen loading={loading}  />
      <div className="flex justify-center w-[95%] sm:h-auto sm:w-[75%] rounded-xl shadow-sm shadow-gray-500 bg-white">
        <div className="hidden flex-1 flex-grow w-full md:flex justify-center items-center bg-gradient-to-b from-[#0d4fa9] to-[#52a9f6] rounded-l-xl ">
          <img
            src={healthCareVector}
            alt="healthcare"
            className="max-w-[27rem] w-full"
          />
        </div>

        <div className="flex flex-col flex-1 flex-grow w-full max-w-[100%] md:max-w-[50%] px-3 min-[420px]:px-10 md:px-4 lg:px-7 xl:px-10 rounded-r-xl">
          <div className="flex justify-center sm:justify-start">
            <img
              src={logo}
              alt="UroVision"
              className="max-w-[7rem] xl:max-w-[9rem] my-5 2xl:my-2"
            />
          </div>

          <div className="space-y-2">
            <div className="text-center sm:text-start">
              <h1 className="text-[1.5rem] font-semibold">Welcome Back !</h1>
              <p className="text-gray-400 text-[0.8rem]">
                Login to access your account
              </p>
            </div>
            <form className="py-5">
              <div>
                <label htmlFor="email" className="font-medium text-[0.8rem]">
                  Email <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="py-3">
                <label htmlFor="password" className="font-medium text-[0.8rem]">
                  Password <span className="text-red-500">*</span>
                </label>
                <br />
                <PasswordField
                  name="password"
                  width="max-w-[30rem]"
                  position="right-3"
                  change={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between my-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember_me"
                    className="w-[0.8rem] h-[0.8rem] lg:w-[1.1rem] lg:h-[1.1rem]"
                    checked={rememberMe}
                    onChange={() => setRemeberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="remember_me"
                    className="font-medium pl-1 lg:pl-3 text-xs"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/ForgotPassword"
                  className="text-blue-600 text-xs hover:underline hover:text-blue-700"
                >
                  Forgot Password ?
                </Link>
              </div>

              <div
                className={`w-full bg-red-300 rounded-lg text-red-600 gap-x-3 items-center p-2 ${
                  Error ? "flex" : "hidden"
                }`}
              >
                <BiError className="text-[1.5rem]" />
                <p className="text-sm font-medium">{Error}</p>
              </div>

              <div className="py-5">
                <Button1
                  label="Sign In"
                  click={handleLogin}
                  height="h-[2.7rem]"
                />
              </div>

              <p className=" text-gray-500 text-xs xl:text-[0.8rem]">
                Don't Have an Account ?{" "}
                <Link
                  to="/SignUp"
                  className="text-blue-600 font-medium hover:underline"
                >
                  {" "}
                  Register{" "}
                </Link>
                Here
              </p>
              <br />
              <div className="flex justify-center items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-400 text-sm font-medium">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="flex justify-evenly gap-x-4 py-5">
              
                <button className="py-2 px-5 flex items-center text-sm font-medium border border-gray-300 gap-x-2 rounded-full hover:bg-gray-100"
                onClick={handleGoogleLogin}
                >
                  <FcGoogle className="text-[1.5rem]" />
                  Google
                </button>

                <button className="py-2  px-3 flex items-center text-sm font-medium border border-gray-300 gap-x-2 rounded-full hover:bg-gray-100"
                 onClick={handleFacebookLogin}>
                  <FaFacebook className="text-[1.5rem] text-blue-700"/>
                  Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

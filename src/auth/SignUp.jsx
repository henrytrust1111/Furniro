import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogo = () => {
    navigate("/");
  };
  const handleClick = (val) => {
    if(val === 'logo'){
      navigate("/");
    }else if(val === 'login'){
      navigate("/login");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
      <div className="flex w-full h-full overflow-hidden md:flex-row ">
        <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center ">
          <div className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:!hidden cursor-pointer" onClick={()=>handleClick("logo")}>
            <img src={logo} className="Logo" alt="logo" />
            <h2>Furniro</h2>
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Get Started with Furniro
          </h2>
          <p className="text-gray-600 mb-8 text-center">Sign in to continue.</p>
          <form className="space-y-1 w-full px-1 sm:!px-6 md:!px-10 lg:!px-20 flex flex-col justify-center items-center">
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                
                <input
                  type="text"
                  id="firstName"
                  className="h-9 outline-none border focus:-ring--clr-primary focus:-border--clr-primary block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                
                <input
                  type="text"
                  id="lastName"
                  className="h-9 outline-none border focus:-ring--clr-primary focus:-border--clr-primary block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="h-9 outline-none border focus:-ring--clr-primary focus:-border--clr-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="w-full flex justify-center !mb-2">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="h-9  outline-none border focus:-ring--clr-primary focus:-border--clr-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center !mb-2">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="h-9  outline-none border focus:-ring--clr-primary focus:-border--clr-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Confirm your password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white !bg-[#14192D] hover:!bg-white hover:!text-black  transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
              >
                Login
              </button>
            </div>
            <div className="text-center text-sm">
              Already have an account yet?{" "}
              <div
                href="/#/login"
                className="font-medium text-[#EF6911] hover:text-[#EF6911] hover:underline cursor-pointer"
                onClick={()=>handleClick("login")}
              >
                Login
              </div>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 lg:flex flex-col items-center justify-center p-8 md:block hidden -bg--clr-primar-light -text--clr-secondary">
          <div className="mb-8">
            <div
              className="flex items-center text-2xl space-x-2 font-bold w-max ml-6 h-full cursor-pointer"
              onClick={()=>handleClick("logo")}
            >
              <img src={logo} className="Logo" alt="logo" />
              <h2>Furniro</h2>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-center">
            Welcome to Furniro
          </h1>
          <p className="mb-4 text-2xl">
            Effortless Attendance, Enhanced Integrity
          </p>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae eum ipsum ipsa nesciunt blanditiis odit, aspernatur
            nobis, nostrum illum dolorem dolore? Hic reiciendis ipsa eligendi
            error, maxime numquam ratione repudiandae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

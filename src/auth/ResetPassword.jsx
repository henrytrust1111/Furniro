import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (val) => {
    if(val === 'logo'){
      navigate("/");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle the password reset logic here
    if (newPassword === confirmPassword) {
      console.log("Passwords match. Resetting password...");
      // Add password reset logic
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
      <div className="flex w-full h-full overflow-hidden md:flex-row ">
        <div className="w-full md:w-1/2 lg:flex flex-col items-center justify-center p-8 md:block hidden bg-[#14192D] text-white">
          <div className="mb-8">
            <div
              className="flex items-center text-2xl space-x-2 font-bold w-max ml-6 h-full cursor-pointer"
              onClick={() => handleClick("logo")}
            >
              <img src={logo} className="Logo" alt="logo" />
              <h2>Furniro</h2>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-center">
            Reset Your Password
          </h1>
          <p className="mb-4 text-2xl">
            Ensure your new password is secure
          </p>
        </div>
        <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center ">
          <div className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:!hidden cursor-pointer" onClick={() => handleClick("logo")}>
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Create a New Password
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Enter and confirm your new password.
          </p>
          <form onSubmit={handleResetPassword} className="space-y-1 w-full px-1 sm:!px-6 md:!px-10 lg:!px-20 flex flex-col justify-center items-center">
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-9 outline-none border focus:ring-clr-primary focus:border-clr-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="New Password"
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
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-9 outline-none border focus:ring-clr-primary focus:border-clr-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Confirm Password"
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
                className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:shadow-custom1 bg-[#14192D] hover:bg-white hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
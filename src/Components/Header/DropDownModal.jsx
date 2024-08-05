import React from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DropDownModal = ({ dropdownRef, handleMouseDown }) => {
  const navigate = useNavigate();

  const handleClick = (val)=>{
    if(val === "login"){
      navigate("/login")
    }else if (val=== "signup"){
      navigate("signup")
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-5 w-64 bg-white border rounded-lg shadow-lg p-4 z-[99]"
      onMouseDown={handleMouseDown}
      style={{ cursor: "move" }}
    >
      <p className="text-gray-600">Welcome to Funiro!</p>
      <div
        onClick={()=>handleClick("login")}
        className="-bg--clr-primary text-white py-2 px-4 rounded-md w-full my-2 text-center wow animate__animatedanimated animate__fadeIn cursor-pointer"
      >
        Sign In
      </div>
      <div
        onClick={()=>handleClick("signup")}
        className="-text--clr-primary border -border--clr-primary py-2 px-4 rounded-md w-full my-2 text-center wow animate__animatedanimated animate__fadeIn cursor-pointer"
      >
        Sign Up
      </div>
      <p className="text-center my-2 text-gray-600">Continue with:</p>

      <div className="flex justify-center space-x-4 my-2">
        <a href="https://asianpacificexpress-api.onrender.com/googlelogin">
          <FaGoogle className="cursor-pointer text-xl text-gray-700" />
        </a>
        <FaTwitter className="cursor-pointer text-xl text-gray-700" />
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        By signing in via social media, I agree to the Furniro
        Free Membership Agreement and Privacy Policy, and to receive emails
        about the platform’s products and services.
      </p>
    </div>
  );
};

export default DropDownModal;

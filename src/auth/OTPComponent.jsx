import React, { useState } from "react";
import logo from "/icons/logo.svg";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OTPComponent = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if the value is entered
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Process OTP
    console.log("Entered OTP:", otp.join(""));
    // Redirect to another page if OTP is verified
    navigate("/dashboard");
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
      <div className="flex w-full h-full overflow-hidden md:flex-row">
        <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center">
          <div
            className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:!hidden cursor-pointer"
            onClick={handleLogo}
          >
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Verify Your Identity
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Enter the 4-digit code sent to your email.
          </p>
          <form
            className="space-y-1 w-full px-1 sm:!px-6 md:!px-10 lg:!px-20 flex flex-col justify-center items-center"
            onSubmit={handleOtpSubmit}
          >
            <div className="flex justify-center space-x-3 mb-4">
              {otp.map((digit, index) => (
                <div
                  key={index}
                  className="w-12 h-12 border rounded-md shadow-sm"
                >
                  <input
                    id={`otp-input-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) =>
                      handleOtpChange(index, e.target.value)
                    }
                    maxLength="1"
                    className="w-full h-full text-center outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block sm:text-lg border-gray-300 rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white !bg-[#14192D] hover:!bg-white hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
              >
                Verify OTP
              </button>
            </div>
            <div className="text-center text-sm">
              Didn't receive the code?{" "}
              <span className="font-medium text-[#EF6911] hover:underline cursor-pointer">
                Resend OTP
              </span>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 lg:flex flex-col items-center justify-center p-8 md:block hidden -bg--clr-primar-light -text--clr-secondary">
          <div className="mb-8">
            <div
              className="flex items-center text-2xl space-x-2 font-bold w-max ml-6 h-full cursor-pointer"
              onClick={handleLogo}
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

export default OTPComponent;

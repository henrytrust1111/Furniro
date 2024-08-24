import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone } from "react-icons/fa";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import { BiLoaderCircle } from "react-icons/bi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPModal from "./OTPModal";
import PopupModal from "./PopupModal"; // Import the PopupModal component

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // State for the popup message
  const [showPopupModal, setShowPopupModal] = useState(false); // State for showing the popup modal
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (val) => {
    if (val === "logo") {
      navigate("/");
    } else if (val === "login") {
      navigate("/login");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword
    ) {
      toast.error("All fields are required!");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://funiro-furnitures.onrender.com/sign-up",
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          confirmPassword,
        }
      );

      const { message, data, token } = response.data;

      // Save necessary data to localStorage
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("email", data.email);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("token", token);

      toast.success(message);
      setPopupMessage(message); // Set the message from the backend
      setShowPopupModal(true); // Show the popup modal
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "An error occurred!");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopupModal = () => {
    setShowPopupModal(false);
    setShowOTPModal(true); // Show OTP modal after closing the popup modal
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
    navigate("/otp");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
      <div className="flex w-full h-full overflow-hidden md:flex-row">
        <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center">
          <div
            className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:!hidden cursor-pointer"
            onClick={() => handleClick("logo")}
          >
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Get Started with Furniro
          </h2>
          <p className="text-gray-600 mb-8 text-center">Sign up to continue.</p>
          <form
            className="space-y-1 w-full px-1 sm:!px-6 md:!px-10 lg:!px-20 flex flex-col justify-center items-center"
            onSubmit={handleSignUp}
          >
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <input
                  type="text"
                  id="firstName"
                  className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <input
                  type="text"
                  id="lastName"
                  className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
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
                  className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400" />
                </div>
                <input
                  type="number"
                  id="phoneNumber"
                  className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Phone Number"
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
                  className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your password"
                  autoComplete="new-password"
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
                  id="confirmPassword"
                  className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
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
            <button
              type="submit"
              className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white !bg-[#14192D] hover:!shadow-custom1 hover:!bg-white hover:!text-black transition-all duration-500 ease-in-out"
            >
              {loading ? (
                <BiLoaderCircle className="mr-2 animate-spin" size={22} />
              ) : (
                "Sign up"
              )}
            </button>
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <span
                  className="text-[#EF6911] cursor-pointer text-base"
                  onClick={() => handleClick("login")}
                >
                  Log in
                </span>
              </p>
            </div>
          </form>
        </div>
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
            Welcome to Furniro
          </h1>
          <p className="mb-4 text-lg">
            Your journey to a beautifully furnished home begins here.
          </p>
          <p className="text-sm text-center italic">
            Discover a world of stylish furniture and home accessories that fit
            your space and taste. Enjoy seamless shopping with secure checkout
            and fast delivery.
          </p>
        </div>
      </div>
      {showOTPModal && <OTPModal onClose={handleCloseOTPModal} />}
      {showPopupModal && (
        <PopupModal message={popupMessage} onClose={handleClosePopupModal} />
      )}
      <ToastContainer />
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import logo from "/icons/logo.svg";
// import { useNavigate } from "react-router-dom";
// import OTPModal from "./OTPModal";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleClick = (val) => {
//     if (val === "logo") {
//       navigate("/");
//     } else if (val === "login") {
//       navigate("/login");
//     }
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     navigate("/otp");
//   };

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
//       <div className="flex w-full h-full overflow-hidden md:flex-row ">
//         <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center ">
//           <div
//             className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:!hidden cursor-pointer"
//             onClick={() => handleClick("logo")}
//           >
//             <img src={logo} className="Logo" alt="logo" />
//           </div>
//           <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
//             Get Started with Furniro
//           </h2>
//           <p className="text-gray-600 mb-8 text-center">Sign in to continue.</p>
//           <form
//             className="space-y-1 w-full px-1 sm:!px-6 md:!px-10 lg:!px-20 flex flex-col justify-center items-center"
//             onSubmit={handleSignUp} // Handle form submission
//           >
//             {/* Input Fields */}
//             <div className="w-full flex justify-center mb-4">
//               <div className="mt-1 relative rounded-md shadow-sm w-full">
//                 <input
//                   type="text"
//                   id="firstName"
//                   className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
//                   placeholder="First Name"
//                 />
//               </div>
//             </div>
//             <div className="w-full flex justify-center mb-4">
//               <div className="mt-1 relative rounded-md shadow-sm w-full">
//                 <input
//                   type="text"
//                   id="lastName"
//                   className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
//                   placeholder="Last Name"
//                 />
//               </div>
//             </div>
//             <div className="w-full flex justify-center mb-4">
//               <div className="mt-1 relative rounded-md shadow-sm w-full">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//                   placeholder="Email"
//                 />
//               </div>
//             </div>
//             <div className="w-full flex justify-center !mb-2">
//               <div className="mt-1 relative rounded-md shadow-sm w-full">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="text-gray-400" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   className="h-9  outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
//                   placeholder="Enter your password"
//                 />
//                 <div
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="text-gray-400" />
//                   ) : (
//                     <FaEye className="text-gray-400" />
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="w-full flex justify-center !mb-2">
//               <div className="mt-1 relative rounded-md shadow-sm w-full">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="text-gray-400" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="confirmPassword"
//                   className="h-9  outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
//                   placeholder="Confirm your password"
//                 />
//                 <div
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="text-gray-400" />
//                   ) : (
//                     <FaEye className="text-gray-400" />
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="w-full">
//               <button
//                 type="submit"
//                 className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white !bg-[#14192D] hover:!shadow-custom1 hover:!bg-white hover:!text-black  transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
//               >
//                 Sign up
//               </button>
//             </div>
//             <div className="text-center text-sm">
//               Already have an account yet?{" "}
//               <span
//                 href="/#/login"
//                 className="font-medium text-[#EF6911] hover:underline cursor-pointer text-base"
//                 onClick={() => handleClick("login")}
//               >
//                 Login
//               </span>
//             </div>
//           </form>
//         </div>
//         <div className="w-full md:w-1/2 lg:flex flex-col items-center justify-center p-8 md:block hidden bg-[#14192D] text-white">
//           <div className="mb-8">
//             <div
//               className="flex items-center text-2xl space-x-2 font-bold w-max ml-6 h-full cursor-pointer"
//               onClick={() => handleClick("logo")}
//             >
//               <img src={logo} className="Logo" alt="logo" />
//               <h2>Furniro</h2>
//             </div>
//           </div>
//           <h1 className="text-4xl font-bold mb-2 text-center">
//             Welcome to Furniro
//           </h1>
//           <p className="mb-4 text-2xl">
//             Effortless Attendance, Enhanced Integrity
//           </p>
//           <p className="text-sm text-center">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             Repudiandae eum ipsum ipsa nesciunt blanditiis odit, aspernatur
//             nobis, nostrum illum dolorem dolore? Hic reiciendis ipsa eligendi
//             error, maxime numquam ratione repudiandae!
//           </p>
//         </div>
//       </div>

//       {/* OTP Modal */}
//       <OTPModal showModal={showModal} handleClose={handleCloseModal} />
//     </div>
//   );
// };

// export default SignUp;

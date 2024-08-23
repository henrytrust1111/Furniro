import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLinkVisible, setResendLinkVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
  };

  const handleClick = (val) => {
    if (val === "logo") {
      navigate("/");
    } else if (val === "login") {
      navigate("/login");
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://funiro-furnitures.onrender.com/forgot", {
        email,
      });

      if (response.status === 200) {
        toast.success("Check your email to reset your password");
        setResendLinkVisible(true); // Show the resend link
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("This Email does not exist");
        } else if (error.response.status === 500) {
          toast.error("An error occurred. Please try again later.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } else {
        toast.error("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://funiro-furnitures.onrender.com/forgot", {
        email,
      });

      if (response.status === 200) {
        toast.success("Email resent successfully");
      }
    } catch (error) {
      toast.error("Failed to resend the email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
      <ToastContainer />
      <div className="flex w-full h-full overflow-hidden md:flex-row">
        <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center">
          <div
            className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:hidden cursor-pointer"
            onClick={() => handleClick("logo")}
          >
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Reset Your Password
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Please enter your email to reset your password.
          </p>
          <form
            className="space-y-4 w-full px-1 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex justify-center mb-4">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#14192D] hover:!shadow-custom1 hover:bg-white hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
              disabled={loading}
            >
              {loading ? (
                <BiLoaderCircle className="mr-2 animate-spin" size={22} />
              ) : (
                "Send Reset Link"
              )}
            </button>
            {resendLinkVisible && (
              <div className="text-center text-sm mt-4">
                Didn't get the email? {" "}
                <span
                  className="font-medium text-[#EF6911] hover:underline cursor-pointer"
                  onClick={handleResendEmail}
                >
                  Resend Email
                </span>
              </div>
            )}
            <div className="text-center text-sm mt-2">
              Remember your password? {" "}
              <span
                className="font-medium text-[#EF6911] hover:underline cursor-pointer text-sm"
                onClick={() => handleClick("login")}
              >
                Login
              </span>
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

export default ForgetPassword;


























// import React, { useState } from "react";
// import { FaEnvelope } from "react-icons/fa";
// import { BiLoaderCircle } from "react-icons/bi";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import logo from "/icons/logo.svg";
// import { useNavigate } from "react-router-dom";

// const ForgetPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogo = () => {
//     navigate("/");
//   };

//   const handleClick = (val) => {
//     if (val === "logo") {
//       navigate("/");
//     } else if (val === "login") {
//       navigate("/login");
//     }
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post("https://funiro-furnitures.onrender.com/forgot", {
//         email,
//       });

//       if (response.status === 200) {
//         toast.success("Check your email to reset your password");
//       }
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 404) {
//           toast.error("This Email does not exist");
//         } else if (error.response.status === 500) {
//           toast.error("An error occurred. Please try again later.");
//         } else {
//           toast.error("Something went wrong. Please try again.");
//         }
//       } else {
//         toast.error("Unable to connect to the server.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
//       <ToastContainer />
//       <div className="flex w-full h-full overflow-hidden md:flex-row">
//         <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center">
//           <div
//             className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:hidden cursor-pointer"
//             onClick={() => handleClick("logo")}
//           >
//             <img src={logo} className="Logo" alt="logo" />
//           </div>
//           <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
//             Reset Your Password
//           </h2>
//           <p className="text-gray-600 mb-8 text-center">
//             Please enter your email to reset your password.
//           </p>
//           <form
//             className="space-y-4 w-full px-1 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center items-center"
//             onSubmit={handleSubmit}
//           >
//             <div className="w-full flex justify-center mb-4">
//               <div className="mt-1 relative rounded-md shadow-sm w-full">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="h-9 outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//                   placeholder="Email"
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full mt-6 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#14192D] hover:!shadow-custom1 hover:bg-white hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
//               disabled={loading}
//             >
//               {loading ? (
//                 <BiLoaderCircle className="mr-2 animate-spin" size={22} />
//               ) : (
//                 "Send Reset Link"
//               )}
//             </button>
//             <div className="text-center text-sm">
//               Remember your password? {" "}
//               <span
//                 className="font-medium text-[#EF6911] hover:underline cursor-pointer text-sm"
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
//     </div>
//   );
// };

// export default ForgetPassword;




























// import React, { useState } from "react";
// import { FaEnvelope } from "react-icons/fa";
// import logo from "/icons/logo.svg";
// import { useNavigate } from "react-router-dom";

// const ForgetPassword = () => {
//   const navigate = useNavigate();

//   const handleLogo = () => {
//     navigate("/");
//   };

//   const handleClick = (val) => {
//     if (val === "logo") {
//       navigate("/");
//     } else if (val === "login") {
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
//       <div className="flex w-full h-full overflow-hidden md:flex-row ">
//         <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center ">
//           <div
//             className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:hidden cursor-pointer"
//             onClick={() => handleClick("logo")}
//           >
//             <img src={logo} className="Logo" alt="logo" />
//           </div>
//           <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
//             Reset Your Password
//           </h2>
//           <p className="text-gray-600 mb-8 text-center">
//             Please enter your email to reset your password.
//           </p>
//           <form className="space-y-4 w-full px-1 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center items-center">
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
//             <button
//               type="submit"
//               className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#14192D] hover:!shadow-custom1 hover:bg-white hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
//             >
//               Send Reset Link
//             </button>
//             <div className="text-center text-sm">
//               Remember your password?
//               <span
//                 href="/#/login"
//                 className="font-medium text-[#EF6911] hover:underline cursor-pointer"
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
//     </div>
//   );
// };

// export default ForgetPassword;

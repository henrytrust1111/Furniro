import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiLoaderCircle } from "react-icons/bi";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (val) => {
    if (val === "logo") {
      navigate("/");
    } else if (val === "signup") {
      navigate("/signup");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validation
    if (!email || !password) {
      toast.error("Please fill in all fields!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://funiro-furnitures.onrender.com/login",
        { email, password }
      );  

      const { message, data } = response.data;

      // Save necessary data to localStorage  
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("userId", data._id)

      toast.success(message);
      
      setTimeout(() => {
      navigate("/");
      }, 3000);
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
            Welcome to Furniro
          </h1>
          <p className="mb-4 text-2xl">Log in to continue shopping.</p>
        </div>
        <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center ">
          <div
            className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:!hidden cursor-pointer"
            onClick={() => handleClick("logo")}
          >
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Welcome Back to Furniro
          </h2>
          <p className="text-gray-600 mb-8 text-center">Log in to continue.</p>
          <form
            className="space-y-1 w-full px-1 sm:!px-6 md:!px-10 lg:!px-20 flex flex-col justify-center items-center"
            onSubmit={handleLogin}
          >
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
            <div className="w-full flex justify-center !mb-2">
              <div className="mt-1 relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="h-9  outline-none border focus:ring-2 focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your password"
                  autoComplete="password"
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
            <div className="flex items-center justify-between w-full">
              <div className="text-sm">
                <Link
                  to="/forget-password"
                  className="font-medium text-[#EF6911] hover:text-[#EF6911]"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:!shadow-custom1 !bg-[#14192D] hover:!bg-white hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {loading ? (
                  <div className="flex itce justify-center">
                  <img src={logo} className="mr-2 animate-spin w-5"  /> <span className="-text--clr-primary font-semibold text-base">Loading...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className="text-center text-sm">
              Don't have an account yet?{" "}
              <div
                className="font-medium text-[#EF6911] hover:text-[#EF6911] cursor-pointer hover:underline"
                onClick={() => handleClick("signup")}
              >
                Sign up
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;







































// import React, { useState } from "react";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import logo from "/icons/logo.svg";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleClick = (val) => {
//     if(val === 'logo'){
//       navigate("/");
//     }else if(val === 'signup'){
//       navigate("/signup");
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-[#efefef]">
//       <div className="flex w-full h-full overflow-hidden md:flex-row ">
//         <div className="w-full md:w-1/2 lg:flex flex-col items-center justify-center p-8 md:block hidden bg-[#14192D] text-white">
//           <div className="mb-8">
//             <div
//               className="flex items-center text-2xl space-x-2 font-bold w-max ml-6 h-full cursor-pointer"
//               onClick={()=>handleClick("logo")}
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
//         <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center ">
//           <div className="flex visible items-center text-2xl space-x-2 font-bold w-max mb-4 md:!hidden cursor-pointer" onClick={()=>handleClick("logo")}>
//             <img src={logo} className="Logo" alt="logo" />
//           </div>
//           <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
//             Welcome Back to Furniro
//           </h2>
//           <p className="text-gray-600 mb-8 text-center">Log in to continue.</p>
//           <form className="space-y-1 w-full px-1 sm:!px-6 md:!px-10 lg:!px-20 flex flex-col justify-center items-center">
//             <div className="w-full flex justify-center mb-4">
//               <div className="mt-1 relative rounded-md shadow-sm w-full">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   className="h-9 outline-none border focus:-ring--clr-primary focus:-border--clr-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
//                   className="h-9  outline-none border focus:-ring--clr-primary focus:-border--clr-primary block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
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
//             <div className="flex items-center justify-between w-full">
//               <div className="text-sm ">
//                 <Link
//                   to="/forget-password"
//                   className="font-medium text-[#EF6911] hover:text-[#EF6911]"
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>
//             </div>
//             <div className="w-full">
//               <button
//                 type="submit"
//                 className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:!shadow-custom1 !bg-[#14192D] hover:!bg-white hover:!text-black  transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
//               >
//                 Login
//               </button>
//             </div>
//             <div className="text-center text-sm">
//               Don't have an account yet?{" "} 
//               <div
//                 // href="/signup"
//                 className="font-medium text-[#EF6911] hover:text-[#EF6911] cursor-pointer hover:underline"
//                 onClick={()=>handleClick("signup")}
//               >
//                 Sign up
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

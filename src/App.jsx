import Routers from "./Router/Routers";
import "./assets/css/animate.min.css";
// import '../public/assets/css/tailwind-built.css'
import "./assets/css/tailwind-built.css";
import "swiper/css";
import "./App.css";
import { useEffect, useState } from "react";
import logo from "/icons/logo.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center  w-screen h-screen bg-white absolute z-[9999]">
          <div className="flex space-x-2 font-bold text-2xl cursor-pointer animate-fadeInOut">
            <img src={logo} className="Logo" alt="logo" />
            <h2>Furniro</h2>
          </div>
        </div>
      ) : (
        <>
          <ToastContainer />
          <Routers />
        </>
      )}
    </>
  );
}

export default App;

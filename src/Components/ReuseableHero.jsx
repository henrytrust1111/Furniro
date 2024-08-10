import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "/icons/logo.svg";
import { PiCaretRightBold } from "react-icons/pi";
import blogHero from "/images/blog.png";

const ReuseableHero = ({page, page1}) => {
    const nav = useNavigate();
    const handleHome = () => {
      nav("/");
    };
  return (
    <div className="relative w-screen max-[700px]:h-[40vh] max-[400px]:h-[28vh] mt-[53px] font-[poppins]">
    <img src={blogHero} className="w-full max-[700px]:h-full" alt="" onClick={handleHome} />
    <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center cursor-pointer md:gap-1 lg:gap-3">
      <img src={logo} alt="" className="w-8 md:!w-14" />
      <p className="font-medium text-2xl lg:text-5xl">{page}</p>
      <div className="flex items-center -text--clr-secondary">
        <span
          className="text-black font-[poppins] font-medium text-sm md:text-base"
          onClick={handleHome}
        >
          Home{" "}
        </span>{" "}
        <span className="text-black text-sm md:text-base">
          <PiCaretRightBold />
        </span>
        <span className="text-black font-[poppins] font-light text-sm md:text-base">
          {page1}
        </span>
      </div>
    </div>
  </div>
  )
}

export default ReuseableHero
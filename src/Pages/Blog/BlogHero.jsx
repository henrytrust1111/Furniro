import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "/icons/logo.svg";
import { PiCaretRightBold } from "react-icons/pi";
import blogHero from "/images/blog.png";

const BlogHero = () => {
    const nav = useNavigate()
    const handleHome = () => {
        nav('/')
    }
  return (
    <div className="relative w-screen mt-[53px] font-[poppins]">
    <img src={blogHero} className="w-full " alt="" onClick={handleHome} />
    <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center gap-3 cursor-pointer">
      <img src={logo} alt="" width={50} />
      <div className="flex items-center -text--clr-secondary">
        <span className="text-black font-[poppins] font-semibold" onClick={handleHome}>
          Home{" "}
        </span>{" "}
        <span className="text-black">
          <PiCaretRightBold />
        </span>
        <span className="text-black font-[poppins]">Blog</span>
      </div>
    </div>
  </div>

  )
}

export default BlogHero
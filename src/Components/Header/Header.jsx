import logo from "/icons/logo.svg";
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import {
  FaBlog,
  FaEnvelopeOpen,
  FaHome,
  FaInfoCircle,
  FaShopify,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";
import DropDownModal from "./DropDownModal";
import { MdLogout } from "react-icons/md";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [name, setName] = useState("");
  const { pathname } = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    // window.location.reload();
  };

  const handleMouseDown = (e) => {
    const dropdown = dropdownRef.current;
    const shiftX = e.clientX - dropdown.getBoundingClientRect().left;
    const shiftY = e.clientY - dropdown.getBoundingClientRect().top;

    const onMouseMove = (e) => {
      dropdown.style.left = `${e.clientX - shiftX}px`;
      dropdown.style.top = `${e.clientY - shiftY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setNavVisibility(false);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  useEffect(() => {
    if (token) {
      const { firstName, lastName } = JSON.parse(localStorage.getItem("user"));
      const name1 = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
      setName(name1)
    }
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };

   
  }, [token,handleLogout]);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const handleClick = (val) => {
    if (val === "logo") {
      navigate("/");
    }
  };

  return (
    <header className="Header">
      <div
        className="flex items-center text-2xl space-x-2 font-bold w-max ml-6 h-full cursor-pointer"
        onClick={() => handleClick("logo")}
      >
        <img src={logo} className="Logo" alt="logo" />
        <h2>Furniro</h2>
      </div>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a
            href="/#/"
            className={pathname === "/" ? "active" : ""}
            onClick={toggleNav}
          >
            <FaHome className="icon" /> Home
          </a>
          <a
            href="/#/shop"
            className={pathname === "/shop" ? "active" : ""}
            onClick={toggleNav}
          >
            <FaShopify className="icon" /> Shop
          </a>
          <a
            href="/#/about"
            className={pathname === "/about" ? "active" : ""}
            onClick={toggleNav}
          >
            <FaInfoCircle className="icon" /> About
          </a>
          <a
            href="/#/contact"
            className={pathname === "/contact" ? "active" : ""}
            onClick={toggleNav}
          >
            <FaEnvelopeOpen className="icon" /> Contact
          </a>
          <a
            href="/#/blog"
            className={pathname === "/blog" ? "active" : ""}
            onClick={toggleNav}
          >
            <FaBlog className="icon" /> Blog
          </a>
          <a
            href="/#/cart"
            className={pathname === "/cart" ? "active" : ""}
            onClick={toggleNav}
          >
            <FaShoppingCart className="icon" /> Cart
          </a>
          {/* <button>Login</button> */}
          <div
            className="relative profile__container1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {token ? (
              <div className="text-2xl cursor-pointer hover:-text--clr-primary">{name}</div>
            ) : (
              <FaUser className="-text--clr-primary cursor-pointer" size={24} />
            )}
            {showDropdown &&
              (token ? (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-max -bg--clr-primary border rounded-lg shadow-lg p-3 z-[99] cursor-pointer"
                  onClick={handleLogout}
                >
                  <div className="text-white flex gap-2 items-center text-sm">
                    {" "}
                    <MdLogout />
                    Logout
                  </div>
                </div>
              ) : (
                <DropDownModal
                  dropdownRef={dropdownRef}
                  handleMouseDown={handleMouseDown}
                />
              ))}
          </div>
        </nav>
      </CSSTransition>
      <div className="profile__container">
        <div
          className="relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <FaUser className="-text--clr-primary cursor-pointer" size={24} /> */}
          {token ? (
            <div className="text-2xl hover:-text--clr-primary">{name}</div>
          ) : (
            <FaUser className="-text--clr-primary cursor-pointer" size={24} />
          )}
          {showDropdown &&
            (token ? (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-max -bg--clr-primary border rounded-lg shadow-lg p-3 z-[99] cursor-pointer"
                onClick={handleLogout}
              >
                <div className="text-white flex gap-2 items-center text-sm">
                  {" "}
                  <MdLogout />
                  Logout
                </div>
              </div>
            ) : (
              <DropDownModal
                dropdownRef={dropdownRef}
                handleMouseDown={handleMouseDown}
              />
            ))}
        </div>
      </div>
      <button onClick={toggleNav} className="Burger">
        {isNavVisible ? <IoClose /> : <RiMenu2Line />}
      </button>
    </header>
  );
}

// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Ensure you're using react-router-dom for navigation

// import logo from '/icons/logo.svg';
// import Navbar from './Navbar';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="bg-white shadow flex justify-center">
//       <div className="w-11/12 py-4 flex justify-between items-center">
//         <div className="text-3xl space-x-1 font-bold flex items-center">
//           <img src={logo} alt="Furniro Logo" className="w-8 h-8" />
//           <h3>Furniro</h3>
//         </div>
//         <nav className="hidden md:flex space-x-4">
//           <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
//           <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
//           <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
//           <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
//         </nav>
//         <div className="hidden md:flex space-x-4">
//           <button className="text-gray-600 hover:text-gray-900">Login</button>
//           <button className="text-gray-600 hover:text-gray-900">Cart</button>
//         </div>
//         <div className="md:hidden">
//           {/* <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button> */}
//           <Navbar />
//         </div>
//       </div>
//       {/* {isMenuOpen && (
//         <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-transform transform translate-y-0">
//           <nav className="space-y-6 text-2xl">
//             <button onClick={() => handleNavigation('/')} className="text-gray-600 hover:text-gray-900">Home</button>
//             <button onClick={() => handleNavigation('/shop')} className="text-gray-600 hover:text-gray-900">Shop</button>
//             <button onClick={() => handleNavigation('/about')} className="text-gray-600 hover:text-gray-900">About</button>
//             <button onClick={() => handleNavigation('/contact')} className="text-gray-600 hover:text-gray-900">Contact</button>
//             <button onClick={() => handleNavigation('/login')} className="text-gray-600 hover:text-gray-900">Login</button>
//             <button onClick={() => handleNavigation('/cart')} className="text-gray-600 hover:text-gray-900">Cart</button>
//           </nav>
//         </div>
//       )} */}
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import logo from '/icons/logo.svg'

// const Header = () => {
//   return (
//     <header className="bg-white shadow flex justify-center">
//       <div className="w-11/12 py-4 flex justify-between items-center">
//         <div className="text-3xl space-x-1 font-bold flex">
//           <img src={logo} alt="" />
//           <h3>Furniro</h3>
//         </div>
//         <nav className="space-x-4">
//           <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
//           <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
//           <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
//           <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
//         </nav>
//         <div className="space-x-4">
//           <button className="text-gray-600 hover:text-gray-900">Login</button>
//           <button className="text-gray-600 hover:text-gray-900">Cart</button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

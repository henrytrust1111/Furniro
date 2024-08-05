import React, { useState, useEffect } from "react";
import Categories from "../../Components/Categories";
import Products from "../../Components/Products";
import Hero from "../../Components/Hero/Hero";
import ScrollToTop from "../../Containers/ScrollToTop";
import Section from "../../Components/Section/Section";
import GridImages from "../../Components/gridImages/GridImages";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleLogo = () => {
    nav("/")
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center  w-screen h-screen bg-white absolute z-[9999]" onClick={handleLogo}>
          <div className="flex space-x-2 font-bold text-2xl cursor-pointer animate-fadeInOut">
          <img src={logo} className="Logo" alt="logo" />
          <h2>Furniro</h2>
          </div>
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Hero />
          <Categories />
          <Products />
          <Section />
          <GridImages />
        </>
      )}
    </>
  );
};

export default Home;

import React from "react";
import Categories from "../../Components/Categories";
import Products from "../../Components/Products";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
    </>
  );
};

export default Home;

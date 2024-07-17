import React from "react";
import Categories from "../../Components/Categories";
import Products from "../../Components/Products";
import Hero from "../../Components/Hero/Hero";
import ScrollToTop from "../../Containers/ScrollToTop";
import Section from "../../Components/Section/Section";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Categories />
      <Products />
      <Section />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Categories from "../../Components/Categories";
import Products from "../../Components/Products";
import Hero from "../../Components/Hero/Hero";
import ScrollToTop from "../../Containers/ScrollToTop";
import Section from "../../Components/Section/Section";
import GridImages from "../../Components/gridImages/GridImages";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Categories />
      <Products />
      <Section />
      <GridImages />
    </>
  );
};

export default Home;

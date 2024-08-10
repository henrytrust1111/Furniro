import React from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";

const Checkout = () => {
  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Checkout"} page1={"Checkout"} />
    </>
  );
};

export default Checkout;

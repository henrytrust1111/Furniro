import React from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";

const Cart = () => {
  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Cart"} page1={"Cart"} />
    </>
  );
};

export default Cart;

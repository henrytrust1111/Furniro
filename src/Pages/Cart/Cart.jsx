import React from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";
import MainCart from "./MainCart";

const Cart = () => {
  return (
    <>
      <ScrollToTop />
      <MainCart/>
      <ReuseableHero page={"Cart"} page1={"Cart"} />
    </>
  );
};

export default Cart;

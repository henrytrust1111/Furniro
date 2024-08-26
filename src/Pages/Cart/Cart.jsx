import React from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";
import MainCart from "./MainCart";

const Cart = () => {
  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Cart"} page1={"Cart"} />
      <MainCart/>
    </>
  );
};

export default Cart;

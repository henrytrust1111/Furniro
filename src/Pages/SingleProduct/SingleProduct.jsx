import React, { useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import ProductDetails from "../../Components/ProductDetails";
import ProductDescription from "../../Components/ProductDescription";
import Cart from "../../Components/Header/Cart";
import "./SingleProduct.css";
import Products from "../../Components/Products";
import Description from "../../Components/Description";
import ScrollToTop from "../../Containers/ScrollToTop";

const SingleProduct = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = () => {
    setIsCartVisible(true);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      <ScrollToTop />
      <div className="w-full h-auto">
        <Breadcrumbs />
        <ProductDetails onAddtocart={handleAddToCart} />  
        <ProductDescription
          name={Description[0].name}
          mainDetails={Description[0].mainDetails}
          weight={Description[0].weight}
        />
        {/* <RelatedProducts products={productsData}/> */}
        <Products Title="Relatable Product" />
        {isCartVisible && <Cart onClose={handleCloseCart} />}
      </div>
    </>
  );
};

export default SingleProduct;

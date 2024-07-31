import React from "react";
import { useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import ProductDetails from "../../Components/ProductDetails";
import ProductDescription from "../../Components/ProductDescription";
import RelatedProducts from "../../Components/RelatedProducts";
import productsData from "../../Components/productData";
import Cart from "../../Components/Header/Cart";
import "./SingleProduct.css";

const SingleProduct = () => {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = () => {
    setIsCartVisible(true);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="w-full h-auto">
      <Breadcrumbs />
      <ProductDetails onAddtocart={handleAddToCart} />
      <ProductDescription />
      <RelatedProducts products={productsData}/>
      {isCartVisible && (
        <Cart onClose={handleCloseCart}/>
      )}
    </div>
  );
};

export default SingleProduct;

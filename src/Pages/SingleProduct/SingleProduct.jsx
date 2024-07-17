import React from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import ProductDetails from "../../Components/ProductDetails";
import ProductDescription from "../../Components/ProductDescription";
import RelatedProducts from "../../Components/RelatedProducts";
import productsData from "../../Components/productData";
// import ProductInfo from "../../Components/ProductInfo";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div className="w-full h-full">
      <Breadcrumbs />
      <ProductDetails />
      {/* <ProductInfo /> */}
      <ProductDescription />
      <RelatedProducts products={productsData}/>
    </div>
  );
};

export default SingleProduct;

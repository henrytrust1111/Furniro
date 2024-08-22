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
  const [size,setSize] = useState()

  const handleAddToCart = async(quantity) => {
    const productID = "66c5eb7ee9acad10fd78fa65"
    setIsCartVisible(true);
    try{
      const response = await fetch (`https://funiro-furnitures.onrender.com/add-to-cart/:userId/${productID}`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer your_token_here`,  
        },
        body: JSON.stringify({
          quantity:quantity
        })
      })


    if (!response.ok) {
      // Handle response errors
      if (response.status === 404) {
        throw new Error('Product or user not found');
      } else if (response.status === 500) {
        throw new Error('Internal server error');
      } else {
        throw new Error('An error occurred');
      }
    }

    const data = await response.json();
    console.log('Product added to cart:', data);
    }catch(response){
      console.error('Error adding product to cart:', error.message);
    }
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

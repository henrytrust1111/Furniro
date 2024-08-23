import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ onClose }) => {
  const [cartData, setCartData] = useState(null);

  const addToCart = async (userId, productId, size) => {
    try {
      const response = await fetch(`https://funiro-furnitures.onrender.com/add-to-cart/${userId}/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ size }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Bad Request. Please check the product details.");
        } else if (response.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error("An unexpected error occurred.");
        }
      }

      const data = await response.json();
      setCartData(data.data);
      console.log(data.data)
      alert(data.message);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert(error.message);
    }
  };

  const handleAddToCart = () => {
    const userId = "66c885a58ac3e7313c744541"; 
    const productId = "66c5eb7ee9acad10fd78fa65"; 
    const size = "M"; 
    addToCart(userId, productId, size);
  };

  const updateCart = async (userId, productId, size, quantity) => {
    try {
      const response = await fetch(`https://funiro-furnitures.onrender.com/update-quantity/${userId}/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ size, quantity }),
      });
  
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Bad Request. Please check the product details.");
        } else if (response.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error("An unexpected error occurred.");
        }
      }
  
      const data = await response.json();
      setCartData(data.data); // Update the cart data state with the API response
      alert(data.message);
    } catch (error) {
      console.error("Error updating cart:", error);
      alert(error.message);
    }
  };
  
  const handleUpdateCart = () => {
    const userId = "66c885a58ac3e7313c744541"; // Replace with actual user ID
    const productId = "66c5eb7ee9acad10fd78fa65"; // Replace with actual product ID
    const size = "M"; // Replace with actual size, if applicable
    const quantity = 2; // Replace with the new quantity
    updateCart(userId, productId, size, quantity);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[998]"></div>
      <div className="fixed lg:w-[350px] w-full max-w-[350px] h-[550px] bg-white shadow-lg top-[180px] lg:top-0 rounded-lg lg:right-1 p-6 flex flex-col gap-6 z-[999]">
        <div className="h-[75px] flex gap-6 flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-sm">Shopping Cart</h1>
            <i className="bx bxs-shopping-bag"></i>
            <button onClick={onClose} className="text-xl">
              &times;
            </button>
          </div>
          <div className="w-full border-b"></div>
        </div>

        <div className="w-full h-[300px]">
          {cartData?.products.map((product) => (
            <div key={product.productId} className="flex items-center justify-between gap-8">
              <div className="w-32">
                <img src={product.productImage} alt={product.productName} />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-sm">{product.productName}</p>
                <div className="text-xs flex items-center gap-2">
                  <p className="-text--clr-primary">{product.quantity}</p>
                  <p className="-text--clr-primary">x</p>
                  <p className="-text--clr-primary">Rs{product.price}</p>
                </div>
              </div>
              <div>
                <i className="bx bx-x text-lg"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col h-[75px] gap-6">
          <div className="flex justify-between">
            <p className="text-xs font-semibold">Total</p>
            <p className="text-xs">Rs{cartData?.total}</p>
          </div>
          <div className="w-full border-b"></div>
        </div>
        <div className="flex flex-col h-[75px] gap-6">
          <div className="flex justify-between">
            <p className="text-xs font-semibold">subTotal</p>
            <p className="text-xs">Rs{cartData?.subTotal}</p>
          </div>
          <div className="w-full border-b"></div>
        </div>

        <div className="h-[75px] flex gap-4">
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer" onClick={handleAddToCart}>
            Add Item
          </div>
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer">
            Checkout
          </div>
          <Link to="/comparison">
            <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer">
              Comparison
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;

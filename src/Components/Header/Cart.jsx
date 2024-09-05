import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import logo from "/icons/logo.svg";

const Cart = ({ onClose,quantity }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productID } = useParams();
  const [total,setTotal] = useState(0)
  // const [deleteCart,setdeleteCart] = useState()

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://funiro-furnitures.onrender.com/get-one-product/${productID}`
      );
      setProduct(response.data);
      console.log(response.data[0].images);
    } catch (err) {
      toast.error(err.message);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, [productID]);

  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({ size }),
  //       }
  //     );
  
  //     if (!response.ok) {
  //       if (response.status === 400) {
  //         throw new Error("Bad Request. Please check the product details.");
  //       } else if (response.status === 500) {
  //         throw new Error("Server error. Please try again later.");
  //       } else {
  //         throw new Error("An unexpected error occurred.");
  //       }
  //     }
  
  //     const data = await response.json();
  //     setProduct((prevProducts) => {
  //       const updatedProducts = [...prevProducts, data.data];
  //       saveToLocalStorage(data.data);
  //       return updatedProducts;
  //     });
  //     console.log(data.data);
  //     alert(data.message);
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //     alert(error.message);
  //   }
  // };

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }
  };

  const deleteFromCart = ()=>{
    setProduct(null)
  }

 return (
  <>
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[998]"></div>
    <div className="fixed lg:w-[350px] w-full max-w-[350px] h-[550px] bg-white shadow-lg top-[180px] lg:top-0 rounded-lg lg:right-1 p-6 flex flex-col gap-6 z-[999]">
      <div className="h-[75px] flex gap-6 flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-sm">Shopping Cart</h1>
          <i className="bx bxs-shopping-bag -text--clr-primary"></i>
          <button onClick={onClose} className="text-xl">
            &times;
          </button>
        </div>
        <div className="w-full border-b"></div>
      </div>

      <div className="w-full h-[300px]">
        {product.length === 0 ? (
          <section className="py-16 font-[poppins]">
          <div className="container mx-auto px-4 text-center -text--clr-primary flex items-center justify-center">
            <img src={logo} alt="" className="mr-2 animate-spin " />
            <p className="text-lg font-semibold">Loading...</p>
          </div>
        </section>
        ) : (
          product.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-8">
              <div className="w-40 h-20">
                <img src={item?.images[0]?.url} className="w-full h-full rounded-sm bg-cover bg-center" alt="" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-sm">{item?.itemName}</p>
                <div className="text-xs flex items-center gap-2">
                  <p className="-text--clr-primary">{quantity}</p>
                  <p className="-text--clr-primary">x</p>
                  <p className="-text--clr-primary"> Rs.{item?.price}</p>
                </div>
              </div>
              <div className="w-12 h-8 rounded-sm -bg--clr-primary flex items-center justify-center">
                <i className="bx bx-x text-white text-sm" onClick={deleteFromCart}></i>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex flex-col h-[75px] gap-6">
        <div className="flex justify-between">
          <p className="text-xs font-semibold">{total}</p>
          {/* <p className="text-xs">Rs Rs.{product[0].price}</p> */}
        </div>
        <div className="w-full border-b"></div>
      </div>
      <div className="flex flex-col h-[75px] gap-6">
        <div className="flex justify-between">
          <p className="text-xs font-semibold">subTotal</p>
          {/* <p className="text-xs">Rs Rs.{product[0].price}</p> */}
        </div>
        <div className="w-full border-b"></div>
      </div>

      <div className="h-[75px] flex gap-4">
        <div
          className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer"
          onClick={handleAddToCart}
        >
          Add Item
        </div>
        <Link to="/Cart">
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer">
            Checkout
          </div>
        </Link>
        <Link to="/comparison">
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer">
            Comparison
          </div>
        </Link>
      </div>
    </div>
  </>
);

;
};

export default Cart;

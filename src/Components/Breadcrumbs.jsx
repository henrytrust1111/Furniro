import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";

const Breadcrumbs = () => {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();

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

  return (
    <section className="w-full h-14 bg-[#F9F1E7] flex gap-4 items-center pl-4 lg:pl-24 mt-[55px]">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-900 flex items-center justify-center text-sm"
        >
          Home
        </Link>
        <i className="bx bx-chevron-right flex items-center mt-[1px]"></i>
      </div>
      <div className="flex items-center">
        <Link
          to="/shop"
          className="text-gray-600 hover:text-gray-900 flex items-center justify-center text-sm"
        >
          Shop
        </Link>
        <i className="bx bx-chevron-right flex items-center mt-[1px]"></i>
      </div>
      <div>
        <div className="w-[1px] h-[18px] bg-[#141414]"></div>
      </div>
      {product.length > 0 && (
        <p className="text-xs">{product[0].itemName}</p>
      )}
    </section>
  );
};

export default Breadcrumbs;

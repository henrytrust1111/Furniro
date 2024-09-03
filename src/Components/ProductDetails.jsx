import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/icons/logo.svg";

const ProductDetails = ({ onAddtocart }) => {
  const [bgColor, setBgColor] = useState("bg-[#F9F1E7]");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("L"); // Default size is "L"
  const [selectedRating, setSelectedRating] = useState(5);
  const [product, setProduct] = useState();
  const { productID } = useParams();
  const colorClasses = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    // Add more colors as needed
  };

  // <div className="flex gap-4">
  //   {product[0]?.colors.map((color, index) => (
  //     <div
  //       key={index}
  //       className={`w-6 h-6 rounded-full ${colorClasses[color]} flex items-center justify-center text-xs cursor-pointer`}
  //       onClick={() => onColorChange(color)}
  //     ></div>
  //   ))}
  // </div>;

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://funiro-furnitures.onrender.com/get-one-product/${productID}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch product details");
  //       }
  //       const data = await response.json();
  //       setProduct(data);
  //       console.log(product);
  //       setImage(data.data.images[0]?.url || null);
  //     } catch (error) {
  //       console.error("Error fetching product details:", error.message);
  //     }
  //   };

  //   fetchProduct();
  // }, [productID]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://funiro-furnitures.onrender.com/get-one-product/${productID}`
      );

      setProduct(response.data);
      console.log(response.data[0].images);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onColorChange = (color) => {
    setBgColor(color);
  };

  const onImageChange = (newImage) => {
    setImage(newImage);
  };

  const onSizeChange = (size) => {
    setSelectedSize(size);
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Ensure the value is within the allowed range and is a valid number
    if (value === "" || (Number(value) >= 0 && Number(value) <= 10)) {
      setQuantity(value);
    }
  };

  const handleShare = async (platform) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(
        `https://funiro-furnitures.onrender.com/share/${productID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching share URLs");
      }

      const data = await response.json();
      const url = data.data[platform];
      if (url) {
        window.open(url, "_blank");
      } else {
        console.error("URL not found for platform:", platform);
      }
    } catch (error) {
      console.error("Error fetching share URLs:", error.message);
    }
  };

  const handleRating = async (rating) => {
    const parsedRating = parseInt(rating, 10);
    setSelectedRating(parsedRating);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(
        `https://funiro-furnitures.onrender.com/product/${productID}/rate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating: parsedRating,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error submitting rating");
      }

      const data = await response.json();
      console.log("Rating submitted successfully:", data);
      alert("Rating submitted successfully");
    } catch (error) {
      console.log("Submitting error:", error.message);
      alert(error.message);
    }
  };

  if (!product) {
    return (
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center -text--clr-primary flex items-center justify-center">
          <img src={logo} alt="" className="mr-2 animate-spin " />
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col p-4 lg:flex-row overflow-hidden">
      <div className="w-full lg:w-1/2 lg:pt-14 flex flex-col gap-4 justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:px-16">
          {/* smaller image for larger screen */}
          <div className="hidden lg:!grid grid-cols-2 px-12 lg:px-0 lg:grid-cols-1 gap-4">
            <div
              className={`rounded-sm w-16 h-14 ${bgColor}`}
              onClick={() => onImageChange(product[0]?.images[0]?.url)}
            >
              <img
                src={product[0]?.images[0]?.url}
                className="w-full h-full"
                alt={product[0]?.itemName}
              />
            </div>
          </div>

          {/* Main image  for small screen*/}
          <div
            className={`flex lg:hidden rounded-sm bg-green-500 ${bgColor}`}
            onClick={() => onImageChange(product[0]?.images[0]?.url)}
          >
            <img
              src={product[0]?.images[0]?.url}
              className="w-full h-full"
              alt={product[0]?.itemName}
            />
          </div>
          {/* smaller images for small screen */}
          <div className="lg:hidden grid grid-cols-2 px-12 lg:px-0 lg:grid-cols-1 gap-4">
            <div
              className={`rounded-sm w-16 h-14 ${bgColor}`}
              onClick={() => onImageChange(product[0]?.images[0]?.url)}
            >
              <img
                src={product[0]?.images[0]?.url}
                className="w-full h-full"
                alt={product[0]?.itemName}
              />
            </div>
          </div>

          {/* Main image for large screen */}
          <div
            className={`hidden lg:flex lg:w-full lg:h-[500px] rounded-sm ${bgColor}`}
            onClick={() => onImageChange(product[0]?.images[0]?.url)}
          >
            <img
              src={product[0]?.images[0]?.url}
              className="w-full h-full bg-no-repeat bg-cover"
              alt={product[0]?.itemName}
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 pt-14 flex flex-col gap-4">
        <h4 className="text-[30px]">{product[0].itemName}</h4>
        <h5 className="text-lg text-[#b7b7b7] font-semibold">
          Rs.{product[0].price}
        </h5>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={`bx ${
                selectedRating >= star
                  ? "bxs-star text-yellow-500"
                  : "bx-star text-gray-300"
              }`}
              onClick={() => handleRating(star)}
            ></i>
          ))}
        </div>
        <div>
          <p className="w-full lg:w-[500px] text-xs lg:text-sm">
            {product[0].description}
          </p>
        </div>
        {/* Size selection and other product details */}
        <div className="flex flex-col gap-4">
          <span className="text-xs">Size</span>
          <div className="flex gap-4">
            <div
              className={`w-8 h-8 rounded-sm ${
                selectedSize === "L"
                  ? "bg-[#242424] text-white"
                  : "bg-[#F9F1E7]"
              } flex items-center justify-center text-xs cursor-pointer`}
              onClick={() => onSizeChange("L")}
            >
              L
            </div>
          </div>
          <span className="text-xs">Color:</span>
          <div className="flex gap-4">
            {product[0]?.colors.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full ${colorClasses[color]} flex items-center justify-center text-xs cursor-pointer`}
                onClick={() => onColorChange(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="w-32 h-12 border-2 rounded-lg flex justify-between items-center p-2">
            <p onClick={decrement} className="text-sm cursor-pointer">
              -
            </p>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="text-sm w-12 text-center border-none outline-none"
              min="0"
              max="10"
            />
            <p onClick={increment} className="text-sm cursor-pointer">
              +
            </p>
          </div>
          <div
            onClick={onAddtocart}
            className="w-32 lg:w-40 h-12 border-[0.8px] cursor-pointer border-[#242424] rounded-lg flex items-center justify-center p-2 shadow-sm text-[10px] lg:text-sm"
          >
            Add to cart
          </div>
          <div className="w-32 lg:w-40 border-[0.8px] border-[#242424] flex items-center justify-center rounded-lg">
            <Link to="/comparison">
              <p className="text-[10px] lg:text-sm">Compare</p>
            </Link>
          </div>
        </div>
        {/* Product Info Section */}
        <div className="w-full border-b"></div>
        <div className="product-info flex flex-col justify-center gap-3 mt-4">
          <div className="info-row flex gap-2">
            <div className="label text-[#b7b7b7] text-xs">Product Name</div>
            <div className="value text-[#b7b7b7] text-xs">
              :&nbsp;{product[0].itemName}
            </div>
          </div>
          <div className="info-row flex gap-4">
            <div className="label text-[#b7b7b7] text-xs">Categories Info</div>
            <div className="value text-[#b7b7b7] text-xs">
              :&nbsp;{product[0].category.categoryInfo}
            </div>
          </div>
        </div>
        {/* Social Share Icons */}
        <div className="info-row flex gap-2">
          <div className="label text-[#b7b7b7] text-xs w-20">Share</div>
          <div className="value text-xs flex gap-4">
            <div
              onClick={() => handleShare("facebook")}
              className="cursor-pointer"
            >
              :&nbsp;<i className="bx bxl-facebook-circle"></i>
            </div>
            <div
              onClick={() => handleShare("linkedin")}
              className="cursor-pointer"
            >
              <i className="bx bxl-linkedin-square"></i>
            </div>
            <div
              onClick={() => handleShare("twitter")}
              className="cursor-pointer"
            >
              <i className="bx bxl-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

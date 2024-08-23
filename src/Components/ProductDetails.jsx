import React, { useState } from "react";
import { Link } from "react-router-dom";
const ProductDetails = ({ onAddtocart }) => {
  const [bgColor, setBgColor] = useState("bg-[#F9F1E7]");
  const [quantity, setquantity] = useState(0);
  const [image,setImage] = useState("/singleProduct.png");
  const [selectedSize, setSelectedSize] = useState("L"); // Default size is "L"
  const [selectedRating,setSelectedRating] = useState(5)

  const onColorChange = (color) => {
    setBgColor(color);
  };

  const onImageChange = (newimage)=>{
    setImage(newimage)
  }
  
  const onSizeChange = (size) => {
    setSelectedSize(size);
  }; 

  const increment = () => {
    setquantity((prevQuantity) => prevQuantity + 1);
  };
  const decrement = () => {
    setquantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleShare = async (platform) => {
    const productID = "66c5eb7ee9acad10fd78fa65";
        const token = localStorage.getItem('authToken')
        console.log('Retrieved Token:', token);

        if (!token) {
          throw new Error('No token found. Please log in.');
        }
    try {
      const response = await fetch(`https://funiro-furnitures.onrender.com/share/${productID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Product not found');
        } else if (response.status === 500) {
          throw new Error('Internal server error');
        } else {
          throw new Error('An error occurred');
        }
      }
  
      const data = await response.json();
      console.log('Share URLs:', data);
  
      const url = data.data[platform];
      if (url) {
        window.open(url, '_blank');
      } else {
        console.error('URL not found for platform:', platform);
      }
  
    } catch (error) {
      console.error('Error fetching share URLs:', error.message);
    }
  }
  const handleRating = async (rating) => {
    const parsedRating = parseInt(rating, 10);
    setSelectedRating(parsedRating); // Update the state

    // Ensure the value is up-to-date before making the API call
    await new Promise(resolve => setTimeout(resolve, 0));

    const productID = "66c5eb7ee9acad10fd78fa65";
    const token = localStorage.getItem('authToken');
    console.log('Retrieved Token:', token);
    console.log('Parsed Rating:', parsedRating);

    if (!token) {
        throw new Error('No token found. Please log in.');
    }

    try {
        const response = await fetch(`https://funiro-furnitures.onrender.com/product/${productID}/rate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                rating: parsedRating
            })
        });

        if (!response.ok) {
            if (response.status === 400) {
                throw new Error('Rating must be between 1 and 5');
            } else if (response.status === 404) {
                throw new Error('Product not found');
            } else if (response.status === 500) {
                throw new Error('Internal server error');
            } else {
                throw new Error('An error occurred');
            }
        }

        const data = await response.json();
        console.log('Rating submitted successfully:', data);

        alert('Rating submitted successfully');
    } catch (error) {
        console.log('Submitting error:', error.message);
        alert(error.message); // Show alert with the error message
    }
};


  
  
  return (
    <section className="w-full flex flex-col p-4 lg:flex-row overflow-hidden">
      <div className="w-full lg:w-1/2 lg:pt-14 flex flex-col gap-4 justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:px-16">
          {/* main image */}
          <div className={`lg:hidden flex w-full ${bgColor}`}>
            <img
              src={image}
              className="object-cover h-full"
              alt="Asgard Sofa"
            />
          </div>

          {/* smaller images*/}
          <div className="grid grid-cols-2 px-12 lg:px-0 lg:grid-cols-1 gap-4">
            <div className={`rounded-sm w-16 h-14 ${bgColor}`}>
              <img src="/singleProduct.png" className="w-full h-full" alt=""
              onClick={() => onImageChange("/singleProduct.png")}
              />
            </div>
            <div className={`rounded-sm w-16 h-14 ${bgColor}`}>
              <img src="/chair1.png" className="w-full h-full" alt=""
              onClick={() => onImageChange("/chair1.png")}
              />
            </div>
            <div className={`rounded-sm w-16 h-14 ${bgColor}`}>
              <img src="/chair3.png" className="w-full h-full" alt=""
              onClick={() => onImageChange("/chair3.png")}
              />
            </div>
            <div className={`rounded-sm w-16 h-14 ${bgColor}`}>
              <img src="/chair5.png" className="w-full h-full" alt="" 
              onClick={() => onImageChange("/chair5.png")}
              />
            </div>
          </div>

          <div
            className={`hidden lg:flex lg:w-full lg:h-[500px] rounded-sm ${bgColor}`}
          >
            <img
              src={image}
              className="object-cover w-full h-full"
              alt="Asgard Sofa"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 pt-14 flex flex-col gap-4">
        {/* <h4 className="text-[30px]">Asgaard sofa</h4> */}
        <h5 className="text-lg text-[#b7b7b7] font-semibold">Rs. 250,000.00</h5>
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`bx ${selectedRating >= star ? 'bxs-star text-yellow-500' : 'bx-star text-gray-300'}`}
                onClick={() => handleRating(star)} // Set the selected rating
              ></i>
            ))}
          </div>
        <div>
          <p className="w-full lg:w-[500px] text-xs lg:text-sm">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xs">Size</span>
          <div className="flex gap-4">
            <div
              className={`w-8 h-8 rounded-sm ${selectedSize === "L" ? "bg-[#242424] text-white" : "bg-[#F9F1E7]"} flex items-center justify-center text-xs cursor-pointer`}
              onClick={() => onSizeChange("L")}
            >
              L
            </div>
            <div
              className={`w-8 h-8 rounded-sm ${selectedSize === "XL" ? "bg-[#242424] text-white" : "bg-[#F9F1E7]"} flex items-center justify-center text-xs cursor-pointer`}
              onClick={() => onSizeChange("XL")}
            >
              XL
            </div>
            <div
              className={`w-8 h-8 rounded-sm ${selectedSize === "XS" ? "bg-[#242424] text-white" : "bg-[#F9F1E7]"} flex items-center justify-center text-xs cursor-pointer`}
              onClick={() => onSizeChange("XS")}
            >
              XS
            </div>
          </div>
          <span className="text-xs">Color:</span>
          <div className="flex gap-4">
            <div
              className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs cursor-pointer"
              onClick={() => onColorChange("bg-purple-500")}
            ></div>
            <div
              className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs cursor-pointer"
              onClick={() => onColorChange("bg-green-500")}
            ></div>
            <div
              className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs cursor-pointer"
              onClick={() => onColorChange("bg-blue-500")}
            ></div>
            <div
              className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs cursor-pointer"
              onClick={() => onColorChange("bg-orange-500")}
            ></div>
            <div
              className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-xs cursor-pointer"
              onClick={() => onColorChange("bg-black")}
            ></div>
            <div
              className="w-6 h-6 rounded-full bg-cyan-300 flex items-center justify-center text-xs cursor-pointer"
              onClick={() => onColorChange("bg-cyan-300")}
            ></div>
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="w-32 h-12 border-2 rounded-lg flex justify-between items-center p-2">
            <p onClick={decrement} className="text-sm cursor-pointer">
              -
            </p>
            <p className="text-sm">{quantity}</p>
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
            <Link to = "/comparison">
              <p className="text-[10px] lg:text-sm">Compare</p>
            </Link>
          </div>
        </div>
        {/* Product Info Section */}
        <div className="w-full border-b"></div>
        <div className="product-info flex flex-col gap-3 mt-4">
          <div className="info-row flex gap-8">
            <div className="label text-[#b7b7b7] text-xs w-20">SKU</div>
            <div className="value text-[#b7b7b7] text-xs">:&nbsp;ss001</div>
          </div>
          <div className="info-row flex gap-8">
            <div className="label text-[#b7b7b7] text-xs w-20">Category</div>
            <div className="value text-[#b7b7b7] text-xs">:&nbsp;sofas</div>
          </div>
          <div className="info-row flex gap-8">
            <div className="label text-[#b7b7b7] text-xs w-20">Tags</div>
            <div className="value text-[#b7b7b7] text-xs">
              :&nbsp;Sofa, Chair, Home, Shop
            </div>
          </div>
          <div className="info-row flex gap-8">
            <div className="label text-[#b7b7b7] text-xs w-20">Share</div>
            <div className="value text-xs flex items-center gap-4">
              <div onClick={() => handleShare('facebook')} className="cursor-pointer">
                :&nbsp;<i className="bx bxl-facebook-circle"></i>
              </div>
              <div onClick={() => handleShare('linkedin')} className="cursor-pointer">
                <i className="bx bxl-linkedin-square"></i>
              </div>
              <div onClick={() => handleShare('twitter')} className="cursor-pointer">
                <i className="bx bxl-twitter"></i>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

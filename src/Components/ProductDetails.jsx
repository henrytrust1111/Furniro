import React, { useState } from "react";

const ProductDetails = ({onAddtocart}) => {
  const [bgColor, setBgColor] = useState("");
  const [quantity,setquantity] = useState(0);
  // const [decrease,setdecrease] = useState(0);

  const onColorChange = (color) => {
    setBgColor(color);
  };

  const increment = ()=>{
    setquantity (prevQuantity => prevQuantity + 1);
  }
  const decrement = ()=>{
    setquantity (prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
  }

 

  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] lg:pt-14 p-4 flex flex-col gap-4 justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-center">
          <div className={`lg:hidden flex w-full lg:w-[50%] lg:h-[400px] ${bgColor}`}>
            <img
              src="/singleProduct.png"
              className="object-cover w-full h-full"
              alt="Asgard Sofa"
            />
          </div>
          <div className="w-full lg:w-[15%] grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className={`w-full h-[80px] bg-gray-500 rounded-sm ${bgColor}`}>
                <img src="public/Group 94.png" className="" alt="" />
            </div>
            <div className={`w-full h-[80px] bg-gray-500 rounded-sm ${bgColor}`}></div>
            <div className={`w-full h-[80px] bg-gray-500 rounded-sm ${bgColor}`}></div>
            <div className={`w-full h-[80px] bg-gray-500 rounded-sm ${bgColor}`}></div>
          </div>

          <div className={`hidden lg:flex w-full lg:w-[50%] lg:h-[400px] rounded-sm ${bgColor}`}>
            <img
              src="/singleProduct.png"
              className="object-cover w-full h-full"
              alt="Asgard Sofa"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] pt-14 flex flex-col gap-4 p-4">
        <h4>Asgaard sofa</h4>
        <h5 className="text-xs text-[#b7b7b7]">Rs. 250,000.00</h5>
        <div className="flex gap-4">
          <div className="flex text-yellow-200">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <div>
            <div className="w-[1px] h-[18px] bg-[#141414]"></div>
          </div>
          <p className="text-xs text-[#b7b7b7]">5 Customer Review</p>
        </div>
        <div>
          <p className="text-xs lg:text-sm w-full lg:w-[400px]">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xs">Size</span>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-sm bg-[#F9F1E7] flex items-center justify-center text-xs">
              L
            </div>
            <div className="w-8 h-8 rounded-sm bg-[#F9F1E7] flex items-center justify-center text-xs">
              XL
            </div>
            <div className="w-8 h-8 rounded-sm bg-[#F9F1E7] flex items-center justify-center text-xs">
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
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="w-32 h-12 border-2 rounded-lg flex justify-between items-center p-2">
            <p onClick={decrement} className="text-sm cursor-pointer">-</p>
            <p className="text-sm">{quantity}</p>
            <p onClick={increment} className="text-sm cursor-pointer">+</p>
          </div>
          <div onClick={onAddtocart} className="w-32 lg:w-40 h-12 border-[0.8px] cursor-pointer border-[#242424] rounded-lg flex items-center justify-center p-2 shadow-sm text-[10px] lg:text-sm">
            Add to cart
          </div>
          <div className="w-32 lg:w-40 border-[0.8px] border-[#242424] rounded-lg flex gap-4 items-center justify-center p-2 shadow-sm">
            <p className="text-sm cursor-pointer">+</p>
            <p className="text-[10px] lg:text-sm">Compare</p>
          </div>
        </div>
        {/* Product Info Section */}
        <div className="w-[480px] h-[0.8px] border-b"></div>
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
            <div className="value text-[#b7b7b7] text-xs flex items-center gap-4">
              <div>
                :&nbsp;<i className="bx bxl-facebook-circle"></i>
              </div>
              <div>
                <i className="bx bxl-linkedin-square"></i>
              </div>
              <div>
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

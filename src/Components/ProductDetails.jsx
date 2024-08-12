import React, { useState } from "react";

const ProductDetails = ({ onAddtocart }) => {
  const [quantity, setquantity] = useState(0);

  const increment = () => {
    setquantity((prevQuantity) => prevQuantity + 1);
  };
  const decrement = () => {
    setquantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <section className="w-full flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full lg:w-1/2 lg:pt-14 p-4 flex flex-col gap-4 justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:px-16">
          <div className={`lg:hidden flex w-full`}>
            <img
              src="/singleProduct.png"
              className="object-cover h-full"
              alt="Asgard Sofa"
            />
          </div>
          <div className="grid grid-cols-2 px-12 lg:px-0 lg:grid-cols-1 gap-4">
            <div className="rounded-sm">
              <img src="Group 94.png" className="" alt="" />
            </div>
            <div className="rounded-sm">
              <img src="Group 94.png" className="" alt="" />
            </div>
            <div className="rounded-sm">
              <img src="Group 94.png" className="" alt="" />
            </div>
            <div className="rounded-sm">
              <img src="Group 94.png" className="" alt="" />
            </div>
          </div>

          <div className={`hidden lg:flex lg:w-full lg:h-[400px] rounded-sm`}>
            <img
              src="/singleProduct.png"
              className="object-cover w-full h-full"
              alt="Asgard Sofa"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 pt-14 flex flex-col gap-4 p-4">
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
          <p className="text-xs lg:text-sm w-full">
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
          <div className="w-32 lg:w-40 border-[0.8px] border-[#242424] rounded-lg flex gap-4 items-center justify-center p-2 shadow-sm">
            <p className="text-sm cursor-pointer">+</p>
            <p className="text-[10px] lg:text-sm">Compare</p>
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

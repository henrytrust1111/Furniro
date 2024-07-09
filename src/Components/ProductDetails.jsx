import React from "react";

const ProductDetails = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] lg:pt-14 lg:pl-24 p-4">
        <img src="public/Group 102.png" alt="Asgard Sofa" />
      </div>
      <div className="md:w-full lg:w-[50%] pt-14 flex flex-col gap-4 p-4">
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
            Kilburn is a compact, stout-hearted hero with a well-balanced
            audio which boasts a clear midrange and extended highs for a
            sound.
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
            <div className="w-6 h-6 rounded-full bg-[#F9F1E7] flex items-center justify-center text-xs"></div>
            <div className="w-6 h-6 rounded-full bg-[#F9F1E7] flex items-center justify-center text-xs"></div>
            <div className="w-6 h-6 rounded-full bg-[#F9F1E7] flex items-center justify-center text-xs"></div>
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="w-32 h-12 border-2 rounded-lg flex justify-between items-center p-2">
            <p className="text-sm">-</p>
            <p className="text-sm">1</p>
            <p className="text-sm">+</p>
          </div>
          <div className="w-32 lg:w-40 h-12 border-[0.8px] border-[#242424] rounded-lg flex items-center p-2 shadow-sm text-xs lg:text-sm">
            Add to cart
          </div>
          <div className="w-32 lg:w-40 border-[0.8px] border-[#242424] rounded-lg flex gap-4 items-center justify-center p-2 shadow-sm">
            <p className="text-sm">+</p>
            <p className="text-sm">Compare</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

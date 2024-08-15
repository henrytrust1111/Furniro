import React from "react";

const Cart = ({ onClose }) => {
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

        <div className="h-[300px]">
          <div className="h-[100px] flex items-center justify-between gap-8">
            <div>
              <img src="/Group 94.png" alt="" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-xs">Asgard sofa</p>
              <p className="text-xs">1  x  Rs250000</p>
            </div>
            <div className=""><i class='bx bx-x text-lg'></i></div>
          </div>
          </div>

        <div className="flex flex-col h-[75px] gap-6">
          <div className="flex justify-between">
            <p className="text-xs font-semibold">Subtotal</p>
            <p className="text-xs">Rs2500000</p>
          </div>
          <div className="w-full border-b"></div>
        </div>

        <div className="h-[75px] flex gap-4">
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs">
            Cart
          </div>
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs">
            Checkout
          </div>
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs">
            Comparison
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

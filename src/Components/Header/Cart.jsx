import React from "react";
import { Link } from "react-router-dom";

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

        <div className="w-full h-[300px]">
          <div className="flex items-center justify-between gap-8">
            <div className="w-32">
              <img src="/Group 94.png" alt="" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-sm">Asgard sofa</p>
              <div className="text-xs flex items-center gap-2">
                <p className="-text--clr-primary">1</p>
                <p className="-text--clr-primary">x</p>
                <p className="-text--clr-primary">Rs250000</p>
              </div>
            </div>
            <div className=""><i class='bx bx-x text-lg'></i></div>
          </div>
        </div>

        <div className="flex flex-col h-[75px] gap-6">
          <div className="flex justify-between">
            <p className="text-xs font-semibold">Total</p>
            <p className="text-xs">Rs2500000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs font-semibold">subTotal</p>
            <p className="text-xs">Rs2500000</p>
          </div>
          <div className="w-full border-b"></div>
        </div>

        <div className="h-[75px] flex gap-4">
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer">
            Cart
          </div>
          <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-xs cursor-pointer">
            Checkout
          </div>
          <Link to = "/comparison">
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

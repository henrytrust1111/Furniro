import React from "react";

const CartTotalLoading = () => {
  return (
    <div className="-bg--clr-primar-light-v3 h-96 p-6 rounded-lg shadow-md flex justify-center">
      <div className="w-[85%] space-y-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center h-6 bg-gray-300"></h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-700 h-4 w-20 bg-gray-300"></span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="h-4 w-20 bg-gray-300"></span>
          <span className="text-lg font-bold text-gold -text--clr-primary h-4 w-20 bg-gray-300"></span>
        </div>
        <div className="w-full flex justify-center">
          <button className="w-[80%] py-3 rounded-lg h-8 bg-gray-300"></button>
        </div>
      </div>
    </div>
  );
};

export default CartTotalLoading;

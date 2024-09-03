import React, { useState } from "react";

const OrderIdForm = ({ onSubmitOrderId }) => {
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrderId(orderId);
  };

  return (
    // <div className="text-center">
    //   <h2 className="text-2xl font-semibold mb-4">Enter Your Order ID</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={orderId}
    //       onChange={(e) => setOrderId(e.target.value)}
    //       required
    //         placeholder="Order ID"
    //       className="p-2 border-b border-gray-300 rounded-md  outline-none mb-4"

    //     />
    //     <button
    //       type="submit"
    //       className="-bg--clr-primary text-white px-6 py-2 rounded-md hover:-bg--clr-primar-light-v1"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <>
      <div className="text-center flex items-center justify-center flex-col">
        <h2 className="text-2xl font-semibold mb-4">Enter Your Order ID</h2>
        <div className="relative w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              placeholder="Order ID"
              className="w-full p-2 pr-20 border border-gray-300 rounded-lg focus:ring-2 focus:-ring--clr-primary outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-[#B88E2F] text-white rounded-r-lg hover:bg-opacity-90 transition-all "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderIdForm;

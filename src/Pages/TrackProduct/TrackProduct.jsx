import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TrackProduct = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [showCancellationForm, setShowCancellationForm] = useState(false);

  const handleTrackOrder = () => {
    // Mock validation for order number
    if (orderNumber === "VALID123") {
      // Mock order details
      setOrderDetails({
        productName: "Luxurious Sofa Set",
        status: "Shipped",
        destination: "New York, USA",
        estimatedDelivery: "3 days",
      });
      setShowCancellationForm(true);
    } else {
      setOrderDetails(null);
      setShowCancellationForm(false);
      toast.error("Invalid Order Number! Please check your input.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Track Your Order
      </h1>

      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Enter your order number"
            className="w-full p-2 pr-20 border border-gray-300 rounded-lg focus:ring-2 focus:-ring--clr-primary outline-none"
          />
          <button
            onClick={handleTrackOrder}
            className="absolute right-0 top-0 h-full px-4 bg-[#B88E2F] text-white rounded-r-lg hover:bg-opacity-90 transition-all "
          >
            Track Order
          </button>
        </div>
      </div>

      {orderDetails && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold">Product Name:</h3>
              <p>{orderDetails.productName}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold">Status:</h3>
              <p>{orderDetails.status}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold">Destination:</h3>
              <p>{orderDetails.destination}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold">Estimated Delivery:</h3>
              <p>{orderDetails.estimatedDelivery}</p>
            </div>
          </div>
        </div>
      )}

      {showCancellationForm && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Cancel Order</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="reason" className="mb-2 font-semibold">
                Reason for Cancellation
              </label>
              <textarea
                id="reason"
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:-ring--clr-primary outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contact" className="mb-2 font-semibold">
                Contact Information
              </label>
              <input
                type="text"
                id="contact"
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:-ring--clr-primary outline-none"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
              >
                Submit Cancellation Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TrackProduct;

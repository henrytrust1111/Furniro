import React from "react";

const OTPModal = ({ showModal, handleClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          We have sent a One Time Password (OTP) to your email. Please enter it
          to verify your account.
        </p>
        <button
          onClick={handleClose}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#14192D] hover:bg-white hover:!shadow-custom1 hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OTPModal;

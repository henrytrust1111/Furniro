import React from "react";

const TermsModal = ({ onAgree, onDisagree }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 mx-4 md:mx-0 max-w-lg w-full text-center">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">
          Terms and Conditions
        </h2>
        <p className="mb-6 text-center lg:text-left text-sm">
          By agreeing to these terms, you acknowledge that you have read and
          understood the return policy of Furniro. Returns must be made within
          30 days of purchase, in original condition, with proof of purchase.
        </p>
        <div className="flex justify-between">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onDisagree}
          >
            Disagree
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={onAgree}
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;

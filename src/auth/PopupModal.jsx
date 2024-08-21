import React from "react";
import { motion } from "framer-motion";

const PopupModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Success</h2>
        <p className="text-center text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-[#EF6911] text-white py-2 px-4 rounded-lg hover:bg-[#c0550b] transition-all duration-300"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default PopupModal;

// import React from "react";

// const OTPModal = ({ showModal, handleClose }) => {
//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
//         <h2 className="text-xl font-semibold mb-4 text-center">
//           Verify Your Email
//         </h2>
//         <p className="text-gray-600 mb-4 text-center">
//           We have sent a One Time Password (OTP) to your email. Please enter it
//           to verify your account.
//         </p>
//         <button
//           onClick={handleClose}
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#14192D] hover:bg-white hover:!shadow-custom1 hover:!text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OTPModal;
import React from "react";
import { motion } from "framer-motion";

const OTPModal = ({ message, onClose }) => {
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

export default OTPModal;

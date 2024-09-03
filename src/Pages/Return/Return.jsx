import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";
import { BiLoaderCircle } from "react-icons/bi";
import TermsModal from "./TermsModal";
import OrderIdForm from "./OrderIdForm";

// Mock Orders Array
const mockOrders = [
  {
    orderId: "12345",
    products: [
      {
        productName: "Luxury Sofa",
        quantity: 3,
        sizes: ["Small", "Medium", "Large"],
        reasonForReturn: "",
        productCondition: "",
        isChecked: false,
      },
      {
        productName: "Dining Table",
        quantity: 1,
        sizes: ["Large"],
        reasonForReturn: "",
        productCondition: "",
        isChecked: false,
      },
    ],
  },
  {
    orderId: "67890",
    products: [
      {
        productName: "King Size Bed",
        quantity: 2,
        sizes: ["King", "Queen"],
        reasonForReturn: "",
        productCondition: "",
        isChecked: false,
      },
    ],
  },
];

const Return = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTermsAgreement = (agree) => {
    if (agree) {
      setAgreedToTerms(true);
    } else {
      window.location.href = "/";
    }
  };

  const handleOrderIdSubmit = (orderId) => {
    // Find the order with the entered order ID
    const foundOrder = mockOrders.find((order) => order.orderId === orderId);

    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      toast.error("Invalid Order ID!");
    }
  };

  const handleProductCheckboxChange = (index) => {
    const updatedProducts = order.products.map((product, idx) =>
      idx === index ? { ...product, isChecked: !product.isChecked } : product
    );
    setOrder({ ...order, products: updatedProducts });
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = order.products.map((product, idx) =>
      idx === index ? { ...product, quantity: newQuantity } : product
    );
    setOrder({ ...order, products: updatedProducts });
  };

  const handleReasonChange = (index, newReason) => {
    const updatedProducts = order.products.map((product, idx) =>
      idx === index ? { ...product, reasonForReturn: newReason } : product
    );
    setOrder({ ...order, products: updatedProducts });
  };

  const handleConditionChange = (index, newCondition) => {
    const updatedProducts = order.products.map((product, idx) =>
      idx === index ? { ...product, productCondition: newCondition } : product
    );
    setOrder({ ...order, products: updatedProducts });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const productsToReturn = order.products.filter(
      (product) => product.isChecked
    );

    if (productsToReturn.length === 0) {
      toast.error("Please select at least one product to return.");
      setLoading(false);
      return;
    }

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Return submitted successfully!");
      // Reset the form or handle successful submission
    }, 2000);
  };

  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Return"} page1={"Return"} />

      {!agreedToTerms ? (
        <TermsModal
          onAgree={() => handleTermsAgreement(true)}
          onDisagree={() => handleTermsAgreement(false)}
        />
      ) : !order ? (
        <div className="container mx-auto md:!px-10 lg:!px-28 py-8">
          <OrderIdForm onSubmitOrderId={handleOrderIdSubmit} />
        </div>
      ) : (
        <div className="container mx-auto md:!px-10 lg:!px-28 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">Return Form</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Select</th>
                    <th className="py-2 px-4 border-b">Product Name</th>
                    <th className="py-2 px-4 border-b">Quantity</th>
                    <th className="py-2 px-4 border-b">Size</th>
                    <th className="py-2 px-4 border-b">Reason for Return</th>
                    <th className="py-2 px-4 border-b">Product Condition</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          checked={product.isChecked}
                          onChange={() => handleProductCheckboxChange(index)}
                          className="form-checkbox h-5 checked:!-bg--clr-primary outline-none"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        {product.productName}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, e.target.value)
                          }
                          min="1"
                          className="p-2 border border-gray-300 rounded-md outline-none"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <select className="p-2 border border-gray-300 rounded-md outline-none">
                          {product.sizes.map((size, idx) => (
                            <option key={idx} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={product.reasonForReturn}
                          onChange={(e) =>
                            handleReasonChange(index, e.target.value)
                          }
                          className="p-2 border border-gray-300 rounded-md outline-none"
                          placeholder="Reason for return"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <select
                          value={product.productCondition}
                          onChange={(e) =>
                            handleConditionChange(index, e.target.value)
                          }
                          className="p-2 border border-gray-300 rounded-md outline-none"
                        >
                          <option value="" disabled>
                            Select Condition
                          </option>
                          <option value="New">New</option>
                          <option value="Used">Used</option>
                          <option value="Damaged">Damaged</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="submit"
              className="-bg--clr-primary max-w-64 text-white px-6 py-2 rounded cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <BiLoaderCircle className="mr-2 animate-spin" size={22} />
              ) : (
                "Submit Return"
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Return;























// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ScrollToTop from "../../Containers/ScrollToTop";
// import ReuseableHero from "../../Components/ReuseableHero";
// import { BiLoaderCircle } from "react-icons/bi";
// import axios from "axios";


// const Return = () => {
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [loading, setLoading] = useState(false);


//   const handleTermsAgreement = (agree) => {
//     if (agree) {
//       setAgreedToTerms(true);
//     } else {
//       window.location.href = "/";
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     e.preventDefault();
//     setLoading(true);

//     const orderNumber = e.target.orderNumber.value;
//     const email = e.target.email.value;
//     const reason = e.target.reason.value;
//     const productCondition = e.target.productCondition.value;
//     const additionalComments = e.target.additionalComments.value;

//         // Validation
//         if (
//           !orderNumber ||
//           !email ||
//           !reason ||
//           !productCondition ||
//           !additionalComments
//         ) {
//           toast.error("All fields are required!");
//           setLoading(false);
//           return;
//         }

//     try {
//       const response = await axios.post(
//         "https://funiro-furnitures.onrender.com/sign-up",
//         {
//           orderNumber,
//           email,
//           reason,
//           productCondition,
//           additionalComments,
//         }
//       );

//       const { message, data, token } = response.data;

//       // Save necessary data to localStorage
//       localStorage.setItem("user", JSON.stringify(data));
//       localStorage.setItem("email", data.email);
//       localStorage.setItem("userId", data._id);
//       localStorage.setItem("token", token);

//       toast.success(message);
//       setPopupMessage(message); // Set the message from the backend
//       setShowPopupModal(true); // Show the popup modal
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.error || "An error occurred!");
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <ScrollToTop />
//       <ReuseableHero page={"Return"} page1={"Return"} />
//       {!agreedToTerms ? (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-8 mx-4 md:mx-0 max-w-lg w-full text-center">
//             <h2 className="text-lg md:text-2xl font-semibold mb-4">
//               Terms and Conditions
//             </h2>
//             <p className="mb-6 text-center lg:text-left text-sm">
//               By agreeing to these terms, you acknowledge that you have read and
//               understood the return policy of Furniro. Returns must be made
//               within 30 days of purchase, in original condition, with proof of
//               purchase.
//             </p>
//             <div className="flex justify-between">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={() => handleTermsAgreement(false)}
//               >
//                 Disagree
//               </button>
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                 onClick={() => handleTermsAgreement(true)}
//               >
//                 Agree
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="container mx-auto md:!px-10 lg:!px-28 py-8">
//           <h1 className="text-3xl font-bold text-center mb-6">Return Form</h1>
//           <p className="text-lg text-center mb-8">
//             At Furniro, we specialize in luxurious furniture for dining rooms,
//             living rooms, and bedrooms. Please fill out the form below to
//             initiate a return request.
//           </p>
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             <div className="flex flex-col">
//               <label htmlFor="orderNumber" className="font-medium mb-2">
//                 Order Number
//               </label>
//               <input
//                 type="text"
//                 id="orderNumber"
//                 name="orderNumber"
//                 required
//                 className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="email" className="font-medium mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
//               />
//             </div>
//             <div className="flex flex-col md:col-span-2">
//               <label htmlFor="reason" className="font-medium mb-2">
//                 Reason for Return
//               </label>
//               <textarea
//                 id="reason"
//                 name="reason"
//                 rows="4"
//                 required
//                 className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
//               ></textarea>
//             </div>
//             <div className="flex flex-col md:col-span-2">
//               <label htmlFor="productCondition" className="font-medium mb-2">
//                 Product Condition
//               </label>
//               <select
//                 id="productCondition"
//                 name="productCondition"
//                 required
//                 className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
//               >
//                 <option value="new">New</option>
//                 <option value="damaged">Damaged</option>
//                 <option value="defective">Defective</option>
//               </select>
//             </div>
//             <div className="flex flex-col md:col-span-2">
//               <label htmlFor="additionalComments" className="font-medium mb-2">
//                 Additional Comments
//               </label>
//               <textarea
//                 id="additionalComments"
//                 name="additionalComments"
//                 rows="4"
//                 className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
//               ></textarea>
//             </div>
//             <div className="md:col-span-2 text-center">
//               <button
//                 type="submit"
//                 className="-bg--clr-primary text-white px-6 py-2 rounded-md hover:border-2 hover:!-border--clr-primary hover:!text-black hover:bg-transparent"
//               >
                
//                 {loading ? (
//                 <BiLoaderCircle className="mr-2 animate-spin" size={22} />
//               ) : (
//                 "Submit Return"
//               )}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Return;

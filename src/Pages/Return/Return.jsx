import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";

const Return = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleTermsAgreement = (agree) => {
    if (agree) {
      setAgreedToTerms(true);
    } else {
      window.location.href = "/";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Your return request has been submitted. You will receive a follow-up email shortly."
    );
  };

  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Return"} page1={"Return"} />
      {!agreedToTerms ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 mx-4 md:mx-0 max-w-lg w-full text-center">
            <h2 className="text-lg md:text-2xl font-semibold mb-4">
              Terms and Conditions
            </h2>
            <p className="mb-6 text-center lg:text-left text-sm lg:text-base">
              By agreeing to these terms, you acknowledge that you have read and
              understood the return policy of Furniro. Returns must be made
              within 30 days of purchase, in original condition, with proof of
              purchase.
            </p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleTermsAgreement(false)}
              >
                Disagree
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => handleTermsAgreement(true)}
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto md:!px-10 lg:!px-28 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">Return Form</h1>
          <p className="text-lg text-center mb-8">
            At Furniro, we specialize in luxurious furniture for dining rooms,
            living rooms, and bedrooms. Please fill out the form below to
            initiate a return request.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label htmlFor="orderNumber" className="font-medium mb-2">
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                required
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="reason" className="font-medium mb-2">
                Reason for Return
              </label>
              <textarea
                id="reason"
                name="reason"
                rows="4"
                required
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="productCondition" className="font-medium mb-2">
                Product Condition
              </label>
              <select
                id="productCondition"
                name="productCondition"
                required
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
              >
                <option value="new">New</option>
                <option value="damaged">Damaged</option>
                <option value="defective">Defective</option>
              </select>
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="additionalComments" className="font-medium mb-2">
                Additional Comments
              </label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                rows="4"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:-ring--clr-primary outline-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="-bg--clr-primary text-white px-6 py-2 rounded-md hover:border-2 hover:!-border--clr-primary hover:!text-black hover:bg-transparent"
              >
                Submit Return Request
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Return;

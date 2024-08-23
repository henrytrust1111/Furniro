import React, { useState } from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineCreditCard } from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { countriesAndCities, countries } from "./countriesAndCities";

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    setCities(countriesAndCities[selectedCountry] || []);
  };

  const validateForm = () => {
    // Add your form validation logic here
    // For example:
    if (!selectedCountry) {
      toast.error("Please select a country.");
      return false;
    }
    // Add more validation checks as needed
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Initialize Korapay payment
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: `ref-${Math.floor(Math.random() * 1000000)}`,
      amount: 22000, 
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com"
      },
      notification_url: "https://example.com/webhook",
      onClose: () => {
        setIsLoading(false);
        toast.error("Payment process was canceled.");
      },
      onSuccess: (response) => {
        setIsLoading(false);
        toast.success("Payment successful!");
        console.log(response);
        // Handle the success response
      },
      onError: (error) => {
        setIsLoading(false);
        toast.error("Payment failed. Please try again.");
        console.error(error);
        // Handle the error response
      }
    });
  };

  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Checkout"} page1={"Checkout"} />
      <ToastContainer />
      {/* <div className="max-w-7xl mx-auto p-4"> */}
      <div className="px-8 md:!px-24 lg:!px-48 my-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Billing Details Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Billing details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="border p-3 w-full rounded" 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="border p-3 w-full rounded" 
              />
            </div>
            <input 
              type="text" 
              placeholder="Company Name (Optional)" 
              className="border p-3 w-full rounded" 
            />
            <select 
              className="border p-3 w-full rounded" 
              value={selectedCountry} 
              onChange={handleCountryChange}
            >
              <option value="" disabled>
                Country / Region
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input 
              type="text" 
              placeholder="Street address" 
              className="border p-3 w-full rounded" 
            />
            <select 
              className="border p-3 w-full rounded" 
              defaultValue=""
              disabled={!selectedCountry}
            >
              <option value="" disabled>
                Town / City
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <input 
              type="text" 
              placeholder="ZIP code" 
              className="border p-3 w-full rounded" 
            />
            <input 
              type="text" 
              placeholder="Phone" 
              className="border p-3 w-full rounded" 
            />
            <input 
              type="email" 
              placeholder="Email address" 
              className="border p-3 w-full rounded" 
            />
            <textarea 
              placeholder="Additional information" 
              className="border p-3 w-full rounded h-32" 
            ></textarea>
          </div>
          
          {/* Order Summary */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Product</h2>
            <div className="border p-4 rounded-lg space-y-4">
              <div className="flex justify-between">
                <span className="font-[poppins]">Asgaard sofa × 1</span>
                <span className="font-[poppins]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-[poppins]">Subtotal</span>
                <span className="font-[poppins]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span className="font-[poppins]">Total</span>
                <span className="-text--clr-primary text-base font-semibold font-[poppins]">Rs. 250,000.00</span>
              </div>
              
              {/* Payment Methods */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="bank-transfer" 
                    name="payment-method" 
                    className="mr-2"
                    defaultChecked 
                  />
                  <label htmlFor="bank-transfer" className="flex items-center">
                    <MdOutlineCreditCard className="mr-2 text-xl" />
                    Direct Bank Transfer
                  </label>
                </div>
                <p className="-text--clr-light-gray-v2 text-xs">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>

                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="cash-on-delivery" 
                    name="payment-method" 
                    className="mr-2"
                  />
                  <label htmlFor="cash-on-delivery" className="flex items-center">
                    <BsCashStack className="mr-2 text-xl" />
                    Cash On Delivery
                  </label>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full text-black p-3 border -border--clr-black-shade-v1  rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <BiLoaderCircle className="mr-2 animate-spin" size={22} />
                ) : (
                  "Place order"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;































// import React, { useState } from "react";
// import ScrollToTop from "../../Containers/ScrollToTop";
// import ReuseableHero from "../../Components/ReuseableHero";
// import { BsCashStack } from "react-icons/bs";
// import { MdOutlineCreditCard } from "react-icons/md";
// import { countriesAndCities, countries } from "./countriesAndCities";

// const Checkout = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [cities, setCities] = useState([]);

//   const handleCountryChange = (e) => {
//     const selectedCountry = e.target.value;
//     setSelectedCountry(selectedCountry);
//     setCities(countriesAndCities[selectedCountry] || []);
//   };

//   return (
//     <>
//       <ScrollToTop />
//       <ReuseableHero page={"Checkout"} page1={"Checkout"} />
      
//       <div className="max-w-7xl mx-auto p-4">
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Billing Details Form */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold">Billing details</h2>
//             <div className="grid md:grid-cols-2 gap-4">
//               <input 
//                 type="text" 
//                 placeholder="First Name" 
//                 className="border p-3 w-full rounded" 
//               />
//               <input 
//                 type="text" 
//                 placeholder="Last Name" 
//                 className="border p-3 w-full rounded" 
//               />
//             </div>
//             <input 
//               type="text" 
//               placeholder="Company Name (Optional)" 
//               className="border p-3 w-full rounded" 
//             />
//             <select 
//               className="border p-3 w-full rounded" 
//               value={selectedCountry} 
//               onChange={handleCountryChange}
//             >
//               <option value="" disabled>
//                 Country / Region
//               </option>
//               {countries.map((country, index) => (
//                 <option key={index} value={country}>
//                   {country}
//                 </option>
//               ))}
//             </select>
//             <input 
//               type="text" 
//               placeholder="Street address" 
//               className="border p-3 w-full rounded" 
//             />
//             <select 
//               className="border p-3 w-full rounded" 
//               defaultValue=""
//               disabled={!selectedCountry}
//             >
//               <option value="" disabled>
//                 Town / City
//               </option>
//               {cities.map((city, index) => (
//                 <option key={index} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//             <input 
//               type="text" 
//               placeholder="ZIP code" 
//               className="border p-3 w-full rounded" 
//             />
//             <input 
//               type="text" 
//               placeholder="Phone" 
//               className="border p-3 w-full rounded" 
//             />
//             <input 
//               type="email" 
//               placeholder="Email address" 
//               className="border p-3 w-full rounded" 
//             />
//             <textarea 
//               placeholder="Additional information" 
//               className="border p-3 w-full rounded h-32" 
//             ></textarea>
//           </div>
          
//           {/* Order Summary */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold">Product</h2>
//             <div className="border p-4 rounded-lg space-y-4">
//               <div className="flex justify-between">
//                 <span>Asgaard sofa × 1</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between font-bold text-xl">
//                 <span>Total</span>
//                 <span className="text-orange-600">Rs. 250,000.00</span>
//               </div>
              
//               {/* Payment Methods */}
//               <div className="space-y-2">
//                 <div className="flex items-center">
//                   <input 
//                     type="radio" 
//                     id="bank-transfer" 
//                     name="payment-method" 
//                     className="mr-2"
//                     defaultChecked 
//                   />
//                   <label htmlFor="bank-transfer" className="flex items-center">
//                     <MdOutlineCreditCard className="mr-2 text-xl" />
//                     Direct Bank Transfer
//                   </label>
//                 </div>
//                 <p className="text-gray-600 text-sm">
//                   Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                 </p>

//                 <div className="flex items-center">
//                   <input 
//                     type="radio" 
//                     id="cash-on-delivery" 
//                     name="payment-method" 
//                     className="mr-2"
//                   />
//                   <label htmlFor="cash-on-delivery" className="flex items-center">
//                     <BsCashStack className="mr-2 text-xl" />
//                     Cash On Delivery
//                   </label>
//                 </div>
//               </div>

//               {/* Place Order Button */}
//               <button className="w-full bg-orange-600 text-white p-3 rounded-lg text-xl transition duration-300 ease-in-out transform hover:bg-orange-500 hover:scale-105">
//                 Place order
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Checkout;
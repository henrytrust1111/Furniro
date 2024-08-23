import React, { useState } from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineCreditCard } from "react-icons/md";
import { countriesAndCities, countries } from "./countriesAndCities";

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    setCities(countriesAndCities[selectedCountry] || []);
  };

  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Checkout"} page1={"Checkout"} />
      
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-8">
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
                <span>Asgaard sofa × 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span className="text-orange-600">Rs. 250,000.00</span>
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
                <p className="text-gray-600 text-sm">
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
              <button className="w-full bg-orange-600 text-white p-3 rounded-lg text-xl transition duration-300 ease-in-out transform hover:bg-orange-500 hover:scale-105">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;



























// import React from "react";
// import ScrollToTop from "../../Containers/ScrollToTop";
// import ReuseableHero from "../../Components/ReuseableHero";
// import { BsCashStack } from "react-icons/bs";
// import { MdOutlineCreditCard } from "react-icons/md";

// const Checkout = () => {
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
//               defaultValue="Sri Lanka"
//             >
//               <option value="Sri Lanka">Sri Lanka</option>
//               {/* Add more options as needed */}
//             </select>
//             <input 
//               type="text" 
//               placeholder="Street address" 
//               className="border p-3 w-full rounded" 
//             />
//             <input 
//               type="text" 
//               placeholder="Town / City" 
//               className="border p-3 w-full rounded" 
//             />
//             <select 
//               className="border p-3 w-full rounded"
//               defaultValue="Western Province"
//             >
//               <option value="Western Province">Western Province</option>
//               {/* Add more options as needed */}
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
//                 <span className="text-orange-500">Rs. 250,000.00</span>
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
//                 <p className="text-gray-500">
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
//               <button className="w-full bg-orange-500 text-white p-3 rounded-lg text-xl">
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

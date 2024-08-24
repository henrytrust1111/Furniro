import React, { useState, useEffect } from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineCreditCard } from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Checkout = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userId = localStorage.getItem("userId");

  // Fetch all countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://funiro-furnitures.onrender.com/countries");
        setCountries(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Failed to load countries.");
      }
    };
    fetchCountries();
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (!selectedCountry) return;
    const fetchStates = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://funiro-furnitures.onrender.com/countries/${selectedCountry}/states`);
        setStates(response.data);
        setCities([]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Failed to load states.");
      }
    };
    fetchStates();
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (!selectedCountry || !selectedState) return;
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://funiro-furnitures.onrender.com/countries/${selectedCountry}/states/${selectedState}/cities`);
        setCities(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Failed to load cities.");
      }
    };
    fetchCities();
  }, [selectedCountry, selectedState]);

  // Fetch user's cart on component mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(`https://funiro-furnitures.onrender.com/checkout/${userId}`);
        setCart(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Failed to load cart.");
      }
    };
    fetchCart();
  }, [userId]);

  const validateForm = () => {
    if (!selectedCountry) {
      toast.error("Please select a country.");
      return false;
    }
    if (!selectedState) {
      toast.error("Please select a state.");
      return false;
    }
    if (!cart.length) {
      toast.error("Your cart is empty.");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`https://funiro-furnitures.onrender.com/checkout/${userId}`, { cart });
      toast.success(response.data.message);
      setCart([]);
    } catch (error) {
      toast.error(error.response?.data?.message || "Checkout failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Checkout"} page1={"Checkout"} />
      <ToastContainer />
      <div className="px-8 md:!px-24 lg:!px-48 my-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
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
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="" disabled>
                Country / Region
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            <select
              className="border p-3 w-full rounded"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              disabled={!selectedCountry}
            >
              <option value="" disabled>
                State / Province
              </option>
              {states.map((state, index) => (
                <option key={index} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
            <select
              className="border p-3 w-full rounded"
              defaultValue=""
              disabled={!selectedState}
            >
              <option value="" disabled>
                Town / City
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Street address"
              className="border p-3 w-full rounded"
            />
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

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Product</h2>
            <div className="border p-4 rounded-lg space-y-4">
              {cart?.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="font-[poppins]">{item.itemName} × {item.quantity}</span>
                  <span className="font-[poppins]">Rs. {item.price}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span className="font-[poppins]">Subtotal</span>
                <span className="font-[poppins]">Rs. {cart?.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span className="font-[poppins]">Total</span>
                <span className="-text--clr-primary text-base font-semibold font-[poppins]">
                  Rs. {cart?.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                </span>
              </div>

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
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash-delivery"
                    name="payment-method"
                    className="mr-2"
                  />
                  <label htmlFor="cash-delivery" className="flex items-center">
                    <BsCashStack className="mr-2 text-xl" />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-primary text-white py-3 rounded-md font-semibold text-lg"
                disabled={isLoading}
              >
                {isLoading ? <BiLoaderCircle className="animate-spin mx-auto" /> : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;






























// import React, { useState, useEffect } from "react";
// import ScrollToTop from "../../Containers/ScrollToTop";
// import ReuseableHero from "../../Components/ReuseableHero";
// import { BsCashStack } from "react-icons/bs";
// import { MdOutlineCreditCard } from "react-icons/md";
// import { BiLoaderCircle } from "react-icons/bi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const Checkout = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [cart, setCart] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const userId = localStorage.getItem("userId")

//   // Fetch all countries on component mount
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get("https://funiro-furnitures.onrender.com/countries");
//         setCountries(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         toast.error("Failed to load countries.");
//       }
//     };
//     fetchCountries();
//   }, []);

//   // Fetch states when a country is selected
//   useEffect(() => {
//     if (!selectedCountry) return;
//     const fetchStates = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`https://funiro-furnitures.onrender.com/countries/${selectedCountry}/states`);
//         setStates(response.data);
//         setCities([]);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         toast.error("Failed to load states.");
//       }
//     };
//     fetchStates();
//   }, [selectedCountry]);

//   // Fetch cities when a state is selected
//   useEffect(() => {
//     if (!selectedCountry || !selectedState) return;
//     const fetchCities = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`https://funiro-furnitures.onrender.com/countries/${selectedCountry}/states/${selectedState}/cities`);
//         setCities(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         toast.error("Failed to load cities.");
//       }
//     };
//     fetchCities();
//   }, [selectedCountry, selectedState]);

//   // Fetch user's cart on component mount
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.post(`https://funiro-furnitures.onrender.com/checkout/${userId}`);
//         setCart(response.data.products);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         toast.error("Failed to load cart.");
//       }
//     };
//     fetchCart();
//   }, [userId]);

//   const validateForm = () => {
//     if (!selectedCountry) {
//       toast.error("Please select a country.");
//       return false;
//     }
//     if (!selectedState) {
//       toast.error("Please select a state.");
//       return false;
//     }
//     if (!cart.length) {
//       toast.error("Your cart is empty.");
//       return false;
//     }
//     return true;
//   };

//   const handlePlaceOrder = async () => {
//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       const response = await axios.post(`https://funiro-furnitures.onrender.com/checkout/${userId}`, { cart });
//       toast.success(response.data.message);
//       setCart([]);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Checkout failed.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <ScrollToTop />
//       <ReuseableHero page={"Checkout"} page1={"Checkout"} />
//       <ToastContainer />
//       <div className="px-8 md:!px-24 lg:!px-48 my-12">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
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
//               onChange={(e) => setSelectedCountry(e.target.value)}
//             >
//               <option value="" disabled>
//                 Country / Region
//               </option>
//               {countries.map((country, index) => (
//                 <option key={index} value={country.code}>
//                   {country.name}
//                 </option>
//               ))}
//             </select>
//             <select
//               className="border p-3 w-full rounded"
//               value={selectedState}
//               onChange={(e) => setSelectedState(e.target.value)}
//               disabled={!selectedCountry}
//             >
//               <option value="" disabled>
//                 State / Province
//               </option>
//               {states.map((state, index) => (
//                 <option key={index} value={state.code}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//             <select
//               className="border p-3 w-full rounded"
//               defaultValue=""
//               disabled={!selectedState}
//             >
//               <option value="" disabled>
//                 Town / City
//               </option>
//               {cities.map((city, index) => (
//                 <option key={index} value={city.name}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               placeholder="Street address"
//               className="border p-3 w-full rounded"
//             />
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

//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold">Product</h2>
//             <div className="border p-4 rounded-lg space-y-4">
//               {cart?.map((item, index) => (
//                 <div key={index} className="flex justify-between">
//                   <span className="font-[poppins]">{item.itemName} × {item.quantity}</span>
//                   <span className="font-[poppins]">Rs. {item.price}</span>
//                 </div>
//               ))}
//               <div className="flex justify-between">
//                 <span className="font-[poppins]">Subtotal</span>
//                 <span className="font-[poppins]">Rs. {cart?.reduce((sum, item) => sum + item.sub_total, 0)}</span>
//               </div>
//               <div className="flex justify-between font-bold text-xl">
//                 <span className="font-[poppins]">Total</span>
//                 <span className="-text--clr-primary text-base font-semibold font-[poppins]">
//                   Rs. {cart?.reduce((sum, item) => sum + item.sub_total, 0)}
//                 </span>
//               </div>

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
//                 <p className="-text--clr-light-gray-v2 text-xs">
//                   Make your payment directly into our bank account. Please use
//                   your Order ID as the payment reference. Your order will not be
//                   shipped until the funds have cleared in our account.
//                 </p>
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     id="cash-delivery"
//                     name="payment-method"
//                     className="mr-2"
//                   />
//                   <label htmlFor="cash-delivery" className="flex items-center">
//                     <BsCashStack className="mr-2 text-xl" />
//                     Cash on Delivery
//                   </label>
//                 </div>
//               </div>

//               <button
//                 onClick={handlePlaceOrder}
//                 className="w-full bg-primary text-white py-3 rounded-md font-semibold text-lg"
//                 disabled={isLoading}
//               >
//                 {isLoading ? <BiLoaderCircle className="animate-spin mx-auto" /> : "Place Order"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Checkout;



























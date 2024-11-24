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
  const token = localStorage.getItem("token");
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    streetAddress: "",
    zipCode: "",
    phone: "",
    additionalInformation: "",
    country: "",
    state: "",
    city: "",
  });

  // Fetch all countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setStates([]);
        setCities([]);
        setCountries([]);
        // setIsLoading(true);
        const response = await axios.get(
          "https://funiro-furnitures.onrender.com/countries"
        );
        setCountries(response.data);
        setStates([]);
        setCities([]);
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
        // setIsLoading(true);
        const response = await axios.get(
          `https://funiro-furnitures.onrender.com/countries/${selectedCountry}/states`
        );
        setStates(response.data);
        setCities([]);
        setIsLoading(false);
      } catch (error) {
        // setIsLoading(false);
        // toast.error("Failed to load states.");
      }
    };
    fetchStates();
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (!selectedCountry || !selectedState) return;
    const fetchCities = async () => {
      try {
        // setIsLoading(true);
        const response = await axios.get(
          `https://funiro-furnitures.onrender.com/countries/${selectedCountry}/states/${selectedState}/cities`
        );
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
        // setIsLoading(true);
        const response = await axios.get(
          `https://funiro-furnitures.onrender.com/view-cart/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCart(response.data.data.products);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
        // setIsLoading(false);
        // toast.error("Failed to load cart.");
        // toast.error(error.response);
      }
    };
    fetchCart();
  }, [userId]);

  // const validateForm = () => {
  //   if (!selectedCountry) {
  //     toast.error("Please select a country.");
  //     return false;
  //   }
  //   if (!selectedState) {
  //     toast.error("Please select a state.");
  //     return false;
  //   }
  //   if (!cart.length) {
  //     toast.error("Your cart is empty.");
  //     return false;
  //   }
  //   return true;
  // };

  const validateForm = () => {
    if (!billingDetails.firstName) {
      toast.error("Please include your firstName");
      return false;
    }
    if (!billingDetails.lastName) {
      toast.error("Please include your lastName");
      return false;
    }
    if (!billingDetails.email || !/\S+@\S+\.\S+/.test(billingDetails.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (billingDetails.companyName && billingDetails.companyName.length > 50) {
      toast.error("Company name cannot exceed 50 characters.");
      return false;
    }
    if (!billingDetails.streetAddress) {
      toast.error("Please input your address");
      return false;
    }
    if (!!billingDetails.streetAddress || billingDetails.streetAddress.length < 5 || billingDetails.streetAddress.length > 100) {
      toast.error("Street address must be between 5 and 100 characters.");
      return false;
    }
    if (!billingDetails.zipCode || !/^\d{5,6}$/.test(billingDetails.zipCode)) {
      toast.error("ZIP code must be a valid 5 or 6 digit number.");
      return false;
    }
    if (!billingDetails.phone || !/^\d{10,15}$/.test(billingDetails.phone)) {
      toast.error("Phone number must be a valid number with 10 to 15 digits.");
      return false;
    }
    if (billingDetails.additionalInformation && (billingDetails.additionalInformation.length > 200 || billingDetails.additionalInformation.length < 2)) {
      toast.error("Additional information should have a maximum length of 200 characters and minimum 2 characters.");
      return false;
    }
    if (!billingDetails.country || billingDetails.country.length < 2 || billingDetails.country.length > 50) {
      toast.error("Please select a Country");
      return false;
    }
    if (!billingDetails.state || billingDetails.state.length < 2 || billingDetails.state.length > 50) {
      toast.error("Please select a State");
      return false;
    }
    if (!billingDetails.city || billingDetails.city.length < 2 || billingDetails.city.length > 50) {
      toast.error("Please select a city");
      return false;
    }
    if (!cart.length) {
      toast.error("Your cart is empty.");
      return false;
    }
    return true;
  };

  const handleCheckout = async () => {
    // if (!validateForm()) return;

    // setIsLoading(true);
    try {
      const response = await axios.post(
        `https://funiro-furnitures.onrender.com/checkout/${userId}`,
        { cart }
      );
      toast.success(response.data.message);
      setCart([]);
    } catch (error) {
      toast.error(error.response?.data?.message || "Checkout failed.");
    }
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleFormSubmission = async () => {
     if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://funiro-furnitures.onrender.com/billing-form`,
        billingDetails,   {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        handleCheckout(); // Proceed with the order if form submission is successful
      } else {
        toast.error("Form submission failed.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error || "Form submission error.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Initialize Korapay payment
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: `ref-${Math.floor(Math.random() * 1000000)}`,
      amount: cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100, 
      currency: "NGN",
      customer: {
        name: `${billingDetails.firstName} ${billingDetails.lastName}`,
        email: billingDetails.email,
      },
      notification_url: "https://example.com/webhook",
      onClose: () => {
        setIsLoading(false);
        toast.error("Payment process was canceled.");
      },
      onSuccess: (response) => {
        setIsLoading(false);
        toast.success("Payment successful!");
        handleFormSubmission();
        console.log(response);
      },
      onError: (error) => {
        setIsLoading(false);
        toast.error("Payment failed. Please try again.");
        console.error(error);
      },
    });
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
                value={billingDetails.firstName}
                onChange={(e) => setBillingDetails({ ...billingDetails, firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={billingDetails.lastName}
                className="border p-3 w-full rounded"
                onChange={(e) => setBillingDetails({ ...billingDetails, lastName: e.target.value })}
              />
            </div>
            <input
                type="email"
                placeholder="Email"
                className="border p-3 w-full rounded"
                value={billingDetails.email}
                onChange={(e) => setBillingDetails({ ...billingDetails, email: e.target.value })}
              />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="border p-3 w-full rounded"
              value={billingDetails.companyName}
              onChange={(e) => setBillingDetails({ ...billingDetails, companyName: e.target.value })}
            />
            <select
              className="border p-3 w-full rounded"
              value={selectedCountry}
              // onChange={(e) => setSelectedCountry(e.target.value)}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setBillingDetails({ ...billingDetails, country: e.target.value });
              }}
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
              // onChange={(e) => setSelectedState(e.target.value)}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setBillingDetails({ ...billingDetails, state: e.target.value });
              }}
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
              value={billingDetails.city}
              onChange={(e) => setBillingDetails({ ...billingDetails, city: e.target.value })}
              disabled={!selectedState}
            >
              <option value="" disabled>
                Town / City
              </option>
              {cities?.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Street address"
              className="border p-3 w-full rounded"
              value={billingDetails.streetAddress}
                onChange={(e) => setBillingDetails({ ...billingDetails, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="ZIP code"
              className="border p-3 w-full rounded"
              value={billingDetails.zipCode}
              onChange={(e) => setBillingDetails({ ...billingDetails, zipCode: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              className="border p-3 w-full rounded"
              value={billingDetails.phone}
              onChange={(e) => setBillingDetails({ ...billingDetails, phone: e.target.value })}
            />
            {/* <input
              type="email"
              placeholder="Email address"
              className="border p-3 w-full rounded"
            /> */}
            <textarea
              placeholder="Additional information"
              className="border p-3 w-full rounded h-32"
              value={billingDetails.additionalInformation}
              onChange={(e) => setBillingDetails({ ...billingDetails, additionalInformation: e.target.value })}
            ></textarea>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Product</h2>
            <div className="border p-4 rounded-lg space-y-4">
              {cart?.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="font-[poppins] text-sm">
                    {item.productName} × {item.quantity}
                  </span>
                  <span className="font-[poppins] text-sm">Rs. {item.price}</span>
                </div>
              ))}
              <div className="flex justify-between ">
                <span className="font-[poppins] text-sm">Subtotal</span>
                <span className="font-[poppins] text-sm">
                  Rs.{" "}
                  {cart?.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span className="font-[poppins] text-sm">Total</span>
                <span className="-text--clr-primary text-xl font-semibold font-[poppins]">
                  Rs.{" "}
                  {cart?.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
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
                className="w-full bg-primary text-black border -border--clr-black-shade-v1 py-3 rounded-md font-semibold text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <BiLoaderCircle className="animate-spin mx-auto" />
                ) : (
                  "Place Order"
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

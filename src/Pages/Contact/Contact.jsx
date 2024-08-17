import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import ScrollToTop from "../../Containers/ScrollToTop";
import ReuseableHero from "../../Components/ReuseableHero";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.yourName || !formData.emailAddress || !formData.message) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post("https://funiro-furnitures.onrender.com/contact-us", formData);
      toast.success(response.data.message || "Message sent successfully!");
      setFormData({
        yourName: "",
        emailAddress: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Contact"} page1={"Contact"} />
      <div className="px-8 md:!px-24 lg:!px-48 my-12">
        <div className="max-w-7xl mx-auto text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-black">
            Get In Touch With Us
          </h2>
          <p className="text-[#9f9f9f] mt-4 text-center lg:w-[700px] text-sm md:text-base">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-2xl text-gray-800" />
              <div>
                <h3 className="text-lg font-semibold text-black">Address</h3>
                <p className="text-black text-sm md:text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-2xl text-gray-800" />
              <div>
                <h3 className="text-lg font-semibold text-black">Phone</h3>
                <p className="text-black text-sm md:text-base">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaClock className="text-2xl text-gray-800" />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Working Time
                </h3>
                <p className="text-black text-sm md:text-base">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-black text-base font-semibold mb-2"
                htmlFor="yourName"
              >
                Your name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="yourName"
                type="text"
                placeholder="Abc"
                value={formData.yourName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-black text-base font-semibold mb-2"
                htmlFor="emailAddress"
              >
                Email address
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="emailAddress"
                type="email"
                placeholder="Abc@def.com"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-black text-base font-semibold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="subject"
                type="text"
                placeholder="This is optional"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-black text-base font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="message"
                placeholder="Hi! I’d like to ask about"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="p-8 -bg--clr-primary text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;




















































// import React from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
// import ScrollToTop from "../../Containers/ScrollToTop";
// import ReuseableHero from "../../Components/ReuseableHero";

// const Contact = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <ReuseableHero page={"Contact"} page1={"Contact"} />
//       <div className="px-8 md:!px-24 lg:!px-48 my-12">
//         <div className="max-w-7xl mx-auto text-center mb-12 flex flex-col items-center">
//           <h2 className="text-3xl font-semibold text-black">
//             Get In Touch With Us
//           </h2>
//           <p className="text-[#9f9f9f] mt-4 text-center lg:w-[700px] text-sm md:text-base">
//             For More Information About Our Product & Services. Please Feel Free
//             To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
//             Not Hesitate!
//           </p>
//         </div>
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="space-y-8">
//             <div className="flex items-start space-x-4">
//               <FaMapMarkerAlt className="text-2xl text-gray-800" />
//               <div>
//                 <h3 className="text-lg font-semibold text-black">Address</h3>
//                 <p className="text-black text-sm md:text-base">
//                   236 5th SE Avenue, New York NY10000, United States
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <FaPhoneAlt className="text-2xl text-gray-800" />
//               <div>
//                 <h3 className="text-lg font-semibold text-black">Phone</h3>
//                 <p className="text-black text-sm md:text-base">
//                   Mobile: +(84) 546-6789
//                   <br />
//                   Hotline: +(84) 456-6789
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <FaClock className="text-2xl text-gray-800" />
//               <div>
//                 <h3 className="text-lg font-semibold text-black">
//                   Working Time
//                 </h3>
//                 <p className="text-black text-sm md:text-base">
//                   Monday-Friday: 9:00 - 22:00
//                   <br />
//                   Saturday-Sunday: 9:00 - 21:00
//                 </p>
//               </div>
//             </div>
//           </div>
//           <form className="space-y-6">
//             <div>
//               <label
//                 className="block text-black text-base font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Your name
//               </label>
//               <input
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 id="name"
//                 type="text"
//                 placeholder="Abc"
//               />
//             </div>
//             <div>
//               <label
//                 className="block text-black text-base font-semibold mb-2"
//                 htmlFor="email"
//               >
//                 Email address
//               </label>
//               <input
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 id="email"
//                 type="email"
//                 placeholder="Abc@def.com"
//               />
//             </div>
//             <div>
//               <label
//                 className="block text-black text-base font-semibold mb-2"
//                 htmlFor="subject"
//               >
//                 Subject
//               </label>
//               <input
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 id="subject"
//                 type="text"
//                 placeholder="This is an optional"
//               />
//             </div>
//             <div>
//               <label
//                 className="block text-black text-base font-semibold mb-2"
//                 htmlFor="message"
//               >
//                 Message
//               </label>
//               <textarea
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 id="message"
//                 placeholder="Hi! I’d like to ask about"
//               />
//             </div>
//             <div>
//               <button
//                 className="p-8 -bg--clr-primary text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

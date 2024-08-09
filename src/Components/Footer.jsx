import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Services from "./Services";

const Footer = () => {
  return (
    <>
    <Services />
      <footer className="bg-white py-8 lg:px-9 border-t-[1px] border-[#D9D9D9]">
        <div className="container mx-auto px-6 lg:!px-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div>
            <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
            <p className="-text--clr-light-gray-v2 mb-4">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:-text--clr-primary">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:-text--clr-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:-text--clr-primary">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-600 hover:!-text--clr-primary">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#/shop"
                  className="text-gray-600 hover:!-text--clr-primary"
                >
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#/about"
                  className="text-gray-600 hover:!-text--clr-primary"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#/contact"
                  className="text-gray-600 hover:!-text--clr-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Help</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:!-text--clr-primary">
                  Payment Options
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:!-text--clr-primary">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:!-text--clr-primary">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-2 border border-gray-300 rounded-l -outline--clr-primar-light"
              />
              <button className="-bg--clr-primary text-white px-4 rounded-r cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-8">
          <div className="h-[1px] w-[90%] bg-[#D9D9D9]"></div>
        </div>
        <div className="container mx-auto px-6 lg:!text-start text-center text-black">
          <p>&copy; 2023 Funiro. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

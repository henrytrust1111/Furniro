import React from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-8 -bg--clr-primar-light">
      <div className="flex items-center space-x-4">
        <FaTrophy className="text-3xl text-gray-800" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">High Quality</h3>
          <p className="text-[#898989] font-mediun">crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaShieldAlt className="text-3xl text-gray-800" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">Warranty Protection</h3>
          <p className="text-[#898989] font-mediun">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaShippingFast className="text-3xl text-gray-800" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">Free Shipping</h3>
          <p className="text-[#898989] font-mediun">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaHeadset className="text-3xl text-gray-800" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">24 / 7 Support</h3>
          <p className="text-[#898989] font-mediun">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

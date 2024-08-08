import React from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';
import trophy from '/icons/trophy.svg'
import warranty from '/icons/warranty.svg'
import freeShipping from '/icons/freeShipping.svg'
import support from '/icons/support.svg'

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-8 -bg--clr-primar-light-v2 justify-center items- place-items-center">
      <div className="flex flex-col items-center space-y-2 text-center lg:!flex-row lg:!text-start lg:space-x-3">
        {/* <FaTrophy className="text-3xl text-[#242424] " /> */}
        <img src={trophy} className='w-10 lg:w-14' alt="" />
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#242424] ">High Quality</h3>
          <p className="-text--clr-light-gray">crafted from top materials</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center space-y-2 text-center lg:!flex-row lg:!text-start lg:space-x-3">
        {/* <FaShieldAlt className="text-3xl text-[#242424] " /> */}
        <img src={warranty} className='w-10 lg:w-14' alt="" />
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#242424] ">Warranty Protection</h3>
          <p className="-text--clr-light-gray">Over 2 years</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center lg:!flex-row lg:!text-start lg:space-x-3">
        {/* <FaShippingFast className="text-3xl text-[#242424] " /> */}
        <img src={freeShipping} className='w-10 lg:w-14' alt="" />
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#242424] ">Free Shipping</h3>
          <p className="-text--clr-light-gray">Order over 150 $</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center lg:!flex-row lg:!text-start lg:space-x-3">
        {/* <FaHeadset className="text-3xl text-[#242424] " /> */}
        <img src={support} className='w-10 lg:w-14' alt="" />
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#242424] ">24 / 7 Support</h3>
          <p className="-text--clr-light-gray">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Services;


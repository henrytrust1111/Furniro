import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section = () => {

  return (
    <section className="-bg--clr-primar-light py-12 font-[poppins] mb-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col justify-center items-center lg:items-start p-6">
            <h2 className="text-4xl font-bold mb-4">50+ Beautiful rooms inspiration</h2>
            <p className="text-gray-600 mb-6">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
            <button className="-bg--clr-primary text-white px-4 py-2 rounded w-44"><a href="/#/shop">Explore More</a></button>
          </div>
          <div className="bg-room bg-contain bg-no-repeat bg-center h-[630px]"></div>
          <div className="bg-room1 bg-contain bg-no-repeat  bg-center h-[630px]"></div>
        
        </div>
      </div>
    </section>
  );
};

export default Section;

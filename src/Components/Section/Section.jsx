import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Inspirations from '/images/living.png'; // Adjust this path based on your setup

const Section = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="-bg--clr-primar-light py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">50+ Beautiful rooms inspiration</h2>
            <p className="text-gray-600 mb-6">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded">Explore More</button>
          </div>
          <div className="bg-room bg-cover bg-center h-[630px]"></div>
          <div className="bg-room1 bg-contain bg-no-repeat  bg-center h-[630px]"></div>
        
        </div>
      </div>
    </section>
  );
};

export default Section;

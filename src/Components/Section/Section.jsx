import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../slider/Slider1";

const Section = () => {
  return (
    <section className="py-12 md:py-20 -bg--clr-primar-light font-[poppins]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-3 justify-center items-center">
          <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
              <h2
                className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Simple Designs for{" "}
                <span className="-text--clr-primary">Complex</span> Buildings
              </h2>
              <p
                className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".9s"
              >
                Our designer already made a lot of beautiful prototype of rooms that inspire you
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap">
            <div className="relative w-full">
              <div
                className="carausel-2-columns slick-carausel"
                id="carausel-2-columns-1"
              >
                <Slider1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;



    // <section className="-bg--clr-primar-light py-12 font-[poppins] mb-12">
    //   <div className="container mx-auto">
    //     <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
    //       <div className="flex flex-col justify-center items-center lg:items-start p-6">
    //         <h2 className="text-4xl font-bold mb-4">50+ Beautiful rooms inspiration</h2>
    //         <p className="text-gray-600 mb-6">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
    //         <button className="-bg--clr-primary text-white px-4 py-2 rounded w-44"><a href="/#/shop">Explore More</a></button>
    //       </div>
    //       <div className="bg-room bg-contain bg-no-repeat bg-center h-[630px]"></div>
    //       <div className="bg-room1 bg-contain bg-no-repeat  bg-center h-[630px]"></div>
        
    //     </div>
    //   </div>
    // </section>
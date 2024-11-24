import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const SliderLoading = () => {
  return (
    <div className="px-4">
      <Swiper
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-200 shadow-custom rounded-xl overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300 mb-4"></div>{" "}
                {/* Image placeholder */}
                <div className="px-3 py-2">
                  <div className="h-5 bg-gray-300 w-3/4 mb-2"></div>{" "}
                  {/* Title */}
                  <div className="h-4 bg-gray-300 w-1/2 mb-4"></div>{" "}
                  {/* Price */}
                  <div className="h-8 bg-gray-300 w-1/3 rounded"></div>{" "}
                  {/* Button */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SliderLoading;

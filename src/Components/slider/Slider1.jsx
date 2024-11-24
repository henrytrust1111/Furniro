import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation]);
import UseQueryCustomHook from "../../hooks/UseQueryCustomHook";
import SliderLoading from "./SliderLoading";

const Slider1 = () => {
  // const product = JSON.parse(localStorage.getItem("products"));
  const { data, isLoading } = UseQueryCustomHook();

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  if (isLoading) return <SliderLoading />;

  return (
    <>
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
        {data?.map((product) => (
          <SwiperSlide key={product?._id}>
            <div className="px-3 pb-5">
              <div className="card-slider group">
                <img
                  className="rounded-xl h-64 w-full"
                  src={product?.images[0].url}
                  alt="Monst"
                />
                {/* <img className="rounded-xl" src="/images/room.png" alt="Monst" /> */}
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="mt-5 text-xl font-semibold group-hover:-text--clr-primary">
                      <Link href="/services" legacyBehavior>
                        <a className="text-xs leading-[0.5px]">
                          {product?.description}
                        </a>
                      </Link>
                    </h1>
                    <p className="mt-2 text-xs text-gray-500">
                      {" "}
                      {/* ₦{product?.price} */}₦
                      {formatNumber(product?.discountedGeneralPrice)}
                    </p>
                  </div>
                  <div>
                    <Link to={`/single-product/${product?._id}`} legacyBehavior>
                      <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs -text--clr-primary font-semibold leading-none border  hover:-border--clr-primary hover:text-white hover:-bg--clr-primary rounded">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div id="carausel-2-columns-1-arrows" className="flex">
        <span className="mr-4 -text--clr-primary flex slick-arrow custom_prev">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </span>
        <span className="-text--clr-primary flex slick-arrow custom_next">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

export default Slider1;

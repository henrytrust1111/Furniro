import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation]);
import UseQueryCustomHook from "../../hooks/UseQueryCustomHook";
// import syltherine from "/images/products/syltherine.png";
// import lolito from "/images/products/lolito.png";
// import leviosa from "/images/products/leviosa.png";
// import respira from "/images/products/respira.png";
// import grifo from "/images/products/grifo.png";
// import muggo from "/images/products/muggo.png";
// import pingky from "/images/products/pingky.png";
// import potty from "/images/products/potty.png";

// const products = [
//     { id: 1, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
//     { id: 2, new:'New', name: 'Leviosa', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '', image: leviosa, des: "Stylish cafe chair" },
//     { id: 3, new:'', name: 'Lolito', price: 'Rp 7.000.000', deprecated: 'Rp 14.000.000', discount: '-50%', image: lolito, des: "Luxury big sofa" },
//     { id: 4, new:'New', name: 'respira', price: 'Rp 500.000', deprecated: '', discount: '', image: respira, des: "Outdoor bar table and stool" },
//     { id: 5, new:'', name: 'grifo', price: 'Rp 1.500.000', deprecated: '', discount: '', image: grifo, des: "Night lamp" },
//     { id: 6, new:'New', name: 'muggo', price: 'Rp 150.000', deprecated: '', discount: '', image: muggo, des: "small mug" },
//     { id: 7, new:'', name: 'pingky', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-50%', image: pingky, des: "Cute bed sets" },
//     { id: 8, new:'New', name: 'potty', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '', image: potty, des: "Stylish cafe chair" },
//     // Add more products as needed
//   ];
const Slider1 = () => {
  // const product = JSON.parse(localStorage.getItem("products"));
  const {data} =
  UseQueryCustomHook();
console.log(data);

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
  };

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
                      {/* ₦{product?.price} */}
                      ₦{formatNumber(product?.discountedGeneralPrice)}
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

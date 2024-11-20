import React, { useState } from "react";
import image1 from "../ProductComparisonPage/imagess/image1.jpg";
import { IoStar } from "react-icons/io5";
import General from "./Generalcomparisonpage";
import Productcomparison from "./Productcomparison";
import Dimensioncomparison from "./Dimensioncomparison";
import Warrantycomparison from "./Warrantycomparison";
import { IoIosArrowDown } from "react-icons/io";
import ReuseableHero from "../../Components/ReuseableHero";
import { useParams } from "react-router-dom";

const ProductComparisonPage = () => {
  const [rating, setRating] = useState([1, 2, 3, 4, 5]);
  const [product, setProduct] = useState();
  const { productID } = useParams();

  return (
    <>
      <ReuseableHero page={"Product Comparison"} page1={"Comparison"} />
      <div className="container mx-auto">
        <div className="flex-col w-full hidden sm:!flex lg:!hidden mt-4">
          <div className="space-y-0 flex  gap-4">
            <h3 className="lg:text-lg font-medium font-[poppins] lg:w-40 text-left">
              Go to Product page for more Products
            </h3>
            <div className="relative space-x-2 ">
              <p className="text-[#727272] text-left cursor-pointer">
                View More
              </p>
              <div className="absolute h-px w-24 bg-[#727272] -left-2 bottom-0"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 lg:px-12 space-x-6 space-y-6 lg:space-y-0">
          {/* First Section */}
          <div className="flex flex-col items-center w-full sm:!hidden lg:!flex ">
            <div className="space-y-4">
              <h3 className="lg:text-lg font-medium font-[poppins] lg:w-40 text-left mt-2">
                Go to Product page for more Products
              </h3>
              <div className="relative space-x-2 ">
                <p className="text-[#727272] text-left cursor-pointer">
                  View More
                </p>
                <div className="absolute h-px w-24 bg-[#727272] -left-2 bottom-0"></div>
              </div>
            </div>
          </div>
          <div className="">
            <img src={image1} alt="" className="w-full rounded" />
            <div className="mt-5 space-y-1 text-left">
              <h3 className="text-lg font-semibold">Asgaard Sofa</h3>
              <p className="text-gray-500 font-medium text-sm">Rs.250.000.00</p>
              <div className="flex items-center space-x-1">
                <p className="text-sm font-semibold">4.7</p>
                {rating?.map((_e, i) => {
                  return (
                    <div className="" key={i}>
                      <IoStar className="text-yellow-500 w-3 h-3" />
                    </div>
                  );
                })}

                {/* veritical rule */}
                <div className="h-6 w-px -bg--clr-light-gray-v2"></div>

                {/* Replaced star image with IoStar */}
                <p className="-text--clr-light-gray-v2 text-sm">250 Reviews</p>
              </div>
            </div>
          </div>

          <div className="">
            <img src={image1} alt="" className="w-full rounded" />
            <div className="mt-5 space-y-1 text-left">
              <h3 className="text-lg font-semibold">Asgaard Sofa</h3>
              <p className="text-gray-500 font-medium text-sm">Rs.250.000.00</p>
              <div className="flex items-center space-x-1">
                <p className="text-sm font-semibold">4.7</p>
                {rating?.map((_e, i) => {
                  return (
                    <div className="" key={i}>
                      <IoStar className="text-yellow-500 w-3 h-3" />
                    </div>
                  );
                })}

                {/* veritical rule */}
                <div className="h-6 w-px -bg--clr-light-gray-v2"></div>

                {/* Replaced star image with IoStar */}
                <p className="-text--clr-light-gray-v2 text-sm">250 Reviews</p>
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="space-y-1 mt-4">
              <h3 className="text-lg font-semibold">Add A Product</h3>
              <button className="px-5 py-1 -bg--clr-primary text-white rounded-md hover:-bg--clr-primar-light-v1">
                Choose a product <IoIosArrowDown className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <General />
      <Productcomparison />
      <Dimensioncomparison />
      <Warrantycomparison /> */}
    </>
  );
};

export default ProductComparisonPage;

import React, { useState } from "react";
import Review from "./Review";
const ProductDescription = ({ name, mainDetails, weight }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <>
            <div className="w-full lg:px-20 text-sm flex flex-col gap-4 text-[#9F9F9F]">
              <div>Name: {name}</div>
              <div>{mainDetails}</div>
              <div>Weight: {weight}</div>
            </div>
          </>
        );
      case "additionalInfo":
        return (
          <>
            <div className="w-full lg:px-20  text-sm flex flex-col gap-4 text-[#9F9F9F]">
              <p className=" text-xs lg:text-sm text-[#9F9F9F] leading-relaxed">
                Here is some additional information about the product.
              </p>
            </div>
          </>
        );
      case "reviews":
        return (
          <>
            <div>
              <Review/>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full mt-14">
      <div className="w-full">
        <div className="flex flex-col gap-8 px-4 lg:px-24">
          <div className="w-full h-[0.8px] border-b"></div>
          <div className="flex justify-center gap-4 lg:gap-14">
            <div
              className={`p-4 lg:text-sm px-4 text-xs items-center cursor-pointer font-semibold ${
                activeTab === "description"
                  ? "border-[0.8px] -border--clr-primary -text--clr-primary rounded-lg font-semibold "
                  : "-text--clr-primary"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </div>
            <div
              className={`hidden lg:flex lg:text-sm px-4 text-xs items-center cursor-pointer font-semibold ${
                activeTab === "additionalInfo"
                  ? "border-[0.8px] -border--clr-primary -text--clr-primary rounded-lg"
                  : "-text--clr-primary"
              }`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Additional Information
            </div>
            <div
              className={`flex lg:hidden lg:text-sm px-4 text-xs items-center cursor-pointer font-semibold ${
                activeTab === "additionalInfo"
                  ? "border-[0.8px] -border--clr-primary -text--clr-primary rounded-lg"
                  : "-text--clr-primary"
              }`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              
            </div>
            {/* <div
              className={`p-4 flex lg:hidden tlg:text-sm px-4 text-xs items-center cursor-pointer font-semibold ${
                activeTab === "reviews"
                  ? "border-2 -border--clr-primary -text--clr-primary rounded-lg"
                  : "-text--clr-primary"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews &nbsp; &nbsp; &nbsp; [5]
            </div> */}
            <div
              className={`flex lg:text-sm px-4 text-xs items-center cursor-pointer font-semibold ${
                activeTab === "reviews"
                  ? "border-[0.8px] -border--clr-primary -text--clr-primary rounded-lg"
                  : "-text--clr-primary"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </div>
          </div>
          {renderContent()}
          <div className="flex justify-center">
            <img
              src="/Group 109.png"
              alt="Product"
              className="hidden lg:flex"
            />
            <img
              src="/Group 109.png"
              alt="Product"
              className="flex lg:hidden w-full"
            />
          </div>
          <div className="w-full h-[0.8px] border-b"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

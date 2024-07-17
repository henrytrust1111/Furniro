import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <>
            <p className="text-center text-xs lg:text-sm text-[#b7b7b7] leading-relaxed">
              Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes
              the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-center text-xs lg:text-sm text-[#b7b7b7] leading-relaxed">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar
              as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio
              which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue
              knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </>
        );
      case "additionalInfo":
        return (
          <>
            <p className="text-center text-xs lg:text-sm text-[#b7b7b7] leading-relaxed">
              Here is some additional information about the product.
            </p>
            {/* Add more content as needed */}
          </>
        );
      case "reviews":
        return (
          <>
            <p className="text-center text-xs lg:text-sm text-[#b7b7b7] leading-relaxed">
              Customer Reviews
            </p>
            <p className="text-center text-xs lg:text-sm text-[#b7b7b7] leading-relaxed">
              "This product is amazing!" - John Doe
            </p>
            <p className="text-center text-xs lg:text-sm text-[#b7b7b7] leading-relaxed">
              "Would buy again!" - Jane Smith
            </p>
            {/* Add more reviews as needed */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="mt-10 w-full h-screen">
      <div className="w-full h-[0.8px]">
        <div className="flex flex-col gap-8 px-4 lg:px-24">
          <div className="flex justify-center gap-4 lg:gap-14">
            <div
              className={`p-4 text-xs lg:text-sm cursor-pointer ${activeTab === "description" ? "text-[#000000]" : "text-[#242424]"}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </div>
            <div
              className={`hidden lg:flex p-4 text-xs lg:text-sm cursor-pointer ${activeTab === "additionalInfo" ? "text-[#000000]" : "text-[#242424]"}`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Additional Information
            </div>
            <div
              className={`flex lg:hidden p-4 text-xs lg:text-sm cursor-pointer ${activeTab === "additionalInfo" ? "text-[#000000]" : "text-[#242424]"}`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Additional Info
            </div>
            <div
              className={`p-4 text-xs lg:text-sm cursor-pointer ${activeTab === "reviews" ? "text-[#000000]" : "text-[#242424]"}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews [5]
            </div>
          </div>
          {renderContent()}
          <div className="flex justify-center">
            <img src="public/Group 109.png" alt="Product" className="hidden lg:flex"/>
            <img src="public/Group 109.png" alt="Product" className="flex lg:hidden w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

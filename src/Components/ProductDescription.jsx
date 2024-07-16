import React from "react";

const ProductDescription = () => {
  return (
    <section className="mt-10 w-full h-screen">
      <div className="w-full h-[0.8px] border-b">
        <div className="flex flex-col gap-8 px-4 lg:px-24">
          <div className="flex justify-center gap-4 lg:gap-14">
            <div className="p-4 text-xs lg:text-sm cursor-pointer text-[#242424]">Description</div>
            <div className="hidden lg:flex text-[#242424] p-4 text-xs lg:text-sm  cursor-pointer">Additional Information</div>
            <div className="flex lg:hidden text-[#242424] p-4 text-xs lg:text-sm  cursor-pointer">Additional Info</div>
            <div className="text-[#242424] p-4 text-xs lg:text-sm  cursor-pointer">Reviews [5]</div>
          </div>
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
          <div className="flex justify-center">
            <img src="/Group 109.png" alt="Product" className="hidden lg:flex"/>
            <img src="/Group 109.png" alt="Product" className="flex lg:hidden w-full max-w-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

import React from "react";
import grid1 from "/images/grid1.png";
import grid2 from "/images/grid2.png";
import grid3 from "/images/grid3.png";
import grid4 from "/images/grid4.png";
import grid5 from "/images/grid5.png";
import grid6 from "/images/grid6.png";
import grid7 from "/images/grid7.png";
import grid8 from "/images/grid8.png";
import grid9 from "/images/grid9.png";

const GridImages = () => {
  return (
    <>
    <section className="max-h-screen my-28 font-[poppins]">
      <div className="text-center mb-8">
        <p className="font-semibold"> Share your setup with</p>
        <h1 className="font-bold text-[2rem] -text--clr-secondary">#FurniroFurniture</h1>
      </div>
    <div className="grid grid-cols-9 grid-rows-4 gap-4 h-[400px] lg:h-screen">
        <div className="row-start-1 col-start-1 row-end-3 col-end-4">
          <img src={grid1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-4 col-end-7">
          <img src={grid2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-7 col-end-10">
          <img src={grid3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-1 col-end-4 row-start-3 row-end-5">
          <img src={grid4} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-4 col-end-6 row-start-2 row-end-4">
          <img src={grid5} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-6 col-end-8 row-start-2 row-end-4">
          <img src={grid6} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-8 col-end-10 row-start-2 row-end-5">
          <img src={grid7} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-start-4 col-end-7 row-start-4 row-end-5">
          <img src={grid8} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="">
          <img src={grid9} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
    </>
  );
};

export default GridImages;

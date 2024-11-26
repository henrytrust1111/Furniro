const General = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 lg:grid-cols-4 border-t-2 mt-11">
{/* col 1 */}

        <div className="grid grid-rows-7 gap-4 border-r-2">
         <p className="row-start-1 col-start-1 row-end-1 col-end-1 font-medium text-2xl"> General</p>
         <p className="col-start-1 col-end-1 row-start-2 row-end-2 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full">Sales Package</p>
         <p className="col-start-1 col-end-1 row-start-3 row-end-3 text-xs md:text-sm lg:text-base break-words w-20">Model Number</p>
         <p className="col-start-1 col-end-1 row-start-4 row-end-4 text-xs md:text-sm lg:text-base break-words w-20">Secondary Materials</p>
         <p className="col-start-1 col-end-1 row-start-5 row-end-5 text-xs md:text-sm lg:text-base break-words w-20">Configuration</p>
         <p className="col-start-1 col-end-1 row-start-6 row-end-6 text-xs md:text-sm lg:text-base break-words w-20">Upholstery Material</p>
         <p className="col-start-1 col-end-1 row-start-7 row-end-7 text-xs md:text-sm lg:text-base break-words w-20">Upholstery Color</p>
        </div>


                   {/* col 2 */}
       <div className="grid grid-rows-7 border-r-2">
        <p className="col-start-2 col-end-2 row-start-2 row-end-2 text-xs md:text-sm lg:text-base">1 sectional sofa</p>
        <p className="col-start-2 col-end-2 row-start-3 row-end-3 text-xs md:text-sm lg:text-base break-words w-20">TFCBLIGRBL6SRHS</p>
        <p className="col-start-2 col-end-2 row-start-4 row-end-4 text-xs md:text-sm lg:text-base break-words w-20">Solid Wood</p>
        <p className="col-start-2 col-end-2 row-start-5 row-end-5 text-xs md:text-sm lg:text-base break-words w-20">L-shaped</p>
        <p className="col-start-2 col-end-2 row-start-6 row-end-6 text-xs md:text-sm lg:text-base break-words w-20">Fabric + Cotton</p>
        <p className="col-start-2 col-end-2 row-start-7 row-end-7 text-xs md:text-sm lg:text-base break-words w-20">Bright Grey & Lion</p>
       </div>

        {/* col 3 */}

        <div className="grid grid-rows-7 border-r-2">
        <p className="col-start-3 col-end-3 row-start-2 row-end-2 text-xs md:text-sm lg:text-base break-words w-20">1 Three Seater, 2 Single Seater</p>
        <p className="col-start-3 col-end-3 row-start-3 row-end-3 text-xs md:text-sm lg:text-base break-words w-20">DTUBLIGRBL568</p>
        <p className="col-start-3 col-end-3 row-start-4 row-end-4 text-xs md:text-sm lg:text-base break-words w-20">Solid Wood</p>
        <p className="col-start-3 col-end-3 row-start-5 row-end-5 text-xs md:text-sm lg:text-base break-words w-20">L-shaped</p>
        <p className="col-start-3 col-end-3 row-start-6 row-end-6 text-xs md:text-sm lg:text-base break-words w-20">Fabric + Cotton</p>
        <p className="col-start-3 col-end-3 row-start-7 row-end-7 text-xs md:text-sm lg:text-base break-words w-20">Bright Grey & Lion</p>
        </div>

        {/* col 4 */}

        <div className="lg:grid grid-rows-7 hidden lg:invisible">
        <p className="col-start-4 col-end-4 row-start-2 row-end-2">1 Three Seater, 2 Single Seater</p>
        <p className="col-start-4 col-end-4 row-start-3 row-end-3">DTUBLIGRBL568</p>
        <p className="col-start-4 col-end-4 row-start-4 row-end-4">Solid Wood</p>
        <p className="col-start-4 col-end-4 row-start-5 row-end-5">L-shaped</p>
        <p className="col-start-4 col-end-4 row-start-6 row-end-6">Fabric + Cotton</p>
        <p className="col-start-4 col-end-4 row-start-7 row-end-7">Bright Grey & Lion</p>
        </div>
      </div>
    </>
  );
};

export default General;

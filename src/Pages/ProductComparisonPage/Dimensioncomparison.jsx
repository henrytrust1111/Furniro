const Dimensioncomparison = () => {
    return (
      <>
        <div className="container mx-auto grid grid-cols-3 lg:grid-cols-4 ">
  {/* col 1 */}
  
          <div className="grid grid-rows-7 gap-4 border-r-2">
           <p className="row-start-1 col-start-1 row-end-1 col-end-1 font-medium text-2xl "></p>
           <p className="row-start-2 col-start-1 row-end-2 col-end-1 font-medium text-2xl "> Dimension</p>
           <p className="col-start-1 col-end-1 row-start-3 row-end-3 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full">Width</p>
           <p className="col-start-1 col-end-1 row-start-4 row-end-4 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full">Height</p>
           <p className="col-start-1 col-end-1 row-start-5 row-end-5 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full">Depth</p>
           <p className="col-start-1 col-end-1 row-start-6 row-end-6 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full">Weight</p>
           <p className="col-start-1 col-end-1 row-start-7 row-end-7 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full">Seat Height</p>
           <p className="col-start-1 col-end-1 row-start-8 row-end-8 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full">Leg Height</p>
          </div>
                     {/* col 2 */}
         <div className="grid grid-rows-7 border-r-2">
          <p className="col-start-2 col-end-2 row-start-2 row-end-2 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16"></p>
          <p className="col-start-2 col-end-2 row-start-3 row-end-3 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">265.32 cm</p>
          <p className="col-start-2 col-end-2 row-start-4 row-end-4 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">76cm</p>
          <p className="col-start-2 col-end-2 row-start-5 row-end-5 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">167.76 cm</p>
          <p className="col-start-2 col-end-2 row-start-6 row-end-6 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">45 KG</p>
          <p className="col-start-2 col-end-2 row-start-7 row-end-7 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">41.52 cm</p>
          <p className="col-start-2 col-end-2 row-start-8 row-end-8 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">5.46 cm </p>
         </div>
  
          {/* col 3 */}
  
          <div className="grid grid-rows-7 border-r-2">
          <p className="col-start-3 col-end-3 row-start-2 row-end-2 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16"></p>
          <p className="col-start-3 col-end-3 row-start-3 row-end-3 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">265.32 cm</p>
          <p className="col-start-3 col-end-3 row-start-4 row-end-4 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">76 cm</p>
          <p className="col-start-3 col-end-3 row-start-5 row-end-5 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">Yes</p>
          <p className="col-start-3 col-end-3 row-start-6 row-end-6 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">65 KG</p>
          <p className="col-start-3 col-end-3 row-start-7 row-end-7 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">41.52 cm</p>
          <p className="col-start-3 col-end-3 row-start-8 row-end-8 text-xs md:text-sm lg:text-base break-words w-20 sm:w-full h-16">5.46 cm</p>
          </div>
  
          {/* col 4 */}
  
          <div className="lg:grid grid-rows-7 hidden lg:invisible">
          <p className="col-start-4 col-end-4 row-start-2 row-end-2 h-16">1 Three Seater, 2 Single Seater</p>
          <p className="col-start-4 col-end-4 row-start-3 row-end-3 h-16">1 Three Seater, 2 Single Seater</p>
          <p className="col-start-4 col-end-4 row-start-4 row-end-4 h-16">DTUBLIGRBL568</p>
          <p className="col-start-4 col-end-4 row-start-5 row-end-5 h-16">Solid Wood</p>
          <p className="col-start-4 col-end-4 row-start-6 row-end-6 h-16">L-shaped</p>
          <p className="col-start-4 col-end-4 row-start-7 row-end-7 h-16">Fabric + Cotton</p>
          {/* <p className="col-start-4 col-end-4 row-start-7 row-end-7 h-16">Bright Grey & Lion</p> */}
          </div>
        </div>
      </>
    );
  };
  
  export default Dimensioncomparison;
  
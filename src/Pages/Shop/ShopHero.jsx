import React from "react";
import ReuseableHero from "../../Components/ReuseableHero";

const ShopHero = () => {
  return (
    // <section className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{backgroundImage: "url('/Rectangle 1.png')"}}>
    //   {/* White overlay */}
    //   <div className="absolute inset-0 bg-grey opacity-1"></div>

    //   {/* Content */}
    //   <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
    //     <h1 className="text-4xl font-bold mb-4">Shop</h1>
    //     <a href='/' className="text-2xl">Home</a>
    //   </div>
    // </section>
    <ReuseableHero page={"Shop"} />
  );
};

export default ShopHero;

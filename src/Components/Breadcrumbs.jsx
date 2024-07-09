import React from "react";

const Breadcrumbs = () => {
  return (
    <section className="w-full h-14 bg-[#F9F1E7] flex gap-4 items-center pl-4 lg:pl-24">
      <div className="flex items-center">
        <a href="/" className="text-gray-600 hover:text-gray-900 flex items-center justify-center text-sm">Home</a>
        <i class='bx bx-chevron-right flex items-center mt-[1px]'></i>
      </div>
      <div className="flex items-center">
        <a href="/" className="text-gray-600 hover:text-gray-900 flex items-center justify-center text-sm">Shop</a>
        <i class='bx bx-chevron-right flex items-center mt-[1px]'></i>
      </div>
      <div>
        <div className="w-[1px] h-[18px] bg-[#141414]"></div>
      </div>
      <p className="text-xs">Asgaard Sofa</p>
    </section>
  );
};

export default Breadcrumbs;

import React from "react";
const Maincart = () => {
    return (
      <>
        <div className="mb-14 mt-14">
            <div className="w-full px-32 flex gap-14">
                <div className="w-[60%] flex flex-col gap-6">
                    <div className="w-full h-14 bg-[#F9F1E7] flex justify-center gap-14 text-sm items-center ">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    <div className="gap-10 flex items-center">
                        <div className="w-28 h-28 rounded-lg bg-[#F9F1E7]">
                            <img
                            src=""
                            className="object-cover h-full"
                            alt="Asgard Sofa"
                            />
                        </div>
                        <p className="text-[#9F9F9F] text-sm">Asgard Sofa</p>
                        <p className="text-[#9F9F9F] text-sm">Rs.250,000.00</p>
                        <p className="w-6 h-6 rounded-sm border-[0.5px] flex items-center justify-center text-sm border-[#9F9F9F] text-[#000000]">1</p>
                        <p className="text-[#000000] text-sm">Rs.250,000.00</p>
                        <p><img src="/ant-design_delete-filled.png" alt="" /></p>
                    </div>
                </div>
                <div className="w-[23%] h-60 bg-[#F9F1E7] flex flex-col items-center gap-8 py-4 ">
                    <p className="text-[#000000]">Cart Totals</p>
                    <div className="flex items-center gap-6">
                        <p className="text-sm">Subtotal</p>
                        <p className="text-xs">Rs.250,000.00</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="text-sm">Total</p>
                        <p className="text-sm -text--clr-primary">Rs.250,000.00</p>
                    </div>
                    <button className="text-[#000000] px-3 py-2 rounded-lg border-[0.5px] text-sm border-[#000000]">Check Out</button>
                </div>
            </div>
            <div></div>
        </div>
      </>
    );
  };
  
  export default Maincart;
  
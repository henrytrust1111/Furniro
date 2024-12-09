import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Maincart = () => {
  const product = useSelector((state) => state?.persistedReducer?.cart);
  console.log(product);

  return <></>;
};

export default Maincart;


{/* <div className="w-full mb-14 mt-14">
<div className="w-full lg:!px-32 px-8 flex flex-col lg:flex-row gap-14">
  <div className="flex flex-col gap-6 lg:hidden">
    <div className="flex items-center gap-2">
      <div>Product:</div>
      <p className="text-[#9F9F9F] text-sm">{product[0]?.itemName}</p>
    </div>
    <div className="flex items-center gap-4">
      <div>Price:</div>
      <p className="text-[#9F9F9F] text-sm">Rs.250,000.00</p>
    </div>
    <div className="flex items-center gap-4">
      <div>Quantity:</div>
      <p className="w-6 h-6 rounded-sm border-[0.5px] flex items-center justify-center text-sm border-[#9F9F9F] text-[#000000]">
        1
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div>Subtotal:</div>
      <p className="text-[#000000] text-sm">Rs.250,000.00</p>
    </div>
  </div>
  <div className=" lg:w-[60%] hidden lg:flex flex-col gap-6">
    <div className="w-full h-14 bg-[#F9F1E7] flex justify-center gap-14 text-sm items-center ">
      <p>Product</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
    </div>
    <div className="gap-10 flex items-center">
      <div className="w-28 h-28 rounded-lg bg-[#F9F1E7]">
        <img
          src={product[0]?.images}
          className="object-cover h-full"
          alt="Asgard Sofa"
        />
      </div>
      {product.length > 0 && (
        <p className="text-xs">{product[0].itemName}</p>
      )}
      <p className="text-[#9F9F9F] text-sm">Rs.250,000.00</p>
      <p className="w-6 h-6 rounded-sm border-[0.5px] flex items-center justify-center text-sm border-[#9F9F9F] text-[#000000]">
        1
      </p>
      <p className="text-[#000000] text-sm">Rs.250,000.00</p>
      <p>
        <img src="/ant-design_delete-filled.png" alt="" />
      </p>
    </div>
  </div>
  <div className="lg:w-[23%] h-60 bg-[#F9F1E7] flex flex-col items-center gap-8 py-4 ">
    <p className="text-[#000000]">Cart Totals</p>
    <div className="flex items-center gap-6">
      <p className="text-sm">Subtotal</p>
      <p className="text-xs">Rs.250,000.00</p>
    </div>
    <div className="flex items-center gap-6">
      <p className="text-sm">Total</p>
      <p className="text-sm -text--clr-primary">Rs.250,000.00</p>
    </div>
    <button className="text-[#000000] px-3 py-2 rounded-lg border-[0.5px] text-sm border-[#000000]">
      Check Out
    </button>
  </div>
</div>
<div></div>
</div> */}

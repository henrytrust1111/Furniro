import React from "react";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const Maincart = () => {
  const products = useSelector((state) => state?.persistedReducer?.cart);
  console.log(products);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <div className="p-6 md:p-10 lg:p-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Product Details Section */}
        <div className="lg:col-span-2 h-64 overflow-auto scrollbar-custom">
          <table className="w-full text-left border-collapse">
            <thead className="sticky w-full">
              <tr className="-bg--clr-primar-light-v3 text-gray-700">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src={item?.images[0].url}
                      alt={item?.itemName}
                      className="w-16 h-16 object-cover rounded-lg bg-beige-light"
                    />
                    <span className="ml-4 text-gray-700">{item?.name}</span>
                  </td>
                  <td className="p-4 text-gray-500">
                    ₦ {formatNumber(item?.price)}
                  </td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-12 px-2 py-1 border rounded-md"
                    />
                  </td>
                  <td className="p-4 text-gray-500">
                    ₦ {formatNumber(item?.price * item?.quantity)}
                  </td>
                  <td className="p-4 text-center text-gold cursor-pointer">
                    <FaTrashAlt className="-text--clr-primary" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="-bg--clr-primar-light-v3 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Cart Totals</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-700">
              ₦{" "}
              {products?.reduce(
                (acc, item) => acc + item?.price * item?.quantity,
                0
              )}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-gray-800">Total</span>
            <span className="text-lg font-bold text-gold">
              ₦{" "}
              {products?.reduce(
                (acc, item) => acc + item?.price * item?.quantity,
                0
              )}
            </span>
          </div>
          <button className="w-full py-3 text-white bg-gold rounded-lg hover:bg-gold-dark transition">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maincart;

{
  /* <div className="w-full mb-14 mt-14">
<div className="w-full lg:!px-32 px-8 flex flex-col lg:flex-row gap-14">
  <div className="flex flex-col gap-6 lg:hidden">
    <div className="flex items-center gap-2">
      <div>Product:</div>
      <p className="text-[#9F9F9F] text-sm">{product[0]?.itemName}</p>
    </div>
    <div className="flex items-center gap-4">
      <div>Price:</div>
      <p className="text-[#9F9F9F] text-sm">₦250,000.00</p>
    </div>
    <div className="flex items-center gap-4">
      <div>Quantity:</div>
      <p className="w-6 h-6 rounded-sm border-[0.5px] flex items-center justify-center text-sm border-[#9F9F9F] text-[#000000]">
        1
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div>Subtotal:</div>
      <p className="text-[#000000] text-sm">₦250,000.00</p>
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
      <p className="text-[#9F9F9F] text-sm">₦250,000.00</p>
      <p className="w-6 h-6 rounded-sm border-[0.5px] flex items-center justify-center text-sm border-[#9F9F9F] text-[#000000]">
        1
      </p>
      <p className="text-[#000000] text-sm">₦250,000.00</p>
      <p>
        <img src="/ant-design_delete-filled.png" alt="" />
      </p>
    </div>
  </div>
  <div className="lg:w-[23%] h-60 bg-[#F9F1E7] flex flex-col items-center gap-8 py-4 ">
    <p className="text-[#000000]">Cart Totals</p>
    <div className="flex items-center gap-6">
      <p className="text-sm">Subtotal</p>
      <p className="text-xs">₦250,000.00</p>
    </div>
    <div className="flex items-center gap-6">
      <p className="text-sm">Total</p>
      <p className="text-sm -text--clr-primary">₦250,000.00</p>
    </div>
    <button className="text-[#000000] px-3 py-2 rounded-lg border-[0.5px] text-sm border-[#000000]">
      Check Out
    </button>
  </div>
</div>
<div></div>
</div> */
}

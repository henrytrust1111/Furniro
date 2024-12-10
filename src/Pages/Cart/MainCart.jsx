import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const Maincart = () => {
  const products = useSelector((state) => state?.persistedReducer?.cart);
  const tableRef = useRef(null); // Reference for the main table
  const cloneRef = useRef(null); // Reference for the clone table

  // Format number function
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  // Scroll function
  useEffect(() => {
    const tableElement = tableRef.current; // Get the actual DOM element from ref

    if (!tableElement) return; // Ensure the element exists

    const handleScroll = () => {
      console.log('Table scrollY:', tableElement.scrollTop); // Log the current scroll position
    };

    tableElement.addEventListener('scroll', handleScroll); // Attach scroll event

    // Clean up to avoid memory leaks
    return () => {
      tableElement.removeEventListener('scroll', handleScroll);
    };
    
  }, []);


  return (
    <div className="container p-6 md:p-10 lg:p-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Product Details Section */}
        <div
          id="table-container"
          ref={tableRef}
          className="lg:col-span-2 h-64 overflow-auto scrollbar-custom"
        >
          <table
            id="maintable"
            className="min-w-full text-left border-collapse"
          >
            <thead className="bg-green-600 z-0">
              <tr className="-bg--clr-primar-light-v3 text-gray-700">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {products?.products?.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src={item?.productImage[0].url}
                      // src={"https://lazesoftware.com/img/en/tool/dummyimg/default_480x320.png"}
                      alt={""}
                      className="w-16 h-16 object-cover rounded-lg bg-beige-light"
                    />
                    <span className="ml-4 text-gray-700">
                      {item?.productName}
                    </span>
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
                    ₦ {formatNumber(item?.sub_total)}
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Cart Totals
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-700">
              ₦{" "}
              {products?.products.reduce(
                (acc, item) => acc + item?.price * item?.quantity,
                0
              )}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-gray-800">Total</span>
            <span className="text-lg font-bold text-gold -text--clr-primary">
              ₦{" "}
              {products?.products?.reduce(
                (acc, item) => acc + item?.price * item?.quantity,
                0
              )}
            </span>
          </div>
          <button className="w-full py-3 text-black border -border--clr-secondary rounded-lg transition">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maincart;

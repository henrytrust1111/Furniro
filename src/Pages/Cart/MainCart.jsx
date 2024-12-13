import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { MyContext } from "../../context/Context";
import { useRemoveFromCart } from "../../hooks/UseQueryCustomHook";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cart } from "../../Global/Features";
import { useNavigate } from "react-router-dom";
import logo from "/icons/logo.svg";
import CartTotalLoading from "./CartTotalLoading";

const onSuccess = (data) => {
  toast.success(data?.data?.message);
};
const Maincart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.persistedReducer?.cart);

  const navigate = useNavigate();

  const tableRef = useRef(null);
  const { isLoadingCart } = useContext(MyContext);
  const { mutate: RemoveFromCart } = useRemoveFromCart(onSuccess);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useLayoutEffect(() => {
    if (!token) {
      toast.error("Please login to view your cart");
      navigate(-1);
    }
  }, [token, navigate]);

  const handleRemoveFromCart = (product) => {
    if (!userId) {
      toast.error("please login to continue");
    }
    const productId = product.productId;
    const size = [];
    const reqBody = { userId, productId, size };

    const updatedCart = products?.products.filter(
      (item) => item.productId !== productId
    );

    dispatch(Cart({ products: updatedCart }));

    // return RemoveFromCart(reqBody);

    RemoveFromCart(reqBody, {
      onError: () => {
        toast.error("Failed to remove item from the cart.");
        dispatch(Cart({ products: [...updatedCart, product] }));
      },
    });
  };

  // Format number function
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <div className="container p-6 md:p-10 lg:p-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Product Details Section */}
        <div
          id="table-container"
          ref={tableRef}
          className="lg:col-span-2 h-96 overflow-auto scrollbar-custom"
        >
          <table
            id="maintable"
            className="min-w-full text-left border-collapse"
          >
            <thead className="bg-green-600 z-0">
              <tr className="-bg--clr-primar-light-v3 text-gray-700 sticky top-0 z-10">
                <th className="p-4 sticky top-0">Product</th>
                <th className="p-4 sticky top-0">Price</th>
                <th className="p-4 sticky top-0">Quantity</th>
                <th className="p-4 sticky top-0">Subtotal</th>
                <th className="p-4 sticky top-0"></th>
              </tr>
            </thead>
            <tbody className="">
              {isLoadingCart && !products ? (
                <section className="py-16 font-[poppins]">
                  <div className="container mx-auto px-4 text-center -text--clr-primary flex items-center justify-center">
                    <img src={logo} alt="" className="mr-2 animate-spin " />
                    <p className="text-lg font-semibold">Loading...</p>
                  </div>
                </section>
              ) : products?.products?.length === 0 ? (
                <div className="">cart is empty </div>
              ) : (
                products?.products?.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 flex items-center w-[200px] md:w-full">
                      <img
                        src={item?.productImage[0].url}
                        // src={"https://lazesoftware.com/img/en/tool/dummyimg/default_480x320.png"}
                        alt={""}
                        className="w-16 h-16 object-cover rounded-lg bg-beige-light"
                      />
                      <span className="ml-4 text-gray-700 break-words break-all w-full">
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
                      <FaTrashAlt
                        className="-text--clr-primary"
                        onClick={() => handleRemoveFromCart(item)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        {isLoadingCart && !products ? (
          <CartTotalLoading />
        ) : (
          <div className="-bg--clr-primar-light-v3 h-96 p-6 rounded-lg shadow-md flex justify-center">
            <div className="w-[85%] space-y-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Cart Totals
              </h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-700">
                  ₦{" "}
                  {products?.products?.reduce(
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
              <div className="w-full flex justify-center">
                {products?.products?.length === 0 ? (
                  <button className="w-[80%]  py-3 text-black border -border--clr-secondary rounded-lg transition"></button>
                ) : (
                  <button className="w-[80%]  py-3 text-black border -border--clr-secondary rounded-lg transition">
                    Check Out
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Maincart;

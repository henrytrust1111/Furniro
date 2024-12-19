import React, { useState, useEffect, useContext } from "react";
import { IoMdCart, IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "/icons/logo.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiRefresh } from "react-icons/bi";
import { useAddToCart } from "../hooks/UseQueryCustomHook";
import { useSelector } from "react-redux";
import { MyContext } from "../context/Context";

const Products = ({ Title }) => {
  const { isLoading, noProducts, refetch, error, refetchCart } =
    useContext(MyContext);
  // const [addedToCart, setAddedToCart] = useState();

  const data = useSelector((state) => state?.persistedReducer?.products);
  const cart = useSelector((state) => state?.persistedReducer?.cart);
  console.log(cart?.products);

  const [visibleProducts, setVisibleProducts] = useState(4);
  const nav = useNavigate();
  const onSuccess = (data) => {
    toast.success(data?.data?.message);
    refetchCart();
  };
  const { mutate: AddToCart } = useAddToCart(onSuccess);
  const userId = localStorage.getItem("userId");

  const handleAddToCart = (product) => {
    if (!userId) {
      toast.error("Please login to add to cart");
      return;
    }

    const isProductInCart = cart?.products?.some(
      (item) => item.productId === product._id
    );

    if (isProductInCart) {
      toast.info("This item is already in your cart!");
    } else {
      const productId = product._id;
      const size = product.sizes;
      const reqBody = { userId, productId, size };
      AddToCart(reqBody);
    }
  };

  const showMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  const handlePreview = (id) => {
    nav(`/single-product/${id}`);
  };

  const handleCompare = (product) => {
    const cat = data?.map((prod) =>
      prod.category.categoryName === product.category.categoryName ? prod : null
    );
    return nav(`/comparison/${product._id}`, { state: { product } });
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  if (isLoading || !data) {
    return (
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center -text--clr-primary flex items-center justify-center">
          <img src={logo} alt="" className="mr-2 animate-spin " />
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center grid place-items-center">
          <p className="text-lg font-semibold text-red-500">Network Error</p>
          <button
            onClick={refetch}
            className="mt-4 -bg--clr-primar-light-v1 text--clr-primary px-4 py-2 border border--clr-primary flex items-center gap-2 hover:scale-110 font-semibold"
          >
            <BiRefresh size={20} />
            Refresh
          </button>
        </div>
      </section>
    );
  }

  if (noProducts) {
    return (
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">No Products Available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 font-[poppins]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8 text-center">{Title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 lg:px-11 md:px-0 ">
          {data?.slice(0, visibleProducts).map((product, index) => {
            const isProductInCart = cart?.products?.some(
              (item) => item?.productId === product?._id
            );
            return (
              <div key={index} className="bg-[#F4F5F7] shadow-custom relative">
                <img
                  src={product?.images[0].url}
                  alt={product?.itemName}
                  className="mb-4 w-full h-72 object-cover "
                />
                <div className="px-3 mb-5 flex flex-col gap-2">
                  <div className="w-full flex flex-col items-start ">
                    <h3 className="text-lg font-bold -text--clr-black-shade-v1 capitalize">
                      {product?.itemName}
                    </h3>
                    <p className="-text--clr-light-gray text-sm font-medium text-left">
                      {product?.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 justify-between">
                    {product?.price && (
                      <span className="-text--clr-black-shade-v1 font-semibold text-base">
                        ₦ {formatNumber(product?.discountedGeneralPrice)}
                      </span>
                    )}
                    <p className="text-xs">
                      ₦{" "}
                      <span className="line-through">
                        {formatNumber(product?.price)}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="-bg--clr-secondary absolute inset-0 opacity-0 hover:opacity-75  transition-all ease cursor-pointer grid place-items-center">
                  <div className="flex flex-col items-center space-y-2 justify-center max-w-full">
                    <button
                      className="bg-white -text--clr-primary px-4 py-2 mt-2 z-40 hover:scale-110 font-semibold"
                      onClick={() => handlePreview(product?._id)}
                    >
                      Preview
                    </button>
                    <div className="flex text-white gap-3 font-semibold max-w-full flex-wrap justify-center">
                      <div className="flex items-center gap-1 hover:-text--clr-primary text-base">
                        <IoMdShare className="text-base" />{" "}
                        <span className="text-base">Share</span>
                      </div>
                      <div
                        className="flex items-center gap-1 hover:-text--clr-primary text-base"
                        onClick={() => handleCompare(product)}
                      >
                        <MdCompareArrows className="text-base" />{" "}
                        <span className="text-base">Compare</span>
                      </div>
                      <div
                        onClick={() => handleAddToCart(product)}
                        className={`flex items-center gap-1 hover:-text--clr-primary text-base ${
                          isProductInCart ? "-text--clr-primary" : ""
                        }`}
                      >
                        <IoMdCart className="text-base" />{" "}
                        <span className={`text-base`}>Cart</span>
                      </div>
                    </div>
                  </div>
                </div>
                {product?.discountPercentage > 0 && (
                  <span className="text-white absolute bg-[#E97171] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4 text-base">
                    -{product?.discountPercentage}%
                  </span>
                )}
                {product.new && (
                  <span className="text-white absolute bg-[#2EC1AC] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4 text-base">
                    {product?.new}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <div
          onClick={showMoreProducts}
          className="bg-white -text--clr-primary px-4 py-2 z-40 font-semibold border -border--clr-primary mt-8 max-w-[300px] md:w-[300px] text-center justify-self-center cursor-pointer"
        >
          {/* {showAll ? "Show Less" : "Show More"} */}
          Load More
        </div>
      </div>
    </section>
  );
};




















export default Products;

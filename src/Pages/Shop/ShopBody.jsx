import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IoMdCart, IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ShopLoading from "./ShopLoading";
import "./ShopBody.css";
import "./ShopPagination.css";
import { useAddToCart } from "../../hooks/UseQueryCustomHook";
import { MyContext } from "../../context/Context";

const ShopPage = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="w-full h-[10%] flex items-center justify-center gap-5 mb-8 mt-16">
      <button
        onClick={handlePreviousPage}
        className="w-20 h-10 bg-[#faebd7] rounded-lg hover:cursor-pointer hover:bg-[#B88E2F] hover:text-white transition-colors duration-300"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`w-10 h-10 rounded-lg hover:cursor-pointer transition-colors duration-300 ${
            currentPage === number
              ? "bg-[#B88E2F] text-white"
              : "bg-[#faebd7] hover:bg-[#B88E2F] hover:text-white"
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="w-20 h-10 bg-[#faebd7] rounded-lg hover:cursor-pointer hover:bg-[#B88E2F] hover:text-white transition-colors duration-300"
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
};

const ShopBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shopproduct, setShopproduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("az");
  const [filterBy, setFilterBy] = useState("all");
  const [productsPerPage, setProductsPerPage] = useState(8);
  const { refetchCart } = useContext(MyContext);

  const onSuccess = (data) => {
    toast.success(data?.data?.message);
    refetchCart();
  };
  const { mutate: AddToCart } = useAddToCart(onSuccess);
  const userId = localStorage.getItem("userId");

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  useEffect(() => {
    const fetchuser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://funiro-furnitures.onrender.com/get-products`
        );
        setShopproduct(response.data.data);
        setFilteredProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        setLoading(false);
      }
    };
    fetchuser();
  }, []);

  useEffect(() => {
    let result = [...shopproduct];

    // Apply filter
    if (filterBy === "new") {
      result = result.filter((product) => product.label === "new");
    } else if (filterBy === "discount") {
      result = result.filter((product) => product.discountPercentage > 0);
    }

    // Apply sort
    if (sortBy === "az") {
      result.sort((a, b) => a.itemName.localeCompare(b.itemName));
    } else if (sortBy === "quantity") {
      result.sort((a, b) => a.quantity - b.quantity);
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [shopproduct, sortBy, filterBy]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nav = useNavigate();
  const handlePreview = (productId) => {
    nav(`/single-product/${productId}`);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleProductsPerPageChange = (event) => {
    setProductsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleCompare = (product) => {
    return nav(`/comparison/${product._id}`, { state: { product } });
  };

  const handleAddToCart = (product) => {
    if (!userId) {
      toast.error("please login to add to cart");
    }
    const productId = product._id;
    const size = product.sizes;
    const reqBody = { userId, productId, size };
    return AddToCart(reqBody);
  };

  if (loading) {
    return <ShopLoading />;
  }

  return (
    <>
      <div className="Pagnation">
        <div className="filter">
          <div className="filter-Left">
            <img src="/filter.png" alt="" />
            <h3>Filter by</h3>
            <select
              className="filter-dropdown"
              onChange={handleFilterChange}
              value={filterBy}
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="discount">Discount</option>
            </select>
            <div className="gridFilter">
              <img src="/grid.png" alt="" />
              <img src="/viewlist.png" alt="" />
            </div>
          </div>
          <div className="filter-Right">
            <h2>
              showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </h2>
          </div>
        </div>
        <div className="sort">
          <div className="sort-Left">
            <h3>Show</h3>
            <input
              type="number"
              className="showinput"
              value={productsPerPage}
              onChange={handleProductsPerPageChange}
              min="1"
            />
          </div>
          <div className="sort-Right">
            <h3>Sort by</h3>
            <select
              className="sort-dropdown"
              onChange={handleSortChange}
              value={sortBy}
            >
              <option value="az">A-Z</option>
              <option value="quantity">Quantity</option>
            </select>
          </div>
        </div>
      </div>
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 lg:px-11 md:px-0 ">
            {currentProducts.map((shopproduct) => (
              <div
                key={shopproduct._id}
                className="bg-[#F4F5F7] shadow-custom relative"
              >
                <img
                  src={shopproduct.images[0].url}
                  alt={shopproduct.name}
                  className="mb-4 w-full h-72 object-cover "
                />
                <div className="px-3 mb-5 flex flex-col gap-2">
                  <div className="w-full flex flex-col items-start ">
                    <h3 className="text-lg font-bold -text--clr-black-shade-v1 capitalize">
                      {shopproduct.itemName}
                    </h3>
                    <p className="-text--clr-light-gray text-sm font-medium text-left">
                      {shopproduct.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 justify-between">
                    {shopproduct.price && (
                      <span className="-text--clr-black-shade-v1 font-semibold">
                        ₦ {formatNumber(shopproduct?.discountedGeneralPrice)}
                      </span>
                    )}
                    <p className="text-xs">
                      ₦{" "}
                      <span className="line-through">
                        {formatNumber(shopproduct.price)}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="-bg--clr-secondary absolute inset-0 opacity-0 hover:opacity-75  transition-all ease cursor-pointer grid place-items-center">
                  <div className="flex flex-col items-center space-y-2 justify-center max-w-full">
                    <button
                      className="bg-white -text--clr-primary px-4 py-2 mt-2 z-40 hover:scale-110 font-semibold"
                      onClick={() => handlePreview(shopproduct._id)}
                    >
                      Preview
                    </button>
                    <div className="flex text-white gap-3 font-semibold max-w-full flex-wrap justify-center">
                      <div className="flex items-center gap-1 hover:-text--clr-primary">
                        <IoMdShare /> <span>Share</span>
                      </div>
                      <div
                        onClick={() => handleCompare(shopproduct)}
                        className="flex items-center gap-1 hover:-text--clr-primary"
                      >
                        <MdCompareArrows /> <span>Compare</span>
                      </div>
                      <div
                        onClick={() => handleAddToCart(shopproduct)}
                        className="flex items-center gap-1 hover:-text--clr-primary"
                      >
                        <IoMdCart /> <span>Cart</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {shopproduct.discountPercentage > 0 && <span className="text-white absolute bg-[#E97171] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4 ">{shopproduct.discountPercentage}</span>}
              {shopproduct.label && <span className="text-white absolute bg-[#2EC1AC] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4">{shopproduct.label}</span>} */}
                {(shopproduct.discountPercentage > 0 || shopproduct.label) && (
                  <span
                    className={`text-white absolute w-12 h-12 rounded-full flex items-center justify-center top-4 right-4 ${
                      shopproduct.discountPercentage > 0
                        ? "bg-red-500"
                        : "bg-[#2EC1AC]"
                    }`}
                  >
                    {shopproduct.discountPercentage > 0
                      ? `-${shopproduct.discountPercentage}%`
                      : shopproduct.label}
                  </span>
                )}
              </div>
            ))}
          </div>
          <ShopPage
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
};

export default ShopBody;

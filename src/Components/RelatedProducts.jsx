import React, { useState } from "react";

const RelatedProducts = ({products}) => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="w-full mt-14 mb-16">
      <div className="w-full h-[0.8px] mb-14 border-b"></div>
      <div className="flex flex-wrap justify-center gap-8 px-4 lg:px-16">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="h-96 bg-gray-500 lg:w-72 rounded-md flex flex-col">
            <img src={product.image} alt={`Product ${product.id}`} className="w-full rounded-t-md h-64 object-cover" />
            <div className="flex flex-col justify-center p-2">
                <p className="mt-2 text-sm lg:text-sm text-[#b242424]">{product.style}</p>
                <p className="mt-2 text-xs text-[#b7b7b7]">{product.detail}</p>
                <p className="mt-2 text-xs lg:text-sm text-[#242424]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMoreProducts}
            className="px-8 py-2 mb-10 border-2 border-[#dbc697] rounded-lg text-xs"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;

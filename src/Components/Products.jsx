import React from 'react';
import syltherine from '/images/syltherine.png'
// import syltherine from '/images/syltherine.png'
// import syltherine from '/images/syltherine.png'
// import syltherine from '/images/syltherine.png'
// import syltherine from '/images/syltherine.png'
// import syltherine from '/images/syltherine.png'
// import syltherine from '/images/syltherine.png'


const products = [
  { id: 1, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  { id: 2, new:'New', name: 'Leviosa', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '', image: syltherine, des: "Stylish cafe chair" },
  { id: 3, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  { id: 4, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  { id: 5, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  { id: 6, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  { id: 7, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  { id: 8, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  // Add more products as needed
];

const Products = () => {
  return (
    <section className="py-16 font-[poppins]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-11">
          {products.map((product) => (
            <div key={product.id} className="bg-[#F4F5F7] shadow relative">
              <img src={product.image} alt={product.name} className="mb-4 w-full h-72 object-cover "/>
              <div className="px-3 mb-5 flex flex-col gap-2">
              <h3 className="text-lg font-bold -text--clr-black-shade-v1">{product.name}</h3>
              <p className="-text--clr-light-gray text-sm font-medium">{product.des}</p>
              <div className="flex items-center space-x-2 justify-between">
              {product.discount && <span className="-text--clr-black-shade-v1 font-semibold">{product.price}</span>}
              <s className="text-xs">{product.deprecated}</s>
              </div>
              </div>
              <div className="-bg--clr-secondary absolute inset-0 opacity-0 hover:opacity-75  transition-all ease cursor-pointer grid place-items-center">
              <button className="bg-white -text--clr-primary px-4 py-2 mt-2 z-40 hover:scale-110 font-semibold">Add to Cart</button>
              </div>
              {product.discount && <span className="text-white absolute bg-[#E97171] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4">{product.discount}</span>}
              {product.new && <span className="text-white absolute bg-[#2EC1AC] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4">{product.new}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

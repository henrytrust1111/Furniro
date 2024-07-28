import React, { useState } from 'react';
import syltherine from '/images/syltherine.png'
import lolito from '/images/lolito.png'
import leviosa from '/images/leviosa.png'
import respira from '/images/respira.png'
import grifo from '/images/grifo.png'
import muggo from '/images/muggo.png'
import pingky from '/images/pingky.png'
import potty from '/images/potty.png'
import { IoMdCart, IoMdShare } from 'react-icons/io';
import { MdCompareArrows } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const products = [
  { id: 1, new:'', name: 'Syltherine', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-30%', image: syltherine, des: "Stylish cafe chair" },
  { id: 2, new:'New', name: 'Leviosa', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '', image: leviosa, des: "Stylish cafe chair" },
  { id: 3, new:'', name: 'Lolito', price: 'Rp 7.000.000', deprecated: 'Rp 14.000.000', discount: '-50%', image: lolito, des: "Luxury big sofa" },
  { id: 4, new:'New', name: 'respira', price: 'Rp 500.000', deprecated: '', discount: '', image: respira, des: "Outdoor bar table and stool" },
  { id: 5, new:'', name: 'grifo', price: 'Rp 1.500.000', deprecated: '', discount: '', image: grifo, des: "Night lamp" },
  { id: 6, new:'New', name: 'muggo', price: 'Rp 150.000', deprecated: '', discount: '', image: muggo, des: "small mug" },
  { id: 7, new:'', name: 'pingky', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '-50%', image: pingky, des: "Cute bed sets" },
  { id: 8, new:'New', name: 'potty', price: 'Rp 2.500.000', deprecated: 'Rp 3.500.000', discount: '', image: potty, des: "Stylish cafe chair" },
  // Add more products as needed
];

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };
  const nav = useNavigate()
  const handlePreview = ()=> {
    nav("/single-product")
  }
  return (
    <section className="py-16 font-[poppins]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 lg:px-11 md:px-0 ">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="bg-[#F4F5F7] shadow-custom relative">
              <img src={product.image} alt={product.name} className="mb-4 w-full h-72 object-cover "/>
              <div className="px-3 mb-5 flex flex-col gap-2">
              <div className="w-full flex flex-col items-start ">
              <h3 className="text-lg font-bold -text--clr-black-shade-v1 capitalize">{product.name}</h3>
              <p className="-text--clr-light-gray text-sm font-medium text-left">{product.des}</p>
              </div>
              <div className="flex items-center space-x-2 justify-between">
              {product.price && <span className="-text--clr-black-shade-v1 font-semibold">{product.price}</span>}
              <s className="text-xs">{product.deprecated}</s>
              </div>
              </div>
              <div className="-bg--clr-secondary absolute inset-0 opacity-0 hover:opacity-75  transition-all ease cursor-pointer grid place-items-center">
             <div className="flex flex-col items-center space-y-2 justify-center max-w-full">
             <button className="bg-white -text--clr-primary px-4 py-2 mt-2 z-40 hover:scale-110 font-semibold" onClick={handlePreview}>Preview</button>
              <div className="flex text-white gap-3 font-semibold max-w-full flex-wrap justify-center">
                <div className='flex items-center gap-1 hover:-text--clr-primary'><IoMdShare /> <span>Share</span></div>
                <div className='flex items-center gap-1 hover:-text--clr-primary'><MdCompareArrows /> <span>Compare</span></div>
                <div className='flex items-center gap-1 hover:-text--clr-primary'><IoMdCart /> <span>Cart</span></div>
              </div>
             </div>
              </div>
              {product.discount && <span className="text-white absolute bg-[#E97171] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4">{product.discount}</span>}
              {product.new && <span className="text-white absolute bg-[#2EC1AC] w-12 h-12 rounded-full flex items-center justify-center top-4 right-4">{product.new}</span>}
            </div>
          ))}
        </div>
        <button onClick={showMoreProducts} className='bg-white -text--clr-primary px-4 py-2 z-40 hover:scale-110 font-semibold border -border--clr-primary mt-8 max-w-[300px] md:w-[300px]'>Show More</button>
      </div>
    </section>
  );
};

export default Products;

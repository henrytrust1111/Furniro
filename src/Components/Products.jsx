import React from 'react';
import syltherine from '/images/syltherine.png'


const products = [
  { id: 1, name: 'Syltherine', price: 'Rp 2.500.000', discount: '30%', image: 'product1.jpg' },
  { id: 2, name: 'Leviosa', price: 'Rp 2.500.000', discount: '50%', image: 'product2.jpg' },
  // Add more products as needed
];

const Products = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <img src={product.image} alt={product.name} className="mb-4 w-full h-48 object-cover rounded-lg"/>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              {product.discount && <span className="text-red-500">{product.discount}</span>}
              <button className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Our New Collection</h1>
        <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg">Buy Now</button>
      </div>
    </section>
  );
};

export default Hero;

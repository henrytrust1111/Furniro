import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="/" className="text-2xl font-bold">Furniro</a>
        </div>
        <div className="space-x-4 mb-4">
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
          <a href="/shop" className="text-gray-400 hover:text-white">Shop</a>
          <a href="/about" className="text-gray-400 hover:text-white">About</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>
        <p className="text-gray-500">&copy; 2023 Furniro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

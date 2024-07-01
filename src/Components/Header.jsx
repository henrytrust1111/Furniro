import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Furniro</div>
        <nav className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="text-gray-600 hover:text-gray-900">Cart</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

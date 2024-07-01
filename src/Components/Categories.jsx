import React from 'react';

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Browse The Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Dining', 'Living', 'Bedroom'].map((category) => (
            <div key={category} className="bg-gray-100 p-8 rounded-lg">
              <img src={`/${category.toLowerCase()}.jpg`} alt={category} className="mb-4 w-full h-48 object-cover rounded-lg"/>
              <h3 className="text-xl font-bold">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

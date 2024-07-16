import React from 'react';
import dining from '/images/dining.png'
import living from '/images/living.png'
import bedroom from '/images/bedroom.png'

const Categories = () => {
  const data = [
    {id: 1, image: dining, des:"Dining"},
    {id: 2, image: living, des:"Living"},
    {id: 3, image: bedroom, des:"Bedroom"},
  ]
  return (
    <section className="py-16 font-[poppins]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold ">Browse The Range</h2>
        <p className='mb-8 px-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {data.map((e) => (
           <div key={e.id}>
            <div  className="rounded-lg">
              <img src={e.image} alt={e.des} className="mb-4 w-full h-full object-cover rounded-lg"/>
            </div>
              <h3 className="text-xl font-bold">{e.des}</h3>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

import React from 'react';
import "./hero.css"

const Hero = () => {
  return (
    <section className="hero h-[400px] lg:h-screen mt-[53px] relative font-[poppins] flex items-end md:items-center justify-end">
      <img src="/images/LandingPageHero.png" alt="" className='cover bg-cover bg-center w-full h-full absolute' />
      <div className="-bg--clr-primar-light max-w-[350px] md:max-w-[500px] px-5 py-7 ml-28 md:mr-28 z-10">
        <p>New Arrivals</p>
        <h1 className="text-lg md:text-4xl font-bold mb-4 -text--clr-primary ">Discover Our New Collection</h1>
        <p className=" mb-8 text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="-bg--clr-primary text-white px-6 py-3">BUY NOW</button>
      </div>
    </section>
  );
};

export default Hero;

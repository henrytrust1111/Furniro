import React from 'react'

const ShopHero = () => {
  return (
    <section className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{backgroundImage: "url('/public/Rectangle 1.png')"}}>
      {/* White overlay */}
      <div className="absolute inset-0 bg-grey opacity-1"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Shop</h1>
        <a href='/' className="text-2xl">Home</a>
      </div>
    </section>
  )
}

export default ShopHero
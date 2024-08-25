import React from 'react'
import ShopHero from './ShopHero'
import ShopBody from './ShopBody'
import ShopPagination from './ShopPagination'
// import ShopPage from './ShopPage'


const Shop = () => {
  return (
    <>
     <ShopHero/>
     <ShopPagination/>
     <ShopBody/>
     {/* <ShopPage/> */}
    </>
  )
}

export default Shop
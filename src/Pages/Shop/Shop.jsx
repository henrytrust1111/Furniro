import React from 'react'
import ShopHero from './ShopHero'
import ShopBody from './ShopBody'
import ShopPagination from './ShopPagination'
import ScrollToTop from '../../Containers/ScrollToTop'
// import ShopPage from './ShopPage'


const Shop = () => {
  return (
    <>
    <ScrollToTop />
     <ShopHero/>
     <ShopPagination/>
     <ShopBody/>
     {/* <ShopPage/> */}
    </>
  )
}

export default Shop
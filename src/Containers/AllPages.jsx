import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'
import BackToTop from '../Components/elements/BackToTop'

const AllPages = () => {
  return (
    <>
    <BackToTop />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AllPages
import React from 'react'
import ReuseableHero from '../../Components/ReuseableHero'
import ScrollToTop from '../../Containers/ScrollToTop'
import { PiCaretRightBold } from 'react-icons/pi'

const SingleBlogPost = () => {
  return (
    <>
    <ScrollToTop />
    <ReuseableHero page={"Blog"} page1={"Blog"} PiCaretRightBold1 ={<PiCaretRightBold />} page2={"Single-Blog"} />
    </>
  )
}

export default SingleBlogPost
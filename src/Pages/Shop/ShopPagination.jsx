import React from 'react'
import './ShopPagination.css'

const ShopPagination = () => {
  return (
    <div className='Pagnation'>
        <div className="filter">
            <div className="filter-Left">
                <img src="./public/filter.png" alt="" />
                <h3>Filter</h3>
                <img src="./public/grid.png" alt="" />
                <img src="./public/viewlist.png" alt="" />
            </div>
            <div className="filter-Right">
                <h2>showing 1-16 of 32 results</h2>
            </div>
        </div>
        <div className="sort">
            <div className="sort-Left">
                <h3>Show</h3>
                <input type="number" className='showinput' />
            </div>
            <div className="sort-Right">
                <h3>Sort by</h3>
                <input type="text" className='sortinput'/>
            </div>

        </div>
      
    </div>
  )
}

export default ShopPagination

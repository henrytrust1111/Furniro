// import React from 'react'
// import './ShopPagination.css'

// const ShopPagination = () => {
//   return (
//     <div className='Pagnation'>
//         <div className="filter">
//             <div className="filter-Left">
//                 <img src="./public/filter.png" alt="" />
//                 <h3>Filter</h3>
//                 <img src="./public/grid.png" alt="" />
//                 <img src="./public/viewlist.png" alt="" />
//             </div>
//             <div className="filter-Right">
//                 <h2>showing 1-16 of 32 results</h2>
//             </div>
//         </div>
//         <div className="sort">
//             <div className="sort-Left">
//                 <h3>Show</h3>
//                 <input type="number" className='showinput' />
//             </div>
//             <div className="sort-Right">
//                 <h3>Sort by</h3>
//                 <input type="text" className='sortinput'/>
//             </div>

//         </div>
      
//     </div>
//   )
// }

// export default ShopPagination

import React from 'react';
import './ShopPagination.css';

const ShopPagination = () => {
  return (
    <div className='Pagnation'>
      <div className="filter">
        <div className="filter-Left">
          <img src="/filter.png" alt="" />
          <h3>Filter by</h3>
          <select className="filter-dropdown">
            <option value="new">New</option>
            <option value="discount">Discount</option>
            <option value="category">Category</option>
          </select>
          <div className='gridFilter'>
          <img src="/grid.png" alt="" />
          <img src="/viewlist.png" alt="" />
          </div>
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
          <select className="sort-dropdown">
            <option value="az">A-Z</option>
            <option value="quantity">Quantity Available</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ShopPagination;
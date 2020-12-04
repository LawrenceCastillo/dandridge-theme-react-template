import React from 'react'

import './list.scss'

export const LayoutList = () => (
  <div className='list'>
    <div className='list-container' >
      <div className='list-item' >
        <div className='list-item-cat' >Age Range</div>
        <div className='list-item-val' >18 - 25</div>
      </div>
      <div className='list-item' >
        <div className='list-item-cat' >Height</div>
        <div className='list-item-val' >5'2" / 157cm</div>
      </div>
      <div className='list-item' >
        <div className='list-item-cat' >Weight</div>
        <div className='list-item-val' >127lbs / 58kg</div>
      </div>
    </div>
  </div>
)
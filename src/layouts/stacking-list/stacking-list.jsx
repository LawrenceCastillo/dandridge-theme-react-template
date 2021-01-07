import React from 'react'

import './stacking-list.scss'

export const LayoutStackList = ({ age_range, height, weight }) => (
  <div className='list'>
    <div className='list-container' >
      <div className='list-item' >
        <div className='list-item-cat' >Age Range</div>
        <div className='list-item-val' >{age_range}</div>
      </div>
      <div className='list-item' >
        <div className='list-item-cat' >Height</div>
        <div className='list-item-val' >{height}</div>
      </div>
      <div className='list-item' >
        <div className='list-item-cat' >Weight</div>
        <div className='list-item-val' >{weight}</div>
      </div>
    </div>
  </div>
)
import React from 'react'

import './full_bg_img.scss'

export const LayoutFullBackgroundImage = ({ bg_img }) => (
  <div className='header'>
    <div 
      className='header-bg'
      style={{ backgroundImage: `url(${bg_img})`}}>
    </div>
  </div>
)
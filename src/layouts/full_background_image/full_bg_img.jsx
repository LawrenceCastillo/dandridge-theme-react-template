import React from 'react'

import './full_bg_img.scss'

export const LayoutFullBackgroundImage = ({ bg_img, name, fname, lname, headline }) => (
  <div className='header-container'>
    <div 
      className='header-bg'
      style={{ backgroundImage: `url(${bg_img})`}}
    >
      <h1 className='header-title'>{name}</h1>
      <h2 className='header-subtitle'>{headline}</h2>
    </div>
    <div
      className='header-ataglance'
    >
      <div>18-25</div>
      <div>5'2" / 157cm</div>
      <div>127lbs / 58kg</div>
      <div>Slim build</div>
      <div>Black hair</div>
      <div>Brown eyes</div>
    </div>
  </div>
)
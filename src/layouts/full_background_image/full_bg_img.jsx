import React from 'react'

import './full_bg_img.scss'

export const LayoutFullBackgroundImage = ({ bg_img, name, fname, lname, headline }) => (
  <div className='header'>
    <div 
      className='header-bg'
      style={{ backgroundImage: `url(${bg_img})`}}
    >
      <h1 className='header-title'>{name}</h1>
      <h2 className='header-subtitle'>{headline}</h2>
    </div>
  </div>
)
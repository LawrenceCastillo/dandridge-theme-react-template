import React from 'react'
import Fade from 'react-reveal/Fade'

import './full_bg_img.scss'

export const LayoutFullBackgroundImage = ({ bg_img, name, headline, className }) => (
  <div className={className}>
    <div className='header-container'>
      <div 
        className='header-bg'
        style={{ backgroundImage: `url(${bg_img})`}}
      >
        <Fade bottom><h1 className='header-title'>{name}</h1></Fade>
        <Fade bottom><h2 className='header-subtitle'>{headline}</h2></Fade>
      </div>
    </div>
  </div>
)
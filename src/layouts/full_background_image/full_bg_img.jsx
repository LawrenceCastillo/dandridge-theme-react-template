import React from 'react'
import Fade from 'react-reveal/Fade'

import './full_bg_img.scss'

export const LayoutFullBackgroundImage = ({ bg_img, name, fname, lname, headline, className }) => (
  <div className={className}>
    <div className='header-container'>
      <div 
        className='header-bg'
        style={{ backgroundImage: `url(${bg_img})`}}
      >
        <Fade bottom><h1 className='header-title'>{name}</h1></Fade>
        <Fade bottom><h2 className='header-subtitle'>{headline}</h2></Fade>
      </div>
      {/* <div
        className='header-ataglance'
      >
        <div>At a Glance</div>
        <div>Age Range<br/>18 - 25</div>
        <div>Height<br/>5'2" / 157cm</div>
        <div>Weight<br/>127lbs / 58kg</div>
      </div> */}
    </div>
  </div>
)
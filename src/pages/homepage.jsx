import React from 'react'

import './homepage.scss'

export const Homepage = props => {
  const bg_img = props.personal.background_url
  return (
    <div className='header'>
      <div 
        className='header-bg'
        style={{ backgroundImage: `url(${bg_img})`}}>
      </div>
    </div>
  )
}
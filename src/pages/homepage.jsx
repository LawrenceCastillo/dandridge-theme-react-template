import React from 'react'

import { LayoutFullBackgroundImage } from '../layouts/full_background_image/full_bg_img'
import { ImageGallery } from '../layouts/image_gallery/image_gallery'

import './homepage.scss'

export const Homepage = props => {
  const bg_img = props.personal.background_url
  const name = props.personal.name
  const fname = props.personal.fname
  const lname = props.personal.lname
  const headline = props.personal.headline
  return (
    <div className='home1'>
      <LayoutFullBackgroundImage 
        className='home'
        bg_img={bg_img} 
        name={name}
        fname={fname}
        lname={lname}
        headline={headline} 
      />
      <ImageGallery />
    </div>
  )
}
import React from 'react'

import { LayoutFullBackgroundImage } from '../layouts/full_background_image/full_bg_img'

import './homepage.scss'

export const Homepage = props => {
  const bg_img = props.personal.background_url
  return (
    <div className='header'>
      <LayoutFullBackgroundImage bg_img={bg_img} />
    </div>
  )
}
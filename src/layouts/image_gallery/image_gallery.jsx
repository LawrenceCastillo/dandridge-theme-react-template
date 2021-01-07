import React from 'react'

import './image_gallery.scss'

export const LayoutImageGallery = ({ className, headshots }) => (
  <div className={className}>
    <div className='image-gallery' >
      <div className='image-gallery-container' >
        {headshots.map(i => <img alt='headshot' className='image-gallery-thumbnail' src={i} /> )}
      </div>
    </div>
  </div>
)
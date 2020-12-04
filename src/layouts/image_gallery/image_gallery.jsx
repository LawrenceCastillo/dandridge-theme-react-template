import React from 'react'

import './image_gallery.scss'

const photos = [
  '/images/album/xiomara-tejera-actor-actress-new-york-city-2.jpg',
  '/images/album/xiomara-tejera-actor-actress-new-york-city-3.jpeg',
  // '/images/album/xiomara-tejera-actor-actress-new-york-city-4.jpeg',
]

export const ImageGallery = ({ className }) => (
  <div className={className}>
    <div className='image-gallery' >
      <div className='image-gallery-container' >
        {photos.map(i => <img alt='headshot' className='image-gallery-thumbnail' src={i} /> )}
      </div>
    </div>
  </div>
)
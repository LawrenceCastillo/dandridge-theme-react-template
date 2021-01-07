import React from 'react'

import { LayoutFullBackgroundImage } from '../layouts/full_background_image/full_bg_img'
import { LayoutImageGallery } from '../layouts/image_gallery/image_gallery'
import { LayoutTextCenter } from '../layouts/text_center/text_center'
import { LayoutStackList } from '../layouts/stacking-list/stacking-list'

import './homepage.scss'

export const Homepage = props => {
  const bg_img = props.personal.background_url
  const name = props.personal.name
  const fname = props.personal.fname
  const lname = props.personal.lname
  const headline = props.personal.headline
  const headshots = props.personal.headshots
  const long_bio = props.personal.long_bio
  const resume_link = props.personal.resume_link
  const reel_link = props.personal.reel_link
  const age_range = props.personal.age_range
  const height = props.personal.height
  const weight = props.personal.weight
  return (
    <div>
      <LayoutFullBackgroundImage 
        className='home'
        bg_img={bg_img} 
        name={name}
        fname={fname}
        lname={lname}
        headline={headline} 
      />
      <LayoutImageGallery 
        className='media'
        headshots={headshots}
      />
      <LayoutTextCenter 
        className='bio' 
        long_bio={long_bio}
        resume_link={resume_link}
        reel_link={reel_link}
      />
      <LayoutStackList 
        age_range={age_range}
        height={height}
        weight={weight}
      />
    </div>
  )
}
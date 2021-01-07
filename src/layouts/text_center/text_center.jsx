import React from 'react'

import './text_center.scss'

export const LayoutTextCenter = ({ className, long_bio, resume_link, reel_link }) => (
  <div className={className}>
    <div className='textandlist-container' >
      <div className='textandlist-body' >
        <p className='textandlist-p' >{long_bio}</p>
        <div className='textandlist-links' >
          <a 
            className='textandlist-a'
            href={resume_link} 
            target="_blank" 
            rel='noopener noreferrer'
          >
            Download Resume
          </a> &nbsp;
          <a 
            className='textandlist-a'
            href={reel_link} 
            target="_blank" 
            rel='noopener noreferrer'
          >
            View Reel
          </a>
        </div>
      </div>
    </div>
  </div>
)
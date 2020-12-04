import React from 'react'

import './text_center.scss'

export const LayoutTextAndList = ({ className }) => (
  <div className={className}>
    <div className='textandlist-container' >
      <div className='textandlist-body' >
        <p className='textandlist-p' >Hi, I'm Xiomara! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='textandlist-links' >
          <a 
            className='textandlist-a'
            href='http://example.com/' 
            target="_blank" 
            rel='noopener noreferrer'
          >
            Download Resume
          </a> &nbsp;
          <a 
            className='textandlist-a'
            href='https://www.youtube.com/watch?v=kZZ-j9RXk0c' 
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
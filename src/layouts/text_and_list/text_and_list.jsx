import React from 'react'

import './text_and_list.scss'

export const LayoutTextAndList = ({ className }) => (
  <div className={className}>
    <div className='textandlist-container' >
      <div className='textandlist-col1' >
        <h2 className='textandlist-h2' >about me</h2>
        <div className='textandlist-body' >
          <p className='textandlist-p' >Hi, I'm Xiomara! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          <a 
            className='textandlist-res'
            href='http://example.com/' 
            target="_blank" 
            rel='noopener noreferrer'
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className='textandlist-col2' >
        2
      </div>
    </div>
  </div>
)
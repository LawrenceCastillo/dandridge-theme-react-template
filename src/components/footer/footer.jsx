import React from 'react'

import './footer.scss'

export const Footer = () => (
  <div 
    className='footer'
    style={{ backgroundImage: 'URL(/images/bg-social.jpg)'}}
  >
    <div className='footer-container'>
      <a 
        className='footer-icon'
        href='http://example.com/' 
        target="_blank" 
        rel='noopener noreferrer'
      >
        <img 
          aria-label='visit instagram' 
          src='/images/social/instagram-logo.png' 
          height='140px' 
        />
      </a>
      <a 
        className='footer-icon'
        href='http://example.com/' 
        target="_blank" 
        rel='noopener noreferrer'
      >
        <img 
          aria-label='media' 
          src='/images/social/backstage-logo.png'
          height='140px' 
        />
      </a>
    </div>
  </div>
)
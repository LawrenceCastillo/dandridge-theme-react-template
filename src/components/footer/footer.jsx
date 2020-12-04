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
        href='https://www.instagram.com/thelovelyxiomara/' 
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
        href='https://www.backstage.com/u/Xiomara_Tejera/' 
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
    <a className='template-link' 
      href='https://github.com/LawrenceCastillo/ada-theme-react-template' 
      target="_blank" 
      rel='noopener noreferrer'> 
        "Dandridge" theme by Lawrence Castillo 
    </a>
  </div>
)
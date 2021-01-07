import React from 'react'

import './footer.scss'

export const Footer = ({ social }) => (
  <div 
    className='footer'
    style={{ backgroundImage: 'URL(/images/bg-social.jpg)'}}
  >
    <div className='footer-container'>
      {social.map(link => (
        <a 
          className='footer-icon'
          href={link.profile_url} 
          target="_blank" 
          rel='noopener noreferrer'
        >
          <img 
            aria-label='visit instagram' 
            src={link.icon_url} 
            height='140px' 
          />
        </a>
      ))}
    </div>
    <a className='template-link' 
      href='https://github.com/LawrenceCastillo/ada-theme-react-template' 
      target="_blank" 
      rel='noopener noreferrer'> 
        "Dandridge" theme by Lawrence Castillo 
    </a>
  </div>
)
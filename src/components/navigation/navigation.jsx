import React from 'react'
import { Link } from 'react-scroll'

import './navigation.scss'

export const Navigation = () => (
  <nav className='navigation' >
    <div className='navigation-container' >
      <Link
        className='navigation-link'
        activeClass='active'
        to='home'
        spy='true'
        smooth='true'
        offset={-70}
        duration={500}
      >
        <img aria-label='home' src='/images/icons/home.svg' />
      </Link>
      <Link
        className='navigation-link'
        activeClass='active'
        to='media'
        spy='true'
        smooth='true'
        offset={-70}
        duration={500}
      >
        <img aria-label='media' src='/images/icons/camera.svg' />
      </Link>
      <Link
        className='navigation-link'
        activeClass='active'
        to='bio'
        spy='true'
        smooth='true'
        offset={-70}
        duration={500}
      >
        <img aria-label='bio' src='/images/icons/user.svg' />
      </Link>
      <div className='navigation-link'>
        <a href={`mailto:${'email@example.com'}`} rel="noopener noreferrer" > 
          <img aria-label='email' src='/images/icons/mail.svg' />
        </a>
      </div>
    </div>
  </nav>
)
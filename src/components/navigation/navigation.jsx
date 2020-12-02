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
        <span role='img' aria-label='home'>🏠</span>
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
        <span role='img' aria-label='media'>📷</span>
      </Link>
      <Link
        className='navigation-link'
        activeClass='active'
        to='work'
        spy='true'
        smooth='true'
        offset={-70}
        duration={500}
      >
        <span role='img' aria-label='work'>💼</span>
      </Link>
    </div>
  </nav>
)
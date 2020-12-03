import React from 'react'
import YouTube from 'react-youtube'

import './reel.scss'

export const LayoutReel = () => (
  <div className='reel'>
    <div className='reel-container' >
      <YouTube 
        videoId="kZZ-j9RXk0c" 
        opts={{
          width: '100%',
          playerVars: {
            modestbranding: 1,
            // controls: 0,
            showinfo: 0,
            iv_load_policy: 3,
            rel: 0,
            autoplay: 1,
          }
        }} 
      />
    </div>
  </div>
)
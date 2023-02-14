import React from 'react'
import video from './awesome-video.mp4'
export const Video = () => {
  return (
    <div className="video-container">
    <div className="video-overlay">
    <h2 className="overlay-text">bermuda premium shows</h2>
    <button className="overlay-btn"> <a href="#more">see more</a></button>
    </div>
    <video autoPlay muted loop className='tv-show-video'>
    <source src={video} type='video/mp4'/>
    </video>
    </div>
  )
}

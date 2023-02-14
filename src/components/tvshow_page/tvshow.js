import React from 'react'
import { Film } from '../home/film'
import { FilmList } from '../home/filmlist'
import { HowLong } from '../home/howlong'
import { NewsFeed } from '../home/newsfeed'
import { Marathons } from '../marathons_page/marathon'
import video from './awesome-video.mp4'
import './tvshow.css'

export const TvShow = () => {
  return (
  <>
    <Film title={'tv shows'} more={'discover someting fresh'}/>
    <Marathons title={'tv shows'} more={'discover fresh tv series'}/>
    <div className="video-container">
    <div className="video-overlay">
    <h2 className="overlay-text">bermuda premium shows</h2>
    <button className="overlay-btn"> <a href="#more">see more</a></button>
    </div>
    <video autoPlay muted loop className='tv-show-video'>
    <source src={video} type='video/mp4'/>
    </video>
    </div>
    <FilmList title={'12 tv shows on the list'} more={'see more'}/>
  </>
  )
}

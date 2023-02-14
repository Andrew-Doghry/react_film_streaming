import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Film } from '../home/film'
import { FilmList } from '../home/filmlist'
import { HowLong } from '../home/howlong'
import { Video } from './video'
import './tvshow.css'
import { InfoBox } from '../marathons_page/info'
import { FeedBack } from '../marathons_page/feedback'


export const TvShow = () => {
  return (
  <>
    <Film title={'tv shows'} more={'discover someting fresh'}/>
    <section className='section'>
      <header className='section-header'>
      <h4 className='section-title'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back to all marathosns</h4>
      </header>
<div className="how-long-bar">
<HowLong />
<HowLong />
<HowLong />
<HowLong />
<HowLong />
</div>
    </section>   <Video />
    <FilmList num={8} title={'tv shows on the list'} more={'see more'}/>
    <InfoBox />
    <FeedBack />
  </> 
  )
}

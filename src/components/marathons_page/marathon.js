import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HowLong } from '../home/howlong'
import { Video } from '../tvshow_page/video'
import { NewsFeed } from '../home/newsfeed'
import './marathon.css'
import { InfoBox } from './info'
import { Ribon } from '../home/ribon'
export const Marathons = () => {
  return (
  <>
    <Ribon />
      <section className='section'>
      <header className='section-header'>
      <h4 className='section-title'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back to all marathosns</h4>
      </header>
      <HowLong />
    </section>
    
    <Video />
    
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
    </section>
    <NewsFeed title='newsfeed' more='see more'></NewsFeed>
    <InfoBox />

  </>
  )
}

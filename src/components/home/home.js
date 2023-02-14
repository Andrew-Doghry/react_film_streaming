import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Film } from './film'
import { NewsFeed } from './newsfeed'
import { HowLong } from './howlong'
import { Ribon } from './ribon'
import { FilmList } from './filmlist'
import { Video } from '../tvshow_page/video'
import { InfoBox } from '../marathons_page/info'
import { FeedBack } from '../marathons_page/feedback'

export const Home = () => {
  return (
<div>
<Ribon />
<Film title="my section"  more='discover fresh content' />
<section className='section'>
      <header className='section-header'>
      <h4 className='section-title'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back to all marathosns</h4>
      </header>
<HowLong />
    </section>
<Video />
<NewsFeed title='newsfeed' more='see more'></NewsFeed>

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
<NewsFeed title='most recent' more='see more'></NewsFeed>
<FilmList  num={8} title={'movies on the list'} more={'add more movies'}/>
<InfoBox/>
<FeedBack/>
</div>
  )
}

import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { Film } from './film'
import { NewsFeed } from './newsfeed'
import { Marathons } from '../marathons_page/marathon'
import { HowLong } from './howlong'
import { Ribon } from './ribon'
import { FilmList } from './filmlist'

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
<FilmList  title={'8 movies on the list'} more={'add more movies'}/>
</div>
  )
}

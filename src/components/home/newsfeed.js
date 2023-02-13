import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FilmDetailCard } from './filmdetalilcard'
export const NewsFeed = ({title,more}) => {
  return (
    <section className='section'>
    <header className='section-header'>
    <h3 className='section-title'>
    {title} 
    </h3>
    <a href='#more' className='see-more'>{more} <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
    </header>
    <main className="film-bar">
    <FilmDetailCard />
    </main>
    
    </section>
  )
}

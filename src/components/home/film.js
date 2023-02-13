import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Films } from './films'
import './film.css'
export const Film = ({title,more}) => {
  return (
    <>
    <section className='section'>
      <header className='section-header'>
      <h4 className='section-title'>{title}</h4>
      <a href='#more' className='see-more'>{more} <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
      </header>
      <main className='film-bar'>
      <Films/>
      </main>
    </section>
    </>
  
  )
}

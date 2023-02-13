import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HowLong } from '../home/howlong'
import './marathon.css'
export const Marathons = () => {
  return (
  <>
      <section className='section'>
      <header className='section-header'>
      <h4 className='section-title'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back to all marathosns</h4>
      </header>
    <HowLong />
    </section>
  </>
  )
}

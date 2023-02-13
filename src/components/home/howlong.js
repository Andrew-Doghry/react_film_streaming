import { faPlay, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import image from './imgs/Movie Poster 10.jpg'
import img2 from './imgs/Movie Poster 11.jpg'
export const HowLong = () => {
  return (
    <div className="how-long-card">
    <div className="how-long-card-image">
    <img src={image} alt="film poster" />
    <img src={img2} alt="film poster" />
    </div>
    <div className="text">
    <h2>Alien/Predator</h2>
    <span className='title'>Movie marathon</span>
    by 
    <span className='link'>@alo311</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, expedita. Expedita, 
    voluptas! Consequatur, dolor. Nihil autem fugit aspernatur distinctio 
    repudiandae inventore eaque sit at adipisci aliquid eligendi, architecto corrupti iste?</p>
    <div className='time'>
    <span className='hour'>18</span>
    <span className='minutes'>39</span>
    </div>
    <span className='description'>updated on Dec 2010 at 6:45Pm</span>
    <div className="btns">
    <button><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Watch now</button>
    <button><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> Add to my favourite</button>
    <span className="add-icon"><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></span>
    </div>
    
    </div>
    
    
    
    
    
    
    
    </div>
    
    
  )
}

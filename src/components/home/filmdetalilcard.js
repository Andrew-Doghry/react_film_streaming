import React from 'react'
import  image1 from './imgs/Movie Poster 1.jpg'
import  image2 from './imgs/Movie Poster 2.jpg'
import  image3 from './imgs/Movie Poster 3.jpg'
import  image4 from './imgs/Movie Poster 4.jpg'
import  image5 from './imgs/Movie Poster 5.jpg'
import  image6 from './imgs/Movie Poster 6.jpg'
import  image7 from './imgs/Movie Poster 7.jpg'
import  image8 from './imgs/Movie Poster 8.jpg'
import  image9 from './imgs/Movie Poster 9.jpg'
import  image10 from './imgs/Movie Poster 10.jpg'
import  image11 from './imgs/Movie Poster 11.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons'
import './filmdetailcard.css'
let images=[
    image11,
    image6,
    image4,
    image3,
    image2,
    image8,
    image7,
    image10,
    image9,
    image5,
    image1
]

export const FilmDetailCard = () => {
  return (

  <div className="detail-film-bar">
  {images.map((ele)=>{
    return (<article  key={ele} className='detail-film-card'>
        <div className="detail-film-icon">
        <FontAwesomeIcon icon={faTriangleCircleSquare}></FontAwesomeIcon>
        </div>
        <img src={ele} alt="film-image" className='detail-film-image'/>
        <p className="detail-film-text"><span className='title'>this is title</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, rerum! Iure deleniti saepe ex eaque, illo, repellat dignissimos facere sint </p>
    </article>)
  })}
  </div>
  
  
  
  )
}

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
import { faEllipsisV, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons'
import './filmdetailcard.css'
let items = [1,2,3,4,5,6,7,8,9,10,11];
let images=[
image1,
image2,
image3,
image4,
image5,
image6,
image7,
image8,
image9,
image10,
image11
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
        <p className="detail-film-text"><h1>this is title</h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, rerum! Iure deleniti saepe ex eaque, illo, repellat dignissimos facere sint </p>
    </article>)
  })}
  </div>
  
  
  
  )
}
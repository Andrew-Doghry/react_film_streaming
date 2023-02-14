import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faPaperclip, faPaperPlane, faPlayCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
export const FilmListItem = ({image,filmInfo}) => {
    const{name,publYear,rating,hourDuration,minDuration}=filmInfo;
    return (
      <>
        <img src={image} alt="film-image" className='item-image'/>
        <div className="item-text">
        <h1 className='item-name'>{name}</h1>
        <p className='publ-year'>{publYear}</p>
        <div className="rating">
        <span className="rating-icon">
        <FontAwesomeIcon icon={faImdb}></FontAwesomeIcon>
        </span>
        {rating}/10
        </div>
        <div className="item-duration"><span className='num'>{hourDuration}</span> hrs <span className='num'>{minDuration}</span> min</div>
        </div>
        <div className="item-icons">
        <span className='icon'>
        <FontAwesomeIcon icon={faPlusSquare} size={"1x"}></FontAwesomeIcon>
        </span>
        <span className='icon'>
        <FontAwesomeIcon icon={faCheckSquare} size={"1x"}></FontAwesomeIcon>
        </span>
        <span className='icon'>
        <FontAwesomeIcon icon={faPlayCircle} size={"1x"}></FontAwesomeIcon>
        </span>
        <span className='icon'>
        <FontAwesomeIcon icon={faPaperPlane} size={"1x"}></FontAwesomeIcon>
        </span>
        </div>
      </>
  )
}

import React from 'react'
import './filmlist.css'
import { FilmListItem } from './filmlistitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import  image1 from './imgs/Movie Poster 1.jpg'
import  image2 from './imgs/Movie Poster 2.jpg'
import  image3 from './imgs/Movie Poster 3.jpg'
import  image4 from './imgs/Movie Poster 4.jpg'
import  image5 from './imgs/Movie Poster 5.jpg'
import  image6 from './imgs/Movie Poster 6.jpg'
import  image7 from './imgs/Movie Poster 7.jpg'
import  image8 from './imgs/Movie Poster 8.jpg'
import  image9 from './imgs/Movie Poster 9.jpg'
import  image11 from './imgs/Movie Poster 11.jpg'

let images=[
image1,
image2,
image3,
image4,
image5,
image6,
image7,
image4,
image8,
image9,
image1,
image11,
image3,
image7
]
let filmInfo = [
    {name:'star wars',publYear:2010,rating:9.9,hourDuration:1,minDuration:39},
    {name:'pina',publYear:2002,rating:8.9,hourDuration:1,minDuration:45},
    {name:'black swan',publYear:2003,rating:9.5,hourDuration:1,minDuration:15},
    {name:'the last starfighter',publYear:2004,rating:7.4,hourDuration:2,minDuration:45},
    {name:'inception',publYear:2007,rating:7.1,hourDuration:3,minDuration:10},
    {name:'bat man 2',publYear:2016,rating:8.3,hourDuration:1,minDuration:17},
    {name:'wall.E',publYear:2018,rating:6.4,hourDuration:2,minDuration:12},
    {name:'the last starfighter',publYear:2004,rating:7.4,hourDuration:2,minDuration:45},
    {name:'thing',publYear:2021,rating:7.5,hourDuration:2,minDuration:50},
    {name:'Evil Dead',publYear:2012,rating:9.6,hourDuration:2,minDuration:12},
    {name:'star wars',publYear:2010,rating:9.9,hourDuration:1,minDuration:39},
    {name:'the cat piano',publYear:2011,rating:5.4,hourDuration:2,minDuration:18},
    {name:'black swan',publYear:2003,rating:9.5,hourDuration:1,minDuration:15},
    {name:'wall.E',publYear:2018,rating:6.4,hourDuration:2,minDuration:12}
    ]
export const FilmList = ({num,title ,more}) => {
    return (
    <>
    <section className='section'>
    <header className='section-header'>
    <h3 className='section-title'>
     {num} {title} 
    </h3>
    <a href='#more' className='see-more'>{more} <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
    </header>    
    <div className="film-list-container">
    {images.map((ele,idx)=>{
        
    return(
        <div key={idx} className="film-list-item">
            <FilmListItem image={ele}  filmInfo={filmInfo[idx]} />
        </div>
    )
    })
    }
    
    </div>
    </section>
    </>
  )
}

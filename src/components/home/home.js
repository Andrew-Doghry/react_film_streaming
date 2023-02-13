import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { Film } from './film'
import { NewsFeed } from './newsfeed'

export const Home = () => {
  return (
<div>
<Film title="my section"  more='discover fresh content' />
<NewsFeed title='newsfeed' more='see more'></NewsFeed>
</div>
  )
}

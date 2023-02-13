import React from 'react'
import { Films } from '../home/films'
import { Film } from '../home/film'
import { NewsFeed } from '../home/newsfeed'
import { Ribon } from '../home/ribon'

export const FilmsPage = () => {
  return (
  <>
    <Film title={'films'} more='discover something fresh'/>
   <Ribon />
    <NewsFeed title='newsfeed' more='see more'></NewsFeed>

  </>
  )
}

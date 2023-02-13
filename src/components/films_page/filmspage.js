import React from 'react'
import { Films } from '../home/films'
import { Film } from '../home/film'
import { NewsFeed } from '../home/newsfeed'

export const FilmsPage = () => {
  return (
  <>
    <Film title={'films'} more='discover something fresh'/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, provident ratione eaque odit optio magnam facilis dolorem distinctio eos temporibus commodi adipisci, saepe iusto, laudantium non qui deserunt voluptatem assumenda!</p>
    <NewsFeed title='newsfeed' more='see more'></NewsFeed>
  </>
  )
}

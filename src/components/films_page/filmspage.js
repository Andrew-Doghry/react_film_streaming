import React from 'react'
import { Films } from '../home/films'
import { Film } from '../home/film'
import { NewsFeed } from '../home/newsfeed'
import { Ribon } from '../home/ribon'
import { FilmList } from '../home/filmlist'
import { InfoBox } from '../marathons_page/info'
import { FeedBack } from '../marathons_page/feedback'

export const FilmsPage = () => {
  return (
  <>
    <Film title={'films'} more='discover something fresh'/>
   <Ribon />
    <NewsFeed title='newsfeed' more='see more'></NewsFeed>
    <FilmList num={8} title={'movies on the list'} more={'discover and add more'} />
    <InfoBox />
    <FeedBack />
  </>
  )
}

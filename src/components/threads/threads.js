import React from 'react'
import { Ribon } from '../home/ribon'
import { FilmList } from '../home/filmlist'
import { InfoBox } from '../marathons_page/info'
import { FeedBack } from '../marathons_page/feedback'
export const Threads = () => {
  return (
    <>
    <Ribon />
    <InfoBox />
    <FeedBack />
    <FilmList  num={8} title={'movies on your list'} more={'add more movies'}/>
    
    </>
  )
}

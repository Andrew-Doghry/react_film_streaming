import React from 'react'
import { FilmList } from '../home/filmlist'
import { Ribon } from '../home/ribon'
import { FeedBack } from '../marathons_page/feedback'
import { InfoBox } from '../marathons_page/info'

export const Meme = () => {
  return (
    <>  
    <Ribon />
<FilmList  num={8} title={'movies on the list'} more={'add more movies'}/>
    <InfoBox/>
    <FeedBack />
    
    
    </>
  )
}

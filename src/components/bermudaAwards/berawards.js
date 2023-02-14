import React from 'react'
import { FilmList } from '../home/filmlist'
import { Ribon } from '../home/ribon'
import { Video } from '../tvshow_page/video'

export const BermudaAwards = () => {
  return (
    <>
    <Ribon />
    <Video />
    <FilmList  num={""} title={"chose presen"} more={'add more'}/>

    </>
  )
}

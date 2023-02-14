import React,{useEffect, useState,useMemo, useRef} from "react";
import { Route, Routes } from "react-router-dom";

import './App.css'
import { BermudaAwards } from "./components/bermudaAwards/berawards";
import { FilmsPage } from "./components/films_page/filmspage";
import { Help } from "./components/help/help";
import { Home } from "./components/home/home";

import { SearchBar } from "./components/main_layout/searchbar";
import { SideBar} from "./components/main_layout/sidebar";
import { Marathons } from "./components/marathons_page/marathon";
import { Meme } from "./components/memes/meme";
import { Threads } from "./components/threads/threads";
import { TvShow } from "./components/tvshow_page/tvshow";
export default function App(){
    let contentRef=useRef();
    let sidebar=useMemo(()=>{
    return <SideBar />
    },[])
return (
<>
<div className="app-container">
<div className="side-bar">
{sidebar}

</div>
<div className="content" ref={contentRef}>
<SearchBar contentRef={contentRef}/>
<div className="display-content">
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/films" element={<FilmsPage />}></Route>
<Route path="/tv-show" element={<TvShow/>}></Route>
<Route path="/marathons" element={<Marathons />}></Route>
<Route path="/memes" element={<Meme />}></Route>
<Route path="/threads" element={<Threads />}></Route>
<Route path="/bermudaAwards" element={<BermudaAwards />}></Route>
<Route path="/help" element={<Help />}></Route>
</Routes>
</div>
</div>
</div>

</>
)
}
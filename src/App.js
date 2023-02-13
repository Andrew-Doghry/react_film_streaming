import React,{useEffect, useState,useMemo, useRef} from "react";
import { Route, Routes } from "react-router-dom";

import './App.css'
import { FilmsPage } from "./components/films_page/filmspage";
import { Home } from "./components/home/home";

import { SearchBar } from "./components/main_layout/searchbar";
import { SideBar} from "./components/main_layout/sidebar";
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
<Route path="/" element={<Home />} ></Route>
<Route path="/home" element={<Home />}></Route>
<Route path="/films" element={<FilmsPage />}></Route>
<Route path="/tv-show" element={<TvShow/>}></Route>
<Route path="/marathons" element={<h1>hello marathons</h1>}></Route>
<Route path="/memes" element={<h1>hello memes</h1>}></Route>
<Route path="/threads" element={<h1>hello threads</h1>}></Route>
<Route path="/bermudaAwards" element={<h1>hello bermudaAwards</h1>}></Route>
<Route path="/help" element={<h1>hello help</h1>}></Route>
</Routes>
</div>
</div>
</div>

</>
)
}
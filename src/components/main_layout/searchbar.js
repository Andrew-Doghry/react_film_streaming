import './searchbar.css'
import React, { useRef, useState, useLayoutEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalculator, faSearch, faUserCircle , faThumbsUp,  faBox, faShareNodes, faBell, faAward} from '@fortawesome/free-solid-svg-icons'
import { Login } from './searchbar_components/login'
export const SearchBar = ({contentRef}) => {
    let formRef=useRef();
    let optmizeRef=useRef();
    let loginRef=useRef();
    let underlayRef=useRef();
    let [userState,setUserState]=useState(false);
function handleSearchDisplay(e){
    e.preventDefault();
    formRef.current.classList.toggle('show-search');
    formRef.current.classList.toggle('hide-search');
    formRef.current.children[0].focus()
}
function showOptmize(e){
  optmizeRef.current.classList.toggle('hide');
  if(!optmizeRef.current.classList.contains('hide')){
    setTimeout(() => {
      optmizeRef.current.style.opacity='1';
    }, 50);
  }
  if(optmizeRef.current.classList.contains('hide')){
    optmizeRef.current.style.opacity='0.0';
  }
}
function showLogin(e){
  loginRef.current.classList.toggle('hide');
  underlayRef.current.classList.toggle('hide');
if(!loginRef.current.classList.contains('hide')){
  setTimeout(() => {    
    loginRef.current.style.opacity='1';
    underlayRef.current.style.opacity='0.4';
  }, 50);
}else{
  loginRef.current.style.opacity='0';
  underlayRef.current.style.opacity='0';
}
}
useLayoutEffect(()=>{
  if(window.localStorage.getItem('logged') === 'true'){
  setUserState(c=>true);
  
  } 
},[])
  return (
    <div className='search-user-bar' >
    <div className="search-input">
    <button onClick={handleSearchDisplay} className="show-search-btn">
    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    {/* hello */}
    </button>
    <form ref={formRef} className={'hide-search'}>
    <input type="search" placeholder='Search for TV shows, movies, marathones,films...'/>
    <input type="submit" value="search" />
    </form>
    </div>
    <div className="user-input">
    {(userState)?<button className='earn' style={{background:'transparent',color:'#3185e7',borderRadius:'10px',border:'1px solid #3185e7',fontSize:'8px'}} >
     <FontAwesomeIcon icon={faAward}></FontAwesomeIcon> awards
    </button>:<div className='earn'></div>}
  {!userState&&  <button className="login-btn" onClick={showLogin} >Login
    </button>}
    {userState?null:<Login loginRef={loginRef} underlayRef={underlayRef} setUserState={setUserState}/>}    
    {(userState)?
    <button className="user-account-btn" style={{ color:'#3185e7',background:"transparent"}}><FontAwesomeIcon  icon={faUserCircle}></FontAwesomeIcon>
    {userState?null:<span className="hide-mob" style={{marginLeft:'5px'}}>create account</span>}
    </button>:<button style={{ background:'#3185e7',color:'white'}} className="create-account-btn"><FontAwesomeIcon  icon={faUserCircle}></FontAwesomeIcon>
    {userState?null:<span className="hide-mob" style={{marginLeft:'5px'}}>create account</span>}
    </button>
    }
    {userState&&<button className='noti' style={{background:'transparent',color:'#3185e7',borderRadius:'20px'}} >
    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
    </button>}
    <div className="optmize">
    <button className="optmize-btn"  onClick={showOptmize}>
    <FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon>
    </button>
    <div className="optmize-card hide" ref={optmizeRef}>
    <h1>optmize your Bermuda-Watching with tools</h1>
    <div className="card">
    <h3>
    <span className='icon'><FontAwesomeIcon  icon={faThumbsUp}></FontAwesomeIcon></span> Bermuda: Bermuda-Watch Suggestion Engine</h3>
    <p>Just wrapped up a bermuda-watch?<br/>Find another one based on what others have bermuda-watched</p>
    </div>
    <div className="card">
    <h3>
    <span className='icon'><FontAwesomeIcon  icon={faBox}></FontAwesomeIcon></span> Premiere Anniversary Calculator</h3>
    <p>Look up the premiere date for any TV series.<br/>Then,calculate how much time has passed since that date and when the next big milestone anniversary is happening. You can also look up premmiere anniversaries by year and by date </p>
    </div>
    <div className="card">
    <h3>
    <span className='icon'><FontAwesomeIcon  icon={faShareNodes}></FontAwesomeIcon></span> Random Episode Generator</h3>
    <p>Pull up a random episode (with the season and episode number included) and bermuda-watch your faourite series like it's new all over again<br/>Find another one based on what others have bermuda-watched</p>
    </div>
    
    
    </div>
    </div>
    
    </div>
    </div>
  )
}

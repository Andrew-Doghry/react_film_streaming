import { faBox,  faDisplay,  faFootball, faGrinWink, faMask, faMobile, faQuestion, faTent } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
export const SideBar = () => {
    const linksRef=useRef();
    const helpRef=useRef();
    function handleLinkClick(e){
    let arrLength=linksRef.current.children.length
    for(let i = 0 ; i < arrLength;i++){
    linksRef.current.children[i].style.color= 'rgb(160, 160, 160)'
  }
  helpRef.current.style.color= 'rgb(160, 160, 160)';
    if(e.target.classList.contains('link-item')){
      e.target.style.color='white'
    }
    if(e.target.parentElement.classList.contains('link-item')){
    e.target.parentElement.style.color='white'
    }
    }
  return (
    <div className='logo-links'>
    <Link className="logo" to='https://andrew-doghry.github.io/react_film_streaming/'>Bermuda</Link>
    <nav className="links" ref={linksRef}>
    <Link to='https://andrew-doghry.github.io/react_film_streaming/' onClick={handleLinkClick} className='link-item'>
    <FontAwesomeIcon icon={faTent}></FontAwesomeIcon>
    <span className='hide-mob'>home</span>
    </Link>
    <Link to='https://andrew-doghry.github.io/react_film_streaming/films' onClick={handleLinkClick} className='link-item'>
    <FontAwesomeIcon icon={faDisplay}></FontAwesomeIcon>
    <span className='hide-mob'>films</span>
    </Link>
    <Link to='https://andrew-doghry.github.io/react_film_streaming/tv-show' onClick={handleLinkClick} className='link-item'>
    <FontAwesomeIcon icon={faMask}>
     </FontAwesomeIcon>
    <span className='hide-mob'>tv shows</span>
    </Link>
    <Link to='https://andrew-doghry.github.io/react_film_streaming/marathons' onClick={handleLinkClick} className='link-item'>
    <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
    <span className='hide-mob'>marathons</span>
    </Link>
    <Link to='https://andrew-doghry.github.io/react_film_streaming/memes' onClick={handleLinkClick} className='link-item'>
    <FontAwesomeIcon icon={faGrinWink}></FontAwesomeIcon>
    <span className='hide-mob'>memes</span>
    </Link>
    <Link to='https://andrew-doghry.github.io/react_film_streaming/threads' onClick={handleLinkClick} className='link-item'>
    <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
    <span className='hide-mob'>threads</span>
    </Link>
    <Link className='link-item' to='https://andrew-doghry.github.io/react_film_streaming/bermudaawards'  onClick={handleLinkClick}>
    <FontAwesomeIcon icon={faFootball}></FontAwesomeIcon>
    <span className='hide-mob'>bermudaerdle</span>
    </Link>
    </nav>
    <div className="help">
    <Link to="https://andrew-doghry.github.io/react_film_streaming/help" onClick={handleLinkClick} className='link-item help' ref={helpRef} >
    <FontAwesomeIcon icon={faQuestion} ></FontAwesomeIcon>
    <span className='hide-mob'>help&support</span>
    </Link>
    </div>
    
    
    
    </div>
  )
}

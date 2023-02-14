import React, { useRef } from 'react'

export const Login = ({loginRef,underlayRef,setUserState}) => {
    let userRef=useRef();
    let passwordRef=useRef();
    let user = {name : 'andrew',password : 'ddd333'};
function handleSubmit(e){
e.preventDefault();
if(userRef.current.value===user.name && passwordRef.current.value===user.password){
    setUserState(c=>!c);
    window.localStorage.setItem('logged',true);
}
}
function hideAll(e){
underlayRef.current.classList.remove('hide');
loginRef.current.classList.remove('hide');
}
return (
    <>
    <div className="login-underlay hide" ref={underlayRef}  onClick={hideAll}></div>
    <div className="login-card hide" ref={loginRef}>
    <form action="" method='post' onSubmit={handleSubmit}>
    <div className='username-input'>
    <label htmlFor="username">username</label>
    <input type={"text"} id={'username'} placeholder={"username"} required maxLength={15} ref={userRef}/>
    </div>
    <div className='passward-input'>
    <label htmlFor="password">password</label>
    <input type={"password"} id={'password'} placeholder={"password"} required maxLength={8} ref={passwordRef}/>
    </div>
    <input type="submit" value="log in" />
    </form>
    </div>
    
    
    </>
  )
}

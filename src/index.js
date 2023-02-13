import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './server';
// import {unstable_HistoryRouter,BrowserRouter, HashRouter, MemoryRouter} from 'react-router-dom'
// import {StaticRouter} from 'react-router-dom/server'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

{/* <StaticRouter location={'/hello'}></StaticRouter> */}

{/* <MemoryRouter > {/*never changes the url </MemoryRouter > */}
//memory router >> never change the router of your url stored in the memory of your web page test your router code test router that uses your memory not the url 
// static router --> server routing doesn't change the location sever side rendering
//staticrouter server side rendering loaction to static router tag
//native router
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

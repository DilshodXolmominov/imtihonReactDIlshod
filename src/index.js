import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './component 33/Home';
// import About from './component 33/About';
// import Contact from './component 33/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
      <App/>
      {/* <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>}>
            <Route  index element = {<Home/>}/>
            <Route path="/about/" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/>
            </Route>
        </Routes>
      </BrowserRouter> */}
        {/* component 31 */}
        {/* <BrowserRouter>
            <Routes>
                <Route path='/' element = {<App/>}></Route>
                <Route path='/home' element = {<Home/>}></Route>
                <Route path='/about/:ism' element = {<About/>}></Route>
                <Route path='/contact' element = {<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
   */}
    </React.StrictMode>
);

reportWebVitals();
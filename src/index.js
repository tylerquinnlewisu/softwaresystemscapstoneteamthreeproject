import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About'
import Donate from './Donate'
import Slideshow from './Slideshow'
import Register from './Register';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path ="/donate" element={<Donate/>}/>
      <Route exact path ="/slideshow" element={<Slideshow/>}/>
      <Route exact path ="/login" element={<Login/>}/>
      <Route exact path ="/register" element={<Register/>}/>
    </Routes>
  </HashRouter>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

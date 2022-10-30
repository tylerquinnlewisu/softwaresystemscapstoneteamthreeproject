import React from 'react'
import './Menu.css'

export default function Menu () {
    return (
    <div class="menuSection">
        <ul class="menu">
          <li class="link"><a class="link_a" href="/">Home</a></li>
          <li class="link"><a class="link_a" href="/donate">Donate</a></li>
          <li class="link"><a class="link_a" href="/slideshow">Slideshow</a></li>
          <li class="link"><a class="link_a"  href="/about">About</a></li>
        </ul>
        <a id ="login" href="/about" >Login</a>  
        <a id ="register" href="/about">Register</a>      
        <img src="lewisLogo.png" id="menuImage" alt="lewisLogo"></img>  
    </div>
    );
}
import React, { Component } from 'react';
//import { Link } from "react-router-dom"; // Might need this, I'm not sure yet ~ Kyle
import './Menu.css';

//
//  Current Layout at the moment:
//    Our website link: https://mango-ground-0c9924810.1.azurestaticapps.net/
// 
//    Index/Landing Page:
//      --> You're looking at it right now :), App.css (rewritten)
//      NOTE: The old css file was renamed to AppOld.css, in case anyone
//            wants to restore some of the old style. Also, the old code of
//            the dono and IMAGESLIDER stuff is in AppOld.js
//    Donation Page:
//      --> Donate.js, Donate.css
//      link: https://mango-ground-0c9924810.1.azurestaticapps.net/donate
//    Slideshow
//      --> Slideshow.js
//      link: https://mango-ground-0c9924810.1.azurestaticapps.net/slideshow
//      NOTE: I kept SliderData and ImageSlider the same at the time of this commit.
//    About
//      --> About.js
//      link: https://mango-ground-0c9924810.1.azurestaticapps.net/about
//      NOTE: I moved our names there. 
//
//    ~ Kyle
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <body>   
          <div class="menuSection">
            <ul class="menu">
              <li class="link"><a class="link_a" href="/">Home</a></li>
              <li class="link"><a class="link_a" href="/donate">Donate</a></li>
              <li class="link"><a class="link_a" href="/slideshow">Slideshow</a></li>
              <li class="link"><a class="link_a"  href="/about">About</a></li>
            </ul>
          </div>
        </body>
      </div>
    );
  }
}


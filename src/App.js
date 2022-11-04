import React, { Component } from 'react';
//import { Link } from "react-router-dom"; // Might need this, I'm not sure yet ~ Kyle
import './App.css';
import Menu from './Menu';

//
//  Current Layout at the moment:
//    Our website link: https://mango-ground-0c9924810.1.azurestaticapps.net/
//    Locally: localhost:3000/
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

//  Took photos from here: https://m.facebook.com/FCPGInc/photos
export default class App extends Component {

  render() {
    return (
      <div className="App">
        <body id="landing">
          <Menu/>
          <div id="missionContainer">
            <div id="missionLeftSide">
              <img src="fairmontLogo.png" id="fairmontLogo" alt="fairmontLogo"/>
              {/* Took this from their Facebook Page: https://m.facebook.com/FCPGInc/about */}
              <h1 id="missionStatementHeading">Mission Statement</h1>
              <p id="missionStatementText">The Fairmont Community Partnership Group Inc. is dedicated to enhancing and  improving the lives of Fairmont residents.</p>
            </div>
            <div id="missionRightSide">
              <img src="fairmont1.jpg" id="fairmontImg" alt="fairmontImage1"/>
            </div>
          </div>
          <img src="fairmont2.jpg" id="fairmontImg2" alt="fairmontImage2"/>
        </body>
      </div>
    );
  }
}


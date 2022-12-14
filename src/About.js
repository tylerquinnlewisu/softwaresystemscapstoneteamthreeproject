import React from 'react'
import Menu from './Menu';
import './css/About.css'

export default function About () {
    return (
    <div>
        <body>
            <Menu/>
            <div id="aboutBody">
                <h1 id="authorIntroHead">This Application was developed <br/>by the members of <br></br>Team 3 2022</h1>
                <p id="authorPara">Tyler Quinn<br/>Kyle Bye<br/>Antonio Pantoja<br/>Matthew Beaulieu</p>
            </div>
        </body>
    </div>
    );
}
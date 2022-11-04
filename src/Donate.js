import React from 'react'
import './Donate.css'
import Menu from './Menu';

export default function Donate () {
    return (
    <div>
        <header>
        </header>

        <body>
            <Menu/>
            <br/>
            <div>
                <iframe
                    id="JotFormIFrame-222896978943177"
                    title="Online Donation Form"
                    onload="window.parent.scrollTo(0,0)"
                    allowtransparency="true"
                    allowfullscreen="true"
                    allow="geolocation; microphone; camera"
                    src="https://form.jotform.com/222896978943177"
                    frameborder="0"
                    scrolling="no"
                />
            </div>
        </body>
    </div>
    );
}
//background: transparent !important;
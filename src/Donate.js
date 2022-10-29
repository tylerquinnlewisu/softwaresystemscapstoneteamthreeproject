import React from 'react'
import './Donate.css'
import './Menu.css'

export default function Donate () {
    return (
    <div>
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
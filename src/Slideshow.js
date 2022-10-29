import React from 'react'
import ImageSlider from './ImageSlider';
import './Menu.css';

export default function Slideshow () {
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
            <ImageSlider/>
        </body>

    </div>
    );
}
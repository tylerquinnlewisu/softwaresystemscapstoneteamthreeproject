import React from 'react'
import "./ImageSlider.css"
import { SliderData } from './SliderData';
import { useState } from "react";

const ImageSlider = () => {

    const [index, setIndex] = useState(0);

    function next() {
        if (index == SliderData.length-1) setIndex(0);
        else setIndex(index+1);
    };

    function back() {
        if (index == 0) setIndex(SliderData.length-1);     
        else setIndex(index-1);
    };

    return (
    <div>
        <div id="sliderContainer"> 
            <img src={SliderData[index].image} alt='alternate' id="image" />
        </div>
        <div id="sliderControls">
            <div onClick={back}>Back</div>
            <div onClick={next}>Next</div>
        </div>
    </div>
    )
};

export default ImageSlider;

/* {SliderData.map((slide, index) => {
            return (
                <img src={slide.image} alt='alternate' id="image" />
                )
            })} */
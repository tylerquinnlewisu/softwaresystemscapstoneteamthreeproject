import React from 'react'
import "./css/Video.css"
import { VideoSliderData } from './VideoSliderData';
import { useState } from "react";

const VideoSlider = () => {

    const [index, setIndex] = useState(1);

    function next() {
        if (index === VideoSliderData.length-1) setIndex(0);
        else setIndex(index+1);
        updateSliderText();
    };

    function back() {
        if (index === 0) setIndex(VideoSliderData.length-1);     
        else setIndex(index-1);
        updateSliderText();
    };

    function updateSliderText() {
        var sliderText = document.getElementById("videoSliderDataText");
        var str = "";
        for (var i = 0; i<VideoSliderData.length; ++i) {
            if (i == index) str += "0";
            else str += "*";
            if (i != VideoSliderData.length-1) str += " ";
        }
        sliderText.innerHTML = str;
    }

    return (
    <div id="videoSliderContainer">
        <iframe title="videoFrame" id="videoFrame" src={VideoSliderData[index].image} alt='alternate' />
        <p id="videoSliderDataText">0 * *</p>
        <div id="videoSliderControls">
            <div onClick={back} class="videoButton"><p class="buttonText">Back</p></div>
            <div onClick={next} class="videoButton"><p class="buttonText">Next</p></div>
        </div>
    </div>
    )
};

export default VideoSlider;
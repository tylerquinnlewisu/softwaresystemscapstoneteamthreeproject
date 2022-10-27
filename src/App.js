import './App.css';
import ImageSlider from './ImageSlider';

const dono = `<iframe
id="JotFormIFrame-222896978943177"
title="Online Donation Form"
onload="window.parent.scrollTo(0,0)"
allowtransparency="true"
allowfullscreen="true"
allow="geolocation; microphone; camera"
src="https://form.jotform.com/222896978943177"
frameborder="0"
style="
position: relative;
right: 190px;
bottom: 195px;
min-width: 245%;
height:1625px;
border:none;"
scrolling="no"
background: transparent !important;
>
</iframe>
`; 

function App() {
  
  //comment out div#IMAGESLIDER to get the page functioning as it was before
  return(

    <div className="App">
      <header className="App-header">
      <h1>
        Software Systems Capstone
      </h1>
        <p>
          Team 3 Members: Tyler Quinn, Kyle Bye, Antonio Pantoja, Matthew Beaulieu
        </p>
        <div id='IMAGESLIDER'>
          <ImageSlider />
        </div>
      </header>
      <body>
        <div dangerouslySetInnerHTML={{__html:dono}}>
        </div>
        
      </body>
    </div>
    
    );
  
}

export default App;

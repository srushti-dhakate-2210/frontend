import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-parallax';
import nebula from './image/nebula.jpeg';
import wave from './image/wave.svg';
import wave2 from './image/wave2.svg';


function App() {

  const head = {
    color: "#9441DE",
    fontSize: 70,
    paddingTop:100,
    paddingLeft:80,
    
  }
  
  const para ={
    fontSize: 30,
    color:"#FBFAFC",
    paddingLeft:80,
   
  }


  return (
    <div className="App">
      <home />
     <Parallax strength={600} bgImage={nebula}>
     <div className="content">
     <div className="text-content">
     <h1 style={head}>O(1) Coding Club</h1>
    <p style={para}>Closer to your AMBITIONS,<br />
    a step at a time.</p>
     {/* <img src={wave} className="curve"/>
    <img src={wave2} className="curve2"/>  */}
    <svg className="editorial" viewBox="0 24 150 28" preserveAspectRatio="none" >
    <path id="gentle-wave" d="
    M-160 44c30 0 58-18 88-18s 60 18 88 18
    58-18 88-18 58 18 88 18 v44h-352z
    " />
    <g className='parallax'>
<use xlinkHref="#gentle-wave" x="50" y="0" fill="#8B3CD1"/>
<use xlinkHref="#gentle-wave" x="50" y="2" fill="#D39AF6"/>
<use xlinkHref="#gentle-wave" x="50" y="4" fill="#500E78"/>
<use xlinkHref="#gentle-wave" x="50" y="7" fill="#8957D0"/>
    </g>

    </svg>
     </div>
     </div>
     </Parallax>
     <div className="content"></div>
   
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-parallax';
import nebula from './image/nebula.jpeg';
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
     </div>
     </div>
     </Parallax>
     <div className="content"></div>
   
    </div>
  );
}

export default App;

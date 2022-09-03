import React from 'react';
import ReactDOM from 'react-dom';


function App() {
const head = {
  color: "#9441DE",
  fontSize: 45,
  paddingTop:100,
  paddingLeft:80,
  
}

const para ={
  fontSize: 20,
  color:"#FBFAFC",
  paddingLeft:80,
 
}

  return (
    <div className="App">
     <h1 style={head}>O(1) Coding Club</h1>
     <p style={para}>Closer to your AMBITIONS,<br />
     a step at a time.</p>
    </div>
  );
}

export default App;

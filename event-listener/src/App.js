import React from 'react';
//import LightSwitch from './components/LightSwitch'
import LightSwitch2 from './components/LightSwitch2'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* onClick = { props tambien pude recibir una funcion ()=> console.log/alert()}, luego el boton react con el mensaje de alert("blah blah") */}
      {/* <button onClick = { () => alert(`Haz hecho click en este boton`) }>Haz click</button>
      <LightSwitch /> */}
      <LightSwitch2 />
    </div>
    
  );
}

export default App;

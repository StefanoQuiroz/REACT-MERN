import React from 'react';
import './App.css';
import PuttingItTogether from './components/PuttingItTogether'

function App() {
  return (
    <div className="App">
      <PuttingItTogether lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"}/>
      <PuttingItTogether lastName={"Smith"} firstName={"Jhon"} age={88} hairColor={"Brown"}/>
    </div>
  );
}

export default App;

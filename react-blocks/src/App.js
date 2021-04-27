import React from 'react';
//import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import './scss/App.scss';
//import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advertisement />
      </Main> 
      {/* <Form/> */}      
    </div>
  );
}

export default App;

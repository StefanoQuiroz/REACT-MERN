import React, {useState} from 'react';
//import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import './scss/App.scss';
//import Form from './components/Form';
function App() {
  const [texto, setTexto] = useState("test string 123")
  return (
    <div className="App">
        <Header idioma="" pais=""/>
        <Navigation />
        <Main>
            <Subcontent textoDesdeArriba={{texto, setTexto}} />
            <Subcontent textoDesdeArriba={{texto, setTexto}} />
            <Subcontent textoDesdeArriba={{texto, setTexto}} />
            <Advertisement />
        </Main> 
      {/* <Form/> */}      
    </div>
  );
}

export default App;

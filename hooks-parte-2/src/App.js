//import React, {useState} from 'react';
import React from 'react';
import './App.css';
//import UseReducer from './components/UseReducer'
//import Map from './components/Groceries'
//import MessageForm from './elevateState/MessageForm'
//import MessageDisplay from './elevateState/MessageDisplay'
import MyComponent from './envioDeArgumentosDevolucion/MyComponent'

const movies = ["Forest Gump", "Rescatando al soldado Ryan", "Piratas en el Caribe", "Cara cortada"];
function App() {
/*   const [currentMsg, setCurrentMsg] = useState("There are no messages")
  const youveGotMail = (newMessage) => {
    //actualiza el currentMsg
    setCurrentMsg(newMessage)
  } */
  return (
    <div className="App">
      {/* <UseReducer/> */}
      {/* <Map/> */}
      {/* el componente hijo MessageFrom llama a la funcion y el parametro en MessageForm*/}
      {/* <> </> fragments */}
      {/* <MessageForm onNewMessage={youveGotMail}/>
      <MessageDisplay message={currentMsg}/> */}
      <MyComponent movies={movies}/>
    </div>
  );
}

export default App;

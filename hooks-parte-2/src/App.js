//import React, {useState} from 'react';
import React, {useState} from 'react';
import './App.css';
//import UseReducer from './components/UseReducer'
//import Map from './components/Groceries'
//import MessageForm from './elevateState/MessageForm'
//import MessageDisplay from './elevateState/MessageDisplay'
//import MyComponent from './envioDeArgumentosDevolucion/MyComponent'
//import FruitForm from './otrosTiposDeEntrada/FruitForm'
import MyContext from './contextCodingDojo/MyContext'
import AppWrapperComponent from './contextCodingDojo/AppWrapperComponent'

//const movies = ["Forest Gump", "Rescatando al soldado Ryan", "Piratas en el Caribe", "Cara cortada"];
function App() {
/*   const [currentMsg, setCurrentMsg] = useState("There are no messages")
  const youveGotMail = (newMessage) => {
    //actualiza el currentMsg
    setCurrentMsg(newMessage)
  } */
  const [val, setVal] = useState(1)
  return (
    <div className="App">
      {/* <UseReducer/> */}
      {/* <Map/> */}
      {/* el componente hijo MessageFrom llama a la funcion y el parametro en MessageForm*/}
      {/* <> </> fragments */}
      {/* <MessageForm onNewMessage={youveGotMail}/>
      <MessageDisplay message={currentMsg}/> */}
      {/* <MyComponent movies={movies}/> */}
      {/* <FruitForm/> */}
      {/* Pasar valores estáticos */}
      {/* <MyContext.Provider value={"First using context with useContext"}>
        <AppWrapperComponent>
        </AppWrapperComponent>
      </MyContext.Provider> */}
      {/* Usando el useState al vallue le pasamos como objeto*/}
      <MyContext.Provider value={{val,setVal}}>
        <AppWrapperComponent>
        </AppWrapperComponent>
      </MyContext.Provider>
    </div>
  );
}

export default App;


import MyNewComponent from './components/MyNewComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Componentes secundarios*/}
      {/* <MyNewComponent  someText={"This Props in components are cool!!"}/> */}
      {/* Accesorios de componentes de clase */}
      <MyNewComponent firstName={"Stefano"} lastName={"Quiroz"}/>
    </div>
  );
}

export default App;


import MyNewComponent from './components/MyNewComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Componentes secundarios*/}
      {/* <MyNewComponent  someText={"This Props in components are cool!!"}/> */}
      {/* Accesorios de componentes de clase */}
      {/* componente MyNewComponent  accesorios firstName y lastName*/}
      <MyNewComponent firstName={"Stefano"} lastName={"Quiroz"}>
        {/* Hijos de los componentes */}
        <p>This a child</p>
        <p>This another child</p>
        <p>This is even another child</p>
      </MyNewComponent>
    </div>
  );
}

export default App;
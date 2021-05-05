import React from 'react';
import './sass/App.scss';
//import Formulario from './components/Formulario'
//import ValidacionFormulario from './components/ValidacionFormulario'
//import FormularioJake from './components/FormularioJake'
import FormularioGancho from './reviewsOwn/FormularioGancho'
function App() {
  return (
    <div className="App">
      {/* <Formulario/> */}
      {/* <ValidacionFormulario/> */}
      {/* <FormularioJake/> */}
      <FormularioGancho/>
    </div>
  );
}

export default App;

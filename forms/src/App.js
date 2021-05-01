import React, {useState} from 'react'; 
//import React from 'react';
//import UserFormOwn from './components/formulario-clase/UseFormOwn';
//import NameForm from './components/formReact/NameForm';
//import Reservation from './components/formReact/Reservation';
//import HookForm from './components/hookForm/HookForm';
//import HookFormData from './components/hookForm/HookFormData'
//import './sass/sass-class/hooksForm.scss';
//import FormRenderer from './components/renderizadoCondicional/FormRenderer'
//import FormRendererConditional from './components/renderizadoCondicional/FormRendererConditional'
//import ManejoDeValidaciones from './components/renderizadoCondicional/ManejoDeValidaciones'
//import FormValidation from './components/renderizadoCondicional/FormValidation'
import MoreForms from './components/moreForms/MoreForms'
import './sass/sass-class/hooksForm.scss'
const App = () => {
  //variables de configuracion
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: ""
  });//se pasa a los hijos
  /* const [state, setState] = useState({
    userName: "",
    emailAddress: "",
    password: ""
  }); */
  return (
    <div className="App">
      {/* <UserFormOwn/> */}
      {/* <NameForm/> */}
      {/* <Reservation/> */}
      {/* accede al estado y luego cambia al estado */}
      {/* <HookForm inputs={state} setInputs={setState} /> */}
      {/* accede al estado */}
      {/* <HookFormData data={state}/> */}
      {/* <FormRenderer inputs={state} setInputs={setState} /> */}
      {/* <FormRendererConditional/> */}
      {/* <ManejoDeValidaciones/> */}
      {/* <FormValidation/> */}
      <MoreForms inputs={state} setInputs={setState}/>
    </div>
  );
}
export default App;


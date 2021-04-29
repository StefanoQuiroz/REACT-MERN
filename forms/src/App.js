import React, {useState} from 'react'; 
//import UserFormOwn from './components/formulario-clase/UseFormOwn';
//import NameForm from './components/formReact/NameForm';
//import Reservation from './components/formReact/Reservation';
import HookForm from './components/hookForm/HookForm';
import HookFormData from './components/hookForm/HookFormData'
import './sass/sass-class/hooksForm.scss';
const App = () => {
  //variables de configuracion
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: ""
  });//se pasa a los hijos
  return (
    <div className="App">
      {/* <UserFormOwn/> */}
      {/* <NameForm/> */}
      {/* <Reservation/> */}
      {/* accede al estado y luego cambia al estado */}
      <HookForm inputs={state} setInputs={setState} />
      {/* accede al estado */}
      <HookFormData data={state}/>
    </div>
  );
}
export default App;


import React, {useState} from 'react'; 
//import UserFormOwn from './components/formulario-clase/UseFormOwn';
//import NameForm from './components/formReact/NameForm';
//import Reservation from './components/formReact/Reservation';
import HookForm from './components/hookForm/HookForm';
import HookFormData from './components/hookForm/HookFormData'
import './sass/sass-class/hooksForm.scss';
const App = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: ""
  });
  return (
    <div className="App">
      {/* <UserFormOwn/> */}
      {/* <NameForm/> */}
      {/* <Reservation/> */}
      <HookForm inputs={state} setInputs={setState} />
      <HookFormData data={state}/>
    </div>
  );
}

export default App;


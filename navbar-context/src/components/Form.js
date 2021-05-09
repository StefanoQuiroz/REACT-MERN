import React, {useContext} from 'react';
import MyContext from './MyContext';
import StyledForm from '../styledComponents/StyledForm'
import StyledLabel from '../styledComponents/StyledLabel'
import StyledInput from '../styledComponents/StyledInput'
const Form = (props) => {
    //const context = useContext(MyContext);
    //destructurando
    //se llaman de forma global
    const {state,setState} = useContext(MyContext)
    //cambia el value y el setValue
    const onChange =(e) => {
        e.preventDefault();
        setState(e.target.value);
        
    }

    
    return (
        <StyledForm>
            <StyledLabel htmlFor="name">Tu Nombre: </StyledLabel>
            <StyledInput type="text" placeholder={"Ingrese su nombre"} value={state} onChange={onChange}/>
        </StyledForm>            
    );
}

export default Form;

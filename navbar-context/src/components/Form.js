import React, {useContext} from 'react';
import MyContext from './MyContext';
const Form = (props) => {
    //const context = useContext(MyContext);
    //destructurando
    //se llaman de forma global
    const {state,setState} = useContext(MyContext)
    //cambia el value y el setValue

    
    return (
        <form>
            <label htmlFor="name">Tu Nombre: </label>
            <input type="text" placeholder="Ingrese su nombre" value={state} onChange={(e)=> setState(e.target.value)}/>
        </form>            
    );
}

export default Form;

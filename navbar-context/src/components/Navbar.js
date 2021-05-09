import React, {useContext} from 'react';
import MyContext from './MyContext'
const Navbar = () => {
    //const context = useContext(MyContext)
    const {state} = useContext(MyContext)
    //colocar un styled-componets styled.div ``
    
    const name =() => {
        if(state.length>0 && state.length<25){
            return `Hola ${state} !`;
        } else {
            return "Nombre, tiene máximo 25 caracteres"
        }
    }
    return (
        <div>
           {name()}
        </div>
    );
}

export default Navbar;

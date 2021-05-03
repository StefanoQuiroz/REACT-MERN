import React, {useRef, useState} from 'react';

const Header = (props) => {
    //para cambiar el idioma
    const {idioma:idiomaInicial} = props;
    const [idioma, setIdioma] = useState(idiomaInicial);
    const inputRef = useRef(null);
    const cambiarIdioma = () =>{
        const val = inputRef.current.value;
        setIdioma(val);
    }
    return (
        <header>
            {idioma}
            <input ref={inputRef}/>
            <button onClick={cambiarIdioma}>Cambiar Idioma</button>
        </header>
        
    );
}

export default Header;

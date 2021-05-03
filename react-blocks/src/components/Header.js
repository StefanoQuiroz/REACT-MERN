import React, {useRef, useState} from 'react';

const Header = (props) => {
    //para cambiar el idioma
    const {idioma:idiomaInicial, pais:paisInicial} = props;
    //todo en un objeto
    const [intl, setIntl] = useState({idioma:idiomaInicial, pais:paisInicial});
    const inputIdioma = useRef(null);
    //const inputPais = useRef(null);

    const cambiarIdioma = () =>{
        //const pais = inputPais.current.value;
        const idioma = inputIdioma.current.value;
        //para un autoreturn ( )
        //primero el spread en un objeto
        setIntl((estadoActual)=>({...estadoActual, idioma}));
    }
    return (
        <header>
            {intl.idioma}-{intl.pais.toUpperCase()}
            <input ref={inputIdioma} />
            {/* <input ref={inputPais} /> */}
            <button onClick={cambiarIdioma}>Cambiar Idioma</button>
        </header>
        
    );
}

export default Header;

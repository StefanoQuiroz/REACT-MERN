import React, {useState, useRef} from 'react';

const Subcontent = () => {
    const [text,setTexto] = useState("");
    const [fecha,setFecha] = useState("");
    const inputDeFecha = useRef(null);
    const onSubmitHandle = (e) => {
        e.preventDefault();
        //const formData = new FormData(e.target);
        //const data = {};
        inputDeFecha.current.style.backgroundColor = 'green';
        console.log({data: {text,fecha}})
    }

    return (
        <section className="subcontent">
            <form onSubmit={onSubmitHandle}>
                <input type="text" onChange={(e)=>{setTexto(e.target.value)}} />
                <input type="date" ref={inputDeFecha} onChange={(e)=>{setFecha(e.target.value)}}/>
                <button>submit</button>
            </form>            
        </section>
    );
}

export default Subcontent;
//cada vez que se hace click en el boton podemos hacer un render
//useRef cuando queremos seleccionar algo de html
import React, {useState, useRef} from 'react';

const Subcontent = (props) => {
    //estado de elevacion, el estado en el padre en el main
    const {textoDesdeArriba : {texto, setTexto}} = props;
      
    //const [text,setTexto] = useState("");
    const [fecha,setFecha] = useState("");
    const inputDeFecha = useRef(null);
    const onSubmitHandle = (e) => {
        e.preventDefault();
        //const formData = new FormData(e.target);
        //const data = {};
        inputDeFecha.current.style.backgroundColor = 'green';
        console.log({data: {texto,fecha}})
    }

    return (
        <section className="subcontent">
            <form onSubmit={onSubmitHandle}>
                <input type="text" onChange={(e)=>setTexto(e.target.value)} value={texto}/>
                <input type="date" ref={inputDeFecha} onChange={(e)=>{setFecha(e.target.value)}}/>
                <button>submit</button>
            </form>            
        </section>
    );
}

export default Subcontent;
//cada vez que se hace click en el boton podemos hacer un render
//useRef cuando queremos seleccionar algo de html
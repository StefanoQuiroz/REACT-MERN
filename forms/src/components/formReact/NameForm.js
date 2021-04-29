import React, {useState} from 'react';

const NameForm = (props) => {
    const[name, setName] = useState(""); //name, es inicializado en "" text en "blahblah"
    const[text, setText] = useState("Please write an essay about your favorite DOM element");
    // const[selectValue, setSelectValue] = useState("coconut");
    const[selectValue, setSelectValue] = useState(['coconut', 'mango']);

    
/*     const handleChange = (event) =>{
        setName(event.target.value);
        setText(event.target.value);
    } */

    const handleSubmit = (event) => {
        const data = {name, text, selectValue}
        console.log("data", data);

        event.preventDefault();
        setName("");
    }
    //textarea en HTML define texto por sus hijos, en REACT en cambio textarea define un atributo value en su lugar
    //select usa selected value en html en REACT solo value= en la etiqueta del select
    //Para múltiples selects <select multiple={true} value={['B', 'C']}>
    //input, textarea y select tags acepten un atributo value
    //<input type="file" /> escojer uno o varios archivos del dispositivo de almacenamiento para ser cargados al servior o ser manipulados por javascript mediante el API de archivos. Pero aplicable a componente no controlado.


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" onChange={(event)=> setName(event.target.value)} value={name}/>
            </div>
            <div>
                <label>
                    Essay:
                    <textarea onChange={(event)=> setText(event.target.value)} value={text}/>
                </label>
            </div>
            <div>
                {/* <select onChange={(event)=> setSelectValue(event.target.value)} value={selectValue}> */}
                <select onChange={(event)=> setSelectValue(event.target.value)} multiple={true} value={selectValue}>
                    <option value="grapeFruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                
                </select>
            </div>
            <input type="submit" value="submit"/>
        </form>
    );
}

export default NameForm;

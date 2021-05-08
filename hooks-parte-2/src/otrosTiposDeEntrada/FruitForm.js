import React, { useState } from 'react';

const fruits = [
    "Banana",
    "Pineapple",
    "Peach",
    "Apple",
    "Watermellow"
]


const FruitForm = () => {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false); //sino se hace click es false si le hace es true
    //selectedFruit => fruits[0] = "Banana"

    //si se pasa un valor en blanco, valor inicial debe ser un string vacío
    //const [selectedFruit, setSelectedFruit] = useState("");


    /* const onChangeSelect = (e) => {
        e.preventDefault();
        const value= e.target.value;
        setSelectedFruit(value)
    } */

    const onSubmitHandle = (e) => {
        e.preventDefault();
        console.log("The " + selectedFruit + " is "+(isTasty ? '': ' not') + ' tasty!');
    }

    //select inicia con valor predeterminado con selectedFruit
    //name : value
    return (
        <form onSubmit={onSubmitHandle}>
            <select value={selectedFruit} onChange={(e)=>setSelectedFruit(e.target.value)}>
                {fruits.map((fruit, index) => (
                    <option value={fruit} key={index}>{fruit}</option>
                ))}
            </select>
            <label>
                <input type="checkbox" checked={isTasty} onChange={(e)=>setIsTasty(e.target.checked)}/>
                Is it tasty?
            </label>
            <button>Take a bite!</button>
        </form>
    );
}

export default FruitForm;
//Formulario
//1. select tag
//2. checkbox tag

import React, {useState} from 'react';
//Manejando multiples inputs, agregando atributo name para cada uno de los elementos y tener una funcion controladora para el event.target.value 
const Reservation = (props) => {
    const[state, setState] = useState({
        isGoing: true,
        numberOfGuests: 2
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setState({
            [name]:value
        })
    }
    return (
        <form>
            <label>Is Going: </label>
            <input type="checkbox" name="isGoing" checked={state} onChange={handleInputChange}/>
            <br/>
            <label>Number of guests: </label>
            <input type="number" name="numberOfGuests" value={state} onChange={handleInputChange}/>
        </form>        
    );
}

export default Reservation;

//necesario para hooks
import React, {useState} from 'react';

const UseStateComponent = (props) => {
    //Cuando llamamos al useState este reninicializa el estado inicial.
    /* const [state, setState] = useState(
        {
            clickCount: 0
        }
    ) */
    //Otra manera
    //Pasandole 0 alrgumento, como valor primitivo;
    const [count, setState] = useState(0);

    //state para entrar al estado y setState para actualizar ese estado;    
    //setState() cambia/actualiza {clickcount: }
    /* const countClicked = () => {
        console.log(state);
        setState({
            clickCount: state.clickCount + 1
        });
    } */
     const countClicked = () => {
         setState(count + 1 );
     }
    return (
        <div className="useState">
            <button onClick={countClicked}>Hicistes click aqui {count} veces.</button>
            {/* Cada vez que se hace click se incrementa el clickCount */}
        </div>
    );
}

export default UseStateComponent;
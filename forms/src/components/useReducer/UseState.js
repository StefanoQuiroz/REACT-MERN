import React, {useState} from 'react';
//useReducer trabaja con components complejos y nested components
//useReducer nos permite administarr el estado y renderizar el componente cuando el estado cambia
//Es muy similar a redux
//variables globales en myusculas
const UseState = (props) => {
    //recibe como parametros(state actual, y el action el dispatch se va configurar con la variable action)
    /* const reducer = () => {

    } */
    //const [state, dispatch] = useReducer(reducer, {count:0});
    const [count, setCount] = useState(0);
    //const valor de retorno [] 2: (state osea el count: 0, dispatch lo que actualiza  nuestro estado )
    //useReducer tienes dos parametros: una funcion reducer=> obitiene un nuevo estado y dos, valores iniciales

    //methods
    const increment = (e) => {
        e.preventDefault();
        setCount( a => a+1);
    }
    const decrement = (e) => {
        e.preventDefault();
        setCount( a => a-1);
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            
           
        </div>
    );
}

export default UseState;

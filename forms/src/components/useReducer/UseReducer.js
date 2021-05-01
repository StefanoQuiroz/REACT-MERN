import React, {useState} from 'react';
//useReducer nos permite administarr el estado y renderizar el componente cuando el estado cambia
const UseReducer = (props) => {
    const [count, setCount] = useState(0);

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

export default UseReducer;

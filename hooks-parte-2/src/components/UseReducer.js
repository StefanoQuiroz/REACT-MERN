/* import React, {useState} from 'react';

const UseReducer = (props) => {
    const [currentState, setCurrentState] = useState({
        count: 0
    })
    
    const decrement = () => {
        setCurrentState({count: currentState.count-1})
    }

    const increment =() => {
        setCurrentState({count: currentState.count+1})
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{currentState.count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default UseReducer; */

import React, {useReducer} from 'react';

const reducer = (currentState, action)=>{
    switch(action.type){
        case 'increment':
            return ({count: currentState.count+1 });
        case 'decrement':
            return ({count: currentState.count-1 });
        default:
            return currentState;
    }
}

const UseReducer = (props) => {
    const [currentState, dispatch] = useReducer(reducer, {count:0})
    
    const increment = () => {
        dispatch({type: 'increment'})
    }

    const decrement = () => {
        dispatch({type: 'decrement'});
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{currentState.count}</span>
            <button onClick={increment}>+</button>            
        </div>
    );
}

export default UseReducer;


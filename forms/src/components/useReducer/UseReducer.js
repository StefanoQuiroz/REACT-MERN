import React, {useReducer} from 'react';
//Variable global con letras en mayuscula
//useReducer hook
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const UseReducer = (props) => {
    //const reducer(state actual, actions   .type)
    const reducer = (state, action) => {
        //switch para saber que action.tye sera 'increment' 'decrement'
        switch(action.type) {
            case ACTIONS.INCREMENT:
            //actualizamos el count sea increment o decrement con el state.count  
                return {count: state.count+1};
            case ACTIONS.DECREMENT:  
                return {count: state.count-1};
            //siempre colocar el valor por default
            default: 
                return state;
                //current state
        }
    }

    const [state, dispatch]=useReducer(reducer, {count : 0});
    //const[state que inicializa con el {count:0} y el dispatch que se configurarar con los actions de const reducer(state,actions)
    const increment = () => {
        //dispatch ({type: action})
        dispatch({type: ACTIONS.INCREMENT});
    }
    
    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT});
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default UseReducer;

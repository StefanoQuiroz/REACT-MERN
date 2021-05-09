import React from 'react';
import Counter from './Counter';

//initialValue y render son tratatdos como accesorios ={}
//onClick={increment} invoca a su funcion increment en Counter.js
export default () => {
    <Counter
        initialValue={5}
        render={({count, increment})=>(
            <>
                <h2>The Count is currently {count} !</h2>
                <button onClick={increment}>Add One</button>
            </>
        )}
    />
}
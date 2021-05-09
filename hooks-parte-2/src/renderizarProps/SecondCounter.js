import React from 'react';

import Counter from './Counter';

export default () => {
    <Counter
        initialValue={10}
        render={({count, increment, decrement})=>(
            /* <> Fragments </>  */
            <>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>Current Count:  {count}</p>
            </>
        )}
    />
}
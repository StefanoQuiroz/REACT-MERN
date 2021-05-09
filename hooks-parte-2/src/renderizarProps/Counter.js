import React, {useState} from 'react';

export default ({initialValue = 0 , render}) => {
    const [count,setCount] = useState(initialValue);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    return render({count, increment, decrement})

}
import React, {useState} from 'react';

const PuttingTogetherFunc = (props) => {
    const {firstName, lastName, age: edadInicial, hairColor} = props;
    const [age, setAge] = useState(edadInicial);

    const buttonClick =() => {
        setAge((a) => a+1);
    };
    return (
        <div className="person-cards">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={buttonClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default PuttingTogetherFunc;

import React from 'react';

const MyComponent = (props) => {
    //se proporcioa el evento como argumento para alertar que pe´lícula será
    //funcion de devolucion de llamada
    /* const onClickHandler = () => {
        alert("You have clicked the button");
    } */
    const onClickHandler = (e, value) => {
        alert(value);
    }
    const {movies} = props
    //item cada elem del [ ] en App.js
    return movies.map((item, index)=>{
        return <button key={index} onClick={e=>onClickHandler(e,item)}>{item}</button>
    })
}

export default MyComponent;

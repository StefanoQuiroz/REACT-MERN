import React from 'react';
import Style from '../scss/styles.module.scss'

const Form = () => {
    const clickButton = (e)=>{e.preventDefault(); e.target.innerText='Hizo click aqui'; console.log({event:e})};
    return (
        <form className={Style.eventForm}>
            <input type="text" placeholder="Correo"/>
            <input type="email" placeholder="e-mail"/>
            <button onClick={clickButton}>login</button>
        </form>
    );
}

export default Form;

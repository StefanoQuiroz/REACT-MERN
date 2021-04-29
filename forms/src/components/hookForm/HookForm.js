import React from 'react';

const HookForm = (props) => {
    const {inputs, setInputs} = props;

     //onchange={} toma el valor y lo inserta en la pagina actual
    const onChangeClick = (event) => {
        const name = event.target.name;//simula la propiedad key
        const value = event.target.value;
        setInputs({
            //trae todo el objeto useState de app.js
            ...inputs,
            [name]:value
        })
    }
    //el key es el name (tiene que ser igual al state del apps.js) y el value el input data
    return (
        <form>
            <h2>Form Register</h2>
            <div className="row">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={onChangeClick}/>
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={onChangeClick}/>
            </div>
            <div className="row">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={onChangeClick}/>
            </div>
            <div className="row">
                <label htmlFor="pass">Password: </label>
                <input type="password" name="pass" onChange={onChangeClick}/>
            </div>
            <div className="row">
                <label htmlFor="confirmPass">Confirm Password: </label>
                <input type="password" name="confirmPass" onChange={onChangeClick}/>
            </div>
        </form>
    )
}

export default HookForm;


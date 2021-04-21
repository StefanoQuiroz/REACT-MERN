import React, { Component } from 'react';

class LightSwitch extends Component {
    constructor(props){//permite crear un atributo
        super(props);
        this.state={
            //state siempre en objeto para que sea inmutable
            //Key para saber si esta prendido o apagado
            position: "on"
        };
    }
    flipSwitch = () =>{
        if( this.state.position === "on"){
            this.setState({position: "off"})
        }else {
            this.setState({position: "on"})
        }
    }

    render(){
        return (
            //{el estado actual}
            <fieldset>
                <p>The Light is currently {this.state.position}</p>
                {/* Para cambiar el boton de la luz */}
                {/* React quiere que tratemos el estado como inmutable -> this.setState()  */}
                {/* <button onClick={ ()=>{this.setState({position: "off"})} }>Flip Switch</button> */}
                {/* lo cambia a off pero requerimos que se prenda y apague -> creamos una función */}
                <button onClick={ ()=>{this.flipSwitch()}}>Flip Switch </button>
            </fieldset>
        )
    }
}

export default LightSwitch;
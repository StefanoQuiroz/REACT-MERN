import React, { Component } from 'react';

class LightSwitch extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: "on"
        }
    }

    flipSwitch = () => {
        if(this.state.position === "on"){
            this.setState({position: "off"})
        } else {
            this.setState({position: "on"})
        }
    }

    render = () => {
        return(
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                {/* en el parametro del setState (incluye un objeto en el que cambia el valor del key!!!) */}
                <button onClick={ ()=>{this.flipSwitch()} }>Flip Switch</button>
            </fieldset>
        )
    }
}

export default LightSwitch;
import React, { Component } from 'react'

class LightSwitch2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: "on"
        };
    }
    flipSwitch =() => {
        if(this.state.position === "on"){
            this.setState({position: "off"})
        } else {
            this.setState({position: "on"})
        }
    }

    render(){
        return (
            <fieldset>
                <p>The Light is currently {this.state.position}</p>
                <button onClick={ () => this.flipSwitch() }>Flip Switch</button>               
            </fieldset>
        )
    }
}

export default LightSwitch2;
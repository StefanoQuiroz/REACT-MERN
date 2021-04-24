import React, { Component } from 'react';

class PuttingTogether extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    //function func() {} = > const func = () => { }
    buttonClick = () => {
        //this.props.age +1 aumento en 1 el age
        //this.state.age aumentare cada vez que hago click, en + 1
        //Como es this.props.age accedo con el this.state.age
        // si fuera definida seria como el ejemplo del LightSwitch
        this.setState({ age: this.state.age + 1})
    }


    render = () =>{
        const { lastName, firstName, hairColor }=this.props;
        return (
            <div className="person-cards">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>  {/* edad actual */}
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.buttonClick}>Birthday Button for {firstName} {lastName}</button>
                {<button onClick={ ()=>{this.buttonClick()}}>Birthday Button for {firstName} {lastName}</button> }
            </div>
        )
    }
}

export default PuttingTogether;
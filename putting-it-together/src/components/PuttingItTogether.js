import React, { Component } from 'react'
// 
class PuttingItTogether extends Component {
    constructor(props) {
        super(props);
        this.state={
            age: this.props.age
        }
    }

    updateAge = () =>{
        this.setState({
            age: this.state.age + 1
        })
    }
    
    
    render(){
        const { lastName, firstName,hairColor} = this.props;         
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>hair Color: {hairColor}</p>
                <button onClick={ () => {this.updateAge()}} >BirthDay Button for {firstName}</button>
            </div>

        )
    }
}

export default PuttingItTogether;
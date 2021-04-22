import React, { Component } from 'react';

class PersonCard extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={()=>{alert("You click me")}}>Haz click</button>
                {this.props.children}
            </div>
        )
    }
}

export default PersonCard;
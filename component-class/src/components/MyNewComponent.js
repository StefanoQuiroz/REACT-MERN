import React, { Component } from 'react';
//Component -> App.js
class MyNewComponent extends Component {
    render(){
        //destructurar para oder usar como variables firstName and LastName
        const { firstName, lastName, children } = this.props;
        return (
            <div>
                {/* This is our first class component from components folder. */}
                {/* <h1>My name is {this.props.firstName} <- ACCESORIOS ->{this.props.lastName}</h1> */}
                <h1>My name is {firstName} {lastName}</h1>
                {/* Para envolver contenidoJSX y luego anidar hijos */}
                { children }
            </div>
        );
    }
}

export default MyNewComponent;
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      /*
      <div>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
      </div>
      */
      //ising attribute className only in JSX
      //<h1 class="my-class">This is Html and JSX</h1>
      <form action="/process" method="post">
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" className="form-control"/>
          <br/>
          <label htmlFor="name">Name User: </label>
          <input type="text" id="name" name="name" className="form-control"/>
        </div>
      </form>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
     
    </div>
  );
}
*/
export default App;

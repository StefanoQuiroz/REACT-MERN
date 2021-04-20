import React, { Component} from 'react';
class FirstJsx extends Component {
  render(){
    return (
      <div className="container">
        <h1>Hello Dojo!</h1>
        <p>Things I need to do:</p>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a Marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
    )
  }
}

export default FirstJsx;

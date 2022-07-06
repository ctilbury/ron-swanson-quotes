import React, { Component } from "react";
import "./MyComponent.css";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { myArray: [] };
  }

  render() {
    return (
      <div className='MyComponent'>
        <h1>Hello World</h1>
      </div>
    );
  }
}
export default MyComponent;

import React from 'react';
import "./index.css"

class Content extends React.Component {
  render(name) {
    //takes 'name' value from 'Card' and displays content
    return (
      <div className="text">
        <h1>Hello there!</h1>
        <h3>Portfolio 1</h3>
        <p>This is React App created by {this.props.myName} </p>
      </div>
    );
  }
}

export default Content;